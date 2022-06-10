import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Gym } from 'src/app/models/gym';
import { GYM_DUMMY_DATA } from '../../core/constants/gym.constant';

@Injectable({
  providedIn: 'root'
})
export class GymService {

  private gymList$ = new Subject<Gym[]>();
  private gymList!:Gym[];

  constructor() { 
  }

  public getGymList(): Observable<Gym[]> {
    return this.gymList$.asObservable();
  }

  public setgymList(value: Gym[]) {
    this.gymList = value;
    this.gymList$.next(this.gymList);
  }

  public getgymById(id: number): Gym {
    let gym: Gym = this.gymList.find(gym => gym.id === id) as Gym;
    return gym;
  }

  public addgym(gym: Gym): number {
    gym.id = this.gymList.length + 1;
    gym.created_at = new Date(gym.created_at);
    this.gymList.push(gym);
    this.gymList$.next(this.gymList);
    return gym.id;
  }

  public updategym(gym: Gym): Gym {
    let index = this.gymList.findIndex(u => u.id === gym.id);
    this.gymList[index] = gym;
    this.gymList$.next(this.gymList);
    return gym;
  }

  public deletegym(id: number): Gym[] {
    let index = this.gymList.findIndex(u => u.id === id);
    let response = this.gymList.splice(index, 1);
    this.gymList$.next(this.gymList);
    return response;
  }
  
}
