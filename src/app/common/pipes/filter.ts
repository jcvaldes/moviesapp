import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], searchTerm: string, fields: string): any[] {
    const fieldsFilter = fields.split(',');
    if (!value || !searchTerm) {
      return value;
    }
    return value.filter(item => {
      return item[fieldsFilter[0]].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || item[fieldsFilter[1]].toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    });
  }
}
