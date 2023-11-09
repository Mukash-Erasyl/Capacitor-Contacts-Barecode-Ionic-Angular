import { Contact } from "./contact.model";
import { Component, OnInit } from '@angular/core';
import { Contacts } from '@capacitor-community/contacts';
import { ContactDetailPage } from '../contact-detail/contact-detail.page';
import { RefresherCustomEvent } from '@ionic/angular';
import { ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
    login: string;
    password: string;
  }

export class Repository  {
    constructor() {
        this.getContacts();
        

}

contacts: any[] = [];
cont:Contact | undefined;
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

  public users: User[] = [
    {
      login:"Erasyl" , 
      password:"12345"
    } , 
    {
      login:"admin" , 
      password:"admin"
    } , 
    {
      login:"User1" , 
      password:"12345"
    } , 
    {
      login:"User2" , 
      password:"12345"
    } , 
    {
      login:"User3" , 
      password:"12345"
    } , 
    {
      login:"User4" , 
      password:"12345"
    } , 
  ]

  public getUsers(): User[] {
    return this.users;
  }

}