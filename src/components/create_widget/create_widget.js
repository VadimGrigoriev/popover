export default class Widget {
  constructor(container) {
    if (typeof container === 'string') {
      container = document.querySelector(container);
    }
    this.container = container;
    this.widgetElement = null;
  }

  createWidget(message) {
    const widgetElement = document.createElement('button');
    widgetElement.classList.add('widget-button');
    widgetElement.textContent = message;
    this.container.appendChild(widgetElement);
  }
}
