import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   loginForm !:FormGroup;
   submitted=false;
   constructor(private formBuilder:FormBuilder) {}
   ngOnInit() {
     this.loginForm=this.formBuilder.group({
      username:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
     });
   }
   get f() {return this.loginForm.controls;}

   onSubmit(){
    this.submitted=true;
    if(this.loginForm.invalid){
      return;
    }
   }
}
