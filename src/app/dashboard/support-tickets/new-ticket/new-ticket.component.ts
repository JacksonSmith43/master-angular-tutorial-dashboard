import { Component, ElementRef, viewChild } from '@angular/core';
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
  private form = viewChild.required<ElementRef<HTMLFormElement>>("form");

  onSubmit(titleInput: string, textInput: string) {
    console.log("enteredTitle: ", titleInput); // Using dir instead of log, one can see all of the available properties. 
    console.log("enteredText: ", textInput);

    this.form().nativeElement.reset();
  }
}
