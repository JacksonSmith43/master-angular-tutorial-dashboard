import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online'; // Only online, offline or unknown are accepted. 

  constructor() {
    setInterval(() => {
      const random = Math.random(); // Generates a number between 0 and 0.9999999.

      if (random < 0.5) {
        this.currentStatus = 'online';

      } else if (random < 0.9) {
        this.currentStatus = 'offline';

      } else {
        this.currentStatus = 'unknown';
      }

    }, 500)
  }
}
