import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    
  }
  resetPasswordForm = new FormGroup({
    email: new FormControl('', Validators.email),

  });
}
