import { computed, Injectable, signal } from "@angular/core";
import { FILMS } from "../data/films-mock";
import { FilmInterface } from "../models/film-interface";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  private readonly _films = signal<FilmInterface[]>(FILMS);
  readonly films = this._films.asReadonly();
  readonly faivoriteFilms = computed(()=> this._films().filter(film=> film.isFavorite))
  readonly genres = computed(()=> Array.from(new Set(this._films().map((film) => film.genre))))
  getFilmById(id:string) : FilmInterface | undefined{
    return this._films().find((el)=> el.id === id)
  };

  toggleFavoriteFilm(id: string){
    this._films.update((films)=>  films.map(film => film.id === id ? {... film, isFavorite: !film.isFavorite} : film ))
  }
}
