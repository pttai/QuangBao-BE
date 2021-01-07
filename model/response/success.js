class SuccessResponse {
  constructor(code, data, success){
    this.code = code,
    this.data = data;
    this.success = success;
  }
}

module.exports = SuccessResponse;