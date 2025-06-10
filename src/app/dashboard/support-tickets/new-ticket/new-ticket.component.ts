import { AfterViewInit, Component, output, ElementRef, viewChild } from '@angular/core';
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
export class NewTicketComponent implements AfterViewInit {
  private form = viewChild.required<ElementRef<HTMLFormElement>>("form");
  addTicket = output<{ title: string; text: string }>();

  enteredTitle = "";
  enteredText = "";

  ngAfterViewInit() {
    console.log("ngAfterViewInit.");
    console.log("this.form().nativeElement", this.form().nativeElement);
  }

  onSubmit() {
    this.addTicket.emit({ title: this.enteredTitle, text: this.enteredText });

    this.enteredTitle = "";
    this.enteredText = "";

  }
}
