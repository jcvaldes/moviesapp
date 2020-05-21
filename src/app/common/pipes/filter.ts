import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], searchTerm: string, field: string): any[] {
    const fieldFilter = field;
    if (!value || !searchTerm) {
      return value;
    }
    return value.filter(item => {
      return item[fieldFilter].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    });
  }
}
