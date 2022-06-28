import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ERROR_TEXT, SUCCESS_TEXT_CREATED_USER, TOAST_DURATION, TOAST_POSITION, USER_ROUTE } from 'src/app/modules/core/constants/user.constant';
import { User } from '../../../../models/user';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  newUser!: User;
  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    identiticationId: new FormControl('', [Validators.required, Validators.minLength(8)]),
    phoneNumber: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    cityId: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    zipCode: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]),
  });
  successText = SUCCESS_TEXT_CREATED_USER;
  errorText = ERROR_TEXT;

  constructor(
    private toastr: ToastrService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  async onSubmit(form: FormGroup) {
    try {
      this.newUser = form.value;
      this.userService.addUser(this.newUser);
      this.toastr.success(undefined, this.successText,
        {
          timeOut: TOAST_DURATION,
          closeButton: true,
          positionClass: TOAST_POSITION
        }
      );
      setTimeout(() => {
        this.router.navigate([USER_ROUTE]);
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
