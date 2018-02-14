//function that handle submit button
$( "form" ).submit(function( event ) {
  //object that store data from form and submit it
  let data = $('#input').val();
    // print data in the div result
    $('#result').text(data);
    // prevent submit from reloading page
    event.preventDefault();
});

// ****************************************************************************

// ajax request
// $.ajax({
//   method: 'POST',
//   data: JSON.stringify(data),
//   URL: 'localhost:3000',
//   success: function(data) {
//     console.log(data);
//   };
//   error: function();
// });
