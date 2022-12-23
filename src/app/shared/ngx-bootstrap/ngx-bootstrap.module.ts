import { NgModule } from '@angular/core';
import { NgbAccordionModule, NgbModule, NgbNavModule, NgbPaginationModule, } from '@ng-bootstrap/ng-bootstrap';

const ngxBootstrapComponents = [NgbAccordionModule, NgbModule, NgbNavModule, NgbPaginationModule,]

@NgModule({
  declarations: [],
  imports: [ngxBootstrapComponents,],
  exports: [ngxBootstrapComponents]
})
export class NgxBootstrapModule { }
