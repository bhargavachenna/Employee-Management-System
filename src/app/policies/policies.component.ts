import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  policies: any[] = [];
  constructor(private policyService: PolicyService) { }

  ngOnInit() {
    this.policyService.getPolicies().subscribe((data : any[])=>{
        console.log(data);
        this.policies = data;
    })
  }
  public deletePolicy(policyId){
    this.policyService.deletePolicy(policyId).subscribe((ret)=>{
          console.log("Policy deleted: ", ret);
    })
    this.policyService.getPolicies().subscribe((data : any[])=>{
        console.log(data);
        this.policies = data;
    })
} 

}