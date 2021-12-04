import { Component, OnInit } from '@angular/core';
import { ParkingService } from '../../services/parking.service';
import { NgForm } from '@angular/forms';
// import { Parking } from 'src/app/models/parking';
// import { AnyRecord } from 'dns';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css'],
})
export class ParkingComponent implements OnInit {

  constructor(public parkingService: ParkingService) { }

  ngOnInit(): void {
    this.getParking();
  }

  getParking() {
    this.parkingService.getParking().subscribe(
    res => {
      this.parkingService.parking = res;
    },
    err => console.error(err)
    )
  }

  addParking(form: NgForm) {
    if (confirm("Confirma Guardar servicio")) {
    this.parkingService.createParking(form.value).subscribe(
      res => {
        this.getParking();
        form.reset();
      },
      err => console.error(err)
    )
  }
  }

  editParking() {
    if (confirm("Confirma Guardar la hora de salida")) {
      this.parkingService.editParking(this.parkingService.selectedParking)
      .subscribe(
        (res: any) => {
          console.log(res),
          alert(res.status);
          this.getParking();
        },
        (err:any) => console.error(err)
      );
    }
  }
  deleteParking(_id: string) {
    if (confirm("Confirma Eliminar el servicio")) {
      this.parkingService.deleteParking(_id).subscribe(
        (res) => console.log(res),
        (err) => console.error(err)
      );
    }
  }

  // deleteParking(_id: string) {
  //     this.parkingService.deleteParking(_id).subscribe(
  //       (res) => console.log(res),
  //       (err) => console.error(err)
  //     );
  //   }
}
