import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typefilter'
})
export class TypefilterPipe implements PipeTransform {

  transform(productlist: any, type: string): any {
    if(type=="All")
       return productlist;

    return productlist.filter((x:any)=>x.type == type)
  }

}