import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(6)])
  });

  error: string = '';
  constructor(private loginService: LoginService, private router: Router) {}

  submit() {
    if (this.form.valid) {
      this.loginService.login(this.form.value).subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          this.router.navigateByUrl('/');
        },
        error: (e) => {
          this.error = 'Invalid credentials'
        }
      });
    }
  }

  getErrorMessage(): string {
    if(this.form.controls['email'].hasError('required')) {
      return 'You mus enter a value';
    }

    if(this.form.controls['password'].hasError('required')) {
      return 'You mus enter a value';
    }

    if(this.form.controls['password'].hasError('min')) {
      return 'Not a valid password';
    }

    this.error = '';

    return this.form.controls['email'].hasError('email')
      ? 'Not a valid email'
      : ''
  }
}
