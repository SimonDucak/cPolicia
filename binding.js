const resultHolder = $(".result-holder");

resultHolder.on("click", ".show-btn", function() {
  const currentDl = $(this).parents("dl");
  const duration = 300;

  currentDl.siblings("dl").find("dd").slideUp(duration);
  currentDl.siblings("dl").removeClass("open-dl");
  currentDl.siblings("dl").find(".show-btn").text("zobraziť")

  currentDl.toggleClass("open-dl");

  if(currentDl.hasClass("open-dl")) {
    $(this).text("skryť")
  } else {
    $(this).text("zobraziť")
  }

  currentDl.find("dd").slideToggle(duration);
});
