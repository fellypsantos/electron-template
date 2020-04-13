import { Component } from 'react';
import { connect } from 'react-redux';

class LocalStorage extends Component {
  componentDidMount() {
    // Update Redux with Stored Values
    // dispatch({ type: 'UPDATE_USING_STORAGE', storage });
  }

  render() {
    // const { yourData } = this.props;
    // use Redux data and save to localStorage
    // localStorage.setItem(today, JSON.stringify(yourData));

    return true;
  }
}

export default connect()(LocalStorage);
