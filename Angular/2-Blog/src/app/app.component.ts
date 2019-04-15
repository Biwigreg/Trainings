import { Component } from '@angular/core';
import { PostComponent } from './post/post.component';
import {Post} from "./post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  PostsFromDb = [
    new Post("Mon premier post", "Callidus provinciae qui quod adsimulato inprudentiam clemens suae callidus pellexit.",3),
    new Post("Mon deuxième post", "Orationi et parentemque meae partem pudor poteratis agam illum aliquanto.",0),
    new Post("Mon troisième post", "Referre Quod putet tum Tarquinium se fidos referre metui quos.",-2),
  ];
}

