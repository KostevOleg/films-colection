import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { BreadcrumsInteface } from '../../../core/models/breadcrums-interface';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith  } from 'rxjs';
import { FilmsService } from '../../../core/services/films-service';

@Component({
  selector: 'app-breadcrums',
  imports: [RouterLink],
  templateUrl: './breadcrums.html',
  standalone: true,
  styleUrl: './breadcrums.scss',
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumsComponent {
  private readonly router = inject(Router);
  private readonly filmService  = inject(FilmsService);
  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((ev) : ev is NavigationEnd => ev instanceof NavigationEnd ),
      map((event)=> event.urlAfterRedirects),
      startWith(this.router.url)
    ),
    {initialValue: this.router.url}
  )
  readonly breadcrumbs = computed<BreadcrumsInteface[]>(() => {
    const url = this.currentUrl();

    if (url === '/') {
      return [{ label: 'Home' }];
    }

    if (url === '/about') {
      return [
        { label: 'Home', link: '/' },
        { label: 'About' },
      ];
    }

    if (url.startsWith('/film/')) {
      const id = url.split('/')[2]
      const film = this.filmService.getFilmById(id)
      return [
        { label: 'Home', link: '/' },
        { label: film?.title ?? 'film' },
      ];
    }

    return [{ label: 'Home', link: '/' }];
});
}
