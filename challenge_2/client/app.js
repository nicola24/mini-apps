// let $firstName = $('#firstname');
// let $lastName = $('#lastname');
// let $county = $('#county');
// let $city = $('#city');
// let $role = $('#role');
// let $sales = $('#sales');

//function that handle submit button
$( "form" ).submit(function( event ) {
  console.log('submit');
  event.preventDefault();
});


let get = $.ajax({
  type: 'GET';
  URL: 'localhost:3000';
  success: function(data) {
    console.log(data);
  };
  error: function(); 
});

let post = $.ajax({
  type: 'POST';
  URL: 'localhost:3000';
  success: function(result) {
    console.log(result);
  };
  error: function();
});
