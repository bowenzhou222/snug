import React from 'react';
import PropTypes from 'prop-types';
import blueprint from 'blueprint';
import RaisedButton from 'material-ui/RaisedButton';
import Sticky from 'react-stickynode';

class Ideas extends React.Component {
  constructor(props) {
    super(props);
    this.addNewIdea = this.addNewIdea.bind(this);
  }

  componentDidMount() {
    this.props.getIdeas();
  }

  addNewIdea() {
    this.props.getNewIdea();
  }

  render() {
    const ideas = this.props.ideas;
    const Idea = blueprint.idea;
    const focusedIdea = this.props.focusedIdea;
    console.log(focusedIdea);
    return (
      <div
        style={{
          width: `${window.innerWidth*0.8}px`,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: window.innerWidth*0.8,
          }}
        >
          <Sticky>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'white',
              }}
            >
              <RaisedButton
                label="Add new idea"
                onClick={(e) => {
                  this.addNewIdea(e);
                }}
              />
            </div>
          </Sticky>
        </div>
        {ideas.map((idea) => {
          return (
            <div
              key={idea.id}
            >
              <Idea
                key={idea.id}
                id={idea.id}
                createdDate={idea.created_date}
                title={idea.title}
                body={idea.body}
                focused={idea.id === focusedIdea ? true : false}
              />
            </div>
          )
        })}
      </div>
    );
  }
}

Ideas.propTypes = {
  ideas: PropTypes.array,
};

export default Ideas;
