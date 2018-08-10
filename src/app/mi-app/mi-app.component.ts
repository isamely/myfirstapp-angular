import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-app',
  templateUrl: './mi-app.component.html',
  styleUrls: ['./mi-app.component.css']
})
export class MiAppComponent implements OnInit {
  tittle= 'Casco para bici';
  content= 'Es un casco verde, con líneas rojas y correa negra -  talla M';

  constructor() { }

  ngOnInit() {
  }

}
