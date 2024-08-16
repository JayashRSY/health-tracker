import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  users?: User[];
  selectedUser?: User;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res: User[]) => {
      this.users = res
      this.selectUser(res[0])
    });
  }

  selectUser(user: User): void {
    this.selectedUser = user;
  }
}
