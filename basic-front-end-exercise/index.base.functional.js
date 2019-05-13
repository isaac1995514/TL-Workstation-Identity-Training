const btnUrl = 'https://api.github.com/search/repositories';
const radioUrl = 'https://api.github.com/repos/';

const code = {
  200: 'success'
}

$(function() {

    $('#go_button').click(function(){
      let inputValue = $('#text_value').val();
      let fullUrl= `${btnUrl}?q=${inputValue}`;
      $.get(fullUrl, (data, status) => {

        if(status !== code['200']){
          alert('Repository does not exist');
          console.log(status);
        }else{

          // Get Button Panel and Items
          let buttonPanel = $('.button_list');
          let items = data['items'];

          // Add Button to Panels
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
          let allButtons = document.querySelectorAll('.repositoryButton');

          for(button of allButtons){
              let url = button.value;
              button.onclick = () => {

                // Make Ajax Call to Get Repository
                $.get(url, (data, status) => {
                  console.log(button.value)
                  if(status !== code['200']){
                    alert('Repository does not exist');
                    console.log(status);
                  }else{
                    let contentBody = document.querySelector('#content_body');
                    contentBody.innerHTML = "";

                    for(commit of data){
                      let row = `<td>${commit['commit']['author']['name']}</td>
                                 <td>${commit['commit']['author']['email']}</td>
                                 <td>${commit['commit']['author']['date']}</td>
                                 <td>${commit['commit']['message']}</td>`;
                      contentBody.innerHTML += row;
                    }
                  }
                })
              }
          }
        }
      })
    })
});
