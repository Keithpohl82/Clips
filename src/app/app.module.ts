import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { UserModule } from './user/user.module';
import { NavComponent } from './nav/nav.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [AppComponent, NavComponent],
  imports: [
    CommonModule,
    AppComponent,
    BrowserModule,
    UserModule,
    routes,
    NavComponent,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: []
})
export class AppModule { }

