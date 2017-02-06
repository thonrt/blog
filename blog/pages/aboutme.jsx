import React from 'react';

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
                            <img alt="image" className="img-responsive" src="images/user.jpg" />
                        </div>
                        <div className="ibox-content profile-content">
                            <h4><strong>Bella-Duan</strong></h4>
                            <p><i className="fa fa-map-marker"></i> 深圳市福田东海国际中心A座7L</p>
                            <h5>
                                    关于我
                                </h5>
                            <ul>
                              <li>会点前端技术，div+css啊，jQuery之类的，不是很精；</li>
                              <li>热爱生活，热爱互联网，热爱新技术；有一个小的团队，在不断的寻求新的突破</li>
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
