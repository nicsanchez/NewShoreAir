import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInputComponent } from './atoms/form-input/form-input.component';
import { TravelformComponent } from './organisms/travelform/travelform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonComponent } from './atoms/form-button/form-button.component';
import { InputComponent } from './molecules/input/input.component';
import { InputErrorComponent } from './atoms/input-error/input-error.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { FooterTextComponent } from './atoms/footer-text/footer-text.component';
import { FooterAddressComponent } from './atoms/footer-address/footer-address.component';
import { FooterSectionComponent } from './molecules/footer-section/footer-section.component';
import { FooterComponent } from './organisms/footer/footer.component';

@NgModule({
  declarations: [
    FormInputComponent,
    TravelformComponent,
    FormButtonComponent,
    InputErrorComponent,
    InputComponent,
    NavbarComponent,
    FooterComponent,
    FooterSectionComponent,
    FooterTextComponent,
    FooterAddressComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    FormInputComponent,
    TravelformComponent,
    NavbarComponent,
    FooterComponent,
  ],
})
export class ComponentsModule {}
