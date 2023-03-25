import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';
import { Alert } from 'src/app/model/alert';
import { Bankemployee } from 'src/app/model/bankemployee';
import { Bankuser } from 'src/app/model/bankuser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  alert: Alert = new Alert();
  isAlert:boolean = false;
  emps: Bankemployee[] = [];
  users: Bankuser[] = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  closeAlert(){
    this.isAlert = false;
    this.router.navigate(['homepage']);
  }

  ngOnInit(): void {
     // fetching object datas from url
    this.route.queryParams.subscribe( (params) => {
      this.alert = JSON.parse(atob(params['data']))
      console.log(this.alert);
      this.isAlert = this.alert.isAlert;
      // for auto alert closing
      setTimeout(() => {
        this.alert.isAlert = false;
        this.isAlert = false;
      }, 5000);
    });

    // fetching employee list from url
    this.route.queryParams.subscribe( (params) => {
      this.emps = JSON.parse(atob(params['emps']))
      console.log(this.emps);
    })
    // fetching bank users list from url
    this.route.queryParams.subscribe( (params) => {
      this.users = JSON.parse(atob(params['users']))
      console.log(this.users);
    })
  }

}
