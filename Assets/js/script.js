$(function () {
  $("button").click(function () {
    var $timeBlock = $(this).closest(".time-block");
    var userInput = $timeBlock.attr("id");
    var key = "user-key-" + userInput;
    var value = JSON.stringify($timeBlock.find("textarea").val());
    localStorage.setItem(key, value);
  });

  var hourArray = ["#hour-7", "#hour-8", "#hour-9", "#hour-10", "#hour-11", "#hour-12", "#hour-13", "#hour-14", "#hour-15", "#hour-16", "#hour-17", "#hour-18"];
  var now = dayjs().hour();

  for (var i = 0; i < hourArray.length; i++) {
    // I could have set variable "i" against "now", but I believe the below code would make future coding of hour blocks on either side of the workday easier to understand.
    var currentHour = $(hourArray[i]);
    var id = currentHour.attr("id");
    var textarea = currentHour.find('textarea');
    var key = "user-key-" + id;
    var savedValue = localStorage.getItem(key);
    if (savedValue) {
      textarea.val(JSON.parse(savedValue));
    }

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

  // TODO: Add code to display the current date in the header of the page.
});