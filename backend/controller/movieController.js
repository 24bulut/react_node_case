import ImdbApiService from "../service/imdbApiService.js"

export const searchMovie = async (req, res) => {
    const keyword = req.query.keyword;
    if (!keyword || keyword.trim() === '') {
        return res.status(400).json({ error: 'Keyword query parameter is required' });
    }
    let imdbApiService = new ImdbApiService();
    let data = await imdbApiService.getMovies(keyword)
    return res.json(data)
};
  

export const clearCache = async (req, res) => {
    let imdbApiService = new ImdbApiService();
    imdbApiService.clearCache();
    return res.status(204).json([])
};