export default class Popover {
  constructor() {
    this.widgetButton = document.querySelector('.widget-button');
    this.popover = null;
    this.isVisible = false;

    this.togglePopover = this.togglePopover.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.checkAndHidePopover = this.checkAndHidePopover.bind(this);

    this.createPopover();
    this.widgetButton.addEventListener('click', this.togglePopover);
    document.addEventListener('click', this.checkAndHidePopover);
    window.addEventListener('resize', this.handleResize);
    window.addEventListener('scroll', this.handleResize);
  }

  createPopover() {
    this.popover = document.createElement('div');
    this.popover.classList.add('popover');

    const popoverTitle = document.createElement('div');
    popoverTitle.classList.add('popover-title');
    popoverTitle.textContent = 'Popover title';
    this.popover.appendChild(popoverTitle);

    const popoverContent = document.createElement('div');
    popoverContent.classList.add('popover-content');
    popoverContent.textContent = 'And here`s some amazing content. It`s very engaging. Right?';
    this.popover.appendChild(popoverContent);

    const arrow = document.createElement('div');
    arrow.classList.add('popover-arrow');
    this.popover.appendChild(arrow);
  }

  togglePopover(e) {
    e.preventDefault();
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.showPopover();
    } else {
      this.hidePopover();
    }
  }

  showPopover() {
    document.body.appendChild(this.popover);
    this.popover.style.display = 'block';
    this.positionPopover();
  }

  hidePopover() {
    this.popover.style.display = 'none';
  }

  positionPopover() {
    const buttonRect = this.widgetButton.getBoundingClientRect();
    this.popover.style.bottom = `${buttonRect.bottom}px`;
  }

  handleResize() {
    if (this.isVisible) {
      this.positionPopover();
    }
  }

  checkAndHidePopover(e) {
    if (!this.isVisible) {
      return;
    }
    if (!this.popover.contains(e.target) && e.target !== this.widgetButton) {
      this.isVisible = false;
      this.hidePopover();
    }
  }
}
