import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopNavComponent } from './component/top-nav/top-nav.component';
import { SidenavComponent } from './component/sidenav/sidenav.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { CustomersComponent } from './component/customers/customers.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from '../assets/header/header.component';
import { NameFixPipe } from './pipes/name-fix.pipe';
import { NameSuffixPipe } from './pipes/name-suffix.pipe';

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
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    NameFixPipe,
    NameSuffixPipe
  ]
})
export class AppModule { }
