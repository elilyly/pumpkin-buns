import React, {Component} from 'react'
import { Image } from 'semantic-ui-react'

var pics = [
  "https://s-media-cache-ak0.pinimg.com/originals/0d/ec/5d/0dec5ddc343ea399c9f7c7df8ab3e94e.jpg",
  "http://images2.fanpop.com/images/photos/5600000/Addams-Family-Cousin-Itt-addams-family-5684028-356-288.jpg",
  "https://3.bp.blogspot.com/--pwwqhVGhRI/WAiVDCjlscI/AAAAAAAAkE8/zjenVXpYoOYYb67laV_EB27fXTL3RxHFwCLcB/s1600/Vintage%2BFunny%2BHalloween%2BCostumes%2B%25281%2529.jpg",
  "https://i.imgur.com/wYCMHeP.jpg",
  "https://i.pinimg.com/736x/29/f0/14/29f0142d30b7a21487b9059bdb23eb4f--halloween-retro-vintage-halloween-costumes.jpg",
  "https://i.imgflip.com/i49qb.jpg",
  "https://cdn.cliqueinc.com/posts/206101/the-best-celebrity-costumes-inspired-by-pop-culture-1945411-1476922295.480x480uc.jpg",
  "http://68.media.tumblr.com/tumblr_lty8qdAo0d1qzfsnio2_1280.jpg",
  "https://media.giphy.com/media/5V2P81RlyyuXe/giphy.gif",
  "https://i.pinimg.com/736x/b2/f8/7b/b2f87b99606659c681ff4ecf973f28b2--boo-costume-couple-costume.jpg",
  "http://cdn4.thr.com/sites/default/files/2014/10/Maleficent_a_l.jpg",
  "https://i.pinimg.com/736x/17/1e/b1/171eb1dcdb08995fcf402d1c280ce764--pulp-fiction-costume-ideas.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/b1/4a/d5/b14ad527dca18b2008d5c16a9475f4e2.jpg",
  "https://media1.popsugar-assets.com/files/thumbor/3nz9HeStdOOTYy5nrLvITbDRSSI/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2015/07/24/807/n/1922441/547a02c27e0e9411_10514032_1614310408810669_973078222_n/i/Up.jpg",
  "https://inhabitat.com/greenhalloweencontest/wp-content/blogs.dir/7/files/2011/11/9.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/ae/62/f7/ae62f7a196ef23018f4c7004fcca4107.jpg",
  "https://static.boredpanda.com/blog/wp-content/uploads/2014/10/pet-halloween-costume-291__605.jpg",
  "http://www.awesomelycute.com/gallery/2014/10/best-animal-halloween-customes-10-10-2014-27.jpg",
  "https://s-media-cache-ak0.pinimg.com/originals/d7/11/0c/d7110ca353457753fb76d0a0438aac05.jpg",
  "http://www.buzznet.com/wp-content/uploads/sites/12/2014/10/msg-14128737270756.jpg",
  "http://travaasa.com/blog/wp-content/uploads/2014/10/Chicken-Horse-Halloween.jpg",
  "http://www.sickchirpse.com/wp-content/uploads/2013/11/Snakes-In-Hats-16.jpg",
  "http://wblm.com/files/2015/10/Star-Wars-lizard-630x395.jpg"
]

class Costumes extends Component {
  constructor(props){
    super(props)
  }
  
  render() {
    var rand = Math.floor((Math.random() * pics.length));

    return(
      <div>
        <Image id='image' src={pics[rand]}/>
      </div>
    )
  }
}
export default Costumes
