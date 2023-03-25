import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alert } from 'src/app/model/alert';
import { Bankemployee } from 'src/app/model/bankemployee';
import { Bankmanager } from 'src/app/model/bankmanager';
import { Bankuser } from 'src/app/model/bankuser';
import { BankemployeeService } from 'src/app/service/bankemployee.service';
import { BankmanagerService } from 'src/app/service/bankmanager.service';
import { BankuserService } from 'src/app/service/bankuser.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  targetModal!: String;
  user: Bankuser = new Bankuser;
  users!: Bankuser[];
  emp: Bankemployee = new Bankemployee;
  emps!: Bankemployee[];
  manager: Bankmanager = new Bankmanager;
  updatedUser: Bankuser = new Bankuser;
  updatedEmp: Bankemployee = new Bankemployee;
  updatedManager: Bankmanager = new Bankmanager;
  alert: Alert = new Alert;
  constructor(private userservice: BankuserService, private empService: BankemployeeService, private managerService: BankmanagerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  // ----------------------- FOR USER ----------------------- //
  // get method
  balanceInquiry(accountNo: number, pin: number) {
    this.userservice.balanceInquiry(accountNo, pin).subscribe(data => {
      // output
      console.log(data);
      this.user = data;
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully deactivated the admin account!";
      // redirecting to homepage with alert object
      this.router.navigate(['homepage'], {
        queryParams: { data: btoa(JSON.stringify(this.alert)) }
      });
    });
  }

  //deposite logic
  deposite(accountNo: number, pin: number, updatedUser: Bankuser) {
    this.userservice.deposite(accountNo, pin, updatedUser).subscribe(data => {
      // output
      // this.targetModal = "deposite";
      // output
      console.log(data);
      this.user = data;
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully deposited your amount!";
      // redirecting to homepage with alert object
      this.router.navigate(['homepage'], {
        queryParams: { data: btoa(JSON.stringify(this.alert)) }
      });
    });
  }

  // withdraw logic
  withdraw(accountNo: number, pin: number, updatedUser: Bankuser) {
    this.userservice.withdrawal(accountNo, pin, updatedUser).subscribe(data => {

      // this.targetModal = "deposite";
      // output
      console.log(data);
      this.user = data;
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully withdrawn your amount!";
      // redirecting to homepage with alert object
      this.router.navigate(['homepage'], {
        queryParams: { data: btoa(JSON.stringify(this.alert)) }
      });
    });
  }

  // changePin logic
  changePin(accountNo: number, pin: number, updatedUser: Bankuser) {
    this.userservice.changePin(accountNo, pin, updatedUser).subscribe(data => {

      // this.targetModal = "deposite";
      // output
      console.log(data);
      this.user = data;
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully rest your pin!";
      // redirecting to homepage with alert object
      this.router.navigate(['homepage'], {
        queryParams: { data: btoa(JSON.stringify(this.alert)) }
      });
    });
  }

  // deactivateAccount logic
  deactivateAccount(accountNo: number, pin: number) {
    this.userservice.deactivateAccount(accountNo, pin).subscribe(data => {

      // output
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully deactivate your account!";
      // redirecting to homepage with alert object
      this.router.navigate(['homepage'], {
        queryParams: { data: btoa(JSON.stringify(this.alert)) }
      });
    });
  }

  // ----------------------- FOR EMPLOYEE ----------------------- //
  // employee get method for users
  fetchAllUsers(username: string, password: string) {
    this.empService.fetchAllUsers(username, password).subscribe(data => {
      // output
      console.log(data);
      this.users = data;
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully fetched all user out!";
      // redirecting to homepage with alert object
      this.router.navigate(['homepage'], {
        queryParams: { data: btoa(JSON.stringify(this.alert)) }
      });
    });
  }

  // employee update/put method
  empChangePassword(username: string, password: string, updatedEmp: Bankemployee) {
    this.empService.changePassword(username, password, updatedEmp).subscribe(data => {

      // this.targetModal = "deposite";
      // output
      console.log(data);
      this.emp = data;
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully rest your password!";
      // redirecting to homepage with alert object
      this.router.navigate(['homepage'], {
        queryParams: { data: btoa(JSON.stringify(this.alert)) }
      });
    });
  }

  // employee delete method
  empDeactivateAccount(username: string, password: string) {
    this.empService.deactivateAccount(username, password).subscribe(data => {
      // output
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully deactivated your account!";
      // redirecting to homepage with alert object
      this.router.navigate(['homepage'], {
        queryParams: { data: btoa(JSON.stringify(this.alert)) }
      });
    });
  }

  // ----------------------- FOR MANAGER ----------------------- //
  // manager get method for users
  managerFetchAllUsers(username: string, password: string) {
    this.managerService.fetchAllUsers(username, password).subscribe(data => {
      // output
      console.log(data);
      this.users = data;
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully fetched all user out!";
      // redirecting to homepage with alert object and user list
      this.router.navigate(['bankuser-list'], {
        queryParams:
        {
          data: btoa(JSON.stringify(this.alert)),
          emps: btoa(JSON.stringify(this.users))
        }
      });
    },
      error => {
        console.log(error);
        this.alert.isAlert = true;
        this.alert.type = "danger";
        this.alert.head = "Unsuccessfull";
        this.alert.message = error;
        // redirecting to home with alert object
        this.router.navigate(['homepage'], {
          queryParams:
            { data: btoa(JSON.stringify(this.alert)) }
        });
      });
  }

  // manager get method for user
  getEmpByManager(username: string, password: string, empUsername: string) {
    empUsername = this.route.snapshot.params['username'];
    this.managerService.fetchEmployee(username, password, empUsername).subscribe(data => {
      // output
      console.log(data);
      this.emp = data;
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully fetched the employee!";
      // redirecting to homepage with alert object and user list
      this.router.navigate(['employee-detail'], {
        queryParams:
        {
          data: btoa(JSON.stringify(this.alert)),
          emps: btoa(JSON.stringify(this.emp))
        }
      });
    },
      error => {
        console.log(error);
        this.alert.isAlert = true;
        this.alert.type = "danger";
        this.alert.head = "Unsuccessfull";
        this.alert.message = error;
        // redirecting to home with alert object
        this.router.navigate(['homepage'], {
          queryParams:
            { data: btoa(JSON.stringify(this.alert)) }
        });
      });
  }

  // manager get method for employees
  managerFetchAllEmps(username: string, password: string) {
    this.managerService.fetchAllEmployees(username, password).subscribe(data => {
      // output
      this.emps = data;
      console.log(data);
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully fetched all employee out!";
      // redirecting to bankemployee-list with alert object and employee list
      this.router.navigate(['bankemployee-list'], {
        queryParams:
        {
          data: btoa(JSON.stringify(this.alert)),
          emps: btoa(JSON.stringify(this.emps))
        }
      });
    },
      error => {
        console.log(error);
        this.alert.isAlert = true;
        this.alert.type = "danger";
        this.alert.head = "Unsuccessfull";
        this.alert.message = error;
        // redirecting to home with alert object
        this.router.navigate(['homepage'], {
          queryParams:
            { data: btoa(JSON.stringify(this.alert)) }
        });
      });
  }

  // manager update/put method
  managerChangePassword(username: string, password: string, updatedManager: Bankmanager) {
    this.managerService.changePassword(username, password, updatedManager).subscribe(data => {

      // this.targetModal = "deposite";
      // output
      console.log(data);
      this.manager = data;
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully rest your password!";
      // redirecting to homepage with alert object
      this.router.navigate(['homepage'], {
        queryParams: { data: btoa(JSON.stringify(this.alert)) }
      });
    });
  }

  // manager delete method for user
  managerDeactivateUser(username: string, password: string, accountNo: number) {
    this.managerService.deactivateUser(username, password, accountNo).subscribe(data => {
      // output
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully deactivated user account!";
      // redirecting to homepage with alert object
      this.router.navigate(['homepage'], {
        queryParams: { data: btoa(JSON.stringify(this.alert)) }
      });
    });
  }

  // manager delete method for employee
  managerDeactivateEmp(username: string, password: string, empUsername: string) {
    empUsername = this.route.snapshot.params['username'];
    this.managerService.deactivateEmployee(username, password, empUsername).subscribe(data => {
      // output
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully deactivated the employee account!";
      // redirecting to homepage with alert object
      this.router.navigate(['homepage'], {
        queryParams: { data: btoa(JSON.stringify(this.alert)) }
      });
    });
  }

  // manager delete method for manager
  managerDeactivateAccount(username: string, password: string) {
    this.managerService.deactivateAccount(username, password).subscribe(data => {
      // output
      this.alert.isAlert = true;
      this.alert.type = "success";
      this.alert.head = "Successfull";
      this.alert.message = "You have successfully deactivated the manager account!";
      // redirecting to homepage with alert object
      this.router.navigate(['homepage'], {
        queryParams: { data: btoa(JSON.stringify(this.alert)) }
      });
    });
  }
}
