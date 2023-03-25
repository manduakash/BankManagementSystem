import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/model/alert';
import { Bankuser } from 'src/app/model/bankuser';
import { BankuserService } from 'src/app/service/bankuser.service';

@Component({
  selector: 'app-bankuser-list',
  templateUrl: './bankuser-list.component.html',
  styleUrls: ['./bankuser-list.component.css']
})
export class BankuserListComponent implements OnInit {

  users: Bankuser[] = [] ;
  user: Bankuser = new Bankuser();
  accountNo!: number;
  alert: Alert = new Alert();
  isAlert:boolean = false;

  closeAlert(){
    this.isAlert = false;
  }

  constructor(private userService: BankuserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // fetching alert data from url
    this.route.queryParams.subscribe( (params) => {
      this.alert = JSON.parse(atob(params['data']))
      console.log(this.alert);
      this.isAlert = this.alert.isAlert;
    })
    // fetching users list from url
    this.route.queryParams.subscribe( (params) => {
      this.users = JSON.parse(atob(params['users']))
      console.log(this.users);
    })

  }


  // // view alumni detail action method
  // getDetail(alroll: number){
  //   this.redirect.navigate(['admin/get-alumni-rollno', alroll]);
  // }

  // // update alumni action method
  // updateAlumni(alroll: number){
  //   this.redirect.navigate(['admin/update-alumni', alroll]);
  // }

  // // delete alumni action method
  // adDeleteAlumni(alroll: number){
  //   this.adminService.deleteAlumni(alroll).subscribe( data => {
  //     console.log(data);
  //     this.getAlumnis();
  //     this.alert.isAlert = true;
  //     this.alert.type = "success";
  //     this.alert.head = "Alumni Deleted";
  //     this.alert.message = "You have successfully deleted the alumni!";
  //     this.isAlert = this.alert.isAlert;
  //   }, error => {
  //     console.log(error)
  //     this.alert.isAlert = true;
  //     this.alert.type = "danger";
  //     this.alert.head = "Unable to delete";
  //     this.alert.message = "Sorry there is some internal server problem, Please try again to delete!";
  //     this.isAlert = this.alert.isAlert;
  //   });
  // }


}
