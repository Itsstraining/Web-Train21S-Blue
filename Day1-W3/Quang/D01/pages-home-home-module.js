(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/item-list/item-list.component */ "LP8G");




class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-item-list");
    } }, directives: [_components_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_2__["ItemListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "5B+X":
/*!***********************************************!*\
  !*** ./src/app/services/list-data.service.ts ***!
  \***********************************************/
/*! exports provided: ListDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDataService", function() { return ListDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ListDataService {
    constructor() {
        this.list = [{
                id: "ITEM 01",
                name: "Sữa Nan Optipro 4 1.8kg (2-6 tuổi)",
                price: 645,
                inStock: true,
                imgUrl: 'https://cdn.concung.com/2020/08/43151-64234-cat/nestle-nan-optipro-so-4-1-8-kg-2-6-tuoi.jpg',
            }, {
                id: "ITEM 02",
                name: "Bỉm tã quần Huggies Dry size L 68 miếng (9-14kg)",
                price: 339,
                inStock: false,
                imgUrl: 'https://cdn.concung.com/2019/08/23891-51743-cat/ta-quan-huggies-dry-pants-goi-cuc-dai-l-9-14kg-68-mieng.jpg',
            }, {
                id: "ITEM 03",
                name: "Combo 4 Khăn ướt ConCung Gentle Care Hàn Quốc cho da nhạy cảm, 100 tờ (màu hồng)",
                price: 168,
                inStock: true,
                imgUrl: 'https://cdn.concung.com/2020/09/47243-65295-cat/combo-4-khan-uot-concung-gentle-care-han-quoc-cho-da-nhay-cam-100-to-mau-hong.jpg',
            }, {
                id: "ITEM 04",
                name: "Combo 2 lon sữa Nan Optipro 4 900g, HMO (2-6 tuổi)",
                price: 710,
                inStock: true,
                imgUrl: 'https://cdn.concung.com/2020/11/44610-68978-cat/combo-2-lon-nestle-nan-optipro-4-900g.jpg',
            }, {
                id: "ITEM 05",
                name: "Combo 2 Sữa Glico Icreo số 1 820g - Combo 2 lon (9-36 tháng)",
                price: 1980,
                inStock: true,
                imgUrl: 'https://cdn.concung.com/2020/09/32890-64808-cat/glico-icreo-so-1-820g-combo-2-lon.jpg',
            }, {
                id: "ITEM 06",
                name: "Bỉm tã quần Merries size L 44 miếng (9-14kg)",
                price: 385,
                inStock: true,
                imgUrl: 'https://cdn.concung.com/2019/09/19188-52403-cat/ta-quan-merries-l-9-14kg-44-mieng.jpg',
            }, {
                id: "ITEM 07",
                name: "Dung dịch giặt quần áo D-nee 3L Tím",
                price: 185,
                inStock: true,
                imgUrl: 'https://cdn.concung.com/2019/07/12598-50970-cat/dung-dich-giat-xa-q-ao-em-be-d-nee-tim-3000ml.jpg',
            }, {
                id: "ITEM 08",
                name: "Nhiệt kế hồng ngoại đo trán Microlife FR1MF1",
                price: 1000,
                inStock: true,
                imgUrl: 'https://cdn.concung.com/17011-24117-cat/nhiet-ke-hong-ngoai-do-tran-microlife-fr1mf.jpg',
            }, {
                id: "ITEM 09",
                name: "Combo 4 Bánh Ăn Dặm Gerber vị Táo Dâu 42g",
                price: 276,
                inStock: true,
                imgUrl: 'https://cdn.concung.com/2020/09/47705-65534-cat/banh-an-dam-gerber-vi-tao-dau-42g.jpg',
            }, {
                id: "ITEM 010",
                name: "Bột ăn dặm Ridielac Gold 4 Vị Mặn HG 200g",
                price: 64,
                inStock: true,
                imgUrl: 'https://cdn.concung.com/2019/07/41863-51433-cat/bot-an-dam-ridielac-gold-4-vi-man-hg-200g.jpg',
            }, {
                id: "ITEM 010",
                name: "Ty ngậm Philips Avent trong suốt (SCF170/18)",
                price: 245,
                inStock: true,
                imgUrl: 'https://cdn.concung.com/2019/05/42102-48833-cat/ty-ngam-philips-avent-trong-suot-scf170-18-0-6m.jpg',
            }, {
                id: "ITEM 010",
                name: "Tông đơ cắt tóc cho bé ConCung Good",
                price: 295,
                inStock: true,
                imgUrl: 'https://cdn.concung.com/2020/08/45846-64606-cat/tong-do-cat-toc-cho-be-concung-good.jpg',
            }
        ];
    }
    addLists(item) {
        this.list.push(item);
    }
    deleteList(pos) {
        this.list = this.list.splice(pos, 1);
    }
}
ListDataService.ɵfac = function ListDataService_Factory(t) { return new (t || ListDataService)(); };
ListDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ListDataService, factory: ListDataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "99Un":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "9oos");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "1LmZ");
/* harmony import */ var _components_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/item-list/item-list.component */ "LP8G");
/* harmony import */ var _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list/list.component */ "yD7U");







