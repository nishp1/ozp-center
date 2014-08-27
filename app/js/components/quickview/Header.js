/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var IconRating = require('react-icon-rating');
var ListingActions = require('../../actions/ListingActions');
var launch = ListingActions.launch;
var bookmark = ListingActions.bookmark;

var QuickviewHeader = React.createClass({

    propTypes: {
        listing: React.PropTypes.object,
        onCancel: React.PropTypes.func.isRequired
    },

    render: function () {
        var listing = this.props.listing;
        var title = listing.title();
        var avgRate = listing.avgRate();
        var image = listing.imageSmallUrl();

        /* jshint ignore:start */
        return (
            <div className="quickview-header">
                <div className="quickview-header-info">
                    <button type="button" className="close" aria-hidden="true" onClick={ this.props.onCancel }>×</button>
                    <img className="listing-icon" src={ image } data-fallback="/store/images/types/3" />
                    <h3 className="listing-title" title={ title }>{ title }</h3>
                    <IconRating
                        className="icon-rating"
                        viewOnly
                        currentRating = { avgRate }
                        toggledClassName="fa fa-star"
                        untoggledClassName="fa fa-star-o"
                        halfClassName="fa fa-star-half-o" />
                </div>
                <div className="quickview-header-actions">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary" onClick={ this.launch }>Launch</button>
                        <button type="button" className="btn btn-default" onClick={ this.bookmark }><i className="fa fa-bookmark"></i></button>
                    </div>
                </div>
            </div>
        );
        /* jshint ignore:end */
    },

    launch: function () {
        launch(this.props.listing);
    },

    bookmark: function () {
        bookmark(this.props.listing);
    }

});

module.exports = QuickviewHeader;