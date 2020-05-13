const AWS=require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({region : 'us-west-1'});

exports.handler = function (event,context,callback){

  let ScanningParameters= {
    TableName: 'sistemas',
    Limit: 100
  };

  docClient.scan(ScanningParameters,function(err,data){
    if(err){
      callback(err,null);
    }else{
      callback(null,data);
    }
  });

  /*var params = {
  TableName: 'sistemas',
  key: {
	"date": 138369387498734
    }		
  }

  docClient.get(params,function(err,data){
    if(err){
      callback(err,null);
    }else{
      callback(null,data);
    }
  })*/
};