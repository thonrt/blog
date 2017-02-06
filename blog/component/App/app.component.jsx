import React from 'react';


class App extends React.Component{
  render(){
    return (
      <div className="blog_app">
        {this.props.children}
      </div>
    )
  }
}
export default App
