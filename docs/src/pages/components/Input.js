
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   
 import examples from '../../../../src/components/Input/example'; import readme from 'raw-loader!../../../../src/components/Input/README.md';

  const sassData = {"name":"Input\n","description":"","start":{"line":1,"column":1},"end":{"line":21,"column":4},"example":[{"type":"html","description":null,"code":"<label>\n  <span class=\"oui-label\">Name</span>\n  <input class=\"oui-text-input\" placeholder=\"Jane Doe\" />\n</label>"},{"type":"html","description":null,"code":"<label>\n  <span class=\"oui-label oui-label--disabled\">Name</span>\n  <input class=\"oui-text-input\" disabled placeholder=\"Jane Doe\" />\n</label>"},{"type":"html","description":null,"code":"<label class=\"#{$namespace}form-bad-news\">\n  <span class=\"oui-label oui-label--required\">\n    Experiment Hypothesis\n  </span>\n  <input class=\"oui-text-input\" placeholder=\"Jane Doe\" />\n  <div class=\"#{$namespace}form-note #{$namespace}form-note--bad-news\">This field is required.</div>\n</label>"}]};
  const reactData = {"description":"Generates an `input` element (optionally wrapped in a label) and accepts\nmost of the common input types.","displayName":"Input","methods":[{"name":"blur","docblock":null,"modifiers":[],"params":[],"returns":null},{"name":"renderInput","docblock":null,"modifiers":[],"params":[{"name":"{\n  isFilter,\n  displayError,\n  type,\n  value,\n  defaultValue,\n  placeholder,\n  isRequired,\n  isReadOnly,\n  isDisabled,\n  onInput,\n  onChange,\n  onBlur,\n  onKeyDown,\n  onFocus,\n  min,\n  max,\n  testSection,\n  focus,\n  textAlign }","type":null}],"returns":null}],"props":{"defaultValue":{"type":{"name":"string"},"required":false,"description":"The default value of the input used on initial render"},"displayError":{"type":{"name":"bool"},"required":false,"description":"Includes search icon if true"},"isDisabled":{"type":{"name":"bool"},"required":false,"description":"Prevents input from being modified and appears disabled"},"isFilter":{"type":{"name":"bool"},"required":false,"description":"Includes error if true"},"isOptional":{"type":{"name":"custom","raw":"function verifyIsOptionalProp(props) {\n  if (props.isOptional && !props.label) {\n    return new Error('Must include a value for the label prop to use the isOptional prop');\n  }\n  return null;\n}"},"required":false,"description":"Adds an optional label if there is a label provided\n @param {Object} props Object of props\n @returns {Error} Error or null"},"isReadOnly":{"type":{"name":"bool"},"required":false,"description":"Prevents input from being modified but doesn't appear disabled"},"isRequired":{"type":{"name":"bool"},"required":false,"description":"Prevents input from being submitted without value"},"label":{"type":{"name":"string"},"required":false,"description":"Text that describes the input"},"max":{"type":{"name":"number"},"required":false,"description":"Max value for the `input`. Should be used only when `type` is `number`."},"min":{"type":{"name":"number"},"required":false,"description":"Min value for the `input`. Should be used only when `type` is `number`."},"onBlur":{"type":{"name":"func"},"required":false,"description":"Function that fires when the input loses focus. It fires regardless of\nwhether the value has changed."},"onChange":{"type":{"name":"func"},"required":false,"description":"Function that fires when the input loses focus after the value changes"},"onFocus":{"type":{"name":"func"},"required":false,"description":"Function that fires when the input gains focus"},"onInput":{"type":{"name":"func"},"required":false,"description":"Function that fires on keypress"},"onKeyDown":{"type":{"name":"func"},"required":false,"description":"Function that fires when a key is pressed down"},"placeholder":{"type":{"name":"string"},"required":false,"description":"Input placeholder text"},"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests"},"textAlign":{"type":{"name":"enum","value":[{"value":"'left'","computed":false},{"value":"'right'","computed":false}]},"required":false,"description":"Align text inside input. Default is left."},"type":{"type":{"name":"enum","value":[{"value":"'text'","computed":false},{"value":"'password'","computed":false},{"value":"'date'","computed":false},{"value":"'number'","computed":false},{"value":"'email'","computed":false},{"value":"'url'","computed":false},{"value":"'search'","computed":false},{"value":"'tel'","computed":false}]},"required":true,"description":"Supported input types"},"value":{"type":{"name":"string"},"required":false,"description":"Text within the input"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class InputComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default InputComponent
