import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/model/Customers';
import { CustomerModel } from 'src/app/model/CustomerModel';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers :Customer [];
  customersModel :CustomerModel[];


  constructor() {
       this.customers =[
      { name: 'DOTAN', 
        isGuy:true, 
        birthday: new Date(1985,3,25)
      },
      { name: 'KORAL', 
      isGuy:false, 
      birthday: new Date(1992,4,15)
      },
      { name: 'AVI', 
      isGuy:true, 
      birthday: new Date(1985,10,4)
      }
    
    ];
    this.customersModel=[
      { name: 'DOTAN', 
        email:"dotannnnnnnnn@gmail.com", 
        birthday: new Date('1956,10,25'),
        isGuy:true,
      },
      { name: 'THE Q SHIRA', 
      email:"SHIRA@gmail.com", 
      birthday: new Date('2001/9/7'),
      isGuy:true,
    },
       { name: 'AVI', 
        email:"AVI@gmail.com", 
        birthday: new Date('1985/12/14'),
        isGuy:true,
      },
      { name: 'LULI', 
      email:"LULI@gmail.com", 
      birthday: new Date('1991/12/12'),
      isGuy:false,
      },
        { name: 'DANA', 
        email:"DANAAA@gmail.com", 
        birthday: new Date('1987/4/27'),
        isGuy:false,
      },
      { name: 'HELLI', 
      email:"H@gmail.com", 
      birthday: new Date('1992/4/11'),
      isGuy:false,
     },
      { name: 'YRON', 
      email:"YRON@gmail.com", 
      birthday: new Date('1995/3/7'),
      isGuy:true,
      }
    ];
   }
headerIconParent!:string;
headerTitleParent!:string;
headerDescriptionParent!:string;

  ngOnInit(): void {
    this.headerIconParent="fas fa-user";
    this.headerTitleParent ="headerTitle from customers";
    this.headerDescriptionParent="i am headerDescriptionParent from customers";
  }

  // getCustomers(): void{
  //   this.customers=[
  //     { name: 'DOTAN', 
  //     isGuy:true, 
  //     birthday: new Date(1985,12,25)
  //   },
  //   { name: 'KORAL', 
  //   isGuy:false, 
  //   birthday: new Date(1992,4,15)
  //   },
  //   { name: 'AVI', 
  //   isGuy:true, 
  //   birthday: new Date(1985,10,4)
  //   },
  //   { name: 'HAIM', 
  //   isGuy:true, 
  //   birthday: new Date(1980,9,8)
  //   },
  //   { name: 'SHANY', 
  //   isGuy:true, 
  //   birthday: new Date(1980,1,8)
  //   }
  //   ];
  // }

  // trackByCustomersName(index: number,customers: Customer): string {
  //   return customers.name
  // }

  isAlreadyHaveBirthdayThisYear(date: Date): boolean { 
    const currentDate= new Date(Date.now()) ;
      if( date.getMonth()!==currentDate.getMonth())
      return date.getMonth() < currentDate.getMonth();
      return (date.getDate() <= currentDate.getDate()); 
  }
 

}

