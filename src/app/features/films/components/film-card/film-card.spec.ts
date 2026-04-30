import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCardComponent } from './film-card';

describe('FilmCardComponent', () => {
  let component: FilmCardComponent;
  let fixture: ComponentFixture<FilmCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmCardComponent);
    fixture.componentRef.setInput('film', {
      id: 'test',
      title: 'Test Film',
      year: 2026,
      genre: 'Drama',
      rating: 8,
      duration: 90,
      description: 'Test description',
      poster: 'test.jpg',
      isFavorite: false,
    });
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
