let expres = document.getElementById('input');
let dot = document.getElementById('Dot');
var collection = [];
let answer = document.getElementById('answer');
let buttons = Array.from(document.getElementsByClassName('button'));

//отправка формы в формате Json
function sendJSON(){
    //выполнить отправку
	var request = new XMLHttpRequest();
	function reqReadyStateChange(){
		if (request.readyState == 4){
			var status = request.status;
			if (status == 200){
				document.getElementById("output").innerHTML=request.responseText;
			}
		}
	}
	// строка с параметрами для отправки
	var body = JSON.stringify({collection});
	request.open("GET", "http://localhost:8080/server/"+body,true);
	request.setRequestHeader("Content-Type", "application/json");
	request.onreadystatechange = reqReadyStateChange;
	request.send(body);
    console.log(body);
	alert("Отправлено");
}

var checks = document.getElementsByName("check");
for (var i = 0; i < checks.length; i++)
    checks[i].onchange = checkboxHandler;
 
function checkboxHandler(e) {
    for (var i = 0; i < checks.length; i++)
        if (checks[i].checked && checks[i] !== this)
            checks[i].checked = false;
    }

function Turn_on(){
    document.getElementById('conteiner').style.display="block";
    document.getElementById('turn').style.display="none";
}

function Int(){
    dot.style.display = "none";
}

function Float(){
    dot.style.display = "inline-block";
}



buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'Del':
                if(expres.innerText){
                    expres.innerText = expres.innerText.slice(0, -1);
                }
                break;
            case 'C':
                expres.innerText = '';
                break;
            case '=':
                try {
                    if (document.getElementById('with').checked){
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
                    }
                    else if(document.getElementById('without').checked){
                        alert("Пока не работает");
                    }
                    else
                        alert("Не выбран режим приоритета");
                } catch {
                    alert("Не правильно! Введите правильно!")
                }
                break;
            default:
                expres.innerText += e.target.innerText;
        }
    });
});



