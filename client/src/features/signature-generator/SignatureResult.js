import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export class SignatureResult extends Component {
  static propTypes = {
    signatureGenerator: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  renderText() {
    return `<table
        border="0"
        cellpadding="0"
        cellspacing="0"
        style="color:rgb(52,63,79);font-family:Poppins,sans-serif;font-size:medium;white-space:nowrap;width:600px"
      >
        <tbody>
          <tr>
            <td width="81">
              <img
                src="https://ci6.googleusercontent.com/proxy/zNHPOd0e0QVnZarTZR-R1t0GKYkuY7BSx7FIYBboNZzZlAEwGH_qQv1_UcYiO11WcQse8a5Au0PN_ILo5yyHg6_J-j9QpIYChU2foxE7i6MS5Qt8UP3p9xa3JewFbi9OH_W8SxJj9To3_TdbNAjidKByIBu7FXGIIPjkR_LCJqzXiXRt0gC4poBFYyoFgzWkDGjSJyBtISnllLo0V2T__g=s0-d-e1-ft#https://docs.google.com/uc?export=download&amp;id=1ByaU1RBqgVAzNrTJcqojlJ9rdkkVI7I1&amp;revid=0BxKTdJnCbLzfS2hoOVIvN2dQY3ExdmxzQzZRenNmWS9iYnFZPQ"
                alt="logo"
                width="81"
                class="CToWUd"
                style="margin-left: 15px;"
              />
            </td>
            <td style="width:30px" width="30">
              &nbsp;
            </td>
            <td style="line-height:26px">
              <div style="height:30px">&nbsp;</div>
              <div style="font-size:18px;font-weight:600">${this.props.signatureGenerator.name}</div>
              <div style="text-transform:uppercase;font-size:14px">${this.props.signatureGenerator.title}</div>
              <div>
                <a
                  href="tel:${this.props.signatureGenerator.phone.replace(/[^0-9]/g, '')}"
                  style="color:rgb(52,63,79);padding-right:10px;text-decoration:none"
                  target="_blank"
                >
                  <span style="color:rgb(233,66,53)">m.</span>
                  &nbsp; ${this.props.signatureGenerator.phone.replace(/[^0-9]/g, '').match(/\d{3}(?=\d{2,3})|\d+/g).join(".")}
                </a>
                &nbsp;
                <a
                  href="mailto:${this.props.signatureGenerator.email}"
                  style="color:rgb(52,63,79);text-decoration:none"
                  target="_blank"
                >
                  <span style="color:rgb(233,66,53)">e.</span>
                  &nbsp; ${this.props.signatureGenerator.email}
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/${this.props.signatureGenerator.linkedIn}"
                  style="color:rgb(52,63,79);padding-right:10px;text-decoration:none"
                  target="_blank"
                >
                  <img
                    src="https://ci6.googleusercontent.com/proxy/ejo72VgOXJBs3smfFpN0WkiVXKZOcZWHSKpfcW3hJCs7mEVYlsySITBmMcn9fJhgPBht04XeUgB35qXbVyqNggaqB-M6Lp0G2CVqsYBAlRsnEYqHfjTtJqqhik58cA1r7-TasjATh0sAYdQJFiK50rsPGshVJbx-VlORTtpJZ_c8xmCrjf4a3fw1K-eIdjyJ1ftE0yAHDAQQphSezoui1Q=s0-d-e1-ft#https://docs.google.com/uc?export=download&amp;id=1hO6I9DlNsCWGBTO-rLIHCiyVpxreEBmB&amp;revid=0BxKTdJnCbLzfcERzSE5aME9XQzJXZnpNUlBVckNBRGkrZlk0PQ"
                    alt="LinkedIn"
                    style="padding-right:5px"
                    width="14"
                    class="CToWUd"
                  />
                  &nbsp;/in/${this.props.signatureGenerator.linkedIn}&nbsp;
                </a>
                <a
                  href="https://twitter.com/${this.props.signatureGenerator.twitter}"
                  style="color:rgb(52,63,79);text-decoration:none"
                  target="_blank"
                >
                  <img
                    src="https://ci3.googleusercontent.com/proxy/nWPfVeCBuLYU6LCPNUSsqL8VXX2gnEpH9qtxlq4dKVLcS79UKd9qB3L7AwgrcllGvw1NzDXjDsrONO9Dagc2Cjxex_en3ATZC7dYFzyVMMmB9d8RtYjJTgJY7VKTAqTyhOQSi0mwqOri37BywgkRdGr7w8RsnAqqqZ3mdvjj4hTLuUItefkYOoOsX1MHysaGu9HgxdGnS0xXivpZpGdJrw=s0-d-e1-ft#https://docs.google.com/uc?export=download&amp;id=1ADpXElsi-DoEbeuD3td_rn1y3QRazC1S&amp;revid=0BxKTdJnCbLzfVDhxQk01dktIa2tDQVc1SDNURzhGK2V3NDBVPQ"
                    alt="Twitter"
                    style="padding-right:5px"
                    width="14"
                    class="CToWUd"
                  />
                  &nbsp;${this.props.signatureGenerator.twitter}
                </a>
              </div>
              <div style="height:30px">&nbsp;</div>
            </td>
          </tr>
        </tbody>
      </table>`;
  }

  render() {
    return (
      <div className="signature-generator-signature-result">
        <button
          className="generate"
          onClick={() => {
            this.props.actions.setResult(this.renderText());
            this.props.actions.showResult();
          }}
        >
          Generate
        </button>

        <div
          className="signature-generator-signature-result-display"
          dangerouslySetInnerHTML={{ __html: this.props.signatureGenerator.result }}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(SignatureResult);
