Use Express to build a single-page client-server app
that generates CSV reports from JSON data.

The client app should be able to submit JSON data to the server
receive a CSV-formatted response and then display the result on the same page

For basic requirements, data-entry of the JSON on the client should be done using an
HTML form with a single textarea input field (for the entire JSON text) and a submitbutton.
When the user clicks submit, POST the form data to the server.

You may assume the JSON data has a regular structure and hierarchy (see included sample file).

The server must flatten the JSON hierarchy, mapping each item in the JSON to a single line
of CSV report (see included sample output).
You may assume child records in the JSON will always be in a property called children but you may not assume a JSON record has any other specific properties; i.e. any properties that exist besides children must be mapped to a
column in your CSV report.
