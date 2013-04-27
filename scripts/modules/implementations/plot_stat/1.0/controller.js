 /*
 * controller.js
 * version: dev
 *
 * Copyright 2012 Norman Pellet - norman.pellet@epfl.ch
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

if(typeof CI.Module.prototype._types.plot_stat == 'undefined')
	CI.Module.prototype._types.plot_stat = {};

CI.Module.prototype._types.plot_stat.Controller = function(module) {}

$.extend(CI.Module.prototype._types.plot_stat.Controller.prototype, CI.Module.prototype._impl.controller, {
	
	configurationSend: {

		events: {
			onHover: {
				label: 'Hovers an element',
				description: 'Pass the mouse over a line to select it'
			}
		},
		
		rels: {
			'element': {
				label: 'The selected element data',
				description: 'Returns the selected element'
			}
		}
		
	},
	
	hoverEvent: function(data) {
		//google.visualization.events.trigger(source_visualization, event_name, event_args)
		var actions;
		if(!(actions = this.module.definition.dataSend))	
			return;

		for(var i = 0; i < actions.length; i++) {
			if(actions[i].event == "onHover") {
				CI.API.blankSharedVar(actions[i].name);
				CI.API.setSharedVarFromJPath(actions[i].name, data, actions[i].jpath);
			}
		}

		CI.RepoHighlight.set(data._highlight, 1);
	},
	
	hoverOutEvent: function(data) {
		CI.RepoHighlight.set(data._highlight, 0);
	},

	configurationReceive: {
		"chart": {
			type: ['chart'],
			label: 'Formatted data for a chart',
			description: ''
		},
		"yArray": {
			type: 'array',
			label: '1D Array',
			description: '1D Array'
		},

	},
	
	moduleInformations: {
		moduleName: 'Chart'
	},
	
	doConfiguration: function(section) {
		
		var groupfield = new BI.Forms.GroupFields.List('module');
		section.addFieldGroup(groupfield);
		
		var field = groupfield.addField({
			type: 'Combo',
			name: 'charttype'
		});
		field.implementation.setOptions([{ title: "Horizontal Bar Chart", key: "hbarchart"}, { title: "Vertical Bar Chart", key: "vbarchart"}, { title: "Line chart", key: "linechart"}]);
		field.setTitle(new BI.Title('Chart type'));
	

		var field = groupfield.addField({
			type: 'Text',
			name: 'linewidth'
		});
		field.setTitle(new BI.Title('Line width'));
		
		
		var field = groupfield.addField({
			type: 'Text',
			name: 'pointsize'
		});
		field.setTitle(new BI.Title('Point size'));
		

		
		var field = groupfield.addField({
			type: 'Checkbox',
			name: 'legend'
		});
		field.setTitle(new BI.Title('Legend'));
		field.implementation.setOptions({"display": "Display"});
		return true;
	},
	
	doFillConfiguration: function() {
	
		var cfg = this.module.getConfiguration();
		var linewidth = cfg.linewidth || 0;
		var charttype = cfg.charttype || "linechart";
		var pointsize = cfg.pointsize || 7;
		var displayLegend = cfg.legend ? ['display'] : ''

		return {
			groups: {
				module: [{
					linewidth: [linewidth],
					pointsize: [pointsize],
					charttype: [charttype],
					legend: [displayLegend]
				}]
			}
		}
	},
	
	
	doSaveConfiguration: function(confSection) {
		
		var group = confSection[0].module[0];
		
		var linewidth = group.linewidth[0];
		var charttype = group.charttype[0];
		var pointsize = group.pointsize[0];
		var legend = !!group.legend[0][0];

		this.module.definition.configuration = {
			linewidth: linewidth,
			pointsize: pointsize,
			charttype: charttype,
			legend: legend
		};

		
	}
});
