import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'myNgMarquee'
})
export class MarqueePipe implements PipeTransform {
  transform(value) {
    return `${value}...TESTING PIPE`;
  }
}
