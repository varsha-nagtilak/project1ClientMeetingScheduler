import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ShowSchedulesComponent } from './show-schedules/show-schedules.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TestPipe } from './test.pipe';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes:Routes=[
   {path:'',redirectTo:'/login',pathMatch:'full'},
  //{path:'/',component: HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'schedule',component:ScheduleComponent},
  {path:'show-meetings/:userId',component:ShowSchedulesComponent},
  {path:'home',component:HomeComponent, title: 'Welcome User'}
  ]


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    RegistrationComponent,
    ScheduleComponent,
    ShowSchedulesComponent,
    HeaderComponent,
    FooterComponent,
    TestPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
