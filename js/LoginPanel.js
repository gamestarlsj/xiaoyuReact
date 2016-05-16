/**
 * Created by Administrator on 2016/5/9.
 */

var style = require("../css/LoginPanel.css");

var LoginPanel = React.createClass({
  render:function(){
    return (
      <div className="box">
        <div className="login">
          <a href="/Home/Login/login.html">
            <img src={this.props.LoginPanelUri} />
              <p>登录</p>
          </a>
        </div>
      </div>
    )
  }
})

module.exports = LoginPanel;