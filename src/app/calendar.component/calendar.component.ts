import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [CommonModule,FullCalendarModule],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    initialDate: '2026-02-11',
    headerToolbar: {
      left: 'title',
      center: '',
      right: 'prev,next'
    },
    // Customizing the title format
    titleFormat: { year: 'numeric', month: 'short' },
    dayHeaderFormat: { weekday: 'short' },
    
    fixedWeekCount: false,
    showNonCurrentDates: true,
    
    // Logic to highlight today or a specific selected date
dayCellDidMount: (info) => {
    const today = new Date().toLocaleDateString('en-CA'); // Gets "2026-02-14"
    const cellDate = info.date.toLocaleDateString('en-CA');

    if (cellDate === today) {
      info.el.classList.add('selected-day');
    }
  },
  
  };
}