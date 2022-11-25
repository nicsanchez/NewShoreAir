import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelRoutingModule } from './travel-routing.module';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    TravelRoutingModule
  ]
})
export class TravelModule { }
