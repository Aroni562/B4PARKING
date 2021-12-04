import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigParkingComponent } from './components/config-parking/config-parking.component';
import { LoginComponent } from './components/login/login.component';
import { ParkingComponent } from './components/parking/parking.component';
import { SignupComponent } from './components/signup/signup.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ParkingListComponent } from './components/parking-list/parking-list.component';

const routes: Routes = [
  {path: '', component: InicioComponent },
  {path:'add' , component: ParkingComponent},
  {path:'login' , component: LoginComponent},
  {path:'config' , component: ConfigParkingComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'list', component: ParkingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
