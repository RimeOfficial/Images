define("lib/xhr",["jquery","nbd/trait/promise"],function(t,e){"use strict";return function(){var i=new e,n=t.ajax.apply(t,arguments);return i.resolve(n),i.thenable()}}),define("be/Controller/Dialog",["nbd/Controller/Entity","nbd/util/media"],function(t,e){"use strict";var i=t.extend({init:function(){this._super.apply(this,arguments),this.mediaView=this.mediaView.bind(this),e.on("all",this.mediaView)},destroy:function(){e.off(null,this.mediaView),this._view&&this._view.destroy(),this._model.destroy()},_initView:function(t,i){var n,a=e.getState();n="function"==typeof t?t:a.map(function(e){return t[e]}).filter(function(t){return!!t})[0],"function"==typeof n&&(this.View=this._view=new n(i),this._view.Controller=this._view._controller=this)},render:function(){return this._view&&this._view.render.apply(this._view,arguments)},mediaView:function(t,e){var i=this.constructor.VIEW_CLASS[t];i&&e&&this.requestView(i)},switchView:function(t){var e=this._view;return this._initView(t,this._model),e&&e.destroy()}});return i}),define("be/Controller/Dialog/Roulette",["jquery","be/Controller/Dialog","nbd/util/async"],function(t,e,i){"use strict";var n=e.extend({$context:null,setContext:function(t){this.$context&&this.$context.off("click"),this.$context=t.on("click",function(t){t.isDefaultPrevented()||t.originalEvent.data===this._view||this.toggle(t.delegateTarget)}.bind(this))},render:function(t){var e=this._view.render(document.body);return this._view.position(t),e},toggle:function(t){this._view.$view&&this._view.$view.length?(this._view.toggle(),this._view.position(t)):(this.render(t||this.$context),i(this._view.show.bind(this._view)))}});return n}),define("require/hgn!templates/dialog",["hogan"],function(t){function e(){return i.render.apply(i,arguments)}var i=new t.Template({code:function(t,e,i){var n=this;return n.b(i=i||""),n.b('<div class="popup '),n.b(n.v(n.f("dialogType",t,e,0))),n.s(n.f("classes",t,e,1),t,e,0,44,50,"{{ }}")&&(n.rs(t,e,function(t,e,i){i.b(" "),i.b(i.v(i.d(".",t,e,0)))}),t.pop()),n.s(n.f("buttons",t,e,1),t,e,1,0,0,"")||n.b(" no-buttons"),n.s(n.f("title",t,e,1),t,e,1,0,0,"")||n.b(" no-title"),n.s(n.f("fullBleed",t,e,1),t,e,0,140,151,"{{ }}")&&(n.rs(t,e,function(t,e,i){i.b(" full-bleed")}),t.pop()),n.b('">'),n.b("\n"+i),n.b('  <div class="popup-inner-wrap">'),n.b("\n"),n.b("\n"+i),n.s(n.f("toolbar",t,e,1),t,e,0,218,587,"{{ }}")&&(n.rs(t,e,function(t,e,n){n.b('    <div class="toolbar">'),n.b("\n"+i),n.b('      <div class="header">'),n.b(n.t(n.f("title",t,e,0))),n.b("</div>"),n.b("\n"+i),n.s(n.f("hideClose",t,e,1),t,e,1,0,0,"")||(n.b('        <a class="header-action close right js-close'),n.s(n.f("layover",t,e,1),t,e,1,0,0,"")||n.b(" popup-close"),n.b('">'),n.b("\n"+i),n.b('          <span class="nav-icon-close nav-icon"></span>'),n.b("\n"+i),n.b("        </a>"),n.b("\n"+i)),n.s(n.f("layover",t,e,1),t,e,0,509,559,"{{ }}")&&(n.rs(t,e,function(t,e,i){i.s(i.f("button",t,e,1),t,e,0,529,541,"{{ }}")&&(i.rs(t,e,function(t,e,i){i.b(i.rp("<button0",t,e,""))}),t.pop())}),t.pop()),n.b("    </div>"),n.b("\n"+i)}),t.pop()),n.b("\n"+i),n.b('    <div class="popup-content'),n.s(n.f("toolbar",t,e,1),t,e,0,642,654,"{{ }}")&&(n.rs(t,e,function(t,e,i){i.b(" has-toolbar")}),t.pop()),n.b('">'),n.b("\n"+i),n.b(n.rp("<content1",t,e,"      ")),n.s(n.f("layover",t,e,1),t,e,1,0,0,"")||(n.b("    </div>"),n.b("\n"+i)),n.b("\n"+i),n.b('      <div class="popup-buttons'),n.s(n.f("buttons",t,e,1),t,e,1,0,0,"")||n.b(" hide"),n.b('">'),n.b("\n"+i),n.s(n.f("buttons",t,e,1),t,e,0,818,830,"{{ }}")&&(n.rs(t,e,function(t,e,i){i.b(i.rp("<button2",t,e,""))}),t.pop()),n.b("      </div>"),n.b("\n"),n.b("\n"+i),n.s(n.f("layover",t,e,1),t,e,0,873,889,"{{ }}")&&(n.rs(t,e,function(t,e,n){n.b("    </div>"),n.b("\n"+i)}),t.pop()),n.b("\n"+i),n.b("  </div> <!-- /.popup-inner -->"),n.b("\n"),n.b("\n"+i),n.b("</div>"),n.b("\n"),n.b("\n"+i),n.s(n.f("blocking",t,e,1),t,e,0,957,991,"{{ }}")&&(n.rs(t,e,function(t,e,n){n.b('<div class="blocking-div"></div>'),n.b("\n"+i)}),t.pop()),n.fl()},partials:{"<button0":{name:"button",partials:{},subs:{}},"<content1":{name:"content",partials:{},subs:{}},"<button2":{name:"button",partials:{},subs:{}}},subs:{}},"",t);return e.template=i,e}),define("require/hgn!templates/button",["hogan"],function(t){function e(){return i.render.apply(i,arguments)}var i=new t.Template({code:function(t,e,i){var n=this;return n.b(i=i||""),n.b('  <div class="form-item form-item-a'),n.s(n.f("containerClasses",t,e,1),t,e,0,56,62,"{{ }}")&&(n.rs(t,e,function(t,e,i){i.b(" "),i.b(i.v(i.d(".",t,e,0)))}),t.pop()),n.b('">'),n.b("\n"+i),n.b('    <a class="form-button'),n.s(n.f("classes",t,e,1),t,e,0,123,129,"{{ }}")&&(n.rs(t,e,function(t,e,i){i.b(" "),i.b(i.v(i.d(".",t,e,0)))}),t.pop()),n.s(n.f("classes",t,e,1),t,e,1,0,0,"")||n.b(" form-button-default"),n.b('"'),n.b("\n"+i),n.b("      "),n.s(n.f("href",t,e,1),t,e,0,202,218,"{{ }}")&&(n.rs(t,e,function(t,e,i){i.b(' href="'),i.b(i.v(i.f("href",t,e,0))),i.b('"')}),t.pop()),n.b(' unselectable="on"'),n.b("\n"+i),n.b("      tabindex="),n.s(n.f("tabindex",t,e,1),t,e,0,274,288,"{{ }}")&&(n.rs(t,e,function(t,e,i){i.b('"'),i.b(i.v(i.f("tabindex",t,e,0))),i.b('"')}),t.pop()),n.b("\n"+i),n.b("      "),n.s(n.f("tabindex",t,e,1),t,e,1,0,0,"")||n.b('"0"'),n.b(">"),n.b(n.v(n.f("label",t,e,0))),n.b("</a>"),n.b("\n"+i),n.b("  </div>"),n.b("\n"),n.fl()},partials:{},subs:{}},"",t);return e.template=i,e}),define("be/View/Dialog",["jquery","nbd/View/Entity","nbd/util/extend","hgn!templates/dialog","hgn!templates/button"],function(t,e,i,n,a){"use strict";var o=e.extend({mustache:{},template:function(e){return t(n(e,i({content:this.mustache.template,button:a.template},this.partials)))},rendered:function(){this.$view.on("click",".js-close, .close, .form-button-close, .form-button-cancel",this.hide.bind(this)).find(".form-button-disabled").on("click",!1)},position:function(){},show:function(){return this.trigger("show",this.$view)},hide:function(){return this.trigger("hide",this.$view)},toggle:function(){var t=this.$view.is(":visible");return this[t?"hide":"show"]()}});return o}),define("be/View/Dialog/Layover",["jquery","be/View/Dialog"],function(t,e){"use strict";var i=e.extend({destroy:function(){this.hide(),this._super()},template:function(e){return this._super(t.extend({dialogType:"layover",layover:!0,toolbar:!0},e))},rendered:function(){this._super(),this.show()},show:function(){return this.$view?(this.scrollTop=this.scrollTop||t(window).scrollTop(),t("#site-content").hide(),t("html").addClass("overflow-hidden"),this.$view.show(),this._super()):void 0},hide:function(){return this.$view?(t("#site-content").show(),t("html").removeClass("overflow-hidden"),window.scrollTo(0,this.scrollTop),delete this.scrollTop,this.$view.hide(),this._super()):void 0}});return i}),define("lib/infinitescroll",["jquery"],function(t){"use strict";function e(t){var e,i;return t.is(a)?(e=window.innerHeight||a.height(),i=o.height()-e-a.scrollTop()):(e=t.prop("clientHeight"),i=t.prop("scrollHeight")-e-t.scrollTop()),i/e}function i(i){var n="window"===i?a:t(i);return function(){var t,a=e(n);for(t in s[i])a<Number(t)&&s[i][t].fire()}}function n(e,n,o){o=o||"window",e=Number(e).toString();var c,l="window"===o?a:t(o);s[o]||(s[o]={},r[o]=i(o),l.on("scroll",r[o])),c=s[o][e],c||(c=s[o][e]=new t.Callbacks),c.add(n),r[o]()}var a=t(window),o=t(document),r={},s={};return n.remove=function(e,i){i=i||"window";{var n,o;"window"===i?a:t(i)}for(n in s[i])o=s[i][n],o.remove(e)},n.check=function(t){t=t||"window",r[t]()},n}),define("be/spinner",["jquery","vendor/spin"],function(t,e){"use strict";var i={lines:30,length:0,width:2,radius:9,corners:0,speed:2,trail:100,hwaccel:!0,className:"spinner",zIndex:2e9,top:"19px",left:"20px",opacity:"0"};return{init:function(e){var i=t(".js-spin",e);return i.length||(i=this._generate()),i.toArray().map(this.create),i},show:function(){this._$default||this._generate(),this._$default.appendTo(document.body)},hide:function(){this._$default&&this._$default.detach()},_generate:function(){return this._$default=t("<div>",{"class":"js-spin be-spinner"}),this.create(this._$default[0]),this._$default},create:function(n,a){var o=new e(t.extend({},i,a));return n&&o.spin(n),o}}}),define("require/hgn!templates/html",["hogan"],function(t){function e(){return i.render.apply(i,arguments)}var i=new t.Template({code:function(t,e,i){var n=this;return n.b(i=i||""),n.b(n.t(n.f("html",t,e,0))),n.b("\n"),n.fl()},partials:{},subs:{}},"",t);return e.template=i,e}),define("require/hgn!templates/notificationDialog",["hogan"],function(t){function e(){return i.render.apply(i,arguments)}var i=new t.Template({code:function(t,e,i){var n=this;return n.b(i=i||""),n.b('<h2 class="notifications-title hide-phone">Your Notifications</h2>'),n.b("\n"+i),n.b("<div class='activity-container'>"),n.b("\n"+i),n.b("  <div class='js-spin loading-spinner cfix'></div>"),n.b("\n"+i),n.b("</div>"),n.fl()},partials:{},subs:{}},"",t);return e.template=i,e}),define("require/hgn!templates/notificationEmpty",["hogan"],function(t){function e(){return i.render.apply(i,arguments)}var i=new t.Template({code:function(t,e,i){var n=this;return n.b(i=i||""),n.b('<div class="notifications-empty">You will receive notifications when people appreciate, comment on or collect your work.</div>'),n.b("\n"),n.fl()},partials:{},subs:{}},"",t);return e.template=i,e}),define("be/trait/notification",["jquery","nbd/util/pipe","lib/infinitescroll","be/spinner","hgn!templates/html","hgn!templates/notificationDialog","hgn!templates/notificationEmpty"],function(t,e,i,n,a,o,r){"use strict";return{mustache:a,templateData:function(){return{title:"Notifications",classes:["notifications","timeline-container"],html:o}},selector:".popup-content .activity-container",rendered:function(){this._super(),this.loading=n.init(this.$view),this.loading.hide(),this.$content=this.$view.find(".activity-container"),this.listenTo(this._model,"entries",this.draw),this.draw(this._model.get("entries")),i(.5,function(){this._controller.more()}.bind(this),this.selector)},draw:function(t){t&&(t.forEach(function(t){t.render(this.$content)}.bind(this)),i.check(this.selector),this.empty(!t.length))},empty:function(e){var i=!e;this.$empty=this.$empty||t(r()),i?this.$empty.remove():this.$content.append(this.$empty)}}}),define("be/View/Dialog/Layover/Notification",["be/View/Dialog/Layover","be/trait/notification"],function(t,e){"use strict";var i=t.extend(e);return i}),define("be/View/Dialog/Menu",["jquery","be/View/Dialog","nbd/util/async","jquery/ui/position"],function(t,e,i){"use strict";var n=e.extend({init:function(){this._super.apply(this,arguments),this.dismiss=function(t){t.originalEvent.data!==this&&(this.hide(),t.preventDefault())}.bind(this)},destroy:function(){this._unbind(),this._super.apply(this,arguments)},template:function(e){return this._super(t.extend({dialogType:"menu",blocking:!1,hide_toolbar:!0},e))},rendered:function(){this._super();var t=this;this.$view.on("click touchend",function(e){e.originalEvent.data=t})},_bind:function(){t("html").on("click touchend",this.dismiss)},_unbind:function(){t("html").off("click touchend",this.dismiss)},position:function(e,i){if(this.$view){e&&(this._lastContext=e);var n={my:"left top",at:"left bottom+10",of:this._lastContext,collision:"flipfit"};this.$view.position(t.extend(n,i))}},show:function(){return this.$view?(i(this._bind.bind(this)),this.$view.addClass("shown"),this._super()):void 0},hide:function(){return this.$view?(this._unbind(),this.$view.removeClass("shown"),this._super()):void 0},toggle:function(){return this[this.$view.hasClass("shown")?"hide":"show"]()}});return n}),define("be/View/Dialog/Menu/Notification",["nbd/util/extend","be/View/Dialog/Menu","be/trait/notification"],function(t,e,i){"use strict";var n=e.extend(t({position:function(t){return this._super(t,{my:"left-107 top-10",at:"center bottom+5",collision:"none"})}},i));return n}),define("lib/picturefill",["jquery"],function(t){"use strict";var e=window.matchMedia||window.msMatchMedia,i=function(){var i=t(this),n=i.find("div[data-src]");return n.length?(e&&(n=n.first().add(n.filter(function(){var i=t(this).data("media");return i&&e(i).matches})).last()),i.attr("data-rendered","rendered"),t("<img>",{alt:i.data("alt"),src:n.data("src"),"class":n.data("class"),title:n.data("title"),"data-pin-nopin":"pin"}).appendTo(i),void 0):(i.find("img").remove(),void 0)};return t.fn.picturefill=function(){return this.find("div[data-picture]:not([data-rendered])").each(i),this}}),define("lib/truncate",[],function(){"use strict";return function(t,e){if(t.length&&document.createRange){var i,n=document.createRange();if(n.getBoundingClientRect&&(i=/[^\s]/.exec(t.textContent))){n.setStartBefore(t),n.setEnd(t,i.index+1);var a=n.getBoundingClientRect().height,o=a*(e+.5),r=t.length,s=r,c=-1;if(n.setEndAfter(t),a=n.getBoundingClientRect().height,o>a)return n.detach(),void 0;for(;s;)s=~~(s/2),r+=c*s,n.setEnd(t,r),a=n.getBoundingClientRect().height,c*(a-o)>0&&(c=-c);var l=t.textContent.substr(0,r);l=l.replace(/\s+$/,"");do t.textContent=l+"…",n.setEndAfter(t),a=n.getBoundingClientRect().height,l=l.substr(0,--r);while(a>o);n.detach()}}}}),define("require/hgn!templates/notifications/appreciation",["hogan"],function(t){function e(){return i.render.apply(i,arguments)}var i=new t.Template({code:function(t,e,i){var n=this;return n.b(i=i||""),n.b('<div class="msg extra-padding">'),n.b("\n"+i),n.b('  <a href="'),n.b(n.v(n.d("actor.url",t,e,0))),n.b('" class="js-mini-profile" data-id="'),n.b(n.v(n.d("actor.id",t,e,0))),n.b('">'),n.b(n.v(n.d("actor.display_name",t,e,0))),n.b("</a> appreciated your project"),n.b("\n"+i),n.b("</div>"),n.b("\n"+i),n.b('<a href="'),n.b(n.v(n.d("project.url",t,e,0))),n.b('" class="graphic">'),n.b("\n"+i),n.b('  <div class="activity-block project-appreciated">'),n.b("\n"+i),n.b('    <div data-picture="" data-alt="'),n.b(n.v(n.d("project.name",t,e,0))),n.b('">'),n.b("\n"+i),n.b('    <div alt="'),n.b(n.v(n.d("project.name",t,e,0))),n.b('" data-src="'),n.b(n.v(n.d("project.covers.115",t,e,0))),n.b('" data-class="project_image" data-title="'),n.b(n.v(n.d("project.name",t,e,0))),n.b('"></div>'),n.b("\n"+i),n.b('    <div alt="'),n.b(n.v(n.d("project.name",t,e,0))),n.b('" data-src="'),n.b(n.v(n.d("project.covers.202",t,e,0))),n.b('" data-class="project_image project_image-2x" data-title="'),n.b(n.v(n.d("project.name",t,e,0))),n.b('" data-media="(-webkit-min-device-pixel-ratio: 1.3),'),n.b("\n"+i),n.b("      (min--moz-device-pixel-ratio: 1.3),"),n.b("\n"+i),n.b("      (-o-min-device-pixel-ratio: 4/3),"),n.b("\n"+i),n.b("      (min-device-pixel-ratio: 1.3),"),n.b("\n"+i),n.b('      (min-resolution: 1.3dppx)"></div>'),n.b("\n"+i),n.b("    </div>"),n.b("\n"+i),n.b('    <noscript><img alt="'),n.b(n.v(n.d("project.name",t,e,0))),n.b('" title="'),n.b(n.v(n.d("project.name",t,e,0))),n.b('" src="'),n.b(n.v(n.d("project.covers.115",t,e,0))),n.b('" class="project_image" /></noscript>'),n.b("\n"+i),n.b("  </div>"),n.b("\n"+i),n.b("</a>"),n.b("\n"),n.fl()},partials:{},subs:{}},"",t);return e.template=i,e}),define("require/hgn!templates/notifications/collection",["hogan"],function(t){function e(){return i.render.apply(i,arguments)}var i=new t.Template({code:function(t,e,i){var n=this;return n.b(i=i||""),n.b('<div class="msg">'),n.b("\n"+i),n.b('  <span class="js-mini-profile" data-id="'),n.b(n.v(n.d("actor.id",t,e,0))),n.b('">'),n.b(n.v(n.d("actor.display_name",t,e,0))),n.b('</span> followed your collection "<a href="'),n.b(n.v(n.d("collection.url",t,e,0))),n.b('">'),n.b(n.v(n.d("collection.title",t,e,0))),n.b('</a>"'),n.b("\n"+i),n.b("</div>"),n.b("\n"),n.fl()},partials:{},subs:{}},"",t);return e.template=i,e}),define("require/hgn!templates/notifications/comment",["hogan"],function(t){function e(){return i.render.apply(i,arguments)}var i=new t.Template({code:function(t,e,i){var n=this;return n.b(i=i||""),n.b('<a href="'),n.b(n.v(n.f("url",t,e,0))),n.b('#comments" class="graphic">'),n.b("\n"+i),n.b('  <div data-picture="" data-alt="'),n.b(n.v(n.f("name",t,e,0))),n.b('">'),n.b("\n"+i),n.b('    <div alt="'),n.b(n.v(n.f("name",t,e,0))),n.b('" data-src="'),n.b(n.v(n.d("covers.115",t,e,0))),n.b('" data-class="comment-image" data-title="'),n.b(n.v(n.f("name",t,e,0))),n.b('"></div>'),n.b("\n"+i),n.b('    <div alt="'),n.b(n.v(n.f("name",t,e,0))),n.b('" data-src="'),n.b(n.v(n.d("covers.202",t,e,0))),n.b('" data-class="comment-image comment-image-2x" data-title="'),n.b(n.v(n.f("name",t,e,0))),n.b('" data-media="(-webkit-min-device-pixel-ratio: 1.3),'),n.b("\n"+i),n.b("        (min--moz-device-pixel-ratio: 1.3),"),n.b("\n"+i),n.b("        (-o-min-device-pixel-ratio: 4/3),"),n.b("\n"+i),n.b("        (min-device-pixel-ratio: 1.3),"),n.b("\n"+i),n.b('        (min-resolution: 1.3dppx)"></div>'),n.b("\n"+i),n.b("  </div>"),n.b("\n"+i),n.b('  <noscript><img alt="'),n.b(n.v(n.f("name",t,e,0))),n.b('" title="'),n.b(n.v(n.f("name",t,e,0))),n.b('" src="'),n.b(n.v(n.d("covers.115",t,e,0))),n.b('" class="comment-image" /></noscript>'),n.b("\n"),n.b("\n"+i),n.b('  <div class="comment">'),n.b("\n"+i),n.b('    <strong class="actor js-mini-profile" data-id="'),n.b(n.v(n.d("actor.id",t,e,0))),n.b('">'),n.b(n.v(n.d("actor.display_name",t,e,0))),n.b(':</strong> <span class="comment-text">'),n.b(n.v(n.d("comment.comment",t,e,0))),n.b("</span>"),n.b("\n"+i),n.b("  </div>"),n.b("\n"+i),n.b("</a>"),n.b("\n"),n.fl()},partials:{},subs:{}},"",t);return e.template=i,e}),define("require/hgn!templates/notifications/wip_comment",["hogan"],function(t){function e(){return i.render.apply(i,arguments)}var i=new t.Template({code:function(t,e,i){var n=this;return n.b(i=i||""),n.b('<a href="'),n.b(n.v(n.f("url",t,e,0))),n.b('" class="graphic">'),n.b("\n"+i),n.b('  <div data-picture="" data-alt="'),n.b(n.v(n.d("wip.title",t,e,0))),n.b('">'),n.b("\n"+i),n.b('    <div alt="'),n.b(n.v(n.d("wip.title",t,e,0))),n.b('" data-src="'),n.b(n.v(n.d("revision.images.thumbnail_sm.url",t,e,0))),n.b('" data-class="comment-image" data-title="'),n.b(n.v(n.d("wip.title",t,e,0))),n.b('"></div>'),n.b("\n"+i),n.b('    <div alt="'),n.b(n.v(n.d("wip.title",t,e,0))),n.b('" data-src="'),n.b(n.v(n.d("revision.images.thumbnail.url",t,e,0))),n.b('" data-class="comment-image comment-image-2x" data-title="'),n.b(n.v(n.d("wip.title",t,e,0))),n.b('" data-media="(-webkit-min-device-pixel-ratio: 1.3),'),n.b("\n"+i),n.b("        (min--moz-device-pixel-ratio: 1.3),"),n.b("\n"+i),n.b("        (-o-min-device-pixel-ratio: 4/3),"),n.b("\n"+i),n.b("        (min-device-pixel-ratio: 1.3),"),n.b("\n"+i),n.b('        (min-resolution: 1.3dppx)"></div>'),n.b("\n"+i),n.b("  </div>"),n.b("\n"+i),n.b('  <noscript><img alt="'),n.b(n.v(n.d("wip.title",t,e,0))),n.b('" title="'),n.b(n.v(n.d("wip.title",t,e,0))),n.b('" src="'),n.b(n.v(n.d("revision.images.thumbnail_sm.url",t,e,0))),n.b('" class="comment-image" /></noscript>'),n.b("\n"),n.b("\n"+i),n.b('  <div class="comment wip-notification-comment">'),n.b("\n"+i),n.b('    <strong class="actor js-mini-profile" data-id="'),n.b(n.v(n.d("actor.id",t,e,0))),n.b('">'),n.b(n.v(n.d("actor.display_name",t,e,0))),n.b(': </strong><span class="comment-text">'),n.b(n.v(n.d("comment.comment",t,e,0))),n.b("</span>"),n.b("\n"+i),n.b("  </div>"),n.b("\n"+i),n.b("</a>"),n.b("\n"),n.fl()},partials:{},subs:{}},"",t);return e.template=i,e}),define("require/hgn!templates/notifications/comment_stub",["hogan"],function(t){function e(){return i.render.apply(i,arguments)}var i=new t.Template({code:function(t,e,i){var n=this;return n.b(i=i||""),n.b('<div class="graphic">'),n.b("\n"+i),n.b('  <div class="project-comment-wrap">'),n.b("\n"+i),n.b('    <div class="activity-block project-comment">'),n.b("\n"+i),n.s(n.f("project",t,e,1),t,e,0,126,138,"{{ }}")&&(n.rs(t,e,function(t,e,i){i.b(i.rp("<comment0",t,e,""))}),t.pop()),n.s(n.f("revision",t,e,1),t,e,0,170,186,"{{ }}")&&(n.rs(t,e,function(t,e,i){i.b(i.rp("<wip_comment1",t,e,""))}),t.pop()),n.b("    </div>"),n.b("\n"+i),n.b("  </div>"),n.b("\n"+i),n.b("</div>"),n.fl()},partials:{"<comment0":{name:"comment",partials:{},subs:{}},"<wip_comment1":{name:"wip_comment",partials:{},subs:{}}},subs:{}},"",t);return e.template=i,e}),define("require/hgn!templates/notifications/followed",["hogan"],function(t){function e(){return i.render.apply(i,arguments)}var i=new t.Template({code:function(t,e,i){var n=this;return n.b(i=i||""),n.b('<div class="msg">'),n.b("\n"+i),n.b('  <a href="'),n.b(n.v(n.d("actor.url",t,e,0))),n.b('" class="js-mini-profile" data-id="'),n.b(n.v(n.d("actor.id",t,e,0))),n.b('">'),n.b(n.v(n.d("actor.display_name",t,e,0))),n.b("</a> followed your work"),n.b("\n"+i),n.b("</div>"),n.b("\n"),n.fl()},partials:{},subs:{}},"",t);return e.template=i,e}),define("require/hgn!templates/notifications/mention",["hogan"],function(t){function e(){return i.render.apply(i,arguments)}var i=new t.Template({code:function(t,e,i){var n=this;return n.b(i=i||""),n.b('<div class="msg extra-padding">'),n.b("\n"+i),n.b('  <a href="'),n.b(n.v(n.d("actor.url",t,e,0))),n.b('">'),n.b(n.v(n.d("actor.display_name",t,e,0))),n.b("</a> mentioned you in a comment"),n.b("\n"+i),n.b("</div>"),n.b("\n"+i),n.b('<div class="graphic">'),n.b("\n"+i),n.b('  <div class="mention-wrap">'),n.b("\n"+i),n.b('    <div class="activity-block mention">'),n.b("\n"+i),n.s(n.f("project",t,e,1),t,e,0,229,241,"{{ }}")&&(n.rs(t,e,function(t,e,i){i.b(i.rp("<comment0",t,e,""))}),t.pop()),n.s(n.f("revision",t,e,1),t,e,0,273,289,"{{ }}")&&(n.rs(t,e,function(t,e,i){i.b(i.rp("<wip_comment1",t,e,""))}),t.pop()),n.b("    </div>"),n.b("\n"+i),n.b("  </div>"),n.b("\n"+i),n.b("</div>"),n.fl()},partials:{"<comment0":{name:"comment",partials:{},subs:{}},"<wip_comment1":{name:"wip_comment",partials:{},subs:{}}},subs:{}},"",t);return e.template=i,e}),define("require/hgn!templates/notifications/saved",["hogan"],function(t){function e(){return i.render.apply(i,arguments)}var i=new t.Template({code:function(t,e,i){var n=this;return n.b(i=i||""),n.b('<div class="msg extra-padding">'),n.b("\n"+i),n.b('  <a href="'),n.b(n.v(n.d("actor.url",t,e,0))),n.b('" class="js-mini-profile" data-id="'),n.b(n.v(n.d("actor.id",t,e,0))),n.b('">'),n.b(n.v(n.d("actor.display_name",t,e,0))),n.b("</a> saved your project"),n.b("\n"+i),n.b("</div>"),n.b("\n"+i),n.b('<a href="'),n.b(n.v(n.d("collection.url",t,e,0))),n.b('" class="graphic">'),n.b("\n"+i),n.b('  <div class="activity-block project-collection">'),n.b("\n"),n.b("\n"+i),n.s(n.d("collection.latest_projects",t,e,1),t,e,0,290,986,"{{ }}")&&(n.rs(t,e,function(t,e,n){n.b('    <div class="collection-project-image-wrap" data-picture="" data-alt="'),n.b(n.v(n.d("collection.title",t,e,0))),n.b('">'),n.b("\n"+i),n.b('    <div alt="'),n.b(n.v(n.f("name",t,e,0))),n.b('" data-src="'),n.b(n.v(n.d("covers.115",t,e,0))),n.b('" data-class="collection-project-image" data-title="'),n.b(n.v(n.f("name",t,e,0))),n.b('"></div>'),n.b("\n"+i),n.b('    <div alt="'),n.b(n.v(n.f("name",t,e,0))),n.b('" data-src="'),n.b(n.v(n.d("covers.202",t,e,0))),n.b('" data-class="collection-project-image collection-project-image-2x" data-title="'),n.b(n.v(n.f("name",t,e,0))),n.b('" data-media="(-webkit-min-device-pixel-ratio: 1.3),'),n.b("\n"+i),n.b("      (min--moz-device-pixel-ratio: 1.3),"),n.b("\n"+i),n.b("      (-o-min-device-pixel-ratio: 4/3),"),n.b("\n"+i),n.b("      (min-device-pixel-ratio: 1.3),"),n.b("\n"+i),n.b('      (min-resolution: 1.3dppx)"></div>'),n.b("\n"+i),n.b("    </div>"),n.b("\n"+i),n.b('    <noscript><img alt="'),n.b(n.v(n.f("name",t,e,0))),n.b('" title="'),n.b(n.v(n.f("name",t,e,0))),n.b('" src="'),n.b(n.v(n.d("covers.115",t,e,0))),n.b('" class="collection-project-image" /></noscript>'),n.b("\n"+i)}),t.pop()),n.b('    <div class="collection-title">'),n.b("\n"+i),n.b('      <span class="collection-title-text"><div class="be-font-inline collection-icon">N</div>'),n.b(n.v(n.d("collection.title",t,e,0))),n.b("</span>"),n.b("\n"+i),n.b("    </div>"),n.b("\n"+i),n.b("  </div>"),n.b("\n"+i),n.b("</a>"),n.b("\n"),n.fl()},partials:{},subs:{}},"",t);return e.template=i,e}),define("require/hgn!templates/notifications/social",["hogan"],function(t){function e(){return i.render.apply(i,arguments)}var i=new t.Template({code:function(t,e,i){var n=this;return n.b(i=i||""),n.b('<div class="msg">Your '),n.b(n.v(n.f("app",t,e,0))),n.b(' friend <a class="js-mini-profile" data-id="'),n.b(n.v(n.d("actor.id",t,e,0))),n.b('" href="'),n.b(n.v(n.d("actor.url",t,e,0))),n.b('">'),n.b(n.v(n.d("actor.display_name",t,e,0))),n.b("</a> joined Behance</div>"),n.b("\n"),n.fl()},partials:{},subs:{}},"",t);return e.template=i,e}),define("be/trait/notificationPartial",["hgn!templates/notifications/appreciation","hgn!templates/notifications/collection","hgn!templates/notifications/comment","hgn!templates/notifications/wip_comment","hgn!templates/notifications/comment_stub","hgn!templates/notifications/followed","hgn!templates/notifications/mention","hgn!templates/notifications/saved","hgn!templates/notifications/social"],function(t,e,i,n,a,o,r,s,c){"use strict";var l={appreciate:t.template,followcollection:e.template,projectcomment:a.template,wipcomment:a.template,followuser:o.template,projectaddedtocollection:s.template,socialfriendjoined:c.template,usermentionprojectcomment:r.template,usermentionwiprevisioncomment:r.template};return{generatePartials:function(t){return{innard:l[t.action_key],comment:i.template,wip_comment:n.template}}}}),define("require/hgn!templates/notification",["hogan"],function(t){function e(){return i.render.apply(i,arguments)}var i=new t.Template({code:function(t,e,i){var n=this;return n.b(i=i||""),n.b('<div class="notification-group'),n.s(n.f("read_on",t,e,1),t,e,1,0,0,"")||n.b(" unread"),n.b('">'),n.b("\n"+i),n.b('  <div class="notification-container">'),n.b("\n"+i),n.s(n.f("data",t,e,1),t,e,0,114,1058,"{{ }}")&&(n.rs(t,e,function(t,e,n){n.b('    <a href="'),n.b(n.v(n.d("actor.url",t,e,0))),n.b('" class="avatar js-mini-profile" data-id="'),n.b(n.v(n.d("actor.id",t,e,0))),n.b('">'),n.b("\n"+i),n.b('      <div data-picture="" data-alt="'),n.b(n.v(n.d("actor.display_name",t,e,0))),n.b('">'),n.b("\n"+i),n.b('        <div alt="'),n.b(n.v(n.d("actor.display_name",t,e,0))),n.b('" data-src="'),n.b(n.v(n.d("actor.images.50",t,e,0))),n.b('" data-class="avatar-image" data-title="'),n.b(n.v(n.d("actor.display_name",t,e,0))),n.b('"></div>'),n.b("\n"+i),n.b('        <div alt="'),n.b(n.v(n.d("actor.display_name",t,e,0))),n.b('" data-src="'),n.b(n.v(n.d("actor.images.115",t,e,0))),n.b('" data-class="avatar-image avatar-image-2x" data-title="'),n.b(n.v(n.d("actor.display_name",t,e,0))),n.b('" data-media="(-webkit-min-device-pixel-ratio: 1.3),'),n.b("\n"+i),n.b("          (min--moz-device-pixel-ratio: 1.3),"),n.b("\n"+i),n.b("          (-o-min-device-pixel-ratio: 4/3),"),n.b("\n"+i),n.b("          (min-device-pixel-ratio: 1.3),"),n.b("\n"+i),n.b('          (min-resolution: 1.3dppx)"></div>'),n.b("\n"+i),n.b("      </div>"),n.b("\n"+i),n.b('      <noscript><img alt="'),n.b(n.v(n.d("actor.display_name",t,e,0))),n.b('" title="'),n.b(n.v(n.d("actor.display_name",t,e,0))),n.b('" src="'),n.b(n.v(n.d("actor.images.50",t,e,0))),n.b('" class="avatar-image" /></noscript>'),n.b("\n"+i),n.b("    </a>"),n.b("\n"+i),n.b('    <div class="detail beside-avatar">'),n.b("\n"+i),n.b(n.rp("<innard0",t,e,"      ")),n.b('      <div class="time">'),n.b(n.v(n.f("time_ago",t,e,0))),n.b("</div>"),n.b("\n"+i),n.b("    </div>"),n.b("\n"+i)}),t.pop()),n.b("  </div>"),n.b("\n"+i),n.b("</div>"),n.b("\n"),n.fl()},partials:{"<innard0":{name:"innard",partials:{},subs:{}}},subs:{}},"",t);return e.template=i,e}),define("be/View/Notification",["jquery","moment","nbd/View/Entity","lib/picturefill","lib/truncate","be/trait/notificationPartial","hgn!templates/notification"],function(t,e,i,n,a,o,r){"use strict";var s=i.extend({template:function(e){return t(r(e,this.generatePartials(e)))},templateData:function(){var t=this._super();return t.time_ago=function(){return e.unix(t.created_on).fromNow()},t},rendered:function(){this.$view.picturefill().find(".comment-text").contents().toArray().forEach(function(t){a(t,4)})},update:function(){if(this.$view){var t=this.templateData().time_ago();this.$view.removeClass("unread").find(".time").text(t)}}}).mixin(o);return s}),define("be/Controller/Notification",["nbd/Controller/Entity","be/View/Notification"],function(t,e){"use strict";var i=t.extend({update:function(){this._view.update()}},{VIEW_CLASS:e});return i}),define("require/hgn!templates/notificationGroup",["hogan"],function(t){function e(){return i.render.apply(i,arguments)}var i=new t.Template({code:function(t,e,i){var n=this;return n.b(i=i||""),n.b('<div class="notification-group">'),n.b("\n"+i),n.b('  <div class="js-context"></div>'),n.b("\n"+i),n.b('  <div class="js-more notification-group-more">+ <span class="count">0</span> More Updates</div>'),n.b("\n"+i),n.b("</div>"),n.b("\n"),n.fl()},partials:{},subs:{}},"",t);return e.template=i,e}),define("be/View/NotificationGroup",["jquery","nbd/View/Entity","nbd/util/async","nbd/util/pipe","hgn!templates/notificationGroup"],function(t,e,i,n,a){"use strict";var o=e.extend({template:n(a,t),draw:function(t){var e,n=this._model.get("entries");n&&n.length&&(this._iterator=this._iterator||0,n=n.slice(this._iterator,+t?this._iterator+=t:void 0),e=this.$view.find(".js-context"),n.forEach(function(t){t.render(e)}),this._iterator||i(function(){this._iterator=0}.bind(this)))},rendered:function(){this.draw(3);var e=this._model.get("entries").length-(this._iterator||0);e?this.$view.on("click",".js-more",function(){t(this).hide()}).one("click",".js-more",this.draw.bind(this)).find(".count").text(e):this.$view.find(".js-more").hide()}});return o}),define("be/Controller/NotificationGroup",["nbd/Controller/Entity","be/View/NotificationGroup"],function(t,e){"use strict";var i=t.extend({add:function(t){var e=this._model.get("entries")||[];e.push(t),this._model.set("entries",e)},update:function(){var t=this._model.get("entries")||[];t.forEach(function(t){t.update()})}},{VIEW_CLASS:e});return i}),define("be/Controller/Dialog/Notification",["nbd/trait/pubsub","nbd/util/async","lib/xhr","be/Controller/Dialog/Roulette","be/View/Dialog/Layover/Notification","be/View/Dialog/Menu/Notification","be/Controller/Notification","be/Controller/NotificationGroup"],function(t,e,i,n,a,o,r,s){"use strict";var c=n.extend({_initView:function(){this._super.apply(this,arguments),this._view&&this.listenTo(this._view,"show",this._update).listenTo(this._view,"show",function(){return this._model.get("entries")?(this.block||this.get(),void 0):this.more()})},get:function l(){var t=l.bind(this),i=this._model,n=this.read({onset_ts:i.get("onset")}).then(function(n){if(!n.notifications)throw n;return i.set("onset",n.latest_ts),n.has_more&&e(t),n.notifications}).then(this.constructor.makeEntries);return n.then(function(t){var e=i.get("entries")||[];i.set("entries",t.concat(e))}).then(this.trigger.bind(this,"sync")),n},more:function d(){if(!d.block){d.block=!0;var t=this._model,e=this.read({offset_ts:t.get("offset")}).then(function(e){if(!e.notifications)throw e;d.block=!e.has_more;var i=t.data();return i.onset=i.onset||e.latest_ts,i.offset=e.earliest_ts,e.notifications}).then(this.constructor.makeEntries);return e.then(function(e){var i=t.get("entries")||[];t.set("entries",i.concat(e))}).then(this.trigger.bind(this,"sync")),e}},read:function(t){try{this._view.loading.show()}catch(e){}var n=function(){this._view.loading.hide()}.bind(this),a=i({url:"/notifications/data",data:t});return a.then(n,n),a},_update:function(){var t=this._model.get("entries");t&&t.length&&t.forEach(function(t){t.update()})}},{VIEW_CLASS:{phone:a,tablet:o,desktop:o},makeEntries:function(t){var e,i,n,a=[],o=0,c=2;for(i=0;i<t.length;++i)if(t[i+1]&&t[i+1].action_key===t[i].action_key)o++;else{if(o>=c){for(e=new s,n=i-o;i>=n;++n)e.add(new r(t[n]));a.push(e)}else for(n=i-o;i>=n;++n)a.push(new r(t[n]));o=0}return a}}).mixin(t);return c}),define("be/notification",["jquery","has","lib/xhr","be/Controller/Dialog/Notification"],function(t,e,i,n){"use strict";
var a={init:function(i){var a=t(".js-bell-menu",i);a.length&&(this.$bell=a,this._dialog=new n,this._dialog.setContext(a),this._dialog.on("sync",function(){this.update(0)},this),e("localstorage")&&this.update(window.sessionStorage.getItem("notifications")||0),this._sync())},destroy:function(){this._dialog&&this._dialog.destroy(),clearInterval(this._interval)},update:function(t){var e=0===+t;this.$bell.toggleClass("unread",!e).find(".notifications-count").toggleClass("hide",e).text(t),this._dialog.block=e},_sync:function(){return i("/notifications/unread").then(function(t){return e("localstorage")&&window.sessionStorage.setItem("notifications",t.count),t.count}).then(a.update.bind(a))}};return a});