import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userName: string = '';
  workouts: { type: string; minutes: number }[] = [{ type: '', minutes: 0 }];

  constructor(private userService: UserService, private _router: Router) { }

  addWorkout(): void {
    this.workouts.push({ type: '', minutes: 0 });
  }

  removeWorkout(index: number): void {
    console.log("🚀 ~ file: user-form.component.ts:22 ~ index:", index);
    if (this.workouts.length > 1 && index >= 0 && index < this.workouts.length) {
      this.workouts.splice(index, 1);
    }
  }

  addUser(): void {
    if (this.userName && this.workouts.length) {
      const newUser: User = {
        id: new Date().getTime(), // simple unique ID
        name: this.userName,
        workouts: this.workouts.filter(w => w.type && w.minutes > 0) // Ensure valid workouts
      };
      this.userService.addUser(newUser);
      this.resetForm();
      this._router.navigate(['user-list']);
    }
  }

  private resetForm(): void {
    this.userName = '';
    this.workouts = [{ type: '', minutes: 0 }];
  }
}
