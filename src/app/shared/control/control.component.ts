import { Component, HostBinding, HostListener, input, ViewEncapsulation } from '@angular/core';

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

  onClick() {
    console.log("Clicked.");
  }
}
