import { Component, OnInit } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'AngularElectronDemo';
  notification: string;

  constructor(private electronService: ElectronService) { }

  ngOnInit() {
  }

  sendNotification() {
    const myNotification = new Notification('Title', {
      body: this.notification
    });

    myNotification.onclick = () => {
      console.log('Notification clicked');
    };
  }

}
