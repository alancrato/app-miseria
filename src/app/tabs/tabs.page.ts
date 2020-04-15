import { Component } from '@angular/core';
import {LoadingController, MenuController} from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
      private menu: MenuController,
      private loadingController: LoadingController
  ) {
    this.presentLoading().then(r => {});
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

}
