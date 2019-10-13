import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './buttonn.css';

/**
  * @name Buttonn
  * @category Components
  * @framework React
  * @constructor
  * @description TODO add Buttonn description
  * @example
    <example name="buttonn">
      <file name="index.html">
        <div id="buttonn"></div>
      </file>

      <file name="index.js">
        import React, {PureComponent} from 'react';
        import {render} from 'react-dom';

        import Buttonn from '@jetbrains/ring-ui/components/buttonn/buttonn';

        const container = document.getElementById('buttonn');
        class ButtonnDemo extends PureComponent {
          state = {
            clicks: 0
          };

          onClick = () => this.setState(({clicks}) => ({
            clicks: clicks + 1
          }));

          render() {
            const {clicks} = this.state;

            return (
              <Buttonn onClick={this.onClick}>
                {`Buttonn (${clicks} clicks)`}
              </Buttonn>
            );
          }
        }

        render(<ButtonnDemo />, container);
      </file>
    </example>
  */

export default class Buttonn extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
  };

  render() {
    const {children, className, ...restProps} = this.props;
    const classes = classNames(styles.buttonn, className);

    return (
      <div
        {...restProps}
        className={classes}
      >
        {children}
      </div>
    );
  }
}
