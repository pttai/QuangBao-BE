const { Error } = require("mongoose");

class ErrorResponse {
  constructor(statusCode, message){
    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = ErrorResponse;