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
  //   private contacts = [
  //   {
  //     name: 'Victor',
  //     email: "tsanhan@gmail.com",
  //     birthday: '25/03/1985',
  //     phones:['0366555663']
      
  //   },
  //   {
  //     name: 'Dima',
  //     email: "d_com@walla.com",
  //     birthday: '25/01/1890'
  //   },
  //   {
  //     name: 'Haim',
  //     email: "haim_hamekach@gmail.com",
  //     birthday: '15/09/1976'
  //   },
  //   {
  //     email: "koralyehezkel@gmail.com",
  //     name: 'Koral',
  //     birthday: '03/05/1999',
  //     phones:['0926653365','0426698805']
  //   },
  //   {
  //     email: "dotanbm3052@gmail.com",
  //     name: 'Dotan',
  //     birthday: '08/01/1992',
  //     phones:['0546511144']
  //   }
  // ];
  
//to do get and set and to make privet 
 
 //public get Contacts() : ContactModel[] {
   //return this.contacts;

 //}

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
