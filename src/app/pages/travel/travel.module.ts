import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelRoutingModule } from './travel-routing.module';
import { SearchComponent } from './search/search.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [ComponentsModule, CommonModule, TravelRoutingModule],
})
export class TravelModule {}
