import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,DocumentReference,AngularFirestoreDocument, DocumentChangeAction, DocumentSnapshot, Action } from '@angular/fire/compat/firestore';
import { Customer } from '../model/Customer';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  customerCollecion : AngularFirestoreCollection<Customer>;
  customers$: Observable<Customer[]>;


  constructor( private afs : AngularFirestore) { 
    this.customerCollecion = this.afs.collection("customers");
    this.customers$ = this.customerCollecion.snapshotChanges().pipe(
      map((actions:DocumentChangeAction<Customer>[])=>{
        return actions.map(a =>{
          const data = a.payload.doc.data() as Customer;
          data.id=a.payload.doc.id;
          return data;
        })
      })
    )
  }
  getCustomer(id: string): Observable<Customer |null>{
    const doc = this.customerCollecion.doc(id);

    return doc.snapshotChanges().pipe(
      map((action : Action<DocumentSnapshot<Customer>>)=>{
        if(!action.payload.exists){
          return null;
        }
        const data = action.payload.data() as Customer;
        data.id = action.payload.id;
        return data;
      })
     
    )
  }

  addCustomer(cus : Customer){
    return this.customerCollecion.add(cus)
     .then((res: DocumentReference<Customer>) => {
      alert("Successfully added")
  })
  .catch(e => {
    alert("Successfully added")
  })
  }
  updateCustomer(cus : Customer){
    //getting the customer
    const doc:AngularFirestoreDocument<Customer>=this.customerCollecion
    .doc(cus.id);
    return doc.update(cus)
    .then(()=>alert("Successfully"))
    .catch((err)=>{
      alert("failed");
      console.log(err)
    });
  }

  deleteCustomer(cus: Customer){
    const doc:AngularFirestoreDocument<Customer>=this.customerCollecion
    .doc(cus.id);

   return doc.delete().then(()=>{
      alert("Successfully deleted")
    }).catch((err)=>{
      alert("failed deleted");
      console.log(err);
    });

  }

}
