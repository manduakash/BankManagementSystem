import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/model/alert';
import { Bankemployee } from 'src/app/model/bankemployee';
import { BankemployeeService } from 'src/app/service/bankemployee.service';
import { BankmanagerService } from 'src/app/service/bankmanager.service';

@Component({
  selector: 'app-bankemployee-list',
  templateUrl: './bankemployee-list.component.html',
  styleUrls: ['./bankemployee-list.component.css']
})
export class BankemployeeListComponent implements OnInit {


  emps!: Bankemployee[];
  emp: Bankemployee = new Bankemployee();
  empUsername!: string;
  alert: Alert = new Alert();
  isAlert:boolean = false;

  closeAlert(){
    this.isAlert = false;
  }

  constructor(private empService: BankemployeeService, private managerService: BankmanagerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.empService.fetchAllEmps().subscribe( data => {
      this.emps = data;
    },error => {
      this.emps = [];
    })
    // fetching alert data from url
    this.route.queryParams.subscribe( (params) => {
      this.alert = JSON.parse(atob(params['data']))
      console.log(this.alert);
      this.isAlert = this.alert.isAlert;
    })
    // fetching employee list from url
    this.route.queryParams.subscribe( (params) => {
      this.emps = JSON.parse(atob(params['emps']))
      console.log(this.emps);
    })

  }


  // view alumni detail action method
  getEmpByManager(empUsername: string){
    this.router.navigate(['homepage',empUsername])
  }

  // delete alumni action method
  deleteEmpByManager(empUsername: string){
    this.router.navigate(['homepage',empUsername]);
  }

}
