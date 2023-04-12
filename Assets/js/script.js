// waits until page is loaded to run the below code
$(function () {
  //on click, the below grabs the hour-x div id and saves it as part of the key, as well as saving the content in the textarea class to local storage. 
  $("button").click(function () {
    var $timeBlock = $(this).closest(".time-block");
    var userInput = $timeBlock.attr("id");
    var key = "user-key-" + userInput;
    var value = JSON.stringify($timeBlock.find("textarea").val());
    localStorage.setItem(key, value);
  });
// defining the array and current hour used in for loop
  var hourArray = ["#hour-7", "#hour-8", "#hour-9", "#hour-10", "#hour-11", "#hour-12", "#hour-13", "#hour-14", "#hour-15", "#hour-16", "#hour-17", "#hour-18"];
  var now = dayjs().hour();
// the below loop has two main functions
// First, it checks every hour to see if there is something from local storage that can be displayed. 
// Second, it checks the current time against the 
// various time blocks and sets the color based on 
// if it is past, currently, or before the current time.
  for (var i = 0; i < hourArray.length; i++) {
    var currentHour = $(hourArray[i]);
    var id = currentHour.attr("id");
    var textarea = currentHour.find('textarea');
    var key = "user-key-" + id;
    var savedValue = localStorage.getItem(key);
    if (savedValue) {
      textarea.val(JSON.parse(savedValue));
    }
// sets color content of each time-block
    // I could have set variable "i" against "now", but 
    // I believe the below code would make future coding 
    // of hour blocks on either side of the workday 
    // easier to understand.
    if (id && id.match(/\d+/)) {
      var justHour = id.match(/\d+/)[0];
      if (justHour > now) {
        currentHour.addClass("future")
      } else if (justHour < now) {
        currentHour.addClass("past")
      } else {
        currentHour.addClass("present")
      }
    }
  }
  // Displays the current day and date in header
$(function () {
  var currentTime = $("#currentDay");
  currentTime.text(dayjs().format("dddd, MMMM D, YYYY"));
});

});