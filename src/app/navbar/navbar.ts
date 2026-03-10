import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-navbar',
  imports: [CommonModule,FormsModule],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  constructor(private router: Router) { }
  username: string = '';
  role: string = '';
  selectedUser: any;
  @Output() fullViewToggle = new EventEmitter<boolean>();
  @Output() sidebarToggle = new EventEmitter<void>();
  isFullView = false;

  companies: string[] = ['Nexa Office InfoSystems LLP', 'Office InfoSystems', 'TCS'];
  selectedCompany: string = 'Nexa Office InfoSystems LLP';
  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  ngOnInit() {
    // this.username = localStorage.getItem('username') || 'Guest';
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
  onChange(value: string) {
    console.log('Selected Company:', value);
  }
  toggleFullView() {
    if (!this.isFullView) {
      // ENTER fullscreen
      document.documentElement.requestFullscreen();
      this.isFullView = true;
      this.fullViewToggle.emit(true);
    } else {
      // EXIT fullscreen
      document.exitFullscreen();
      this.isFullView = false;
      this.fullViewToggle.emit(false);
    }
  }

  toggleMobileMenu(): void {
    document.body.classList.toggle('mobile-menu-open');
  }


}
