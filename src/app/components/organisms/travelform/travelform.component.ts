import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormButton } from 'src/app/models/form-button';
import { Input } from 'src/app/models/input';
import { TravelForm } from 'src/app/models/travel-form';

@Component({
  selector: 'app-travelform',
  templateUrl: './travelform.component.html',
  styleUrls: ['./travelform.component.scss'],
})
export class TravelformComponent implements OnInit {
  public title: string = 'Buscar Vuelos';
  public originInput: Input = {
    title: '',
    placeholder: '',
    iconClass: '',
  };
  public destinationInput: Input = {
    title: '',
    placeholder: '',
    iconClass: '',
  };
  public data: TravelForm = {
    origin: '',
    destination: '',
    isValid: false,
    description: '',
  };
  public travelForm: FormGroup = this.formBuilder.group({});
  public buttonData: FormButton = {
    callback: () => {},
    reference: this,
    text: '',
  };

  @Output() travelFormData: EventEmitter<TravelForm> =
    new EventEmitter<TravelForm>();

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
      placeholder: 'Ingrese el origen del viaje',
      iconClass: 'form-input__icon--pin',
    };

    this.destinationInput = {
      title: 'Destino',
      placeholder: 'Ingrese el destino del viaje',
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

  public onClickButton(objThis: TravelformComponent) {
    let description: string = '';
    let isValid: boolean = false;
    if (objThis.travelForm.valid) {
      if (objThis.validateInputs()) {
        isValid = true;
        description = 'Se ha encontrado la siguiente ruta exitosamente.';
      } else {
        description = 'El origen y el destino son los mismos.';
      }
    } else {
      description = 'Ingrese información válida.';
    }

    objThis.emitFormData(isValid, description);
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

  public emitFormData(isValid: boolean, description: string) {
    this.travelFormData.emit({
      origin: this.travelForm.controls['origin'].value,
      destination: this.travelForm.controls['destination'].value,
      isValid,
      description,
    });
  }
}
