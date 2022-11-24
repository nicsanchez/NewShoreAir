import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './atoms/form-input/form-input.component';
import { TravelformComponent } from './organisms/travelform/travelform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonComponent } from './atoms/form-button/form-button.component';
import { InputComponent } from './molecules/input/input.component';
import { InputErrorComponent } from './atoms/input-error/input-error.component';

@NgModule({
  declarations: [
    FormInputComponent,
    TravelformComponent,
    FormButtonComponent,
    InputErrorComponent,
    InputComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FormInputComponent, TravelformComponent],
})
export class ComponentsModule {}
