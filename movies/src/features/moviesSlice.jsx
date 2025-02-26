import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Example async function for fetching movies
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  const data = await response.json();
  return data.results; // This should be an array of movies
});

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieList: [], // Initializing movieList as an empty array
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movieList = action.payload; // This should update the movieList with the API response
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
