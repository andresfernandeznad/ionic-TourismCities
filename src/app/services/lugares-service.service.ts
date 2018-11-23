import { Injectable } from '@angular/core';
import { Lugar } from '../Interfaces/lugar';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LugaresServiceService implements Lugar {

  id: number;
  lat: number;
  long: number;
  nombre: string;
  photoUrl: string;
  descripcion: string;
  visible: boolean = false;

  lugarCounter: number = 0;

  lugares: Lugar[] = [];

  constructor(private storage: Storage) {
    
   }

   getLugares(): Promise<Lugar[]> {
    this.storage.get('lugarCounter').then(
      data => this.lugarCounter
    );

    return this.storage.get('lugares').then(
      (data) => {
        if (data) this.lugares = data;
        return data;
      }
    );
  }

  saveLugar(lugar: Lugar) {
    let index = this.lugares.findIndex(l => l.id === lugar.id);
    this.lugares[index] = lugar;

    return this.storage.set('lugares', this.lugares);
  }

  deletelugar(id: number) {
    this.lugares = this.lugares.filter(l => l.id !== id);
    console.log(this.lugares);
    return this.storage.set('lugares', this.lugares);
  }

  getlugarById(id: number): Lugar {
     return this.lugares.find(t => t.id === id);
  }

  newLugar(lugar: Lugar): Promise<any> {
    this.lugares.push(lugar);
    this.lugarCounter++;
    return this.storage.set('lugares', this.lugares).then(
      () => this.storage.set('lugarCounter', this.lugarCounter)
    );
  }
}