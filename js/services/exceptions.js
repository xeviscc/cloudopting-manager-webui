function WebUIException(message) {
    this.name = 'WebUIException';
    this.message = message;
}
WebUIException.prototype = new Error();
WebUIException.prototype.constructor = WebUIException;