import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Gym } from 'src/app/models/gym';
import { SideBarItem } from 'src/app/models/sideBarItem';
import { GYM_DUMMY_DATA } from 'src/app/modules/core/constants/gym.constant';
import { SIDEBAR_ITEM_LIST } from 'src/app/modules/core/constants/sidebar.constant';
import { USER_DUMMY_DATA } from 'src/app/modules/core/constants/user.constant';
import { GymService } from 'src/app/modules/gym/services/gym.service';
import { UserService } from 'src/app/modules/user/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  sideBarItemList!: SideBarItem[];
  gymList: Gym[] = [];
  gymSubscription$!: Subscription;
  selectedGym!: Gym;
  constructor(private gymService : GymService, private userService: UserService) { }

  ngOnInit(): void {
    this.sideBarItemList = SIDEBAR_ITEM_LIST
    const gymObservable$ = this.gymService.getGymList();
    this.gymSubscription$ = gymObservable$.subscribe((gymList: Gym[]) => {
      this.gymList = gymList
      this.selectedGym = this.gymList.find(gym => gym.selected === true)! as Gym;
    });
    this.gymService.setGymList(GYM_DUMMY_DATA);
    console.log(this.gymList)
  }

  changeSelectedGym(){
    console.log(this.selectedGym)
    this.gymService.setSelectedGym(this.selectedGym.gymId);
    this.userService.setUserList(USER_DUMMY_DATA);
    console.log(this.gymService.getSelectedGym())
  }

  ngOnDestroy(): void {
    console.log('destroy');
    this.gymSubscription$.unsubscribe();
  }
}
