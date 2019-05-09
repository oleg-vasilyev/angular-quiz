import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLetterPointer'
})
export class ToLetterPointerPipe implements PipeTransform {

  transform(value: number): string {
    const output = String.fromCharCode(97 + value) + ':';
    return output;
  }

}
