$(".submit").click(function() {
    var age=$(".age").val();
    var personality=$(".personality").val();
    age=parseInt(age);
    if(age>30 && personality==="nice") {
    $(".answer").text("You are Mario");
    }
    else if(age<30 && personality==="nice") {
        $(".answer").text("You are Luigi");
    }
else if(age>30 && personality==="mean") {
        $(".answer").text("You are Wario");
    }
    else if(age<30 && personality==="mean") {
        $(".answer").text("You are Bowser");
    }
    else{
        $(".answer").text("Something went wrong");
        console.log(age);
        console.log(personality);
    }
});