// environment='dev' //测试
// environment='prod' //生产
const environment='prod'

var baseUrl
if(environment=='dev'){
	baseUrl="http://127.0.0.1:8080/a/rfb/"
}else if(environment=='prod'){
	baseUrl="https://ruyao.bytes-space.com/ruyao/a/rfb/"
}

export default {
	baseUrl
}