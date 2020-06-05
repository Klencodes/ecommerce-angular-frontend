import { Component, OnInit } from '@angular/core';
import { CartModelServer } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { map } from 'rxjs/operators';
import { SocialUser } from 'angularx-social-login';
import { UserService } from 'src/app/services/user.service';
import { ResponseModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  myUser:any;
  cartData: CartModelServer;
  cartTotal: Number;
  authState: boolean;

  constructor( public cartService: CartService,
               private userService: UserService
                ) {
    this.authState = false;
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
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);

    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);

    this.userService.authState$.subscribe(authState => {
      // console.log(authState);
      this.authState =authState;
    });

   
  }
  logout() {
    this.userService.logout();
    }
}
