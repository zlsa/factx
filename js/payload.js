
function set_payload(payload, inhibit_animations) {

  if(inhibit_animations) {
    $(".stack > .payload .payload").addClass("hidden");
    $(".stack > .payload .payload." + payload).removeClass("hidden");
    $("#falcon9-v11").addClass("open");
  } else {
    $("#falcon9-v11").removeClass("open");
    setTimeout(function() {
      $(".stack > .payload .payload").addClass("hidden");
    }, 600);
    
    setTimeout(function() {
      $(".stack > .payload .payload." + payload).removeClass("hidden");
    }, 900);
    

    setTimeout(function() {
      $("#falcon9-v11").addClass("open");
    }, 1000);
  }

  location.hash = payload;

  $("a.set-payload").removeClass("active");
  $("a.set-payload[data-payload=" + payload + "]").addClass("active");
}

$(document).ready(function() {
  $("a.set-payload").removeClass("hidden");
  $("a.set-payload").attr("href", "#");
  
  $("a.set-payload").click(function() {
    var e = $(this);

    set_payload(e.attr("data-payload"));
    return false;
  });

  if(location.hash.length >= 2)
    set_payload(location.hash.substr(1), true);
  else
    set_payload("cargo-dragon", true);

  $("#falcon9-v11").removeClass("open");
  setTimeout(function() {
    $("#falcon9-v11").addClass("open");
  }, 100);

});
