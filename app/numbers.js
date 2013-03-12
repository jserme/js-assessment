if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var bitStr = Number(num).toString(2);
        return Number(bitStr.split('').reverse()[bit-1]);
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var binStr = Number(num).toString(2);
        if( binStr.length < 8 ) {
            binStr = (new Array(10).join('0')).slice(0, 8 - binStr.length) + binStr; 
        }

        return binStr;
    },

    multiply: function(a, b) {
        var paddinga = 1, 
        paddingb = 1;
        while(a<1) {
           paddinga  *= 10; 
           a  *= 10;
        }

        while(b<1) {
           paddingb  *= 10; 
           b  *= 10;
        }

        return (a * b / paddinga)/paddingb; 
        
    }
  };
});

