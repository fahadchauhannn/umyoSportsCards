import { Component ,AfterViewInit} from '@angular/core';
declare var $: any; 
@Component({
  selector: 'app-pledge',
  templateUrl: './pledge.component.html',
  styleUrls: ['./pledge.component.css']
})
export class PledgeComponent implements AfterViewInit{



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
  ngAfterViewInit(): void {
    
    
    
  }
}
