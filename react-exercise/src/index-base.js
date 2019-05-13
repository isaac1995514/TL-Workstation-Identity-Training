const btnUrl = 'https://api.github.com/search/repositories';
const radioUrl = 'https://api.github.com/repos/';

const code = {
  200: 'success'
}

$(function() {

  let getData = (url, errorMsg, resolve, reject) => {

    $.get(url, (data, status) => {
      status === code['200'] ?
       resolve(data) :
       reject(`ErrorMsg: ${errorMsg}, Status: ${status}`);
    });
  }

  let getRadioBtns = (items) => {

    let buttons = "";
    for(item of items){
      buttons += `<li>
                    <input
                        class = "repositoryButton"
                        type = "radio"
                        name = "repository"
                        value = "${radioUrl}${item['full_name']}/commits">
                         ${item['full_name']}
                    </input>
                  </li>`
    }
    return buttons;
  }

  let handleRadioBtnSelect = (url) => {

    let getCommits = new Promise((resolve, reject) => {
      let errorMsg = 'Error! Commits cannot be found';
      getData(url, errorMsg, resolve, reject);

    }).then((data) => {
      let contentBody = document.querySelector('#content_body');
      contentBody.innerHTML = "";

      for(commit of data){
        contentBody.innerHTML += `<td>${commit['commit']['author']['name']}</td>
                   <td>${commit['commit']['author']['email']}</td>
                   <td>${commit['commit']['author']['date']}</td>
                   <td>${commit['commit']['message']}</td>`;
      }

    }).catch((errorMsg) => {
      alert(errorMsg);
    })
  }

  let handleButtonClick = () => {
    // Start Async to obtain list of repository
    let getRepositoryAsync = new Promise((resolve, reject) => {

      let inputValue = document.querySelector('#text_value').value;
      let fullUrl = `${btnUrl}?q=${inputValue}`;
      let errorMsg = 'Error! Repository could not be found';

      getData(fullUrl, errorMsg, resolve, reject);

    }).then((data) => {

      let items = data['items'];
      // Add Buttons to button panel
      let buttonList = document.querySelector('.button_list');
      let buttons = getRadioBtns(items);
      buttonList.innerHTML = buttons;

      // Add callback functions to radio buttons
      let allButtons = document.querySelectorAll('.repositoryButton');

      for(button of allButtons){
        let url = button.value;
        button.onclick = () => handleRadioBtnSelect(url);
      }


    }).catch((errorMsg) => {
        alert(errorMsg);
    })
  }

  $('#go_button').click(handleButtonClick);

});
