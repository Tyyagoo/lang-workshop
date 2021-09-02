import Movie from "../../Types/Movie";
import './index.css';
import { getFullMovieName, getOriginalIdentifier } from "../../Utils/utils";

interface FeaturedProps {
    movie: Movie;
}

const Featured: React.FC<FeaturedProps> = ({ movie }) => {
    let date = new Date(movie.first_air_date!);

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{getFullMovieName(getOriginalIdentifier(movie))}</div>
                    <div className="featured--info">
                        <div className="featured--points">{movie.vote_average} pontos</div>
                        <div className="featured--year">{date.getFullYear()}</div>
                        <div className="featured--seasons">{movie.number_of_seasons} temporada{movie.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className="featured--description">{movie.overview}</div>
                    <div className="featured--buttons">
                        <a href={`/watch/${movie.id}`} className="featured--watchbutton" draggable="false">► Assistir</a>
                        <a href={`/list/add/${movie.id}`} className="featured--listadd" draggable="false">+ Minha Lista</a>
                    </div>
                    <div className="featured--genres"><b>Gêneros:</b> {movie.genres?.map((value) => value.name).join(', ')}</div>
                </div>
            </div>
        </section>
    )
}

export default Featured;