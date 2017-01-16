var typeColSize = ['xs', 'sm', 'md', 'xs-offset', 'sm-offset', 'md-offset'];

CKEDITOR.plugins.add( 'colsize', {
    requires: 'widget',

    icons: 'colsize',

    init: function( editor ) {
		CKEDITOR.dialog.add( 'colsize', this.path + 'dialogs/colsize.js' );
		

		editor.widgets.add( 'colsize', {
			button: 'Insérez des colonnes',
			
			template:
				'<div class="row">' +
				'<div class="col-xs-12 col-sm-7 col-editable-1">' +
				'<p>Contenu</p></div>' +

				'<div class="col-xs-12 col-sm-5 bs-callout bs-callout-info col-editable-2">' + 
				'<p>Contenu</p>'+
				'</div>'+
				'</div>',
				
			allowedContent:
				'div(!row); div(!col-editable-1); div(!col-editable-2)',
			requiredContent: 'div(row); div(col-editable-1); div(col-editable-2)',
			
			editables: {
				content: {
					selector: '.col-editable-1',
			},
				content2: {
					selector: '.col-editable-2'
				}
			},
			
			upcast: function( element ) {
				// Return "true" (that element needs to converted to a Simple Box widget)
				// for all <div> elements with a "simplebox" class.
				return element.name == 'div' && element.hasClass( 'row' );
			},
			dialog: 'colsize',
			init: function() {
			//initialise et remplis le tableau
			
				//défini les colones
				var div = this;
				//établit les col de 1 à 12
				for (var i = 1; i < 13; i++) {
					//établit les types de col
					typeColSize.forEach(function(type) {
						if ( div.element.getChild(0).hasClass( 'col-'+type+'-'+i ) ){
							if(type == 'md'){
								div.setData( 'col1', i );
							}
							if(type == 'sm'){
								div.setData( 'colsm1', i );
							}
							if(type == 'xs'){
								div.setData( 'colxs1', i );
							}
							if(type == 'md-offset'){
								div.setData( 'offset1', i );
							}
							if(type == 'sm-offset'){
								div.setData( 'offsetsm1', i );
							}
							if(type == 'xs-offset'){
								div.setData( 'offsetxs1', i );
							}
							
						}
						if ( div.element.getChild(1).hasClass( 'col-'+type+'-'+i ) ){
							if(type == 'md'){
								div.setData( 'col2', i );
							}
							if(type == 'sm'){
								div.setData( 'colsm2', i );
							}
							if(type == 'xs'){
								div.setData( 'colxs2', i );
							}
							if(type == 'md-offset'){
								div.setData( 'offset2', i );
							}
							if(type == 'sm-offset'){
								div.setData( 'offsetsm2', i );
							}
							if(type == 'xs-offset'){
								div.setData( 'offsetxs2', i );
							}
						}
					});
				}
				
				
				//défini la légende
				if ( this.element.getChild(1).hasClass( 'bs-callout bs-callout-info' ) )
					this.setData( 'legende', 'checked' );
				
				//défini le padding
				if ( this.element.getChild(0).hasClass( 'nopadding' ) )
					this.setData( 'padding1', 'checked' );
				if ( this.element.getChild(1).hasClass( 'nopadding' ) )
					this.setData( 'padding2', 'checked' );
				
				//défini le visible
				if ( this.element.getChild(0).hasClass( 'hidden-md hidden-lg' ) )
					this.setData( 'visible1', 'checked' );
				if ( this.element.getChild(1).hasClass( 'hidden-md hidden-lg' ) )
					this.setData( 'visible2', 'checked' );
			},
			
			data: function() {
				
				//remove les colones
				var div = this;
				//établit les col de 1 à 12
				for (var i = 0; i < 13; i++) {
					//établit les types de col
					typeColSize.forEach(function(type) {
						div.element.getChild(0).removeClass( 'col-'+type+'-'+i );
						div.element.getChild(1).removeClass( 'col-'+type+'-'+i );
					});
				}
				
				//remove la légende
				this.element.getChild(1).removeClass( 'bs-callout' );
				this.element.getChild(1).removeClass( 'bs-callout-info' );
				
				//remove le padding
				this.element.getChild(0).removeClass( 'nopadding' );
				this.element.getChild(1).removeClass( 'nopadding' );
				
				//remove le visible
				this.element.getChild(0).removeClass( 'hidden-md' );
				this.element.getChild(0).removeClass( 'hidden-lg' );
				this.element.getChild(1).removeClass( 'hidden-md' );
				this.element.getChild(1).removeClass( 'hidden-lg' );
				
				
				// défini les nouvelles valeurs pour pc
				if ( this.data.col1 )
					this.element.getChild(0).addClass( 'col-md-'+this.data.col1 );
				if ( this.data.col2 )
					this.element.getChild(1).addClass( 'col-md-'+this.data.col2 );
				
				if ( this.data.offset1 )
					this.element.getChild(0).addClass( 'col-md-offset-'+this.data.offset1 );
				if ( this.data.offset2 )
					this.element.getChild(1).addClass( 'col-md-offset-'+this.data.offset2 );
				//pour le visible 
				if ( this.data.visible1 ){
					this.element.getChild(0).addClass( 'hidden-md' )
					this.element.getChild(0).addClass( 'hidden-lg' )
				}
				if ( this.data.visible2 ){
					this.element.getChild(1).addClass( 'hidden-md' )
					this.element.getChild(1).addClass( 'hidden-lg' )
				}
				
				// défini les nouvelles valeurs pour tablet
				if ( this.data.colsm1 )
					this.element.getChild(0).addClass( 'col-sm-'+this.data.colsm1 );
				if ( this.data.colsm2 )
					this.element.getChild(1).addClass( 'col-sm-'+this.data.colsm2 );
				
				if ( this.data.offsetsm1 )
					this.element.getChild(0).addClass( 'col-sm-offset-'+this.data.offsetsm1 );
				if ( this.data.offsetsm2 )
					this.element.getChild(1).addClass( 'col-sm-offset-'+this.data.offsetsm2 );
				//pour le visible 
				if ( this.data.visiblesm1 ){
					this.element.getChild(0).addClass( 'hidden-sm' )
				}
				if ( this.data.visiblesm2 ){
					this.element.getChild(1).addClass( 'hidden-sm' )
				}
				
				// défini les nouvelles valeurs pour mobile
				if ( this.data.colxs1 )
					this.element.getChild(0).addClass( 'col-xs-'+this.data.colxs1 );
				if ( this.data.colxs2 )
					this.element.getChild(1).addClass( 'col-xs-'+this.data.colxs2 );
				
				if ( this.data.offsetxs1 )
					this.element.getChild(0).addClass( 'col-xs-offset-'+this.data.offsetxs1 );
				if ( this.data.offsetxs2 )
					this.element.getChild(1).addClass( 'col-xs-offset-'+this.data.offsetxs2 );
				//pour le visible 
				if ( this.data.visiblexs1 ){
					this.element.getChild(0).addClass( 'hidden-xs' )
				}
				if ( this.data.visiblexs2 ){
					this.element.getChild(1).addClass( 'hidden-xs' )
				}
				
				//pour la légende
				if ( this.data.legende ){
					this.element.getChild(1).addClass( 'bs-callout' )
					this.element.getChild(1).addClass( 'bs-callout-info' )
				}
				//pour le padding
				if ( this.data.padding1 )
					this.element.getChild(0).addClass( 'nopadding' )
				;
				if ( this.data.padding2 )
					this.element.getChild(1).addClass( 'nopadding' )
				;
					
			}
			
		} );
    }
} );