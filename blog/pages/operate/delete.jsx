import React from 'react';
export default class deleteArticle extends React.Component{
  render(){
    return (
      <div className="sweet-alert showSweetAlert visible" data-custom-class="" data-has-cancel-button="false" data-has-confirm-button="true" data-allow-outside-click="false" data-has-done-function="false" data-animation="pop" data-timer="null" style={{marginTop: "-124px"}}>
        <div className="sa-icon sa-error" style={{display: "none"}}>
        <span className="sa-x-mark">
          <span className="sa-line sa-left"></span>
          <span className="sa-line sa-right"></span>
        </span>
        </div>
        <div className="sa-icon sa-warning" style={{display: "none"}}>
          <span className="sa-body"></span>
          <span className="sa-dot"></span>
        </div>
        <div className="sa-icon sa-info" style={{display: "none"}}></div>
        <div className="sa-icon sa-success" style={{display: "none"}}>
          <span className="sa-line sa-tip"></span>
          <span className="sa-line sa-long"></span>
          <div className="sa-placeholder">
        </div>
        <div className="sa-fix"></div>
        </div>
        <div className="sa-icon sa-custom" style={{display: "none"}}></div>
        <h2>欢迎使用SweetAlert</h2>
        <p style={{display: "block"}}>Sweet Alert 是一个替代传统的 JavaScript Alert 的漂亮提示效果。</p>
        <fieldset>
          <input type="text" tabindex="3" placeholder="" />
          <div className="sa-input-error"></div>
        </fieldset>
        <div className="sa-error-container">
          <div className="icon">!</div>
          <p>Not valid!</p>
        </div>
        <div className="sa-button-container">
          <button className="cancel" tabindex="2" style={{display: "none", boxShadow: "none"}}>Cancel</button>
          <button className="confirm" tabindex="1" style={{display: "inline-block", backgroundColor: "rgb(174, 222, 244)", boxShadow: "rgba(174, 222, 244, 0.8) 0px 0px 2px, rgba(0, 0, 0, 0.0470588) 0px 0px 0px 1px inset"}}>OK</button>
          </div>
        </div>
    )
  }
};
