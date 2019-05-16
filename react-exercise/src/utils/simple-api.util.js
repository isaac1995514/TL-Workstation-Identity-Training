import $ from 'jquery';

const code = {
  200: 'success'
}

export const SimpleAPI = {
  getData: (url, errorMsg, resolve, reject) => {
    (function(){
      $.get(url, (data, status) => {
        status === code['200'] ?
         resolve(data) :
         reject(`ErrorMsg: ${errorMsg}, Status: ${status}`);
      });
    })();
  }
}
