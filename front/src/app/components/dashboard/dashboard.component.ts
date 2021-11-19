import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @Input()
  text!: string;
  @Input() color!: string;
  title: string = 'Project A';
  subject: string = 'Dashboard';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  logout(): void {
    this.auth.logout();
  }
}