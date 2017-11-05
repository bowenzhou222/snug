import { connect } from 'react-redux';
import { getIdeas, getNewIdea } from './ideasActions';

const mapStateToProps = (state) => {
  const newState = {
    ideas: state.ideas.objects,
    focusedIdea: state.ideas.focusedIdea,
  };
  return newState;
};

const mapDispatchToProps = dispatch => ({
  getIdeas: () => {
    dispatch(getIdeas());
  },

  getNewIdea: () => {
    dispatch(getNewIdea());
  }
});

const ideasContainer = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default ideasContainer;
