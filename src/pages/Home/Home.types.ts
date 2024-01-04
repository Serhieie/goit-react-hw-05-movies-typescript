export interface Movie {
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title?: string | undefined;
  vote_average?: number | undefined;
  name?: string | null;
  genres?: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}
