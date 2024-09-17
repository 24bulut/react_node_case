import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const searchMovies = createAsyncThunk(
    'movies/searchMovies',
    async (searchKeyword, { rejectWithValue }) => {
      try {
        if (!searchKeyword.trim()) {
          return [];
        }
        const response = await fetch(`http://localhost:3010/api/search?keyword=${encodeURIComponent(searchKeyword)}`);
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching movies:', error);
        return rejectWithValue(error.message);
      }
    }
  );

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    searchKeyword: '',
    status: 'idle',
    error: null,
  },
  reducers: {
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchMovies.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload;
        state.error = null;
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { setSearchKeyword } = movieSlice.actions;
export default movieSlice.reducer;
