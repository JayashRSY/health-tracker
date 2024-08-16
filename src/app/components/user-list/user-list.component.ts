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

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((userData: User[]) => {
      // Transform data to include computed fields
      const transformedData = userData.map(user => ({
        ...user,
        totalWorkouts: user.workouts.length,
        totalMinutes: user.workouts.reduce((sum, workout) => sum + workout.minutes, 0),
        workouts: user.workouts.map(workout => `${workout.type} (${workout.minutes} minutes)`).join(', ')
      }));

      this.dataSource.data = transformedData;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
