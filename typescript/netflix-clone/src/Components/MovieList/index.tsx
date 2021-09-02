import React, { useState } from 'react'
import './index.css';
import Category from '../../Types/Category';
import { getOriginalIdentifier } from '../../Utils/utils';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w300'

interface MovieListProps {
    content: Category;
}

const MovieList: React.FC<MovieListProps> = ({ content }) => {
    const [scrollX, setScrollX] = useState(-400);
    const scrollVelocity = Math.round(window.innerWidth / 2);

    const handleLeftArrow = (): void => {
        let x = scrollX + scrollVelocity;
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    };

    const handleRigthArrow = (): void => {
        let x = scrollX - scrollVelocity;
        let listWidth = content.items.length * 150;
        if (window.innerWidth - listWidth > x) {
            x = (window.innerWidth - listWidth) - 60;
        }
        setScrollX(x);
    }


    return (
        <div className="movieList">
            <h2>{content.title}</h2>

            <div className="movieList--before" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}}/>
            </div>
            <div className="movieList--after" onClick={handleRigthArrow}>
                <NavigateNextIcon style={{fontSize: 50}}/>
            </div>

            <div className="movieList--listarea">
                <div className="movieList--list" style={{
                    marginLeft: scrollX,
                    width: content.items.length * 150,
                }}>
                    {content.items.length > 0 && content.items.map((item, key) => {
                        let title = getOriginalIdentifier(item);
                        return (
                        <div key={key} className="movieList--item">
                            <img key={key}
                            src={IMG_BASE_URL + item.poster_path}
                            alt={title + " Banner"}
                            draggable="false"
                            />
                        </div>
                    )})}
                </div>
            </div>
        </div>
    )
}

export default MovieList;
