import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alert } from 'src/app/model/alert';
import { Bankemployee } from 'src/app/model/bankemployee';
import { BankemployeeService } from 'src/app/service/bankemployee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Bankemployee = new Bankemployee;
  alert: Alert = new Alert;
  constructor(private employeeService: BankemployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  // after submit function
  createEmployee(){
    this.employeeService.createEmp(this.employee).subscribe( data => {
      console.log(data);
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "Bank employee account has been created successfully!";
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
