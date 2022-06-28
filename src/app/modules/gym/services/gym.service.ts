import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Gym } from 'src/app/models/gym';

@Injectable({
  providedIn: 'root'
})
export class GymService {

  private gymList$ = new Subject<Gym[]>();
  private gymList!: Gym[];

  constructor() {
  }

  public getGymList(): Observable<Gym[]> {
    return this.gymList$.asObservable();
  }

  public setGymList(value: Gym[]) {
    this.gymList = value;
    this.gymList$.next(this.gymList);
  }

  public getGymById(id: number): Gym {
    let gym: Gym = this.gymList.find(gym => gym.gymId === id) as Gym;
    return gym;
  }

  public addGym(gym: Gym): number {
    gym.gymId = this.generateId();
    gym.createdAt = new Date();
    gym.updatedAt = new Date();
    gym.createdBy = 1;
    gym.selected = false;
    this.gymList.push(gym);
    this.gymList$.next(this.gymList);
    return gym.gymId;
  }
  generateId(): number {
    return Math.floor(Math.random() * 1000000);
  }

  public updateGym(gym: Gym): Gym {
    let index = this.gymList.findIndex(u => u.gymId === gym.gymId);
    this.gymList[index] = gym;
    this.gymList$.next(this.gymList);
    return gym;
  }

  public deleteGym(id: number): Gym[] {
    let index = this.gymList.findIndex(u => u.gymId === id);
    let response = this.gymList.splice(index, 1);
    this.gymList$.next(this.gymList);
    return response;
  }

  setSelectedGym(id: number) {
    let index = this.gymList.findIndex(u => u.gymId === id);
    this.setAllGymUnselected();
    this.gymList[index].selected = true;
    this.gymList$.next(this.gymList);
  };

  setAllGymUnselected() {
    this.gymList.forEach(gym => {
      gym.selected = false;
    }
    );
  }

  public getSelectedGym() {
    let selectedGym = this.gymList.find(u => u.selected === true);
    return selectedGym;
  }

}
