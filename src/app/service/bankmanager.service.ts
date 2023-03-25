import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bankemployee } from '../model/bankemployee';
import { Bankmanager } from '../model/bankmanager';
import { Bankuser } from '../model/bankuser';

@Injectable({
  providedIn: 'root'
})
export class BankmanagerService {

  private baseUrl: string = "http://localhost:8080/bankapi/v1/manager";
  constructor(private httpClient: HttpClient) { }

  // REST API services
  // post method
  createManager(manager: Bankmanager): Observable<Bankmanager>{
    return this.httpClient.post<Bankmanager>(`${this.baseUrl}/createManager`, manager);
  }

   // get method for users
   fetchAllUsers(managerUsername: string, password: string): Observable<Bankuser[]>{
    return this.httpClient.get<Bankuser[]>(`${this.baseUrl}/fetchAllUsers?managerUsername=${managerUsername}&password=${password}`);
  }

   // get method for employees
   fetchAllEmployees(managerUsername: string, password: string): Observable<Bankemployee[]>{
    return this.httpClient.get<Bankemployee[]>(`${this.baseUrl}/fetchAllEmployees?managerUsername=${managerUsername}&password=${password}`);
  }

  // get method for user
  fetchUser(managerUsername: string, password: string, accountNo: number): Observable<Bankuser>{
    return this.httpClient.get<Bankuser>(`${this.baseUrl}/fetchUser?managerUsername=${managerUsername}&password=${password}&accountNo=${accountNo}`);
  }

  // get method for employee
  fetchEmployee(managerUsername: string, password: string, empUsername: string): Observable<Bankemployee>{
    return this.httpClient.get<Bankemployee>(`${this.baseUrl}/fetchEmployee?managerUsername=${managerUsername}&password=${password}&empUsername=${empUsername}`);
  }

  // put/update method
  changePassword(managerUsername: string, password: string, manager: Bankmanager): Observable<Bankmanager>{
    return this.httpClient.put<Bankmanager>(`${this.baseUrl}/changePassword?managerUsername=${managerUsername}&password=${password}`, manager);
  }

  // delete method manager
  deactivateAccount(managerUsername: string, password: string): Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/deactivateAccount?managerUsername=${managerUsername}&password=${password}`);
  }

  // delete method user
  deactivateUser(managerUsername: string, password: string, accountNo: number): Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/deactivateUser?managerUsername=${managerUsername}&password=${password}&accountNo=${accountNo}`);
  }

  // delete method for employee
  deactivateEmployee(managerUsername: string, password: string, empUsername: string): Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/deactivateEmployee?managerUsername=${managerUsername}&password=${password}&empUsername=${empUsername}`);
  }
}
