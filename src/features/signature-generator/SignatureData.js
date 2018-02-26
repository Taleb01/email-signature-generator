import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class SignatureData extends Component {
  static propTypes = {
    signatureGenerator: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  hideResult = () => {
    if (this.props.signatureGenerator.showResult) {
      this.props.actions.hideResult();
    }
  };

  render() {
    return (
      <div className="signature-generator-signature-data">
        <h1>Signature Generator</h1>
        <div className="signature-generator-form">
          <div className="data-a">
            <div className="form-name">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                onChange={e => {
                  this.props.actions.setName(e.target.value);
                  this.hideResult();
                }}
              />
            </div>

            <div className="form-title">
              <label htmlFor="title">Title: </label>
              <input
                type="text"
                id="title"
                onChange={e => {
                  this.props.actions.setTitle(e.target.value);
                  this.hideResult();
                }}
              />
            </div>

            <div className="form-phone">
              <label htmlFor="phone">Phone: </label>
              <input
                type="tel"
                id="phone"
                onChange={e => {
                  this.props.actions.setPhone(e.target.value);
                  this.hideResult();
                }}
              />
            </div>
          </div>

          <div className="data-b">
            <div className="form-email">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                onChange={e => {
                  this.props.actions.setEmail(e.target.value);
                  this.hideResult();
                }}
              />
            </div>

            <div className="form-linked-in">
              <label htmlFor="linkedIn">LinkedIn: </label>
              <input
                type="text"
                id="linkedIn"
                onChange={e => {
                  this.props.actions.setLinkedIn(e.target.value);
                  this.hideResult();
                }}
              />
            </div>

            <div className="form-twitter">
              <label htmlFor="twitter">Twitter: </label>
              <input
                type="text"
                id="twitter"
                onChange={e => {
                  this.props.actions.setTwitter(e.target.value);
                  this.hideResult();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    signatureGenerator: state.signatureGenerator,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignatureData);
