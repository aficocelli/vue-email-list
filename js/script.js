var app = new Vue ({

el:'#root',

data: {

  mail: "",

},

mounted: function(){

  let myThis = this;
  axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
  .then(function(reply){

    myThis.mail = reply.data.response

  });


}





});
