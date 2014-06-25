
function Model(attrs, opts) {
    if (!(this instanceof Model)) return new Model(attrs, opts);

    opts = opts || {};

    this.attrs = attrs || {};
    this.list = opts.list || undefined;

    if (this.sealed) {
        Object.seal(this.attrs);
    }
}

Model.prototype.set = function set(key, value) {
    if (!key || !value) {
        throw new Error('Must have a `key` and `value`');
    }

    Object.defineProperty(this.attrs, key, {value: value});
};

Model.prototype.get = function get(key) {
    return this.attrs[key];
};

Model.prototype.seal = function seal() {
    Object.seal(this.attrs);
};

module.exports = Model;
