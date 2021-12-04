//librerias angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

//componenentes del aplicativo
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParkingComponent } from './components/parking/parking.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { ConfigParkingComponent } from './components/config-parking/config-parking.component';
import { ParkingListComponent } from './components/parking-list/parking-list.component';
import { SignupComponent } from './components/signup/signup.component';

//librerias de angular
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ParkingComponent,
    LoginComponent,
    HeaderComponent,
    ConfigParkingComponent,
    ParkingListComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Prueba cambio//
