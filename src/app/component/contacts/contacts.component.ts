import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/model/Contact';

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

  constructor() {
    this.contacts = [
      {
        name: 'Victor',
        email: "tsanhan@gmail.com",
        birthday: '25/03/1985',
        phones:['0366555663']
        
      },
      {
        name: 'Dima',
        email: "d_com@walla.com",
        birthday: '25/01/1890'
      },
      {
        name: 'Haim',
        email: "haim_hamekach@gmail.com",
        birthday: '15/09/1976'
      },
      {
        email: "koralyehezkel@gmail.com",
        name: 'Koral',
        birthday: '03/05/1999',
        phones:['0926653365','0426698805']
      },
      {
        email: "dotanbm3052@gmail.com",
        name: 'Dotan',
        birthday: '08/01/1992',
        phones:['0546511144']
      },
    ]


   }

  ngOnInit(): void {
    this.headerIconParent="fas fa-envelope";
    this.headerTitleParent ="headerTitle from contacts";
    this.headerDescriptionParent="i am headerDescriptionParent from contacts";
  }

}
