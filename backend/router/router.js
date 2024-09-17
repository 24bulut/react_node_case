import express from 'express';
import {searchMovie, clearCache} from '../controller/movieController.js'

const router = express.Router();

router.get('/api/search', searchMovie);
router.get('/api/clear', clearCache);

export default router;
