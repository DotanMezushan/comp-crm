import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './component/contacts/contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './component/customers/customers.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';



const appRouter: Routes=[
  { 
    path:'',
    redirectTo: 'customers',
    pathMatch:'full'
  },
  { 
    path:'customers', 
    component:CustomersComponent
  },
  { 
    path:'contacts', 
    component:ContactsComponent
  },
  { 
    path:'**',
    component:PageNotFoundComponent
  }

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRouter),//that for angular to define the routers
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
