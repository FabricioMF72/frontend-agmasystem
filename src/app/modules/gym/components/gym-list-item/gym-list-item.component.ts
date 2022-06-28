import { Component, Input, OnInit } from '@angular/core';
import { Gym } from 'src/app/models/gym';
import { GymService } from '../../services/gym.service';

@Component({
  selector: 'app-gym-list-item',
  templateUrl: './gym-list-item.component.html',
  styleUrls: ['./gym-list-item.component.scss']
})
export class GymListItemComponent implements OnInit {
  @Input() gym!: Gym;
  constructor(private gymService : GymService) { }

  ngOnInit(): void {
    console.log(this.gym)
  }

  setSelectedGym(selectedGym: Gym) {
    this.gymService.setSelectedGym(selectedGym.gymId);
    console.log(this.gymService.getSelectedGym())
  }
}
