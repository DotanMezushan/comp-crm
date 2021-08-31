import { Injectable } from '@angular/core';

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

  constructor() { }
}
