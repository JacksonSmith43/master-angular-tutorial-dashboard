import { Component, OnInit, AfterViewInit, OnDestroy, DestroyRef, inject } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})

export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy { // implements OnInit is here, so that if ngOnInit were to be spellt incorrectly, the Compiler would pick up on it. 
  currentStatus: 'online' | 'offline' | 'unknown' = 'online'; // Only online, offline or unknown are accepted. 
  private interval?: ReturnType<typeof setInterval>; // This will return exactly the same type as setInterval, which is a number in the browser, but a NodeJS.Timeout in NodeJS.
  private destroyRef = inject(DestroyRef);

  ngOnInit() { // Will be loaded once Angular has initialised all of the components inputs. 
    console.log("ngOnInit");

    const interval = setInterval(() => {
      const random = Math.random(); // Generates a number between 0 and 0.9999999.

      if (random < 0.5) {
        this.currentStatus = 'online';

      } else if (random < 0.9) {
        this.currentStatus = 'offline';

      } else {
        this.currentStatus = 'unknown';
      }

    }, 500);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
