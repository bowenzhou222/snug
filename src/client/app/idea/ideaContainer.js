import { connect } from 'react-redux';
import { getNewideas, updateIdea, deleteIdea, removeNotification } from '../ideas/ideasActions';

const mapStateToProps = (state) => {
  const newState = {
    ideas: state.ideas.objects,
  };
  return newState;
};

const mapDispatchToProps = dispatch => ({
  updateIdea: (id, title, body) => {
    dispatch(updateIdea(id, title, body));
  },

  deleteIdea: (id) => {
    dispatch(deleteIdea(id));
  },

  removeNotification: () => {
    dispatch(removeNotification());
  },
});

const ideaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default ideaContainer;
