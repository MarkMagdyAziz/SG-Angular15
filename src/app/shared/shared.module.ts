import { ComponentsModule } from './components/components.module';
import { NgxBootstrapModule } from './ngx-bootstrap/ngx-bootstrap.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [NgxBootstrapModule, ComponentsModule]

})
export class SharedModule { }
