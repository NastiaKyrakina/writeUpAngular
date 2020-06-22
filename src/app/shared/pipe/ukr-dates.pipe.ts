import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ukrDates'
})
export class UkrDatesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
