if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
        var df = $.Deferred();

        setTimeout(function(){
            df.resolve( value );
        }, 20);

        return df.promise();
    },

    manipulateRemoteData : function(url) {
        var df = $.Deferred();
        $.get(url, function( data ){
            var rst = [];
            for( var i =0; i < data.people.length; i++ ) {
                rst.push( data.people[i].name );
            } 

           df.resolve(rst.sort()); 
        });

        return  df.promise();
    }
  };
});
