define(['modules/defaultmodel', 'util/datatraversing'], function(Default, Traversing) {
	
	function model() {};
	model.prototype = $.extend(true, {}, Default, {

		getValue: function() {
			return this.dataValue;
		},
		

		getjPath: function(rel) {
			var data;
			switch(rel) {
				default:
				case 'annotation':
					data = this.module.view.annotations[0];
				break;
			}

			var jpaths = [];
			Traversing.getJPathsFromElement(data, jpaths);
			return jpaths;
		}


	});

	return model;
});
	