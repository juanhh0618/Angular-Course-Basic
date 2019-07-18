import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //APRENDIENDO TYPESCRIPT
  //users = ['ryan','joe','cameron','john','bruce'];
  //activated: boolean = false;
 /* name: string = 'Ryan Ray';
  age: number ;
  address: {
    street: string;
    city: string;
  }
  hobbies: string[];

  constructor(){
    this.age = 20;
    this.address = {
      street: '221B baker street',
      city: 'london'
    }
    this.hobbies = ['swimming','read','write'];
  }

  */
name:string = ' Juan Hernandez';
age:number = 20;
users:string[] = ['ryan','joe','cameron'];
posts = [];

constructor(private dataService: DataService){
  this.dataService.getData().subscribe(data => {
    this.posts = data ;
  }) ;
}

sayHello(){
  alert('Hello!');
}

deleteUser(user){
  for(let i=0;i < this.users.length; i++){
    if(user==this.users[i]){
      this.users.splice(i,1);
    }
  }
}

addUser(newUser){
  this.users.push(newUser.value);
  newUser.value = '';
  newUser.focus();
  return false;
}



}
