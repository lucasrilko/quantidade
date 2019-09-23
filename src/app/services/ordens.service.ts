import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../ordens/models/order_model';

@Injectable({
  providedIn: 'root'
})
export class OrdensService {

  constructor( private http: HttpClient ) { }
  private productNameURL = 'http://localhost:9095/ordens'
  getOrders(): Observable <Order[]> {
    return this.http.get<any[]>(this.productNameURL)
  }
}
