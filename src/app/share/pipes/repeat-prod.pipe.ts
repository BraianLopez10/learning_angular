import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/product.model';

interface ProductFinal {
  id: string,
  title: string,
  image: string,
  price: number,
  cant: number
}
@Pipe({
  name: 'repeatProd'
})
export class RepeatProdPipe implements PipeTransform {

  transform(productos: Product[]): any {

    let productoForOrder: ProductFinal[] = []
    productos.find((prod) => {
      let resIndex = productoForOrder.findIndex(pr => pr.id === prod.id)

      if (resIndex === -1) {
        productoForOrder.push({
          ...prod,
          cant: 1
        })
      } else {
        productoForOrder[resIndex].cant = productoForOrder[resIndex].cant + 1;
        productoForOrder[resIndex].price = productoForOrder[resIndex].price + productoForOrder[resIndex].price
      }

    })

    return productoForOrder;
  }

}
