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
    this.lugar = {id: this.lugaresService.lugarCounter, lat: 0.0, long: 0.0, nombre: '', photoUrl: '', descripcion: '', visible: false};
   }

  ngOnInit() {
    console.log(screen.width);
  }

  saveLugar(lugar: Lugar) {
    if(!lugar.photoUrl.includes(".jpg") && !lugar.photoUrl.includes(".png")) {
      lugar.photoUrl = "./assets/malaga.png";
    }
    this.lugar.id = this.lugaresService.lugarCounter;
    this.lugaresService.newLugar(this.lugar).then(
      () => this.nav.goBack(true),
      (error) => console.log('Error al guardarlo', error)
    );
  }

}
