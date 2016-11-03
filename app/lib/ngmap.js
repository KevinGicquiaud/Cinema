!function(e,t){"object"==typeof exports?module.exports=t(require("angular")):"function"==typeof define&&define.amd?define(["angular"],t):t(e.angular)}(this,function(angular){/**
 * AngularJS Google Maps Ver. 1.17.94
 *
 * The MIT License (MIT)
 *
 * Copyright (c) 2014, 2015, 1016 Allen Kim
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
    return angular.module("ngMap",[]),function(){"use strict";var e,t=function(t,n,o,i,a,r,s){e=a;var p=this;p.mapOptions,p.mapEvents,p.eventListeners,p.addObject=function(e,t){if(p.map){p.map[e]=p.map[e]||{};var n=Object.keys(p.map[e]).length;p.map[e][t.id||n]=t,p.map instanceof google.maps.Map&&("infoWindows"!=e&&t.setMap&&t.setMap&&t.setMap(p.map),t.centered&&t.position&&p.map.setCenter(t.position),"markers"==e&&p.objectChanged("markers"),"customMarkers"==e&&p.objectChanged("customMarkers"))}},p.deleteObject=function(e,t){if(t.map){var n=t.map[e];for(var o in n)n[o]===t&&(google.maps.event.clearInstanceListeners(t),delete n[o]);t.map&&t.setMap&&t.setMap(null),"markers"==e&&p.objectChanged("markers"),"customMarkers"==e&&p.objectChanged("customMarkers")}},p.observeAttrSetObj=function(t,n,o){if(n.noWatcher)return!1;for(var i=e.getAttrsToObserve(t),a=0;a<i.length;a++){var s=i[a];n.$observe(s,r.observeAndSet(s,o))}},p.zoomToIncludeMarkers=function(){if(null!=p.map.markers&&Object.keys(p.map.markers).length>0||null!=p.map.customMarkers&&Object.keys(p.map.customMarkers).length>0){var e=new google.maps.LatLngBounds;for(var t in p.map.markers)e.extend(p.map.markers[t].getPosition());for(var n in p.map.customMarkers)e.extend(p.map.customMarkers[n].getPosition());p.mapOptions.maximumZoom&&(p.enableMaximumZoomCheck=!0),p.map.fitBounds(e)}},p.objectChanged=function(e){!p.map||"markers"!=e&&"customMarkers"!=e||"auto"!=p.map.zoomToIncludeMarkers||p.zoomToIncludeMarkers()},p.initializeMap=function(){var a=p.mapOptions,u=p.mapEvents,l=p.map;if(p.map=s.getMapInstance(n[0]),r.setStyle(n[0]),l){var g=e.filter(o),d=e.getOptions(g),m=e.getControlOptions(g);a=angular.extend(d,m);for(var f in l){var v=l[f];if("object"==typeof v)for(var y in v)p.addObject(f,v[y])}p.map.showInfoWindow=p.showInfoWindow,p.map.hideInfoWindow=p.hideInfoWindow}a.zoom=a.zoom||15;var h=a.center;if(!a.center||"string"==typeof h&&h.match(/\{\{.*\}\}/))a.center=new google.maps.LatLng(0,0);else if("string"==typeof h&&h.match(/[0-9.-]*,[0-9.-]*/))a.center=new google.maps.LatLng(h);else if(!(h instanceof google.maps.LatLng)){var M=a.center;delete a.center,r.getGeoLocation(M,a.geoLocationOptions).then(function(e){p.map.setCenter(e);var n=a.geoCallback;n&&i(n)(t)},function(){a.geoFallbackCenter&&p.map.setCenter(a.geoFallbackCenter)})}p.map.setOptions(a);for(var b in u){var O=u[b],w=google.maps.event.addListener(p.map,b,O);p.eventListeners[b]=w}p.observeAttrSetObj(c,o,p.map),p.singleInfoWindow=a.singleInfoWindow,google.maps.event.trigger(p.map,"resize"),google.maps.event.addListenerOnce(p.map,"idle",function(){r.addMap(p),a.zoomToIncludeMarkers&&p.zoomToIncludeMarkers(),t.map=p.map,t.$emit("mapInitialized",p.map),o.mapInitialized&&i(o.mapInitialized)(t,{map:p.map})}),a.zoomToIncludeMarkers&&a.maximumZoom&&google.maps.event.addListener(p.map,"zoom_changed",function(){1==p.enableMaximumZoomCheck&&(p.enableMaximumZoomCheck=!1,google.maps.event.addListenerOnce(p.map,"bounds_changed",function(){p.map.setZoom(Math.min(a.maximumZoom,p.map.getZoom()))}))})},t.google=google;var c=e.orgAttributes(n),u=e.filter(o),l=e.getOptions(u,{scope:t}),g=e.getControlOptions(u),d=angular.extend(l,g),m=e.getEvents(t,u);if(Object.keys(m).length&&void 0,p.mapOptions=d,p.mapEvents=m,p.eventListeners={},l.lazyInit){if(o.id&&0===o.id.indexOf("{{",0)&&-1!==o.id.indexOf("}}",o.id.length-"}}".length))var f=o.id.slice(2,-2),v=i(f)(t);else var v=o.id;p.map={id:v},r.addMap(p)}else p.initializeMap();l.triggerResize&&google.maps.event.trigger(p.map,"resize"),n.bind("$destroy",function(){s.returnMapInstance(p.map),r.deleteMap(p)})};t.$inject=["$scope","$element","$attrs","$parse","Attr2MapOptions","NgMap","NgMapPool"],angular.module("ngMap").controller("__MapController",t)}(),function(){"use strict";var e,t=function(t,o,i,a){a=a[0]||a[1];var r=e.orgAttributes(o),s=e.filter(i),p=e.getOptions(s,{scope:t}),c=e.getEvents(t,s),u=n(p,c);a.addObject("bicyclingLayers",u),a.observeAttrSetObj(r,i,u),o.bind("$destroy",function(){a.deleteObject("bicyclingLayers",u)})},n=function(e,t){var n=new google.maps.BicyclingLayer(e);for(var o in t)google.maps.event.addListener(n,o,t[o]);return n},o=function(n){return e=n,{restrict:"E",require:["?^map","?^ngMap"],link:t}};o.$inject=["Attr2MapOptions"],angular.module("ngMap").directive("bicyclingLayer",o)}(),function(){"use strict";var e,t,n,o=function(n,o,i,a){a=a[0]||a[1];var r=e.filter(i),s=e.getOptions(r,{scope:n}),p=e.getEvents(n,r),c=o[0].parentElement.removeChild(o[0]);t(c.innerHTML.trim())(n);for(var u in p)google.maps.event.addDomListener(c,u,p[u]);a.addObject("customControls",c);var l=s.position;a.map.controls[google.maps.ControlPosition[l]].push(c),o.bind("$destroy",function(){a.deleteObject("customControls",c)})},i=function(i,a,r){return e=i,t=a,n=r,{restrict:"E",require:["?^map","?^ngMap"],link:o}};i.$inject=["Attr2MapOptions","$compile","NgMap"],angular.module("ngMap").directive("customControl",i)}(),function(){"use strict";var e,t,n,o,i=function(e){e=e||{},this.el=document.createElement("div"),this.el.style.display="inline-block",this.el.style.visibility="hidden",this.visible=!0;for(var t in e)this[t]=e[t]},a=function(){i.prototype=new google.maps.OverlayView,i.prototype.setContent=function(e,t){this.el.innerHTML=e,this.el.style.position="absolute",t&&n(angular.element(this.el).contents())(t)},i.prototype.getDraggable=function(){return this.draggable},i.prototype.setDraggable=function(e){this.draggable=e},i.prototype.getPosition=function(){return this.position},i.prototype.setPosition=function(e){e&&(this.position=e);var n=this;if(this.getProjection()&&"function"==typeof this.position.lng){var o=function(){var e=n.getProjection().fromLatLngToDivPixel(n.position),t=Math.round(e.x-n.el.offsetWidth/2),o=Math.round(e.y-n.el.offsetHeight-10);n.el.style.left=t+"px",n.el.style.top=o+"px",n.el.style.visibility="visible"};n.el.offsetWidth&&n.el.offsetHeight?o():t(o,300)}},i.prototype.setZIndex=function(e){e&&(this.zIndex=e),this.el.style.zIndex=this.zIndex},i.prototype.getVisible=function(){return this.visible},i.prototype.setVisible=function(e){this.el.style.display=e?"inline-block":"none",this.visible=e},i.prototype.addClass=function(e){var t=this.el.className.trim().split(" ");-1==t.indexOf(e)&&t.push(e),this.el.className=t.join(" ")},i.prototype.removeClass=function(e){var t=this.el.className.split(" "),n=t.indexOf(e);n>-1&&t.splice(n,1),this.el.className=t.join(" ")},i.prototype.onAdd=function(){this.getPanes().overlayMouseTarget.appendChild(this.el)},i.prototype.draw=function(){this.setPosition(),this.setZIndex(this.zIndex),this.setVisible(this.visible)},i.prototype.onRemove=function(){this.el.parentNode.removeChild(this.el)}},r=function(n,a){return function(r,s,p,c){c=c[0]||c[1];var u=e.orgAttributes(s),l=e.filter(p),g=e.getOptions(l,{scope:r}),d=e.getEvents(r,l);s[0].style.display="none";var m=new i(g);t(function(){r.$watch("["+a.join(",")+"]",function(){m.setContent(n,r)},!0),m.setContent(s[0].innerHTML,r);var e=s[0].firstElementChild.className;m.addClass("custom-marker"),m.addClass(e),g.position instanceof google.maps.LatLng||o.getGeoLocation(g.position).then(function(e){m.setPosition(e)})});for(var f in d)google.maps.event.addDomListener(m.el,f,d[f]);c.addObject("customMarkers",m),c.observeAttrSetObj(u,p,m),s.bind("$destroy",function(){c.deleteObject("customMarkers",m)})}},s=function(i,s,p,c){return e=p,t=i,n=s,o=c,{restrict:"E",require:["?^map","?^ngMap"],compile:function(e){a(),e[0].style.display="none";var t=e.html(),n=t.match(/{{([^}]+)}}/g),o=[];return(n||[]).forEach(function(e){var t=e.replace("{{","").replace("}}","");-1==e.indexOf("::")&&-1==e.indexOf("this.")&&-1==o.indexOf(t)&&o.push(e.replace("{{","").replace("}}",""))}),r(t,o)}}};s.$inject=["$timeout","$compile","Attr2MapOptions","NgMap"],angular.module("ngMap").directive("customMarker",s)}(),function(){"use strict";var e,t,n,o=function(e,t){e.panel&&(e.panel=document.getElementById(e.panel)||document.querySelector(e.panel));var n=new google.maps.DirectionsRenderer(e);for(var o in t)google.maps.event.addListener(n,o,t[o]);return n},i=function(e,o){var i=new google.maps.DirectionsService,a=o;a.travelMode=a.travelMode||"DRIVING";var r=["origin","destination","travelMode","transitOptions","unitSystem","durationInTraffic","waypoints","optimizeWaypoints","provideRouteAlternatives","avoidHighways","avoidTolls","region"];for(var s in a)-1===r.indexOf(s)&&delete a[s];a.waypoints&&("[]"==a.waypoints||""===a.waypoints)&&delete a.waypoints;var p=function(n){i.route(n,function(n,o){o==google.maps.DirectionsStatus.OK&&t(function(){e.setDirections(n)})})};a.origin&&a.destination&&("current-location"==a.origin?n.getCurrentPosition().then(function(e){a.origin=new google.maps.LatLng(e.coords.latitude,e.coords.longitude),p(a)}):"current-location"==a.destination?n.getCurrentPosition().then(function(e){a.destination=new google.maps.LatLng(e.coords.latitude,e.coords.longitude),p(a)}):p(a))},a=function(a,r,s,p){var c=a;e=p,t=r,n=s;var u=function(n,a,r,s){s=s[0]||s[1];var p=c.orgAttributes(a),u=c.filter(r),l=c.getOptions(u,{scope:n}),g=c.getEvents(n,u),d=c.getAttrsToObserve(p),m=o(l,g);s.addObject("directionsRenderers",m),d.forEach(function(e){!function(e){r.$observe(e,function(n){if("panel"==e)t(function(){var e=document.getElementById(n)||document.querySelector(n);e&&m.setPanel(e)});else if(l[e]!==n){var o=c.toOptionValue(n,{key:e});l[e]=o,i(m,l)}})}(e)}),e.getMap().then(function(){i(m,l)}),a.bind("$destroy",function(){s.deleteObject("directionsRenderers",m)})};return{restrict:"E",require:["?^map","?^ngMap"],link:u}};a.$inject=["Attr2MapOptions","$timeout","NavigatorGeolocation","NgMap"],angular.module("ngMap").directive("directions",a)}(),function(){"use strict";angular.module("ngMap").directive("drawingManager",["Attr2MapOptions",function(e){var t=e;return{restrict:"E",require:["?^map","?^ngMap"],link:function(e,n,o,i){i=i[0]||i[1];var a=t.filter(o),r=t.getOptions(a,{scope:e}),s=t.getControlOptions(a),p=t.getEvents(e,a),c=new google.maps.drawing.DrawingManager({drawingMode:r.drawingmode,drawingControl:r.drawingcontrol,drawingControlOptions:s.drawingControlOptions,circleOptions:r.circleoptions,markerOptions:r.markeroptions,polygonOptions:r.polygonoptions,polylineOptions:r.polylineoptions,rectangleOptions:r.rectangleoptions});o.$observe("drawingControlOptions",function(e){c.drawingControlOptions=t.getControlOptions({drawingControlOptions:e}).drawingControlOptions,c.setDrawingMode(null),c.setMap(i.map)});for(var u in p)google.maps.event.addListener(c,u,p[u]);i.addObject("mapDrawingManager",c),n.bind("$destroy",function(){i.deleteObject("mapDrawingManager",c)})}}}])}(),function(){"use strict";angular.module("ngMap").directive("dynamicMapsEngineLayer",["Attr2MapOptions",function(e){var t=e,n=function(e,t){var n=new google.maps.visualization.DynamicMapsEngineLayer(e);for(var o in t)google.maps.event.addListener(n,o,t[o]);return n};return{restrict:"E",require:["?^map","?^ngMap"],link:function(e,o,i,a){a=a[0]||a[1];var r=t.filter(i),s=t.getOptions(r,{scope:e}),p=t.getEvents(e,r,p),c=n(s,p);a.addObject("mapsEngineLayers",c)}}}])}(),function(){"use strict";angular.module("ngMap").directive("fusionTablesLayer",["Attr2MapOptions",function(e){var t=e,n=function(e,t){var n=new google.maps.FusionTablesLayer(e);for(var o in t)google.maps.event.addListener(n,o,t[o]);return n};return{restrict:"E",require:["?^map","?^ngMap"],link:function(e,o,i,a){a=a[0]||a[1];var r=t.filter(i),s=t.getOptions(r,{scope:e}),p=t.getEvents(e,r,p),c=n(s,p);a.addObject("fusionTablesLayers",c)}}}])}(),function(){"use strict";angular.module("ngMap").directive("heatmapLayer",["Attr2MapOptions","$window",function(e,t){var n=e;return{restrict:"E",require:["?^map","?^ngMap"],link:function(e,o,i,a){a=a[0]||a[1];var r=n.filter(i),s=n.getOptions(r,{scope:e});if(s.data=t[i.data]||e[i.data],!(s.data instanceof Array))throw"invalid heatmap data";s.data=new google.maps.MVCArray(s.data);{var p=new google.maps.visualization.HeatmapLayer(s);n.getEvents(e,r)}a.addObject("heatmapLayers",p)}}}])}(),function(){"use strict";var e=function(e,t,n,o,i,a,r){var s=e,p=function(e,a,r){var s;!e.position||e.position instanceof google.maps.LatLng||delete e.position,s=new google.maps.InfoWindow(e);for(var p in a)p&&google.maps.event.addListener(s,p,a[p]);var c=n(function(e){angular.isString(r)?o(r).then(function(t){e(angular.element(t).wrap("<div>").parent())},function(e){throw"info-window template request failed: "+e}):e(r)}).then(function(e){var t=e.html().trim();if(1!=angular.element(t).length)throw"info-window working as a template must have a container";s.__template=t.replace(/\s?ng-non-bindable[='"]+/,"")});return s.__open=function(e,n,o){c.then(function(){i(function(){o&&(n.anchor=o);var i=t(s.__template)(n);s.setContent(i[0]),n.$apply(),o&&o.getPosition?s.open(e,o):o&&o instanceof google.maps.LatLng?(s.open(e),s.setPosition(o)):s.open(e);var a=s.content.parentElement.parentElement.parentElement;a.className="ng-map-info-window"})})},s},c=function(e,t,n,o){o=o[0]||o[1],t.css("display","none");var i,c=s.orgAttributes(t),u=s.filter(n),l=s.getOptions(u,{scope:e}),g=s.getEvents(e,u),d=p(l,g,l.template||t);!l.position||l.position instanceof google.maps.LatLng||(i=l.position),i&&r.getGeoLocation(i).then(function(t){d.setPosition(t),d.__open(o.map,e,t);var i=n.geoCallback;i&&a(i)(e)}),o.addObject("infoWindows",d),o.observeAttrSetObj(c,n,d),o.showInfoWindow=o.map.showInfoWindow=o.showInfoWindow||function(t,n,i){var a="string"==typeof t?t:n,r="string"==typeof t?n:i;if("string"==typeof r)if("undefined"!=typeof o.map.markers&&"undefined"!=typeof o.map.markers[r])r=o.map.markers[r];else{if("undefined"==typeof o.map.customMarkers[r])throw new Error("Cant open info window for id "+r+". Marker or CustomMarker is not defined");r=o.map.customMarkers[r]}var s=o.map.infoWindows[a],p=r?r:this.getPosition?this:null;s.__open(o.map,e,p),o.singleInfoWindow&&(o.lastInfoWindow&&e.hideInfoWindow(o.lastInfoWindow),o.lastInfoWindow=a)},o.hideInfoWindow=o.map.hideInfoWindow=o.hideInfoWindow||function(e,t){var n="string"==typeof e?e:t,i=o.map.infoWindows[n];i.close()},e.showInfoWindow=o.map.showInfoWindow,e.hideInfoWindow=o.map.hideInfoWindow;var m=d.mapId?{id:d.mapId}:0;r.getMap(m).then(function(t){if(d.visible&&d.__open(t,e),d.visibleOnMarker){var n=d.visibleOnMarker;d.__open(t,e,t.markers[n])}})};return{restrict:"E",require:["?^map","?^ngMap"],link:c}};e.$inject=["Attr2MapOptions","$compile","$q","$templateRequest","$timeout","$parse","NgMap"],angular.module("ngMap").directive("infoWindow",e)}(),function(){"use strict";angular.module("ngMap").directive("kmlLayer",["Attr2MapOptions",function(e){var t=e,n=function(e,t){var n=new google.maps.KmlLayer(e);for(var o in t)google.maps.event.addListener(n,o,t[o]);return n};return{restrict:"E",require:["?^map","?^ngMap"],link:function(e,o,i,a){a=a[0]||a[1];var r=t.orgAttributes(o),s=t.filter(i),p=t.getOptions(s,{scope:e}),c=t.getEvents(e,s),u=n(p,c);a.addObject("kmlLayers",u),a.observeAttrSetObj(r,i,u),o.bind("$destroy",function(){a.deleteObject("kmlLayers",u)})}}}])}(),function(){"use strict";angular.module("ngMap").directive("mapData",["Attr2MapOptions","NgMap",function(e,t){var n=e;return{restrict:"E",require:["?^map","?^ngMap"],link:function(e,o,i){var a=n.filter(i),r=n.getOptions(a,{scope:e}),s=n.getEvents(e,a,s);t.getMap().then(function(t){for(var n in r){var o=r[n];"function"==typeof e[o]?t.data[n](e[o]):t.data[n](o)}for(var i in s)t.data.addListener(i,s[i])})}}}])}(),function(){"use strict";var e,t,n,o=[],i=[],a=function(n,a,r){var s=r.mapLazyLoadParams||r.mapLazyLoad;if(void 0===window.google||void 0===window.google.maps){i.push({scope:n,element:a,savedHtml:o[i.length]}),window.lazyLoadCallback=function(){e(function(){i.forEach(function(e){e.element.html(e.savedHtml),t(e.element.contents())(e.scope)})},100)};var p=document.createElement("script");p.src=s+(s.indexOf("?")>-1?"&":"?")+"callback=lazyLoadCallback",document.querySelector('script[src="'+p.src+'"]')||document.body.appendChild(p)}else a.html(o),t(a.contents())(n)},r=function(e,t){return!t.mapLazyLoad&&void 0,o.push(e.html()),n=t.mapLazyLoad,void 0!==window.google&&void 0!==window.google.maps?!1:(e.html(""),{pre:a})},s=function(n,o){return t=n,e=o,{compile:r}};s.$inject=["$compile","$timeout"],angular.module("ngMap").directive("mapLazyLoad",s)}(),function(){"use strict";angular.module("ngMap").directive("mapType",["$parse","NgMap",function(e,t){return{restrict:"E",require:["?^map","?^ngMap"],link:function(n,o,i,a){a=a[0]||a[1];var r,s=i.name;if(!s)throw"invalid map-type name";if(r=e(i.object)(n),!r)throw"invalid map-type object";t.getMap().then(function(e){e.mapTypes.set(s,r)}),a.addObject("mapTypes",r)}}}])}(),function(){"use strict";var e=function(){return{restrict:"AE",controller:"__MapController",controllerAs:"ngmap"}};angular.module("ngMap").directive("map",[e]),angular.module("ngMap").directive("ngMap",[e])}(),function(){"use strict";angular.module("ngMap").directive("mapsEngineLayer",["Attr2MapOptions",function(e){var t=e,n=function(e,t){var n=new google.maps.visualization.MapsEngineLayer(e);for(var o in t)google.maps.event.addListener(n,o,t[o]);return n};return{restrict:"E",require:["?^map","?^ngMap"],link:function(e,o,i,a){a=a[0]||a[1];var r=t.filter(i),s=t.getOptions(r,{scope:e}),p=t.getEvents(e,r,p),c=n(s,p);a.addObject("mapsEngineLayers",c)}}}])}(),function(){"use strict";var e,t,n,o=function(e,t){var o;if(n.defaultOptions.marker)for(var i in n.defaultOptions.marker)"undefined"==typeof e[i]&&(e[i]=n.defaultOptions.marker[i]);e.position instanceof google.maps.LatLng||(e.position=new google.maps.LatLng(0,0)),o=new google.maps.Marker(e),Object.keys(t).length>0;for(var a in t)a&&google.maps.event.addListener(o,a,t[a]);return o},i=function(i,a,r,s){s=s[0]||s[1];var p,c=e.orgAttributes(a),u=e.filter(r),l=e.getOptions(u,i,{scope:i}),g=e.getEvents(i,u);l.position instanceof google.maps.LatLng||(p=l.position);var d=o(l,g);s.addObject("markers",d),p&&n.getGeoLocation(p).then(function(e){d.setPosition(e),l.centered&&d.map.setCenter(e);var n=r.geoCallback;n&&t(n)(i)}),s.observeAttrSetObj(c,r,d),a.bind("$destroy",function(){s.deleteObject("markers",d)})},a=function(o,a,r){return e=o,t=a,n=r,{restrict:"E",require:["^?map","?^ngMap"],link:i}};a.$inject=["Attr2MapOptions","$parse","NgMap"],angular.module("ngMap").directive("marker",a)}(),function(){"use strict";angular.module("ngMap").directive("overlayMapType",["NgMap",function(e){return{restrict:"E",require:["?^map","?^ngMap"],link:function(t,n,o,i){i=i[0]||i[1];var a=o.initMethod||"insertAt",r=t[o.object];e.getMap().then(function(e){if("insertAt"==a){var t=parseInt(o.index,10);e.overlayMapTypes.insertAt(t,r)}else"push"==a&&e.overlayMapTypes.push(r)}),i.addObject("overlayMapTypes",r)}}}])}(),function(){"use strict";var e=function(e,t){var n=e,o=function(e,o,i,a){if("false"===i.placesAutoComplete)return!1;var r=n.filter(i),s=n.getOptions(r,{scope:e}),p=n.getEvents(e,r),c=new google.maps.places.Autocomplete(o[0],s);for(var u in p)google.maps.event.addListener(c,u,p[u]);var l=function(){t(function(){a&&a.$setViewValue(o.val())},100)};google.maps.event.addListener(c,"place_changed",l),o[0].addEventListener("change",l),i.$observe("types",function(e){if(e){var t=n.toOptionValue(e,{key:"types"});c.setTypes(t)}}),i.$observe("componentRestrictions",function(t){t&&c.setComponentRestrictions(e.$eval(t))})};return{restrict:"A",require:"?ngModel",link:o}};e.$inject=["Attr2MapOptions","$timeout"],angular.module("ngMap").directive("placesAutoComplete",e)}(),function(){"use strict";var e=function(e,t){var n,o=e.name;switch(delete e.name,o){case"circle":e.center instanceof google.maps.LatLng||(e.center=new google.maps.LatLng(0,0)),n=new google.maps.Circle(e);break;case"polygon":n=new google.maps.Polygon(e);break;case"polyline":n=new google.maps.Polyline(e);break;case"rectangle":n=new google.maps.Rectangle(e);break;case"groundOverlay":case"image":var i=e.url,a={opacity:e.opacity,clickable:e.clickable,id:e.id};n=new google.maps.GroundOverlay(i,e.bounds,a)}for(var r in t)t[r]&&google.maps.event.addListener(n,r,t[r]);return n},t=function(t,n,o){var i=t,a=function(t,a,r,s){s=s[0]||s[1];var p,c,u=i.orgAttributes(a),l=i.filter(r),g=i.getOptions(l,{scope:t}),d=i.getEvents(t,l);c=g.name,g.center instanceof google.maps.LatLng||(p=g.center);var m=e(g,d);s.addObject("shapes",m),p&&"circle"==c&&o.getGeoLocation(p).then(function(e){m.setCenter(e),m.centered&&m.map.setCenter(e);var o=r.geoCallback;o&&n(o)(t)}),s.observeAttrSetObj(u,r,m),a.bind("$destroy",function(){s.deleteObject("shapes",m)})};return{restrict:"E",require:["?^map","?^ngMap"],link:a}};t.$inject=["Attr2MapOptions","$parse","NgMap"],angular.module("ngMap").directive("shape",t)}(),function(){"use strict";var e=function(e,t){var n=e,o=function(e,t,n){var o,i;t.container&&(i=document.getElementById(t.container),i=i||document.querySelector(t.container)),i?o=new google.maps.StreetViewPanorama(i,t):(o=e.getStreetView(),o.setOptions(t));for(var a in n)a&&google.maps.event.addListener(o,a,n[a]);return o},i=function(e,i,a){var r=n.filter(a),s=n.getOptions(r,{scope:e}),p=n.getControlOptions(r),c=angular.extend(s,p),u=n.getEvents(e,r);t.getMap().then(function(e){var t=o(e,c,u);e.setStreetView(t),!t.getPosition()&&t.setPosition(e.getCenter()),google.maps.event.addListener(t,"position_changed",function(){t.getPosition()!==e.getCenter()&&e.setCenter(t.getPosition())});var n=google.maps.event.addListener(e,"center_changed",function(){t.setPosition(e.getCenter()),google.maps.event.removeListener(n)})})};return{restrict:"E",require:["?^map","?^ngMap"],link:i}};e.$inject=["Attr2MapOptions","NgMap"],angular.module("ngMap").directive("streetViewPanorama",e)}(),function(){"use strict";angular.module("ngMap").directive("trafficLayer",["Attr2MapOptions",function(e){var t=e,n=function(e,t){var n=new google.maps.TrafficLayer(e);for(var o in t)google.maps.event.addListener(n,o,t[o]);return n};return{restrict:"E",require:["?^map","?^ngMap"],link:function(e,o,i,a){a=a[0]||a[1];var r=t.orgAttributes(o),s=t.filter(i),p=t.getOptions(s,{scope:e}),c=t.getEvents(e,s),u=n(p,c);a.addObject("trafficLayers",u),a.observeAttrSetObj(r,i,u),o.bind("$destroy",function(){a.deleteObject("trafficLayers",u)})}}}])}(),function(){"use strict";angular.module("ngMap").directive("transitLayer",["Attr2MapOptions",function(e){var t=e,n=function(e,t){var n=new google.maps.TransitLayer(e);for(var o in t)google.maps.event.addListener(n,o,t[o]);return n};return{restrict:"E",require:["?^map","?^ngMap"],link:function(e,o,i,a){a=a[0]||a[1];var r=t.orgAttributes(o),s=t.filter(i),p=t.getOptions(s,{scope:e}),c=t.getEvents(e,s),u=n(p,c);a.addObject("transitLayers",u),a.observeAttrSetObj(r,i,u),o.bind("$destroy",function(){a.deleteObject("transitLayers",u)})}}}])}(),function(){"use strict";var e=/([\:\-\_]+(.))/g,t=/^moz([A-Z])/,n=function(){return function(n){return n.replace(e,function(e,t,n,o){return o?n.toUpperCase():n}).replace(t,"Moz$1")}};angular.module("ngMap").filter("camelCase",n)}(),function(){"use strict";var e=function(){return function(e){try{return JSON.parse(e),e}catch(t){return e.replace(/([\$\w]+)\s*:/g,function(e,t){return'"'+t+'":'}).replace(/'([^']+)'/g,function(e,t){return'"'+t+'"'})}}};angular.module("ngMap").filter("jsonize",e)}(),function(){"use strict";var isoDateRE=/^(\d{4}\-\d\d\-\d\d([tT][\d:\.]*)?)([zZ]|([+\-])(\d\d):?(\d\d))?$/,Attr2MapOptions=function($parse,$timeout,$log,NavigatorGeolocation,GeoCoder,camelCaseFilter,jsonizeFilter){var orgAttributes=function(e){e.length>0&&(e=e[0]);for(var t={},n=0;n<e.attributes.length;n++){var o=e.attributes[n];t[o.name]=o.value}return t},getJSON=function(e){var t=/^[\+\-]?[0-9\.]+,[ ]*\ ?[\+\-]?[0-9\.]+$/;return e.match(t)&&(e="["+e+"]"),JSON.parse(jsonizeFilter(e))},getLatLng=function(e){var t=e;return e[0].constructor==Array?t=e.map(function(e){return new google.maps.LatLng(e[0],e[1])}):!isNaN(parseFloat(e[0]))&&isFinite(e[0])&&(t=new google.maps.LatLng(t[0],t[1])),t},toOptionValue=function(input,options){var output;try{output=getNumber(input)}catch(err){try{var output=getJSON(input);if(output instanceof Array)output=output[0].constructor==Object?output:getLatLng(output);else if(output===Object(output)){var newOptions=options;newOptions.doNotConverStringToNumber=!0,output=getOptions(output,newOptions)}}catch(err2){if(input.match(/^[A-Z][a-zA-Z0-9]+\(.*\)$/))try{var exp="new google.maps."+input;output=eval(exp)}catch(e){output=input}else if(input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/))try{var matches=input.match(/^([A-Z][a-zA-Z0-9]+)\.([A-Z]+)$/);output=google.maps[matches[1]][matches[2]]}catch(e){output=input}else if(input.match(/^[A-Z]+$/))try{var capitalizedKey=options.key.charAt(0).toUpperCase()+options.key.slice(1);options.key.match(/temperatureUnit|windSpeedUnit|labelColor/)?(capitalizedKey=capitalizedKey.replace(/s$/,""),output=google.maps.weather[capitalizedKey][input]):output=google.maps[capitalizedKey][input]}catch(e){output=input}else if(input.match(isoDateRE))try{output=new Date(input)}catch(e){output=input}else if(input.match(/^{/)&&options.scope)try{var expr=input.replace(/{{/,"").replace(/}}/g,"");output=options.scope.$eval(expr)}catch(err){output=input}else output=input}}if(("center"==options.key||"position"==options.key)&&output instanceof Array&&(output=new google.maps.LatLng(output[0],output[1])),"bounds"==options.key&&output instanceof Array&&(output=new google.maps.LatLngBounds(output[0],output[1])),"icons"==options.key&&output instanceof Array)for(var i=0;i<output.length;i++){var el=output[i];el.icon.path.match(/^[A-Z_]+$/)&&(el.icon.path=google.maps.SymbolPath[el.icon.path])}if("icon"==options.key&&output instanceof Object){(""+output.path).match(/^[A-Z_]+$/)&&(output.path=google.maps.SymbolPath[output.path]);for(var key in output){var arr=output[key];"anchor"==key||"origin"==key||"labelOrigin"==key?output[key]=new google.maps.Point(arr[0],arr[1]):("size"==key||"scaledSize"==key)&&(output[key]=new google.maps.Size(arr[0],arr[1]))}}return output},getAttrsToObserve=function(e){var t=[];if(!e.noWatcher)for(var n in e){var o=e[n];o&&o.match(/\{\{.*\}\}/)&&t.push(camelCaseFilter(n))}return t},filter=function(e){var t={};for(var n in e)n.match(/^\$/)||n.match(/^ng[A-Z]/)||(t[n]=e[n]);return t},getOptions=function(e,t){t=t||{};var n={};for(var o in e)if(e[o]||0===e[o]){if(o.match(/^on[A-Z]/))continue;if(o.match(/ControlOptions$/))continue;n[o]="string"!=typeof e[o]?e[o]:t.doNotConverStringToNumber&&e[o].match(/^[0-9]+$/)?e[o]:toOptionValue(e[o],{key:o,scope:t.scope})}return n},getEvents=function(e,t){var n={},o=function(e){return"_"+e.toLowerCase()},i=function(t){var n=t.match(/([^\(]+)\(([^\)]*)\)/),o=n[1],i=n[2].replace(/event[ ,]*/,""),a=$parse("["+i+"]");return function(t){function n(e,t){return e[t]}var i=a(e),r=o.split(".").reduce(n,e);r&&r.apply(this,[t].concat(i)),$timeout(function(){e.$apply()})}};for(var a in t)if(t[a]){if(!a.match(/^on[A-Z]/))continue;var r=a.replace(/^on/,"");r=r.charAt(0).toLowerCase()+r.slice(1),r=r.replace(/([A-Z])/g,o);var s=t[a];n[r]=new i(s)}return n},getControlOptions=function(e){var t={};if("object"!=typeof e)return!1;for(var n in e)if(e[n]){if(!n.match(/(.*)ControlOptions$/))continue;var o=e[n],i=o.replace(/'/g,'"');i=i.replace(/([^"]+)|("[^"]+")/g,function(e,t,n){return t?t.replace(/([a-zA-Z0-9]+?):/g,'"$1":'):n});try{var a=JSON.parse(i);for(var r in a)if(a[r]){var s=a[r];if("string"==typeof s?s=s.toUpperCase():"mapTypeIds"===r&&(s=s.map(function(e){return e.match(/^[A-Z]+$/)?google.maps.MapTypeId[e.toUpperCase()]:e})),"style"===r){var p=n.charAt(0).toUpperCase()+n.slice(1),c=p.replace(/Options$/,"")+"Style";a[r]=google.maps[c][s]}else a[r]="position"===r?google.maps.ControlPosition[s]:s}t[n]=a}catch(u){}}return t};return{filter:filter,getOptions:getOptions,getEvents:getEvents,getControlOptions:getControlOptions,toOptionValue:toOptionValue,getAttrsToObserve:getAttrsToObserve,orgAttributes:orgAttributes}};Attr2MapOptions.$inject=["$parse","$timeout","$log","NavigatorGeolocation","GeoCoder","camelCaseFilter","jsonizeFilter"],angular.module("ngMap").service("Attr2MapOptions",Attr2MapOptions)}(),function(){"use strict";var e,t=function(t){var n=e.defer(),o=new google.maps.Geocoder;return o.geocode(t,function(e,t){t==google.maps.GeocoderStatus.OK?n.resolve(e):n.reject(t)}),n.promise},n=function(n){return e=n,{geocode:t}};n.$inject=["$q"],angular.module("ngMap").service("GeoCoder",n)}(),function(){"use strict";var e,t=function(t){var n=e.defer();return navigator.geolocation?(void 0===t?t={timeout:5e3}:void 0===t.timeout&&(t.timeout=5e3),navigator.geolocation.getCurrentPosition(function(e){n.resolve(e)},function(e){n.reject(e)},t)):n.reject("Browser Geolocation service failed."),n.promise},n=function(n){return e=n,{getCurrentPosition:t}};n.$inject=["$q"],angular.module("ngMap").service("NavigatorGeolocation",n)}(),function(){"use strict";var e,t,n,o=[],i=function(n){var i=t.createElement("div");i.style.width="100%",i.style.height="100%",n.appendChild(i);var a=new e.google.maps.Map(i,{});return o.push(a),a},a=function(e,t){for(var n,i=0;i<o.length;i++){var a=o[i];if(a.id==t&&!a.inUse){var r=a.getDiv();e.appendChild(r),n=a;break}}return n},r=function(e){for(var t,n=0;n<o.length;n++){var i=o[n];if(!i.id&&!i.inUse){var a=i.getDiv();e.appendChild(a),t=i;break}}return t},s=function(e){var t=a(e,e.id)||r(e);return t?n(function(){google.maps.event.trigger(t,"idle")},100):t=i(e),t.inUse=!0,t},p=function(e){e.inUse=!1},c=function(){for(var e=0;e<o.length;e++)o[e]=null;o=[]},u=function(i,a,r){return t=i[0],e=a,n=r,{mapInstances:o,resetMapInstances:c,getMapInstance:s,returnMapInstance:p}};u.$inject=["$document","$window","$timeout"],angular.module("ngMap").factory("NgMapPool",u)}(),function(){"use strict";var e,t,n,o,i,a,r,s={},p=function(n,o){var i;return n.currentStyle?i=n.currentStyle[o]:e.getComputedStyle&&(i=t.defaultView.getComputedStyle(n,null).getPropertyValue(o)),i},c=function(e){var t=s[e||0];return t.map instanceof google.maps.Map?void 0:(t.initializeMap(),t.map)},u=function(t){function o(n){s[t]?i.resolve(s[t].map):n>a?i.reject("could not find map"):e.setTimeout(function(){o(n+100)},100)}t="object"==typeof t?t.id:t,t=t||0;var i=n.defer(),a=2e3;return o(0),i.promise},l=function(e){if(e.map){var t=Object.keys(s).length;s[e.map.id||t]=e}},g=function(e){var t=Object.keys(s).length-1,n=e.map.id||t;if(e.map){for(var o in e.eventListeners){var i=e.eventListeners[o];google.maps.event.removeListener(i)}e.map.controls&&e.map.controls.forEach(function(e){e.clear()})}e.map.heatmapLayers&&Object.keys(e.map.heatmapLayers).forEach(function(t){e.deleteObject("heatmapLayers",e.map.heatmapLayers[t])}),delete s[n]},d=function(e,t){var i=n.defer();return!e||e.match(/^current/i)?o.getCurrentPosition(t).then(function(e){var t=e.coords.latitude,n=e.coords.longitude,o=new google.maps.LatLng(t,n);i.resolve(o)},function(e){i.reject(e)}):a.geocode({address:e}).then(function(e){i.resolve(e[0].geometry.location)},function(e){i.reject(e)}),i.promise},m=function(e,t){return function(n){if(n){var o=r("set-"+e),a=i.toOptionValue(n,{key:e});t[o]&&(e.match(/center|position/)&&"string"==typeof a?d(a).then(function(e){t[o](e)}):t[o](a))}}},f=function(e){var t=e.getAttribute("default-style");"true"==t?(e.style.display="block",e.style.height="300px"):("block"!=p(e,"display")&&(e.style.display="block"),p(e,"height").match(/^(0|auto)/)&&(e.style.height="300px"))};angular.module("ngMap").provider("NgMap",function(){var s={};this.setDefaultOptions=function(e){s=e};var p=function(p,v,y,h,M,b,O){return e=p,t=v[0],n=y,o=h,i=M,a=b,r=O,{defaultOptions:s,addMap:l,deleteMap:g,getMap:u,initMap:c,setStyle:f,getGeoLocation:d,observeAndSet:m}};p.$inject=["$window","$document","$q","NavigatorGeolocation","Attr2MapOptions","GeoCoder","camelCaseFilter"],this.$get=p})}(),function(){"use strict";var e,t=function(t,n){n=n||t.getCenter();var o=e.defer(),i=new google.maps.StreetViewService;return i.getPanoramaByLocation(n||t.getCenter,100,function(e,t){t===google.maps.StreetViewStatus.OK?o.resolve(e.location.pano):o.resolve(!1)
    }),o.promise},n=function(e,t){var n=new google.maps.StreetViewPanorama(e.getDiv(),{enableCloseButton:!0});n.setPano(t)},o=function(o){return e=o,{getPanorama:t,setPanorama:n}};o.$inject=["$q"],angular.module("ngMap").service("StreetView",o)}(),"ngMap"});