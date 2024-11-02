const key = process.env.API_KEY;


export const orginal=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&without_genres=16&api_key=${key}`;
export const action=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749&api_key=${key}`
export const crime=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc&with_genres=80'&api_key=${key}`
export const war=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=10752&api_key=${key}`;
export const animation=`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16&api_key=${key}`;
export const requestPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`