CKEDITOR.dialog.add('colsize', function (editor) {
	var tableSizeCol = [
		['Aucune', ''],
		['1 sur 12', '1'],
		['2 sur 12', '2'],
		['3 sur 12', '3'],
		['4 sur 12', '4'],
		['5 sur 12', '5'],
		['6 sur 12', '6'],
		['7 sur 12', '7'],
		['8 sur 12', '8'],
		['9 sur 12', '9'],
		['10 sur 12', '10'],
		['11 sur 12', '11'],
		['12 sur 12', '12'],
	];
    return {
        title: 'Editer les colonnes',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'pc',
                label: 'PC',
                elements: [
					
                    {
                        type: 'hbox',
                        widths: ['50%', '50%'],
                        children: [
                            {
                                type: 'html',
                                html: '<h3 style="font-size: 14px; font-weight: bold; text-transform: uppercase;">1ère colonne :</h3>'
                            },
                            {
                                type: 'html',
                                html: '<h3 style="font-size: 14px; font-weight: bold;  text-transform: uppercase;">2ème colonne :</h3>'
                            }
                        ]
                    }, 
					{
                        type: 'hbox',
                        widths: ['50%', '50%'],
                        children: [
                            {
                                id: 'col1',
                                type: 'select',
                                label: 'Dimension',
                                items: tableSizeCol,
                                setup: function (widget) {
                                    this.setValue(widget.data.col1);
                                },
                                commit: function (widget) {
                                    widget.setData('col1', this.getValue());
                                }
                            },
                            {
                                id: 'col2',
                                type: 'select',
                                label: 'Dimension',
                                items: tableSizeCol,
                                setup: function (widget) {
                                    this.setValue(widget.data.col2);
                                },
                                commit: function (widget) {
                                    widget.setData('col2', this.getValue());
                                }
                            }
                        ]
                    }, 
					{
                        type: 'hbox',
                        widths: ['50%', '50%'],
						children: [
                            {
                                id: 'offset1',
                                type: 'select',
                                label: 'Marge externe',
                                items: tableSizeCol,
                                setup: function (widget) {
                                    this.setValue(widget.data.offset1);
                                },
                                commit: function (widget) {
                                    widget.setData('offset1', this.getValue());
                                }
                            },
                            {
                                id: 'offset2',
                                type: 'select',
                                label: 'Marge externe',
                                items: tableSizeCol,
                                setup: function (widget) {
                                    this.setValue(widget.data.offset2);
                                },
                                commit: function (widget) {
                                    widget.setData('offset2', this.getValue());
                                }
                            }
                        ]
                    },
                    {
                        type: 'hbox',
                        widths: ['50%', '50%'],
                        children: [
                            {
                                id: 'visible1',
                                type: 'checkbox',
                                label: 'Invisible',
								'default': '',
                                setup: function (widget) {
                                    this.setValue(widget.data.visible1);
                                },
                                commit: function (widget) {
                                    widget.setData('visible1', this.getValue());
                                }
                            },
                            {
                                id: 'visible2',
                                type: 'checkbox',
                                label: 'Invisible',
								'default': '',
                                setup: function (widget) {
                                    this.setValue(widget.data.visible2);
                                },
                                commit: function (widget) {
                                    widget.setData('visible2', this.getValue());
                                }
                            }
                        ]
                    }
                ]
            },
            {
				id: 'tablet',
                label: 'Tablet',
                elements: [
				    
                    {
                        type: 'hbox',
                        widths: ['50%', '50%'],
                        children: [
                            {
                                type: 'html',
                                html: '<h3 style="font-size: 14px; font-weight: bold; text-transform: uppercase;">1ère colonne :</h3>'
                            },
                            {
                                type: 'html',
                                html: '<h3 style="font-size: 14px; font-weight: bold;  text-transform: uppercase;">2ème colonne :</h3>'
                            }
                        ]
                    }, 
					{
                        type: 'hbox',
                        widths: ['50%', '50%'],
                        children: [
                            {
                                id: 'colsm1',
                                type: 'select',
                                label: 'Dimension',
                                items: tableSizeCol,
                                setup: function (widget) {
                                    this.setValue(widget.data.colsm1);
                                },
                                commit: function (widget) {
                                    widget.setData('colsm1', this.getValue());
                                }
                            },
                            {
                                id: 'colsm2',
                                type: 'select',
                                label: 'Dimension',
                                items: tableSizeCol,
                                setup: function (widget) {
                                    this.setValue(widget.data.colsm2);
                                },
                                commit: function (widget) {
                                    widget.setData('colsm2', this.getValue());
                                }
                            }
                        ]
                    },
					{
                        type: 'hbox',
                        widths: ['50%', '50%'],
						children: [
                            {
                                id: 'offsetsm1',
                                type: 'select',
                                label: 'Marge externe',
                                items: tableSizeCol,
                                setup: function (widget) {
                                    this.setValue(widget.data.offsetsm1);
                                },
                                commit: function (widget) {
                                    widget.setData('offsetsm1', this.getValue());
                                }
                            },
                            {
                                id: 'offsetsm2',
                                type: 'select',
                                label: 'Marge externe',
                                items: tableSizeCol,
                                setup: function (widget) {
                                    this.setValue(widget.data.offsetsm2);
                                },
                                commit: function (widget) {
                                    widget.setData('offsetsm2', this.getValue());
                                }
                            }
                        ]
                    },
                    {
                        type: 'hbox',
                        widths: ['50%', '50%'],
                        children: [
                            {
                                id: 'visiblesm1',
                                type: 'checkbox',
                                label: 'Invisible',
                                'default': 'checked',
                                setup: function (widget) {
                                    this.setValue(widget.data.visiblesm1);
                                },
                                commit: function (widget) {
                                    widget.setData('visiblesm1', this.getValue());
                                }
                            },
                            {
                                id: 'visiblesm2',
                                type: 'checkbox',
                                label: 'Invisible',
                                'default': 'checked',
                                setup: function (widget) {
                                    this.setValue(widget.data.visiblesm2);
                                },
                                commit: function (widget) {
                                    widget.setData('visiblesm2', this.getValue());
                                }
                            }
                        ]
                    }
					
				]
            },
            {
				id: 'mobile',
                label: 'Mobile',
                elements: [
				    
                    {
                        type: 'hbox',
                        widths: ['50%', '50%'],
                        children: [
                            {
                                type: 'html',
                                html: '<h3 style="font-size: 14px; font-weight: bold; text-transform: uppercase;">1ère colonne :</h3>'
                            },
                            {
                                type: 'html',
                                html: '<h3 style="font-size: 14px; font-weight: bold;  text-transform: uppercase;">2ème colonne :</h3>'
                            }
                        ]
                    }, 
					{
                        type: 'hbox',
                        widths: ['50%', '50%'],
                        children: [
                            {
                                id: 'colxs1',
                                type: 'select',
                                label: 'Dimension',
                                items: tableSizeCol,
                                setup: function (widget) {
                                    this.setValue(widget.data.colxs1);
                                },
                                commit: function (widget) {
                                    widget.setData('colxs1', this.getValue());
                                }
                            },
                            {
                                id: 'colxs2',
                                type: 'select',
                                label: 'Dimension',
                                items: tableSizeCol,
                                setup: function (widget) {
                                    this.setValue(widget.data.colxs2);
                                },
                                commit: function (widget) {
                                    widget.setData('colxs2', this.getValue());
                                }
                            }
                        ]
                    },
					{
                        type: 'hbox',
                        widths: ['50%', '50%'],
						children: [
                            {
                                id: 'offsetxs1',
                                type: 'select',
                                label: 'Marge externe',
                                items: tableSizeCol,
                                setup: function (widget) {
                                    this.setValue(widget.data.offsetxs1);
                                },
                                commit: function (widget) {
                                    widget.setData('offsetxs1', this.getValue());
                                }
                            },
                            {
                                id: 'offsetxs2',
                                type: 'select',
                                label: 'Marge externe',
                                items: tableSizeCol,
                                setup: function (widget) {
                                    this.setValue(widget.data.offsetxs2);
                                },
                                commit: function (widget) {
                                    widget.setData('offsetxs2', this.getValue());
                                }
                            }
                        ]
                    },
                    {
                        type: 'hbox',
                        widths: ['50%', '50%'],
                        children: [
                            {
                                id: 'visiblexs1',
                                type: 'checkbox',
                                label: 'Invisible',
                                'default': 'checked',
                                setup: function (widget) {
                                    this.setValue(widget.data.visiblexs1);
                                },
                                commit: function (widget) {
                                    widget.setData('visiblexs1', this.getValue());
                                }
                            },
                            {
                                id: 'visiblexs2',
                                type: 'checkbox',
                                label: 'Invisible',
                                'default': 'checked',
                                setup: function (widget) {
                                    this.setValue(widget.data.visiblexs2);
                                },
                                commit: function (widget) {
                                    widget.setData('visiblexs2', this.getValue());
                                }
                            }
                        ]
                    }
					
				]
            },
			{
				id: 'gener',
                label: 'Paramètres généraux',
				elements:[
                    {
                        type: 'hbox',
                        widths: ['50%', '50%'],
                        children: [
                            {
                                id: 'padding1',
                                type: 'checkbox',
                                label: 'Supprimer marges internes',
                                'default': '',
                                setup: function (widget) {
                                    this.setValue(widget.data.padding1);
                                },
                                commit: function (widget) {
                                    widget.setData('padding1', this.getValue());
                                }
                            },
                            {
                                id: 'padding2',
                                type: 'checkbox',
                                label: 'Supprimer marges internes',
                                'default': '',
                                setup: function (widget) {
                                    this.setValue(widget.data.padding2);
                                },
                                commit: function (widget) {
                                    widget.setData('padding2', this.getValue());
                                }
                            },
                        ]
                    },
                    {
                        type: 'hbox',
                        widths: ['50%', '50%'],
                        children: [
                            {
                                type: 'html',
                                html: ''
                            },
                            {
                                id: 'legende',
                                type: 'checkbox',
                                label: 'Légende',
                                'default': 'checked',
                                setup: function (widget) {
                                    this.setValue(widget.data.legende);
                                },
                                commit: function (widget) {
                                    widget.setData('legende', this.getValue());
                                }
                            }
                        ]
                    }
				]
			}
        ]
    };
});