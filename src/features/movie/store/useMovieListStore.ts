import { create } from "zustand";
import type { MovieListState } from "../types";


const useMovieListStore = create<MovieListState>((set)=>({
    movies: [],
}))

export default useMovieListStore;