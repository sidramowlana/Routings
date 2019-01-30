import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { canDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    ServersComponent,
    HomeComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,   
    AppRoutingModule
  ],
  providers: [ServerService, AuthGuard, AuthService, canDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
