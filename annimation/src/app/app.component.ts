import { transition } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('fade',[
      transition('void=>*',[
        style({backgroundColor:'yellow', opacity:0}),
        animate(2000, style({backgroundColor:'white',opacity:0}))
      ])      
    ])
  ]
})
export class AppComponent {
  title = 'annimation';
}
