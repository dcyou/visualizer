define(['modules/defaultview','util/datatraversing','util/domdeferred','util/api'], function(Default, Traversing, DomDeferred, API) {
	
	function view() {};
	view.prototype = $.extend(true, {}, Default, {

		init: function() {	

			var cfg = this.module.getConfiguration(), view = this;
			var html = $('<div>');
			//html.css({"background-color":"#f00","height":"100%"}) ;
			html.css("text-align","center");
			html.css("padding","1em");
			/*this.dom = $(html).css('display', 'table').css('height', '100%').css('width', '100%');*/

			view.dom = html ;
			view.module.getDomContent().html(this.dom);
			view.textbox = null ;
			view.button = null ;
			//view.fillWithScript(cfg.btnvalue);
			view.fillWithScript();
		},

		resizeTextEditor: function(){
			view = this ;
			if(view.textbox){
				margin = (13+5)*2 ;
				view.textbox.height(
					$(view.module.getDomContent()[0]).height()
					- view.button.height()
					- margin
				);

			}
		},
		
		onResize: function() {
			this.resizeTextEditor() ;
		},
		
		blank: function() {
			this.dom.empty();
		},
		
		inDom: function() {},

		update: {

			'script': function(script) {
				
				var cfg = this.module.getConfiguration(), view = this;
				cfg.script = script ;
				view.fillWithScript();

			},

			'btnvalue': function(value) {

				var cfg = this.module.getConfiguration(), view = this;
				cfg.btnvalue = value ;
				view.fillWithScript();

			}
		},
		
		fillWithScript: function() {
			
			var cfg = this.module.getConfiguration() ;
			var self = this ;
			var dom = self.dom

			dom.html("");

			var button = $('<div>').html(cfg.btnvalue).addClass("bi-form-button");
			button.on("click",function(){
				self.module.controller.onButtonClick();
				return false ;
			}) ;

			var textbox = null ;
			if(cfg.iseditable && cfg.iseditable.length > 0){
				textbox = $('<textarea>',{cols:20,rows:5}).html(cfg.script).css({width:'95%'}) ;
				textbox.on('input',function(e,f){
					cfg.script = $(this).val() ;
					//self.update.script($(this).val()) ;
				});				
			}

			// Remember to the view
			self.textbox = textbox ;
			self.button = button ;

			dom.append(button);
			if(textbox)
				dom.prepend(textbox);
	
			DomDeferred.notify(button);
		},
		
		getDom: function() {
			return this.dom;
		},
		
		typeToScreen: {}
	});

	return view;
});