// card-details.ts

import { LitElement, html, css, svg } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('card-details')
export class CardDetails extends LitElement {
  static override styles = css`
    :host {
      width: auto;
    }

    .flex {
      display: flex;
      witdh: 100%;
    }
    .card-input {
      border: 1px solid black;
      border-radius: 4px;
      padding: 2px;
    }

    .card-number {
      width: -webkit-fill-available;
    }
    .card-expire,
    .card-cvc {
      width: 12%;
    }
    .input {
      border: none;
      padding: 12px 11.98px;
    }
    label {
      width: 100%;
      text-align: center;
      text-weight: 900;
    }
    .label {
      width: 100%;
      text-align: center;
      padding: 10px;
    }
    .card-input svg {
      padding: 5px;
    }
    .input-group {
      width: -webkit-fill-available;
    }
  `;

  override render() {
    return html`
      <div class="">
        <div class="label">
          <label for="card-input">Enter Card details</label>
        </div>
        <div class="card-input flex" id="card-input">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="5%"
            height="5%"
            viewBox="0 0 1000 1000"
            xml:space="preserve"
          >
            <desc>Created with Fabric.js 3.5.0</desc>
            <defs></defs>
            <rect x="0" y="0" width="100%" height="100%" fill="#ffffff" />
            <g
              transform="matrix(1.7756 0 0 1.7756 500.0081 500.0081)"
              id="157661"
            >
              <g style="" vector-effect="non-scaling-stroke">
                <g transform="matrix(1 0 0 1 0 71)">
                  <path
                    style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; is-custom-font: none; font-file-url: none; fill: rgb(34,184,66); fill-rule: nonzero; opacity: 1;"
                    transform=" translate(-256, -327)"
                    d="M 32 376 a 56 56 0 0 0 56 56 H 424 a 56 56 0 0 0 56 -56 V 222 H 32 Z m 66 -76 a 30 30 0 0 1 30 -30 h 48 a 30 30 0 0 1 30 30 v 20 a 30 30 0 0 1 -30 30 H 128 a 30 30 0 0 1 -30 -30 Z"
                    stroke-linecap="round"
                  />
                </g>
                <g transform="matrix(1 0 0 1 0 -135)">
                  <path
                    style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; is-custom-font: none; font-file-url: none; fill: rgb(34,184,66); fill-rule: nonzero; opacity: 1;"
                    transform=" translate(-256, -121)"
                    d="M 424 80 H 88 a 56 56 0 0 0 -56 56 v 26 H 480 V 136 A 56 56 0 0 0 424 80 Z"
                    stroke-linecap="round"
                  />
                </g>
              </g>
            </g>
          </svg>
          <div class="input-group flex">
            <input
              class="input card-number"
              type="text"
              placeholder="Card number"
            />
            <input class="input card-expire" type="text" placeholder="MM/HH" />
            <input class="input card-cvc" type="text" placeholder="CVC" />
          </div>
        </div>
      </div>
    `;
  }
}
