import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contact/contacts/contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customer/customers/customers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewContactComponent } from './contact/new-contact/new-contact.component';
import { NewCustomerComponent } from './customer/new-customer/new-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { IndexCustomerComponent } from './customer/index-customer/index-customer.component';
import { AuthGuard } from 'src/Gurds/auth.guard';
import { LoginComponent } from './login/login.component';




const appRouter: Routes=[
  {
    path:'',
    redirectTo: 'customers',
    pathMatch:'full'
  },
  {
    path:'customers',
    component:CustomersComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'customers/new',
    component: NewCustomerComponent,
    canActivate:[AuthGuard]
  },
  {

    path:'customers/:id/edit',
    component: UpdateCustomerComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'customers/:id/index',
    component: IndexCustomerComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'contacts',
    component:ContactsComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'contacts/new',
    component: NewContactComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRouter),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
