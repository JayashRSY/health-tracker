import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-workout-chart',
  templateUrl: './workout-chart.component.html',
  styleUrls: ['./workout-chart.component.css']
})
export class WorkoutChartComponent implements OnInit, OnChanges {
  @Input() selectedUser: any;  // Input for the selected user

  chartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      {
        label: 'Workout Minutes',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  };

  chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Workout Type'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Minutes'
        },
        beginAtZero: true
      }
    }
  };

  ngOnInit(): void {

    console.log("🚀 ~ file: workout-chart.component.ts:11 ~ selectedUser:", this.selectedUser);
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedUser']) {
      this.updateChart();
    }
  }

  private updateChart(): void {
    if (!this.selectedUser) return;

    const typeMap = new Map<string, number>();

    // Aggregate minutes by workout type
    this.selectedUser.workouts.forEach((workout: any) => {
      if (typeMap.has(workout.type)) {
        typeMap.set(workout.type, typeMap.get(workout.type)! + workout.minutes);
      } else {
        typeMap.set(workout.type, workout.minutes);
      }
    });

    // Prepare chart data
    this.chartData = {
      labels: Array.from(typeMap.keys()),
      datasets: [
        {
          label: 'Workout Minutes',
          data: Array.from(typeMap.values()),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    };
  }
}
