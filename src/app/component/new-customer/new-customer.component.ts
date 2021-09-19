import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomerModel } from 'src/app/model/CustomerModel';



@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  constructor() { }
  headerIconParent!:string;
  headerTitleParent!:string;
  headerDescriptionParent!:string;


  myDefault={
    firstName: "Enter firstName ",
    lastName: "Enter last Name",
    email: "enter@email",
    phone:"0545557172",
    address: "Enter  address",
    notes: "Enter  notes",
    isGuy:false,
    hobbies:[],
    addressAsArray:[]
  }
   

 
  
  formGroup: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength (2)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength (2)]),
    email:  new FormControl(null, [Validators.required, Validators.email]),
    phone:  new FormControl(null, [Validators.required, Validators.pattern(/^0[2-9]\d{7,8}$/g)]),
    hobbies: new FormArray([]),
    birthday: new FormControl(null),
    addressAsArray:new FormGroup({
      city: new FormControl(null),
      street: new FormControl(null),
      building: new FormControl(null),
      zipcode: new FormControl(null)
    }),
    // address: new FormControl(null),
    notes: new FormControl(null), 
    isGuy: new FormControl(null),
  })



  

  ngOnInit(): void {
    this.headerIconParent="fas fa-plus-circle";
    this.headerTitleParent ="New Customer Form"; 
    this.headerDescriptionParent="Write Customer details";

  

    this.formGroup.get('firstName')?.valueChanges.subscribe(fn =>{
      if(fn==="dotan")
      return this.formGroup.disable();
      return true;
    })
  }
 
  ngSubmit(): void{
    console.log(this.formGroup.value as CustomerModel);
    console.log(this.formGroup);
  }
  onClear(){
    this.formGroup.reset(this.myDefault);
  }

  public get hobbiesArr(): AbstractControl[]{
    const rtn= this.formGroup.get('hobbies') as FormArray;
    return rtn.controls;
  }
  addHobbies(){
    const FgControls :{[key: string]:AbstractControl}={
      Name: new FormControl(null),
      hoursPerWeek: new FormControl(null),
      Description: new FormControl(null)
    };
    (<FormArray>this.formGroup.get('hobbies')).push(new FormGroup(FgControls ));
  }

  deleteHobbies(i:number){
    (<FormArray>this.formGroup.get('hobbies')).removeAt(i);
  }
 

}


 
  