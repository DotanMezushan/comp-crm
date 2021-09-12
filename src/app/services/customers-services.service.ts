import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { CustomerModel } from '../model/CustomerModel';



@Injectable({
  providedIn: 'root'
})
export class CustomersServicesService {

  constructor(private http: HttpClient) { }
  
  public get  Customers() :Observable<CustomerModel[]> {
    const rtn =this.http.get("../../assets/data/customers.json") as Observable<CustomerModel[]>;
    return rtn;
   }
}
