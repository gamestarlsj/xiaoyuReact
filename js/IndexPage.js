/**
 * Created by Administrator on 2016/5/13.
 */

var LoginPanel = require("./LoginPanel.js");
var ProductList = require("./ProductList.js");
var Tabbox = require("./Tabbox.js");
var Xynav = require("./Xynav.js");

var IndexPage = React.createClass({
  render:function(){
    return (
      <div>
        <Xynav XynavUri="http://172.20.0.50/xywap/Public/imgs/cun-logo1.png" title="小鱼存呗" />
        <LoginPanel LoginPanelUri="http://172.20.0.50/xywap/Public/imgs/denglu.png" />
        <ProductList rate_t="零活存" r_t1="随存随取" rate="3.50%" r_t1="七日年化收益率" ProjectListUri="http://172.20.0.50/xywap/Public/imgs/jinrb.png" />
        <ProductList rate_t="定期" r_t1="追求更高收益" rate="7.00%" r_t1="预计年化收益率" ProjectListUri="http://172.20.0.50/xywap/Public/imgs/jinrb.png" />
        <Tabbox />
      </div>
    )
  }
})

ReactDOM.render(
  <IndexPage />,
  document.getElementById("example")
)
