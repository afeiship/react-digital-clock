import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactDigitalNumeric from 'react-digital-numeric';
import NxDate from 'next-date';

const ampm = ['上午', '下午'];
const weeks = [
  '周一',
  '周二',
  '周三',
  '周四',
  '周五',
  '周六',
  '周日',
];

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
  };
  /*===properties end===*/

  get ampm() {
    const { date } = this.state;
    return (date.getHours() > 12)|0;
  }

  get day() {
    const { date } = this.state;
    return date.getDay();
  }

  constructor(inProps) {
    super(inProps);
    this.state = {
      date: NxDate.create(inProps.value)
    };
  }

  componentDidMount() {
    this.attachInteval();
  }

  componentWillUnmount() {
    clearInterval(this._timer);
    this._timer = null;
  }

  attachInteval() {
    this._timer = setInterval(() => {
      const { date } = this.state;
      this.setState({
        date: NxDate.create(date.getTime() + 1000)
      })
    }, 1e3);
  }

  render() {
    const { className, ...props } = this.props;
    const { date } = this.state;
    const _value = NxDate.format(date, 'HH:mm:ss');
    return (
      <div className={classNames('light react-digital-clock', className)}>
        <div className="display">
          <div className="weekdays">
            {
              weeks.map((item, index) => {
                return (
                  <span className={classNames({ 'active': index === (this.day - 1) })} key={index}>{item}</span>
                )
              })
            }
          </div>
          <div className="ampm">{ ampm[this.ampm] }</div>
          <div className="alarm"></div>

          <div className="body">
            <ReactDigitalNumeric flat value={_value} />
          </div>

        </div>
      </div>
    );
  }
}
