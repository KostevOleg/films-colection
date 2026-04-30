import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmFiltersComponent } from './film-filters';

describe('FilmFiltersComponent', () => {
  let component: FilmFiltersComponent;
  let fixture: ComponentFixture<FilmFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmFiltersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmFiltersComponent);
    fixture.componentRef.setInput('searchQuery', '');
    fixture.componentRef.setInput('showOnlyFavorites', false);
    fixture.componentRef.setInput('selectedGenre', '');
    fixture.componentRef.setInput('genres', ['Drama']);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
