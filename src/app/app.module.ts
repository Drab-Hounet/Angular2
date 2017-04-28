import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { AppRoutingModule }     from './route/app-routing.module';

import { HttpModule }           from '@angular/http';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroService }          from './service/hero.service';
import { UserService }          from './service/user.service';
import { DashboardComponent }   from './dashboard/dashboard.component';

import { TestComponent }        from './test.component';
import { ListUsersComponent }    from './listUsers.component';



@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
     AppComponent,
     DashboardComponent,
     HeroDetailComponent,
     HeroesComponent,
     TestComponent,
     ListUsersComponent,
  ],
  providers: [
    HeroService,
    UserService
    ],
  bootstrap:    [
    AppComponent
  ]
})
export class AppModule { }
