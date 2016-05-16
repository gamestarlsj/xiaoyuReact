/**
 * Created by Administrator on 2016/5/5.
 */
var style = require("../css/CommonNav.css");


var CommonNav = React.createClass({
  render:function(){
    return (
      <div id="CommonNav">
        <img src={this.props.CommonNav} />
        <span>{this.props.title}</span>
        <a className="CommonNavlink" href="http://www.baidu.com">消息</a>
      </div>
    )
  }
})

module.exports = CommonNav;