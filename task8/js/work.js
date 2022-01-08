'use strict'

function createURL(hostname){
    return function(pathname){
        return `http://${hostname}/${pathname}`
    }
}

function createLog(msg, color){
    let rootEl = document.createElement('div')
    rootEl.innerHTML = msg
    rootEl.style.color = color
    return rootEl
}

function updateDataEvent(interval){
    return function(timeout, fileName, contentId){
        setTimeout(() => {
            setInterval(() => {
                getFile(fileName, contentId)
                document.getElementById('Area4').appendChild(createLog(`Данные из файла "${fileName}" успешно обновлены!`, 'yellow'))
            }, interval)
        }, timeout)
    }
}

function createEvent(){
    return {
        'dateEvent' : document.getElementById('ed-date').value.toString(),
        'timeEvent' : document.getElementById('ed-time').value.toString(),
        'nameEvent' : document.getElementById('ed-name').value.toString(),
        'degreeImportanceEvent' : document.getElementById('ed-degree').value.toString(),
        'descriptionEvent' : document.getElementById('ed-description').value.toString(),
    }
}
