
import { Component, signal,HostListener , OnInit, AfterViewInit} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './sidebar/sidebar';
import { Navbar } from './navbar/navbar';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { filter } from 'rxjs/operators';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

import { RouterModule } from '@angular/router'; 
// import { ServerService } from './services/server.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule,RouterOutlet,Sidebar,Navbar,FormsModule,CommonModule,RouterModule,ReactiveFormsModule], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public file_path: string = "";
	templateAuthView = false;
  isFullView = false;
 constructor(private router: Router, private route: ActivatedRoute) {}

 ngOnInit(): void {
  const currentUrl = this.router.url;

    if (currentUrl.includes('/login')) {
      if (localStorage.getItem('access_token')) {
        this.router.navigate(['/dashboard'], { replaceUrl: true });
        return;
      }

      this.templateAuthView = true;
      localStorage.clear();
    } else if (localStorage.getItem('access_token')) {
      this.templateAuthView = false;
    } else {
      this.router.navigate(['/login'], { replaceUrl: true });
      this.templateAuthView = true;
    }
  

 }
toggleFullView(value: boolean) {
  this.isFullView = value;
}

 onActivate(event: any): any {
  const currentUrl = this.router.url;
  this.file_path = currentUrl;

  if (currentUrl.includes('/login')) {
    this.templateAuthView = true;
    localStorage.clear();
    if (localStorage.getItem('access_token')) {
      this.router.navigate(['/dashboard']);
    }
    return;
  }

  if (localStorage.getItem('access_token')) {
    this.templateAuthView = false;
  } else {
    this.router.navigate(['/login'], { replaceUrl: true });
    this.templateAuthView = true;
  }
}

}
