import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typefilter'
})
export class TypefilterPipe implements PipeTransform {

  transform(feedbacks: any, type: string): any {
    if(type=="All")
       return feedbacks;

    return feedbacks.filter((x:any)=>x.type == type)
  }

}