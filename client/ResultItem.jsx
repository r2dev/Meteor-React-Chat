ResultItem = React.createClass({
    handleClick() {
        Meteor.call("addConversation", Meteor.userId(), this.props.result._id)
    },
    render() {
        return <li onClick={this.handleClick}> {this.props.result.username} </li>
    }
});