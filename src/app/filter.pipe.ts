import { Pipe, PipeTransform } from '@angular/core';
import { Iemployee } from './iemployee';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Iemployee[], searchString: string): any[] {
    if(!value) return [];
    if(!searchString) return value;
    searchString = searchString.toLowerCase();
    return value.filter( it => {
      return it.names.toLowerCase().includes(searchString);
    } );
  }

}