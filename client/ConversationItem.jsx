ConversationItem = React.createClass({
    mixins: [ReactMeteorData],
    propTypes: {
        conversation: React.PropTypes.object.isRequired
    },
    getMeteorData() {
        //display the username who you are talking to
        //retrieve the username from the users collection based on the id which
        //is from the current loggined user
        //I dont know it is a good pratice
        //Instead, I can get the user's name in the parent component
        ConversationUserId = (this.props.conversation.user1 === Meteor.userId()) ? this.props.conversation.user2 : this.props.conversation.user1;
        return {
            ConversationTitleUsername: Meteor.users.find({_id: ConversationUserId}).fetch()[0].username
        }        
    },    
    render() {
        return (
            <li onClick={this.props.handleClick}>{this.data.ConversationTitleUsername}</li>
            )
    }

});