import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditNumber'
})
export class CreditNumberPipe implements PipeTransform {

  transform(value:string) {
    let format=[];
    for(let i=0;i<value.length;i+=4){
      format.push(value.slice(i,i+4));
    }
    return format.join('-')
  }
}
