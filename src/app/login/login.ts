import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  ngOnInit() {
  const token = localStorage.getItem('access_token') || sessionStorage.getItem('access_token');
  if (token) {
    this.router.navigate(['/dashboard'], { replaceUrl: true });
  }
}

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    // Example login validation
    if (this.username === 'admin' && this.password === '1234') {
       localStorage.setItem('access_token', 'demo-token-123');
       localStorage.setItem('username',this.username);
       localStorage.setItem('password',this.password);
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
