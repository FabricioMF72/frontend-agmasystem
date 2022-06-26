import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Gym } from 'src/app/models/gym';
import { GYM_ROUTE } from 'src/app/modules/core/constants/router.constant';
import { ERROR_TEXT, SUCCESS_TEXT, TOAST_DURATION, TOAST_POSITION } from 'src/app/modules/core/constants/user.constant';
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
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required])
  });
  successText = SUCCESS_TEXT;
  errorText = ERROR_TEXT;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private gymService : GymService
  ) { }

  ngOnInit(): void {
  }
  
  async onSubmit(form: FormGroup) {
    console.log(form)
    console.log(form.value)
    try {
      this.newGym = form.value;
      console.log(this.gymService.addGym(this.newGym))
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
