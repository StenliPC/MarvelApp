import { Component } from '@angular/core';
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsComponent {
  darkModeEnabled: boolean;

  constructor(private modalCtrl: ModalController) {
    this.darkModeEnabled = JSON.parse(localStorage.getItem('darkMode') || 'false');
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  toggleDarkMode() {
    localStorage.setItem('darkMode', JSON.stringify(this.darkModeEnabled));
    document.body.classList.toggle('dark', this.darkModeEnabled);
  }
}
