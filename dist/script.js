function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}import * as bootstrap from "https://cdn.skypack.dev/bootstrap@5.1.3";
const placeholder = `
# Welcome To My Markdown Previewer

This is the textarea where you will enter text. Please see below for how to use markdown language.

------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------

# Headers
---------
# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

# List
------
- list item one
- list item two
- list item three

# Links
---------
[Link](https://learn.freecodecamp.org)

[Google](https://www.google.com "World's Most Popular Search Engine")

# Text Decorations
------------------
*italic*

**bold**

# Images
--------

![alt text](https://www.ohchr.org/sites/default/files/styles/hero_image_2/public/2021-10/Japan-53025983-EPA.jpg?itok=EedoqMwk 'Good Morning')

# Blockquote
------------
> "I think therefore I am not."

# Code
------
\`const I = think;\`

\`\`\`
return I && think ? "I am not" : "I am"
\`\`\`
`;

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
  langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: true });


class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleChange",






    e => this.setState({ mark: e.target.value }));this.state = { mark: placeholder };}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, "Markdown Previewer"), /*#__PURE__*/
      React.createElement("textarea", { id: "editor", value: this.state.mark, onChange: this.handleChange }), /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.mark) } })));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(MarkdownPreviewer, null), document.getElementById('root'));