import { Component, Input, OnInit } from '@angular/core';
import { ContactAddress } from 'src/app/models/contact-address';

@Component({
  selector: 'app-footer-address',
  templateUrl: './footer-address.component.html',
  styleUrls: ['./footer-address.component.scss'],
})
export class FooterAddressComponent implements OnInit {
  @Input() data: ContactAddress = {
    addressHeadQuarter: '',
    municipalityHeadQuarter: '',
    contactPhone: '',
    contactEmail: '',
  };

  public addressHeadQuarter: string = '';
  public municipalityHeadQuarter: string = '';
  public contactPhone: string = '';
  public contactEmail: string = '';

  ngOnInit(): void {
    this.addressHeadQuarter = this.data.addressHeadQuarter;
    this.municipalityHeadQuarter = this.data.municipalityHeadQuarter;
    this.contactPhone = this.data.contactPhone;
    this.contactEmail = this.data.contactEmail;
  }
}
