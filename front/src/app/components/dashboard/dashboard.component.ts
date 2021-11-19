import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    @Input()
  text!: string;
  @Input() color!: string;
  title: string = 'Project A';
  subject: string = 'Dashboard';

  constructor(private router:Router) {}

  ngOnInit(): void {}

  onClick() {
      alert('Go to the Login Page!');
    this.router.navigate(['login']);
    }

}