import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit  {

  @Output() onSaveChanges = new EventEmitter<Customer>();
  
  headerIconParent!:string;
  headerTitleParent!:string;
  headerDescriptionParent!:string;

  
  // ts:boolean=true;
  
  
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



  
  



  model:Customer={
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    hobbies:[]=[],
    // birthday: new Date,
    address:[]=[],
    isGuy:false,
    notes: ""
  }

 
  constructor(private activatedRoute: ActivatedRoute,
    private customersService: CustomersService,
    private router :Router
  ) { }

  ngOnInit(): void {
    this.headerIconParent="fas fa-edit"
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
     
      ( <FormArray>this.formGroup.get('hobbies')).clear();

      customer.hobbies?.forEach(x =>{
        console.log("iiiiiiiiiiiiiiiiiii");
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
 
      // this.model.id=customer.id,
      // this.model.firstName=customer.firstName,
      // this.model.lastName= customer.lastName,
      // this.model.email=customer.email,
      // this.model.phone=customer.phone,
      // this.model.hobbies=customer.hobbies,
      // this.model.birthday=customer.birthday,
      // this.model.isGuy=customer.isGuy,
      // this.model.notes=customer.notes
      
      // return this.model ;
    }
    

  })

  console.log("i am ngOnInit")
  

   
  
  }

  hobbiesArr(): AbstractControl[] {
    const rtn = this.formGroup.get('hobbies') as FormArray;
    console.log("i am the length hobbiesArr")
    console.log(rtn.length)
    return rtn.controls;
  }
  // reload(){
  //   if(this.ts===true){
     
  //     let currentUrl = this.router.url;
  //         this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  //         this.router.onSameUrlNavigation = 'reload';
  //         this.router.navigate([currentUrl]);
  //      this.ts=false;  
  // }
  // }



    


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
    const updatedCustomer : Customer  = this.formGroup.value; 
    this.customersService.updateCustomer(updatedCustomer);
    this.router.navigate(['/customers']);
  }
  onClear(){
    
    this.formGroup.reset(this.model);
  }

}
