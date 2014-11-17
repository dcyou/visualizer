define([
    'modules/default/defaultview',
    'src/util/util',
    'ckeditor',
    'lodash',
    'src/util/typerenderer',
    'src/main/grid'
    ], function(Default, Util, CKEDITOR, _, Renderer, Grid) {

    function View() {
        this._id = Util.getNextUniqueId();
    }

    View.prototype = $.extend(true, {}, Default, {
        init: function() {

        },
        inDom: function() {
            this.initEditor();
            this.resolveReady();
        },

        update: {
            html: function(moduleValue) {
                this.module.data = moduleValue;

                this.module.definition.richtext = moduleValue.get();
                //this.initEditor();
                this.updateEditor(moduleValue.get());
            }
        },

        initEditor: function() {
            var self = this;


            var initText = this.module.definition.richtext || '';
            if(!this.module.getConfigurationCheckbox('editable', 'isEditable')) {
                var def = Renderer.toScreen({
                    type: 'html',
                    value: initText
                }, this.module );
                def.always( function() {
                    self.dom = $( '<div id="'+this._id+ '">');
                    self.dom.html(initText);
                    self.module.getDomContent().html(self.dom);
                    self._setCss();
                });
            }
            else {
                this.dom = $(' <div id="'+this._id+'" contenteditable="true">');
                this.dom.html(initText);
                this.module.getDomContent().html(this.dom);
                this._setCss();
                this.module.controller.valueChanged(initText);
            }

            if(CKEDITOR.instances[this._id]) {
                CKEDITOR.instances[this._id].destroy();
            }
            if(this.module.getConfigurationCheckbox('editable', 'isEditable')) {
                CKEDITOR.disableAutoInline = true;
                this.instance = CKEDITOR.inline(this._id, {
                    extraPlugins:"mathjax,font,sourcedialog,codesnippet"
                });
                this.instance.on("change",function(){
                    self.module.controller.valueChanged(self.instance.getData());
                    if(self.module.getConfigurationCheckbox('autoHeight', 'yes')) {
                        self.module.getDomWrapper().height(self.getContentHeight() + 70);
                        Grid.moduleResize(self.module);
                    }

                });
            }
        },

        updateEditor: function(html) {
            this.instance.setData(html);
        },

        getContentHeight: function() {
            var height = 0;
            this.dom.children().each(function() {
                height += $(this).height();
            });
            return height;
        },
        
        _setCss: function() {
            var bgColor = this.module.getConfiguration('bgColor');
            this.dom.css({
                height: '100%',
                width: '100%',
                padding: "5px",
                boxSizing: "border-box",
                'background-color': 'rgba(' + bgColor.join(',') + ')'
            });

            if(this.module.getConfigurationCheckbox('postit', 'yes')) {
                this.dom.addClass('postit');
                this.dom.parents('.ci-module-wrapper').addClass('ci-module-postit');
            }
            else {
                this.dom.removeClass('postit');
                this.dom.parents('.ci-module-wrapper').removeClass('ci-module-postit');
            }
        }
    });

    return View;
});