import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
import { FilmsService } from '../../../../core/services/films-service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { DurationPipe } from '../../../../shared/pipes/duration-pipe';


@Component({
  selector: 'app-film-details',
  imports: [RouterLink, DurationPipe],
  templateUrl: './film-details.html',
  styleUrl: './film-details.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmDetailsComponent{
  private readonly filmService = inject(FilmsService);
  private readonly route = inject(ActivatedRoute)
  private readonly paramMap = toSignal(this.route.paramMap);
  readonly film = computed(()=>{
    const id = this.paramMap()?.get('id')
    return id ? this.filmService.getFilmById(id) : undefined
  })

  addFavorite(id:string):void{
    this.filmService.toggleFavoriteFilm(id)
  }

}
