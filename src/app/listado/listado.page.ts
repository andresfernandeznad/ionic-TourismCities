import { Component, OnInit } from '@angular/core';
import { Lugar } from '../Interfaces/lugar';
import { LugaresServiceService } from '../services/lugares-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.page.html',
  styleUrls: ['./listado.page.scss'],
})
export class ListadoPage implements OnInit {

  lugares: Lugar[] = [];

  constructor(private lugaresService: LugaresServiceService, private alertController: AlertController) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.lugaresService.getLugares().then(
      data => this.lugares = data //El getTodo devuelve una promesa cuando se cumple la promesa entra al método, mete los datos en el data y una vez esté lo asignamos.
    ); //Accedo al servicio (donde se guardan los datos) y esto me devuelve un array de todos que se guarda aquí en esta clase
    console.log(this.lugares);
  }

  mostrarInfo(id: number) {
    console.log(this.lugares[id].photoUrl);
  }

  async mostrarVentana(id: number) {
    if(!this.lugares[id].visible) {
      const alert = await this.alertController.create({
        header: this.lugares[id].nombre,
        message: '¿Quieres ver más información o borrar el lugar ' + this.lugares[id].nombre + '?',
        buttons: [
          {
            text: 'Ver información',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              this.lugares[id].visible = !this.lugares[id].visible ;
            }
          }, {
            text: 'Borrar',
            handler: () => {
              this.lugaresService.deletelugar(id).then(() => this.lugaresService.getLugares().then(
                data => this.lugares = data
                )
              );
              console.log('Borrar');
            }
          }
        ]
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: this.lugares[id].nombre,
        message: '¿Quieres ocultar información o borrar el lugar ' + this.lugares[id].nombre + '?',
        buttons: [
          {
            text: 'Ocultar información',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              this.lugares[id].visible = !this.lugares[id].visible ;
            }
          }, {
            text: 'Borrar',
            handler: () => {
              this.lugaresService.deletelugar(id).then(() => this.lugaresService.getLugares().then(
                data => this.lugares = data
                )
              );
              console.log('Borrar');
            }
          }
        ]
      });
      await alert.present();
    }
    
  }
}
