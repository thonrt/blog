import React from 'react';
import userImg from "../../statics/images/user.jpg"

export default class AboutMe extends React.Component{

  render(){
    return(
    <div className="col-sm-8">
                <div className="ibox float-e-margins">
                    <div className="ibox-title">
                        <h5>个人资料</h5>
                    </div>
                    <div>
                        <div className="ibox-content no-padding border-left-right">
                            <img alt="image" className="img-responsive" src={userImg} />
                        </div>
                        <div className="ibox-content profile-content">
                            <h4><strong>Bella-Duan</strong></h4>
                            <p><i className="fa fa-map-marker"></i> 深圳市福田东海国际中心A座7L</p>
                            <h5>
                                    关于我
                                </h5>
                            <ul>
                              <li>熟悉W3C标准，熟练掌握html+css，对表现与数据分离、Web语义化等有深刻理解</li>
                              <li>熟练掌握Ajax,JavaScript,Jquery等前端技术。掌握前端面向对象编程思想</li>
                              <li>熟练使用backbone前端框架，了解react,vue等前端主流框架</li>
                              <li>了解网页seo,熟悉页面架构和性能优化</li>
                              <li>了解nodejs模块的使用</li>
                            </ul>
                            <div className="user-button">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <button type="button" className="btn btn-primary btn-sm btn-block"><i className="fa fa-envelope"></i> 发送消息</button>
                                    </div>
                                    <div className="col-sm-6">
                                        <button type="button" className="btn btn-default btn-sm btn-block"><i className="fa fa-coffee"></i> 赞助</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}
