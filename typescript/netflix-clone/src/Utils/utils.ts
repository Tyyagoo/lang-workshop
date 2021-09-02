import Movie from "../Types/Movie";

const getOriginalIdentifier = (movie: Movie): [string, string] => {
    if (movie.original_title !== undefined && movie.title !== undefined) {
        return [movie.original_title, movie.title];
    }

    if (movie.original_name !== undefined && movie.name !== undefined) {
        return [movie.original_name, movie.name];
    }

    return ["Unknown", "Desconhecido"];
}

const getFullMovieName = ([original, translated]: [string, string]): string => {
    return original === translated ? original : `${original} (${translated})`;
}

export { getOriginalIdentifier, getFullMovieName };