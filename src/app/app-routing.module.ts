import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankemployeeListComponent } from './mycomponents/bankemployee/bankemployee-list/bankemployee-list.component';
import { BankuserListComponent } from './mycomponents/bankuser/bankuser-list/bankuser-list.component';
import { CreateUserComponent } from './mycomponents/bankuser/create-user/create-user.component';
import { HomepageComponent } from './mycomponents/homepage/homepage.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: ' ', redirectTo: "homepage", pathMatch: 'full'},
  {path: 'create-user', component: CreateUserComponent},
  {path: 'bankemployee-list', component: BankemployeeListComponent},
  {path: 'bankuser-list', component: BankuserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
