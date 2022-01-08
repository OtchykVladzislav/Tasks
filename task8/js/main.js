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
    defaultURL = createURL('localhost:3000')
})()

update(1000, 'area[1].json', 'Area1')
update(2000, 'area[2].json', 'Area2')
update(3000, 'area[3].json', 'Area3')

document.forms["editForm"].addEventListener("submit", e => {
    e.preventDefault();
    addEventToJsonFile();
    document.getElementById('Area4').appendChild(createLog("Успешно!", 'orange'))
})

document.querySelector("select").addEventListener('change', async function (e) {
    const json = await getJson(e.target.value);
    const data = JSON.parse(json.events[0]);
    document.getElementById('ed-btn').style.display = "block";
    document.forms["editForm"].elements["date"].value = data['dateEvent'];
    document.forms["editForm"].elements["time"].value = data['timeEvent'];
    document.forms["editForm"].elements["name"].value = data['nameEvent'];
    document.forms["editForm"].elements["degree"].value = data['degreeImportanceEvent'];
    document.forms["editForm"].elements["desc"].value = data['descriptionEvent'];
})

function addEventToJsonFile(){
  let event = createEvent()

  let fileName = document.getElementById('file-ed').value.toString()
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
  .catch(err => {
      console.log(`Error: ${err}`)
  })
}

async function getJson(fileName) {
    let url = new URL(defaultURL('getData'))
    let result = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
          'fileName' : fileName
      }),
      headers: {
          'Content-Type' : 'application/json'
      }
    })
    return await result.json();
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
      document.getElementById('Area4').appendChild(createLog(response.msg, '#32CD32'))
  })
  .catch(err => {
      console.log(`Error: ${err}`)
  })
}
