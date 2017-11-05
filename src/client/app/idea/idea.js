import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete';


class Idea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleBorderStyle: 'none',
      bodyBorderStyle: 'none',
    };
    this.titleOnFocus = this.titleOnFocus.bind(this);
    this.bodyOnFocus = this.bodyOnFocus.bind(this);
    this.titleOnBlur = this.titleOnBlur.bind(this);
    this.bodyOnBlur = this.bodyOnBlur.bind(this);
    this.updateIdeaTitle = this.updateIdeaTitle.bind(this);
    this.updateIdeaBody = this.updateIdeaBody.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeBody = this.changeBody.bind(this);
  }

  updateIdeaTitle(title) {
    this.props.updateIdea(this.props.id, title, this.props.body !== undefined ? this.props.body : '');
  }

  updateIdeaBody(body) {
    this.props.updateIdea(this.props.id, this.props.title !== undefined ? this.props.title : '', body);
  }

  titleOnFocus() {
    this.setState({ titleBorderStyle: '1px solid gray' });
  }

  bodyOnFocus() {
    this.setState({ bodyBorderStyle: '1px solid gray' });
  }

  titleOnBlur() {
    this.setState({ titleBorderStyle: 'none' });
    if (this.state.title !== undefined) {
      this.updateIdeaTitle(this.state.title);
    }
  }

  bodyOnBlur() {
    this.setState({ bodyBorderStyle: 'none' });
    if (this.state.body !== undefined) {
      this.updateIdeaBody(this.state.body);
    }
  }

  changeTitle(e, v) {
    this.setState({ title: v });
  }

  changeBody(e, v) {
    this.setState({ body: v });
  }

  render() {
    const focuseTitle = input => {
      input && input.focus();
    }
    return (
      <div
        style={{
          width: '150px',
          height: '150px',
          margin: '10px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#42d1f4',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <div style={{fontSize: 10}}>{this.props.id}</div>
          <div style={{fontSize: 10}}>{this.props.createdDate}</div>
        </div>
        <TextField
          inputStyle={{
            fontSize: 12,
            fontWeight: 'bold',
          }}
          style={{
            width: 'auto',
            border: 'none',
            border: this.state.titleBorderStyle,
          }}
          defaultValue={this.props.title}
          id={this.props.id.toString()}
          underlineShow={false}
          multiLine={true}
          ref={this.props.focused === true ? focuseTitle : null}
          onFocus={this.titleOnFocus}
          onChange={this.changeTitle}
          onBlur={this.titleOnBlur}
        />
        <TextField
          inputStyle={{
            fontSize: 10,
          }}
          style={{
            width: 'auto',
            border: this.state.bodyBorderStyle,
            lineHeight: '15px',
          }}
          defaultValue={this.props.body}
          id={this.props.id.toString()}
          underlineShow={false}
          multiLine={true}
          onFocus={this.bodyOnFocus}
          onChange={this.changeBody}
          onBlur={this.bodyOnBlur}
          maxLength="140"
        />
        <IconButton
          onClick={(e) => {
            this.props.deleteIdea(this.props.id);
          }}
        >
          <Delete />
        </IconButton>
      </div>
    );
  }
}

Idea.propTypes = {
  id: PropTypes.number,
  createdDate: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  updateIdea: PropTypes.func,
  deleteIdea: PropTypes.func,
};

export default Idea;
