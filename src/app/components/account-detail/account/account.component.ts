import { Component, OnInit } from '@angular/core';
import { AuthService, SocialUser } from 'angularx-social-login';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  myUser: any;

  constructor(private authService: AuthService,
    private userService: UserService,
    private router: Router) {
}

ngOnInit(): void {
this.userService.userData$
.pipe(
map(user => {
if (user instanceof SocialUser) {
  return {
    ...user,
    // email: 'test@test.com',

  };
  } else {
    return user;
  }
})
)
.subscribe((data: ResponseModel | SocialUser) => {
  this.myUser = data;
  });
}

logout() {
this.userService.logout();
}
}
interface ResponseModel {
  token: string;
  auth: boolean;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  photoUrl: string;
  userId: number;
}