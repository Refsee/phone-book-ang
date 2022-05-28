import { Pipe, PipeTransform } from '@angular/core';
import { IPerson } from '../interfaces';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(arr: Array<any>, collum: string, sortOrder?: any): Array<IPerson> {
    if (!arr) return [];
    if (!collum) return arr;
    const sorted = arr.sort((a, b) =>
      a[collum] > b[collum] ? 1 : a[collum] < b[collum] ? -1 : 0
    );
    return sortOrder == true ? sorted : sorted.reverse();
  }
}
