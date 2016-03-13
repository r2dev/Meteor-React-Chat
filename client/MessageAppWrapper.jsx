MessageAppWrapper = React.createClass({
    getInitialState() {
        return {
            selectedConversation: null
        }
    },
    handleConversationChange(conversationId) {
        this.setState({
            selectedConversation: conversationId
        });
    },
    render() {
        return (
            <div className="message-app">
                <AccountWrapper />
                <hr />
                <SearchBox/>
                <hr />
                <ConversationList handleConversationItemClick={this.handleConversationChange} />
                <hr />
                {this.state.selectedConversation ? <MessageList currentConversation={this.state.selectedConversation}/> : null}                
            </div>
            )
    }
});