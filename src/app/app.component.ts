import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/',
      icon: 'home'
    },
    {
      title: 'Últimas',
      url: '/folder',
      icon: 'document-text'
    },
    {
      title: 'Cariri',
      url: '/folder',
      icon: 'documents'
    },
    {
      title: 'Polícia',
      url: '/folder',
      icon: 'documents'
    },
    {
      title: 'Política',
      url: '/folder',
      icon: 'documents'
    },
    {
      title: 'Tv Miséria',
      url: '/folder',
      icon: 'film'
    },
    {
      title: 'Colunas',
      url: '/folder',
      icon: 'people-circle'
    },
    {
      title: 'Esportes',
      url: '/folder',
      icon: 'documents'
    },
    {
      title: 'Região',
      url: '/folder',
      icon: 'documents'
    },
    {
      title: 'Vc Viu?',
      url: '/folder',
      icon: 'documents'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.splashScreen.hide();
    });
  }
}
