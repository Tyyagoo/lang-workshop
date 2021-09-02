import Genre from "./Genre";

interface MovieInterface {
    adult?: boolean;
    genres?: Genre[];
    id?: number;
    imdb_id?: number;
    overview?: string | null;
    popularity?: string | null;
    release_date?: string;
    title?: string;
    original_title?: string;
    name?: string;
    original_name?: string;
    vote_average?: number;
    vote_count?: number;
    poster_path?: string;
    backdrop_path?: string;
    number_of_seasons?: number;
    first_air_date?: string;
}

type Movie = MovieInterface;
export default Movie;