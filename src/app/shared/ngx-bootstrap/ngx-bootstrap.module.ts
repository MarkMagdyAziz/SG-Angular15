import { NgModule } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

const ngxBootstrapComponents = [NgbAccordionModule, NgbNavModule, NgbPaginationModule]

@NgModule({
  declarations: [],
  imports: [ngxBootstrapComponents, NgbModule],
  exports: [ngxBootstrapComponents]
})
export class NgxBootstrapModule { }
