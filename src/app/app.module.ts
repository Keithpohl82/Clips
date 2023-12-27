import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser'
import { platform } from 'os';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    AppComponent,
    BrowserModule,
    UserModule,
    routes
  ],
  providers: []
})
export class AppModule { }

