'use strict';

define(['modules/default/defaultcontroller'], function (Default) {

    function Controller() {
    }

    Controller.prototype = $.extend(true, {}, Default);

    Controller.prototype.moduleInformation = {
        name: 'Object editor',
        description: 'Display and/or modify a JSON object',
        author: 'Michaël Zasso',
        date: '29.08.2014',
        license: 'MIT'
    };

    Controller.prototype.references = {
        "value": {
            label: 'A JSON object'
        },
        "output": {
            label: 'Output object'
        }
    };

    Controller.prototype.events = {
        onObjectChange: {
            label: 'The object has changed',
            refVariable: ['output']
        },
        onObjectSend: {
            label: 'The object was sent',
            refVariable: ['output']
        }
    };

    Controller.prototype.variablesIn = ['value'];

    Controller.prototype.configurationStructure = function () {
        return {
            groups: {
                group: {
                    options: {
                        type: 'list'
                    },
                    fields: {
                        editable: {
                            type: 'combo',
                            title: 'Editable ?',
                            options: [
                                {title: 'No', key: 'view'},
                                {title: 'Yes', key: 'tree'},
                                {title: 'Text', key: 'text'}
                            ],
                            default: 'view'
                        },
                        expanded: {
                            type: 'checkbox',
                            title: 'Auto-expand JSON',
                            options: {expand: 'Yes'}
                        },
                        storeObject: {
                            type: 'checkbox',
                            title: 'Store object in view',
                            options: {expand: 'Yes'}
                        },
                        displayValue: {
                            type: 'checkbox',
                            title: 'Display value',
                            options: {display: 'Yes'}
                        },
                        output: {
                            type: 'combo',
                            title: 'Output result',
                            options: [
                                {title: 'Modified input object', key: 'modified'},
                                {title: 'New object', key: 'new'}
                            ],
                            default: 'new'
                        },
                        storedObject: {
                            type: 'jscode',
                            title: 'Object stored in view',
                            default: '{}'
                        }
                    }
                }
            }
        };
    };

    Controller.prototype.configAliases = {
        editable: ['groups', 'group', 0, 'editable', 0],
        expanded: ['groups', 'group', 0, 'expanded', 0],
        storeObject: ['groups', 'group', 0, 'storeObject', 0],
        displayValue: ['groups', 'group', 0, 'displayValue', 0],
        storedObject: ['groups', 'group', 0, 'storedObject', 0],
        output: ['groups', 'group', 0, 'output', 0]

    };

    Controller.prototype.sendValue = function (newValue, eventType) {
        if (this.module.view.storeObject) {
            this.module.definition.configuration.groups.group[0].storedObject[0] = JSON.stringify(newValue);
        }
        var outputType = this.module.getConfiguration('output');
        if (outputType === 'new') {
            this.createDataFromEvent(eventType, 'output', newValue);
        } else {
            var input = this.module.view.inputData;
            if (input) {
                input.mergeWith(newValue, this.module.getId());
                this.setVarFromEvent(eventType, 'output', 'value', [ ]);
            }
        }
    };

    return Controller;

});