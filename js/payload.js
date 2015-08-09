
function set_payload(payload) {
  $(".stack > .payload .payload").addClass("hidden");
  $(".stack > .payload .payload." + payload).removeClass("hidden");

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
