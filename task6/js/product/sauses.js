'use strict'

class Sauses{
    name 
    cost 
    calories

    /**
     *
     * @param sausesInfo {Object}
     */


    constructor(sausesInfo){
        this.name = infoSaucesPizzas[sausesInfo].name;
        this.cost = infoSaucesPizzas[sausesInfo].cost;
        this.calories = infoSaucesPizzas[sausesInfo].calories;
    }

    /**
     * Returns the name of a pizza sauce
     * @returns {String}
     */
    get name(){return(this.name)}

    
    /**
     * Returns the cost of a pizza ingredient
     * @returns {Number}
     */
     get cost(){return(this.cost)}

     
    /**
     * Returns the calories of a pizza ingredient
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

    /**
     * Overriding toString method
     * @returns {String}
     */
    toString = function (){
        return this.name;
    }

    toJSON(){
        return JSON.stringify({
           'name' : this.name,
           'cost' : this.cost,
           'calories' : this.calories
       })
    }
}