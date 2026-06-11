import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Online_Loan_App_5';

  @ViewChild('loanForm')loanForm !: NgForm;
  onSubmit(){
    if(this.loanForm.invalid){
      return this.loanForm.control.markAllAsTouched();
    }
    this.loanForm.resetForm();
  }
}
