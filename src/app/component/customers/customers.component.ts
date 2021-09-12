import { Component, OnInit } from '@angular/core';
import { CustomerModel } from 'src/app/model/CustomerModel';
import { CustomersServicesService } from 'src/app/services/customers-services.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  
  customersModel!: Array<CustomerModel>;

 
 
  constructor(public customerServiceService :CustomersServicesService) {}

  headerIconParent!:string;
  headerTitleParent!:string;
  headerDescriptionParent!:string;

    ngOnInit(): void {
      this.headerIconParent="fas fa-user";
      this.headerTitleParent ="headerTitle from customers";
      this.headerDescriptionParent="i am headerDescriptionParent from customers";

      this.customerServiceService.Customers.subscribe( {
        next: (result : CustomerModel[]) => {
          this.customersModel=result;
          console.log(this.customersModel)
      },
      error:(err: any) =>{
        console.log(err);
      }
    });

  }
  isAlreadyHaveBirthdayThisYear(date?: Date): boolean { 
    console.log("i am date");
    console.log(date);
    
    const currentDate= new Date(Date.now()) ;
    console.log("i am currentDate");
    console.log(currentDate);

    if(date!== undefined){
      let dateAsNumber=Date.parse(date.toString())
    let dateAsDate=new Date(dateAsNumber)
    console.log("i am new Date");
    console.log(dateAsDate);
    
      if( dateAsDate.getMonth()!==currentDate.getMonth())
      return dateAsDate.getMonth() < currentDate.getMonth();
      return (dateAsDate.getDate() <= currentDate.getDate()); 
    }
    return false;
    
    
  }

}
  
