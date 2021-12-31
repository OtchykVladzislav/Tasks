'use strict';

let defaultURL = Function;
let update = updateDataEvent(3000);

(() => {
    setTimeout(() => {
        getFile('area[1].json', 'Area1')
    }, 1000)
    setTimeout(() => {
        getFile('area[2].json', 'Area2')
    }, 2000)
    setTimeout(() => {
        getFile('area[3].json', 'Area3')
    }, 3000)
    document.getElementById('add-btn').addEventListener('click', () => {
        addEventToJsonFile()
    })
    defaultURL = createURL('localhost:3000')
})()

update(1000, 'area[1].json', 'Area1')
update(2000, 'area[2].json', 'Area2')
update(3000, 'area[3].json', 'Area3')

function addEventToJsonFile(){
  let event = createEvent()

  let fileName = document.getElementById('file-add').value.toString()
  const url = new URL(defaultURL(`files`))
  fetch(url, {
      method: 'POST',
      body: JSON.stringify({
          'event' : event,
          'fileName' : fileName
      }),
      headers: {
          'Content-Type' : 'application/json'
      }
  })
  .then(response => response.json())
  .then(response => {
      document.getElementById('log').appendChild(createLog(response.msg, 'green'))
  })
  .catch(err => {
      console.log(`Error: ${err}`)
  })
}

function getFile(fileName, divName){
  let url = new URL(defaultURL('getData'))
  fetch(url, {
      method: 'POST',
      body: JSON.stringify({
          'fileName' : fileName
      }),
      headers: {
          'Content-Type' : 'application/json'
      }
  })
  .then(response => response.json())
  .then(response => {
      var node = document.getElementById(divName);
      while (node.firstChild) {
          node.removeChild(node.firstChild);
      }
      if (response.events){
          response.events.forEach(element => {
              let rootEl = document.createElement('div')
              rootEl.innerHTML = element
              document.getElementById(divName).appendChild(rootEl)
          });
      }
      else{
          let rootEl = document.createElement('div')
          rootEl.innerHTML = response.events
          document.getElementById(divName).appendChild(rootEl)
      }
      document.getElementById('log').appendChild(createLog(response.msg, 'green'))
  })
  .catch(err => {
      console.log(`Error: ${err}`)
  })
}
