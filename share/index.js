import { shareToQQ, shareToQZone, shareToWeibo4Web, shareToQZone4Web } from './specifyShare'
import {
  isQQMBrowser,
  isUCMBrowser,
  isWechat,
  isBaiduMBrowser,
  isAndroid,
  isIos,
  isQQ,
  isQZone,
  isSogouMBrowser,
} from './utils'
import Share from './Share'
import QQMobileBrowser from './QQMobileBrowser'
import UCIosBrowser from './UCIosBrowser'
import UCAndroidBrowser from './UCAndroidBrowser'
import BaiduAndroidBrowser from './BaiduAndroidBrowser'
import BaiduIosBrowser from './BaiduIosBrowser'
import SogouIosBrowser from './SogouIosBrowser'
import Wechat from './Wechat'
import Others from './Others'
import QQIos from './QQIos'
import QQAndroid from './QQAndroid'
import QZone from './QZone'

let NativeShare
if (isWechat) {
  alert('isWechat')
  NativeShare = Wechat
} else if (isQQ && isIos) {
  alert('isQQ && isIos')
  NativeShare = QQIos
} else if (isQQ && isAndroid) {
  alert('isQQ && isAndroid')
  NativeShare = QQAndroid
} else if (isQZone) {
  alert('isQZone')
  NativeShare = QZone
} else if (isQQMBrowser) {
  alert('isQQMBrowser')
  NativeShare = QQMobileBrowser
} else if (isUCMBrowser && isIos) {
  alert('isUCMBrowser && isIos')
  NativeShare = UCIosBrowser
} else if (isUCMBrowser && isAndroid) {
  alert('isUCMBrowser && isAndroid')
  NativeShare = UCAndroidBrowser
} else if (isBaiduMBrowser && isAndroid) {
  alert('isBaiduMBrowser && isAndroid')
  NativeShare = BaiduAndroidBrowser
} else if (isBaiduMBrowser && isIos) {
  alert('isBaiduMBrowser && isIos')
  NativeShare = BaiduIosBrowser
} else if (isSogouMBrowser && isIos) {
  alert('isSogouMBrowser && isIos')
  NativeShare = SogouIosBrowser
} else {
  // 360 客户端做了一层校验，只能360域名，才能获取到真实的UA
  alert('other15')
  NativeShare = Others
}

export {
  Share,
  QQMobileBrowser,
  UCIosBrowser,
  UCAndroidBrowser,
  BaiduAndroidBrowser,
  BaiduIosBrowser,
  SogouIosBrowser,
  Wechat,
  Others,
  QQIos,
  QQAndroid,
  QZone,
  shareToQQ,
  shareToQZone,
  shareToWeibo4Web,
  shareToQZone4Web,
}

window.NativeShare = NativeShare
export default NativeShare
