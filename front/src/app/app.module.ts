import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './components/userList/userList.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const appRoutes:Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'userList',
    component: UserListComponent
  },
  {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    LoginComponent,
    UserListComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
