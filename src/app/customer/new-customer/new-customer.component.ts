import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CustomersService } from 'src/app/services/customers.service';



@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit  {
  constructor(private customersService:CustomersService,
    private router :Router) { }

  headerIconParent!:string;
  headerTitleParent!:string;
  headerDescriptionParent!:string;




  ngOnInit(): void {
    this.headerIconParent="fas fa-plus-circle";
    this.headerTitleParent ="New Customer Form";
    this.headerDescriptionParent="Write Customer details";


  }


  saveChanges($event : any){

    //calling fire base
    this.customersService.addCustomer($event);
    this.router.navigate(['/customers']);
  }
  sendMessage($event : string){
      alert($event);
  }








}



