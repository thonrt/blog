"use strict";
import React from 'react'
import ReactDom from 'react-dom'
import Routes from './router.js'

import './css/style.css'
import './css/sweetalert.css'
import './css/blog.css'  // 引入样式文件


ReactDom.render((
  <Routes/>
),document.getElementById('blog')
)
