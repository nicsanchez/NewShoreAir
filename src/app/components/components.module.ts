import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './atoms/form-input/form-input.component';
import { TravelformComponent } from './molecules/travelform/travelform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputErrorComponent } from './atoms/input-error/input-error.component';

@NgModule({
  declarations: [FormInputComponent, TravelformComponent, InputErrorComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormInputComponent, TravelformComponent],
})
export class ComponentsModule {}
