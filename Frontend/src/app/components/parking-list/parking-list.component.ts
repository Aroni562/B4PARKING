import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../../services/parking.service';
//const utils = require('../../Utils/utils');

@Component({
  selector: 'app-parking-list',
  templateUrl: './parking-list.component.html',
  styleUrls: ['./parking-list.component.css']
})
export class ParkingListComponent implements OnInit {

  constructor(public parkingService: ParkingService) { }

  ngOnInit(): void {
    this.getParking();
  }
  getDuracion(f1:Date, f2:Date):number{
    console.log(f2.valueOf(),f1.valueOf());
    var df1=new Date(f1.valueOf());
    var df2=new Date(f2.valueOf());
    return (df2.getTime()-df1.getTime())*1e-3/60;
  }

  getTarifa(tipo:String){
    if(tipo === "moto"){
      return 66.67;
    }else{
      return 83.33;
    }

  }

  getMoneda (number: number) {
    var locales="es-CO";
    var currency="COP"
    var fractionDigits=2;
    var formatted = new Intl.NumberFormat(locales, {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: fractionDigits
    }).format(number);
    return formatted;
  }

  getParking() {
    this.parkingService.getParking().subscribe(
    res => {
      this.parkingService.parking = res;
    },
    err => console.error(err)
    )
  }
}
