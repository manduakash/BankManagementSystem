import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bankuser } from '../model/bankuser';

@Injectable({
  providedIn: 'root'
})
export class BankuserService {

  private baseUrl: string = "http://localhost:8080/bankapi/v1/user";
  constructor(private httpClient: HttpClient) { }

  // post method
  createAccount(user: Bankuser): Observable<Bankuser>{
    return this.httpClient.post<Bankuser>(`${this.baseUrl}/createAccount`, user);
  }

  // get method
  balanceInquiry(accountNo: number, pin: number): Observable<Bankuser>{
    return this.httpClient.get<Bankuser>(`${this.baseUrl}/balanceInquiry?accountNo=${accountNo}&pin=${pin}`);
  }

  // put method
  deposite(accountNo: number, pin: number, user: Bankuser): Observable<Bankuser>{
    return this.httpClient.put<Bankuser>(`${this.baseUrl}/deposite?accountNo=${accountNo}&pin=${pin}`, user);
  }

  // REST API services
  // put method
  withdrawal(accountNo: number, pin: number, user: Bankuser): Observable<Bankuser>{
    return this.httpClient.put<Bankuser>(`${this.baseUrl}/withdrawal?accountNo=${accountNo}&pin=${pin}`, user);
  }

  // put method
  changePin(accountNo: number, pin: number, user: Bankuser): Observable<Bankuser>{
    return this.httpClient.put<Bankuser>(`${this.baseUrl}/changePin?accountNo=${accountNo}&pin=${pin}`, user);
  }

  // delete method
  deactivateAccount(accountNo: number, pin: number): Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}/deactivateAccount?accountNo=${accountNo}&pin=${pin}`);
  }
}
