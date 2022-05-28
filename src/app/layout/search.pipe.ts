import { Pipe, PipeTransform } from '@angular/core';
import { IPerson } from '../interfaces';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(arr: Array<any>, field: string): Array<IPerson> {
    if (!arr) return [];
    if (!field) return arr;
    return arr.filter((person) => {
      for (let key in person) {
        if (person[key].toLowerCase().includes(field.toLowerCase())) {
          return person;
        }
      }
    });
  }
}
