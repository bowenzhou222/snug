import React from 'react';
import PropTypes from 'prop-types';
import blueprint from 'blueprint';
import RaisedButton from 'material-ui/RaisedButton';
import Sticky from 'react-stickynode';
import Select from 'react-select';

class Ideas extends React.Component {
  constructor(props) {
    super(props);
    this.addNewIdea = this.addNewIdea.bind(this);
  }


  componentDidMount() {
    this.props.initSortType();
    this.props.getIdeas();
  }

  addNewIdea() {
    this.props.getNewIdea();
  }

  render() {
    const ideas = this.props.ideas;
    const Idea = blueprint.idea;
    const focusedIdea = this.props.focusedIdea;
    const sortTypes = [
      { value: 'title', label: 'title' },
      { value: 'created_date', label: 'created_date' }
    ];
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            width: `${window.innerWidth*0.8}px`,
            height: '100px',
          }}
        >
          <Sticky>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
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
              <div
                style={{
                  width: '150px',
                }}
              >
                <Select
                  name="sort-list"
                  value={this.props.sortType}
                  options={sortTypes}
                  onChange={(val) => {
                    if (val !== null) {
                      this.props.setLocalSortType(val.value);
                      this.props.changeSortType(val.value);
                    }
                  }}
                />
              </div>
            </div>
          </Sticky>
        </div>
        <div
          style={{
            width: `${window.innerWidth*0.8}px`,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
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
        <div
          style={{
            display: this.props.showNotification ? 'block' : 'none',
            width: window.innerWidth*0.8,
            textAlign: 'center'
          }}
        >
          Update successful
        </div>
      </div>
    );
  }
}

Ideas.propTypes = {
  ideas: PropTypes.array,
  focusedIdea: PropTypes.number,
  sortType: PropTypes.string,
  initSortType: PropTypes.func,
  changeSortType: PropTypes.func,
  showNotification: PropTypes.bool,
};

export default Ideas;
