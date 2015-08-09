
function set_payload(payload) {
  $("#falcon9-v11").removeClass("open");
  
  setTimeout(function() {
    $(".stack > .payload .payload").addClass("hidden");
  }, 400);
  
  setTimeout(function() {
    $(".stack > .payload .payload." + payload).removeClass("hidden");
  }, 600);
  

  setTimeout(function() {
    $("#falcon9-v11").addClass("open");
  }, 500);

  $("a.set-payload").removeClass("active");
  $("a.set-payload[data-payload=" + payload + "]").addClass("active");
}

$(document).ready(function() {
  $("a.set-payload").removeClass("hidden");
  $("a.set-payload").attr("href", "#");
  
  $("a.set-payload").click(function() {
    var e = $(this);

    set_payload(e.attr("data-payload"));
  });
  
  set_payload("cargo-dragon");

  $("#falcon9-v11").removeClass("open");
  setTimeout(function() {
    $("#falcon9-v11").addClass("open");
  }, 100);

});
