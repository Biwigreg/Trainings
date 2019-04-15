import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  title = 'angular test and success';
  lastUpdate = new Date();
  deviceOne = "Machine à laver";
  deviceTwo = "Frigo";
  deviceThree = "Ordi";

  devices = [
    { name:'Machine à laver', status: 'Off'},
    { name:'Frigo', status: 'On'},
    { name:'Ordi', status: 'Off'}
  ]

  constructor(){
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000);
  }

  onAllumer()
  {
      console.log('On allume tout !');
  }
}
