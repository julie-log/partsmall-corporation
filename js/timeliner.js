/*
 * Timeliner.js
 * @version      2.31
 * @copyright    Tarek Anandan (http://www.technotarek.com)
 */
!(function (e) {
  function n(n) {
    function i(n) {
      e.each(n, function (n, i) {
        e(i)
          .parents(r.timelineTriggerContainer)
          .show(r.speed * r.baseSpeed, function () {
            t(e(i), e(i).next(r.timelineEXContent));
          });
      });
    }
    function t(n, i) {
      "flat" === r.startState &&
        e(n).parents(r.timelineTriggerContainer).show(),
        e(n)
          .find("a")
          .removeClass("closed")
          .addClass("open")
          .animate({ fontSize: r.fontOpen }, r.baseSpeed),
        e(i).show(r.speed * r.baseSpeed);
    }
    function l(n, i) {
      e(n)
        .find("a")
        .animate({ fontSize: r.fontClosed }, 0)
        .removeClass("open")
        .addClass("closed"),
        e(i).hide(r.speed * r.baseSpeed);
    }
    var r = {
      timelineContainer: n.timelineContainer || "#timeline",
      timelineSection: n.timelineSection || ".timeline-wrapper",
      timelineSectionMarker: n.timelineSectionMarker || ".timeline-time",
      timelineTriggerContainer:
        n.timelineTriggerContainer || ".timeline-series",
      timelineTriggerAnchor: n.timelineTriggerAnchor || ".timeline-event",
      timelineEventContainer: n.timelineEventContainer || "dt",
      timelineEXContent: n.timelineEXContent || ".timeline-event-content",
      EXContentIdSuffix: n.timelineEXContentSuffix || "EX",
      oneOpen: n.oneOpen || !1,
      startState: n.startState || "closed",
      startOpen: n.startOpen || [".start-open"],
      baseSpeed: n.baseSpeed || 200,
      speed: n.speed || 4,
      fontOpen: n.fontOpen || "1.2em",
      fontClosed: n.fontClosed || "1em",
      expandAllText: n.expandAllText || "+ expand all",
      collapseAllText: n.collapseAllText || "- collapse all",
    };
    if (!e(r.timelineContainer).data("started")) {
      e(r.timelineContainer).data("started", !0),
        e(r.timelineContainer + " .timeline-toggle").html(r.expandAllText),
        e(r.timelineContainer + " .collapseAll").html(r.collapseAllText),
        "flat" === r.startState
          ? (e(r.timelineContainer + " " + r.timelineTriggerContainer).hide(),
            i(e(r.startOpen)))
          : "closed" === r.startState
          ? (e(r.timelineContainer + " " + r.timelineEXContent).hide(),
            i(e(r.startOpen)))
          : t(
              e(
                r.timelineContainer +
                  " " +
                  r.timelineTriggerContainer +
                  " " +
                  r.timelineTriggerAnchor
              ),
              e(r.timelineContainer + " " + r.timelineEXContent)
            ),
        e(r.timelineContainer).on(
          "click",
          r.timelineTriggerContainer + " " + r.timelineEventContainer,
          function () {
            var n = e(this).attr("id");
            e(this).find("a").is(".open")
              ? l(e(this), e("#" + n + r.EXContentIdSuffix))
              : (1 == r.oneOpen &&
                  l(
                    e(this)
                      .parents(r.timelineContainer)
                      .find(
                        r.timelineTriggerAnchor,
                        r.timelineTriggerContainer
                      ),
                    e(this)
                      .parents(r.timelineContainer)
                      .find(r.timelineEXContent)
                  ),
                t(e(this), e("#" + n + r.EXContentIdSuffix)));
          }
        ),
        e(r.timelineContainer).on(
          "click",
          r.timelineSectionMarker,
          function () {
            var n = e(this)
                .parents(r.timelineSection)
                .find(r.timelineTriggerContainer).length,
              i = e(this).parents(r.timelineSection).find(".open").length;
            1 == r.oneOpen &&
              l(
                e(this)
                  .parents(r.timelineContainer)
                  .find(r.timelineTriggerAnchor, r.timelineTriggerContainer),
                e(this).parents(r.timelineContainer).find(r.timelineEXContent)
              ),
              n > i
                ? t(
                    e(this)
                      .parents(r.timelineSection)
                      .find(
                        r.timelineTriggerAnchor,
                        r.timelineTriggerContainer
                      ),
                    e(this).parents(r.timelineSection).find(r.timelineEXContent)
                  )
                : l(
                    e(this)
                      .parents(r.timelineSection)
                      .find(r.timelineTriggerContainer),
                    e(this).parents(r.timelineSection).find(r.timelineEXContent)
                  );
          }
        );
      var o = r.timelineContainer + " .timeline-toggle";
      e(o).click(function () {
        e(o).hasClass("expanded")
          ? (l(
              e(o)
                .parents(r.timelineContainer)
                .find(r.timelineTriggerAnchor, r.timelineTriggerContainer),
              e(o).parents(r.timelineContainer).find(r.timelineEXContent)
            ),
            e(o).removeClass("expanded").html(r.expandAllText))
          : (t(
              e(o)
                .parents(r.timelineContainer)
                .find(r.timelineTriggerAnchor, r.timelineTriggerContainer),
              e(o).parents(r.timelineContainer).find(r.timelineEXContent)
            ),
            e(o).addClass("expanded").html(r.collapseAllText));
      });
    }
  }
  e.timeliner = function (i) {
    null == e.timeliners
      ? ((e.timeliners = { options: [] }), e.timeliners.options.push(i))
      : e.timeliners.options.push(i),
      e(document).ready(function () {
        for (var i = 0; i < e.timeliners.options.length; i++)
          n(e.timeliners.options[i]);
      });
  };
})(jQuery);
