import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketsComponent } from './dashboard/support-tickets/tickets.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';
import { NewTicketComponent } from './dashboard/support-tickets/new-ticket/new-ticket.component';
import { TicketComponent } from './dashboard/support-tickets/ticket/ticket.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent, DashboardItemComponent, NewTicketComponent, TicketComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
