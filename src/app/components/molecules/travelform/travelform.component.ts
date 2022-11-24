import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Input } from 'src/app/models/input';

@Component({
  selector: 'app-travelform',
  templateUrl: './travelform.component.html',
  styleUrls: ['./travelform.component.scss'],
})
export class TravelformComponent implements OnInit {
  public originInput: Input = {
    title: 'Origen',
    description: 'Ingrese el origen el viaje',
    iconClass: 'form-input__icon--pin',
  };

  public destinationInput: Input = {
    title: 'Destino',
    description: 'Ingrese el destino el viaje',
    iconClass: 'form-input__icon--visit',
  };

  public travelForm: FormGroup = this.formBuilder.group({
    origin: ['', [Validators.required]],
    destination: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.buildForm();
    this.setInputInformation();
  }

  private buildForm() {
    this.travelForm = this.formBuilder.group({
      origin: [
        '',
        [
          Validators.required,
          Validators.maxLength(3),
          Validators.pattern('^[A-Z]+$'),
        ],
      ],
      destination: [
        '',
        [
          Validators.required,
          Validators.maxLength(3),
          Validators.pattern('^[A-Z]+$'),
        ],
      ],
    });
  }

  private setInputInformation() {
    this.originInput = {
      title: 'Origen',
      description: 'Ingrese el origen el viaje',
      iconClass: 'form-input__icon--pin',
      errors: this.travelForm.controls['origin'].errors,
    };

    this.destinationInput = {
      title: 'Destino',
      description: 'Ingrese el destino el viaje',
      iconClass: 'form-input__icon--visit',
      errors: this.travelForm.controls['destination'].errors,
    };
  }

  onClickButton() {
    if (this.travelForm.valid) {
      if (this.validateInputs()) {
        console.log('válido');
      } else {
        console.log('El origen y destino son iguales');
      }
    } else {
      console.log('no válido');
    }
  }

  validateInputs() {
    let isValid = true;
    if (
      this.travelForm.controls['origin'].value ===
      this.travelForm.controls['destination'].value
    ) {
      isValid = false;
    }

    return isValid;
  }
}
