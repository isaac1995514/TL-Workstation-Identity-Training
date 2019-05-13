const btnUrl = 'https://api.github.com/search/repositories';
const radioUrl = 'https://api.github.com/repos/';

const code = {
  200: 'success'
}

$(function() {

  let getData = (url, errorMessage) => {
    let result = null;

    $.get(url, (data, status) => {
      if(status !== code['200']){
        alert(errorMessage);
        console.log(status);
      }else{
        result = data;
      }
    });
  }

  let getRepository = (url) => {

    let data = getData(url, 'Error! Repository could not be found');

    if(data !== null){
      data = data['items'];
    }

    return data;
  }

  let getCommits = (url) => {
    return getData(url, 'Error! Commits cannot be found');

  }

  let handleButtonClick = () => {
    let inputValue = document.querySelector('#text_value').value;
    let fullUrl = `${btnUrl}?q=${inputValue}`;

    // Get Repository based on input value
    let items = getRepository(fullUrl);

    // If repository received
    if(items !== null){

      // Add Buttons to button panel
      let buttonPanel = document.querySelector('.button_list');
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

      buttonPanel.html(buttons);

      // Add callback functions to radio buttons
      let allButtons = document.querySelectorAll('.repositoryButton');

      for(button of allButtons){
        let url = button.value;
        button.onclick = () => {
          let commits = getCommits(url);

          if(commit !== null){
            let contentBody = document.querySelector('#content_body');
            contentBody.innerHTML = "";

            for(commit of data){
              let row = `<td>${commit['commit']['author']['name']}</td>
                         <td>${commit['commit']['author']['email']}</td>
                         <td>${commit['commit']['author']['date']}</td>
                         <td>${commit['commit']['message']}</td>`;
              contentBody.innerHTML += row;
            }
          }else{
            return;
          }
        }
      }

    }else{
      return;
    }
  }

  $('#go_button').click(handleButtonClick);

});
