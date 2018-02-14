//function that handle submit button
$( "form" ).submit(function( event ) {
  //store data from input field
  let data = $('#input').val();

  // ***AJAX REQUEST***
  $.ajax({
    url: '',
    method: 'POST',
    data: data,
    contentType: 'application/json',
    success: function (data) {
      $('#result').text(data);
      console.log('DATA SENT', data);
    },
    error: function (data) {
      console.error('FAILED TO SENT', data);
    }
  });

    // prevent submit from reloading page
    event.preventDefault();
});
