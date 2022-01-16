let inputValue;
let task = [];
let taskSection = document.getElementById('mainTaskSection');
let newSection = document.getElementById('anotherSection');

function getValue() {
    inputValue = document.getElementById('inputValue').value;
    if (inputValue == '') {
        alert('Add a text');
    } else {
        console.log(inputValue);

        document.getElementById('inputValue').value = '';
        let html = '';
        task.push(`${inputValue}`);
        console.log(task);
        task.forEach(displayResult);

        function displayResult(text, index) {
            html += `
                 <div class="card ms-2 mt-2" style="width: 18rem">
            <div class="card-body" >
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text"  id="my${index}">${text}</p>
                <button class="ms-1 btn btn-outline-success btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick='detailBtn(${index})' ">
            View Detail
          </button>
                <button class="ms-1 btn btn-outline-success btn-sm" onClick="deleteBtn()">
            Delete
          </button>
            </div>
        </div>`;
            return index;
        }
        taskSection.innerHTML = html;
    }

    return;
}

function detailBtn(index) {
    let newHtml = '';
    newHtml += task[index];
    console.log(task[index]);
    anotherSection.innerHTML = newHtml;
    return index;
}

function deleteBtn(index) {
    let newHtml = '';
    task.splice(index, 1);
    console.log(task);
    task.forEach(displayResult);

    function displayResult(text, index) {
        newHtml += `
                 <div class="card ms-2" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${text}</p>
                <button class="ms-1 btn btn-outline-success btn-sm" onClick="deleteBtn()">
            View Detail
          </button>
                <button class="ms-1 btn btn-outline-success btn-sm" onClick="deleteBtn()">
            Delete
          </button>
            </div>
        </div>`;

        return;
    }
    taskSection.innerHTML = newHtml;
    return;
}

function clearList() {
    document.getElementById('mainTaskSection').innerHTML = '';
}