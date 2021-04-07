var app = new Vue ({

el:'#root',

data: {

  mail: []

},

mounted: function(){

  let myThis = this;

  for( let i = 0; i < 10; i++){

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function(reply){

      myThis.mail.push(reply.data.response);


    });

  }


}





});
