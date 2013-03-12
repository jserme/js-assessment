if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
       var rst = [];
       for(var key in data ) {
          if( key == 'files' ) {
              for(var i = 0; i < data[key].length; i++ ) {
                  if( typeof data[key][i] == 'object' ) {
                    if( data.dir == dirName ) { //从自己的一级开始，不再传dirName
                        dirName = null;
                    }
                    rst = rst.concat( this.listFiles( data[key][i], dirName ) );
                  } else {
                    if( !dirName || ( data.dir == dirName) ) {
                        rst.push( data[key][i] );
                    }
                  }
              }
          }
       } 

       return rst;
    },

    permute: function(arr) {
        var rst = [], cur, innerRst;
        if( arr.length == 1 ) {
            return arr;
        } else if( arr.length == 2 ) {
            return [[arr[0], arr[1]], [arr[1], arr[0]] ];
        } else {
            for( var i = 0; i < arr.length; i++){
                 cur = arr[i]; 
                 arr.splice(i, 1); //注意splice的第二个参数是数量，而不是结束的索引
                 innerRst = this.permute( arr );
                 for(var j = 0; j < innerRst.length; j++ ) {
                     innerRst[j].unshift(cur);
                     rst.push( innerRst[j] );
                 }

                 arr.splice(i, 0, cur);
            }
        }

        return rst;
    }
  };
});
