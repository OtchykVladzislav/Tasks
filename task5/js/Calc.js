//Variables
let expres = document.getElementById('input');
let dot = document.getElementById('Dot');
var collection = [];
let answer = document.getElementById('answer');
let buttons = Array.from(document.getElementsByClassName('button'));

//submitting the form in Json format
function sendJSON(){
    //complete dispatch
	var request = new XMLHttpRequest();
	function reqReadyStateChange(){
		if (request.readyState == 4){
			var status = request.status;
			if (status == 200){
				document.getElementById("output").innerHTML=request.responseText;
			}
		}
	}
	// string with parameters to send
	var body = JSON.stringify({collection});
	request.open("GET", "http://localhost:8080/server/"+body,true);
	request.setRequestHeader("Content-Type", "application/json");
	request.onreadystatechange = reqReadyStateChange;
	request.send(body);
    console.log(body);
	alert("Отправлено");
}
//for and function to highlight one checkbox
var checks = document.getElementsByName("check");
for (var i = 0; i < checks.length; i++)
    checks[i].onchange = checkboxHandler;
 
function checkboxHandler(e) {
    for (var i = 0; i < checks.length; i++)
        if (checks[i].checked && checks[i] !== this)
            checks[i].checked = false;
    }
//for the appearance of a block with responses and a button for sending to the server
function Turn_on(){
    document.getElementById('conteiner').style.display="block";
    document.getElementById('turn').style.display="none";
}
//invisible dot button
function Int(){
    dot.style.display = "none";
}
//visible dot button
function Float(){
    dot.style.display = "inline-block";
}
//function to calculate
function CheckOperator(operator, result, num){
    if (operator == '+')
    {
        result += Number(num)
    }
    if (operator == '-')
    {
        result -= Number(num)
    }
    if (operator == '*')
    {
        result *= Number(num)
    }
    if (operator == '/')
    {
        result /= Number(num)
    }
    return result
}
//function for computation without priority
function Non_Priority(){
    let array = Array.from(expres.innerText);
    let symbols = ['+', '-', '/', '*']

    var num = ""
    var result = 0;
    var operator = "";

    var index = 0;
    for (var i = 0; i < array.length; i++)
    {
        if (symbols.indexOf(array[i]) == -1){
            num += array[i]
        }

        if (symbols.indexOf(array[i]) != -1){
            result = Number(num);
            index = i;
            i = array.length
        }
    }

    num = "";
    for (var i = index; i < array.length; i++){
        if (symbols.indexOf(array[i]) != -1){
            if (operator == ""){
                operator = array[i]
            }
            else
            {
                result = CheckOperator(operator, result, num)
                operator = array[i]
                num = ""
            }
        }

        if (symbols.indexOf(array[i]) == -1){
            num += array[i]
        }

        if (i == array.length - 1)
        {
            result = CheckOperator(operator, result, num)
        }
    }

    return result

}
//visible brackets
function With(){
    if(document.getElementById('with').checked!=false){
        document.getElementById('lbrack').style.display = "inline-block";
        document.getElementById('rbrack').style.display = "inline-block";
    }
}
//Since in non-priority computation, the parentheses have no weight and value, I hide them.
//invisible brackets
function WithoutBrack(){
    if(document.getElementById('without').checked!=false){
        document.getElementById('lbrack').style.display = "none";
        document.getElementById('rbrack').style.display = "none";
    }
}

//button click event
buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            //deleting one element at a time
            case 'Del':
                if(expres.innerText){
                    expres.innerText = expres.innerText.slice(0, -1);
                }
                break;
            //clear line
            case 'C':
                expres.innerText = '';
                break;
            /*calculate the expression depending on the priority and type of calculator, 
            as well as display an error if the priority is entered incorrectly or the priority is not selected.
            We also save it to an array and display it in a special window.*/
            case '=':
                if (document.getElementById('with').checked){
                    try {
                        if(document.getElementById('int').checked){
                            expres.innerText = Math.floor(eval(expres.innerText));
                            collection.push(Math.floor(eval(expres.innerText)));
                            answer.innerText = collection.join(', ');
                        }
                        else if (document.getElementById('float').checked){
                            expres.innerText = eval(expres.innerText);
                            collection.push(eval(expres.innerText));
                            answer.innerText = collection.join(', ');
                        }
                    } catch {
                        alert("Не правильно! Введите правильно!")
                    }
                }
                else if(document.getElementById('without').checked){
                    if(document.getElementById('int').checked){
                        expres.innerText = Math.floor(Non_Priority());
                        collection.push(expres.innerText);
                        answer.innerText = collection.join(', ');
                    }
                    else if (document.getElementById('float').checked){
                        expres.innerText = Non_Priority();
                        collection.push(expres.innerText);
                        answer.innerText = collection.join(', ');
                    }
                }
                else
                    alert("Не выбран режим приоритета");
                break;
            default:
                expres.innerText += e.target.innerText;
        }
    });
});



