import { Component } from '@angular/core';
import { NavController} from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { SATService } from '../sat.service';
import { InputDialogService } from '../input-dialog.service';
//import { SocialSharing } from '@ionic-native/social-sharing/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = "Athletes";

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, public dataService: SATService, public inputDialogService: InputDialogService) {

  }

  loadItems() {
    return this.dataService.getItems();
  }

   // Add Athlete
  addItem() {
    console.log('Adding Athlete...');
    this.inputDialogService.showAlert();
  } 

  // Edit Athlete
  async editItem(item, index) {
    console.log('Edit Athlete: ', item, index);
    const toast = this.toastCtrl.create({
      message: 'Updating Athlete: ' + index + "...",
      duration: 3000
    });
    (await toast).present();
    this.inputDialogService.showAlert(item, index);
  }

  // Remove Athlete
 async removeItem(item, index) {
    console.log("Removing Athlete - ", item.name);
    const toast = this.toastCtrl.create({
      message: 'Removing Athlete - ' + item.name + " ...",
      duration: 3000
      });
    (await toast).present(); 
    this.dataService.removeItem(index);
 }
/*
 // Sharing Item
 async shareItem(item, index) {
  console.log("Sharing Item - ", item.name);
  const toast = this.toastCtrl.create({
    message: 'Sharing Item - ' + item.name + " ...",
    duration: 3000
    });
  (await toast).present(); 

  let message = "Grocery Item - Name : " + item.name + " - Quantity: " + item.quantity;
  let subject = "Shared via Groceries app";

  this.socialSharing.share(message, subject).then(() => {
    // Sharing via email is possible
    console.log("Shared successfully!");
  }).catch((error) => {
   console.error("Error while sharing", error);
    // Sharing via email is not possible 
  }); 
} */
}