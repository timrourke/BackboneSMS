var sms = sms || {};
sms.active = sms.active || {};
sms.blueprints = sms.blueprints || {};

/*
 *	Blueprints for models, views, and collections.
 *
 */

sms.blueprints.Model = Backbone.Model.extend({
	initialize: function() {
		console.log('A model has been born.');
	}
});

sms.blueprints.Collection = Backbone.Collection.extend({
	model: sms.blueprints.Model,
	initialize: function() {
		console.log('A collection has been born.');
	}
});

sms.blueprints.ModelView = Backbone.View.extend({
	$el: $('#js-list'),
	initialize: function() {
		console.log('A model view has been born.');
	},
	render: function() {
		var self = this;
		var data = {
			sender: 'Tim',
			message: 'TACO PARTY'
		}
		var tpl = 'Sent from: ' + data.sender + ' >> ' + data.message;
		self.$el.append('<li>' + tpl + '</li>');
	}
});

sms.blueprints.CollectionView = Backbone.View.extend({
	events: {
		'click button#js-create': 'render'
	},
	initialize: function() {
		console.log('A collection view has been born.');
	},
	render: function() {
		var self = this;
	}
});

/*
 *	Active, instantiated components
 *
 */

$(document).on('ready', function() {
	sms.active.collection = new sms.blueprints.Collection();
	sms.active.collectionView = new sms.blueprints.CollectionView({
		el: $('.ui'),
		collection: sms.active.collection
	});

});