Meteor.methods({
    sendMessage(text, conversation) {
        //add the message to the message dataset
        Messages.insert({
            time: new Date,
            text: text,
            author: Meteor.user().username,
            conversation: conversation
        });
    },
    addConversation(user1, user2) {
        //user1 id is less than user2 id
        if (user1 && user2) {
            if (user1 > user2) {
                [user1, user2] = [user2, user1];
            }
            if (Conversations.find({user1: user1, user2: user2}).count() === 0) {
                //no conversation yet
                Conversations.insert({
                    user1: user1,
                    user2: user2,
                    user1_typing: false,
                    user2_typing: false
                });
            }
        }
    }
});