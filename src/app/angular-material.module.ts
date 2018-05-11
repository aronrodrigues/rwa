import { MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule, MatCardModule, MatChipsModule, MatSelectModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import {FlexLayoutModule, BREAKPOINT} from '@angular/flex-layout';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatChipsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule
  ],
  exports: [
    FlexLayoutModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatChipsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule
  ],
})
export class AngularMaterialModule { }
