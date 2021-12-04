import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//const utils = require('../../Utils/utils.js');
//import { utils } from '../../Utils/utils';

@Component({
  selector: 'app-config-parking',
  templateUrl: './config-parking.component.html',
  styleUrls: ['./config-parking.component.css']
})
export class ConfigParkingComponent implements OnInit {
  tarifa_carro: number=0;
  tarifa_moto:number=0;
  plazas_carro:number=0;
  plazas_moto:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  addConfig(form: NgForm){
    if(form.valid){
      this.tarifa_carro=form.value.tar_car;
      this.tarifa_moto=form.value.tar_mot;
      this.plazas_carro=form.value.pla_car;
      this.plazas_moto=form.value.pla_mot;
/*
      utils.tarifa_carro=form.value.tar_car;
      utils.tarifa_moto=form.value.tar_mot;
      utils.plazas_carro=form.value.pla_car;
      utils.plazas_moto=form.value.pla_mot;
*/
      form.resetForm();
    }
  }
}
