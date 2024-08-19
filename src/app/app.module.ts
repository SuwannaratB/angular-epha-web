import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    AngularToastifyModule
  ],
  providers: [
    provideHttpClient(),
    ToastService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
