import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ContactsComponent } from './contact/contacts/contacts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomersComponent } from './customer/customers/customers.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from '../assets/header/header.component';
import { NameFixPipe } from './pipes/name-fix.pipe';
import { NameSuffixPipe } from './pipes/name-suffix.pipe';
import {HttpClientModule} from '@angular/common/http';
import { NewCustomerComponent } from './customer/new-customer/new-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewContactComponent } from './contact/new-contact/new-contact.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import {AngularFireAuthModule}  from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { FormCustomerComponent } from './customer/form-customer/form-customer.component';
import { UpdateCustomerComponent } from './customer/update-customer/update-customer.component';
import { IndexCustomerComponent } from './customer/index-customer/index-customer.component';
import { LoginComponent } from './login/login.component';




// const data = new InjectionToken<string>("injected data !");

// class testService{
//   sayHello(){
//     console.log("Hello from " + this)
//   }
// }
// function testServiceFactory(){
//   return new testService();
// }



@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SidenavComponent,
    ContactsComponent,
    PageNotFoundComponent,
    CustomersComponent,
    HeaderComponent,
    NameFixPipe,
    NameSuffixPipe,
    NewCustomerComponent,
    NewContactComponent,
    FormCustomerComponent,
    UpdateCustomerComponent,
    IndexCustomerComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,


  ],
  providers: [
    // {
    //    provide:data,
    //    useFactory:() => ""
    // },
    // {
    //   provide:testService,
    //   useFactory:testServiceFactory
    // }
  ],
  bootstrap: [AppComponent],
  exports: [
    NameFixPipe,
    NameSuffixPipe
  ]
})
export class AppModule { }
