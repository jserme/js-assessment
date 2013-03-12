if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        var rst =  -1;
        for( var i = 0; i < arr.length; i++){
            if( item == arr[i] ) {
                rst = i; 
                break;
            }
        }

        return rst;
    },

    sum : function(arr) {
        var rst =  0;
        for( var i = 0; i < arr.length; i++){
            rst += arr[i];
        }

        return rst;
    },

    remove : function(arr, item) {
        var _arry = [];
        for( var i = 0; i < arr.length; i++){
            if( arr[i] != item ) {
                _arry.push( arr[i] );
            }
        }

        return _arry;
    },
    
    removeWithoutCopy : function(arr, item) {
        var i=0, 
            len = arr.length;

        while( i < len ) {
            if( arr[i] == item ) {
                arr.splice(i, i+1);
                len--;
            }
            i++;
        } 

        return arr;
    },

    append : function(arr, item) {
        arr.push( item );
        return arr;
    },

    truncate : function(arr) {
        arr.splice( -1 );
        return arr;
    },

    concat : function(arr1, arr2) {
       return arr1.concat( arr2 ); 
    },

    insert : function(arr, item, index) {
        arr.splice( index, 0, item )
        return arr;
    },

    count : function(arr, item) {
        var rst = 0;
        for( var i = 0; i < arr.length; i++){
            if( arr[i] === item ) {
                rst++;
            }
        }

        return rst;
    },

    duplicates : function(arr) {
        var hsh = {}, 
            rst = [];

        for( var i = 0; i < arr.length; i++){
            if( !hsh[ arr[i] ] ) {
                hsh[ arr[i] ] =  1;
            } else {
                rst.push( arr[i] );
            }
        }

        return rst;
    },

    square : function(arr) {
        for( var i = 0; i < arr.length; i++){
            arr[i] = arr[i] * arr[i];
        }

        return arr;

    },

    findAllOccurrences : function(arr, target) {
        var rst = [];
        for( var i = 0; i < arr.length; i++){
            if( arr[i] == target ) {
                rst.push( i );
            }
        }

        return rst;

    }
  };
});
