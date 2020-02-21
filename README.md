# react-digital-clock
> A beautiful digital clock for react.

## installation
```shell
npm install -S @feizheng/react-digital-clock
```

## update
```shell
npm update @feizheng/react-digital-clock
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| value     | string | -       | Default value.                        |
| onChange  | func   | -       | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-digital/dist/style.scss";
  @import "~@feizheng/react-digital-numeric/dist/style.scss";
  @import "~@feizheng/react-digital-clock/dist/style.scss";

  // customize your styles:
  $react-digital-clock-options: ()
  ```
2. import js
  ```js
  import ReactDigitalClock from '@feizheng/react-digital-clock';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import './assets/style.scss';

  class App extends React.Component {
    componentDidMount() {}
    render() {
      return (
        <div className="app-container">
          <ReactDigitalClock value="2018-06-23 11:03:11" />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-digital-clock/
