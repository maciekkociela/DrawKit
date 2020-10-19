/*(function () {
  // create a new Library instance and store it in a variable called "projectsGrid"
  var projectsGrid = new FsLibrary(".image-row");

  // run loadmore on our instance
  projectsGrid.loadmore({
    button: ".load-more-button",
    loadAll: false,
    animation: {
      enable: true,
      duration: 500,
      easing: "ease-out",
      effects: "fade translate(0px,20px)"
    }
  });
})();*/

$(".tag-link").on("click", function () {
  if ($(this).hasClass("jetboost-filter-active")) {
    var hasActive = 0;
    $(".tag .tag-link").each(function () {
      if ($(this).hasClass("jetboost-filter-active")) {
        hasActive++;
      }
    });
    if (hasActive < 2) {
      $(".tag-link.all").removeClass("gray-tag");
    }
  } else {
    $(".tag-link.all").addClass("gray-tag");
  }
});

$(".tag-link.all").on("click", function () {
  $(".tag-link.all").removeClass("gray-tag");
});
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const categoryParam = urlParams.get("category");
if (categoryParam) {
  $(".tag-link.all").addClass("gray-tag");
}
