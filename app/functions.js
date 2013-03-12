if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function( str1){
            return str + ', ' + str1;
        }
    },

    makeClosures : function(arr, fn) {
       var rst = [];
       for(var i = 0; i < arr.length; i++ ){
            rst.push((function( val ){
                return function(){
                   return  fn( val );
                }
            })( arr[i]) );
       } 

       return rst;
    },

    partial : function(fn, str1, str2) {
        return function( str3 ){
            return  fn.apply(null, [str1, str2, str3]);
        }
    },

    useArguments : function() {
        var args = [].slice.call( arguments ), 
            rst;
        rst = args[0];
        for(var i = 1; i < args.length; i++ ) {
            rst += args[ i ];  
        }

        return rst;
    },

    callIt : function(fn) {
        var args = [].slice.call(arguments);
        args.shift();

        return fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
        var args = [].slice.call(arguments);
        args.shift();

        return  function(){
            var args1 = [].slice.call(arguments);
            return fn.apply(null,  args.concat( args1 ) );
        }
    },

    curryIt : function(fn) {
        var expectArgs = [],
            expectArgsLength = fn.length;
        return function innerCurry( a ){
            expectArgs.push(a);
            if( expectArgs.length < expectArgsLength ) {
               return innerCurry; 
            } else {
               return fn.apply(null, expectArgs);
            }
        }
    }
  };
});
