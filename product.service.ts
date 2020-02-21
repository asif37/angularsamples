import { Product } from '../model/product';
import { Category } from '../model/category';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { httpCaller } from './sharedServices/httpCaller.service';
import { httpType } from '../shared/enums/enums';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  products: Product[];
  categories: Category[];
 constructor(private httpCaller: httpCaller, private http: HttpClient) { }
  getProducts(): Observable<Product[]> {
     return this.httpCaller.apiCaller(httpType.get, 'Products/GetProducts');
    }
    postFile(fileToUpload: File) {
      const endpoint = 'http://localhost:51116/Products/UploadImage';
      const formData: FormData = new FormData();
      formData.append('Image', fileToUpload, fileToUpload.name);
      return this.http
        .post(endpoint, formData);
    }
   saveProduct(product: Product): Observable<Product[]> {
     return this.httpCaller.apiCaller(httpType.post, 'Products/SaveorUpdate', product);
  }
  
deleteProduct(product: Product): Observable<Product[]> {
  return this.httpCaller.apiCaller(httpType.post, '/Products/DeleteById', product);
}
  getCategories(): Category[] {
   this.categories = [
      {  categoryId: 1, name: 'Category 1', description: 'Description 1', active: true},
      {  categoryId: 2, name: 'Category 2', description: 'Description 1', active: true},
      {  categoryId: 3, name: 'Category 3', description: 'Description 1', active: false},
    ];
    return this.categories;
  }
}
