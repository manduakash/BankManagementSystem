import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './mycomponents/homepage/homepage.component';
import { HttpClientModule } from "@angular/common/http";
import { ModalsComponent } from './mycomponents/modals/modals.component';
import { CreateEmployeeComponent } from './mycomponents/bankemployee/create-employee/create-employee.component';
import { CreateManagerComponent } from './mycomponents/bankmanager/create-manager/create-manager.component';
import { CreateUserComponent } from './mycomponents/bankuser/create-user/create-user.component';
import { BankuserservicesComponent } from './mycomponents/bankuserservices/bankuserservices.component';
import { BankmanagerservicesComponent } from './mycomponents/bankmanagerservices/bankmanagerservices.component';
import { BankemployeeservicesComponent } from './mycomponents/bankemployeeservices/bankemployeeservices.component';
import { FormsModule } from '@angular/forms';
import { BankuserListComponent } from './mycomponents/bankuser/bankuser-list/bankuser-list.component';
import { BankemployeeListComponent } from './mycomponents/bankemployee/bankemployee-list/bankemployee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ModalsComponent,
    CreateUserComponent,
    CreateEmployeeComponent,
    CreateManagerComponent,
    BankuserservicesComponent,
    BankmanagerservicesComponent,
    BankemployeeservicesComponent,
    BankuserListComponent,
    BankemployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
