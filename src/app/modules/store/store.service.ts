import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private url = 'https://fakestoreapi.com';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<string[]>(`${this.url}/products/categories`);
  }

  getProducts(limit = 5) {
    return this.http.get<any[]>(`${this.url}/products?limit=${limit}`);
  }

  getProductCategory(category: string) {
    return this.http.get<any[]>(`${this.url}/products/category/${category}`);
  }

  getProductDetails(id:string) {
    return this.http.get<any>(`${this.url}/products/${id}`);
  }
}
