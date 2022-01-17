'use strict'

class Student{
    listId
    firstName
    secondName
    age
    speciality

    /**
     * 
     * @param listId {Number}
     * @param firstName {String}
     * @param secondName {String}
     * @param age {Number}
     * @param speciality {String}
     */
    constructor(listId,firstName,secondName,age,speciality) {
        this.listId = listId
        this.firstName = firstName
        this.secondName = secondName
        this.age = age
        this.speciality = speciality
    }
    
    get listId(){return this.listId}

    get firstName(){return this.firstName}

    get secondName(){return this.secondName}

    get age(){return this.age}

    get speciality(){return this.speciality}

    set listId(value){this.listId = value}

    set firstName(value){this.firstName = value}

    set secondName(value){this.secondName = value}

    set age(value){this.age = value}

    set speciality(value){this.speciality = value}

}