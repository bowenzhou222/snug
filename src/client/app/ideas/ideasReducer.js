import {
  GET_IDEAS, GET_NEW_IDEA, UPDATE_NEW_IDEA, DELETE_IDEA, SORT, REMOVE_NOTIFICATION
} from './ideasActions';

import _ from 'lodash';

const ideasReducer = (state = {
  objects: [],
  focusedIdea: null,
  sortType: null,
  showNotification: false,
}, action) => {
  switch (action.type) {
    case GET_IDEAS: {
      let objects = action.json.ideas.slice();
      if (state.sortType !== null) {
        objects = _.sortBy(objects, state.sortType);
      }
      return Object.assign({}, state, {
        objects: objects,
      });
    }

    case GET_NEW_IDEA:
      return Object.assign({}, state, {
        objects: state.objects.concat(action.json.new_idea),
        focusedIdea: action.json.new_idea.id,
      });

    case UPDATE_NEW_IDEA: {
      const objects = state.objects.slice();
      const idea = objects[objects.findIndex(idea => idea.id === action.json.id)];
      idea.title = action.json.title;
      idea.body = action.json.body;
      return Object.assign({}, state, {
        objects: objects,
        showNotification: true
      });
    }

    case DELETE_IDEA: {
      const objects = state.objects.slice();
      const index = objects.indexOf(objects[objects.findIndex(idea => idea.id === action.json.deletedIdea.id)]);
      objects.splice(index, 1);
      return Object.assign({}, state, {
        objects: objects,
      });
    }

    case SORT: {
      let objects = state.objects.slice();
      objects = _.sortBy(objects, action.sortType);
      return Object.assign({}, state, {
        objects: objects,
        sortType: action.sortType,
      });
    }

    case REMOVE_NOTIFICATION:
      return Object.assign({}, state, {
        showNotification: false
      });

    default:
      return state;
  }
};

export default ideasReducer;