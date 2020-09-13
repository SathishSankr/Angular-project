import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: number;

  user = 'Sathish';
  Sathish = 'Pass';
  login = 'Login';
  cancel = 'Cancel';
  passwordControl = 'password';
  //show = true;

  constructor() {
    this.username = 10;
  }

  ngOnInit(): void {
    // // alert(this.username);
    // console.log(this.username);
    // if (this.username === 10) {
    //   let b = 20;
    //   console.log(b);
    // }
    // // console.log(b);
  }

  passFun(isPassword: boolean = true): void {
    this.passwordControl = isPassword ? 'password' : 'text';
    //this.show = !this.show;
    // alert(this.User);
  }

  loginFun(): void {
    alert(this.login);
  }

  cancelFun(): void {
    alert(this.cancel);
  }



}
