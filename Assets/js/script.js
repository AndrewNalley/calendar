$(function () {
$("button").click(function () {
  var $timeBlock = $(this).closest(".time-block");
  var userInput = $timeBlock.attr("id");
  var key = "user-key-" + userInput;
  var value = JSON.stringify($timeBlock.find("textarea").val());
  localStorage.setItem(key, value);
  console.log(userInput);
  console.log(key);
});

var hourArray = ["#hour-7", "#hour-8", "#hour-9", "#hour-10", "#hour-11", "#hour-12", "#hour-13", "#hour-14", "#hour-15", "#hour-16", "#hour-17", "#hour-18"];
var now = dayjs().hour();

for (var i = 0; i < hourArray.length; i++) {

  var currentHour = $(hourArray[i]);
  var id = currentHour.attr("id");
  if (id && id.match(/\d+/)) {
    var justHour = id.match(/\d+/)[0];
    console.log(justHour);
    if (justHour > now) {
      currentHour.addClass("future")
    } else if (justHour < now) {
      currentHour.addClass("past")
    } else {
      currentHour.addClass("present")
    }
  }
}
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});