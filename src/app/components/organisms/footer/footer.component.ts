import { Component } from '@angular/core';
import { FooterSection } from 'src/app/models/footer-section';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public barcelonaHeadQuarter: FooterSection = {
    title: 'Global Headquarters:',
    companyHeadquarter: 'Newshore Barcelona',
    address: {
      addressHeadQuarter: 'Ramon Turró 169, 3rd floor',
      municipalityHeadQuarter: '08005 - Barcelona (Spain)',
      contactPhone: '+34 932 726 760',
      contactEmail: 'info@newshore.es',
    },
  };

  public colombianHeadQuarter: FooterSection = {
    title: 'Colombia Office:',
    companyHeadquarter: 'Newshore Manizales',
    address: {
      addressHeadQuarter: 'Carrera 23 Nro 55 - 100',
      municipalityHeadQuarter: 'Manizales, Caldas (Colombia)',
      contactPhone: '+57 6 885 20 42',
      contactEmail: 'info@newshore.es',
    },
  };
}
