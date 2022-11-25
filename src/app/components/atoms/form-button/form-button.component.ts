import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss'],
})
export class FormButtonComponent implements OnInit {
  @Input() data: any;
  public submitMethod: Function = () => {};
  public reference: any;
  public text: string = '';

  ngOnInit(): void {
    this.setComponentData();
  }

  private setComponentData() {
    this.submitMethod = this.data.callback;
    this.reference = this.data.reference;
    this.text = this.data.text;
  }
}
