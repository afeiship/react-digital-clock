import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
  };
  /*===properties end===*/

  constructor(inProps) {
    super(inProps);
    this.state = {
    };
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classNames('light react-digital-clock', className)}>
        <div className="display">
          <div className="weekdays">
            <span>周一</span>
            <span>周二</span>
            <span>周三</span>
            <span>周四</span>
            <span className="active">周五</span>
            <span>周六</span>
            <span>周日</span>
          </div>
          <div className="ampm">下午</div>
          <div className="alarm"></div>
          <div className="digits">
            <div className="zero"><span className="d1"></span><span className="d2"></span><span
              className="d3"></span><span className="d4"></span><span className="d5"></span><span
                className="d6"></span><span className="d7"></span></div>
            <div className="six"><span className="d1"></span><span className="d2"></span><span
              className="d3"></span><span className="d4"></span><span className="d5"></span><span
                className="d6"></span><span className="d7"></span></div>
            <div className="dots"></div>
            <div className="two"><span className="d1"></span><span className="d2"></span><span
              className="d3"></span><span className="d4"></span><span className="d5"></span><span
                className="d6"></span><span className="d7"></span></div>
            <div className="five"><span className="d1"></span><span className="d2"></span><span
              className="d3"></span><span className="d4"></span><span className="d5"></span><span
                className="d6"></span><span className="d7"></span></div>
            <div className="dots"></div>
            <div className="two"><span className="d1"></span><span className="d2"></span><span
              className="d3"></span><span className="d4"></span><span className="d5"></span><span
                className="d6"></span><span className="d7"></span></div>
            <div className="five"><span className="d1"></span><span className="d2"></span><span
              className="d3"></span><span className="d4"></span><span className="d5"></span><span
                className="d6"></span><span className="d7"></span></div>
          </div>
        </div>
      </div>
    );
  }
}
