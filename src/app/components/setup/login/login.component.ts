import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //   email: string;
  //   password: string;
  //   loginMessage: string;
  //   userRole: number;

  //   constructor(private authService: AuthService,
  //               private router: Router,
  //               private userService: UserService,
  //               private route: ActivatedRoute) {}

  //   ngOnInit(): void {
  //     this.userService.authState$.subscribe(authState => {
  //       if (authState) {
  //         this.router.navigateByUrl(this.route.snapshot.queryParams.returnUrl || '/account');

  //       } else {
  //         this.router.navigateByUrl('/login');
  //       }
  //     });


  //   }


  //   signInWithGoogle() {
  //     this.userService.googleLogin();
  //   }

  //   login(form: NgForm) {
  //     const email = this.email;
  //     const password = this.password;

  //     if (form.invalid) {
  //       return;
  //     }

  //     form.reset();
  //     this.userService.loginUser(email, password);

  //     this.userService.loginMessage$.subscribe(msg => {
  //       this.loginMessage = msg;
  //       setTimeout(() => {
  //         this.loginMessage = '';
  //       }, 2000);
  //     });


  //   }
  // }


  signinForm: FormGroup;
  email: string;
  password: string;
  loginMessage: string;
  userRole: number;

  constructor(private authService: AuthService,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.signinForm = new FormGroup({
      email: new FormControl('', Validators.email),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])

    });
    this.userService.authState$.subscribe(authState => {
      if (authState) {
        this.router.navigateByUrl(this.route.snapshot.queryParams.returnUrl || '/account');

      } else {
        this.router.navigateByUrl('/login');
      }
    });


  }


  signInWithGoogle() {
    this.userService.googleLogin();
  }

  login(form: NgForm) {
    const email = this.email;
    const password = this.password;

    if (form.invalid) {
      return;
    }

    form.reset();
    this.userService.loginUser(email, password);

    // this.userService.loginMessage$.subscribe(msg => {
    //   this.loginMessage = msg;
    //   setTimeout(() => {
    //     this.loginMessage = '';
    //   }, 2000);
    // });


  }
}
