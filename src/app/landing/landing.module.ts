import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramsComponent } from './programs/programs.component';
import { NgxBootstrapModule } from '../shared/ngx-bootstrap/ngx-bootstrap.module';



@NgModule({
  declarations: [
    ProgramsComponent
  ],
  imports: [
    CommonModule,
    NgxBootstrapModule,
    SharedModule
  ],
  exports: [ProgramsComponent]
})
export class LandingModule { }
