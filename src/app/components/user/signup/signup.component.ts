import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ResourceService} from '../../../services/resource.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  userForm: FormGroup;

  constructor( private formBuilder: FormBuilder,
               private resourceService: ResourceService) { }

  ngOnInit() {
    this.initForm();
  }
initForm(){
    this.userForm = this.formBuilder.group(
      {
        firstName: [''],
        lastName:[''],
        email:[''],
        password:[''],

        phone:[''],
        country:[''],
        language:['']

      });
}
  onSignUp() {
    console.log(" formulaire de sign up done!");
    var values ={
     "firstName": this.userForm.get("firstName").value,
     "lastName": this.userForm.get("lastName").value,
     "email":this.userForm.get("email").value,
     "password":this.userForm.get('password').value,

     "phone":Number(this.userForm.get('phone').value),
     "country": {"id":Number(this.userForm.get('country').value)},
     "language":{"id":Number(this.userForm.get('language').value)}


   };

          this.resourceService.saveResource("/user", values).subscribe(
            value => {
               console.log("SOItttt "+JSON.stringify(value));
            },
            error => {
              console.log(error);
            }
          );
  }
}
