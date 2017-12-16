import React from 'react';
import { connect } from 'react-redux';
import { clearAllAlerts } from '../actions/alert_actions';



class AlertBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isVisible: false };
  }

  componentWillReceiveProps(newProps) {
    if (newProps.isVisible !== this.state.isVisible) {
      this.setState({ isVisible: !this.state.isVisible });
    }
  }


  render() {
    const { isVisible } = this.state;

    return(
      <div className={ isVisible ? 'alert-bar' : 'alert-bar cleared' }>
        <div>
          <i className="fa fa-check" aria-hidden="true"></i>
          <ul>
            {this.props.alerts}
          </ul>
        </div>
        <i
          className="fa fa-times"
          aria-hidden="true"
          onClick={this.props.clearAllAlerts}></i>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  alerts: state.alerts
});

const mapDispatchToProps = dispatch => ({
  clearAllAlerts: () => dispatch(clearAllAlerts())
});

export default connect(mapStateToProps, mapDispatchToProps)(AlertBar);
