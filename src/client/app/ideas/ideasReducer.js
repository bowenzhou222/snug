import {
  GET_IDEAS, GET_NEW_IDEA, UPDATE_NEW_IDEA, DELETE_IDEA
} from './ideasActions';


const ideasReducer = (state = {
  objects: [],
  focusedIdea: null,
}, action) => {
  switch (action.type) {
    case GET_IDEAS:
      return Object.assign({}, state, {
        objects: action.json.ideas,
      });

    case GET_NEW_IDEA:
      console.log(action.json);
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
      });
    }

    case DELETE_IDEA: {
      const objects = state.objects.slice();
      const index = objects.indexOf(objects[objects.findIndex(idea => idea.id === action.json.id)]);
      objects.splice(index, 1);
      return Object.assign({}, state, {
        objects: objects,
      });
    }

    default:
      return state;
  }
};

export default ideasReducer;