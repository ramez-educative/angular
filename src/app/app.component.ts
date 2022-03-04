import { Component } from '@angular/core';

//decorator  
@Component({
  selector: 'my-App',
  templateUrl: '<h1>{{ name }}</h1>' 
})

export class AppComponent {
  name: string = "Angular 2"
}