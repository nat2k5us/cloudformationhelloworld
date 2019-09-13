'use strict';
console.log('Loading function');
//const doc = require('dynamodb-doc');
//const dynamo = new doc.DynamoDB();
/**
 * Demonstrates a simple HTTP endpoint using API Gateway. You have full
 * access to the request and response payload, including headers and
 * status code.
 *
 * To scan a DynamoDB table, make a GET request with the TableName as a
 * query string parameter. To put, update, or delete an item, make a POST,
 * PUT, or DELETE request respectively, passing in the payload to the
 * DynamoDB API as a JSON body.
 */
exports.hello = function (event, context, callback) {
    var testData = getTestData();
    console.log(event);
    callback(null, {
        "statusCode": 200,
        "body": JSON.stringify((testData))
    });
};

function getTestData() {
    var test = ["aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg"];
    return test.sort(() => .5 - Math.random()); // random sort just to see that the data is not cached somehow
}

// exports.hello = (event, context, callback) => {
//     console.log(event);
//     switch (event.httpMethod) {
//         case 'DELETE':
//             sendResponse(200, 'Delete called', callback);
//             break;
//         case 'GET':
//             sendResponse(200, 'Get called', callback);
//             break;
//         case 'POST':
//             sendResponse(200, 'Post called', callback);
//             break;
//         case 'PUT':
//             sendResponse(200, 'Put called', callback);
//             break;
//         default:
//             done(new Error(`Unsupported method "${event.httpMethod}"`));
//     }
// };

// function sendResponse(statusCode, message, callback) {
//     const response = {
//         "statusCode": 200,
//         "body": "[\"aaa\",\"ccc\",\"ggg\",\"bbb\",\"ddd\"]"
//     }
// }