let instance;

class ActiveElement {
  constructor() {
    if (instance) {
      throw new Error("Only one instance allowed");
    }

    instance = this;

    this.el = null;
    this.onChange = (el) => {};
  }

  setElement(el) {
    if (this.el !== el) {
      this.el = el;
      this.onChange(el);
    }
  }

  getElement() {
    return this.el;
  }
}

const activeElement = new ActiveElement();
export default activeElement;
