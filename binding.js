const resultHolder = $(".result-holder");

resultHolder.on("click", ".show-btn", function() {
  const currentTr = $(this).parents("tr");

  currentTr.next(".agreements").slideToggle();
  currentTr.toggleClass("open-agr");

  if(currentTr.hasClass("open-agr")) {
    $(this).text("-");
  } else {
    $(this).text("+");
  }

  // currentDl.siblings("dl").find("dd").slideUp(duration);
  // currentDl.siblings("dl").removeClass("open-dl");
  // currentDl.siblings("dl").find(".show-btn").text("+")
  //
  // currentDl.toggleClass("open-dl");
  //
  // if(currentDl.hasClass("open-dl")) {
  //   $(this).text("-")
  // } else {
  //   $(this).text("+")
  // }
  //
  // currentDl.find("dd").slideToggle(duration);
});
