import { Pipe, PipeTransform } from '@angular/core';
import { min } from 'rxjs';
@Pipe({
  name: 'pricefilter'
})
export class PricefilterPipe implements PipeTransform {

  transform(products: any, minvalue: number, maxvalue:number): any {
    return products.filter((x:any)=>((x.price)<=maxvalue && (x.price)>=minvalue))
  }
}
