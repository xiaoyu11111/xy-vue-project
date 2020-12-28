/*
 *获取url中的参数
 */
const GetRequest =() =>{
	var href = location.href; //获取url中"?"符后的字串
	var url = href.substring(href.indexOf('?'),href.length);
	var theRequest = new Object();
	if (url.indexOf("?") != -1) {
		var str = url.substr(1);
		var strs = str.split("&");
		for(var i = 0; i < strs.length; i ++) {
			 theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
		}
	}
	return theRequest;
}

const getMaxAndMin = (brr) => {
  var arr = []
  brr.map(t => {
  var codeArr = t.open_result.split(',')
  var num = 0
  codeArr.map(d => {num += +d})
  arr.push(num <= 22 ? '小' : '大')
  return t
  })
  var num = 1
  var newArr = []
  arr.map((a, i) => {
      if(i === 0){
       num = 1
      }
      if(a === arr[i - 1]) {
        num += 1
        newArr[i-1] = ''
      }else{
        num = 1
      }
  newArr.push({data: a + '*'+ num, qishu: brr[i].open_phase.slice(-2), time: brr[i].open_time})
  return a
  })
  return newArr.filter(d => d !== "")
}

const getMaxAndMinNum = (arr) => {
  arr = arr.map(a => a.data)
  var num = 0
  var newObj = {}
  arr.map((a, i) => {
      if(newObj[a]){
         num = newObj[a] + 1
      }else{
          num = 1
      }
      newObj[a] = num
  return a
  })
  return newObj
}

export default {
  GetRequest,
  getMaxAndMin,
  getMaxAndMinNum
}