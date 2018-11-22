import { Component, OnInit } from '@angular/core';
import { Lugar } from '../Interfaces/lugar';
import { LugaresServiceService } from '../services/lugares-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  lugares: Lugar[] = [];

  constructor(private lugaresService: LugaresServiceService) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.lugaresService.getLugares().then(
      data => this.lugares = data //El getTodo devuelve una promesa cuando se cumple la promesa entra al método, mete los datos en el data y una vez esté lo asignamos.
    ); //Accedo al servicio (donde se guardan los datos) y esto me devuelve un array de todos que se guarda aquí en esta clase
    console.log(this.lugares);
  }
}
