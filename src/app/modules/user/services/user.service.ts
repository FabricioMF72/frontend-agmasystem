import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList$ = new Subject<User[]>();
  private userList =  [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      identiticationId: 123456789,
      birthDate: new Date('01/01/1990'),
      email: 'John@Doe.com',
      status : "active",
      phone: '123456789',
      firstEmergencyNumber: '123456789',
      secondEmergencyNumber: '123456789',
      address: '150 mts west of the city',
      districtId: 1
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      identiticationId: 323456789,
      birthDate: new Date('01/05/1992'),
      email: 'Jane@Doe.com',
      status : "inactive",
      phone: '423456782',
      firstEmergencyNumber: '423456782',
      secondEmergencyNumber: '423456782',
      address: '120 mts west of the city',
      districtId: 2
    }
  ]
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
    user.status = 'active';
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
    if (filter === 'all') {
      this.userList = this.userList;
    } else {
      this.userList = this.userList.filter(user => user.status === filter);
    }
    this.userList$.next(this.userList);
  }
  constructor() { }
}
