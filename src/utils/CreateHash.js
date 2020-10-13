"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHash = void 0;
/* eslint-disable import/prefer-default-export */
const bcryptjs_1 = require("bcryptjs");
function createHash(password) {
    const saltRounds = 10;
    const salt = bcryptjs_1.genSaltSync(saltRounds);
    return bcryptjs_1.hashSync(password, salt);
}
exports.createHash = createHash;
