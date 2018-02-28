const express = require("express");
const app = express();
const path = require("path");

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App started");
});

<div class="signature-generator-signature-result-display">
  <table
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
        <td style="line-height: 18px;">
          <div style="height:28px">&nbsp;</div>
          <div style="font-size: 13px;font-weight:600; letter-spacing: .5px;">
            Gabriel Kelly
          </div>
          <div style="text-transform:uppercase;font-size: 9px; letter-spacing: .75px;">
            Director of Design
          </div>
          <div style="font-size: 10px;">
            <span style="color:rgb(233,66,53)">m.</span>
            &nbsp;
            <a
              href="tel:3057750960"
              style="display:inline-block;color:rgb(52,63,79); letter-spacing: .5px; margin-right:10px;text-decoration:none"
              target="_blank"
            >
              305.775.0960
            </a>
            <span style="color:rgb(233,66,53)">e.</span>
            &nbsp;
            <a
              href="mailto:gabriel.kelly@8base.com"
              style="color:rgb(52,63,79); letter-spacing: .5px; text-decoration:none"
              target="_blank"
            >
              gabriel.kelly@8base.com
            </a>
          </div>
          <div style="font-size: 10px;">
            <img
              src="https://ci6.googleusercontent.com/proxy/ejo72VgOXJBs3smfFpN0WkiVXKZOcZWHSKpfcW3hJCs7mEVYlsySITBmMcn9fJhgPBht04XeUgB35qXbVyqNggaqB-M6Lp0G2CVqsYBAlRsnEYqHfjTtJqqhik58cA1r7-TasjATh0sAYdQJFiK50rsPGshVJbx-VlORTtpJZ_c8xmCrjf4a3fw1K-eIdjyJ1ftE0yAHDAQQphSezoui1Q=s0-d-e1-ft#https://docs.google.com/uc?export=download&amp;id=1hO6I9DlNsCWGBTO-rLIHCiyVpxreEBmB&amp;revid=0BxKTdJnCbLzfcERzSE5aME9XQzJXZnpNUlBVckNBRGkrZlk0PQ"
              alt="LinkedIn"
              style="padding-right:0px"
              width="9"
              class="CToWUd"
            />
            &nbsp;
            <a
              href="https://www.linkedin.com/in/gabrieljkelly"
              style="display:inline-block;color:rgb(52,63,79); letter-spacing: .5px; margin-right:10px;text-decoration:none"
              target="_blank"
            >
              /in/gabrieljkelly
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
              href="https://twitter.com/gabrieljkelly"
              style="color:rgb(52,63,79); letter-spacing: .5px; text-decoration:none"
              target="_blank"
            >
              @gabrieljkelly
            </a>
          </div>
          <div style="height:30px">&nbsp;</div>
        </td>
      </tr>
    </tbody>
  </table>
</div>;
