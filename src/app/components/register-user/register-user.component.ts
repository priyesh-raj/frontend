import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl({}, Validators.required),
    password: new FormControl({}, Validators.required),
    confirmPassword: new FormControl({}, Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage(field: string) {
    switch (field) {
      case 'email':
        return this.registerForm.get(field)?.hasError('required') ? 'Enter an email':
          this.registerForm.get(field)?.hasError('email') ? 'Enter a valid email' : '' 
      default:
        return                          ;
    } 
  }
}
