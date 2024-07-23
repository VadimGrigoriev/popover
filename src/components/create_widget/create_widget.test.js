import Widget from './create_widget';

describe('Widget', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  test('creates a widget button', () => {
    const widget = new Widget(container);
    widget.createWidget('Test Message');

    const button = container.querySelector('.widget-button');
    expect(button).not.toBeNull();
    expect(button.textContent).toBe('Test Message');
  });
});
