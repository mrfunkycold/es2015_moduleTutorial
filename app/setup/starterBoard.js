import $ from 'jquery';

const views = [
  { text: 'warm up', className: 'one' },
  { text: 'import 3rd party', className: 'two' },
  { text: 'export/import default', className: 'three' },
  { text: 'export/import default shorthand', className: 'four' },
  { text: 'export/import named individual', className: 'five' },
  { text: 'export/import named individual pt. 2', className: 'six' },
  { text: 'export/import named individual with alias', className: 'seven' },
  { text: 'export/import named individual w/ alias pt. 2', className: 'eight' },
  { text: 're-exporting modules', className: 'nine' },
  { text: 'es2015 to amd', className: 'ten' }
];

function createView(view) {
  return $(`<div class="lesson_incomplete ${view.className}" />`).text(view.text);
}

function run() {

  var $views = views.map(createView);
  var $board = $('<div class="board" />');

  $board.append($views);
  return $board;
}


export default { run };

