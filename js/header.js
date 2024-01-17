fetch("header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;

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
      var headerHeight = $(".navbar").height(); // 헤더의 클래스 또는 ID에 맞게 수정

      $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        console.log(headerHeight);
        var target = this.hash;
        var $target = $(target);

        // 헤더의 높이를 고려하여 부드럽게 이동
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $target.offset().top - headerHeight,
            },
            100,
            "swing"
          );
      });
    });
  });
