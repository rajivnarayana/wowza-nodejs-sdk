"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const request_promise_1 = require("../request-promise");
function list() {
    return __awaiter(this, void 0, Promise, function* () {
        let { response, body } = yield request_promise_1.get('/publishers');
        if (body.publishers) {
            return body.publishers;
        }
        let list = JSON.parse(body);
        return list;
    });
}
exports.list = list;
function create(publisher) {
    return __awaiter(this, void 0, Promise, function* () {
        try {
            let { response, body } = yield request_promise_1.post('/publishers', {
                body: publisher,
                json: true,
            });
            return body;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    });
}
exports.create = create;
function remove(publisherName) {
    return __awaiter(this, void 0, Promise, function* () {
        let { response, body } = yield request_promise_1.del(`/publishers/${publisherName}`);
        return body;
    });
}
exports.remove = remove;
//# sourceMappingURL=index.js.map