import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // typescript way

 apptitle: String = 'User List';

 // Javascript way
//  apptitle="Definite";

  constructor() { }

  ngOnInit() {
  }

}
