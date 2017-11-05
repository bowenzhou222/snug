import { connect } from 'react-redux';
import { getIdeas, getNewIdea, initSortType, changeSortType, setLocalSortType } from './ideasActions';

const mapStateToProps = (state) => {
  const newState = {
    ideas: state.ideas.objects,
    focusedIdea: state.ideas.focusedIdea,
    sortType: state.ideas.sortType,
    showNotification: state.ideas.showNotification,
  };
  return newState;
};

const mapDispatchToProps = dispatch => ({
  getIdeas: () => {
    dispatch(getIdeas());
  },

  getNewIdea: () => {
    dispatch(getNewIdea());
  },

  initSortType: () => {
    dispatch(initSortType());
  },

  changeSortType: (sortType) => {
    dispatch(changeSortType(sortType));
  },

  setLocalSortType: (sortType) => {
    setLocalSortType(sortType);
  },
});

const ideasContainer = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default ideasContainer;
