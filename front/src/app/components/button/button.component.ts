import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input()
  text!: string;
  @Input() color!: string;

  constructor(private router:Router) { }

  ngOnInit(): void {}

  onClick() {
    alert("Logged In");
    this.router.navigate(['userList']);
  }

}
