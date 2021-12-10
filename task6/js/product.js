
/**
 * An object that stores the value and calories
 * of various pizza bases. The cost is measured in BYN.
 * @type {{calzone: number, puff: number, italian: number, thick: number, thin: number}}
 */
const infoBasesPizzas = {
    'thin' : {
        'name' : 'Thin base',
        'cost' : 6,
        'calories' : 28
    },
    'thick' : {
        'name' : 'Thick base',
        'cost' : 6.5,
        'calories' : 48
    },
    'puff' : {
        'name' : 'Puff base',
        'cost' : 6,
        'calories' : 41
    },
    'calzone' : {
        'name' : 'Calzone base',
        'cost' : 7.5,
        'calories' : 58
    },
    'italian' : {
        'name' : 'Italian base',
        'cost' : 8,
        'calories' : 72
    }
}

/**
 * An object that stores the value and calorie
 * content of various pizza ingredients. The cost is measured in BYN.
 * @type {{seafood: number, olive: number, meat: number, sausages: number, cheese: number, tomato: number, barbeque: number}}
 */
const infoIngredientsPizzas = {
    'cheese' : {
        'name' : 'Cheese',
        'cost' : 1,
        'calories' : 90
    },
    'sausages' : {
        'name' : 'Sausages',
        'cost' : 1.5,
        'calories' : 51
    },
    'meat' : {
        'name' : 'Meat',
        'cost' : 1,
        'calories' : 59
    },
    'olive' : {
        'name' : 'Olive',
        'cost' : 0.1,
        'calories' : 12
    },
    'seafood' : {
        'name' : 'Seafood',
        'cost' : 3,
        'calories' : 34
    },
    'tomato' : {
        'name' : 'Tomato',
        'cost' : 1,
        'calories' : 12,
    },
    'barbeque' : {
        'name' : 'Barbeque',
        'cost' : 4,
        'calories' : 55
    }
}

/**
 * An object that stores the cost and calorie
 * content of various pizza sauces. The cost is measured in BYN.
 * @type {{white: number, ketchup: number}}
 */
const infoSaucesPizzas = {
    'ketchup' : {
        'name' : 'Ketchup',
        'cost' : 1,
        'calories' : 12,
    },
    'white' : {
        'name' : 'White',
        'cost' : 2,
        'calories' : 34
    }
}
