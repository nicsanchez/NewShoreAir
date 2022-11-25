import { TravelformComponent } from '../components/organisms/travelform/travelform.component';

export interface FormButton {
  callback: Function;
  reference: TravelformComponent;
  text: string;
}
