import { Component } from '@angular/core';

import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private electronService: ElectronService) {
    this.electronService.ipcRenderer.on('navigate-to', (event, msg) => {
      console.log('Navigate received');
      console.log(msg);
    });
  }
}
