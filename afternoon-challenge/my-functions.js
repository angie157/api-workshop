$(document).ready(function(){

  console.log("TFL Air Quality Challenge");

  const URL = ""; // which URL do you have to use? Check the documentation!

  console.log("tfl air quality call in log");
  $("#request").click(function(){
    $.ajax({
      dataType: "json" // this is an example for a parameter of the API request. Add the remaining in the same manner.
      // Add the method type of the call
      // Add the URL to use
      success: function(data) {
       // Tell the console to print the response in the log
      }
    });
  });

  // Now "print" the response to the console. Define a function for this (hint: check the my-demo-functions.js script in the demo folder)
  console.log("tfl call with html and HTML `<pre>` tags")
  $("#request").click(function(){ // ajax function definition that will be executed with the selector button
    $.ajax({url: URL, success: function(data){ //.ajax() returns the result of the API call, which contains the returned data by standard in JSON format.
      // We want to use it immediately and therefore set it as parameter for the callback success function.
      // Define a function for this and put the success result into the div selector element (hint: you can use the .html() method).
      console.log(data);
    }});
  });

  console.log("tfl call in html with JSON.stringify")
  $("#request").click(function(){
    $.ajax({url: URL, success: function(data){
      // Make jQuery "understand" JSON
      console.log(data);
    }});
  });

  console.log("tfl call in html with JSON.stringify and HTML `<pre>` tags")
  $("#request").click(function(){
    $.ajax({url: URL, success: function(data){
      // make it pretty! Use HTML `<pre>` tags
      console.log(data);
    }});
  });

  console.log("tfl call in html and pick up a specific element from the JSON response")
  $("#request").click(function(){
    $.ajax({url: URL, success: function(data){
      // extract the JSON property first forecastSummary
      console.log(data);
    }});
  });

});
// https://medium.freecodecamp.org/here-is-the-most-popular-ways-to-make-an-http-request-in-javascript-954ce8c95aaa
