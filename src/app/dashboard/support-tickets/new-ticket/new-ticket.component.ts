import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @Input() toDo!: string; 

  onSubmit() {
  }
}
