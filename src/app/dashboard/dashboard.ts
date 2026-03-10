import { Component } from '@angular/core';
import { StatusCards } from '../status-cards/status-cards';   
import { CalendarComponent } from '../calendar.component/calendar.component';
import { ChartSection } from '../chart-section/chart-section';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatusCards,CalendarComponent,ChartSection],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor() {}


}
