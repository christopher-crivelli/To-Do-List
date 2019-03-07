//check off specific to-dos by clicking
$("ul").on("click", "li", (function(){
    $(this).toggleClass("completed");
}));

// click on X to delete To-do
$("ul").on("click", "span", (function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(400, function(){
        $(this).remove(); 
    });
}));

// add new todo from entered text 
$("input[type='text']").keypress(function(e){
    if(e.which === 13){
        if($(this).val() !== ""){
        // grab text
        var todoText = $(this).val();
        //create new li and add to ul
        $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span>" +  todoText + "</li>");
        //clear input 
        $(this).val("");
        }
    }
});

$("#toggle").click(function(){
   $("input[type='text']").fadeToggle(); 
});