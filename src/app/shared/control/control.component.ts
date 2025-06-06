import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None // This enables that other CSS files can be used (global styles can be accessed). 
})
export class ControlComponent {
  label = input.required<string>();
}
