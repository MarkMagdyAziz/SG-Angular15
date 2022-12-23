import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const ngxBootstrapComponents = [NgbAccordionModule]

@NgModule({
  declarations: [],
  imports: [ngxBootstrapComponents, NgbModule],
  exports: [ngxBootstrapComponents]
})
export class NgxBootstrapModule { }
