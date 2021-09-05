import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactModel } from '../model/Contact';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
  //root to all the application
  //any is one providedIn for module cordoning necessary
  //any is Lazy and that is why our app
  //will be faster when we use any
  // platform is serves for more than one app

  //the serves data access layer
})
export class ContactsServiceService {

  constructor(private http: HttpClient) {
      
   }


 //one wat by promise and it work good!
//  public get Contacts() : Promise<ContactModel[]>{
//    const rtn =this.http.get("../../assets/data/contacts.json").toPromise() as Promise<ContactModel[]>;
//    //const rtn =this.http.get("../../assets/data/contacts.json");
//   return rtn;

 public get Contacts() :Observable<ContactModel[]>{
  const rtn =this.http.get("../../assets/data/contacts.json") as Observable<ContactModel[]>;
  return rtn;
 }

 
  
}
