import { Component, EventEmitter, Input, Output } from '@angular/core';

export enum SliderType {
  FREQUENCY = 'FREQUENCY',
  NUMBER = 'NUMBER'
}

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})

export class SliderComponent {

  @Input() title: string = "";
  @Input() minValue: number | undefined;
  @Input() maxValue: number | undefined;
  @Input() step: number | undefined;

  sliderValue = 0.0;

  // @Output() image = new EventEmitter<File>();

  constructor() {
  }

}