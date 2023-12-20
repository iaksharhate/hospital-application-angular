import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormArray,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  userDetails!: User;
  signupForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuider: FormBuilder) {}
  ngOnInit() {
    this.signupForm = this.formBuider.group({
      user: ['patient'],
      firstName:['', [Validators.required,Validators.pattern(/^[A-Z]{1}[a-zA-Z\\s]{2,}$/)]],
      lastName: ['', [Validators.required,Validators.pattern(/^[A-Z]{1}[a-zA-Z\\s]{2,}$/)]],
      gender: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.pattern(/^(?:1[0-4]\d|150|[1-9]\d|\d)$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$&])[A-Za-z0-9@#$&]{8,}$/)]],
      confirmPassword: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      pincode: ['', [Validators.required, Validators.pattern(/^[1-9][0-9]{5}$/)]],
      photo: ['', []],
      specialization: ['', []],
      experience: ['', []],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  get formDetails() {
    return this.signupForm.controls;
  }

  handleSignup = () => {
    this.submitted = true;

    if (this.signupForm.invalid) {
      // if(this.signupForm.get('firstName')?.untouched){
      //   alert('Please enter First Name!');
      // }
      // if(this.signupForm.get('lastName')?.untouched){
      //   alert('Please enter Last Name!');
      // }
      // if(this.signupForm.get("gender")?.untouched){
      //   alert('Please select gender!');
      // }
      // if(this.signupForm.get('age')?.untouched){
      //   alert('Please enter age!');
      // }
      // if(this.signupForm.get('email')?.untouched){
      //   alert('Please enter Email!');
      // }
      // if(this.signupForm.get('password')){
      //   alert('Please enter Password!');
      // }
      // if(this.signupForm.get('confirmPassword')){
      //   alert('Please enter Confirm Password!');
      // }
      // if(this.signupForm.get('city')){
      //   alert('Please select city!');
      // }
      // if(this.signupForm.get('state')){
      //   alert('Please select state!');
      // }
      // if(this.signupForm.get('pincode')){
      //   alert('Please select pincode!');
      // }
      return;
    } else {
      this.userDetails = this.signupForm.value;
      alert(JSON.stringify(this.userDetails))
      console.log(this.userDetails);
    }
  };

  validateForm() {
    this.signupForm.markAsDirty();
    this.signupForm.markAsTouched();
  }
}
