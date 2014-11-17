define(['modules/default/defaultcontroller'], function(Default) {

    function Controller() {
    }

    Controller.prototype = $.extend(true, {}, Default);

    Controller.prototype.moduleInformation = {
        moduleName: 'Rich text editor',
        description: 'Edit rich text in a wysiwyg interface.',
        author: 'Michaël Zasso',
        date: '21.05.2014',
        license: 'MIT',
        cssClass: 'rich_text'
    };

    Controller.prototype.references = {
        html: {
            label: 'Content as HTML'
        }
    };

    Controller.prototype.events = {
        onEditorChange: {
            label: 'The value in the editor has changed',
            refVariable: ['html']
        }
    };

    Controller.prototype.variablesIn = [ 'html' ];



    Controller.prototype.valueChanged = function(value) {
        this.module.definition.richtext = value;
        if(this.module.getConfigurationCheckbox('modifyInVariable', 'yes') && this.module.data) {
            this.module.data.setValue(value);
            this.module.model.dataTriggerChange(this.module.data);
        }
        this.createDataFromEvent("onEditorChange", "html", DataObject.check({type:"html", value: value}, true));
    };
    
    Controller.prototype.configurationStructure = function() {
        return {
            groups: {
                group: {
                    options: {
                        type: 'list'
                    },

                    fields: {
                        editable: {
                            type: 'checkbox',
                            title: 'Is Editable',
                            options: {isEditable: 'Yes'},
                            default: ['isEditable']
                        },
                        modifyInVariable: {
                            type: 'checkbox',
                            title: 'Modify Input Variable',
                            options: {yes: 'Yes'},
                            default: []
                        },
                        autoHeight: {
                            type: 'checkbox',
                            title: 'Automatic Height',
                            options: {yes: 'Yes'},
                            default: []
                        },
                        bgColor: {
                            type: 'spectrum',
                            title: 'Background color',
                            default: [255,255,255,1]
                        },
                        postit: {
                            type: 'checkbox',
                            title: 'Looks like a postit',
                            options: {yes: 'Yes'},
                            default: []
                        }
                    }
                }
            }
        }		
    };

	Controller.prototype.configAliases = {
        'editable': [ 'groups', 'group', 0, 'editable', 0 ],
        'modifyInVariable': [ 'groups', 'group', 0, 'modifyInVariable', 0 ],
        'autoHeight': [ 'groups', 'group', 0, 'autoHeight', 0 ],
        'bgColor': [ 'groups', 'group', 0, 'bgColor', 0 ],
        'postit': [ 'groups', 'group', 0, 'postit', 0 ]
	};

    return Controller;
});