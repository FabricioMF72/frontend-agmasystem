import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import { ALL_STATUS, DEFAULT_STATUS, USER_DUMMY_DATA } from '../../core/constants/user.constant';
import { GymService } from '../../gym/services/gym.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList$ = new Subject<User[]>();
  private userList =  USER_DUMMY_DATA;
  constructor(private gymService: GymService) { }
  public getUserList(): Observable<User[]> {
    return this.userList$.asObservable();
  }

  public setUserList(userList: User[]) {
    userList = this.getUserListByGymSelected(userList);
    this.userList = userList;
    this.userList$.next(userList);
  }

  public getUserById(id: number): User {
    let user: User = this.userList.find(user => user.userId === id) as User;
    return user;
  }

  public addUser(user: User): number {
    user.userId = this.userList.length + 1;
    user.birthDate = new Date(user.birthDate);
    user.statusSubscription = DEFAULT_STATUS;
    user.gymId = this.gymService.getSelectedGym()!.gymId;
    this.userList.push(user);
    this.userList$.next(this.userList);
    return user.userId;
  }

  public updateUser(user: User): User {
    let index = this.userList.findIndex(u => u.userId === user.userId);
    this.userList[index] = user;
    this.userList$.next(this.userList);
    return user;
  }

  public deleteUser(id: number): User[] {
    let index = this.userList.findIndex(u => u.userId === id);
    let response = this.userList.splice(index, 1);
    this.userList$.next(this.userList);
    return response;
  }

  public filterUsersByStatus(filter: string): void {
    console.log("this.userList",this.userList)
    if (filter === ALL_STATUS) {
      this.userList = this.userList;
    } else {
      this.userList = this.userList.filter(user => user.statusSubscription === filter);
    }
    this.userList$.next(this.userList);
  }

  private getUserListByGymSelected(userList: User[]): User[] {
    console.log(userList.filter(user => user.gymId === this.gymService.getSelectedGym()!.gymId))
    return userList.filter(user => user.gymId === this.gymService.getSelectedGym()!.gymId);
  }
  
}
