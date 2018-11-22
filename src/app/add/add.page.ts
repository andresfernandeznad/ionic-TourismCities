import { Component, OnInit } from '@angular/core';
import { LugaresServiceService } from '../services/lugares-service.service';
import { Lugar } from '../Interfaces/lugar';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  lugar: Lugar;

  constructor(private lugaresService: LugaresServiceService, private nav: NavController) {
    this.lugar = {id: this.lugaresService.lugarCounter, lat: 0.0, long: 0.0, nombre: '', photoUrl: '', descripcion: ''};
   }

  ngOnInit() {
  }

  saveLugar(lugar: Lugar) {
    this.lugar.id = this.lugaresService.lugarCounter;

    this.lugaresService.newLugar(this.lugar).then(
      () => this.nav.goBack(true),
      (error) => console.log('Error al guardarlo', error)
    );
  }

}
