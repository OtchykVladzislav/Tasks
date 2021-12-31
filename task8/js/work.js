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
        'date' : document.getElementById('add-date').value.toString(),
        'time' : document.getElementById('add-time').value.toString(),
        'name' : document.getElementById('add-name').value.toString(),
        'degree' : document.getElementById('add-degree').value.toString(),
        'description' : document.getElementById('add-description').value.toString(),
    }
}
