import $ from "jquery";

$(".project-detail-about__infos--link").on("click", function() {
    var $this = $(this);
    var $content = $this.parent().prev(".project-detail-about__infos--text");
    var linkText = $this.find('span').text();

    if (linkText === "Читать подробнее") {
      linkText = "Скрыть";
      $content.removeClass('hideContent')
      $content.addClass('showContent')
    //   $content.switchClass("hideContent", "showContent", 400);
    } else {
      linkText = "Читать подробнее";
      $content.removeClass('showContent')
      $content.addClass('hideContent')
    //   $content.switchClass("showContent", "hideContent", 400);
    };
  
    $this.find('span').text(linkText);
});