/**
@license
Copyright 2017 The Advanced REST client authors <arc@mulesoft.com>
Licensed under the Apache License, Version 2.0 (the "License"); you may not
use this file except in compliance with the License. You may obtain a copy of
the License at
http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
License for the specific language governing permissions and limitations under
the License.
*/
/**
## Styles for code mirror linter

## Usage example

```javascript
import linterStyles from '@advanced-rest-client/code-mirror-linter/lint-style.js';

class MyElement extends LitElement {
  static get styles() {
    return [
      linterStyles,
      css`:host { ... }`
    ];
  }
}
*/
import { css } from 'lit-element';

export default css`/* The lint marker gutter */
.CodeMirror-lint-markers {
  width: 16px;
}

.CodeMirror-lint-tooltip {
  background-color: infobackground;
  border: 1px solid black;
  border-radius: 4px 4px 4px 4px;
  color: infotext;
  font-family: monospace;
  font-size: 10pt;
  overflow: hidden;
  padding: 2px 5px;
  position: fixed;
  white-space: pre;
  white-space: pre-wrap;
  z-index: 100;
  max-width: 600px;
  opacity: 0;
  transition: opacity .4s;
}

.CodeMirror-lint-mark-error,
.CodeMirror-lint-mark-warning {
  background-position: left bottom;
  background-repeat: repeat-x;
}

.CodeMirror-lint-mark-error {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sJDw4cOCW1/KIAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAHElEQVQI12NggIL/DAz/GdA5/xkY/qPKMDAwAADLZwf5rvm+LQAAAABJRU5ErkJggg==");
}

.CodeMirror-lint-mark-warning {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sJFhQXEbhTg7YAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAMklEQVQI12NkgIIvJ3QXMjAwdDN+OaEbysDA4MPAwNDNwMCwiOHLCd1zX07o6kBVGQEAKBANtobskNMAAAAASUVORK5CYII=");
}

.CodeMirror-lint-marker-error,
.CodeMirror-lint-marker-warning {
  background-position: center center;
  background-repeat: no-repeat;
  cursor: pointer;
  display: inline-block;
  height: 16px;
  width: 16px;
  vertical-align: middle;
  position: relative;
}

.CodeMirror-lint-message-error,
.CodeMirror-lint-message-warning {
  padding-left: 18px;
  background-position: top left;
  background-repeat: no-repeat;
}

.CodeMirror-lint-marker-error,
.CodeMirror-lint-message-error {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAHlBMVEW7AAC7AACxAAC7AAC7AAAAAAC4AAC5AAD///+7AAAUdclpAAAABnRSTlMXnORSiwCK0ZKSAAAATUlEQVR42mWPOQ7AQAgDuQLx/z8csYRmPRIFIwRGnosRrpamvkKi0FTIiMASR3hhKW+hAN6/tIWhu9PDWiTGNEkTtIOucA5Oyr9ckPgAWm0GPBog6v4AAAAASUVORK5CYII=");
}

.CodeMirror-lint-marker-warning,
.CodeMirror-lint-message-warning {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAANlBMVEX/uwDvrwD/uwD/uwD/uwD/uwD/uwD/uwD/uwD6twD/uwAAAADurwD2tQD7uAD+ugAAAAD/uwDhmeTRAAAADHRSTlMJ8mN1EYcbmiixgACm7WbuAAAAVklEQVR42n3PUQqAIBBFUU1LLc3u/jdbOJoW1P08DA9Gba8+YWJ6gNJoNYIBzAA2chBth5kLmG9YUoG0NHAUwFXwO9LuBQL1giCQb8gC9Oro2vp5rncCIY8L8uEx5ZkAAAAASUVORK5CYII=");
}

.CodeMirror-lint-marker-multiple {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAMAAADzjKfhAAAACVBMVEUAAAAAAAC/v7914kyHAAAAAXRSTlMAQObYZgAAACNJREFUeNo1ioEJAAAIwmz/H90iFFSGJgFMe3gaLZ0od+9/AQZ0ADosbYraAAAAAElFTkSuQmCC");
  background-repeat: no-repeat;
  background-position: right bottom;
  width: 100%;
  height: 100%;
}`;
