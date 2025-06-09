import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @ViewChild("form") form?: ElementRef<HTMLFormElement>; // ViewChild is used to access the form element in the template. ElementRef is a wrapper around the native DOM element, allowing you to access its properties and methods.

  onSubmit(titleInput: string, textInput: string) {
    console.log("enteredTitle: ", titleInput); // Using dir instead of log, one can see all of the available properties. 
    console.log("enteredText: ", textInput);

    this.form?.nativeElement.reset();
  }
}
