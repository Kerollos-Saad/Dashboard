import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
  private interval?: ReturnType<typeof setInterval>;

  constrctor(){

  }
  
  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random();
      if(rnd < 0.5){
        this.currentStatus = 'online';
      } else if(rnd < 0.8){
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
