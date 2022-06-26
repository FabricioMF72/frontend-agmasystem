import { Component, Input, OnInit } from '@angular/core';
import { Gym } from 'src/app/models/gym';

@Component({
  selector: 'app-gym-list-item',
  templateUrl: './gym-list-item.component.html',
  styleUrls: ['./gym-list-item.component.scss']
})
export class GymListItemComponent implements OnInit {
  @Input() gym!: Gym;
  constructor() { }

  ngOnInit(): void {
    console.log(this.gym)
  }

}
