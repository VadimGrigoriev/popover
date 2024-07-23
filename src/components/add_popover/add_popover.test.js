import Popover from './add_popover';

describe('Popover', () => {
  let widgetButton;
  let popover;

  beforeEach(() => {
    document.body.innerHTML = '<button class="widget-button">Click me</button>';
    widgetButton = document.querySelector('.widget-button');
    popover = new Popover();
  });

  test('creates a popover', () => {
    expect(popover.popover).toBeTruthy();
    expect(popover.popover.classList.contains('popover')).toBe(true);
  });

  test('toggles popover visibility on button click', () => {
    widgetButton.click();
    expect(popover.isVisible).toBe(true);
    expect(popover.popover.style.display).toBe('block');

    widgetButton.click();
    expect(popover.isVisible).toBe(false);
    expect(popover.popover.style.display).toBe('none');
  });

  test('hides popover when clicking outside', () => {
    widgetButton.click();
    expect(popover.isVisible).toBe(true);

    document.body.click();
    expect(popover.isVisible).toBe(false);
    expect(popover.popover.style.display).toBe('none');
  });

  test('positions popover correctly', () => {
    jest.spyOn(widgetButton, 'getBoundingClientRect').mockReturnValue({ bottom: 100 });
    widgetButton.click();
    expect(popover.popover.style.bottom).toBe('100px');
  });
});
