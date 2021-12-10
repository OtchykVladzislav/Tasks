'use strict'

/**
 * The class that describes the Pizza Base object
 */
class Base{
    name 
    cost 
    calories

    /**
     *
     * @param baseInfo {Object}
     */


    constructor(baseInfo){
        this.name = infoBasesPizzas[baseInfo].name;
        this.cost = infoBasesPizzas[baseInfo].cost;
        this.calories = infoBasesPizzas[baseInfo].calories;
    }

    /**
     * Return name of the selected base
     * @returns {String}
     */
    get name(){return(this.name)}

    
    /**
     * Return count of the selected base
     * @returns {Number}
     */
     get cost(){return(this.cost)}

     
    /**
     * Return the number of calories of the selected base
     * @returns {Number}
     */
    get calories(){return(this.calories)}


    /**
     *
     * @param value {String}
     */
    set name(value){
        if (value === '' || value === undefined){
            throw  new Error('Incorrect name base pizza')
        }
        this.name = value
    }
    set cost(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect cost base pizza')
        }
        this.cost = value
    }
    set calories(value){
        if (value === '' || value === undefined){
            throw new Error('Incorrect calories base pizza')
        }
        this.calories = value
    }

    toJSON(){
        return JSON.stringify({
            'name' : this.name,
            'cost' : this.cost,
            'calories' : this.calories
        })
    }
}