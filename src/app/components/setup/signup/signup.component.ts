import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs/operators';
import { CheckEmailService } from 'src/app/utils/check-email.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) { }
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      last_name: new FormControl('', [Validators.required]),
      first_name: new FormControl('', [Validators.required]),
      // gender: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirm_password: new FormControl('', [Validators.required, Validators.minLength(6)]),

    });
  }

}