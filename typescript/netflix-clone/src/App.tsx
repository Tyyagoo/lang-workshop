import React, { useState, useEffect } from 'react';
import API_DATA from './Api/tmdb';
import './App.css';
import Featured from './Components/Featured';
import Footer from './Components/Footer';
import Header from './Components/Header';
import MovieList from './Components/MovieList';
import Category from './Types/Category';
import Movie from './Types/Movie';

function App() {

  const [movieList, setMovieList] = useState<Category[]>();
  const [featuredMovie, setFeaturedMovie] = useState<Movie | null>(null);
  const [transparentHeader, setHeaderTransparency] = useState(true);
  
  useEffect(() => {
    const load = async () => {
        let data = await API_DATA.getHomeList();
        let movieList = data.map((value): Category => {
          let category: Category = {
            slug: value.slug,
            title: value.title,
            items: value.items.results,
          }

          return category;
        })

        let originals: Category = movieList.filter(c => c.slug === 'originals')[0];
        let index = Math.floor(Math.random() * (originals.items.length - 1));
        let featured: Movie = await API_DATA.getMovieInfo(originals.items[index].id!, 'tv');

        setMovieList(movieList);
        setFeaturedMovie(featured);
    };

    load();
  }, []);

  useEffect(() => {
    const scrollListener= () => {
      if (window.scrollY > 30) {
        setHeaderTransparency(false);
      } else {
        setHeaderTransparency(true);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <div className="App">
      <Header transparency={transparentHeader}/>

      {featuredMovie && 
        <Featured movie={featuredMovie}/>
      }

      <section className="lists">
        {movieList?.map((value, index) => <MovieList key={index.toString()} content={value}/>)}
      </section>

      <Footer />
      
      {movieList == null && 
        <div className="loading">
          <img src="https://assets.wired.com/photos/w_2000/wp-content/uploads/2016/01/Netflix_LoadTime.gif" alt="loading"/>
        </div>
      }
      
    </div>
  );
}

export default App;
