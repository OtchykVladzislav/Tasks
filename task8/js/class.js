'use string'

class Event{
    data
    time
    name
    degree
    description

    /**
     *
     * @param data {Date}
     * @param time {Date}
     * @param name {String}
     * @param degree {String}
     * @param description {String}
     */

    constructor(data,time,name,degree,description) {
        this.data = data
        this.time = time
        this.name = name
        this.degree = degree
        this.description = description
    }
    
    get date(){return this.date}

    get time(){return this.time}

    get name(){return this.name}

    get degree(){return this.degree}

    get description(){return this.description}

    set date(value){this.date = value}

    set time(value){this.time = value}

    set name(value){this.name = value}

    set degree(value){this.degree = value}

    set description(value){this.description = value}

}