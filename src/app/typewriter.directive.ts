import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[typeWriter]'
})
export class TypewriterDirective implements AfterViewInit {

  @Input() text: string;

  constructor(private el: ElementRef) { }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async ngAfterViewInit(){
    for (var i = 0; i < this.text.length; i++) {
      // this.el.nativeElement.innerHTML += '<span class="fading">' + this.text.charAt(i) + '<span>';

      let newNode = document.createElement('span');
      newNode.className = 'fading';
      newNode.innerHTML = this.text.charAt(i);
      this.el.nativeElement.appendChild(newNode);

      await this.sleep(500);
    }
  }

}
