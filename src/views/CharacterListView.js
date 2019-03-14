import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import Loader from 'react-loader-spinner';
// import actions
import { getPeople } from '../actions';

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.getPeople();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return (<Loader type="Ball-Triangle" color="black" height={200} width={200}  />)
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  fetching: state.starWars.fetching,
  characters: state.starWars.characters
});

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    getPeople/* action creators go here */
  }
)(CharacterListView);
