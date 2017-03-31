import React from 'react';

export default class AboutMe extends React.Component{

  render(){
    return(
    <div className="col-sm-12">
        <div className="ibox-content">
            <div className="simditor">
                <div className="simditor-wrapper">
                    <div className="simditor-toolbar" >
                        <ul>
                            <li>
                                <a tabindex="-1" unselectable="on" className="toolbar-item toolbar-item-bold" href="javascript:;" title="加粗文字 ( Ctrl + b )">
                                    <span className="fa fa-bold"></span>
                                </a>
                            </li>
                            <li>
                                <a tabindex="-1" unselectable="on" className="toolbar-item toolbar-item-italic" href="javascript:;" title="斜体文字 ( Ctrl + i )">
                                    <span className="fa fa-italic"></span>
                                </a>
                            </li>
                            <li><a tabindex="-1" unselectable="on" className="toolbar-item toolbar-item-underline" href="javascript:;" title="下划线文字 ( Ctrl + u )"><span className="fa fa-underline"></span></a></li>
                            <li><a tabindex="-1" unselectable="on" className="toolbar-item toolbar-item-strikethrough" href="javascript:;" title="删除线文字"><span className="fa fa-strikethrough"></span></a></li>
                            <li>
                                <span className="separator"></span>
                            </li>
                            <li>
                                <a tabindex="-1" unselectable="on" className="toolbar-item toolbar-item-ol" href="javascript:;" title="有序列表 ( ctrl + / )">
                                    <span className="fa fa-list-ol"></span>
                                </a>
                            </li>
                            <li>
                                <a tabindex="-1" unselectable="on" className="toolbar-item toolbar-item-ul" href="javascript:;" title="无序列表 ( Ctrl + . )">
                                    <span className="fa fa-list-ul"></span>
                                </a>
                            </li>
                            <li>
                                <a tabindex="-1" unselectable="on" className="toolbar-item toolbar-item-blockquote" href="javascript:;" title="引用">
                                    <span className="fa fa-quote-left"></span>
                                </a>
                            </li>
                            <li>
                                <a tabindex="-1" unselectable="on" className="toolbar-item toolbar-item-code" href="javascript:;" title="插入代码">
                                    <span className="fa fa-code"></span>
                                </a>
                            </li>
                            <li>
                                <span className="separator"></span>
                            </li>
                            <li>
                                <a tabindex="-1" unselectable="on" className="toolbar-item toolbar-item-link" href="javascript:;" title="插入链接">
                                    <span className="fa fa-link"></span>
                                </a>
                            </li>
                            <li>
                                <a tabindex="-1" unselectable="on" className="toolbar-item toolbar-item-image" href="javascript:;" title="插入图片">
                                    <span className="fa fa-picture-o"></span>
                                </a>
                            </li>
                            <li>
                                <span className="separator"></span>
                            </li>
                            <li>
                                <a tabindex="-1" unselectable="on" className="toolbar-item toolbar-item-indent" href="javascript:;" title="向右缩进 (Tab)">
                                    <span className="fa fa-indent"></span>
                                </a>
                            </li>
                            <li>
                                <a tabindex="-1" unselectable="on" className="toolbar-item toolbar-item-outdent" href="javascript:;" title="向左缩进 (Shift + Tab)">
                                    <span className="fa fa-outdent"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="simditor-placeholder" >这里输入内容</div>
                    <div className="simditor-body" contenteditable="true">
                        <p>Simditor 是团队协作工具 <a href="http://tower.im" target="_blank">Tower</a> 使用的富文本编辑器。</p>
                        <p> </p>
                        <p>相比传统的编辑器它的特点是：</p>
                        <p> </p>
                        <ul>
                            <li>功能精简，加载快速</li>
                            <li>输出格式化的标准 HTML</li>
                            <li>每一个功能都有非常优秀的使用体验</li>
                        </ul>
                        <p> </p>
                        <p>兼容的浏览器：IE10+、Chrome、Firefox、Safari。</p>
                    </div>
                </div>
                <textarea id="editor" placeholder="这里输入内容" autofocus="">                            &lt;p&gt;Simditor 是团队协作工具 &lt;a href="http://tower.im" target="_blank"&gt;Tower&lt;/a&gt; 使用的富文本编辑器。&lt;/p&gt;
                            &lt;p&gt;相比传统的编辑器它的特点是：&lt;/p&gt;
                            &lt;ul&gt;
                                &lt;li&gt;功能精简，加载快速&lt;/li&gt;
                                &lt;li&gt;输出格式化的标准 HTML&lt;/li&gt;
                                &lt;li&gt;每一个功能都有非常优秀的使用体验&lt;/li&gt;
                            &lt;/ul&gt;
                            &lt;p&gt;兼容的浏览器：IE10+、Chrome、Firefox、Safari。&lt;/p&gt;
                        </textarea>
                <div tabindex="-1" contenteditable="true" className="simditor-paste-area" ></div>
                <textarea tabindex="-1" className="simditor-clean-paste-area"></textarea>
                <div className="simditor-popover code-popover">
                    <div className="code-settings">
                        <div className="settings-field">
                            <select className="select-lang">
                                <option value="-1">选择程序语言</option>
                                <option value="bash">Bash</option>
                                <option value="c++">C++</option>
                                <option value="cs">C#</option>
                                <option value="css">CSS</option>
                                <option value="erlang">Erlang</option>
                                <option value="less">Less</option>
                                <option value="scss">Sass</option>
                                <option value="diff">Diff</option>
                                <option value="coffeeScript">CoffeeScript</option>
                                <option value="html">Html,XML</option>
                                <option value="json">JSON</option>
                                <option value="java">Java</option>
                                <option value="js">JavaScript</option>
                                <option value="markdown">Markdown</option>
                                <option value="oc">Objective C</option>
                                <option value="php">PHP</option>
                                <option value="perl">Perl</option>
                                <option value="python">Python</option>
                                <option value="ruby">Ruby</option>
                                <option value="sql">SQL</option>
                            </select>
                        </div>
                    </div>
                </div>
               
                <div className="simditor-popover link-popover">
                    <div className="link-settings">
                        <div className="settings-field">
                            <label></label>
                            <input className="link-text" type="text" />
                            <a className="btn-unlink" href="javascript:;" title="" tabindex="-1"><span className="fa fa-unlink"></span></a>
                        </div>
                        <div className="settings-field">
                            <label></label>
                            <input className="link-url" type="text" />
                        </div>
                    </div>
                </div>
                <div className="simditor-popover image-popover">
                    <div className="link-settings">
                        <div className="settings-field">
                            <label></label>
                            <input className="image-src" type="text" tabindex="1" />
                        </div>
                        <div className="settings-field">
                            <label></label>
                            <input className="image-size" id="image-width" type="text" tabindex="2" />
                            <span className="times">×</span>
                            <input className="image-size" id="image-height" type="text" tabindex="3" />
                            <a className="btn-restore" href="javascript:;" title="" tabindex="-1">
                                <span className="fa fa-reply"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
