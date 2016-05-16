/**
 * Created by Administrator on 2016/5/9.
 */

var style = require("../css/ProjectList.css");

var ProjectList = React.createClass({

  getInitialState:function(){
    return {

      rate:""

    }
  },
  render:function(){
    return (
      <div className="ProjectListbox">
      <img src={this.props.ProjectListUri}/>
    <div className="b_c">
      <div>
      <p className="rate_t">{this.state.rate}</p>
    <p className="r_t1">{this.props.r_t1}</p>
    </div>
    <div className="textRight">
      <p className="rate">{this.props.rate}</p>
      <p className="r_t1">{this.props.r_t1}</p>
    </div>
    </div>

    </div>
    )
  },
  componentDidMount:function(){
    $.getJSON("http://172.20.0.50/xywap/Home/index/testAjax?callback=?", function(json){
      this.setState({rate:json.command})
    }.bind(this)

  );

    //$.ajax({
    //  url:"http://172.20.0.50/xywap/Home/index/testAjax",
    //  type:"POST",
    //  data:"",
    //  success: function (data) {
    //    console.log(data)
    //  },
    //  error: function (data) {
    //    console.log(data)
    //  }
   // })

  }
})

module.exports = ProjectList;