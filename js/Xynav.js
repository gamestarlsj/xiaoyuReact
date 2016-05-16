/**
 * Created by Administrator on 2016/5/5.
 */
var style = require("../css/nav.css");


var Xynav = React.createClass({
    render:function(){
        return (
          <div id="Xynav">
              <img src={this.props.XynavUri} />
              <span>{this.props.title}</span>
          </div>
        )
    }
})

module.exports = Xynav;