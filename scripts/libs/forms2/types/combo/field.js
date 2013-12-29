
define( [ require, '../../field', 'libs/fancytree/jquery.fancytree' ], function( require, FieldDefaultConstructor ) {

	var FieldConstructor = function(name) {

		var self = this;

		this.name = name;
		this.domExpander = $("<div></div>").fancytree({

			fx: false,
			debut: 0,
			source: [],

			activate: function(event, node) {
				node = node.node;
				if( node.data.isFolder ) {
					return;
				}

				self.getElementExpanded( ).value = node.key;
			},

			click: function(event, node) {
				node = node.node;
				console.log( node );
				if( node && (!node.data.children || (node.data.children && node.data.children.length == 0 ))) {
					self.form.hideExpander( true );
				}
			}
		});


	};

	FieldConstructor.prototype = new FieldDefaultConstructor( );

	FieldConstructor.prototype.showExpander = function( fieldElement ) {

		var optionsSource = this.getOptions( fieldElement ),
			i,
			root = this.domExpander.fancytree( 'getRootNode' ),
			tree = this.domExpander.fancytree( 'getTree' ),
			node;
		
		tree._callHook("treeClear", tree); // root.removeChildren() causes root ul to loose its classes => bad.
		root.addChildren( optionsSource );

		if( tree.getActiveNode ) {
			if( ( node = tree.getActiveNode( ) ) != null ) {
				node.setActive( false );
			}
		}

		if( tree.getNodeByKey && ( node = tree.getNodeByKey( fieldElement.value ) ) ) {
			node.setActive( true );
		}

		root.toggleExpanded();

		this._showExpander( fieldElement );
	};

	return FieldConstructor;

});