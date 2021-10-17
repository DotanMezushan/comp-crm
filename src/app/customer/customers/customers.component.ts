import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Customer } from 'src/app/model/Customer';
import { CustomersService } from 'src/app/services/customers.service';
import * as _ from 'lodash';
import {  fromEvent, Observable } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { CompileShallowModuleMetadata } from '@angular/compiler';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  //term : string ='';
  @ViewChild('searchByPhone' , {static : true}) searchByPhone !:ElementRef<any>;
  @ViewChild('searchByEmail' , {static : true}) searchByEmail !:ElementRef<any>;
  @ViewChild('searchByName' , {static : true}) searchByName !:ElementRef<any>;

  formEventPhoneObs !:Observable<any>;
  formEventEmailObs !:Observable<any>;
  formEventNameObs !:Observable<any>;


  CustomersArr: Customer[]=[];
  CustomersArrFiltered :Customer[]=[];
  customersArrFiltered$ !: Observable<Customer[]>;

 // debaunceFunc : Function = _.debounce(this.filter,1000);

  headerIconParent!:string;
  headerTitleParent!:string;
  headerDescriptionParent!:string;






  constructor(
      private customersService : CustomersService
    ) {}




    ngOnInit(): void {



      this.customersService.customers$.subscribe(cus =>{
       this.CustomersArr=cus;
       this.CustomersArrFiltered=cus;
      });

      this.headerIconParent="fas fa-user";
      this.headerTitleParent ="headerTitle from customers";
      this.headerDescriptionParent="i am header DescriptionParent from customers";

    this.formEventPhoneObs = fromEvent(this.searchByPhone.nativeElement,'input');
    this.formEventEmailObs = fromEvent(this.searchByEmail.nativeElement,'input');
    this.formEventNameObs = fromEvent(this.searchByName.nativeElement,'input');


    this.customersArrFiltered$= this.formEventPhoneObs.pipe(
      startWith(null),
      debounceTime(1000),
      map((x: InputEvent)=>{
        if(!x ){return this.CustomersArr}
        const target = x.target as any
       return this.filterAdvPhone(target.value)
      })
    )

    this.loadData();



    this.customersArrFiltered$= this.formEventEmailObs.pipe(
      startWith(null),
      debounceTime(1000),
      map((x: InputEvent)=>{
        if(!x ){return this.CustomersArr}
        const target = x.target as any
       return this.filterAdvEmail(target.value)
      })
    )

    this.loadData();

    this.customersArrFiltered$= this.formEventNameObs.pipe(
      startWith(null),
      debounceTime(1000),
      map((x: InputEvent)=>{
        if(!x ){return this.CustomersArr}
        const target = x.target as any
       return this.filterAdvName(target.value)
      })
    )

    this.loadData();




  }
  loadData(){
    this.customersArrFiltered$.subscribe(x =>{
      this.CustomersArrFiltered=x;
    })
  }




filterAdvPhone(term :string){
    return   this.CustomersArr.filter(cus =>
     _.includes(cus.phone, term.trim() )
  )}
filterAdvEmail(term :string){
    return   this.CustomersArr.filter(cus =>
     _.includes(cus.email, term.trim() )
  )}

  // i need to make sur that at the server i will keep the
  // data as lower case
filterAdvName(term :string){
    return   this.CustomersArr.filter(cus =>
     _.includes(cus.firstName +" " +cus.lastName, term.trim() )
  )}

  onDeleteCustomer(customer :Customer){
    this.customersService.deleteCustomer(customer)
    .then(()=>{
      alert(`${customer.firstName} deleted`)
    })
  }


  isAlreadyHaveBirthdayThisYear(date?: Date): boolean {
    const currentDate= new Date(Date.now()) ;
    console.log(currentDate);
    if(date!== undefined){
    let dateAsNumber=Date.parse(date.toString())
    let dateAsDate=new Date(dateAsNumber)


      if( dateAsDate.getMonth()!==currentDate.getMonth())
      return dateAsDate.getMonth() < currentDate.getMonth();
      return (dateAsDate.getDate() <= currentDate.getDate());
    }
    return false;


  }

}

