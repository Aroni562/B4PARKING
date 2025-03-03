import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parking } from '../models/parking';

@Injectable({
  providedIn: 'root',
})
export class ParkingService {
  URL_API = "http://localhost:4000/api/parking";

  selectedParking: Parking = {
    tipo: "",
    placa: "",
    entrada: new Date,
    salida: new Date
  }
  parking!: Parking[];

  constructor(private http: HttpClient) {}

  getParking() {
    return this.http.get<Parking[]>(this.URL_API);
  }

  createParking(parking: Parking) {
    return this.http.post(this.URL_API, parking);

  }

  deleteParking(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`);

  }

}
