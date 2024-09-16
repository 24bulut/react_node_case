import express from 'express';
import {searchMovie} from '../controller/movieController.js'

const router = express.Router();

router.get('/api/search', searchMovie);


export default router;
