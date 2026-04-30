import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationPipe',
  pure: true
})
export class DurationPipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;

    if (hours && minutes) {
      return `${hours}h ${minutes}min`;
    }

    if (hours) {
      return `${hours}h`;
    }

    return `${minutes}min`;
  }
}
