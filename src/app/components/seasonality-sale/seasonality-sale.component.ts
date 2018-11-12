import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SeasonalitySale } from './seasonality-sale';
import { SeasonalityState } from './seasonality-state';

/**
 * Component for managing the seasonality sale in the year
 */

@Component({
  selector: 'an-seasonality-sale',
  templateUrl: './seasonality-sale.component.html',
  styleUrls: ['./seasonality-sale.component.css']
})
export class SeasonalitySaleComponent implements OnInit {

  /**
   * Event when the states change and emites the months array
   */
  
  @Output() public stateChanged = new EventEmitter();

  /**
   * It contains the states of the seasonlity
   */

  private seasonalityState: SeasonalityState[] = [
    new SeasonalityState('B', 'Baja'),
    new SeasonalityState('M', 'Media'),
    new SeasonalityState('A', 'Alta')
  ];

  /**
   * It contains the months for the seasonality
   */

  @Input() public months: SeasonalitySale[] = [];

  constructor() { }

  /**
   * It changes the state of the seasonality sale 
   * @param month SeasonalitySale object
   */

  public changeState(month: SeasonalitySale): void {
    month.index++;

    if (month.index >= this.seasonalityState.length) month.index = 0;

    month.state = this.seasonalityState[ month.index ].key;

    this.stateChanged.emit( this.months );
  }

  ngOnInit() {

    // If the months property doesn't has data, assign data
    if (this.months && !this.months.length) {
      this.months = [
        new SeasonalitySale('E', 'Enero', 'B'),
        new SeasonalitySale('F', 'Febrero', 'B'),
        new SeasonalitySale('M', 'Marzo', 'B'),
        new SeasonalitySale('A', 'Abril', 'B'),
        new SeasonalitySale('M', 'Mayo', 'B'),
        new SeasonalitySale('J', 'Junio', 'B'),
        new SeasonalitySale('J', 'Julio', 'B'),
        new SeasonalitySale('A', 'Agosto', 'B'),
        new SeasonalitySale('S', 'Septiembre', 'B'),
        new SeasonalitySale('O', 'Octubre', 'B'),
        new SeasonalitySale('N', 'Noviembre', 'B'),
        new SeasonalitySale('D', 'Diciembre', 'B'),
      ];
    }
  }

}
