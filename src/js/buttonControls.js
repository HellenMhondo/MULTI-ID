$(document).ready(function () {
 
   // card-holder stepper
   $("#CardInfoNext").click(() => {
    console.log("heeey");
    $("#employeeInfoId").addClass("stepper-active");
    $("#CardInfoId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height:500px ");

    $("#employeeInfoDiv").attr("style", "display: block");
    $("#CardInfoDiv").attr("style", "display: none");
    $("#CardInfoId").addClass("stepper-completed");
  });

  $("#prevcardInfo").click(() => {
  
    $("#CardInfoId").addClass("stepper-active");
    $("#employeeInfoId").removeClass("stepper-active");

    $(".heightstepper").attr("style", "height: 250px");

    $("#CardInfoDiv").attr("style", "display: block");
    $("#employeeInfoDiv").attr("style", "display: none");
    
  });

  
});
