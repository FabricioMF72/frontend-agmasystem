import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gym } from 'src/app/models/gym';
import { GYM_DUMMY_DATA } from 'src/app/modules/core/constants/gym.constant';
import { GymService } from '../../services/gym.service';

@Component({
  selector: 'app-gym-list',
  templateUrl: './gym-list.component.html',
  styleUrls: ['./gym-list.component.css']
})
export class GymListComponent implements OnInit {
  gymList!: Gym[];
  gymSubscription$!: Subscription;
  constructor(private gymService : GymService) { }

  ngOnInit(): void {
    const gymObservable$ = this.gymService.getGymList();
    this.gymSubscription$ = gymObservable$.subscribe((gymList: Gym[]) => {
      this.gymList = gymList
    });
    this.gymService.setgymList(GYM_DUMMY_DATA);
    console.log(this.gymList)
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.gymSubscription$.unsubscribe();
  }

}
