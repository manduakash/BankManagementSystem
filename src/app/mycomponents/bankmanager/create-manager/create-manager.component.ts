import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from 'src/app/model/alert';
import { Bankmanager } from 'src/app/model/bankmanager';
import { BankmanagerService } from 'src/app/service/bankmanager.service';

@Component({
  selector: 'app-create-manager',
  templateUrl: './create-manager.component.html',
  styleUrls: ['./create-manager.component.css']
})
export class CreateManagerComponent implements OnInit {

  manager: Bankmanager = new Bankmanager;
  alert: Alert = new Alert;
  constructor(private managerService: BankmanagerService, private router: Router) { }

  ngOnInit(): void {
  }

  // after submit function
  createManager(){
    this.managerService.createManager(this.manager).subscribe( data => {
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "Bank manager account has been created successfully!";
      // sending alert object to homepage
      this.router.navigate(['homepage'], {
        queryParams: { data : btoa(JSON.stringify(this.alert))}
      })
    },
      error => {
        this.alert.isAlert = true;
      this.alert.type = "danger";
      this.alert.head = "Unsuccessfull";
      this.alert.message = "Username already taken please try different one!";
      // sending alert object to homepage
      this.router.navigate(['homepage'], {
        queryParams: { data : btoa(JSON.stringify(this.alert))}
      })
      });
  }

}
