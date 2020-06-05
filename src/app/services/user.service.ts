import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import { SocialUser, AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ResponseModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  auth = false;
  private ServerURL = environment.SERVER_URL;
  private user;
  authState$ = new BehaviorSubject<boolean>(this.auth);
  userData$ = new BehaviorSubject<SocialUser | ResponseModel>(null);


  constructor(private authService: AuthService,
              private httpClient: HttpClient,
              private spinner: NgxSpinnerService,
              private toast: ToastrService,
              private router: Router) {

    authService.authState.subscribe((user: SocialUser) => {
      if (user != null) {
        this.toast.success(`Login successfull.`, "User login", {
          timeOut: 1500,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right'
        })
        this.auth = true;
        this.authState$.next(this.auth);
        this.userData$.next(user);
      } 
    });
  }

  //  Login User with Email and Password
  loginUser(email: string, password: string) {
    this.httpClient.post(`${this.ServerURL}auth/login`, {email, password})
      .subscribe((data: ResponseModel) => {
        this.auth = data.auth;
        this.authState$.next(this.auth);
        this.userData$.next(data);
      });
  }

//  Google Authentication
  googleLogin() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
   
  }

  logout() {
    this.authService.signOut();
    this.auth = false;
    this.authState$.next(this.auth);
  }


}
