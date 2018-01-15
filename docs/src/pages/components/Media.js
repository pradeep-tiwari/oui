
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   const examples = null; import readme from 'raw-loader!../../../../src/components/Media/README.md';

  const sassData = {"name":"Media\n","description":"Place any image and text-like content side-by-side.","start":{"line":1,"column":1},"end":{"line":37,"column":4},"example":[{"type":"html","description":"Image on the left","code":"<div class=\"#{$namespace}media\">\n  <img src=\"https://placekitten.com/g/50/50\" alt=\"\" class=\"#{$namespace}media__img\">\n  <div class=\"#{$namespace}media__body\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero similique aut iste, labore esse delectus molestias, beatae sapiente nemo voluptates quam corporis velit harum quia eaque accusantium nam sint fugit!</p>\n  </div>\n</div>"},{"type":"html","description":"Image on the right","code":"<div class=\"#{$namespace}media\">\n  <div class=\"#{$namespace}media__body\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero similique aut iste, labore esse delectus molestias, beatae sapiente nemo voluptates quam corporis velit harum quia eaque accusantium nam sint fugit!</p>\n  </div>\n  <img src=\"https://placekitten.com/g/50/50\" alt=\"\" class=\"#{$namespace}media__img--rev\">\n</div>"},{"type":"html","description":"Nested","code":"<div class=\"#{$namespace}media\">\n  <img src=\"https://placekitten.com/g/50/50\" alt=\"\" class=\"#{$namespace}media__img\">\n  <div class=\"#{$namespace}media__body\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero similique aut iste, labore esse delectus molestias, beatae sapiente nemo voluptates quam corporis velit harum quia eaque accusantium nam sint fugit!</p>\n    <div class=\"#{$namespace}media push--bottom\">\n      <img src=\"https://placekitten.com/g/25/25\" alt=\"\" class=\"#{$namespace}media__img\">\n      <div class=\"#{$namespace}media__body\">\n        <p class=\"micro\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero similique aut iste, labore esse delectus molestias, beatae sapiente nemo voluptates quam nam sint fugit!</p>\n      </div>\n    </div>\n    <div class=\"#{$namespace}media\">\n      <img src=\"https://placekitten.com/g/25/25\" alt=\"\" class=\"#{$namespace}media__img\">\n      <div class=\"#{$namespace}media__body\">\n        <p class=\"micro\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero similique aut iste, labore esse delectus molestias, beatae sapiente nemo voluptates quam nam sint fugit!</p>\n      </div>\n    </div>\n  </div>\n</div>"}]};
  const reactData = null;

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class MediaComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default MediaComponent
