import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-index-customer',
  templateUrl: './index-customer.component.html',
  styleUrls: ['./index-customer.component.css']
})
export class IndexCustomerComponent implements OnInit {

  @Output() onSaveChanges = new EventEmitter<Customer>();
  
  headerIconParent!:string;
  headerTitleParent!:string;
  headerDescriptionParent!:string;
  
  customer$!: Observable<Customer | null>


  formGroup: FormGroup = new FormGroup({
    id: new FormControl(null),
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



  
  




 
  constructor(private activatedRoute: ActivatedRoute,
    private customersService: CustomersService,
    private router :Router
  ) { }

  ngOnInit(): void {
    this.headerIconParent="fas fa-info-circle"
    this.headerTitleParent="Edit this customer"
    this.headerDescriptionParent="update the relevant felids"

    const  id = this.activatedRoute.snapshot.params['id'];
    this.customer$ = this.customersService.getCustomer(id);
    this.customer$.subscribe((customer)=>{
    if(customer === null){return}
    else{
      console.log(customer);
      this.formGroup.patchValue({id : customer.id });
      this.formGroup.patchValue({firstName : customer.firstName });
      this.formGroup.patchValue({lastName : customer.lastName });
      this.formGroup.patchValue({email : customer.email });
      this.formGroup.patchValue({phone : customer.phone });
     
      customer.hobbies?.forEach(x =>{
       ( <FormArray>this.formGroup.get('hobbies')).push(new FormGroup({
        Description: new FormControl(x.Description),
        Name:new FormControl(x.Name),
        hoursPerWeek :new FormControl(x.hoursPerWeek)
       }))
      } );

      
      this.formGroup.patchValue({birthday : customer.birthday });
      this.formGroup.patchValue({address : customer.address });   
      this.formGroup.patchValue({isGuy : customer.isGuy });
      this.formGroup.patchValue({notes : customer.notes });

      
    }

  })


  this.formGroup.disable();
    console.log(this.formGroup);
    

  }

  public get hobbiesArr(): AbstractControl[]{
    const rtn= this.formGroup.get('hobbies') as FormArray;
    rtn.disable();
    return rtn.controls;
  }


  
 
  saveChanges():void{
    const updatedCustomer : Customer  = this.formGroup.value; 
    this.customersService.updateCustomer(updatedCustomer);
    this.router.navigate(['/customers']);
  }


}
