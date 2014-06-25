
function Model(attrs, opts) {
    if (!(this instanceof Model)) return new Model(opts);
    opts = opts || {};

    this.attrs = attrs || {};
    this.list = opts.list || undefined;

    if (this.seal) {
        Object.seal(this.attrs);
    }
}

Model.prototype.set = function set(key, value) {
    if (!key || !value) {
        throw new Error('Must have a `key` and `value`');
    }

    this.attrs[key] = value;
};

Model.prototype.get = function get(key) {
    return this.attrs[key];
};
