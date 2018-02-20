import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatSelectModule, MatTableModule, MatIconModule, MatTableDataSource } from '@angular/material';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GolfCardComponent } from './golf-card/golf-card.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GolfCardComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
