import { Component } from '@angular/core';

import { ElectronService } from 'ngx-electron';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private electronService: ElectronService, private router: Router) {
    if (this.electronService.isElectronApp) {
      this.electronService.ipcRenderer.on('navigate-to', (event, msg) => {
        console.log(`Received navigate-to: ${msg}`);
        this.router.navigate([`/${msg}`]);
      });
    }
  }
}
