ConversationList = React.createClass({
    mixins: [ReactMeteorData],
    getMeteorData() {
        //get the list from the conversation collection
        return {
            conversations: Conversations.find({$or: [{user1: Meteor.userId()}, 
                {user2: Meteor.userId()}]}).fetch()
        }
    },
    renderConversationItems() {
        return this.data.conversations.map((conversation) => {
            return <ConversationItem key={conversation._id} conversation={conversation} 
            handleClick={this.props.handleConversationItemClick.bind(null, conversation._id)}/>
        });
    },
    render() {
        return (
            <ul className="conversation-list">
                {this.renderConversationItems()}                
            </ul>
            )
    }
});