var width;

function initCanvas() {
    width = window.innerWidth;
    LogosCanvas = document.getElementById("tssLogos");
    LogosCanvas.width = width;
    Logosctx = LogosCanvas.getContext("2d")
}

initCanvas();
$(document).ready(function () {
        setTagCanvasOptions();
});

function setTagCanvasOptions() {
    if (!$("#tssLogos").tagcanvas({
            textColour: "#ffffff",
            outlineThickness: 1,
            maxSpeed: .03,
            depth: .2,
            imageMode: "image",
            imageScale: .2,
            initial: [.2, 0],
            noSelect: true,
            outlineMethod: "none",
            shape: "vring(0)",
            lock: "y",
            radiusX: 1,
            radiusY: 1,
            radiusZ: 1,
            wheelZoom: false
        }, "logos")) {
        $("#tssLogosContainer").hide()
    }
}

function ResponsiveTCforIE(c) {
    var e = document.getElementById(c),
        rw;
    if (e && e.height && e.width) {
        rw = parseInt(document.defaultView.getComputedStyle(e).getPropertyValue("width"));
        e.style.height = rw * e.height / e.width + "px"
    }
}

if (document.all && document.addEventListener) {
    window.addEventListener("resize", function () {
        ResponsiveTCforIE("tssLogos")
    }, false);
    window.addEventListener("load", function () {
        ResponsiveTCforIE("tssLogos")
    }, false)
}
var $;
$ = jQuery;
$.fn.extend({
    eqHeight: function (column_selector, option) {
        if (option == null) {
            option = {
                equalize_interval: null,
                break_point: null
            }
        }
        return this.each(function () {
            var columns, equalizer, infinite_equalizing, start_equalizing, timer, _equalize_marked_columns;
            timer = null;
            columns = $(this).find(column_selector);
            if (columns.length === 0) {
                columns = $(this).children()
            }
            if (columns.length === 0) {
                return
            }
            _equalize_marked_columns = function () {
                var marked_columns, max_col_height;
                marked_columns = $(".eqHeight_row");
                max_col_height = 0;
                marked_columns.each(function () {
                    return max_col_height = Math.max($(this).outerHeight(), max_col_height)
                });
                marked_columns.height(max_col_height);
                return $(".eqHeight_row").removeClass("eqHeight_row")
            };
            equalizer = function () {
                var row_top_value;
                columns.height("auto");
                if (typeof option.break_point === "number" && $(window).width() <= option.break_point) {
                    return
                }
                row_top_value = columns.first().position().top;
                columns.each(function () {
                    var current_top;
                    current_top = $(this).position().top;
                    if (current_top !== row_top_value) {
                        _equalize_marked_columns();
                        row_top_value = $(this).position().top
                    }
                    return $(this).addClass("eqHeight_row")
                });
                return _equalize_marked_columns()
            };
            start_equalizing = function () {
                clearTimeout(timer);
                return timer = setTimeout(equalizer, 100)
            };
            infinite_equalizing = function () {
                equalizer();
                return timer = setTimeout(infinite_equalizing, option.equalize_interval)
            };
            $(window).load(equalizer);
            if (typeof option.equalize_interval === "number") {
                return infinite_equalizing()
            } else {
                return $(window).resize(start_equalizing)
            }
        })
    }
});
$(document).ready(function () {
    $("#equalHeight").eqHeight(".col-lg-3", {
        break_point: 767
    });
    $("a#team").on("click", function () {
        $("html, body").animate({
            scrollTop: $("section#team").offset().top
        }, 2e3)
    });
    $("a#portfolio").on("click", function () {
        $("html, body").animate({
            scrollTop: $("section#portfolio").offset().top
        }, 2e3)
    })
});

function initialize() {
    var stylesArray = [{
        featureType: "administrative.province",
        elementType: "geometry.fill",
        stylers: [{
            visibility: "off"
        }, {
            color: "#808080"
        }]
    }, {
        featureType: "administrative.country",
        elementType: "labels.text",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{
            color: "#ffffff"
        }]
    }, {
        featureType: "landscape.natural.landcover",
        stylers: [{
            color: "#D1D3D4"
        }]
    }, {
        featureType: "landscape.man_made",
        stylers: [{
            color: "#808080"
        }, {
            visibility: "off"
        }]
    }, {
        featureType: "road",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "landscape.natural.terrain",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "poi",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "administrative.country",
        stylers: [{
            color: "#D1D3D4"
        }]
    }, {
        featureType: "administrative.province",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "administrative.neighborhood",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "administrative.land_parcel",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "landscape.natural.landcover",
        stylers: [{
            color: "#D1D3D4"
        }, {
            visibility: "on"
        }]
    }, {
        featureType: "landscape.natural.terrain",
        elementType: "geometry.fill",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "landscape",
        elementType: "labels",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "road",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "transit",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "poi",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "landscape.natural",
        elementType: "geometry.fill",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "landscape.man_made",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "landscape",
        stylers: [{
            visibility: "on"
        }, {
            color: "#D1D3D4"
        }]
    }, {
        featureType: "administrative.locality",
        elementType: "labels.text.stroke",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "administrative.locality",
        elementType: "labels.text.stroke",
        stylers: [{
            visibility: "off"
        }]
    }, {
        featureType: "administrative.country",
        elementType: "geometry.stroke",
        stylers: [{
            visibility: "on"
        }, {
            color: "#969696"
        }, {
            weight: 1
        }]
    }, {
        featureType: "administrative.country",
        elementType: "labels.text.stroke",
        stylers: [{
            visibility: "on"
        }, {
            color: "#454545"
        }, {
            invert_lightness: true
        }]
    }, {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{
            visibility: "on"
        }, {
            color: "#808080"
        }]
    }, {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{
            hue: "#0091ff"
        }, {
            saturation: -1
        }]
    }];
    var map;
    var bounds = new google.maps.LatLngBounds;
    var myOptions = {
        zoom: 3,
        center: new google.maps.LatLng(2.382565, 16.061676),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        styles: stylesArray
    };
    map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
    var markers = [];
    var infoWindowContent = [];
    var infoWindow = new google.maps.InfoWindow,
        marker, i;
    for (i = 0; i < markers.length; i++) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        var image = markers[i][3];
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0],
            icon: {
                url: "/bundles/appfrontend/img/1.png",
                size: new google.maps.Size(image[0], image[1]),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(image[0] / 2, image[1] / 2),
                scaledSize: new google.maps.Size(image[0], image[1])
            }
        });
        google.maps.event.addListener(marker, "click", function (marker, i) {
            return function () {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker)
            }
        }(marker, i));
        map.fitBounds(bounds)
    }
    var boundsListener = google.maps.event.addListener(map, "bounds_changed", function (event) {
        this.setZoom(3);
        google.maps.event.removeListener(boundsListener)
    })
}
