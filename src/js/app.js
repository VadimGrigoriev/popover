import Widget from '../components/create_widget/create_widget';

console.log('app.js bundled');

document.addEventListener('DOMContentLoaded', () => {
  const widget = new Widget('body');
  widget.createWidget('Click to toggle popover');
});
