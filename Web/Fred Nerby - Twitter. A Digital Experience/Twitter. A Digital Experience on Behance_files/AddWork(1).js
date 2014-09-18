define("require/hgn!templates/dialog",["hogan"],function(n){function t(){return e.render.apply(e,arguments)}var e=new n.Template({code:function(n,t,e){var i=this;return i.b(e=e||""),i.b('<div class="popup '),i.b(i.v(i.f("dialogType",n,t,0))),i.s(i.f("classes",n,t,1),n,t,0,44,50,"{{ }}")&&(i.rs(n,t,function(n,t,e){e.b(" "),e.b(e.v(e.d(".",n,t,0)))}),n.pop()),i.s(i.f("buttons",n,t,1),n,t,1,0,0,"")||i.b(" no-buttons"),i.s(i.f("title",n,t,1),n,t,1,0,0,"")||i.b(" no-title"),i.s(i.f("fullBleed",n,t,1),n,t,0,140,151,"{{ }}")&&(i.rs(n,t,function(n,t,e){e.b(" full-bleed")}),n.pop()),i.b('">'),i.b("\n"+e),i.b('  <div class="popup-inner-wrap">'),i.b("\n"),i.b("\n"+e),i.s(i.f("toolbar",n,t,1),n,t,0,218,587,"{{ }}")&&(i.rs(n,t,function(n,t,i){i.b('    <div class="toolbar">'),i.b("\n"+e),i.b('      <div class="header">'),i.b(i.t(i.f("title",n,t,0))),i.b("</div>"),i.b("\n"+e),i.s(i.f("hideClose",n,t,1),n,t,1,0,0,"")||(i.b('        <a class="header-action close right js-close'),i.s(i.f("layover",n,t,1),n,t,1,0,0,"")||i.b(" popup-close"),i.b('">'),i.b("\n"+e),i.b('          <span class="nav-icon-close nav-icon"></span>'),i.b("\n"+e),i.b("        </a>"),i.b("\n"+e)),i.s(i.f("layover",n,t,1),n,t,0,509,559,"{{ }}")&&(i.rs(n,t,function(n,t,e){e.s(e.f("button",n,t,1),n,t,0,529,541,"{{ }}")&&(e.rs(n,t,function(n,t,e){e.b(e.rp("<button0",n,t,""))}),n.pop())}),n.pop()),i.b("    </div>"),i.b("\n"+e)}),n.pop()),i.b("\n"+e),i.b('    <div class="popup-content'),i.s(i.f("toolbar",n,t,1),n,t,0,642,654,"{{ }}")&&(i.rs(n,t,function(n,t,e){e.b(" has-toolbar")}),n.pop()),i.b('">'),i.b("\n"+e),i.b(i.rp("<content1",n,t,"      ")),i.s(i.f("layover",n,t,1),n,t,1,0,0,"")||(i.b("    </div>"),i.b("\n"+e)),i.b("\n"+e),i.b('      <div class="popup-buttons'),i.s(i.f("buttons",n,t,1),n,t,1,0,0,"")||i.b(" hide"),i.b('">'),i.b("\n"+e),i.s(i.f("buttons",n,t,1),n,t,0,818,830,"{{ }}")&&(i.rs(n,t,function(n,t,e){e.b(e.rp("<button2",n,t,""))}),n.pop()),i.b("      </div>"),i.b("\n"),i.b("\n"+e),i.s(i.f("layover",n,t,1),n,t,0,873,889,"{{ }}")&&(i.rs(n,t,function(n,t,i){i.b("    </div>"),i.b("\n"+e)}),n.pop()),i.b("\n"+e),i.b("  </div> <!-- /.popup-inner -->"),i.b("\n"),i.b("\n"+e),i.b("</div>"),i.b("\n"),i.b("\n"+e),i.s(i.f("blocking",n,t,1),n,t,0,957,991,"{{ }}")&&(i.rs(n,t,function(n,t,i){i.b('<div class="blocking-div"></div>'),i.b("\n"+e)}),n.pop()),i.fl()},partials:{"<button0":{name:"button",partials:{},subs:{}},"<content1":{name:"content",partials:{},subs:{}},"<button2":{name:"button",partials:{},subs:{}}},subs:{}},"",n);return t.template=e,t}),define("require/hgn!templates/button",["hogan"],function(n){function t(){return e.render.apply(e,arguments)}var e=new n.Template({code:function(n,t,e){var i=this;return i.b(e=e||""),i.b('  <div class="form-item form-item-a'),i.s(i.f("containerClasses",n,t,1),n,t,0,56,62,"{{ }}")&&(i.rs(n,t,function(n,t,e){e.b(" "),e.b(e.v(e.d(".",n,t,0)))}),n.pop()),i.b('">'),i.b("\n"+e),i.b('    <a class="form-button'),i.s(i.f("classes",n,t,1),n,t,0,123,129,"{{ }}")&&(i.rs(n,t,function(n,t,e){e.b(" "),e.b(e.v(e.d(".",n,t,0)))}),n.pop()),i.s(i.f("classes",n,t,1),n,t,1,0,0,"")||i.b(" form-button-default"),i.b('"'),i.b("\n"+e),i.b("      "),i.s(i.f("href",n,t,1),n,t,0,202,218,"{{ }}")&&(i.rs(n,t,function(n,t,e){e.b(' href="'),e.b(e.v(e.f("href",n,t,0))),e.b('"')}),n.pop()),i.b(' unselectable="on"'),i.b("\n"+e),i.b("      tabindex="),i.s(i.f("tabindex",n,t,1),n,t,0,274,288,"{{ }}")&&(i.rs(n,t,function(n,t,e){e.b('"'),e.b(e.v(e.f("tabindex",n,t,0))),e.b('"')}),n.pop()),i.b("\n"+e),i.b("      "),i.s(i.f("tabindex",n,t,1),n,t,1,0,0,"")||i.b('"0"'),i.b(">"),i.b(i.v(i.f("label",n,t,0))),i.b("</a>"),i.b("\n"+e),i.b("  </div>"),i.b("\n"),i.fl()},partials:{},subs:{}},"",n);return t.template=e,t}),define("be/View/Dialog",["jquery","nbd/View/Entity","nbd/util/extend","hgn!templates/dialog","hgn!templates/button"],function(n,t,e,i,s){"use strict";var o=t.extend({mustache:{},template:function(t){return n(i(t,e({content:this.mustache.template,button:s.template},this.partials)))},rendered:function(){this.$view.on("click",".js-close, .close, .form-button-close, .form-button-cancel",this.hide.bind(this)).find(".form-button-disabled").on("click",!1)},position:function(){},show:function(){return this.trigger("show",this.$view)},hide:function(){return this.trigger("hide",this.$view)},toggle:function(){var n=this.$view.is(":visible");return this[n?"hide":"show"]()}});return o}),define("be/View/Dialog/Menu",["jquery","be/View/Dialog","nbd/util/async","jquery/ui/position"],function(n,t,e){"use strict";var i=t.extend({init:function(){this._super.apply(this,arguments),this.dismiss=function(n){n.originalEvent.data!==this&&(this.hide(),n.preventDefault())}.bind(this)},destroy:function(){this._unbind(),this._super.apply(this,arguments)},template:function(t){return this._super(n.extend({dialogType:"menu",blocking:!1,hide_toolbar:!0},t))},rendered:function(){this._super();var n=this;this.$view.on("click touchend",function(t){t.originalEvent.data=n})},_bind:function(){n("html").on("click touchend",this.dismiss)},_unbind:function(){n("html").off("click touchend",this.dismiss)},position:function(t,e){if(this.$view){t&&(this._lastContext=t);var i={my:"left top",at:"left bottom+10",of:this._lastContext,collision:"flipfit"};this.$view.position(n.extend(i,e))}},show:function(){return this.$view?(e(this._bind.bind(this)),this.$view.addClass("shown"),this._super()):void 0},hide:function(){return this.$view?(this._unbind(),this.$view.removeClass("shown"),this._super()):void 0},toggle:function(){return this[this.$view.hasClass("shown")?"hide":"show"]()}});return i}),define("require/hgn!templates/addWork",["hogan"],function(n){function t(){return e.render.apply(e,arguments)}var e=new n.Template({code:function(n,t,e){var i=this;return i.b(e=e||""),i.b('<div class="new-work-body cfix">'),i.b("\n"+e),i.b('  <a id="activity-new-work-project" class="new-work-link-wrap" href="'),i.b(i.v(i.f("projectUrl",n,t,0))),i.b('">'),i.b("\n"+e),i.b('    <span class="new-work-link-icon"></span>'),i.b("\n"+e),i.b('    <span class="new-work-link">Add Project</span>'),i.b("\n"+e),i.b("  </a>"),i.b("\n"+e),i.b('  <span id="activity-new-work-wip" class="new-work-link-wrap wip-action wip-action-create fake-link js-wip-create">'),i.b("\n"+e),i.b('    <span class="new-work-link-icon"></span>'),i.b("\n"+e),i.b('    <span class="new-work-link">Add Work in Progress</span>'),i.b("\n"+e),i.b("  </span>"),i.b("\n"+e),i.b("</div>"),i.b("\n"),i.fl()},partials:{},subs:{}},"",n);return t.template=e,t}),define("be/View/Menu/AddWork",["jquery","be/View/Dialog/Menu","hgn!templates/addWork"],function(n,t,e){"use strict";var i=t.extend({mustache:e,templateData:function(){return{classes:["new-work-menu"],projectUrl:"/portfolio/editor"}},position:function(n){return this._super(n,{my:"left top",at:"left bottom",collision:"none"})},rendered:function(){this._super(),this.bindEvents()},bindEvents:function(){this.$view.on("click",".js-wip-create",function(){this.hide(),require(["wip/create"],function(n){n.render()})}.bind(this))}});return i});