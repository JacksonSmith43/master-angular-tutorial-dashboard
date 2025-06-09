import { Component, ElementRef, HostBinding, ContentChild, inject, input, ViewEncapsulation, contentChild } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None, // This enables that other CSS files can be used (global styles can be accessed). 
  host: {
    class: 'control',
    '(click)': 'onClick()' // Option 2. 
  }
})
export class ControlComponent {
  @HostBinding("class") className = "control";
  /*@HostListener("click") onClick() { // Option 1. 
    console.log("Clicked.");
  }*/

  label = input.required<string>();
  private el = inject(ElementRef);
  //@ContentChild("input") private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement> // Option 1 for control. 
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>("input");  // Option 2 for control. // This is here to access the input element. 

  onClick() {
    console.log("Clicked.");
    console.log(this.el);
    console.log(this.control());

  }
}
