import { Component } from '@angular/core';

@Component({
  selector: 'app-cf',
  templateUrl: './cf.component.html',
  styleUrls: ['./cf.component.css']
})
export class CfComponent {
  showPolicyModal:boolean=false
  showRefundModal:boolean=false
  showTermsModal:boolean=false

  openTermsModal(){
    this.showTermsModal = true;
  }
  openRefundModal(){
    this.showRefundModal = true;
  }
  openPolicyModal(){
    this.showPolicyModal = true;
  }

  closeTermsModal() {
    this.showTermsModal = false;
  }
  closePolicyModal() {
    this.showPolicyModal = false;
  }
  closeRefundModal() {
    this.showRefundModal = false;
  }
}
