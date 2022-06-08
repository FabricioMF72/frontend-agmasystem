import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../../../../models/user';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  newUser!: User;
  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    identification: new FormControl('', [Validators.required, Validators.minLength(8)]),
    phone: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required])
  });
  SUCCESS_MSG = 'User added successfully!';
  ERROR_MSG = 'Something went wrong!';

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
      console.log(this.userService.addUser(this.newUser))
      this.toastr.success(undefined, this.SUCCESS_MSG,
        {
          timeOut: 3000,
          closeButton: true,
          positionClass: 'toast-bottom-right'
        }
      );
      setTimeout(() => {
        this.router.navigate(['/users']);
      },3000);
    } catch (error) {
      this.toastr.error(undefined, this.ERROR_MSG,
        {
          timeOut: 3000,
          closeButton: true,
          positionClass: 'toast-bottom-right'
        });
    }
  }
}
