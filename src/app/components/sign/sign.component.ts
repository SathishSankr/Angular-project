import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {
  user = 'Sathish';
  passEnter:string ="";
  passRe ="";
  passwordControlOne = 'password';
  passwordControlTwo = 'password';
  login = 'login success';
  cancel = 'cancelled';
  show = true;
  constructor() { }
  

  ngOnInit(): void {
  }
  passFunp(isPassword: boolean = true): void {
    this.passwordControlOne = isPassword ? 'password' : 'text';
  }
  passFunr(isPassword: boolean = true): void {
    this.passwordControlTwo = isPassword ? 'password' : 'text';
  }
  loginFun(): void {
    alert(this.login);
  }
  cancelFun(): void {
    alert(this.cancel);
  }
}
