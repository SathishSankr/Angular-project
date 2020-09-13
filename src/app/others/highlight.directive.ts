import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  isSwitch = true;
  constructor(private elref: ElementRef) {
    console.log('hightlight Directive');
    this.elref.nativeElement.style.color = 'green';
    console.log(this.elref);
    console.log(this.elref.nativeElement);
    console.log(this.elref.nativeElement.style);
    console.log(this.elref.nativeElement.style.color);
  }
  @Input() set changeUi(condition: boolean) {
    if (!condition) {
      this.elref.nativeElement.style.color = 'yellow';
    } else {
      this.elref.nativeElement.style.color = 'blue';
      this.isSwitch = false;
    }
  }
  @HostListener('click')
  onClick(): void {
    if (this.isSwitch) {
      this.elref.nativeElement.style.color = 'rgb(255, 255, 0)';
      this.elref.nativeElement.style.backgroundColor = 'green';
    } else {
      this.elref.nativeElement.style.color = 'orange';
      this.elref.nativeElement.style.backgroundColor = 'white';
    }
  }
  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.isSwitch) {
      this.elref.nativeElement.style.fontSize = '40px';
     // this.elref.nativeElement.style.backgroundColor = 'green';
    } else {
      this.elref.nativeElement.style.fontSize = '50px';
    //  this.elref.nativeElement.style.backgroundColor = 'white';
    }
  }
  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.isSwitch) {
      this.elref.nativeElement.style.fontSize ='10px';
     // this.elref.nativeElement.style.backgroundColor = 'green';
    } else {
      this.elref.nativeElement.style.fontSize='14px';
     // this.elref.nativeElement.style.backgroundColor = 'white';
    }
  }


}
