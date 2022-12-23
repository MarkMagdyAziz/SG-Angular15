import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { NgxBootstrapModule } from '../../shared/ngx-bootstrap/ngx-bootstrap.module';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [CommonModule, NgxBootstrapModule],
  exports: [CardComponent]
})
export class ComponentsModule { }
