import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css',
})
export class Labs {
welcome = 'Bienvenido a mi primera aplicación con Angular';
  tasks = [
    'Instalar el Angular CLI',
    'Crear proyecto',
    'Crear componente',
    'Crear servicio',
  ];
  name = 'Isaac';
  age = 25;
  disabled = true;
  img = 'https://www.w3schools.com/howto/img_avatar.png';

  person = {
    name: 'Isaac',
    age: 25,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  clickHandler(){
    alert('Hola')
  }

  changeHandler(event: Event){
    console.log(event);
  }
}