class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _components_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_4__["ItemListComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _components_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_4__["ItemListComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "9oos":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "1LmZ");





const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "LP8G":
/*!************************************************************************!*\
  !*** ./src/app/pages/home/components/item-list/item-list.component.ts ***!
  \************************************************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_list_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/list-data.service */ "5B+X");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list/list.component */ "yD7U");





function ItemListComponent_app_list_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-list", 3);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1);
} }
class ItemListComponent {
    constructor(listData) {
        this.listData = listData;
    }
    ngOnInit() {
        this.itemList = this.listData.list;
    }
}
ItemListComponent.ɵfac = function ItemListComponent_Factory(t) { return new (t || ItemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_list_data_service__WEBPACK_IMPORTED_MODULE_1__["ListDataService"])); };
ItemListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemListComponent, selectors: [["app-item-list"]], decls: 3, vars: 1, consts: [[1, "parent"], [1, "div"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"]], template: function ItemListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ItemListComponent_app_list_2_Template, 1, 1, "app-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.itemList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"]], styles: ["app-list[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  border-top: 50px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 300px));\n  justify-content: center;\n  border-radius: 10pt;\n}\n\n.parent[_ngcontent-%COMP%] {\n  display: list-item;\n  width: 99vw;\n}\n\n.div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL2l0ZW0tbGlzdC9pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZEQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2NvbXBvbmVudHMvaXRlbS1saXN0L2l0ZW0tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1saXN0IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wOiA1MHB4O1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDMwMHB4KSk7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHQ7XHJcbn1cclxuXHJcbi5wYXJlbnQge1xyXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgd2lkdGg6IDk5dnc7XHJcbiAgICAvLyBoZWlnaHQ6IDUwdnc7XHJcbn1cclxuXHJcbi5kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item-list',
                templateUrl: './item-list.component.html',
                styleUrls: ['./item-list.component.scss']
            }]
    }], function () { return [{ type: src_app_services_list_data_service__WEBPACK_IMPORTED_MODULE_1__["ListDataService"] }]; }, null); })();


/***/ }),

/***/ "yD7U":
/*!**************************************************************!*\
  !*** ./src/app/pages/home/components/list/list.component.ts ***!
  \**************************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ListComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "T\u00ECnh tr\u1EA1ng: C\u00F2n h\u00E0ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ListComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "T\u00ECnh tr\u1EA1ng: H\u1EBFt h\u00E0ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ListComponent {
    constructor(CartService) {
        this.CartService = CartService;
        this.quantity = 0;
    }
    ngOnInit() {
        this.quantity = this.CartService.getQuantityByItem(this.item);
    }
    onClickAdd() {
        this.CartService.add(this.item);
        this.quantity = this.CartService.getQuantityByItem(this.item);
    }
    onClickRemove() {
        this.CartService.remove(this.item);
        this.quantity = this.CartService.getQuantityByItem(this.item);
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], inputs: { item: "item" }, decls: 18, vars: 7, consts: [[1, "card"], ["width", "280", "height", "156", 1, "img", 3, "src"], [1, "container"], [4, "ngIf"], [1, "quantityBar"], [3, "click"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ListComponent_p_9_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ListComponent_p_10_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_12_listener() { return ctx.onClickRemove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ListComponent_Template_button_click_16_listener() { return ctx.onClickAdd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.item.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ID:", ctx.item.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("T\u00EAn: ", ctx.item.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Gi\u00E1: ", ctx.item.price * 1000, "VN\u0110");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.inStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.item.inStock);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.quantity);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  border-radius: 5px;\n  \n  margin: 10px;\n}\n\n\n\nimg[_ngcontent-%COMP%] {\n  border-radius: 25px;\n  width: 200px;\n  height: 200px;\n  margin-left: 10%;\n}\n\n.container[_ngcontent-%COMP%] {\n  margin-left: 5%;\n}\n\n.quantityBar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9jb21wb25lbnRzL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNJLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUNJLDhFQUFBOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBQ1I7O0FBRUk7RUFDSSxlQUFBO0FBQ1I7O0FBRUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFDUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLmNhcmQge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAvKiA1cHggcm91bmRlZCBjb3JuZXJzICovXHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLyogQWRkIHJvdW5kZWQgY29ybmVycyB0byB0aGUgdG9wIGxlZnQgYW5kIHRoZSB0b3AgcmlnaHQgY29ybmVyIG9mIHRoZSBpbWFnZSAqL1xyXG4gICAgXHJcbiAgICBpbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucXVhbnRpdHlCYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.scss']
            }]
    }], function () { return [{ type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"] }]; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map