import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AboutPage } from './about.page';


import sensors from 'sa-sdk-javascript';
console.log("SA.Sensor AboutPageModule");
sensors.track('test');

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AboutPage }])
  ],
  declarations: [AboutPage]
})
export class AboutPageModule {}
