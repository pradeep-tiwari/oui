
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   const examples = null; import readme from 'raw-loader!../../../../src/components/Pagination/README.md';

  const sassData = {"name":"Pagination\n","description":"This is a variation of the navigation object.","start":{"line":1,"column":1},"end":{"line":16,"column":4},"example":[{"type":"html","description":null,"code":"<ol class=\"#{$namespace}nav #{$namespace}pagination\">\n  <li class=\"#{$namespace}pagination__first\"><a href=\"#\">First</a></li>\n  <li class=\"#{$namespace}pagination__prev\"><a href=\"#\">Previous</a></li>\n  <li><a href=\"/page/1\">1</a></li>\n  <li><a href=\"/page/2\">2</a></li>\n  <li class=\"#{$namespace}pagination__current\"><a href=\"/page/3\">3</a></li>\n  <li><a href=\"/page/4\">4</a></li>\n  <li><a href=\"/page/5\">5</a></li>\n  <li class=\"#{$namespace}pagination__next\"><a href=\"/page/next\">Next</a></li>\n  <li class=\"#{$namespace}pagination__last\"><a href=\"/page/last\">Last</a></li>\n</ol>"}]};
  const reactData = null;

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class PaginationComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default PaginationComponent
