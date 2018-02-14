//function that handle submit button
$( "form" ).submit(function( event ) {
  //store data from input field
  let data = $('#input').val();

  // print data in the div result
  // $('#result').text(typeof data);
  //
  // alert('it's working');

  // ***AJAX REQUEST***
  $.ajax({
    url: 'localhost:3000',
    method: 'POST',
    data: JSON.stringify(data),
    contentType: 'application/json',
    success: function (data) {
      console.log('DATA SENT', data);
    },
    error: function (data) {
      console.error('FAILED TO SENT', data);
    }
  });

    // prevent submit from reloading page
    event.preventDefault();
});
