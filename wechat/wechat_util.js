module.exports = {
  parseMessage
}

/* 

{ xml:
   { tousername: [ 'gh_046fe6f599dd' ],
     fromusername: [ 'oKZlXwJ9DQ8iYrO8xFXsX8Rh1WxM' ],
     createtime: [ '1502980247' ],
     msgtype: [ 'text' ],
     content: [ 'hi' ],
     msgid: [ '6455251007828436130' ] 
    } 
}


*/

// raw json is the value of 'xml' value
function parseMessage(rawJson) {

  var message = {};
  if(typeof rawJson === 'object'){
    var keys = Object.keys(rawJson);
    for(var i=0;i<keys.length;i++){
      var key = keys[i];
      var item = rawJson[key];
      if(!(item instanceof Array) || item.length === 0) continue;
      if (item.length === 1){
        var val = item[0];
        if (typeof val === 'object') message[key] = formatMessage(val);
        else message[key] = (val || '').trim();
      } else {
        message[key] = [];
        for(var j=0,k=item.length;j<k;j++) message[key].push(formatMessage(item[j]));
      }
    }
  }
  return message;


  /* parsed result example
  
    { tousername: 'gh_046fe6f599dd',
    fromusername: 'oKZlXwJ9DQ8iYrO8xFXsX8Rh1WxM',
    createtime: '1502980247',
    msgtype: 'text',
    content: 'hi',
    msgid: '6455251007828436130' }

  */
}