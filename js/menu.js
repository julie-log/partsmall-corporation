$(function () {
  $(".depth1 > li").hover(
    function () {
      $(this).find(".depth2").addClass("active");
    },
    function () {
      $(this).find(".depth2").removeClass("active");
    }
  );
});
