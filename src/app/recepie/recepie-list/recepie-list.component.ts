import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  recepies : Recepie[] =[
    new Recepie('Test recepie','Test Description','https://picturetherecipe.com/wp-content/uploads/2018/06/Bombay-Grilled-Chutney-Sandwich-Featured-PictureTheRecipe-395x500.jpg'),
    new Recepie('Test recepie','Test Description','https://picturetherecipe.com/wp-content/uploads/2018/06/Bombay-Grilled-Chutney-Sandwich-Featured-PictureTheRecipe-395x500.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
