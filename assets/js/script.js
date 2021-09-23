var today = moment().format("dddd, MMM Do YYYY");
$("#currentDay").html(today);

$(document).ready(function() {
    $("saveBtn").on("click",function() {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        //save event in local storage
        localStorage.setItem(time, text);
    })

    function trackTime() {
        var timeNow = moment().hour();

        //loop over time-blocks
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
})