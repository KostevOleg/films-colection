import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { AutofocusDirective } from '../../../../shared/directives/autofocus';

@Component({
  selector: 'app-film-filters',
  imports: [AutofocusDirective],
  templateUrl: './film-filters.html',
  styleUrl: './film-filters.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmFiltersComponent {

  searchQuery = input.required<string>();
  showOnlyFavorites = input.required<boolean>();
  selectedGenre = input.required<string>();
  genres = input.required<string[]>();

  searchChange = output<string>();
  favoriteChange = output<boolean>();
  genreChange = output<string>();
}
