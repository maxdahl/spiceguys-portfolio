let instance;

class ActiveElement {
  constructor() {
    if (instance) {
      throw new Error("Only one instance allowed");
    }

    instance = this;

    this.el = null;
    this.onChange = (element, oldElement) => {};
  }

  setElement(el) {
    if (this.el !== el) {
      const oldElement = this.el;
      this.el = el;
      this.onChange(el, oldElement);
    }
  }

  getElement() {
    return this.el;
  }
}

const activeElement = new ActiveElement();
export default activeElement;
