const AWS=require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region : 'us-west-1'});

exports.handler = function (event,context,callback){
  console.log(event)
  var params = {
    Item: {
      date: Date.now(),
      message: event.message
    },
    TableName: 'sistemas'
  };
  docClient.put(params,function(err,data){
    if(err){
      callback(err,null);
    }else{
      callback(null,data);
    }
  });
};
