import { Component, OnInit } from '@angular/core';
import {EmailValidator, FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {CheckEmailService} from 'src/app/utils/check-email.service';
import {UserService} from 'src/app/services/user.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
//   registrationForm: FormGroup;
//   // tslint:disable-next-line:max-line-length
//   private emailPattern = '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';
//   comparePassword: boolean;
//   registrationMessage: string;

//   constructor(private fb: FormBuilder,
//               // private checkEmailService: CheckEmailService,
//               private userService: UserService) {

//     this.registrationForm = fb.group({
//       first_name: ['', [Validators.required, Validators.minLength(4)]],
//       last_name: ['', [Validators.required, Validators.minLength(4)]],
//       email: ['', [Validators.required, Validators.pattern(this.emailPattern)],
//         // [this.checkEmailService.emailValidate()]
//       ],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
//     });
//   }

//   get formControls() {
//     return this.registrationForm.controls;
//   }


//   ngOnInit(): void {
//     this.registrationForm.valueChanges
//       .pipe(map((controls) => {
//         return this.formControls.confirmPassword.value === this.formControls.password.value;
//       }))
//       .subscribe(passwordState => {
//         console.log(passwordState);
//         this.comparePassword = passwordState;
//       });
//   }

//   registerUser() {

//     if (this.registrationForm.invalid) {
//       return;
//     }

//     // @ts-ignore
//     this.userService.registerUser({...this.registrationForm.value}).subscribe((response: { message: string }) => {
//       this.registrationMessage = response.message;
//     });

//     this.registrationForm.reset();
//   }
// }

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) { }
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      last_name: new FormControl('', [Validators.required]),
      first_name: new FormControl('', [Validators.required]),
      // gender: new FormControl(''),
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirm_password: new FormControl('', [Validators.required, Validators.minLength(6)]),

    });
  }

}