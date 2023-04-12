$(document).ready(function() {
$(function () {
    
$("button").click(function() {
  var userInput = $(this).closest(".time-block").attr("id");
  

  var key = "mykey-" + userInput.id;
  var value = JSON.stringify()// text area content);
  localStorage.setItem(key, value);
  console.log(userInput);
});
var hourArray = ["#hour-8", "#hour-9", "#hour-10", "#hour-11", "#hour-12", "#hour-13", "#hour-14", "#hour-15", "#hour-16", "#hour-17", "#hour-18", "#hour-19"];
var now = dayjs();

for (var i = 0; i < hourArray.length; i++) {
  var hour = $(hourArray[i]);
  if (hour > now) {
    $(this).closest("div").addClass("future")
  } else if (hour < now) {
    $(this).closest("div").addClass("past")
  } else {
    $(this).closest("div").addClass("present")
  }
}
console.log(now)



  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
});