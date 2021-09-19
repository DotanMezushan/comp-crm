import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  headerIconParent!:string;
  headerTitleParent!:string;
  headerDescriptionParent!:string;

  name: string="";
  email: string="";
  birthday: string="";
  phones ?:string[]=undefined;

  constructor() { }

  ngOnInit(): void {
    this.headerIconParent="fas fa-plus";
    this.headerTitleParent ="new  contacts";
    this.headerDescriptionParent="add new  contacts";

 
  
  }
  onSubmit($formData:any){
    console.log($formData);
    console.log($formData.form.value);
  };

}
