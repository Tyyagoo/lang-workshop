const API_KEY = `api_key=${process.env.REACT_APP_API_KEY}`;
const API_BASE_URL = 'https://api.themoviedb.org/3';
const SELECTED_LANGUAGE = 'language=pt-BR'

const fetchData = async (endpoint: string, ...params: string[]) => {
    const req = await fetch(`${API_BASE_URL}${endpoint}?${params.join('&')}`);
    return await req.json();
};

const API_DATA = {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await fetchData('/discover/tv', SELECTED_LANGUAGE, 'with_network=213', API_KEY),
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await fetchData('/trending/all/week', SELECTED_LANGUAGE, API_KEY),
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await fetchData('/movie/top_rated', SELECTED_LANGUAGE, API_KEY),
            },
            {
                slug: 'Action',
                title: 'Ação',
                items: await fetchData('/discover/movie', SELECTED_LANGUAGE, 'with_genres=28', API_KEY),
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await fetchData('/discover/movie', SELECTED_LANGUAGE, 'with_genres=35', API_KEY),
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await fetchData('/discover/movie', SELECTED_LANGUAGE, 'with_genres=27', API_KEY),
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await fetchData('/discover/movie', SELECTED_LANGUAGE, 'with_genres=10749', API_KEY),
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await fetchData('/discover/movie', SELECTED_LANGUAGE, 'with_genres=99', API_KEY),
            }
        ]
    },
    getMovieInfo: async (movieId: number, type: 'movie' | 'tv') => {
        return await fetchData(`/${type}/${movieId}`, SELECTED_LANGUAGE, API_KEY);
    }
};

export default API_DATA;