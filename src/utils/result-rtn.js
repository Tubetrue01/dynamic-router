// 统一处理请求的数据格式
class ResultRtn {
  code
  msg
  dataList

  constructor (code, msg, dataList) {
    this.code = code
    this.msg = msg
    this.dataList = dataList
  }

  toString () {
    return `code :  ${this.code} , msg : ${this.msg}, dataList :  ${this.dataList}`
  }
}

export default ResultRtn
