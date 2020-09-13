import { Component, OnInit, OnDestroy, DoCheck, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit, OnDestroy, DoCheck, AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked {
  hi: string = 'switch one';
  controlType = 'text';
  showme = false;
  sample = [1, 1, 2, 2, 3, 4, 3, 5, 6, 7, 8, 9];
  hello = 'Hello';
  a: number = 0.259;
  b: number = 1.3495;
  now: Date = new Date();
  sampleData = {
    key1: 'value1',
    key2: 'value2'
  }

  constructor() { 
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ng- onit');
  }

  ngOnDestroy(): void {
    console.log('ng-On Destroy');
  }
  
  ngDoCheck(): void {
    console.log('ng Do-check');
  }

  ngAfterViewInit(): void {
    console.log('ng After View Init');
  }

  ngAfterContentInit(): void {
    console.log('ng AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ng AfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('ng AfterViewChecked');
  }

  showHi(): void {
    this.hi = 'bye';
    this.controlType = 'password';
    this.hello = 'Login';
    this.showme = !this.showme;
    this.sample.push(this.sample.length + 1);
  }
  delDiv(index: number): void {
    //alert("delete " + index);
    this.sample.splice(index, 1);
  }
  loginText = 'Login';
  signUpText = 'Sign Up';
  lessons = '';

  login() {
    console.log('Login');
  }

  signUp() {
    console.log('Sign Up');
  }
}
