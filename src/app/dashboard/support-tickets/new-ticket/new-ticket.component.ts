import { Component, Input } from '@angular/core';
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
  @Input() toDo!: string;


  onSubmit(titleInput: HTMLInputElement) {
    const enteredTitle = titleInput.value;
    console.log("enteredTitle: ", enteredTitle); // Using dir instead of log, one can see all of the available properties. 
  }
}
