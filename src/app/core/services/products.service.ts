import { Injectable } from '@angular/core';
import { Product } from '../../product.model'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  /**
   * Lista todos los productos de nuestra API
   */
  getAllProducts() {
    return this.http.get<Product[]>(`${environment.urlApi}/products`)
  }
  /**
   * Obtiene un producto
   * @param id Identificador del producto a buscar
   */
  getProduct(id: String) {
    return this.http.get<Product>(`${environment.urlApi}/products/${id}`)
  }
  /**
   * Crea un producto
   * @param product Producto que va a ser creado
   */
  createProduct(product: Product) {
    return this.http.post(`${environment.urlApi}/products`, product)
  }
  /**
   * Elimina un producto de la base de datos
   * @param id Identificador del producto a eliminar
   */
  deleteProd(id: string) {
    return this.http.delete(`${environment.urlApi}/products/${id}`)
  }
  updateProduct(product: Partial<Product>, id: string) {
    return this.http.put(`${environment.urlApi}/products/${id}`, product)
  }
}