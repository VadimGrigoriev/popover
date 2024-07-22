import Widget from '../components/create_widget/create_widget';
import Popover from '../components/add_popover/add_popover';

console.log('app.js bundled');

document.addEventListener('DOMContentLoaded', () => {
  const widget = new Widget('body');
  widget.createWidget('Click to toggle popover');
  const popover = new Popover();
});
