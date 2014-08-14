/** @jsx React.DOM */
'use strict';

var React = require('react');

var IconRating = require('react-icon-rating');

var ListingTile = React.createClass({

    render: function () {
        var listing = this.props.listing;

        var name = listing.title();
        var description = listing.description() && listing.description().substr(0, 140);
        var imageLargeUrl = listing.imageLargeUrl();
        var totalVotes = listing.totalVotes();
        var avgRate = listing.avgRate();

        /*jshint ignore:start */
        return (
            <li className="listing listing-tile">
                <a href="#quickview/1">
                    <img src={ imageLargeUrl } />
                    <div className="slide-up">
                        <h5 className="title">{ name }</h5>
                        <IconRating
                            className="icon-rating"
                            viewOnly
                            currentRating = { avgRate }
                            toggledClassName="fa fa-star"
                            untoggledClassName="fa fa-star-o" />
                        <span className="rating-total">({ totalVotes })</span>
                        <p className="description">{ description }</p>
                    </div>
                </a>
            </li>
        );
        /*jshint ignore:end */
    }

});

module.exports = ListingTile;