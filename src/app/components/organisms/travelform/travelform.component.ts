import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Input } from 'src/app/models/input';

@Component({
  selector: 'app-travelform',
  templateUrl: './travelform.component.html',
  styleUrls: ['./travelform.component.scss'],
})
export class TravelformComponent implements OnInit {
  public originInput: Input = {};
  public destinationInput: Input = {};
  public travelForm: FormGroup = this.formBuilder.group({});
  public buttonData: any;

  constructor(private formBuilder: FormBuilder) {}

  public ngOnInit() {
    this.buildForm();
    this.setInputData();
    this.setButtonData();
  }

  private buildForm() {
    this.travelForm = this.formBuilder.group({
      origin: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
          Validators.pattern('^[A-Z]+$'),
        ],
      ],
      destination: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(3),
          Validators.pattern('^[A-Z]+$'),
        ],
      ],
    });
  }

  private setInputData() {
    this.originInput = {
      title: 'Origen',
      placeholder: 'Ingrese el origen el viaje',
      iconClass: 'form-input__icon--pin',
    };

    this.destinationInput = {
      title: 'Destino',
      placeholder: 'Ingrese el destino el viaje',
      iconClass: 'form-input__icon--visit',
    };
  }

  private setButtonData() {
    this.buttonData = {
      callback: this.onClickButton,
      reference: this,
      text: 'Consultar',
    };
  }

  public onClickButton(objThis: any) {
    if (objThis.travelForm.valid) {
      if (objThis.validateInputs()) {
        console.log('válido');
      } else {
        console.log('El origen y destino son iguales');
      }
    } else {
      console.log('no válido');
    }
  }

  public validateInputs() {
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
