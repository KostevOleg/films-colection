import { Component, input, output} from '@angular/core';
import { FilmInterface } from '../../../../core/models/film-interface';
import { DurationPipe } from '../../../../shared/pipes/duration-pipe';

@Component({
  selector: 'app-film-card',
  imports: [DurationPipe],
  templateUrl: './film-card.html',
  styleUrl: './film-card.scss',
})
export class FilmCardComponent {
  film = input.required<FilmInterface>()
  favoriteToggle = output<string>()
  addFavorite(id: string){
    this.favoriteToggle.emit(id)
  }
}
