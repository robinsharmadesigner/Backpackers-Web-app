import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../models/cartModel';
import { environment } from '../../environments/environment';
import { Travel } from '../models/addToCart';

@Injectable()

export class removeFromCartService {
  searchURL = environment.apiBaseUrl+'/cartupdated';
//   sp: SearchProduct;

  constructor(private http: HttpClient) {
  }

  

  remove(cartItem: Travel): Promise<any>{
    let promise = new Promise((resolve, reject) => {
      this.http
      .post(this.searchURL,cartItem)
      .subscribe(data => {
        resolve(data);
        console.log("fr "+JSON.stringify(data))
      },
      error => {
        alert("No results found!");
      });
    });
    return promise;
  }
}
