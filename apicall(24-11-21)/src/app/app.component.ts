import { Component } from '@angular/core';
import {GetApiService} from './get-api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apicall';
  user_id = 'apicall1';
  id = 'apicall';
  title1 = 'apicall1';
  user_id1 = 'apicall1';
  id1 = 'apicall1';
  title2 = 'apicall2';
  user_id2 = 'apicall2';
  id2 = 'apicall2';
  title3 = 'apicall3';
  user_id3 = 'apicall3';
  id3 = 'apicall3';
  title4 = 'apicall4';
  user_id4 = '1apicall4';
  id4 = 'apicall4';
  title5 = 'apicall5';
  user_id5 = 'apicall5';
  id5 = 'apicall5';
  title6 = 'apicall6';
  user_id6 = '1apicall6';
  id6 = 'apicall6';
  title7 = 'apicall7';
  user_id7 = '1apicall7';
  id7 = 'apicall7';
  constructor(private api:GetApiService)
  {

  }
  ngOnInit()
  {
    this.api.apiCall().subscribe((data:any)=>{
      console.warn("get api data",data);
      this.title=data['title'];
      this.id=data['id'];
      this.user_id=data['userId'];
    })

    this.api.apiCall1().subscribe((data:any)=>{
      console.warn("get api data",data);
      this.title1=data['title'];
      this.id1=data['id'];
      this.user_id1=data['userId'];
    })

    this.api.apiCall2().subscribe((data:any)=>{
      console.warn("get api data",data);
      this.title2=data['title'];
      this.id2=data['id'];
      this.user_id2=data['userId'];
    })

    this.api.apiCall3().subscribe((data:any)=>{
      console.warn("get api data",data);
      this.title3=data['title'];
      this.id3=data['id'];
      this.user_id3=data['userId'];
    })

    this.api.apiCall4().subscribe((data:any)=>{
      console.warn("get api data",data);
      this.title4=data['title'];
      this.id4=data['id'];
      this.user_id4=data['userId'];
    })

    this.api.apiCall5().subscribe((data:any)=>{
      console.warn("get api data",data);
      this.title5=data['title'];
      this.id5=data['id'];
      this.user_id5=data['userId'];
    })

    this.api.apiCall6().subscribe((data:any)=>{
      console.warn("get api data",data);
      this.title6=data['title'];
      this.id6=data['id'];
      this.user_id6=data['userId'];
    })

    this.api.apiCall7().subscribe((data:any)=>{
      console.warn("get api data",data);
      this.title7=data['title'];
      this.id7=data['id'];
      this.user_id7=data['userId'];
    })
  }
}
