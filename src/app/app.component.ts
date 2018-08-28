import { Component } from '@angular/core';

//component declarator
// con esto estoy llamando a la etiqueta app-root que está en el index para decirle que ahi tiene que cargar app.component.html dónde está la estructura html del body
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conFusion';
}
