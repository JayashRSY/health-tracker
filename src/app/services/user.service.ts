import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private storageKey = 'userData';

  constructor() {
    this.initDefaultData();
  }

  private initDefaultData(): void {
    // const defaultUsers: User[] = [
    //   { id: 1, name: 'John Doe', workouts: [{ type: 'Running', minutes: 30 }, { type: 'Cycling', minutes: 45 }] },
    //   { id: 2, name: 'Jane Smith', workouts: [{ type: 'Swimming', minutes: 60 }, { type: 'Running', minutes: 20 }] },
    //   { id: 3, name: 'Mike Johnson', workouts: [{ type: 'Yoga', minutes: 50 }, { type: 'Cycling', minutes: 40 }] }
    // ];

    // // this.saveUsers(defaultUsers);
    // defaultUsers.forEach((user: User) => {
    //   this.addUser(user)
    // })
  }

  getUsers(): Observable<User[]> {
    const users = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    return of(users);
  }

  saveUsers(users: User[]): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(users));
    } catch (error) {
      console.error('Failed to save users to local storage', error);
    }
  }

  addUser(user: User): void {
    this.getUsers().subscribe(users => {
      users.push(user);
      this.saveUsers(users);
    });
  }
}
