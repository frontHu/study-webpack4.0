import jquery from 'jquery'
import moment from 'moment'
// import 'moment/locale/zh-cn'
moment.locale('zh-cn')
let d = moment().endOf('day').fromNow()

document.body.innerHTML = d