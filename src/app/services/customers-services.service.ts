import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Customer } from '../model/Customer';



@Injectable({
  providedIn: 'root'
})
export class CustomersServicesService {

  constructor(private http: HttpClient) { }
  
  public get  Customers() :Observable<Customer[]> {
    const rtn =this.http.get("../../assets/data/customers.json") as Observable<Customer[]>;
    return rtn;
   }
}
