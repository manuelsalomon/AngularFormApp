import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BackendService, BackendAdress} from './backend.service'
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';
import { ComentComponent } from './coment/coment.component';
import { UserComponent } from './user/user.component';
import { UserLogComponent } from './user-log/user-log.component';
import {Routes, RouterModule} from "@angular/router";
import { UserSignComponent } from './user-sign/user-sign.component'

import { store } from './redux/store'
import { AppStore } from './redux/store'

const routes: Routes = [
{path: "", redirectTo:"home", pathMatch:"full"} ,
{path:"home", component:PostListComponent},
{path:"login", component:UserLogComponent},
{path:"signin", component:UserSignComponent},
{path:"profile", component:UserComponent},
{path:"post/:id", component:PostComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostListComponent,
    PostComponent,
    ComentComponent,
    UserComponent,
    UserLogComponent,
    UserSignComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    BackendService,
    {provide:BackendAdress, useValue:BackendAdress},
    {provide: AppStore, useValue: store}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
