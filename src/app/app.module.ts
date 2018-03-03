import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatInputModule, MatSelectModule, MatToolbarModule, MatTableModule, MatIconModule, MatCardModule,
  MatToolbar
} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import { HttpClientModule} from '@angular/common/http';
import {MaterialModule} from '../material.module/material';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RoutingModule} from "./routing/routing";
import { GolfCourseService } from "./Services/golfCardServices";


@NgModule({
  declarations: [
    AppComponent,
    GolfCourseService,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule
  ],

  providers: [GolfCourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
