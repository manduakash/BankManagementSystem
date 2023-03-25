import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bankemployee } from '../model/bankemployee';
import { Bankuser } from '../model/bankuser';

@Injectable({
  providedIn: 'root'
})
export class BankemployeeService {

  private baseUrl: string = "http://localhost:8080/bankapi/v1/employee";
  constructor(private httpClient: HttpClient) { }

  // REST API services
  // post method
  createEmp(emp: Bankemployee): Observable<Bankemployee>{
    return this.httpClient.post<Bankemployee>(`${this.baseUrl}/createEmp`, emp);
  }

  // get method for users
  fetchAllUsers(empUsername: string, password: string): Observable<Bankuser[]>{
    return this.httpClient.get<Bankuser[]>(`${this.baseUrl}/fetchAllUsers?empUsername=${empUsername}&password=${password}`);
  }

  // get method for users
  fetchAllEmps(): Observable<Bankemployee[]>{
    return this.httpClient.get<Bankemployee[]>(`${this.baseUrl}/fetchAllEmps`);
  }

  // get method for user
  fetchUser(empUsername: string, password: string, accountNo: number): Observable<Bankuser>{
    return this.httpClient.get<Bankuser>(`${this.baseUrl}/fetchUser?empUsername=${empUsername}&password=${password}&accountNo=${accountNo}`);
  }

  // put method
  changePassword(empUsername: string, password: string, emp: Bankemployee): Observable<Bankemployee>{
    return this.httpClient.put<Bankemployee>(`${this.baseUrl}/changePassword?empUsername=${empUsername}&password=${password}`,emp);
  }

  // delete method manager
  deactivateAccount(empUsername: string, password: string): Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/deactivateAccount?empUsername=${empUsername}&password=${password}`);
  }
}
