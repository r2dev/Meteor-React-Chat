MessageList = React.createClass({
    mixins: [ReactMeteorData],
    getInitialState() {
        return {
            message: null
        }
    },
    getMeteorData() {
        return {   
            //get ceonversation id from conversation list
            messages: Messages.find({conversation: this.props.currentConversation}).fetch()
        }
    },
    handleMessageChange(e) {
        this.setState({message: e.target.value});
    },
    handleMessageSend(e) {
        e.preventDefault();
        var message = this.state.message.trim();
        Meteor.call("sendMessage", message, this.props.currentConversation);
        this.setState({message: ''});
    },
    renderMessages() {
        return this.data.messages.map((message) => {
          return <Message key={message._id} message={message} />;
        });
    },
    renderForm() {
        return (
            <form onSubmit={this.handleMessageSend}>
                <input value={this.state.message} onChange={this.handleMessageChange} 
                placeholder="Type ..." name="message" />
            </form>  
            );
    },
    render() {
        return (
          <div className="message-list">
            <ul>
              {this.renderMessages()}
            </ul>
            {this.renderForm()}
          </div>
        );
    }
});