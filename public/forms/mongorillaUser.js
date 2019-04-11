define('forms/mongorillaUser', [
    'forms/mongorillaUser.base',
    'models/mongorillaUser',
    'json!api/mongorillaRole'
    ], function (MongorillaUserFormBase, MongorillaUserModel, apiMongorillaRole) {


    Backbone.Form.MongorillaUser = MongorillaUserFormBase.extend({
        events: {
        },

        initialize: function () {
            var instance = this;

            // add custom user defined roles
            this.schema.roles.options = this.schema.roles.options.concat(
                apiMongorillaRole.data.map(function (role) { return role.name; })
            );

            
            return Backbone.Form.prototype.initialize.apply(this, arguments);
        },


    });

    return Backbone.Form.MongorillaUser;

});
