import { Component, Input, OnInit, inject } from '@angular/core';
import { Repository } from '../models/repository';
import { Contact } from '../models/contact.model';
import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.page.html',
  styleUrls: ['./contact-detail.page.scss'],
})
export class ContactDetailPage implements OnInit {


  contactIdd : string | null = null;
  constructor(private repo: Repository , private route: ActivatedRoute) {
  }

  name: string ="Пользователь"

  phones:string = "Перезагрузите"

  emails:string = "@gmail.com"

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      this.contactIdd = params.get('id');
    });

    const contact = this.contacts.find(element => element.contactId === this.contactIdd);

    if (contact) {
      this.name = contact.name.display;
      this.phones = contact.phones[0].number;
  
      // Проверьте наличие email и добавьте его, если он существует
      if (contact.emails && contact.emails.length > 0) {
        this.emails = contact.emails[0].address;
      }
    }

  }



  

  get contacts(){
    return this.repo.contacts;
  }


}

// contact.contactId , contact.name.display, contact.phones[0].number , contact.emails[0].address