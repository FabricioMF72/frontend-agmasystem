import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import { ALL_STATUS, DEFAULT_STATUS, USER_DUMMY_DATA } from '../../core/constants/user.constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList$ = new Subject<User[]>();
  private userList =  USER_DUMMY_DATA;

  public getUserList(): Observable<User[]> {
    return this.userList$.asObservable();
  }

  public setUserList(value: User[]) {
    this.userList$.next(value);
  }

  public getUserById(id: number): User {
    let user: User = this.userList.find(user => user.id === id) as User;
    return user;
  }

  public addUser(user: User): number {
    user.id = this.userList.length + 1;
    user.birthDate = new Date(user.birthDate);
    user.status = DEFAULT_STATUS;
    this.userList.push(user);
    this.userList$.next(this.userList);
    return user.id;
  }

  public updateUser(user: User): User {
    let index = this.userList.findIndex(u => u.id === user.id);
    this.userList[index] = user;
    this.userList$.next(this.userList);
    return user;
  }

  public deleteUser(id: number): User[] {
    let index = this.userList.findIndex(u => u.id === id);
    let response = this.userList.splice(index, 1);
    this.userList$.next(this.userList);
    return response;
  }

  public filterUsersByStatus(filter: string): void {
    if (filter === ALL_STATUS) {
      this.userList = this.userList;
    } else {
      this.userList = this.userList.filter(user => user.status === filter);
    }
    this.userList$.next(this.userList);
  }
  constructor() { }
}
