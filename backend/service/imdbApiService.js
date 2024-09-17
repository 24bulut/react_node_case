import axios from 'axios'
import NodeCache from 'node-cache';
import 'dotenv/config';  
const cache = new NodeCache({ stdTTL: 30 });

class ImdbApiService {
    API_URL = 'http://www.omdbapi.com/?apikey=' + process.env.API_KEY;

    constructor() {
        
    }

    getMovies = async (keyword) =>{
        const cachedResults = cache.get(keyword);
        if (cachedResults) {
            console.log('source : cache');
            return cachedResults;
        }


        try {
            const [firstResults, secondResults] = await Promise.all([
              this.fetchMovieList(keyword, 1),
              this.fetchMovieList(keyword, 2)
            ]);
        
            const finalResults = [...firstResults, ...secondResults];

            cache.set(keyword, finalResults);
            return finalResults;
        
        } catch (error) {
            throw new Error("An error occurred while fetching the movie list");
        }

    }
    
    clearCache = () =>{
        cache.flushAll();
        console.log('cache has been cleaned.');
    }

    fetchMovieList = async (keyword, page) => {
        console.log(`${this.API_URL}&s=${keyword}&page=${page}`);
        
        const response = await axios.get(`${this.API_URL}&s=${keyword}&page=${page}`);
        return response.data.Search;
    };
}


export default ImdbApiService