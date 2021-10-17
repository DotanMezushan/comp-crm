import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/model/Customer';
import { UpdateCustomerComponent } from '../update-customer/update-customer.component';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent implements OnInit {

  headerIconParent!:string;
  headerTitleParent!:string;
  headerDescriptionParent!:string;

  formGroup: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required, Validators.minLength (2)]),
    lastName: new FormControl(null, [Validators.required, Validators.minLength (2)]),
    email:  new FormControl(null, [Validators.required, Validators.email]),
    phone:  new FormControl(null, [Validators.required, Validators.pattern(/^0[2-9]\d{7,8}$/g)]),
    hobbies: new FormArray([]),
    birthday: new FormControl(null),
    address:new FormGroup({
      city: new FormControl(null),
      street: new FormControl(null),
      building: new FormControl(null),
      zipcode: new FormControl(null)
    }),
    notes: new FormControl(null),
    isGuy: new FormControl(null)
  })




  @Input()
  model:Customer={
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    hobbies:[]=[],
    //birthday: new Date,
    address:[]=[],
    isGuy:false,
    notes: ""
  }



  @Output() onSaveChanges = new EventEmitter<Customer>();

  constructor() { }

  ngOnInit(): void {
    this.headerIconParent="fas fa-plus-circle";
    this.headerTitleParent ="New Customer Form";
    this.headerDescriptionParent="Write Customer details";






    if(this.model!== undefined){
      this.formGroup.patchValue(this.model);
    }


    this.formGroup.get('firstName')?.valueChanges.subscribe(fn =>{
      if(fn==="dotan")
      return this.formGroup.disable();
      return true;
    })
  }

  onClear(){
    this.formGroup.reset(this.model);
  }

  public get hobbiesArr(): AbstractControl[]{

    const rtn= this.formGroup.get('hobbies') as FormArray;
    return  rtn.controls;
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


  saveChanges():void{
     const firstName  =this.formGroup.get('firstName');
     let stringName : string = firstName?.value.toString();
     stringName=stringName.toLowerCase();
     this.formGroup.get('firstName')?.patchValue(stringName);

     const lastName  =this.formGroup.get('lastName');
     let stringLast : string = firstName?.value.toString();
     stringLast=stringLast.toLowerCase();
     this.formGroup.get('lastName')?.patchValue(stringName);


     console.log('i am going to the server ',this.formGroup.value)
    this.onSaveChanges.emit(this.formGroup.value );
  }



}
