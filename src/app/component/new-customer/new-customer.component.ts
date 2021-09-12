import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  headerIconParent!:string;
  headerTitleParent!:string;
  headerDescriptionParent!:string;

  id?: string;
  firstName: string=" ";
  lastName: string="";
  email: string="";
  phone: string="";
  birthday?: Date;
  address?: string="";
  notes?: string="";
  isGuy?: boolean;
  

  constructor() { }

  ngOnInit(): void {
    this.headerIconParent="fas fa-plus-circle";
    this.headerTitleParent ="Add New Customer Form"; 
    this.headerDescriptionParent="Write Customer details";
  }
  onSubmit($formData:any){
    console.log($formData);
    console.log($formData.form.value);
  };
    

  

}


 
  