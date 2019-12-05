import { Pipe, PipeTransform } from '@angular/core';
import { IEmployee } from './iemployee';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(value: IEmployee[], searchString: string): any[] {
    if(!value) return [];
    if(!searchString) return value;
    searchString = searchString.toLowerCase();
    return value.filter( it => {
      return it.names.toLowerCase().substring(0,searchString.length) === searchString;
    } );
  }
}