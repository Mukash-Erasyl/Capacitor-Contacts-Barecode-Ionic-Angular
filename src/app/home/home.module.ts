import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { Repository } from '../models/repository';
import { HomePageRoutingModule } from './home-routing.module';
// import { ContactDetailPageModule } from '../contact-detail/contact-detail.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
    HomePageRoutingModule
  ],
  declarations: [HomePage ] ,
  providers:[Repository],
})
export class HomePageModule {}
