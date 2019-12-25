/**
 * 
 * @param {Number} start 
 * @param {Number} len 
 * @param {Function} callback 
 */

function each(start,len,callback){
    for (var i = start;i<len;i++){
        callback(i);
    }
}