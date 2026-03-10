import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar implements OnInit {
  activeMenu: string = '';
  activeSubMenu: string = '';
  userRoles: number[] = [];
  isCollapsed = false;
  currentUrl = '';
  constructor(private router: Router) {
      this.router.events.subscribe(() => {
    this.currentUrl = this.router.url;
  });
   }


  ngOnInit(): void {
    const rolesString = localStorage.getItem('roles');
    this.userRoles = rolesString ? JSON.parse(rolesString) : [];


  }
  isCustomerManageActive(): boolean {
  return (
    this.currentUrl.startsWith('/customerManage') ||
    this.currentUrl.startsWith('/addCustomer')
  );
}

   toggleMenu(menu: string): void {
  this.activeMenu = this.activeMenu === menu ? '' : menu;
  this.activeSubMenu = ''; 
}

  toggleSubMenu(subMenu: string): void {
    this.activeSubMenu = this.activeSubMenu === subMenu ? '' : subMenu;
  }
  toggleMobileMenu(): void {
    document.body.classList.toggle('mobile-menu-open');
  }
  toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
  }
}
