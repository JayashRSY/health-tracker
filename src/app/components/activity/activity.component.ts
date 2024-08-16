import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { Chart } from 'chart.js';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  users: any = [];
  selectedUser: any = null;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res: any) => {
      this.users = res
      console.log("🚀 ~ file: activity.component.ts:18 ~ this.users:", this.users);
    });
  }

  selectUser(user: any): void {
    this.selectedUser = user;
  }
}
