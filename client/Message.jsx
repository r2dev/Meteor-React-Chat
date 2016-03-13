Message = React.createClass({
  propTypes: {
    message: React.PropTypes.object.isRequired
  },
  
  formatTime(time) {
    return moment(time).format('h:mm A');
  },
  
  render() {
    return (
      <li>{this.props.message.author}: {this.props.message.text}
       -- {this.formatTime(this.props.message.time)}</li>
    );
  }
});