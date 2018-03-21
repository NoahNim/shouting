$(document).ready(function() {
  $("#formOne").submit(function() {
    var shouting = $("input#shout").val();
    console.log(shouting);

    $("#reply").show();

    $(".user-shout").text("I SAID " + shouting.toUpperCase());

    event.preventDefault();

  });
});
