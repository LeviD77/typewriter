import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[typeWriter]'
})
export class TypewriterDirective implements OnInit {

  @Input() text: string;

  constructor(private el: ElementRef) { }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async ngOnInit(){
    for (var i = 0; i < this.text.length; i++) {
      this.el.nativeElement.innerHTML += '<span @twFadeIn>' + this.text.charAt(i) + '<span>';
      await this.sleep(500);
    }
  }

}
