import { Component } from '@angular/core';
import {GetApiService} from './get-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apicall';
  user_id = '1';
  id = '1';
  constructor(private api:GetApiService)
  {

  }
  ngOnInit()
  {
    this.api.apiCall().subscribe((data:any)=>{
      console.warn("get api data",data);
      this.title=data['title'];
    })
  }
}
