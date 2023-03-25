import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from 'src/app/model/alert';
import { Bankuser } from 'src/app/model/bankuser';
import { BankuserService } from 'src/app/service/bankuser.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: Bankuser = new Bankuser;
  alert: Alert = new Alert;
  constructor(private userService: BankuserService, private router: Router) { }

  ngOnInit(): void {
  }

  // after submit function
  createUser(){
    this.userService.createAccount(this.user).subscribe( data => {
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "Bank user account has been created successfully!";
      // sending alert object to homepage
      this.router.navigate(['homepage'], {
        queryParams: { data : btoa(JSON.stringify(this.alert))}
      })
    },
      error => {
        this.alert.isAlert = true;
      this.alert.type = "danger";
      this.alert.head = "Unsuccessfull";
      this.alert.message = "User account number, contact number or email id already taken please try different one!";
      // sending alert object to homepage
      this.router.navigate(['homepage'], {
        queryParams: { data : btoa(JSON.stringify(this.alert))}
      })
      });
  }

}
