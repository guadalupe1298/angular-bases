import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';
import { FormsModule } from '@angular/forms';

//Cuando se crea un modulo es agregar las declarations, exports. Y el imports se agraga el de commonModule porque es un componente de angular.
//Se puede agregar cada modulo dependiendo las carpetas que se tenga y el en angula se debe de contener todo lo que en esa carpeta de ocupa.


@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent,

  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
