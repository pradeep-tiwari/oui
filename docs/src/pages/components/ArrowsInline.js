
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/ArrowsInline/react.json'; import examples from '../../../../src/components/ArrowsInline/example'; import readme from 'raw-loader!../../../../src/components/ArrowsInline/README.md'; import sassExamples from '../../../../data/components/ArrowsInline/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class ArrowsInlineComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default ArrowsInlineComponent