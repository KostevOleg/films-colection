import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FilmsService } from '../../../../core/services/films-service';
import { FilmCardComponent } from '../../components/film-card/film-card';
import { RouterLink } from "@angular/router";
import { PaginationComponent } from '../../../../shared/components/pagination/pagination';
import { FilmFiltersComponent } from '../../components/film-filters/film-filters';


@Component({
  selector: 'app-film-list',
  imports: [FilmCardComponent, RouterLink, PaginationComponent, FilmFiltersComponent],
  templateUrl: './film-list.html',
  styleUrl: './film-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmListComponent {
  searchQuery = signal('');
  showOnlyfavorites = signal(false)
  selectedGenre = signal('')
  pageSize =  signal(10)
  currentPage = signal(1)

  filmService= inject(FilmsService);

  private readonly films = this.filmService.films;
  readonly genres = this.filmService.genres()

  readonly filteredFilms = computed(() => {
    const films = this.films();
    const searchQuery = this.searchQuery().toLowerCase().trim();
    const currentGenre = this.selectedGenre();
    const onlyFavorite = this.showOnlyfavorites();

    return films.filter((film) => {
      const matchesTitle = film.title.toLowerCase().includes(searchQuery);
      const matchesGenre = !currentGenre || film.genre === currentGenre;
      const matchesFavorite = !onlyFavorite || film.isFavorite;

      return matchesTitle && matchesGenre && matchesFavorite;
    });
  });

  totalPages = computed(()=>{
    return Math.ceil(this.filteredFilms().length / this.pageSize())
  })

  readonly paginatedFilms = computed(()=>{
    const start = (this.currentPage() - 1) * this.pageSize();
    const end = start + this.pageSize();

    return this.filteredFilms().slice(start, end);
  })

  onSearchChange(value: string): void{
    this.searchQuery.set(value)
    this.currentPage.set(1)
  }

  onGenreChange(value: string):void{
    this.selectedGenre.set(value)
    this.currentPage.set(1)
  }

  onFavoriteChange(value: boolean): void {
    this.showOnlyfavorites.set(value)
    this.currentPage.set(1)
  }

  onAddFavorite(id: string): void{
      this.filmService.toggleFavoriteFilm(id)
  }
  onPageChange(page:number): void{
    this.currentPage.set(page)
  }
}
