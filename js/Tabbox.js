/**
 * Created by Administrator on 2016/5/9.
 */

var style = require("../css/Tabbox.css");

var ProjectList = React.createClass({
  render:function(){
    return (
      <div className="tab_box">
        <div className="tab">
          <a className="home tab_on" href="http://172.20.90.10/Home/index/index.html">
            <i className="tab1"></i>
            <span>首页</span>
          </a>
          <a className="m_money" href="http://172.20.90.10/Home/index/moneyIndex.html">
            <i className="tab2"></i>
            <span>理财</span>
          </a>
          <a className="mine" href="http://172.20.90.10/Home/index/mineIndex.html">
            <i className="tab3"></i>
            <span>sssssss</span>
          </a>
        </div>
      </div>
    )
  }
})

module.exports = ProjectList;