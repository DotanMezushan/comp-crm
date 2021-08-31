import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameSuffix'
})
export class NameSuffixPipe implements PipeTransform {

  transform(value: string, args: boolean): string {
    const MR:string = "MR";
    const Miss:string = "Miss";

    return `${args? MR : Miss } ${value} `;
  }

}
