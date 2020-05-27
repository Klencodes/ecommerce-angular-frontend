import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {ResponseModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  auth = false;
  private ServerURL = environment.SERVER_URL;
  private user;
  authState$ = new BehaviorSubject<boolean>(this.auth);
  userData$ = new BehaviorSubject<ResponseModel | SocialUser >(null);


  constructor(private authService: AuthService,
              private httpClient: HttpClient) {
    authService.authState.subscribe(user => {
      if (user != null) {
        this.auth = true;
        this.authState$.next(this.auth);
        this.userData$.next(user);
      }
    });
  }

  //  Login User with Email and Password
  // Authenticate Using Local Account : Not Working
  loginUser(email: string, password: string) {
    this.httpClient.post(`${this.ServerURL}auth/login`, {email, password})
      .subscribe((data: ResponseModel) => {
        console.log(data);
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
