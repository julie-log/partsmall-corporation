const fullMenu = document.getElementById("full-menu");
const langMenu = document.getElementById("lang-menu");
$(function () {
  $(".depth1 > li").hover(
    function () {
      // $(this).find(".depth2").addClass("active");
      $(".depth2").addClass("active");
      $(".side-menu").addClass("active");
    },
    function () {
      // $(this).find(".depth2").removeClass("active");
      $(".depth2").removeClass("active");
      $(".side-menu").removeClass("active");
    }
  );
});
