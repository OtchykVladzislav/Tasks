'use string'

class Event{
    dateEvent
    timeEvent
    nameEvent
    degreeImportanceEvent
    descriptionEvent

    /**
     *
     * @param dateEvent {Date}
     * @param timeEvent {Date}
     * @param nameEvent {String}
     * @param degreeImportanceEvent {String}
     * @param descriptionEvent {String}
     */

    constructor(dateEvent,timeEvent,nameEvent,degreeImportanceEvent,descriptionEvent) {
        this.dateEvent = dateEvent
        this.timeEvent = timeEvent
        this.nameEvent = nameEvent
        this.degreeImportanceEvent = degreeImportanceEvent
        this.descriptionEvent = descriptionEvent
    }
    
    get dateEvent(){return this.dateEvent}

    get timeEvent(){return this.timeEvent}

    get nameEvent(){return this.nameEvent}

    get degreeImportanceEvent(){return this.degreeImportanceEvent}

    get descriptionEvent(){return this.descriptionEvent}

    set dateEvent(value){this.dateEvent = value}

    set timeEvent(value){this.timeEvent = value}

    set nameEvent(value){this.nameEvent = value}

    set degreeImportanceEvent(value){this.degreeImportanceEvent = value}

    set descriptionEvent(value){this.descriptionEvent = value}

}