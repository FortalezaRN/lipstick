import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	constructor(private menu: MenuController, private modalCtrl: ModalController) { }
	openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent
    })
    await modal.present()
  }
}
