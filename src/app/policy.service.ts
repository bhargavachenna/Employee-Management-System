import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  server_url: string = '/api/'

  constructor(private httpClient : HttpClient) { }

  public getPolicies(){
    return this.httpClient.get(this.server_url+'policies');
  }
  public getPolicy(policyId){
    return this.httpClient.get(`${this.server_url+'policies'}/${policyId}`);
  }
  public createPolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
      return this.httpClient.post(`${this.server_url + 'policies'}`, policy)
  }

  public deletePolicy(policyId){
      return this.httpClient.delete(`${this.server_url + 'policies'}/${policyId}`)
  }
  public updatePolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
      return this.httpClient.put(`${this.server_url + 'policies'}/${policy.id}`, policy)
  }

}