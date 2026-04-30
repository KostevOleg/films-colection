import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header';
import { BreadcrumsComponent } from './shared/components/breadcrums/breadcrums';
import { FooterComponent } from './shared/components/footer/footer';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,BreadcrumsComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  protected readonly title = signal('run-into');
}
