import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServerService } from './servers/server.service';

const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'users',component:UsersComponent},
  {path:'users/:id/:name',component:UsersComponent},
  {path:'servers', component:ServersComponent},
  {path:'server', component:ServerComponent},
  {path:'servers/:id/edit', component:EditServerComponent},
  {path:'servers/:id/:name/:status',component:ServersComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    ServersComponent,
    HomeComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
