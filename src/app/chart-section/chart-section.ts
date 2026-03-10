import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart-section',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './chart-section.html',
  styleUrl: './chart-section.css',
})
export class ChartSection {
  public barChartType: ChartType = 'bar';

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          color: '#94a3b8',
          font: { 
            size: 12, 
            weight: 500 
          }
        }
      },
      tooltip: { enabled: true }
    },
    scales: {
      x: { 
        grid: { display: false },
        ticks: { 
          color: '#000', 
          font: { weight: 'bold', size: 11 } 
        },
        border: { display: false }
      },
      y: { 
        display: false, 
        grid: { display: false } 
      }
    }
    // REMOVED categoryPercentage and barPercentage from here
  };

  public barChartData: ChartData<'bar'> = {
    labels: ['OIS TASK', 'OIS VAULT', 'CREW GRID', 'OIS HCM', 'OIS MEET', ''],
    datasets: [
      { 
        data: [45, 52, 60, 28, 115, 38], 
        label: 'Estimated', 
        backgroundColor: '#a855f7', 
        borderRadius: 6,
        // ADDED HERE:
        categoryPercentage: 0.7, 
        barPercentage: 0.9
      },
      { 
        data: [62, 98, 60, 48, 72, 45], 
        label: 'Actual Hours', 
        backgroundColor: '#f59e0b', 
        borderRadius: 6,
        // ADDED HERE:
        categoryPercentage: 0.7,
        barPercentage: 0.9
      }
    ]
  };
}