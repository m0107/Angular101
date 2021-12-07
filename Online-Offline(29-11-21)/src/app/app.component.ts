import { Component } from '@angular/core';
import { ConnectionService } from 'ng-connection-service';
import {
  MatSnackBar, MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status = 'Online';
  isConnected = true;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private connectionService: ConnectionService, public snackBar: MatSnackBar) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = "Online";
      }
      else {
        this.status = "Offline";
      }
      console.log(this.status);
      this.snackBar.open(this.status);
    });
  }
}
