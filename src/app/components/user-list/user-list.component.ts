import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'workouts', 'totalWorkouts', 'totalMinutes'];
  dataSource = new MatTableDataSource<any>([]);
  workoutTypes: string[] = ['Running', 'Cycling', 'Swimming', 'Yoga'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Filters
  nameFilter: string = '';
  workoutTypeFilter: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((userData: User[]) => {
      const transformedData = userData.map(user => ({
        ...user,
        totalWorkouts: user.workouts.length,
        totalMinutes: user.workouts.reduce((sum, workout) => sum + workout.minutes, 0),
        workouts: user.workouts.map(workout => `${workout.type} (${workout.minutes} minutes)`).join(', ')
      }));

      this.dataSource.data = transformedData;
      this.dataSource.paginator = this.paginator;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(): void {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const nameMatches = data.name.toLowerCase().includes(this.nameFilter.toLowerCase());
      const workoutTypeMatches = this.workoutTypeFilter ? data.workouts.toLowerCase().includes(this.workoutTypeFilter.toLowerCase()) : true;
      return nameMatches && workoutTypeMatches;
    };
    this.dataSource.filter = `${this.nameFilter}${this.workoutTypeFilter}`;
  }
}
