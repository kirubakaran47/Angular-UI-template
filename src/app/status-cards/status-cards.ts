import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-status-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-cards.html',
  styleUrl: './status-cards.css',
})
export class StatusCards {
  stats = [
    {
      label: 'Active Projects',
      value: '08',
      icon: '📊',
      color: 'green',
      action: 'View',
      extra: '+ Add Project'
    },
    {
      label: 'Pending Tasks',
      value: '05',
      icon: '📄',
      color: 'orange',
      progress: 75,
      action: 'View'
    },
    {
      label: "Today's Tasks",
      value: '12',
      icon: '📝',
      color: 'blue',
      progress: 50,
      action: 'View'
    },
    {
      label: 'Upcoming Tasks',
      value: '08',
      icon: '📅',
      color: 'purple',
      action: 'View'
    },
    {
      label: 'Add Log',
      value: '',
      icon: '➕',
      color: 'indigo',
      action: 'Enter Logs'
    },
    {
      label: 'Completed',
      value: '20',
      icon: '✔️',
      color: 'green',
      action: 'View'
    },
    {
      label: 'Logged Hours',
      value: '5.5 Hrs',
      icon: '⏰',
      color: 'gray',
      action: 'View'
    }
  ];
  getConicGradient(progress: number, color: string): string {
  return `conic-gradient(${color} 0% ${progress}%, #eee ${progress}% 100%)`;
}
}
