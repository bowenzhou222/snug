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
      focused: false,
      bodyFocused: false,
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

  componentDidMount() {
    this.setState({
      focused: this.props.focused,
    });
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
    this.setState({
      bodyBorderStyle: '1px solid gray',
      bodyFocused: true,
    });
  }

  titleOnBlur() {
    this.setState({
      titleBorderStyle: 'none',
      focused: false,
    });
    if (this.state.title !== undefined) {
      this.updateIdeaTitle(this.state.title);
    }
    setTimeout(() => {
      this.props.removeNotification();
    }, 3000);
  }

  bodyOnBlur() {
    this.setState({
      bodyBorderStyle: 'none',
      bodyFocused: false,
    });
    if (this.state.body !== undefined) {
      this.updateIdeaBody(this.state.body);
    }
    setTimeout(() => {
      this.props.removeNotification();
    }, 3000);
  }

  changeTitle(e, v) {
    this.setState({ title: v });
  }

  changeBody(e, v) {
    this.setState({
      body: v,
      bodyLength: v.length,
    });
  }

  render() {
    const focuseTitle = input => {
      input && input.focus();
    }
    let characterLength = 0;
    if (this.state.bodyLength !== undefined) {
      characterLength = this.state.bodyLength;
    } else if (this.props.body !== undefined) {
      characterLength = this.props.body.length;
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
          <div style={{fontSize: 8}}>{this.props.id}</div>
          <div style={{fontSize: 8}}>{this.props.createdDate}</div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              paddingTop: '-12px',
            }}
          >
            <TextField
              inputStyle={{
                fontSize: 10,
                fontWeight: 'bold',
              }}
              style={{
                width: '50%',
                border: 'none',
                border: this.state.titleBorderStyle,
              }}
              defaultValue={this.props.title}
              id={this.props.id.toString()}
              underlineShow={false}
              multiLine={true}
              ref={this.state.focused === true ? focuseTitle : null}
              onFocus={this.titleOnFocus}
              onChange={this.changeTitle}
              onBlur={this.titleOnBlur}
            />
          </div>
          <IconButton
            onClick={(e) => {
              this.props.deleteIdea(this.props.id);
            }}
          >
            <Delete />
          </IconButton>
        </div>
        <div
          style={{
            paddingTop: '-12px',
          }}
        >
          <TextField
            inputStyle={{
              fontSize: 10,
            }}
            style={{
              width: 'auto',
              border: this.state.bodyBorderStyle,
              lineHeight: '12px',
            }}
            defaultValue={this.props.body}
            id={this.props.id.toString()}
            underlineShow={false}
            multiLine={true}
            onFocus={this.bodyOnFocus}
            onChange={this.changeBody}
            onBlur={this.bodyOnBlur}
            maxLength="140"
            rowsMax={2}
          />
        </div>
        <div
          style={{
            display: (characterLength >= 125 && this.state.bodyFocused) ? 'block' : 'none',
            fontSize: 8,
          }}
        >
          {`${140-characterLength} characters remained`}
        </div>
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
  removeNotification: PropTypes.func,
};

export default Idea;
