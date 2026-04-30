import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent {
  currentPage = input.required<number>();
  totalPages = input.required<number>();
  newPage = output<number>()
  goToNewPage(page: number){
    this.newPage.emit(page)
  }
}
