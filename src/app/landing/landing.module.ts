import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapModule } from '../shared/ngx-bootstrap/ngx-bootstrap.module';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ProgramsComponent } from './programs/programs.component';
import { LandingComponent } from './landing.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: ProgramsComponent },
  { path: '**', component: NotFoundComponent },

];
@NgModule({
  declarations: [
    ProgramsComponent,
    LandingComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    NgxBootstrapModule,
    SharedModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [LandingComponent]
})
export class LandingModule { }
