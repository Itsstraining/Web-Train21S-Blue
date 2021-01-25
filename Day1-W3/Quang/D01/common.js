(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "c14U":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_cart_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/cart.models */ "mA9N");



class CartService {
    constructor() {
        this.item = [];
    }
    add(item) {
        for (let i = 0; i < this.item.length; i++) {
            if (this.item[i].item.id == item.id) {
                this.item[i].quantity++;
                return;
            }
        }
        this.item.push(new _models_cart_models__WEBPACK_IMPORTED_MODULE_1__["Cart"](item, 1));
    }
    remove(item) {
        for (let i = 0; i < this.item.length; i++) {
            if (this.item[i].item.id == item.id) {
                if (this.item[i].quantity >= 1) {
                    this.item[i].quantity--;
                }
                // this.item.push(new Cart(item, this.item[i].quantity--));
                return;
            }
        }
    }
    removeAllOfAnItem(item) {
        for (let i = 0; i < this.item.length; i++) {
            if (this.item[i].item.id == item.id) {
                if (this.item = this.item.splice(i, 1))
                    return;
            }
        }
    }
    clear() {
        this.item.length = 0;
    }
    get grandTotal() {
        let total = 0;
        for (let item of this.item) {
            total += item.totalPrice;
        }
        return total;
    }
    get Cart() {
        return this.item;
    }
    getQuantityByItem(item) {
        let r = this.item.find((p) => p.item.id == item.id);
        return r == undefined ? 0 : r.quantity;
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mA9N":
/*!***************************************!*\
  !*** ./src/app/models/cart.models.ts ***!
  \***************************************/
/*! exports provided: Cart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
class Cart {
    constructor(item, quantity) {
        this.item = item;
        this.quantity = quantity;
    }
    get totalPrice() {
        return this.item.price * this.quantity;
    }
}


/***/ })

}]);
//# sourceMappingURL=common.js.map