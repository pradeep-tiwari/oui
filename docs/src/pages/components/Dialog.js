
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   const examples = null; import readme from 'raw-loader!../../../../src/components/Dialog/README.md';

  const sassData = {"name":"Dialog\n","description":"","start":{"line":1,"column":1},"end":{"line":39,"column":4},"example":[{"type":"html","description":"Basic dialog","code":"<div class=\"#{$namespace}dialog\">\n  <div class=\"#{$namespace}dialog__header\">\n    <div class=\"#{$namespace}dialog__title\">Dialog Title</div>\n  </div>\n  <div class=\"#{$namespace}dialog__body\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ab quaerat dolor autem pariatur iure nisi debitis, dolores possimus ut, optio magni ratione incidunt cumque, inventore alias? Fugit, iusto eum.</p>\n  </div>\n  <div class=\"#{$namespace}dialog__footer oui-button-row--right\">\n    <button class=\"oui-button\">Cancel</button>\n    <button class=\"oui-button oui-button--highlight\">Done</button>\n  </div>\n  <div class=\"#{$namespace}dialog__close\">\n    <svg class=\"#{$namespace}icon\">\n      <use xlink:href=\"#close-16\"></use>\n    </svg>\n  </div>\n</div>"},{"type":"html","description":"Narrow dialog","code":"<div class=\"#{$namespace}dialog #{$namespace}dialog--narrow\">\n  <div class=\"#{$namespace}dialog__header\">\n    <div class=\"#{$namespace}dialog__title\">Dialog Title</div>\n  </div>\n  <div class=\"#{$namespace}dialog__body\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ab quaerat dolor autem pariatur iure nisi debitis, dolores possimus ut, optio magni ratione incidunt cumque, inventore alias? Fugit, iusto eum.</p>\n  </div>\n  <div class=\"#{$namespace}dialog__footer oui-button-row--right\">\n    <button class=\"oui-button\">Cancel</button>\n    <button class=\"oui-button oui-button--highlight\">Done</button>\n  </div>\n  <div class=\"#{$namespace}dialog__close\">\n    <svg class=\"#{$namespace}icon\">\n      <use xlink:href=\"#close-16\"></use>\n    </svg>\n  </div>\n</div>"}]};
  const reactData = null;

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class DialogComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default DialogComponent