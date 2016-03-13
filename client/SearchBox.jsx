SearchBox = React.createClass({
    getInitialState() {
        return {
            searchTerm: "",
            searchResult: []
        }
    },
    handleSearchChange(e) {
        this.setState({searchTerm: e.target.value}, () => {
            if (this.state.searchTerm.trim() != "") {
            //search
                this.setState({searchResult: UsersIndex.search(this.state.searchTerm.trim()).fetch()})
            } else {
                this.setState({searchResult: []})
            }
        })
    },
    renderResult() {
            return this.state.searchResult.map((resultItem) => {
                if (resultItem._id == Meteor.userId()) {
                    return null
                } else {
                    return <ResultItem key={resultItem._id} result={resultItem} />
                }
            })
    },
    render() {
        return (
            <div className="search">
                <input type="text" onChange={this.handleSearchChange} value={this.state.searchTerm} placeholder="Search User" />
                <ul className="search-result-list">
                    {this.renderResult()}
                </ul>
            </div>
            )
    }
});