import { NgModule } from '@angular/core';
import { counterComponent } from './component/counter/Counter.component';

@NgModule({
  declarations:[
    counterComponent
  ],
  exports: [
    counterComponent
  ]
})
export class CounterModule{

 }
