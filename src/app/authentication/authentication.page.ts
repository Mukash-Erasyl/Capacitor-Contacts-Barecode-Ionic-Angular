import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Repository } from '../models/repository';
import { User } from '../models/repository';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.page.html',
  styleUrls: ['./authentication.page.scss'],
})
export class AuthenticationPage implements OnInit {
  constructor(private router: Router , private repo:Repository) {
    
  }

 username: string = '';
 password: string = '';
 authFlag = false;
 loginFlag = false;

 authenticate() {

   

   if (this.repo.getUsers().some(user=>user.password==this.password)) {
     // Здесь можно выполнить действия при успешной аутентификации, например, перенаправление на другую страницу.
     console.log('Успешная аутентификация');
     this.router.navigate(['/home']);
   } else {
     // Здесь можно обработать неудачную аутентификацию, например, отобразить сообщение об ошибке.
     console.log('Неудачная аутентификация');
     this.authFlag = true;
   }

   
 }

 flagChange(){
  this.loginFlag = !this.loginFlag; 
  this.username = ""
  this.password = ""
 }

 ngOnInit() {
 }

 registration(){
  const newUser: User = {
    login: this.username,
    password: this.password
  };
  
  this.repo.contacts.push(newUser);
  this.flagChange()
  this.username = ""
  this.password = ""
 }


}
