!function(p){"use strict";p.HSCore.components.HSGoTo={_baseConfig:{},pageCollection:p(),init:function(t,i){if(this.collection=t&&p(t).length?p(t):p(),p(t).length)return this.config=i&&p.isPlainObject(i)?p.extend({},this._baseConfig,i):this._baseConfig,this.config.itemSelector=t,this.initGoTo(),this.pageCollection},initGoTo:function(){var r=this.pageCollection;this.collection.each(function(t,i){var o=p(i),s=o.data("target"),a=o.data("type"),e=o.data("show-effect"),n=o.data("hide-effect"),c=JSON.parse(i.getAttribute("data-position")),l=p(o.data("compensation")).outerHeight(),f=o.data("offset-top"),d=function(){return l?s?p(s).offset().top-l:0:s?p(s).offset().top:0};"static"==a?o.css({display:"inline-block"}):o.addClass("animated").css({display:"inline-block",position:a,opacity:0}),"fixed"!=a&&"absolute"!=a||o.css(c),o.on("click",function(t){t.preventDefault(),p("html, body").stop().animate({scrollTop:d()},800)}),o.data("offset-top")||o.hasClass("js-animation-was-fired")||"static"==a||o.offset().top<=p(window).height()&&(o.show(),setTimeout(function(){o.addClass("js-animation-was-fired "+e).css({opacity:""})})),"static"!=a&&(p(window).on("scroll",function(){if(o.data("offset-top"))p(window).scrollTop()>=f&&!o.hasClass("js-animation-was-fired")?(o.show(),setTimeout(function(){o.addClass("js-animation-was-fired "+e).css({opacity:""})})):p(window).scrollTop()<=f&&o.hasClass("js-animation-was-fired")&&(o.removeClass("js-animation-was-fired "+e),setTimeout(function(){o.addClass(n).css({opacity:0})},100),setTimeout(function(){o.removeClass(n).hide()},400));else{var t=o.offset().top;o.hasClass("js-animation-was-fired")||p(window).scrollTop()>=t-p(window).height()&&(o.show(),setTimeout(function(){o.addClass("js-animation-was-fired "+e).css({opacity:""})}))}}),p(window).trigger("scroll")),r=r.add(o)})}}}(jQuery);