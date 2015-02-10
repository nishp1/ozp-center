'use strict';

var React = require('react');
var _Date = require('../../../shared/Date.jsx');
var Time = require('../../../shared/Time.jsx');

var PastNotification = React.createClass({
    statics: {
        fromArray: function (notifications) {
            if (notifications) {
                return notifications.map(function (notification) {
                    return <PastNotification key={notification.id} notification={notification}/>;
                });
            }
        }
    },
    render() {
        var { expiresDate, message } = this.props.notification;
        return (
            <div className="PastNotification">
                <div className="PastNotification__Header">
                    <h5 style={{margin: 0, fontWeight: 400}}>Marketplace System</h5>
                    <em>Expired: <_Date date={expiresDate} /> at <Time date={expiresDate} /></em>
                </div>
                <p>{ this.props.notification.message }</p>
            </div>
        );
    }
});

module.exports = PastNotification;
