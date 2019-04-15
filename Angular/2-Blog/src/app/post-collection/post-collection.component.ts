import { Component, Input, OnInit } from '@angular/core';
import {Post} from "../post";

@Component({
  selector: 'app-post-collection',
  templateUrl: './post-collection.component.html',
  styleUrls: ['./post-collection.component.scss']
})
export class PostCollectionComponent implements OnInit {

  @Input() Posts : Post[];

  constructor() { }

  ngOnInit() {
  }

}
