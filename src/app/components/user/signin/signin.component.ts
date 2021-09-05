import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']

})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;

  constructor( private formBuilder : FormBuilder,
               private router: Router) { }

  ngOnInit() {
 this.initForm();
  console.log("HEreeee"+this.signInForm.value);
  }
    initForm(){
      this.signInForm= this.formBuilder.group(  {
        email:['',[Validators.required, Validators.email]],
        password:['', Validators.required]

      });
    }

  onSignIn() {
this.router.navigateByUrl("/realties");
  }
}
