import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

export class SignatureResult extends Component {
  static propTypes = {
    signatureGenerator: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  renderTwitter = () => {
    let { twitter, showExample } = this.props.signatureGenerator;
    let twitterExample = this.props.signatureGenerator.example.twitter;
    twitter = twitter.replace(/@/g, '');
    twitterExample = twitterExample.replace(/@/g, '');

    if (twitter) {
      return `
      <img
        src="https://ci3.googleusercontent.com/proxy/nWPfVeCBuLYU6LCPNUSsqL8VXX2gnEpH9qtxlq4dKVLcS79UKd9qB3L7AwgrcllGvw1NzDXjDsrONO9Dagc2Cjxex_en3ATZC7dYFzyVMMmB9d8RtYjJTgJY7VKTAqTyhOQSi0mwqOri37BywgkRdGr7w8RsnAqqqZ3mdvjj4hTLuUItefkYOoOsX1MHysaGu9HgxdGnS0xXivpZpGdJrw=s0-d-e1-ft#https://docs.google.com/uc?export=download&amp;id=1ADpXElsi-DoEbeuD3td_rn1y3QRazC1S&amp;revid=0BxKTdJnCbLzfVDhxQk01dktIa2tDQVc1SDNURzhGK2V3NDBVPQ"
        alt="Twitter"
        style="padding-right:0px"
        width="9"
        class="CToWUd"
      />
      &nbsp;
      <a
        href="https://twitter.com/${twitter}"
        style="color:rgb(52,63,79); font-size: 10px; letter-spacing:.5px; text-decoration:none"
        target="_blank"
      >
        @${twitter}
      </a>
    `;
    } else {
      // &nbsp; allows for proper spacing of 8base logo from the top if neither Twitter nor LinkedIn are present.
      return '&nbsp;';
    }
  };

  renderLinkedIn = () => {
    const { linkedIn, showExample } = this.props.signatureGenerator;
    const linkedInExample = this.props.signatureGenerator.example.linkedIn;

    if (linkedIn) {
      return `
        <img
          src="https://ci6.googleusercontent.com/proxy/ejo72VgOXJBs3smfFpN0WkiVXKZOcZWHSKpfcW3hJCs7mEVYlsySITBmMcn9fJhgPBht04XeUgB35qXbVyqNggaqB-M6Lp0G2CVqsYBAlRsnEYqHfjTtJqqhik58cA1r7-TasjATh0sAYdQJFiK50rsPGshVJbx-VlORTtpJZ_c8xmCrjf4a3fw1K-eIdjyJ1ftE0yAHDAQQphSezoui1Q=s0-d-e1-ft#https://docs.google.com/uc?export=download&amp;id=1hO6I9DlNsCWGBTO-rLIHCiyVpxreEBmB&amp;revid=0BxKTdJnCbLzfcERzSE5aME9XQzJXZnpNUlBVckNBRGkrZlk0PQ"
          alt="LinkedIn"
          style="padding-right:0px"
          width="9"
          class="CToWUd"
        />
        &nbsp;
        <a
          href="https://www.linkedin.com/in/${linkedIn}"
          style="display:inline-block; color:rgb(52,63,79); letter-spacing:.5px; margin-right:10px; text-decoration:none"
          target="_blank"
        >
          /in/${linkedIn}
        </a>
      `;
    } else {
      return '';
    }
  };

  renderText(name, title, phone, email) {
    return `<table
        border="0"
        cellpadding="0"
        cellspacing="0"
        style="color:rgb(52,63,79); font-family:Poppins,sans-serif; font-size:medium; white-space:nowrap; width:600px"
      >
        <tbody>
          <tr>
            <td width="81">
              <img
                src="https://ci6.googleusercontent.com/proxy/zNHPOd0e0QVnZarTZR-R1t0GKYkuY7BSx7FIYBboNZzZlAEwGH_qQv1_UcYiO11WcQse8a5Au0PN_ILo5yyHg6_J-j9QpIYChU2foxE7i6MS5Qt8UP3p9xa3JewFbi9OH_W8SxJj9To3_TdbNAjidKByIBu7FXGIIPjkR_LCJqzXiXRt0gC4poBFYyoFgzWkDGjSJyBtISnllLo0V2T__g=s0-d-e1-ft#https://docs.google.com/uc?export=download&amp;id=1ByaU1RBqgVAzNrTJcqojlJ9rdkkVI7I1&amp;revid=0BxKTdJnCbLzfS2hoOVIvN2dQY3ExdmxzQzZRenNmWS9iYnFZPQ"
                alt="logo"
                width="60"
                class="CToWUd"
                style="margin-left: 15px;"
              />
            </td>
            <td style="width:14px" width="30">
              &nbsp;
            </td>
            <td style="line-height:18px">
              <div style="height:28px">&nbsp;</div>
              <div style="font-size:13px; font-weight:600; letter-spacing:.5px;">${name}</div>
              <div style="text-transform:uppercase; font-size:9px; letter-spacing:.75px">${title}</div>
              <div style="font-size:10px">
                <span style="color:rgb(233,66,53)">m.</span>
                &nbsp;
                <a
                  href="tel:${phone.replace(/[^0-9]/g, '')}"
                  style="display:inline-block; color:rgb(52,63,79); letter-spacing:.5px; margin-right:10px; text-decoration:none"
                  target="_blank"
                >
                  ${
                    phone
                      ? phone
                          .replace(/[^0-9]/g, '')
                          .match(/\d{3}(?=\d{2,3})|\d+/g)
                          .join('.')
                      : ''
                  }
                </a>
                <span style="color:rgb(233,66,53)">e.</span>
                &nbsp;
                <a
                  href="mailto:${email}"
                  style="color:rgb(52,63,79); font-size:10px; letter-spacing:.5px; text-decoration:none"
                  target="_blank"
                >
                  ${email}
                </a>
              </div>
              <div style="font-size:10px">
                ${this.renderLinkedIn()}
                ${this.renderTwitter()}
              </div>
              <div style="height:30px">&nbsp;</div>
            </td>
          </tr>
        </tbody>
      </table>`;
  }

  renderExample = () => {
    const { name, title, phone, email, linkedIn, twitter } = this.props.signatureGenerator.example;

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
                width="60"
                class="CToWUd"
                style="margin-left: 15px;"
              />
            </td>
            <td style="width:14px" width="30">
              &nbsp;
            </td>
            <td style="line-height:18px">
              <div style="height:28px">&nbsp;</div>
              <div style="font-size:13px;font-weight:600;letter-spacing:.5px;">${name}</div>
              <div style="text-transform:uppercase;font-size:9px;letter-spacing:.75px">${title}</div>
              <div style="font-size:10px">
                <span style="color:rgb(233,66,53)">m.</span>
                &nbsp;
                <a
                  href="tel:${phone.replace(/[^0-9]/g, '')}"
                  style="display:inline-block;color:rgb(52,63,79);letter-spacing:.5px;margin-right:10px;text-decoration:none"
                  target="_blank"
                >
                  ${
                    phone
                      ? phone
                          .replace(/[^0-9]/g, '')
                          .match(/\d{3}(?=\d{2,3})|\d+/g)
                          .join('.')
                      : ''
                  }
                </a>
                <span style="color:rgb(233,66,53)">e.</span>
                &nbsp;
                <a
                  href="mailto:${email}"
                  style="color:rgb(52,63,79);letter-spacing:.5px;text-decoration:none"
                  target="_blank"
                >
                  ${email}
                </a>
              </div>
              <div style="font-size:10px">
                <img
                  src="https://ci6.googleusercontent.com/proxy/ejo72VgOXJBs3smfFpN0WkiVXKZOcZWHSKpfcW3hJCs7mEVYlsySITBmMcn9fJhgPBht04XeUgB35qXbVyqNggaqB-M6Lp0G2CVqsYBAlRsnEYqHfjTtJqqhik58cA1r7-TasjATh0sAYdQJFiK50rsPGshVJbx-VlORTtpJZ_c8xmCrjf4a3fw1K-eIdjyJ1ftE0yAHDAQQphSezoui1Q=s0-d-e1-ft#https://docs.google.com/uc?export=download&amp;id=1hO6I9DlNsCWGBTO-rLIHCiyVpxreEBmB&amp;revid=0BxKTdJnCbLzfcERzSE5aME9XQzJXZnpNUlBVckNBRGkrZlk0PQ"
                  alt="LinkedIn"
                  style="padding-right:0px"
                  width="9"
                  class="CToWUd"
                />
                &nbsp;
                <a
                  href="https://www.linkedin.com/in/${linkedIn}"
                  style="display:inline-block;color:rgb(52,63,79);letter-spacing:.5px;margin-right:10px;text-decoration:none"
                  target="_blank"
                >
                  /in/${linkedIn}
                </a>
                <img
                  src="https://ci3.googleusercontent.com/proxy/nWPfVeCBuLYU6LCPNUSsqL8VXX2gnEpH9qtxlq4dKVLcS79UKd9qB3L7AwgrcllGvw1NzDXjDsrONO9Dagc2Cjxex_en3ATZC7dYFzyVMMmB9d8RtYjJTgJY7VKTAqTyhOQSi0mwqOri37BywgkRdGr7w8RsnAqqqZ3mdvjj4hTLuUItefkYOoOsX1MHysaGu9HgxdGnS0xXivpZpGdJrw=s0-d-e1-ft#https://docs.google.com/uc?export=download&amp;id=1ADpXElsi-DoEbeuD3td_rn1y3QRazC1S&amp;revid=0BxKTdJnCbLzfVDhxQk01dktIa2tDQVc1SDNURzhGK2V3NDBVPQ"
                  alt="Twitter"
                  style="padding-right:0px"
                  width="9"
                  class="CToWUd"
                />
                &nbsp;
                <a
                  href="https://twitter.com/${twitter}"
                  style="color:rgb(52,63,79);letter-spacing:.5px;text-decoration:none"
                  target="_blank"
                >
                  @${twitter}
                </a>
              </div>
              <div style="height:30px">&nbsp;</div>
            </td>
          </tr>
        </tbody>
      </table>`;
  };

  showExample = () => {
    const { showExample } = this.props.signatureGenerator;

    // Display example if there is no result, meaning the generator hasn't been used yet
    if (showExample) {
      return (
        <div
          className="signature-generator-signature-example-display"
          dangerouslySetInnerHTML={{ __html: this.renderExample() }}
        />
      );
    } else {
      return '';
    }
  };

  copyToClipboard = el => {
    const range = document.createRange(); // create new range object
    range.selectNodeContents(el); // set range to encompass desired element text
    const selection = window.getSelection(); // get Selection object from currently user selected text
    selection.removeAllRanges(); // unselect any user selected text (if any)
    selection.addRange(range); // add range to Selection object to select it
  };

  render() {
    const { name, title, phone, email, linkedIn, twitter, result } = this.props.signatureGenerator;
    const { setResult, showResult, hideExample } = this.props.actions;
    return (
      <div className="signature-generator-signature-result">
        <button
          className="generate"
          onClick={() => {
            if (!phone.replace(/[^0-9]/g, '')) {
              alert('Not a valid phone number.');
              return;
            }
            hideExample();
            setResult(this.renderText(name, title, phone, email));
            showResult();
          }}
        >
          Generate
        </button>
        <button
          style={{ display: result ? 'inline-block' : 'none' }}
          onClick={() => {
            const el = document.querySelector(
              '#react-root > div > div > div.signature-generator-signature-result > div > table'
            );
            this.copyToClipboard(el);
            document.execCommand('copy');
          }}
        >
          Copy
        </button>

        {this.showExample()}

        <div className="signature-generator-signature-result-display" dangerouslySetInnerHTML={{ __html: result }} />
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
