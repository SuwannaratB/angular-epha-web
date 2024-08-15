import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { IndexComponent } from './layouts/index/index.component';
import { provideHttpClient } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    AngularToastifyModule
  ],
  providers: [
    provideHttpClient(),
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
