import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getData } from "../actions/index";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    if (this.props.isLoading) {
      return <div>LOADING</div>;
    }
    return (
      <div className="CharactersList_wrapper">
        {<CharacterList characters={this.props.characters} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  isLoading: state.charsReducer.isLoading
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  { getData }
)(CharacterListView);

///(
///<CharacterList characters={this.props.characters} />
///)
