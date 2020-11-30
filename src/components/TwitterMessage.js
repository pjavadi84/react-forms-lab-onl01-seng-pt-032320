import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: "",
      maxChars: 280
    };
  }

  countCharacters = event => {
    if(event.target.value.length <= this.state.maxChars ){
      this.setState({
        [event.target.name]: event.target.value 
      })
    } else {
      alert("You have reached maximum character allowed")
    }
  }

  render() {
    let remainingCharacters = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.countCharacters(event)} value={this.state.message} />
        {remainingCharacters}
      </div>
    );
  }
}

export default TwitterMessage;
