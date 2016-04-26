import React, { Component, PropTypes } from 'react';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

const propTypes = {
  date: PropTypes.number,
  onChange: PropTypes.func,
};

class TaskDate extends Component {
  constructor(props) {
    super(props);
    this.handleOnchange = this.handleOnchange.bind(this);
  }

  handleOnchange(e) {
    const { onChange } = this.props;
    onChange(e.target.value);
  }

  render() {
    const { date } = this.props;
    return (
      <DatePicker
        value={new Date(date)}
        onChange={this.handleOnchange}
        hintText="Task due date"
      />
    );
  }
}

TaskDate.propTypes = propTypes;

export default TaskDate;
