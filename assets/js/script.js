var todayDate = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(todayDate);

$(document).ready(function() {
    $(".saveBtn").on("click",function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //save event in local storage
        localStorage.setItem(time, text);
        
    })

    function trackTime() {
        var timeNow = moment().hour();

        //loop over time-hours
        $(".time-block").each(function() {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            //to check time and indicate past, present, future
            if(timeBlock < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock === timeNow) {

                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    //get item from local storage
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    trackTime();
})