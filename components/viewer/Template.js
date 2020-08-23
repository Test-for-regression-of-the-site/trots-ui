/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

function createMarkup() {
  return {
    __html: `   
    <div>
        <div hidden>
      <!--
    @license
    Copyright 2018 Google Inc. All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS-IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
    -->
    <!-- Lighthouse run warnings -->
    <template id="tmpl-lh-warnings--toplevel">
      <div class="lh-warnings lh-warnings--toplevel">
        <strong class="lh-warnings__msg"></strong>
        <ul></ul>
      </div>
    </template>
    <!-- Lighthouse score scale -->
    <template id="tmpl-lh-scorescale">
      <div class="lh-scorescale">
        <span class="lh-scorescale-label"></span>
        <span class="lh-scorescale-range lh-scorescale-range--pass">90-100</span>
        <span class="lh-scorescale-range lh-scorescale-range--average">50-89</span>
        <span class="lh-scorescale-range lh-scorescale-range--fail">0-49</span>
      </div>
    </template>
    <!-- Toggle arrow chevron -->
    <template id="tmpl-lh-chevron">
      <svg class="lh-chevron" title="See audits" xmlns="http://www.w3.org/2000/svg"  viewbox="0 0 100 100">
        <g class="lh-chevron__lines">
          <path class="lh-chevron__line lh-chevron__line-left" d="M10 50h40" stroke="#707173"></path>
          <path class="lh-chevron__line lh-chevron__line-right" d="M90 50H50" stroke="#707173"></path>
        </g>
      </svg>
    </template>
    <!-- Lighthouse category header -->
    <template id="tmpl-lh-category-header">
      <div class="lh-category-header">
        <div class="lh-score__gauge"></div>
        <span class="lh-category-header__title"></span>
        <div class="lh-category-header__description"></div>
      </div>
    </template>
    <!-- Lighthouse clump -->
    <template id="tmpl-lh-clump">
      <!-- TODO: group classes shouldn't be reused for clumps. -->
      <details class="lh-clump lh-audit-group">
        <summary>
          <div class="lh-audit-group__summary">
            <div class="lh-audit-group__header"></div>
            <div class="lh-audit-group__itemcount"></div>
            <div class=""></div>
          </div>
        </summary>
      </details>
    </template>
    <!-- Lighthouse audit -->
    <template id="tmpl-lh-audit">
      <div class="lh-audit">
        <details class="lh-expandable-details">
          <summary>
            <div class="lh-audit__header lh-expandable-details__summary">
              <span class="lh-audit__index"></span>
              <span class="lh-audit__title"></span>
              <span class="lh-audit__display-text"></span>
              <div class="lh-audit__score-icon"></div>
              <div class="lh-chevron-container"></div>
            </div>
          </summary>
          <div class="lh-audit__description"></div>
        </details>
      </div>
    </template>
    <!-- Lighthouse perf metric -->
    <template id="tmpl-lh-metric">
      <div class="lh-metric">
        <div class="lh-metric__innerwrap tooltip-boundary">
          <span class="lh-metric__title"></span>
          <div class="lh-metric__value"></div>
          <div class="lh-metric__description tooltip"></div>
        </div>
      </div>
    </template>
    <!-- Lighthouse perf opportunity -->
    <template id="tmpl-lh-opportunity">
      <div class="lh-audit lh-audit--load-opportunity">
        <details class="lh-expandable-details">
            <summary>
              <div class="lh-audit__header lh-expandable-details__summary">
                <div class="lh-load-opportunity__cols">
                  <div class="lh-load-opportunity__col lh-load-opportunity__col--one">
                    <span class="lh-audit__index"></span>
                    <div class="lh-audit__title"></div>
                  </div>
                  <div class="lh-load-opportunity__col lh-load-opportunity__col--two">
                    <div class="lh-load-opportunity__sparkline">
                      <div class="lh-sparkline"><div class="lh-sparkline__bar"></div></div>
                    </div>
                    <div class="lh-audit__display-text"></div>
                    <div class="lh-chevron-container" title="See resources"></div>
                  </div>
                </div>
              </div>
            </summary>
          <div class="lh-audit__description"></div>
        </details>
      </div>
    </template>
    <!-- Lighthouse perf opportunity header -->
    <template id="tmpl-lh-opportunity-header">
      <div class="lh-load-opportunity__header lh-load-opportunity__cols">
        <div class="lh-load-opportunity__col lh-load-opportunity__col--one"></div>
        <div class="lh-load-opportunity__col lh-load-opportunity__col--two"></div>
      </div>
    </template>
    <!-- Lighthouse score container -->
    <template id="tmpl-lh-scores-wrapper">
      <style>
        .lh-scores-wrapper__background,
        .lh-scores-wrapper__shadow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: white;
          border-radius: 8px;
        }
        .lh-scores-wrapper__shadow {
          border-radius: 0;
          box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 0px -2px
        }
        .lh-scores-container {
          padding-bottom: calc(var(--section-indent) / 2);
          position: relative;
          width: 100%;
        }
      </style>
      <div class="lh-scores-wrapper">
        <div class="lh-scores-container">
          <div class="lh-scores-wrapper__background"></div>
          <div class="lh-scores-wrapper__shadow"></div>
        </div>
      </div>
    </template>
    <!-- Lighthouse header -->
    <template id="tmpl-lh-heading">
      <style>
        :root {
          --report-header-overlap-top: 30px;
        }
        .lh-header-bg {
          background-color: var(--header-bg-color);
          height: var(--report-header-height);
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
          will-change: transform;
          contain: strict;
        }
        .lh-lighthouse {
          position: absolute;
          bottom: -4px;
          right: 0;
          opacity: 1;
          transform-origin: bottom right;
          will-change: transform, opacity;
        }
        .lh-header {
          width: 100%;
          height: var(--report-header-height);
          max-width: 100%; /* support text-overflow on url */
          position: relative;
        }
        .lh-metadata {
          flex: 1 1 0;
          padding: calc(var(--section-padding) / 2);
          padding-left: var(--section-indent);
          line-height: 20px;
          color: var(--report-header-color);
          z-index: 1;
          position: relative;
          max-width: 60%;
        }
        .lh-metadata__results {
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .lh-metadata__url {
          color: currentColor;
        }
        .lh-scores-wrapper {
          margin-top: -30px;
        }
        .lh-scores-wrapper__shadow {
          opacity: 0;
        }
        .lh-scores-wrapper__background,
        .lh-scores-wrapper__shadow {
          box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.1);
          border-radius: 8px;
          will-change: opacity, transform;
          transform-origin: top;
        }
        .lh-product-info, .lh-toolbar__metadata {
          align-items: center;
          white-space: nowrap;
          color: #5F6369;
          display: flex;
          font-size: calc(var(--body-font-size) * 0.9);
          margin-left: var(--section-indent);
          opacity: 0;
          transform: translateY(-50%);
          will-change: opacity;
        }
        .lh-product-info__icon {
          height: 20px;
          margin-right: var(--default-padding);
        }
        .lh-toolbar {
          height: 50px;
          position: absolute;
          top: 25px;
          will-change: transform;
          display: flex;
          width: calc(100% - 70px);  /* give room for export */
        }
        .lh-toolbar__metadata {
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
        }
        .lh-toolbar__url {
          color: currentColor;
          display: block;
          white-space: nowrap;
          margin-right: 2px;
        }
        .lh-export {
          position: absolute;
          right: var(--section-indent);
          transform: translateY(0);
          top: calc(var(--section-padding) / 2);
          will-change: transform;
          z-index: 2;
        }
        .lh-export__button {
          background-color: #fff;
          border: 1px solid #dadada;
          border-radius: 2px;
          cursor: pointer;
          outline: none;
          height: 32px;
          width: 48px;
          background-repeat: no-repeat;
          background-size: 20px;
          background-position: 50% 50%;
          will-change: transform;
        }
        .lh-export__button:focus,
        .lh-export__button.active {
          box-shadow: 1px 1px 3px #ccc;
        }
        .lh-export__button.active + .lh-export__dropdown {
          opacity: 1;
          clip: rect(0, 164px, 200px, 0);
        }
        .lh-export__dropdown {
          position: absolute;
          background-color: #fff;
          border: 1px solid var(--report-border-color);
          border-radius: 3px;
          padding: calc(var(--default-padding) / 2) 0;
          cursor: pointer;
          top: 36px;
          right: 0;
          box-shadow: 1px 1px 3px #ccc;
          min-width: 125px;
          clip: rect(0, 164px, 0, 0);
          opacity: 0;
          transition: all 200ms cubic-bezier(0,0,0.2,1);
        }
        .lh-export__dropdown a {
          display: block;
          color: currentColor;
          text-decoration: none;
          white-space: nowrap;
          padding: 0 12px;
          line-height: 2;
        }
        .lh-export__dropdown a:hover,
        .lh-export__dropdown a:focus {
          background-color: #efefef;
          outline: none;
        }
        .lh-export__dropdown .report-icon {
          cursor: pointer;
          background-repeat: no-repeat;
          background-position: 8px 50%;
          background-size: 18px;
          background-color: transparent;
          text-indent: 18px;
        }
        /* copy icon needs slight adjustments to look great */
        .lh-export__dropdown .report-icon--copy {
          background-size: 16px;
          background-position: 9px 50%;
        }
        /* save-as-gist option hidden in report */
        .lh-export__dropdown .lh-export--gist {
          display: none;
        }
        .lh-config {
          color: var(--secondary-text-color);
        }
        .lh-config__timestamp {
          font-size: var(--caption-font-size);
          display: block;
        }
        a.lh-config__emulation {
          color: inherit;
          text-decoration: none;
        }
        @media screen and (max-width: 964px) {
          .lh-export__dropdown {
            right: 0;
            left: initial;
          }
        }
        @media print {
          .lh-header {
            position: static;
            margin-left: 0;
          }
        }
    /*
        TODO: Enable animating the clouds
        .lh-lighthouse__clouds {
          animation: panacross 30s linear infinite;
          animation-play-state: paused;
        }
        @keyframes panacross {
          0% { transform: translateX(0px); }
          77% { transform: translateX(-680px); }
          77.0001% { transform: translateX(195px); }
          100% { transform: translateX(0px); }
        } */
        .score100 .lh-header-bg {
          background-color: hsl(234, 64%, 19%);
        }
        .score100 .lh-metadata, .score100 .lh-toolbar__metadata, .score100 .lh-product-info {
          color: #fff;
        }
        .score100 .lh-config {
          color: #eee;
        }
        /* CSS Fireworks. Originally by Eddie Lin
          https://codepen.io/paulirish/pen/yEVMbP
        */
        .pyro {
          display: none;
        }
        .score100 .pyro {
          display: block;
        }
        .score100 .lh-lighthouse stop:first-child {
          stop-color: hsla(200, 12%, 95%, 0);
        }
        .score100 .lh-lighthouse stop:last-child {
          stop-color: hsla(65, 81%, 76%, 1);
        }
        .pyro > .before, .pyro > .after {
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 2.5px;
          box-shadow: 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff, 0 0 #fff;
          animation: 1s bang ease-out infinite backwards,  1s gravity ease-in infinite backwards,  5s position linear infinite backwards;
          animation-delay: 1s, 1s, 1s;
        }
        .pyro > .after {
          animation-delay: 2.25s, 2.25s, 2.25s;
          animation-duration: 1.25s, 1.25s, 6.25s;
        }
        .fireworks-paused .pyro > div {
          animation-play-state: paused;
        }
        @keyframes bang {
          to {
            box-shadow: -70px -115.67px #47ebbc, -28px -99.67px #eb47a4, 58px -31.67px #7eeb47, 13px -141.67px #eb47c5, -19px 6.33px #7347eb, -2px -74.67px #ebd247, 24px -151.67px #eb47e0, 57px -138.67px #b4eb47, -51px -104.67px #479eeb, 62px 8.33px #ebcf47, -93px 0.33px #d547eb, -16px -118.67px #47bfeb, 53px -84.67px #47eb83, 66px -57.67px #eb47bf, -93px -65.67px #91eb47, 30px -13.67px #86eb47, -2px -59.67px #83eb47, -44px 1.33px #eb47eb, 61px -58.67px #47eb73, 5px -22.67px #47e8eb, -66px -28.67px #ebe247, 42px -123.67px #eb5547, -75px 26.33px #7beb47, 15px -52.67px #a147eb, 36px -51.67px #eb8347, -38px -12.67px #eb5547, -46px -59.67px #47eb81, 78px -114.67px #eb47ba, 15px -156.67px #eb47bf, -36px 1.33px #eb4783, -72px -86.67px #eba147, 31px -46.67px #ebe247, -68px 29.33px #47e2eb, -55px 19.33px #ebe047, -56px 27.33px #4776eb, -13px -91.67px #eb5547, -47px -138.67px #47ebc7, -18px -96.67px #eb47ac, 11px -88.67px #4783eb, -67px -28.67px #47baeb, 53px 10.33px #ba47eb, 11px 19.33px #5247eb, -5px -11.67px #eb4791, -68px -4.67px #47eba7, 95px -37.67px #eb478b, -67px -162.67px #eb5d47, -54px -120.67px #eb6847, 49px -12.67px #ebe047, 88px 8.33px #47ebda, 97px 33.33px #eb8147, 6px -71.67px #ebbc47;
          }
        }
        @keyframes gravity {
          to {
            transform: translateY(80px);
            opacity: 0;
          }
        }
        @keyframes position {
          0%, 19.9% {
            margin-top: 4%;
            margin-left: 47%;
          }
          20%, 39.9% {
            margin-top: 7%;
            margin-left: 30%;
          }
          40%, 59.9% {
            margin-top: 6%;
            margin-left: 70%;
          }
          60%, 79.9% {
            margin-top: 3%;
            margin-left: 20%;
          }
          80%, 99.9% {
            margin-top: 3%;
            margin-left: 80%;
          }
        }
      </style>
      <div class="lh-header-bg">
        <div class="pyro">
          <div class="before"></div>
          <div class="after"></div>
        </div>
      </div>
      
      <div class="lh-header-container">
        <div class="lh-header">
          <div class="lh-lighthouse">
            <svg width="217" height="148" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs>
                <mask id="a" x="-56" y="-54" width="284" height="202" maskUnits="userSpaceOnUse">
                  <path d="M-56-54h284v202H-56z" fill="#fff"></path>
                </mask>
                <linearGradient id="b" x1="-525.16" y1="560.08" x2="-524.23" y2="560.08" gradientTransform="matrix(91 0 0 -77 47797 43181)" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stop-color="#FFFFFF00"/>
                  <stop offset="1" stop-color="#FFFFFF"/>
                </linearGradient>
              </defs>
              <g mask="url(#a)">
                <!-- lighthouse building elements -->
                <path d="M95 47h24v2H95z" fill="#ec5548"/>
                <path d="M95 59h24v7H95z" fill="#ec5548"/>
                <path d="M97.63 66h19.74l2.63 47H95z" fill="#fff"/>
                <path d="M107 38a10 10 0 0 1 10 10v1H97v-1a10 10 0 0 1 10-10zM96.77 82.23l21-10.7.63 11.87-22.31 11.87zM95 110.8L119.1 98l.9 14H95z" fill="#ec5548"/>
                <path d="M0 148a177.58 177.58 0 0 1 217 0z" fill="#e8eaed"/>
                <!-- lighthouse beam elements -->
                <path d="M98 49h18v11H98z" fill="#fbc21b"/>
                <path d="M103 49a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5z" fill="#fef0c8"/>
                <path d="M7 16l91 33.18v10L7 93z" fill="url(#b)"/>
              </g>
              <g mask="url(#a)" class="lh-lighthouse__clouds">
                <path d="M60 .19A9.77 9.77 0 0 1 61.93 0a9.44 9.44 0 0 1 9.24 7.83A7.24 7.24 0 0 1 79 14.45v.73A7.37 7.37 0 0 1 76.2 21h-31a7.44 7.44 0 0 1-1.2-4.09 7.31 7.31 0 0 1 7.26-7.36 6.84 6.84 0 0 1 1.28.1v-.11A9.51 9.51 0 0 1 60 .19m79.78 22.31h-17.9a4.37 4.37 0 0 1-.63-2.25 4.2 4.2 0 0 1 4.16-4.25 4.37 4.37 0 0 1 .72.06V16a5.35 5.35 0 0 1 10.64-1h.33a4.2 4.2 0 0 1 4.15 4.25 4.29 4.29 0 0 1-1.47 3.25zM163 62h-24.15a5.1 5.1 0 0 1-.85-2.81 5.65 5.65 0 0 1 6.59-5.19v-.08a7.07 7.07 0 0 1 7.24-6.92 7.15 7.15 0 0 1 7.17 5.64h.44a5.46 5.46 0 0 1 5.6 5.32A5.19 5.19 0 0 1 163 62z" fill="#fff"/>
              </g>
            </svg>
          </div>
          <div class="lh-metadata">
            <div class="lh-metadata__results"><a href="" class="lh-metadata__url" target="_blank" rel="noopener"></a></div>
            <div class="lh-config">
              <span class="lh-config__timestamp"></span>
              <a href="#runtime-settings" class="lh-config__emulation"></a>
            </div>
          </div>
        </div>
        <div class="lh-scores-wrapper-placeholder"></div>
        <div class="lh-toolbar">
          <div class="lh-product-info">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAADjklEQVR4AWI08P/HQEvAQrxSQKvlECfLFYXx75xCY2qmh89GbNvOMjb3v9jOOlxnFWxj206ebQ3b7q6q+z1rNagu8/zvPSZACAABpeUAA0miMgU7SA7JjCraFGwZwECOwvL75dWjsKgWBKtx0jvWo+vkBAFbACCkByMP6nMn48+AVgXB2fzSCwsv22/lMGlUhmJ0AE7BH8dyUUDbUEgN6RzJRSeaPxhdRYR0Inel+7Hd5lBiFpkMAxACc0394//9C4voFHDiAAGLpuOXebdfdHfctgwJKaZRLRKy6ItrSis6RBnVBgGtbHyKTEmJHQoEXoBCE5BCrDeA2ogMUIGDAKEBDEhUqwgMqBYDjW4DQzmuffVdqff42/ZQYYqVcMXGZsMPyCsH3lyJSetxvEaxAQXdjR1HjfwCdIS7lo2DZke26Qe+MXO12OWkGT0O6oE7vMGkMnkYw4aN1KQgMKExhXqswfiov4+a7MQ11XPnbr/5qpKlgACAAQj94Lu271bN9DUecQasIZlNzG72llRAAKJiAi+/BSHrSFjRvQhg3DEKEqJh08tsmLTx597+f6enr4cc2Zpk57pihfX24dW7RHcOLLUbJYhJSl0ErQCI9BVXH/XrO97QasuvQQSiECa0BrQCIIJp6X9T/r8QG6L71WYSqCoIIGo2BZDUBnS/D9EA9Nun1iYvbM0MFExIDQRoKFatc1Z6zrm5uWeObJotq0BGV9FuQBWq5a4Fw3PPz848rZHstZSuA5FWAFSMP2nOppOOGpl6qh9PCSg0IFyHKjSQyDNQHTru2t75NOEe0fsf246oAmFkI6vCdnWvbQFQFCKx8vCswV8TrDLiDLgH4Nr7RAtNsrC9d8sfk7b8ls4igdNy8CQKAISlsB0FjZfd3Lfp155tf8fKI4BxZZIj/oTdVEAIAcJFOCmzauHG71I7/rdreUAgAqpDP05fDARCAQQARwEIBQSVxq0FyaLvZZtevpHa8WHw8cft6cpxlq8eAJtIhnSbWDf951yx3y13OqUuu5qyGgkxCgGFh9cDihDGbTa6BqvT1lWmrav3bmt2ZMJ4mU6TGgIC4DBzcv/JqAau1WhzSt3x9Ixk/4Jk/8J4ZrrViFMA4W6A7+WK8xcVjvyrOmVD0FbAXokcT48r+xVqLKvuJYbmpNadnlp3mpufJHOe/GXktM+r09bT8kEdq9BRYAbGSgzP7ll82U71Mc+ZFooXgwAAAABJRU5ErkJggg==" alt="" class="lh-product-info__icon" />
            <span class="lh-product-info__name">Lighthouse</span>&nbsp;
            <span class="lh-product-info__version"></span>
          </div>
          <div class="lh-toolbar__metadata">
            <a href="" class="lh-toolbar__url" target="_blank" rel="noopener"></a>
            <span class="lh-toggle-arrow" title="See report's runtime settings"></span>
          </div>
        </div>
        <div class="lh-export">
          <button class="report-icon report-icon--share lh-export__button" title="Export report"></button>
          <div class="lh-export__dropdown">
            <!-- TODO(i18n): localize export dropdown -->
            <a href="#" class="report-icon report-icon--print" data-action="print-summary">Print Summary</a>
            <a href="#" class="report-icon report-icon--print" data-action="print-expanded">Print Expanded</a>
            <a href="#" class="report-icon report-icon--copy" data-action="copy">Copy JSON</a>
            <a hidden href="#" class="report-icon report-icon--download" data-action="save-html">Save as HTML</a>
            <a href="#" class="report-icon report-icon--download" data-action="save-json">Save as JSON</a>
            <a href="#" class="report-icon report-icon--open lh-export--viewer" data-action="open-viewer">Open in Viewer</a>
            <a href="#" class="report-icon report-icon--open lh-export--gist" data-action="save-gist">Save as Gist</a>
          </div>
        </div>
    </template>
    <!-- Lighthouse footer -->
    <template id="tmpl-lh-footer">
      <style>
        .lh-footer {
          background-color: var(--header-bg-color);
          border-top: 1px solid var(--report-secondary-border-color);
          padding: var(--section-indent) calc(var(--default-padding) * 2);
        }
        .lh-footer .lh-generated {
          text-align: center;
          border-top: 1px solid var(--report-border-color);
          padding-top: var(--default-padding);
        }
        .lh-env {
          padding: var(--default-padding) 0;
        }
        .lh-env__items {
          padding-left: 16px;
        }
        span.lh-env__name {
          font-weight: bold;
          color: var(--secondary-text-color);
        }
        span.lh-env__description {
          font-family: var(--monospace-font-family);
          font-size: var(--caption-font-size);
          padding-left: 5px;
        }
      </style>
      <footer class="lh-footer">
        <!-- TODO(i18n): localize runtime settings -->
        <div class="lh-env">
          <div class="lh-env__title">Runtime settings</div>
          <ul class="lh-env__items">
            <template id="tmpl-lh-env__items">
              <li class="lh-env__item">
                <span class="lh-env__name"></span>
                <span class="lh-env__description"></span>
              </li>
            </template>
          </ul>
        </div>
        <div class="lh-generated">
          Generated by <b>Lighthouse</b> <span class="lh-footer__version"></span> |
          <a href="https://github.com/GoogleChrome/Lighthouse/issues" target="_blank" rel="noopener">File an issue</a>
        </div>
      </footer>
    </template>
    <!-- Lighthouse score gauge -->
    <template id="tmpl-lh-gauge">
      <style>
        .lh-gauge__wrapper {
          --circle-size-half: calc(var(--circle-size) / 2);
          --circle-background: hsl(216, 12%, 92%);
          --circle-border-width: 9;
          --inset-size: calc(var(--circle-size) - 2 * var(--circle-border-width));
          --transition-length: 1s;
        }
        .lh-gauge__wrapper--pass,
        .lh-gauge__wrapper--pass .lh-gauge {
          --circle-color: var(--pass-color);
          color: var(--circle-color);
        }
        .lh-gauge__wrapper--average,
        .lh-gauge__wrapper--average .lh-gauge {
          --circle-color: var(--average-color);
          color: var(--circle-color);
        }
        .lh-gauge__wrapper--fail,
        .lh-gauge__wrapper--fail .lh-gauge {
          --circle-color: var(--fail-color);
          color: var(--circle-color);
        }
        .lh-gauge {
            max-width: 360px;
            max-height: 360px;
            stroke-linecap: round;
            width: var(--circle-size);
            height: var(--circle-size);
        }
        .lh-gauge-base {
            fill: none;
            stroke: var(--circle-background);
            stroke-width: var(--circle-border-width);
        }
        .lh-gauge-arc {
            fill: none;
            stroke: var(--circle-color);
            stroke-width: var(--circle-border-width);
            animation: load-gauge var(--transition-length) ease forwards;
            animation-delay: 250ms;
        }
        @keyframes load-gauge {
          from { stroke-dasharray: 0 329; }
        }
        .lh-gauge__percentage {
          --spacer: calc((var(--circle-size) - var(--inset-size)) / 2);
          width: 100%;
          height: var(--inset-size);
          position: absolute;
          border-radius: inherit;
          font-size: var(--header-font-size);
          line-height: var(--header-font-size);
          text-align: center;
          top: calc(var(--circle-size) / 3);
        }
        .lh-gauge__wrapper {
          display: inline-flex;
          align-items: center;
          flex-direction: column;
          text-decoration: none;
          flex: 1;
          min-width: auto;
          position: relative;
          /* Contain the layout style paint & layers during animation*/
          contain: content;
          will-change: opacity; /* Only using for layer promotion */
        }
        .lh-gauge__label {
          font-size: var(--body-font-size);
          line-height: var(--body-line-height);
          margin-top: calc(0.5 * var(--body-line-height));
          text-align: center;
          color: black;
        }
      </style>
      <a href="#" class="lh-gauge__wrapper">
        <svg viewBox="0 0 120 120" class="lh-gauge" fill="none" stroke-width="2">
          <circle class="lh-gauge-base" r="53" cx="60" cy="60"></circle>
          <circle class="lh-gauge-arc" transform="rotate(-90 60 60)" stroke-dasharray="0 329" stroke-dashoffset="0" r="53" cx="60" cy="60"></circle>
        </svg>
        <div class="lh-gauge__percentage"></div>
        <div class="lh-gauge__label"></div>
      </a>
    </template>
    <!-- Lighthouse PWA badge gauge -->
    <template id="tmpl-lh-gauge--pwa">
      <style>
        .lh-gauge--pwa__wrapper {
          display: inline-flex;
          align-items: center;
          flex-direction: column;
          text-decoration: none;
          flex: 1;
          min-width: auto;
          position: relative;
        }
        .lh-gauge--pwa {
          width: var(--circle-size);
          height: var(--circle-size);
        }
        .lh-gauge--pwa .lh-gauge--pwa__component {
          display: none;
        }
        .lh-gauge--pwa__wrapper:not(.lh-badged--all) .lh-gauge--pwa__logo > path {
          /* Gray logo unless everything is passing. */
          fill: #B0B0B0;
        }
        /* No passing groups. */
        .lh-gauge--pwa__wrapper:not([class*='lh-badged--']) .lh-gauge--pwa__na-line {
          display: inline;
        }
        /* Just optimized. Same n/a line as no passing groups. */
        .lh-gauge--pwa__wrapper.lh-badged--pwa-optimized .lh-gauge--pwa__na-line {
          display: inline;
        }
        /* Just fast and reliable. */
        .lh-gauge--pwa__wrapper.lh-badged--pwa-fast-reliable:not(.lh-badged--pwa-installable) .lh-gauge--pwa__fast-reliable-badge {
          display: inline;
        }
        /* Just installable. */
        .lh-gauge--pwa__wrapper.lh-badged--pwa-installable:not(.lh-badged--pwa-fast-reliable) .lh-gauge--pwa__installable-badge {
          display: inline;
        }
        /* Fast and reliable and installable. */
        .lh-gauge--pwa__wrapper.lh-badged--pwa-fast-reliable.lh-badged--pwa-installable .lh-gauge--pwa__fast-reliable-installable-badges {
          display: inline;
        }
        /* All passing groups. */
        .lh-gauge--pwa__wrapper.lh-badged--all .lh-gauge--pwa__check-circle {
          display: inline;
        }
        .lh-gauge__label {
          font-size: var(--body-font-size);
          line-height: var(--body-line-height);
          margin-top: calc(0.5 * var(--body-line-height));
          text-align: center;
          color: black;
        }
      </style>
      <a href="#" class="lh-gauge--pwa__wrapper">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" class="lh-gauge--pwa">
          <defs>
            <linearGradient id="lh-gauge--pwa__bg-disk__gradient" x1="50%" y1="2.15%" x2="50%" y2="97.645%">
              <stop stop-color="#F1F3F4" offset="0%"></stop>
              <stop stop-color="#DEE6EA" offset="100%"></stop>
            </linearGradient>
            <linearGradient id="lh-gauge--pwa__check-circle__gradient" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop stop-color="#00C852" offset="0%"></stop>
              <stop stop-color="#009688" offset="100%"></stop>
            </linearGradient>
            <linearGradient id="lh-gauge--pwa__installable__shadow-gradient" x1="76.056%" x2="24.111%" y1="82.995%" y2="24.735%">
              <stop stop-color="#A5D6A7" offset="0%"></stop>
              <stop stop-color="#80CBC4" offset="100%"></stop>
            </linearGradient>
            <linearGradient id="lh-gauge--pwa__fast-reliable__shadow-gradient" x1="76.056%" y1="82.995%" x2="25.678%" y2="26.493%">
              <stop stop-color="#64B5F6" offset="0%"></stop>
              <stop stop-color="#2979FF" offset="100%"></stop>
            </linearGradient>
            <g id="lh-gauge--pwa__fast-reliable-badge">
              <circle fill="#FFFFFF" cx="10" cy="10" r="10"></circle>
              <path fill="#304FFE" d="M10 3.58l5.25 2.34v3.5c0 3.23-2.24 6.26-5.25 7-3.01-.74-5.25-3.77-5.25-7v-3.5L10 3.58zm-.47 10.74l2.76-4.83.03-.07c.04-.08 0-.24-.22-.24h-1.64l.47-3.26h-.47l-2.7 4.77c-.02.01.05-.1-.04.05-.09.16-.1.31.18.31h1.63l-.47 3.27h.47z"/>
            </g>
            <g id="lh-gauge--pwa__installable-badge">
              <circle fill="#FFFFFF" cx="10" cy="10" r="10"></circle>
              <path fill="#009688" d="M10 4.167A5.835 5.835 0 0 0 4.167 10 5.835 5.835 0 0 0 10 15.833 5.835 5.835 0 0 0 15.833 10 5.835 5.835 0 0 0 10 4.167zm2.917 6.416h-2.334v2.334H9.417v-2.334H7.083V9.417h2.334V7.083h1.166v2.334h2.334v1.166z"/>
            </g>
          </defs>
          <g stroke="none" fill-rule="nonzero">
            <!-- Background and PWA logo (color by default) -->
            <circle fill="url(#lh-gauge--pwa__bg-disk__gradient)" cx="30" cy="30" r="30"></circle>
            <g class="lh-gauge--pwa__logo">
              <path fill="#3D3D3D" d="M35.66 19.39l.7-1.75h2L37.4 15 38.6 12l3.4 9h-2.51l-.58-1.61z"/>
              <path fill="#304FFE" d="M33.52 21l3.65-9h-2.42l-2.5 5.82L30.5 12h-1.86l-1.9 5.82-1.35-2.65-1.21 3.72L25.4 21h2.38l1.72-5.2 1.64 5.2z"/>
              <path fill="#3D3D3D" fill-rule="nonzero" d="M20.3 17.91h1.48c.45 0 .85-.05 1.2-.15l.39-1.18 1.07-3.3a2.64 2.64 0 0 0-.28-.37c-.55-.6-1.36-.91-2.42-.91H18v9h2.3V17.9zm1.96-3.84c.22.22.33.5.33.87 0 .36-.1.65-.29.87-.2.23-.59.35-1.15.35h-.86v-2.41h.87c.52 0 .89.1 1.1.32z"/>
            </g>
            <!-- No badges. -->
            <rect class="lh-gauge--pwa__component lh-gauge--pwa__na-line" fill="#FFFFFF" x="20" y="32" width="20" height="4" rx="2"></rect>
            <!-- Just fast and reliable. -->
            <g class="lh-gauge--pwa__component lh-gauge--pwa__fast-reliable-badge" transform="translate(20, 29)">
              <path fill="url(#lh-gauge--pwa__fast-reliable__shadow-gradient)" d="M33.63 19.49A30 30 0 0 1 16.2 30.36L3 17.14 17.14 3l16.49 16.49z"/>
              <use xlink:href="#lh-gauge--pwa__fast-reliable-badge" />
            </g>
            <!-- Just installable. -->
            <g class="lh-gauge--pwa__component lh-gauge--pwa__installable-badge" transform="translate(20, 29)">
              <path fill="url(#lh-gauge--pwa__installable__shadow-gradient)" d="M33.629 19.487c-4.272 5.453-10.391 9.39-17.415 10.869L3 17.142 17.142 3 33.63 19.487z"/>
              <use xlink:href="#lh-gauge--pwa__installable-badge" />
            </g>
            <!-- Fast and reliable and installable. -->
            <g class="lh-gauge--pwa__component lh-gauge--pwa__fast-reliable-installable-badges">
              <g transform="translate(8, 29)"> <!-- fast and reliable -->
                <path fill="url(#lh-gauge--pwa__fast-reliable__shadow-gradient)" d="M16.321 30.463L3 17.143 17.142 3l22.365 22.365A29.864 29.864 0 0 1 22 31c-1.942 0-3.84-.184-5.679-.537z"/>
                <use xlink:href="#lh-gauge--pwa__fast-reliable-badge" />
              </g>
              <g transform="translate(32, 29)"> <!-- installable -->
                <path fill="url(#lh-gauge--pwa__installable__shadow-gradient)" d="M25.982 11.84a30.107 30.107 0 0 1-13.08 15.203L3 17.143 17.142 3l8.84 8.84z"/>
                <use xlink:href="#lh-gauge--pwa__installable-badge" />
              </g>
            </g>
            <!-- Full PWA. -->
            <g class="lh-gauge--pwa__component lh-gauge--pwa__check-circle" transform="translate(18, 28)">
              <circle fill="#FFFFFF" cx="12" cy="12" r="12"></circle>
              <path fill="url(#lh-gauge--pwa__check-circle__gradient)" d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
            </g>
          </g>
        </svg>
        <div class="lh-gauge__label"></div>
      </a>
    </template>
    <!-- Lighthouse crtiical request chains component -->
    <template id="tmpl-lh-crc">
      <div class="lh-crc-container">
        <style>
          .lh-crc .tree-marker {
            width: 12px;
            height: 26px;
            display: block;
            float: left;
            background-position: top left;
          }
          .lh-crc .horiz-down {
            background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><g fill="%23D8D8D8" fill-rule="evenodd"><path d="M16 12v2H-2v-2z"/><path d="M9 12v14H7V12z"/></g></svg>');
          }
          .lh-crc .right {
            background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M16 12v2H0v-2z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>');
          }
          .lh-crc .up-right {
            background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v14H7zm2 12h7v2H9z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>');
          }
          .lh-crc .vert-right {
            background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v27H7zm2 12h7v2H9z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>');
          }
          .lh-crc .vert {
            background: url('data:image/svg+xml;utf8,<svg width="16" height="26" viewBox="0 0 16 26" xmlns="http://www.w3.org/2000/svg"><path d="M7 0h2v26H7z" fill="%23D8D8D8" fill-rule="evenodd"/></svg>');
          }
          .lh-crc .crc-tree {
            font-size: 14px;
            width: 100%;
            overflow-x: auto;
          }
          .lh-crc .crc-node {
            height: 26px;
            line-height: 26px;
            white-space: nowrap;
          }
          .lh-crc .crc-node__tree-value {
            margin-left: 10px;
          }
          .lh-crc .crc-node__chain-duration {
            font-weight: 700;
          }
          .lh-crc .crc-node__tree-hostname {
            color: #595959;
          }
          .lh-crc .crc-initial-nav {
            color: #595959;
            font-style: italic;
          }
          .lh-crc__summary-value {
            margin-bottom: 10px;
          }
        </style>
        <div>
          <div class="lh-crc__summary-value">
            <span class="lh-crc__longest_duration_label"></span> <b class="lh-crc__longest_duration"></b>
          </div>
        </div>
        <div class="lh-crc">
          <div class="crc-initial-nav"></div>
          <!-- stamp for each chain -->
          <template id="tmpl-lh-crc__chains">
            <div class="crc-node">
              <span class="crc-node__tree-marker">
              </span>
              <span class="crc-node__tree-value">
                <span class="crc-node__tree-file"><!-- fill me: node.request.url.file --></span>
                <span class="crc-node__tree-hostname">(<!-- fill me: node.request.url.host -->)</span>
              </span>
            </div>
          </template>
        </div>
      </div>
    </template>
    </div>
  </div>
`
  };
}

const Template = props => {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
};

export default Template;