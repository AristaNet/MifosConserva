/**
 * It define an SeasonalitySale object for the component seasonalitySale
 */

export class SeasonalitySale {

    /**
     * Index of the state
     */

    public index: number = 0;

    /**
     * 
     * @param shortName short name of the month ('E', 'F', etc..)
     * @param longName Long name of the month ('Enero', 'Febrero')
     * @param state State of the seasonality sale
     */
    
    constructor(
        public shortName: string,
        public longName: string,
        public state: string
    ) {}
}