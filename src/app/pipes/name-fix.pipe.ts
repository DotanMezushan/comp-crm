import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFix'
})
export class NameFixPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.trim().replace(/[^a-zA-Z^/s]/g,'')
  }

}
