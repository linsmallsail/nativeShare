import { shareToQQ, shareToQZone, shareToWeibo4Web } from './specifyShare'
import { qqFriend, qZone, weibo } from './command'
import Share from './Share'

export default class Others extends Share {
  constructor(config) {
    super(config)
  }

  call(command = 'default', options) {
    this.setShareData(options)

    if (!navigator.share) {
      command = String(command).toLowerCase()
      if (command === weibo) {
        shareToWeibo4Web()
      } else {
        if (command === qqFriend) {
          shareToQQ()
        } else if (command === qZone) {
          shareToQZone()
        }
        // throw new Error(`the browser may not support command ${command}!`)
      }
      return
    }

    const shareData = this.getShareData()
    const queryObj = {
      url: shareData.link,
      title: shareData.title,
      text: shareData.desc,
    }
    
    try {
      navigator.share(queryObj).then(shareData.success).catch(shareData.fail)
    } catch (error) {
      // alert('other-catch')
    }
  }
}
