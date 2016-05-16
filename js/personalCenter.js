/**
 * Created by Administrator on 2016/5/13.
 */

var style = require("../css/personcenter.css");
var CommonNav = require("./CommonNav.js")

var PersonalCeter = React.createClass({
  render:function(){
    return (
      <div>
        <CommonNav CommonNav="http://172.20.0.50/xywap/Public/imgs/back.png" title="我" />
      </div>
    )
  }
})

ReactDOM.render(
  <PersonalCeter />,
  document.getElementById("personalCenter")
)