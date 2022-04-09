import { Component } from '@angular/core';
import { SliderType } from './slider/slider.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'interventional-radiology-front-end';

  sliderTypes = {
    'anesthesia': SliderType.FREQUENCY,
    'covid': SliderType.FREQUENCY,
    'patients': SliderType.NUMBER,
    'anesthetists': SliderType.NUMBER
  };
}
