import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorDisplayComponent } from './actor-display/actor-display.component';
import { MockData } from './mock-data';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    ActorDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
