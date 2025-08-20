export type Movie = {
  title: string,
  genre:string,
  releaseAt: string,
  director:string,
  explan?: string
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