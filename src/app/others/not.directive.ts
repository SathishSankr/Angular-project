import { Directive, Input, ViewContainerRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appNot]'
})
export class NotDirective {

  constructor(private vRef: ViewContainerRef, private tRef: TemplateRef<any>) { }

  @Input() set appNot(condition: boolean) {
    console.log(condition);
    if(!condition){
      console.log(this.vRef);
      console.log(this.tRef);
      this.vRef.createEmbeddedView(this.tRef);
    }
  }

}
