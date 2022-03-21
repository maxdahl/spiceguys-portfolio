let instance;

class TouchHandler {
  constructor() {
    if (instance) {
      throw new Error("You can only create one instance!");
    }
    instance = this;

    this.touchstart = { x: 0, y: 0 };
    this.touchmove = { x: 0, y: 0 };
    this.eventHandlers = {
      l: new Set(),
      r: new Set(),
      u: new Set(),
      d: new Set(),
    };

    window.addEventListener("touchstart", this.onTouch, {
      passive: false,
    });
    window.addEventListener("touchmove", this.onTouch, {
      passive: false,
    });
    window.addEventListener("touchend", this.onTouch, {
      passive: false,
    });
  }

  addEventHandler(direction, handler) {
    if (typeof handler !== "function")
      throw new Error("handler needs to be a function");

    if (typeof direction === "string") {
      direction = direction[0].toLowerCase();
    }

    if (!this.eventHandlers[direction])
      throw new Error("Invalid direction: " + direction);

    this.eventHandlers[direction].add(handler);
  }

  rmEventHandler(direction, handler) {
    if (!this.eventHandlers[direction])
      throw new Error("Invalid direction: " + direction);

    this.eventHandlers[direction].delete(handler);
  }

  onTouch(e) {
    switch (e.type) {
      case "touchstart":
      case "touchmove":
        instance[e.type].x = e.touches[0].pageX;
        instance[e.type].y = e.touches[0].pageY;
        break;

      case "touchend":
        const xMovement = Math.abs(
          instance.touchmove.x - instance.touchstart.x
        );
        const yMovement = Math.abs(
          instance.touchmove.y - instance.touchstart.y
        );

        if (yMovement > xMovement) {
          if (instance.touchmove.y > instance.touchstart.y) {
            instance.eventHandlers["u"].forEach((handler) => {
              handler(e);
            });
          } else {
            instance.eventHandlers["d"].forEach((handler) => {
              handler(e);
            });
          }
        } else {
          if (instance.touchmove.x > instance.touchstart.x) {
            instance.eventHandlers["l"].forEach((handler) => {
              handler(e);
            });
          } else {
            instance.eventHandlers["r"].forEach((handler) => {
              handler(e);
            });
          }
        }
    }
  }
}

const touchHandler = Object.freeze(new TouchHandler());
export default touchHandler;
