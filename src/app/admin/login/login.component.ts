import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'beam-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;
  loading = false;
  showPassword = false;
  inputType = 'password';
  timeout: number | undefined;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    if (localStorage.getItem('currentUser')) {
      this.router.navigate(['/admin/dashboard']);
    }
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: false,
    });
  }

  toggleShow() {
    this.showPassword = !this.showPassword;
    this.inputType = this.showPassword ? 'text' : 'password';
  }

  onSubmit() {
    this.router.navigate(['/admin/bookings']);
    return;
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.authService.login(this.f['email'].value, this.f['password'].value).subscribe({
      next: (response) => {
        console.log('Received data: ', response);
        if ((response as any).status == "error") {
          this.loading = false;
          Swal.fire({
            title: 'Error',
            icon: 'error',
            text: (response as any).message,
          });
        } else {
          this.router.navigate(['/admin/dashboard']);
          this.submitted = false;
          this.loading = false;
          this.loginForm.reset();
        }
      }
    });
  }
}


