import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Gym } from 'src/app/models/gym';
import { SUCCESS_TEXT_CREATED_GYM } from 'src/app/modules/core/constants/gym.constant';
import { GYM_ROUTE } from 'src/app/modules/core/constants/router.constant';
import { ERROR_TEXT, TOAST_DURATION, TOAST_POSITION } from 'src/app/modules/core/constants/user.constant';
import { GymService } from '../../services/gym.service';

@Component({
  selector: 'app-add-gym',
  templateUrl: './add-gym.component.html',
  styleUrls: ['./add-gym.component.scss']
})
export class AddGymComponent implements OnInit {

  newGym!: Gym;
  gymForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    cityId: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl(88888888, [Validators.required]),
    zipCode: new FormControl(10000, [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
    email: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('', [Validators.required]),
  });
  successText = SUCCESS_TEXT_CREATED_GYM;
  errorText = ERROR_TEXT;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private gymService : GymService
  ) { }

  ngOnInit(): void {
  }
  
  async onSubmit(form: FormGroup) {
    try {
      this.newGym = form.value;
      console.log(this.newGym);
      this.gymService.addGym(this.newGym)
      this.toastr.success(undefined, this.successText,
        {
          timeOut: TOAST_DURATION,
          closeButton: true,
          positionClass: TOAST_POSITION
        }
      );
      setTimeout(() => {
        this.router.navigate([GYM_ROUTE]);
      },3000);
    } catch (error) {
      this.toastr.error(undefined, this.errorText,
        {
          timeOut: TOAST_DURATION,
          closeButton: true,
          positionClass: TOAST_POSITION
        });
    }
  }
}
