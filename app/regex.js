if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return /\d+/.test(str); 
    },

    containsRepeatingLetter : function(str) {
        return /([a-zA-Z])\1/.test(str);
    },

    endsWithVowel : function(str) {
        return /[aeiou]$/i.test(str);
    },

    captureThreeNumbers : function(str) {
        if( !/\d{3}/.test( str ) ) {
            return false;
        }

        return str.match(/\d{3}/)[0];
    },

    matchesPattern : function(str) {
        return /^\d{3}-\d{3}-\d{4}$/.test(str);
    },

    isUSD : function(str) {
        return /^\$(\d{1,3}(\,\d{3})*|(\d+))(\.\d{2})?$/.test(str);
    }
  };
});
