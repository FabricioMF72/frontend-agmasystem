import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userList: User[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      identiticationId: 123456789,
      birthDate: new Date('01/01/1990'),
      email: 'John@Doe.com',
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
      phone: '423456782',
      firstEmergencyNumber: '423456782',
      secondEmergencyNumber: '423456782',
      address: '120 mts west of the city',
      districtId: 2
    }
  ];
  public getUserList(): User[] {
    return this.userList;
  }
  public setUserList(value: User[]) {
    this.userList = value;
  }
  constructor() { }
}
