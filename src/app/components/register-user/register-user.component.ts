import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%?&])[A-Za-zd$@$!%?&]'
      ),
    ]),
    confirmPassword: new FormControl('', Validators.required),
  });
  constructor() {}

  ngOnInit(): void {}

  getErrorMessage(field: string) {
    console.log(this.registerForm.get(field)?.errors);
    switch (field) {
      case 'email':
        return this.registerForm.get(field)?.hasError('required')
          ? 'Enter an email'
          : this.registerForm.get(field)?.hasError('email')
          ? 'Enter a valid email'
          : '';
      case 'password':
        return this.registerForm.get(field)?.hasError('required')
          ? 'Enter a password'
          : this.registerForm.get(field)?.hasError('length') ||
            this.registerForm.get(field)?.hasError('pattern')
          ? `Password must be of: \n
          Minimum eight characters
          At least one uppercase letter
          At least one lowercase letter
          At least one number
          At least one special character
          `
          : 'Enter a valid password';
      case 'confirmPassword':
        return this.registerForm.get(field)?.hasError('required')
          ? 'Re-enter password'
          : this.registerForm.get(field)?.hasError('length') ||
            this.registerForm.get(field)?.hasError('pattern')
          ? 'Enter password doesnt match'
          : '';
      default:
        return;
    }
  }

  onSubmit() {}

  onCloseIconClick() {}
}
