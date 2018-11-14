$(document)
    .ready(function () {
        $("p1").show();
        $("p1").addClass("clicked-once");
        $("p2").hide();
        $("p3").hide();

          $(document).on("click","a[data-filter='info']",function() {
            if ( $("p1").hasClass("clicked-once")) {
                // already been clicked once, hide it
                $("p1").hide();
                $("p1").removeClass("clicked-once");
            }
            else {
              if ( $("p2").hasClass("clicked-once")) {
                  // already been clicked once, hide it
                  $("p2").hide();
                  $("p2").removeClass("clicked-once");
              }

              if ( $("p3").hasClass("clicked-once")) {
                  // already been clicked once, hide it
                  $("p3").hide();
                  $("p3").removeClass("clicked-once");
              }
                // first time this is clicked, mark it
                $("p1").show();
                $("p1").addClass("clicked-once");
            }
          });

          $(document).on("click","a[data-filter='table']",function() {
            if ( $("p2").hasClass("clicked-once")) {
                // already been clicked once, hide it
                $("p2").hide();
                $("p2").removeClass("clicked-once");
            }
            else {
              if ( $("p1").hasClass("clicked-once")) {
                  // already been clicked once, hide it
                  $("p1").hide();
                  $("p1").removeClass("clicked-once");
              }

              if ( $("p3").hasClass("clicked-once")) {
                  // already been clicked once, hide it
                  $("p3").hide();
                  $("p3").removeClass("clicked-once");
              }
                // first time this is clicked, mark it
                $("p2").show();
                $("p2").addClass("clicked-once");
            }
          })

          $(document).on("click","a[data-filter='card']",function() {
            if ( $("p3").hasClass("clicked-once")) {
                // already been clicked once, hide it
                $("p3").hide();
                $("p3").removeClass("clicked-once");
            }
            else {
              if ( $("p2").hasClass("clicked-once")) {
                  // already been clicked once, hide it
                  $("p2").hide();
                  $("p2").removeClass("clicked-once");
              }

              if ( $("p1").hasClass("clicked-once")) {
                  // already been clicked once, hide it
                  $("p1").hide();
                  $("p1").removeClass("clicked-once");
              }
                // first time this is clicked, mark it
                $("p3").show();
                $("p3").addClass("clicked-once");
            }
          })
    });
