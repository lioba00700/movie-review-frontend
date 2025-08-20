export interface Movie {
  title: string,
  genre:string,
  releaseAt: string,
  director:string,
  explan?: string
}

export interface MovieListState {
  movies: Movie[] | [],

}

export type MovieAction = 
  | {type: "CHAGNE", payload:{key:string, value: string}}
  | {type: "RESET"};

export type MovieCreateState = {
  title: string,
  genre: string,
  releaseAt: string,
  director: string
}