import { Component ,AfterViewInit} from '@angular/core';
declare var $: any; 
@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements AfterViewInit{



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
