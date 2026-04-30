import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmFilters } from './film-filters';

describe('FilmFilters', () => {
  let component: FilmFilters;
  let fixture: ComponentFixture<FilmFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
