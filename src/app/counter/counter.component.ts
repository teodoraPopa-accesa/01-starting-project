import { Component, signal } from '@angular/core';

import { InfoMessageComponent } from '../info-message/info-message.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
  imports: [InfoMessageComponent],
})
export class CounterComponent {
  count = signal(0);

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  ondecrement() {
    this.count.update((prevCount) => prevCount - 1);
  }

  getUser(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('iOANA');
      }, 2000);
    });
  }


  onIncrement() {
    this.count.update((prevCount) => prevCount + 1);
    this.getUser().then((user) => {
      console.log(user);
      console.log('aici');

    });
  }


}
