import { Component, OnInit } from '@angular/core';
import { Contacts } from '@capacitor-community/contacts';
import { Contact } from '../models/contact.model';
import { Repository } from '../models/repository';
import { ContactDetailPage } from '../contact-detail/contact-detail.page';
import { RefresherCustomEvent } from '@ionic/angular';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private repo: Repository , private router: Router) {
  }

  get contt(){
    return this.repo.contacts;
  }
  

  contacts: any[] =[];


  ngOnInit(): void {

    this.getContacts();

  }

  selectContact(contactId: string) {


    
    this.router.navigate(['/contact', contactId]);
    // this.router.navigate(['/authentication',]);
  }


  async getContacts(){
    try{
      const permission = await Contacts.requestPermissions();
      console.log ('permission:', permission.contacts);

      if(!permission?.contacts) return;
      else if(permission?.contacts == 'granted'){
        const result = await Contacts.getContacts ({
          projection: {
            name: true , 
            phones : true , 
            emails:true , 
            image:true , 
          }

          });

          console.log ('result: ', result);
          this.contacts = result.contacts;
          console.log(this.contacts)

        
      }
    }catch(e){
      console.log(e)
    }

  }





}
