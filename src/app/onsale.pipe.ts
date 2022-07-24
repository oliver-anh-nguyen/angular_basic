import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onsale'
})
export class OnsalePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    console.log('my pipe', value);
    if (value) {
      return 'Sale Off!';
    }
    return '';
  }

}
