import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { ContactModel } from 'src/app/model/Contact';
import { ContactsServiceService } from 'src/app/services/contacts-service.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
contacts!: Array< ContactModel>;

headerIconParent!:string;
headerTitleParent!:string;
headerDescriptionParent!:string;

  constructor(private contactsServiceService :ContactsServiceService) {}

  ngOnInit(): void {
    this.headerIconParent="fas fa-envelope";
    this.headerTitleParent ="headerTitle from contacts";
    this.headerDescriptionParent="i am headerDescriptionParent from contacts";

    //one way by promise
    // this.contactsServiceService.Contacts.then((result : ContactModel[]) => {
    //   this.contacts = result
    // });
    
    
    this.contactsServiceService.Contacts.subscribe({
      next: (result : ContactModel[]) => {
        this.contacts=( result);
      },
      error:(err: any) =>{
        console.log(err);
      }
    });
    
    
  }

}
