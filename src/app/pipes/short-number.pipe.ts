import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shortNumber'
})
export class ShortNumberPipe implements PipeTransform {
    transform(number: number, args?: any): any {
        if(number == 0) {
            return 0;
        }
        else
        {        
          // hundreds
          if(number <= 999){
            return number ;
          }
          // thousands
          else if(number >= 10000){
            return (number / 1000) + 'k';
          }
         
          else
            return number ;
          }
    }
}