(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, keywords, author, description, repository, scripts, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"fuxa","version":"1.0.1","keywords":[],"author":"frangoteam <4frango@gmail.com>","description":"Web-based Process Visualization (SCADA/HMI) software","repository":{"type":"git","url":"https://github.com/frangoteam/FUXA.git"},"scripts":{"ng":"ng","start":"ng serve --dev","start-ele":"ng serve --env=winele","start-demo":"ng serve --env=demo","build":"ng build","test":"ng test","lint":"ng lint","e2e":"ng e2e"},"dependencies":{"@angular/animations":"^6.0.0","@angular/cdk":"^6.0.0","@angular/common":"^6.0.0","@angular/compiler":"^6.0.0","@angular/core":"^6.0.0","@angular/forms":"^6.0.0","@angular/http":"^6.0.0","@angular/material":"^6.0.0","@angular/platform-browser":"^6.0.0","@angular/platform-browser-dynamic":"^6.0.0","@angular/router":"^6.0.0","@codebyjordan/scrollbar":"^2.1.6","bcryptjs":"^2.4.3","body-parser":"^1.18.2","core-js":"^2.4.1","express":"^4.16.4","file-saver":"^1.3.8","gulp-autoprefixer":"^5.0.0","gulp-concat":"^2.6.1","gulp-csso":"^3.0.1","gulp-htmlmin":"^4.0.0","gulp-minify":"^3.0.2","gulp-sass":"^4.0.1","gulp-sourcemaps":"^2.6.4","gulp-uglify":"^3.0.0","material-design-icons":"^3.0.1","ng5-slider":"^1.1.7","ngx-color-picker":"^7.4.0","ngx-drag-drop":"^1.1.0","ngx-toastr":"^8.10.2","rxjs":"6.5.2","socket.io-client":"^2.2.0","zone.js":"0.8.29"},"devDependencies":{"@angular-devkit/build-angular":"~0.6.0","@angular-devkit/core":"^0.7.3","@angular/cli":"^6.0.0","@angular/compiler-cli":"^6.0.0","@angular/language-service":"^6.0.0","@types/jasmine":"~2.5.53","@types/jasminewd2":"~2.0.2","@types/node":"~6.0.60","codelyzer":"^4.0.2","gulp":"^4.0.0","jasmine-core":"~2.6.2","jasmine-spec-reporter":"~4.1.0","karma":"^4.0.1","karma-chrome-launcher":"~2.1.1","karma-cli":"~1.0.1","karma-coverage-istanbul-reporter":"^1.2.1","karma-jasmine":"~1.1.0","karma-jasmine-html-reporter":"^0.2.2","protractor":"^5.4.0","ts-node":"~3.2.0","tslint":"~5.7.0","typescript":"^2.9.2"}};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_directives/dialog-draggable.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/_directives/dialog-draggable.directive.ts ***!
  \***********************************************************/
/*! exports provided: DialogDraggableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDraggableDirective", function() { return DialogDraggableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _modal_position_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-position.cache */ "./src/app/_directives/modal-position.cache.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DialogDraggableDirective = /** @class */ (function () {
    function DialogDraggableDirective(matDialogRef, container, positionCache) {
        this.matDialogRef = matDialogRef;
        this.container = container;
        this.positionCache = positionCache;
    }
    DialogDraggableDirective.prototype.ngOnInit = function () {
        var _this = this;
        var dialogType = this.matDialogRef.componentInstance.constructor;
        var cachedValue = this.positionCache.get(dialogType);
        this.offset = cachedValue || this._getOffset();
        this._updatePosition(this.offset.y, this.offset.x);
        this.matDialogRef.beforeClose().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe(function () { return _this.positionCache.set(dialogType, _this.offset); });
    };
    DialogDraggableDirective.prototype.onMouseDown = function (event) {
        var _this = this;
        this.mouseStart = { x: event.pageX, y: event.pageY };
        var mouseup$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(document, 'mouseup');
        this._subscription = mouseup$.subscribe(function () { return _this.onMouseup(); });
        var mousemove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["fromEvent"])(document, 'mousemove')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(mouseup$))
            .subscribe(function (e) { return _this.onMouseMove(e); });
        this._subscription.add(mousemove$);
    };
    DialogDraggableDirective.prototype.onMouseMove = function (event) {
        this.mouseDelta = { x: (event.pageX - this.mouseStart.x), y: (event.pageY - this.mouseStart.y) };
        this._updatePosition(this.offset.y + this.mouseDelta.y, this.offset.x + this.mouseDelta.x);
    };
    DialogDraggableDirective.prototype.onMouseup = function () {
        if (this._subscription) {
            this._subscription.unsubscribe();
            this._subscription = undefined;
        }
        if (this.mouseDelta) {
            this.offset.x += this.mouseDelta.x;
            this.offset.y += this.mouseDelta.y;
        }
    };
    DialogDraggableDirective.prototype._updatePosition = function (top, left) {
        this.matDialogRef.updatePosition({
            top: top + 'px',
            left: left + 'px'
        });
    };
    DialogDraggableDirective.prototype._getOffset = function () {
        var box = this.container['_elementRef'].nativeElement.getBoundingClientRect();
        return {
            x: box.left + pageXOffset,
            y: box.top + pageYOffset
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], DialogDraggableDirective.prototype, "onMouseDown", null);
    DialogDraggableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[mat-dialog-draggable]'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogContainer"],
            _modal_position_cache__WEBPACK_IMPORTED_MODULE_3__["ModalPositionCache"]])
    ], DialogDraggableDirective);
    return DialogDraggableDirective;
}());



/***/ }),

/***/ "./src/app/_directives/lazyFor.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/_directives/lazyFor.directive.ts ***!
  \**************************************************/
/*! exports provided: LazyForDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyForDirective", function() { return LazyForDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LazyForDirective = /** @class */ (function () {
    function LazyForDirective(vcr, tpl, iterableDiffers) {
        this.vcr = vcr;
        this.tpl = tpl;
        this.iterableDiffers = iterableDiffers;
        this.list = [];
        this.initialized = false;
        this.firstUpdate = true;
        this.lastChangeTriggeredByScroll = false;
    }
    Object.defineProperty(LazyForDirective.prototype, "lazyForOf", {
        set: function (list) {
            this.list = list;
            if (list) {
                this.differ = this.iterableDiffers.find(list).create();
                if (this.initialized) {
                    this.update();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    LazyForDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.templateElem = this.vcr.element.nativeElement;
        this.lazyForContainer = this.templateElem.parentElement;
        //Adding an event listener will trigger ngDoCheck whenever the event fires so we don't actually need to call
        //update here.
        this.lazyForContainer.addEventListener('scroll', function () {
            _this.lastChangeTriggeredByScroll = true;
        });
        this.initialized = true;
    };
    LazyForDirective.prototype.ngDoCheck = function () {
        if (this.differ && Array.isArray(this.list)) {
            if (this.lastChangeTriggeredByScroll) {
                this.update();
                this.lastChangeTriggeredByScroll = false;
            }
            else {
                var changes = this.differ.diff(this.list);
                if (changes !== null) {
                    this.update();
                }
            }
        }
    };
    /**
     * List update
     *
     * @returns {void}
     */
    LazyForDirective.prototype.update = function () {
        //Can't run the first update unless there is an element in the list
        if (this.list.length === 0) {
            this.vcr.clear();
            if (!this.firstUpdate) {
                this.beforeListElem.style.height = '0';
                this.afterListElem.style.height = '0';
            }
            return;
        }
        if (this.firstUpdate) {
            this.onFirstUpdate();
        }
        var listHeight = this.lazyForContainer.clientHeight;
        var scrollTop = this.lazyForContainer.scrollTop;
        //The height of anything inside the container but above the lazyFor content
        var fixedHeaderHeight = (this.beforeListElem.getBoundingClientRect().top - this.beforeListElem.scrollTop) -
            (this.lazyForContainer.getBoundingClientRect().top - this.lazyForContainer.scrollTop);
        //This needs to run after the scrollTop is retrieved.
        this.vcr.clear();
        var listStartI = Math.floor((scrollTop - fixedHeaderHeight) / this.itemHeight);
        listStartI = this.limitToRange(listStartI, 0, this.list.length);
        var listEndI = Math.ceil((scrollTop - fixedHeaderHeight + listHeight) / this.itemHeight);
        listEndI = this.limitToRange(listEndI, -1, this.list.length - 1);
        for (var i = listStartI; i <= listEndI; i++) {
            this.vcr.createEmbeddedView(this.tpl, {
                $implicit: this.list[i],
                index: i
            });
        }
        this.beforeListElem.style.height = listStartI * this.itemHeight + "px";
        this.afterListElem.style.height = (this.list.length - listEndI - 1) * this.itemHeight + "px";
    };
    /**
     * First update.
     *
     * @returns {void}
     */
    LazyForDirective.prototype.onFirstUpdate = function () {
        var sampleItemElem;
        if (this.itemHeight === undefined || this.itemTagName === undefined) {
            this.vcr.createEmbeddedView(this.tpl, {
                $implicit: this.list[0],
                index: 0
            });
            sampleItemElem = this.templateElem.nextSibling;
        }
        if (this.itemHeight === undefined) {
            this.itemHeight = sampleItemElem.clientHeight;
        }
        if (this.itemTagName === undefined) {
            this.itemTagName = sampleItemElem.tagName;
        }
        this.beforeListElem = document.createElement(this.itemTagName);
        this.templateElem.parentElement.insertBefore(this.beforeListElem, this.templateElem);
        this.afterListElem = document.createElement(this.itemTagName);
        this.templateElem.parentElement.insertBefore(this.afterListElem, this.templateElem.nextSibling);
        // If you want to use <li> elements
        if (this.itemTagName.toLowerCase() === 'li') {
            this.beforeListElem.style.listStyleType = 'none';
            this.afterListElem.style.listStyleType = 'none';
        }
        this.firstUpdate = false;
    };
    /**
     * Limit To Range
     *
     * @param {number} num - Element number.
     * @param {number} min - Min element number.
     * @param {number} max - Max element number.
     *
     * @returns {number}
     */
    LazyForDirective.prototype.limitToRange = function (num, min, max) {
        return Math.max(Math.min(num, max), min);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], LazyForDirective.prototype, "lazyForOf", null);
    LazyForDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[lazyFor]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]])
    ], LazyForDirective);
    return LazyForDirective;
}());



/***/ }),

/***/ "./src/app/_directives/modal-position.cache.ts":
/*!*****************************************************!*\
  !*** ./src/app/_directives/modal-position.cache.ts ***!
  \*****************************************************/
/*! exports provided: ModalPositionCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPositionCache", function() { return ModalPositionCache; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ModalPositionCache = /** @class */ (function () {
    function ModalPositionCache() {
        this._cache = new Map();
    }
    ModalPositionCache.prototype.set = function (dialog, position) {
        this._cache.set(dialog, position);
    };
    ModalPositionCache.prototype.get = function (dialog) {
        return this._cache.get(dialog);
    };
    ModalPositionCache = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ModalPositionCache);
    return ModalPositionCache;
}());



/***/ }),

/***/ "./src/app/_directives/ngx-draggable.directive.ts":
/*!********************************************************!*\
  !*** ./src/app/_directives/ngx-draggable.directive.ts ***!
  \********************************************************/
/*! exports provided: DraggableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraggableDirective", function() { return DraggableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DraggableDirective = /** @class */ (function () {
    function DraggableDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.dx = 0;
        this.dy = 0;
        this.canDrag = '';
        this.active = false;
        this.mustBePosition = ['absolute', 'fixed', 'relative'];
    }
    Object.defineProperty(DraggableDirective.prototype, "draggable", {
        set: function (val) {
            if (val === undefined || val === null || val === '')
                return;
            this.canDrag = val;
        },
        enumerable: true,
        configurable: true
    });
    DraggableDirective.prototype.ngOnInit = function () {
        this.renderer.setElementAttribute(this.el.nativeElement, 'draggable', 'true');
    };
    DraggableDirective.prototype.ngAfterViewInit = function () {
        try {
            var position = window.getComputedStyle(this.el.nativeElement).position;
            if (this.mustBePosition.indexOf(position) === -1) {
                console.warn(this.el.nativeElement, 'Must be having position attribute set to ' + this.mustBePosition.join('|'));
            }
        }
        catch (ex) {
            console.error(ex);
        }
    };
    DraggableDirective.prototype.ngOnDestroy = function () {
        this.renderer.setElementAttribute(this.el.nativeElement, 'draggable', 'false');
    };
    DraggableDirective.prototype.onDragStart = function (event) {
        this.active = false;
        if (this.draggableHeight && this.draggableHeight < event.offsetY) {
            return;
        }
        this.active = true;
        this.dx = event.x - this.el.nativeElement.offsetLeft;
        this.dy = event.y - this.el.nativeElement.offsetTop;
    };
    DraggableDirective.prototype.onDrag = function (event) {
        console.log(event.offsetY + ' ' + event.layerY);
        if (!this.active) {
            return;
        }
        this.doTranslation(event.x, event.y);
    };
    DraggableDirective.prototype.onDragEnd = function (event) {
        if (!this.active) {
            return;
        }
        this.dx = 0;
        this.dy = 0;
    };
    DraggableDirective.prototype.doTranslation = function (x, y) {
        if (!x || !y)
            return;
        this.renderer.setElementStyle(this.el.nativeElement, 'top', (y - this.dy) + 'px');
        this.renderer.setElementStyle(this.el.nativeElement, 'left', (x - this.dx) + 'px');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('draggable'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DraggableDirective.prototype, "draggable", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], DraggableDirective.prototype, "draggableHeight", void 0);
    DraggableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[draggable]',
            host: {
                '(dragstart)': 'onDragStart($event)',
                '(dragend)': 'onDragEnd($event)',
                '(drag)': 'onDrag($event)'
            }
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"]])
    ], DraggableDirective);
    return DraggableDirective;
}());



/***/ }),

/***/ "./src/app/_directives/number.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/_directives/number.directive.ts ***!
  \*************************************************/
/*! exports provided: NumberOnlyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberOnlyDirective", function() { return NumberOnlyDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumberOnlyDirective = /** @class */ (function () {
    function NumberOnlyDirective(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g); ///^-?[0-9]+(\.[0-9]*){0,1}$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Delete', 'Tab', 'End', 'Home', 'ArrowLeft', 'ArrowRight'];
    }
    NumberOnlyDirective.prototype.onKeyDown = function (event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = '';
        if (event.key === '-') {
            event.preventDefault();
            if (!current.startsWith('-')) {
                next = event.key + current;
                this.el.nativeElement.value = next;
            }
        }
        else {
            next = current.concat(event.key);
        }
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NumberOnlyDirective.prototype, "onKeyDown", null);
    NumberOnlyDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[numberOnly]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NumberOnlyDirective);
    return NumberOnlyDirective;
}());



/***/ }),

/***/ "./src/app/_helpers/custom-http.ts":
/*!*****************************************!*\
  !*** ./src/app/_helpers/custom-http.ts ***!
  \*****************************************/
/*! exports provided: CustomHttp, customHttpFactory, customHttpProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttp", function() { return CustomHttp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customHttpFactory", function() { return customHttpFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customHttpProvider", function() { return customHttpProvider; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomHttp = /** @class */ (function (_super) {
    __extends(CustomHttp, _super);
    function CustomHttp(backend, defaultOptions) {
        return _super.call(this, backend, defaultOptions) || this;
    }
    CustomHttp.prototype.get = function (url, options) {
        // return super.get(appConfig.apiUrl + url).catch(this.handleError);
        return _super.prototype.get.call(this, _app_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + url, this.addJwt(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(error._body);
        }));
    };
    CustomHttp.prototype.post = function (url, body, options) {
        // return super.post(appConfig.apiUrl + url, body).catch(this.handleError);
        return _super.prototype.post.call(this, _app_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + url, body, this.addJwt(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(error._body);
        }));
    };
    CustomHttp.prototype.put = function (url, body, options) {
        return _super.prototype.put.call(this, _app_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + url, body, this.addJwt(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(error._body);
        }));
    };
    CustomHttp.prototype.delete = function (url, options) {
        return _super.prototype.delete.call(this, _app_config__WEBPACK_IMPORTED_MODULE_3__["appConfig"].apiUrl + url, this.addJwt(options)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(error._body);
        }));
    };
    // private helper methods
    CustomHttp.prototype.addJwt = function (options) {
        // ensure request options and headers are not null
        options = options || new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]();
        options.headers = options.headers || new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
        // add authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            options.headers.append('Authorization', 'Bearer ' + currentUser.token);
        }
        return options;
    };
    CustomHttp.prototype.handleError = function (error) {
        if (error.status === 401) {
            // 401 unauthorized response so log user out of client
            window.location.href = '/login';
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error._body);
    };
    CustomHttp = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["ConnectionBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]])
    ], CustomHttp);
    return CustomHttp;
}(_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]));

function customHttpFactory(xhrBackend, requestOptions) {
    return new CustomHttp(xhrBackend, requestOptions);
}
var customHttpProvider = {
    provide: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"],
    useFactory: customHttpFactory,
    deps: [_angular_http__WEBPACK_IMPORTED_MODULE_2__["XHRBackend"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]]
};


/***/ }),

/***/ "./src/app/_helpers/define.ts":
/*!************************************!*\
  !*** ./src/app/_helpers/define.ts ***!
  \************************************/
/*! exports provided: Define */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Define", function() { return Define; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Define = /** @class */ (function () {
    function Define() {
    }
    Define.materialIcons = [
        // Action
        'accessibility', 'accessible', 'account_balance', 'account_box', 'account_circle', 'alarm', 'alarm_add', 'alarm_off',
        'alarm_on', 'all_out', 'android', 'announcement', 'aspect_ratio', 'assessment', 'assignment', 'assignment_ind', 'assignment_late',
        'assignment_return', 'assignment_returned', 'assignment_turned_in', 'autorenew', 'backup', 'book', 'bookmark', 'bookmark_border', 'bug_report', 'build',
        'cached', 'camera_enhance', 'change_history', 'check_circle', 'check_circle_outline', 'chrome_reader_mode', 'class', 'code',
        'compare_arrows', 'copyright', 'credit_card', 'dashboard', 'delete', 'delete_outline', 'description', 'dns',
        'done', 'done_all', 'done_outline', 'donut_large', 'donut_small', 'eject', 'euro_symbol', 'event', 'event_seat', 'exit_to_app',
        'explore', 'extension', 'face', 'favorite', 'favorite_border', 'feedback', 'find_in_page', 'find_replace', 'fingerprint', 'flight_land', 'flight_takeoff',
        'flip_to_back', 'flip_to_front', 'gavel', 'get_app', 'gif', 'grade', 'group_work', 'help', 'help_outline', 'highlight_off', 'history',
        'home', 'hourglass_empty', 'hourglass_full', 'important_devices', 'info', 'input', 'invert_colors', 'label',
        'language', 'launch', 'list', 'lock', 'lock_open', 'loyalty', 'markunread_mailbox', 'motorcycle', 'note_add', 'offline_pin',
        'opacity', 'open_in_browser', 'open_with', 'pageview', 'pan_tool', 'perm_camera_mic', 'perm_contact_calendar', 'perm_data_setting', 'perm_device_information', 'perm_identity', 'perm_media',
        'perm_phone_msg', 'perm_scan_wifi', 'pets', 'picture_in_picture', 'play_for_work', 'polymer', 'power_settings_new', 'print', 'query_builder',
        'question_answer', 'receipt', 'record_voice_over', 'reorder', 'report_problem', 'restore_page', 'room', 'rowing', 'search', 'settings',
        'settings_applications', 'settings_backup_restore', 'settings_bluetooth', 'settings_brightness', 'settings_cell', 'settings_ethernet',
        'settings_input_antenna', 'settings_input_component', 'settings_input_hdmi', 'settings_input_svideo',
        'settings_overscan', 'settings_phone', 'settings_power', 'settings_remote', 'settings_voice', 'shop', 'shopping_basket', 'shopping_cart', 'speaker_notes', 'spellcheck',
        'stars', 'store', 'subject', 'supervisor_account', 'swap_horiz', 'swap_horizontal_circle', 'swap_vert', 'swap_vertical_circle', 'tab',
        'tab_unselected', 'theaters', 'thumb_down', 'thumb_up', 'thumbs_up_down', 'timeline', 'toc', 'toll', 'touch_app', 'track_changes',
        'trending_down', 'trending_flat', 'trending_up', 'verified_user', 'view_agenda', 'view_array', 'view_carousel', 'view_column', 'view_day',
        'view_list', 'view_module', 'view_quilt', 'view_stream', 'view_week', 'visibility', 'visibility_off', 'watch_later', 'work',
        'zoom_in', 'zoom_out',
        // Alert
        'add_alert', 'error', 'error_outline', 'warning',
        // Av
        'airplay', 'av_timer',
        'fast_forward', 'fast_rewind', 'featured_play_list', 'featured_video', 'fiber_manual_record', 'fiber_new', 'fiber_pin', 'fiber_smart_record', 'games',
        'library_add', 'library_books', 'mic', 'mic_none', 'mic_off', 'new_releases', 'not_interested', 'note', 'pause', 'pause_circle_filled',
        'pause_circle_outline', 'play_arrow', 'play_circle_filled', 'play_circle_outline', 'playlist_add', 'playlist_add_check', 'playlist_play', 'queue', 'queue_play_next', 'radio',
        'recent_actors', 'remove_from_queue', 'repeat', 'repeat_one', 'shuffle', 'skip_next', 'skip_previous', 'slow_motion_video', 'snooze', 'sort_by_alpha',
        'stop', 'subscriptions', 'subtitles', 'surround_sound', 'video_label', 'volume_down', 'volume_mute', 'volume_off', 'volume_up', 'web', 'web_asset',
        // Communication
        'business', 'call', 'call_end', 'call_made', 'call_merge', 'call_missed', 'call_missed_outgoing', 'call_received',
        'call_split', 'cancel_presentation', 'chat ', 'chat_bubble', 'chat_bubble_outline', 'clear_all', 'comment', 'contact_mail', 'contact_phone', 'contacts',
        'dialer_sip', 'dialpad', 'email', 'forum', 'import_contacts', 'import_export', 'invert_colors_off', 'list_alt',
        'live_help', 'location_off', 'location_on', 'mail_outline', 'message', 'no_sim', 'pause_presentation', 'person_add_disabled', 'phonelink_erase', 'phonelink_lock',
        'phonelink_ring', 'phonelink_setup', 'portable_wifi_off', 'present_to_all', 'print_disabled', 'ring_volume', 'rss_feed', 'screen_share', 'sentiment_satisfied_alt', 'speaker_phone', 'stay_current_landscape',
        'stay_current_portrait', 'stop_screen_share', 'swap_calls', 'textsms', 'voicemail', 'vpn_key',
        // Content
        'add', 'add_box', 'add_circle', 'add_circle_outline',
        'archive', 'backspace', 'block', 'clear', 'create', 'delete_sweep', 'drafts', 'filter_list', 'flag',
        'font_download', 'forward', 'gesture', 'inbox', 'link', 'link_off', 'low_priority', 'move_to_inbox', 'next_week',
        'redo', 'remove', 'remove_circle', 'remove_circle_outline', 'reply', 'reply_all', 'report', 'report_off', 'save', 'save_alt',
        'select_all', 'send', 'sort', 'text_format', 'unarchive', 'undo', 'weekend',
        // Device
        'access_alarm', 'access_time', 'add_alarm', 'add_to_home_screen', 'airplanemode_active', 'airplanemode_inactive', 'battery_alert', 'battery_full', 'battery_unknown',
        'bluetooth', 'bluetooth_connected', 'bluetooth_disabled', 'bluetooth_searching', 'brightness_auto', 'brightness_high', 'brightness_low', 'brightness_medium', 'data_usage',
        'developer_mode', 'devices', 'dvr', 'gps_fixed', 'gps_not_fixed', 'gps_off', 'graphic_eq', 'network_cell', 'network_wifi', 'nfc',
        'screen_rotation', 'screen_lock_rotation', 'sd_storage', 'settings_system_daydream', 'signal_cellular_no_sim',
        'signal_cellular_null', 'signal_cellular_off', 'signal_wifi_4_bar_lock', 'signal_wifi_off', 'storage', 'usb', 'wallpaper', 'widgets', 'wifi_tethering',
        // Editor
        'attach_file', 'attach_money', 'border_all', 'border_bottom', 'border_clear', 'border_color', 'border_horizontal', 'border_inner', 'border_left', 'border_outer',
        'border_right', 'border_style', 'border_top', 'border_vertical', 'bubble_chart', 'drag_handle', 'format_align_center', 'format_align_justify', 'format_align_left', 'format_align_right',
        'format_bold', 'format_clear', 'format_color_fill', 'format_color_reset', 'format_color_text', 'format_indent_decrease', 'format_indent_increase', 'format_italic', 'format_line_spacing',
        'format_list_bulleted', 'format_list_numbered', 'format_list_numbered_rtl', 'format_paint', 'format_quote', 'format_shapes', 'format_size', 'format_strikethrough', 'format_underlined',
        'functions', 'highlight', 'insert_chart', 'insert_chart_outlined', 'insert_comment', 'insert_drive_file', 'insert_emoticon', 'insert_photo', 'linear_scale', 'merge_type', 'mode_comment',
        'monetization_on', 'money_off', 'multiline_chart', 'notes', 'pie_chart', 'publish', 'short_text', 'show_chart', 'space_bar', 'strikethrough_s', 'table_chart',
        'title', 'vertical_align_bottom', 'vertical_align_center', 'vertical_align_top', 'wrap_text',
        // File
        'attachment', 'cloud', 'cloud_circle', 'cloud_done', 'cloud_download', 'cloud_off', 'cloud_queue', 'cloud_upload', 'create_new_folder', 'folder', 'folder_open', 'folder_shared',
        // Hardware
        'cast', 'cast_connected', 'cast_for_education', 'computer', 'desktop_mac', 'desktop_windows', 'developer_board', 'device_hub', 'devices_other', 'dock', 'gamepad',
        'headset', 'headset_mic', 'keyboard', 'keyboard_arrow_down', 'keyboard_arrow_left', 'keyboard_arrow_right', 'keyboard_arrow_up', 'keyboard_backspace', 'keyboard_capslock', 'keyboard_hide',
        'keyboard_return', 'keyboard_tab', 'keyboard_voice', 'laptop', 'laptop_chromebook', 'laptop_windows', 'memory', 'mouse', 'power_input', 'router', 'scanner', 'security', 'sim_card',
        'speaker', 'speaker_group', 'tablet_android', 'toys', 'tv', 'videogame_asset', 'watch',
        // Image
        'add_a_photo', 'add_to_photos', 'adjust', 'assistant', 'audiotrack', 'blur_circular', 'blur_linear', 'blur_on', 'brightness_1', 'brightness_2', 'brightness_3',
        'brightness_5', 'brightness_6', 'brightness_7', 'broken_image', 'brush', 'burst_mode', 'camera', 'camera_alt', 'camera_front', 'camera_rear', 'center_focus_strong', 'center_focus_weak',
        'collections', 'collections_bookmark', 'color_lens', 'colorize', 'compare', 'control_point_duplicate', 'crop', 'crop_7_5', 'crop_16_9', 'crop_5_4', 'crop_3_2', 'crop_din', 'crop_free',
        'crop_original', 'crop_rotate', 'dehaze', 'details', 'edit', 'exposure', 'exposure_neg_1', 'exposure_neg_2', 'exposure_plus_1', 'exposure_plus_2', 'exposure_zero', 'filter',
        'filter_1', 'filter_2', 'filter_3', 'filter_4', 'filter_5', 'filter_6', 'filter_7', 'filter_8', 'filter_9', 'filter_b_and_w', 'filter_drama', 'filter_frames', 'filter_hdr', 'filter_none',
        'filter_tilt_shift', 'filter_vintage', 'flare', 'flash_auto', 'flash_off', 'flash_on', 'flip', 'gradient', 'grain', 'grid_off', 'grid_on', 'hdr_strong', 'hdr_weak', 'healing',
        'image_aspect_ratio', 'iso', 'leak_add', 'leak_remove', 'looks', 'looks_one', 'looks_two', 'looks_3', 'looks_4', 'looks_5', 'looks_6', 'loupe', 'movie_creation',
        'movie_filter', 'music_note', 'nature', 'nature_people', 'panorama_fish_eye', 'panorama_horizontal', 'panorama_vertical', 'panorama_wide_angle', 'photo_filter',
        'photo_size_select_small', 'picture_as_pdf', 'portrait', 'remove_red_eye', 'rotate_left', 'rotate_right', 'slideshow', 'straighten', 'style', 'switch_camera', 'texture',
        'timelapse', 'timer', 'timer_off', 'tonality', 'transform', 'tune', 'view_comfy', 'view_compact', 'vignette', 'wb_incandescent', 'wb_iridescent', 'wb_sunny',
        // Maps
        'beenhere', 'directions', 'directions_bike', 'directions_boat', 'directions_bus', 'directions_car', 'directions_railway', 'directions_run',
        'directions_subway', 'directions_walk', 'edit_attributes', 'ev_station', 'flight', 'hotel', 'layers', 'layers_clear', 'local_activity', 'local_atm', 'local_bar', 'local_cafe',
        'local_car_wash', 'local_dining', 'local_drink', 'local_florist', 'local_gas_station', 'local_hospital', 'local_laundry_service', 'local_library', 'local_mall', 'local_parking',
        'local_pharmacy', 'local_pizza', 'local_printshop', 'local_shipping', 'local_taxi', 'map', 'navigation', 'near_me', 'person_pin', 'person_pin_circle', 'pin_drop', 'rate_review',
        'restaurant', 'restaurant_menu', 'satellite', 'store_mall_directory', 'streetview', 'subway', 'traffic', 'train', 'tram', 'transfer_within_a_station', 'zoom_out_map',
        // Navigation
        'apps', 'arrow_back', 'arrow_downward', 'arrow_drop_down', 'arrow_drop_down_circle', 'arrow_drop_up', 'arrow_forward',
        'arrow_upward', 'cancel', 'check', 'chevron_left', 'chevron_right', 'close', 'expand_less', 'expand_more', 'first_page', 'fullscreen', 'fullscreen_exit', 'last_page', 'menu', 'more_horiz',
        'more_vert', 'refresh', 'subdirectory_arrow_left', 'subdirectory_arrow_right', 'unfold_less', 'unfold_more',
        // Notification
        'adb', 'airline_seat_flat', 'airline_seat_flat_angled', 'airline_seat_recline_extra', 'airline_seat_recline_normal', 'disc_full', 'more', 'network_check', 'network_locked', 'no_encryption',
        'power', 'power_off', 'priority_high', 'sd_card', 'sms', 'sms_failed', 'sync', 'sync_disabled', 'sync_problem', 'system_update', 'vibration', 'vpn_lock', 'wc', 'wifi', 'wifi_off',
        // Places
        'ac_unit', 'airport_shuttle', 'all_inclusive', 'beach_access', 'business_center', 'casino', 'child_care', 'child_friendly', 'fitness_center', 'golf_course', 'hot_tub', 'kitchen',
        'pool', 'room_service', 'rv_hookup', 'smoke_free', 'smoking_rooms', 'spa',
        // Social
        'cake', 'domain', 'group', 'group_add', 'location_city', 'mood', 'mood_bad', 'notifications', 'notifications_active', 'notifications_none', 'notifications_off', 'notifications_paused',
        'pages', 'party_mode', 'people_outline', 'person', 'person_add', 'person_outline', 'public', 'school', 'sentiment_dissatisfied', 'sentiment_satisfied', 'sentiment_very_dissatisfied',
        'sentiment_very_satisfied', 'share', 'thumb_down_alt', 'thumb_up_alt', 'whatshot',
        // Toggle
        'check_box', 'check_box_outline_blank', 'indeterminate_check_box', 'radio_button_checked', 'radio_button_unchecked', 'star', 'star_border', 'star_half'
    ];
    Define = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Define);
    return Define;
}());



/***/ }),

/***/ "./src/app/_helpers/dictionary.ts":
/*!****************************************!*\
  !*** ./src/app/_helpers/dictionary.ts ***!
  \****************************************/
/*! exports provided: Dictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        this.items = {};
        this.count = 0;
    }
    Dictionary.prototype.ContainsKey = function (key) {
        return this.items.hasOwnProperty(key);
    };
    Dictionary.prototype.Count = function () {
        return this.count;
    };
    Dictionary.prototype.Add = function (key, value) {
        if (!this.items.hasOwnProperty(key))
            this.count++;
        this.items[key] = value;
    };
    Dictionary.prototype.Remove = function (key) {
        var val = this.items[key];
        delete this.items[key];
        this.count--;
        return val;
    };
    Dictionary.prototype.Item = function (key) {
        return this.items[key];
    };
    Dictionary.prototype.Keys = function () {
        var keySet = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }
        return keySet;
    };
    Dictionary.prototype.Values = function () {
        var values = [];
        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }
        return values;
    };
    return Dictionary;
}());



/***/ }),

/***/ "./src/app/_helpers/endpointapi.ts":
/*!*****************************************!*\
  !*** ./src/app/_helpers/endpointapi.ts ***!
  \*****************************************/
/*! exports provided: EndPointApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EndPointApi", function() { return EndPointApi; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EndPointApi = /** @class */ (function () {
    function EndPointApi() {
    }
    EndPointApi.getURL = function () {
        if (!this.url) {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint) {
                this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiEndpoint;
            }
            else {
                var origin = location.origin;
                var path = location.origin.split('/')[2];
                var protocoll = location.origin.split(':')[0];
                var temp = path.split(':')[0];
                if (temp.length > 1 && _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiPort) {
                    path = temp + ':' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiPort;
                }
                this.url = protocoll + '://' + path;
            }
        }
        return this.url;
    };
    EndPointApi.getRemoteURL = function (destIp) {
        var protocoll = location.origin.split(':')[0];
        var path = destIp + ':' + _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiPort;
        return protocoll + '://' + path + '/api';
    };
    EndPointApi.url = null;
    EndPointApi = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], EndPointApi);
    return EndPointApi;
}());



/***/ }),

/***/ "./src/app/_helpers/utils.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/utils.ts ***!
  \***********************************/
/*! exports provided: Utils, EnumToArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utils", function() { return Utils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumToArrayPipe", function() { return EnumToArrayPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils_1 = Utils;
    Utils.searchTreeStartWith = function (element, matchingStart) {
        if (element.id.startsWith(matchingStart)) {
            return element;
        }
        else if (element.children != null) {
            var i;
            var result = null;
            for (i = 0; result == null && i < element.children.length; i++) {
                result = Utils_1.searchTreeStartWith(element.children[i], matchingStart);
            }
            return result;
        }
        return null;
    };
    Utils.isNullOrUndefined = function (ele) {
        return (ele === null || ele === undefined) ? true : false;
    };
    // returns keys of enum
    Utils.enumKeys = function (p) {
        var keys = Object.keys(p);
        return keys;
    };
    // returns values of enum
    Utils.enumValues = function (p) {
        var keys = Object.keys(p);
        return keys.map(function (el) { return Object(p)[el]; });
    };
    Utils.getGUID = function () {
        var uuid = "", i, random;
        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i == 8 || i == 12 || i == 16 || i == 20) {
                uuid += "-";
            }
            uuid += (i == 12 ? 4 : (i == 16 ? (random & 3 | 8) : random)).toString(16);
        }
        return uuid;
    };
    ;
    var Utils_1;
    Utils.defaultColor = ['#FFFFFF', '#000000', '#EEECE1', '#1F497D', '#4F81BD', '#C0504D', '#9BBB59', '#8064A2', '#4BACC6',
        '#F79646', '#C00000', '#FF0000', '#FFC000', '#FFD04A', '#FFFF00', '#92D050', '#0AC97D', '#00B050', '#00B0F0', '#4484EF', '#3358C0',
        '#002060', '#7030A0', '#D8D8D8', '#BFBFBF', '#A5A5A5', '#7F7F7F', '#595959', '#3F3F3F', '#262626'];
    Utils = Utils_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Utils);
    return Utils;
}());

var EnumToArrayPipe = /** @class */ (function () {
    function EnumToArrayPipe() {
    }
    EnumToArrayPipe.prototype.transform = function (value, args) {
        var result = [];
        var keys = Object.keys(value);
        var values = Object.values(value);
        for (var i = 0; i < keys.length; i++) {
            result.push({ key: keys[i], value: values[i] });
        }
        return result;
        //or if you want to order the result: 
        //return result.sort((a, b) => a.value < b.value ? -1 : 1);
    };
    EnumToArrayPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'enumToArray'
        })
    ], EnumToArrayPipe);
    return EnumToArrayPipe;
}());



/***/ }),

/***/ "./src/app/_helpers/windowref.ts":
/*!***************************************!*\
  !*** ./src/app/_helpers/windowref.ts ***!
  \***************************************/
/*! exports provided: WindowRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    // return the global native browser window object
    return window;
}
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowRef = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WindowRef);
    return WindowRef;
}());



/***/ }),

/***/ "./src/app/_models/device.ts":
/*!***********************************!*\
  !*** ./src/app/_models/device.ts ***!
  \***********************************/
/*! exports provided: Device, Tag, DeviceNetProperty, DeviceType, TagType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Device", function() { return Device; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tag", function() { return Tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceNetProperty", function() { return DeviceNetProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceType", function() { return DeviceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagType", function() { return TagType; });
var Device = /** @class */ (function () {
    function Device() {
    }
    return Device;
}());

var Tag = /** @class */ (function () {
    function Tag() {
    }
    return Tag;
}());

var DeviceNetProperty = /** @class */ (function () {
    function DeviceNetProperty() {
    }
    return DeviceNetProperty;
}());

var DeviceType;
(function (DeviceType) {
    DeviceType["FuxaServer"] = "FuxaServer";
    DeviceType["SiemensS7"] = "SiemensS7";
    DeviceType["OPCUA"] = "OPCUA";
})(DeviceType || (DeviceType = {}));
var TagType;
(function (TagType) {
    TagType["Bool"] = "Bool";
    TagType["Byte"] = "Byte";
    TagType["Int"] = "Int";
    TagType["Word"] = "Word";
    TagType["DInt"] = "DInt";
    TagType["DWord"] = "DWord";
    TagType["Real"] = "Real";
})(TagType || (TagType = {}));


/***/ }),

/***/ "./src/app/_models/hmi.ts":
/*!********************************!*\
  !*** ./src/app/_models/hmi.ts ***!
  \********************************/
/*! exports provided: Hmi, View, LayoutSettings, NavigationSettings, NaviModeType, NaviItemType, NaviItem, HeaderSettings, DocProfile, MyItem, GaugeSettings, GaugeProperty, GaugeEvent, GaugeEventType, GaugeEventActionType, GaugeRangeProperty, Variable, VariableRange, Alarm, WindowLink, SelElement, Event, HelpData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hmi", function() { return Hmi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutSettings", function() { return LayoutSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationSettings", function() { return NavigationSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaviModeType", function() { return NaviModeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaviItemType", function() { return NaviItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaviItem", function() { return NaviItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSettings", function() { return HeaderSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocProfile", function() { return DocProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyItem", function() { return MyItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeSettings", function() { return GaugeSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeProperty", function() { return GaugeProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeEvent", function() { return GaugeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeEventType", function() { return GaugeEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeEventActionType", function() { return GaugeEventActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeRangeProperty", function() { return GaugeRangeProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Variable", function() { return Variable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableRange", function() { return VariableRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alarm", function() { return Alarm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowLink", function() { return WindowLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelElement", function() { return SelElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return Event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpData", function() { return HelpData; });
/* harmony import */ var _device__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./device */ "./src/app/_models/device.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Hmi = /** @class */ (function () {
    function Hmi() {
        this.name = '';
        this.layout = new LayoutSettings();
        this.views = [];
        // variables: Variable[] = [];
        // alarmes: Alarm[] = [];
        // devices = {};
    }
    return Hmi;
}());

var View = /** @class */ (function () {
    function View() {
        this.id = '';
        this.name = '';
        this.profile = new DocProfile();
        this.items = {};
        this.variables = {};
        this.svgcontent = '';
    }
    return View;
}());

var LayoutSettings = /** @class */ (function () {
    function LayoutSettings() {
        this.start = '';
        this.navigation = new NavigationSettings();
        this.header = new HeaderSettings();
    }
    return LayoutSettings;
}());

var NavigationSettings = /** @class */ (function () {
    function NavigationSettings() {
        this.mode = Object.keys(NaviModeType).find(function (key) { return NaviModeType[key] === NaviModeType.over; });
        this.type = Object.keys(NaviItemType).find(function (key) { return NaviItemType[key] === NaviItemType.block; });
    }
    return NavigationSettings;
}());

var NaviModeType;
(function (NaviModeType) {
    NaviModeType["void"] = "None";
    NaviModeType["push"] = "Push";
    NaviModeType["over"] = "Over";
    NaviModeType["fix"] = "Fixed";
})(NaviModeType || (NaviModeType = {}));
var NaviItemType;
(function (NaviItemType) {
    NaviItemType["icon"] = "Icons";
    NaviItemType["text"] = "Text";
    NaviItemType["block"] = "Icons & Text (block)";
    NaviItemType["inline"] = "Icons & Text (inline)";
})(NaviItemType || (NaviItemType = {}));
var NaviItem = /** @class */ (function () {
    function NaviItem() {
    }
    return NaviItem;
}());

var HeaderSettings = /** @class */ (function () {
    function HeaderSettings() {
    }
    return HeaderSettings;
}());

var DocProfile = /** @class */ (function () {
    function DocProfile() {
        this.width = 640;
        this.height = 480;
        this.bkcolor = '';
    }
    return DocProfile;
}());

var MyItem = /** @class */ (function () {
    function MyItem() {
    }
    return MyItem;
}());

var GaugeSettings = /** @class */ (function () {
    function GaugeSettings(id, type) {
        this.id = id;
        this.type = type;
        this.name = '';
        this.property = null; // set to GaugeProperty after upgrate
        this.label = '';
    }
    return GaugeSettings;
}());

var GaugeProperty = /** @class */ (function () {
    function GaugeProperty() {
        this.events = [];
    }
    return GaugeProperty;
}());

var GaugeEvent = /** @class */ (function () {
    function GaugeEvent() {
    }
    return GaugeEvent;
}());

var GaugeEventType;
(function (GaugeEventType) {
    GaugeEventType["click"] = "Click";
})(GaugeEventType || (GaugeEventType = {}));
var GaugeEventActionType;
(function (GaugeEventActionType) {
    GaugeEventActionType["onpage"] = "Open Page";
    GaugeEventActionType["onwindow"] = "Open Window";
    GaugeEventActionType["ondialog"] = "Open Dialog";
    GaugeEventActionType["onSetValue"] = "Set Value";
})(GaugeEventActionType || (GaugeEventActionType = {}));
var GaugeRangeProperty = /** @class */ (function () {
    function GaugeRangeProperty() {
    }
    return GaugeRangeProperty;
}());

var Variable = /** @class */ (function () {
    function Variable(id, source, name) {
        this.id = id;
        this.name = name;
        this.source = source;
    }
    return Variable;
}());

var VariableRange = /** @class */ (function () {
    function VariableRange() {
    }
    return VariableRange;
}());

var Alarm = /** @class */ (function (_super) {
    __extends(Alarm, _super);
    function Alarm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Alarm;
}(_device__WEBPACK_IMPORTED_MODULE_0__["Tag"]));

var WindowLink = /** @class */ (function () {
    function WindowLink() {
        this.name = '';
        this.title = '';
    }
    return WindowLink;
}());

var SelElement = /** @class */ (function () {
    function SelElement() {
        this.type = '';
        this.ele = null;
    }
    return SelElement;
}());

var Event = /** @class */ (function () {
    function Event() {
        this.id = '';
        this.value = null;
        this.dbg = '';
    }
    return Event;
}());

var HelpData = /** @class */ (function () {
    function HelpData() {
    }
    return HelpData;
}());



/***/ }),

/***/ "./src/app/_services/hmi.service.ts":
/*!******************************************!*\
  !*** ./src/app/_services/hmi.service.ts ***!
  \******************************************/
/*! exports provided: HmiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HmiService", function() { return HmiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_hmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/hmi */ "./src/app/_models/hmi.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var _helpers_endpointapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/endpointapi */ "./src/app/_helpers/endpointapi.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HmiService = /** @class */ (function () {
    function HmiService(projectService, toastr) {
        this.projectService = projectService;
        this.toastr = toastr;
        // @Output() onSaveCurrent: EventEmitter<boolean> = new EventEmitter();
        this.onVariableChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeviceChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeviceBrowse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onDeviceNodeAttribute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.version = "1.00";
        this.hmiresource = "hmi-config";
        this.viewSignalGaugeMap = new ViewSignalGaugeMap();
        this.devices = {};
        this.variables = {};
        this.endPointConfig = _helpers_endpointapi__WEBPACK_IMPORTED_MODULE_5__["EndPointApi"].getURL(); //"http://localhost:1881";
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverEnabled) {
            this.initSocket();
        }
    }
    HmiService_1 = HmiService;
    /**
     * Set signal value in current frontend signal array
     * Called from Test and value beckame from backend
     * @param sig
     */
    HmiService.prototype.setSignalValue = function (sig) {
        // console.log('end set ' + sig.id + ' ' + sig.value);
        // update the signals array value 
        // notify the gui
        this.onVariableChanged.emit(sig);
    };
    /**
     * Set signal value to backend
     * Value input in frontend
     * @param sigId
     * @param value
     */
    HmiService.prototype.putSignalValue = function (sigId, value) {
        console.log('put ' + sigId + ' ' + value);
        if (this.variables[sigId]) {
            this.variables[sigId].value = value;
            if (this.socket) {
                this.socket.emit('device-values', { cmd: 'set', var: this.variables[sigId] });
            }
            // this.onVariableChanged.emit(this.variables[sigId]);
        }
    };
    //#region Scket.io
    /**
     * Init the socket and subsribe to device status and signal value change
     */
    HmiService.prototype.initSocket = function () {
        var _this = this;
        // check to init socket io
        if (!this.socket) {
            this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__(this.endPointConfig);
            // devicse status
            this.socket.on('device-status', function (message) {
                _this.onDeviceChanged.emit(message);
                if (message.status === 'connect-error') {
                    _this.toastr.error('Device "' + message.id + '" connection error!', '', {
                        timeOut: 3000,
                        closeButton: true,
                    });
                }
                // console.log('dev-st ' + message);
            });
            // devices values
            this.socket.on('device-values', function (message) {
                for (var idx = 0; idx < message.values.length; idx++) {
                    var varid = message.id + HmiService_1.separator + message.values[idx].id;
                    if (!_this.variables[varid]) {
                        _this.variables[varid] = new _models_hmi__WEBPACK_IMPORTED_MODULE_3__["Variable"](varid, message.id, message.values[idx].id);
                    }
                    _this.variables[varid].value = message.values[idx].value;
                    _this.setSignalValue(_this.variables[varid]);
                }
            });
            // device browse
            this.socket.on('device-browse', function (message) {
                _this.onDeviceBrowse.emit(message);
            });
            // device node attribute
            this.socket.on('device-node-attribute', function (message) {
                _this.onDeviceNodeAttribute.emit(message);
            });
            this.askDeviceValues();
        }
    };
    /**
     * Ask device status to backend
     */
    HmiService.prototype.askDeviceStatus = function () {
        if (this.socket) {
            this.socket.emit('device-status', 'get');
        }
    };
    /**
     * Ask device status to backend
     */
    HmiService.prototype.askDeviceValues = function () {
        if (this.socket) {
            this.socket.emit('device-values', 'get');
        }
    };
    HmiService.prototype.getAllSignals = function () {
        return this.variables;
    };
    // public getMessages = () => {
    //     return Observable.create((observer) => {
    //         this.socket.on('device-status', (message) => {
    //             observer.next(message);
    //         });
    //     });
    // }
    HmiService.prototype.emitMappedSignalsGauge = function (domViewId) {
        var sigsToEmit = this.viewSignalGaugeMap.getSignalIds(domViewId);
        for (var idx = 0; idx < sigsToEmit.length; idx++) {
            if (this.variables[sigsToEmit[idx]]) {
                this.setSignalValue(this.variables[sigsToEmit[idx]]);
            }
        }
    };
    /**
     * Ask device browse to backend
     */
    HmiService.prototype.askDeviceBrowse = function (deviceId, node) {
        if (this.socket) {
            var msg = { device: deviceId, node: node };
            this.socket.emit('device-browse', msg);
        }
    };
    /**
     * Ask device node attribute to backend
     */
    HmiService.prototype.askNodeAttributes = function (deviceId, node) {
        if (this.socket) {
            var msg = { device: deviceId, node: node };
            this.socket.emit('device-node-attribute', msg);
        }
    };
    //#endregion
    //#region Signals Gauges Mapping
    /**
     * map the dom view with signal and gauge settings
     * @param domViewId
     * @param signalId
     * @param ga
     */
    HmiService.prototype.addSignalGaugeToMap = function (domViewId, signalId, ga) {
        this.viewSignalGaugeMap.add(domViewId, signalId, ga);
        var sigsplit = signalId.split(HmiService_1.separator);
        // add to variable list
        if (!this.variables[signalId]) {
            var v = new _models_hmi__WEBPACK_IMPORTED_MODULE_3__["Variable"](signalId, sigsplit[0], sigsplit[1]);
            this.variables[signalId] = v;
        }
        // add to device list
        if (!this.devices[sigsplit[0]]) {
            this.devices[sigsplit[0]] = {};
            this.devices[sigsplit[0]] = sigsplit[1];
        }
        else if (!this.devices[sigsplit[0]][sigsplit[1]]) {
            this.devices[sigsplit[0]] = sigsplit[1];
        }
    };
    /**
     * remove mapped dom view Gauges
     * @param domViewId
     */
    HmiService.prototype.removeSignalGaugeFromMap = function (domViewId) {
        this.viewSignalGaugeMap.remove(domViewId);
    };
    /**
     * get the gauges settings list of mapped dom view with the signal
     * @param domViewId
     * @param sigid
     */
    HmiService.prototype.getMappedSignalsGauges = function (domViewId, sigid) {
        return Object.values(this.viewSignalGaugeMap.signalsGauges(domViewId, sigid));
    };
    /**
     * get all signals mapped in all dom views
     */
    HmiService.prototype.getMappedVariables = function () {
        var _this = this;
        var result = [];
        this.viewSignalGaugeMap.getAllSignalIds().forEach(function (sigid) {
            if (_this.variables[sigid]) {
                result.push(_this.variables[sigid]);
            }
        });
        return result;
    };
    //#endregion
    //#region My Static functions
    HmiService.toVariableId = function (src, name) {
        return src + HmiService_1.separator + name;
    };
    var HmiService_1;
    HmiService.separator = '^~^';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HmiService.prototype, "onVariableChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HmiService.prototype, "onDeviceChanged", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HmiService.prototype, "onDeviceBrowse", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HmiService.prototype, "onDeviceNodeAttribute", void 0);
    HmiService = HmiService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], HmiService);
    return HmiService;
}());

var ViewSignalGaugeMap = /** @class */ (function () {
    function ViewSignalGaugeMap() {
        this.views = {};
    }
    ViewSignalGaugeMap.prototype.add = function (domViewId, signalId, ga) {
        if (!this.views[domViewId]) {
            this.views[domViewId] = {};
        }
        if (!this.views[domViewId][signalId]) {
            this.views[domViewId][signalId] = [];
        }
        this.views[domViewId][signalId].push(ga);
        return true;
    };
    ViewSignalGaugeMap.prototype.remove = function (domViewId) {
        delete this.views[domViewId];
    };
    ViewSignalGaugeMap.prototype.signalsGauges = function (domViewId, sigid) {
        return this.views[domViewId][sigid];
    };
    ViewSignalGaugeMap.prototype.getSignalIds = function (domViewId) {
        var result = [];
        if (this.views[domViewId]) {
            result = Object.keys(this.views[domViewId]);
        }
        return result;
    };
    ViewSignalGaugeMap.prototype.getAllSignalIds = function () {
        var result = [];
        Object.values(this.views).forEach(function (evi) {
            Object.keys(evi).forEach(function (key) {
                if (result.indexOf(key) === -1) {
                    result.push(key);
                }
            });
        });
        return result;
    };
    return ViewSignalGaugeMap;
}());


/***/ }),

/***/ "./src/app/_services/project.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/project.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectService, ProjectData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectData", function() { return ProjectData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models_hmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/hmi */ "./src/app/_models/hmi.ts");
/* harmony import */ var _models_device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/device */ "./src/app/_models/device.ts");
/* harmony import */ var _helpers_endpointapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/endpointapi */ "./src/app/_helpers/endpointapi.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/FileSaver.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProjectService = /** @class */ (function () {
    function ProjectService(http, toastr) {
        var _this = this;
        this.http = http;
        this.toastr = toastr;
        this.onSaveCurrent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onLoadHmi = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.version = '1.00';
        this.separator = '^~^';
        this.started = false;
        this.prjresource = 'prj-data';
        this.endPointConfig = _helpers_endpointapi__WEBPACK_IMPORTED_MODULE_5__["EndPointApi"].getURL(); //"http://localhost:1881";
        this.projectOld = '';
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverEnabled) {
            this.checkServer().subscribe(function (result) {
                _this.serverSettings = result;
                _this.load();
                // this.toastr.success('Server connected!');
            }, function (error) {
                _this.load();
                console.error(error);
                _this.toastr.error('Server connection failed!', '', {
                    timeOut: 3000,
                    closeButton: true,
                    disableTimeOut: true
                });
            });
        }
        else {
            this.load();
        }
    }
    ProjectService.prototype.load = function () {
        var _this = this;
        console.log('load Project');
        if (this.serverSettings) {
            this.getServerProject().subscribe(function (prj) {
                _this.projectData = prj;
                // copy to check before save
                _this.projectOld = JSON.parse(JSON.stringify(_this.projectData));
                _this.notifyToLoadHmi();
                console.log(prj);
            }, function (err) {
                console.log(err);
            });
        }
        else {
            if (!this.projectData) {
                var res = localStorage.getItem(this.prjresource);
                if (res) {
                    this.projectData = JSON.parse(res);
                }
                else if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].type === 'demo') {
                    console.log('load Demo');
                    // try root path
                    this.http.get('./assets/project.demo.fuxap').subscribe(function (prj) {
                        _this.projectData = prj;
                    }, function (err) {
                    });
                    // load demo from server
                    // this.getDemoProject().subscribe(prj => {
                    //     this.projectData = prj;
                    // }, err => {
                    //     console.log(err);                      
                    // });
                }
                else {
                    this.projectData = new ProjectData();
                    var server = new _models_device__WEBPACK_IMPORTED_MODULE_4__["Device"]();
                    server.name = 'Fuxa Server';
                    server.id = '0';
                    server.type = _models_device__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].FuxaServer;
                    server.property = new _models_device__WEBPACK_IMPORTED_MODULE_4__["DeviceNetProperty"]();
                    this.setServer(server);
                }
            }
        }
    };
    ProjectService.prototype.save = function () {
        var _this = this;
        console.log('-save-');
        this.projectData.version = this.version;
        var prjData = this.convertToSave(this.projectData);
        if (this.serverSettings) {
            // check project change don't work some svg object change the order and this to check ...boooo
            // let prjdiff = this._deepEquals(this.projectData, this.projectOld);
            // if (prjdiff) {
            //     return true;
            // }
            this.setServerProject(prjData).subscribe(function (result) {
                _this.projectOld = JSON.parse(JSON.stringify(_this.projectData));
                console.log(result);
                // this.toastr.success('Project save successful!');
            }, function (err) {
                console.log(err);
                _this.toastr.error('Project save failed', '', {
                    timeOut: 3000,
                    closeButton: true,
                    disableTimeOut: true
                });
            });
        }
        else {
            localStorage.setItem(this.prjresource, JSON.stringify(prjData));
        }
        return true;
    };
    ProjectService.prototype.saveAs = function () {
        var filename = 'MyProject.fuxap';
        var date = new Date();
        var content = JSON.stringify(this.convertToSave(this.getProject()));
        var blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"](blob, filename);
    };
    /**
     * Remove Tag value to save without value
     * Value was added by HmiService from socketIo event
     * @param prj
     */
    ProjectService.prototype.convertToSave = function (prj) {
        var result = JSON.parse(JSON.stringify(prj));
        for (var devid in result.devices) {
            for (var tagid in result.devices[devid].tags) {
                delete result.devices[devid].tags[tagid].value;
            }
            // Object.values(result.devices[devid].tags).forEach(tag => {
            // delete tag.value;
            // if (val[domViewId]) {
            //   delete val[domViewId];
            // }
            // });
            // for (let tag in Object.values(result.devices[devid].tags)) {
            // delete tag.value;
            // };
        }
        return result;
    };
    //#region to server api
    ProjectService.prototype.getServerProject = function () {
        return this.http.get(this.endPointConfig + '/api/project', {});
    };
    ProjectService.prototype.setServerProject = function (prj) {
        // let header = new HttpHeaders();
        // header.append("Access-Control-Allow-Origin", "*");
        // header.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        var header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.endPointConfig + '/api/project', prj, { headers: header });
    };
    //#endregion
    //#region hmi resource json struct
    /**
     * get hmiresource
     */
    ProjectService.prototype.getHmi = function () {
        return (this.projectData) ? this.projectData.hmi : null;
    };
    /**
     * save hmi resource to backend
     * @param hmi hmiresource to save
     */
    ProjectService.prototype.setHmi = function (hmi, notify) {
        this.projectData.hmi = hmi;
        if (notify) {
            this.notifyToLoadHmi();
        }
    };
    //#endregion
    //#region Notify
    ProjectService.prototype.notifyToLoadHmi = function () {
        this.onLoadHmi.emit(true);
    };
    //#endregion
    /**
     * set Project data andf save resource to backend
     * @param prj project data to save
     */
    ProjectService.prototype.setProject = function (prj, notify) {
        // redefine variable list and device list throw views resurce used
        prj.version = this.version;
        // hmi.views.forEach(view => {
        //     for (let key in view.items) {
        //         // variable
        //         if (view.items[key].property.variableSrc && view.items[key].property.variable) {
        //             let device = hmi.devices[view.items[key].property.variableSrc];
        //             if (!device) {
        //                 device = new Device();
        //                 device.name = view.items[key].property.variableSrc;
        //                 // search in project
        //                 if (devices) {
        //                     let prjdevice = devices[view.items[key].property.variableSrc];
        //                     if (prjdevice) {
        //                         device = JSON.parse(JSON.stringify(prjdevice));
        //                         device.tags = {};
        //                     }
        //                 }
        //                 hmi.devices[view.items[key].property.variableSrc] = device;
        //             }
        //             // let tag = 
        //         }
        //         // alarm
        //     }
        // });
        // console.log('set-prj: ' + JSON.stringify(prj));
        this.projectData = prj;
        this.save();
        if (notify) {
            this.notifyToLoadHmi();
        }
    };
    ProjectService.prototype.setNewProject = function () {
        this.projectData = new ProjectData();
        var server = new _models_device__WEBPACK_IMPORTED_MODULE_4__["Device"]();
        server.name = 'Fuxa Server';
        server.id = '0';
        server.type = _models_device__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].FuxaServer;
        server.property = new _models_device__WEBPACK_IMPORTED_MODULE_4__["DeviceNetProperty"]();
        this.setServer(server);
        this.notifyToLoadHmi();
    };
    ProjectService.prototype.getProject = function () {
        return this.projectData;
    };
    ProjectService.prototype.getServer = function () {
        return (this.projectData) ? this.projectData.server : null;
    };
    ProjectService.prototype.setServer = function (srv, nosave) {
        this.projectData.server = srv;
        if (nosave) {
            return true;
        }
        return this.save();
    };
    ProjectService.prototype.getDevices = function () {
        return (this.projectData) ? this.projectData.devices : {};
    };
    ProjectService.prototype.setDevices = function (devices, nosave) {
        this.projectData.devices = devices;
        if (nosave) {
            return true;
        }
        return this.save();
    };
    ProjectService.prototype.addDevice = function (d) {
        var dev = this.projectData.devices[d.name];
        if (dev) {
            this.projectData.devices[d.name];
            return this.save();
        }
        return false;
    };
    ProjectService.prototype.saveProject = function (saveas) {
        this.onSaveCurrent.emit(saveas);
    };
    ProjectService.prototype.checkServer = function () {
        return this.http.get(this.endPointConfig + '/api/settings');
    };
    ProjectService.prototype.getDemoProject = function () {
        return this.http.get(this.endPointConfig + '/api/projectdemo');
    };
    ProjectService.prototype._deepEquals = function (x, y) {
        if (JSON.stringify(x) === JSON.stringify(y)) {
            return true; // if both x and y are null or undefined and exactly the same
        }
        else {
            try {
                for (var p in x) {
                    console.log(p);
                    if (!x.hasOwnProperty(p)) {
                        continue; // other properties were tested using x.constructor === y.constructor
                    }
                    if (!y.hasOwnProperty(p)) {
                        return false; // allows to compare x[ p ] and y[ p ] when set to undefined
                    }
                    if (p === 'svgcontent') {
                        // the xml have to be transform in json
                        var parser = new DOMParser(); // initialize dom parser
                        var aDOM = parser.parseFromString(x[p], "text/xml");
                        var bDOM = parser.parseFromString(y[p], "text/xml");
                        var a = this._xml2json(aDOM);
                        var b = this._xml2json(bDOM);
                        return this._deepEquals(a, b);
                    }
                    if (x[p] === y[p]) {
                        continue; // if they have the same strict value or identity then they are equal
                    }
                    if (!this._deepEquals(x[p], y[p])) {
                        return false;
                    }
                }
                for (var p in y) {
                    if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
                        return false;
                    }
                }
            }
            catch (ex) {
                console.log(ex);
                return false;
            }
            return true;
        }
    };
    /**
     * This function coverts a DOM Tree into JavaScript Object.
     * @param srcDOM: DOM Tree to be converted.
     */
    ProjectService.prototype._xml2json = function (xml) {
        // Create the return object
        var obj = {};
        if (xml.nodeType == 1) { // element
            // do attributes
            if (xml.attributes.length > 0) {
                obj["@attributes"] = {};
                for (var j = 0; j < xml.attributes.length; j++) {
                    var attribute = xml.attributes.item(j);
                    obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
                }
            }
        }
        else if (xml.nodeType == 3) { // text
            obj = xml.nodeValue;
        }
        // do children
        if (xml.hasChildNodes()) {
            for (var i = 0; i < xml.childNodes.length; i++) {
                var item = xml.childNodes.item(i);
                var nodeName = item.nodeName;
                if (typeof (obj[nodeName]) == "undefined") {
                    obj[nodeName] = this._xml2json(item);
                }
                else {
                    if (typeof (obj[nodeName].push) == "undefined") {
                        var old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(this._xml2json(item));
                }
            }
        }
        return obj;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProjectService.prototype, "onSaveCurrent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ProjectService.prototype, "onLoadHmi", void 0);
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]])
    ], ProjectService);
    return ProjectService;
}());

var ProjectData = /** @class */ (function () {
    function ProjectData() {
        this.version = "1.00";
        this.server = new _models_device__WEBPACK_IMPORTED_MODULE_4__["Device"]();
        this.hmi = new _models_hmi__WEBPACK_IMPORTED_MODULE_3__["Hmi"]();
        this.devices = {};
    }
    return ProjectData;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.container {\r\n    width: 100%;\r\n    height: 100% !important;\r\n    background-color:#FFFFFF\r\n}\r\n\r\n.work-editor {\r\n    background-color:#FFFFFF;\r\n    height: calc(100% - (46px));\r\n    min-width: 800px;\r\n}\r\n\r\n.work-home {\r\n    background-color:#FFFFFF;\r\n    height: 100%;\r\n    min-width: 800px;\r\n}\r\n\r\n.header {\r\n    /* height: 40px !important;     */\r\n}\r\n\r\n.footer {\r\n    height: 20px;\r\n    position:absolute;\r\n    bottom:0px;\r\n}\r\n\r\n.fab-button {\r\n    position: absolute;\r\n    bottom: 20px;\r\n    left: 10px;\r\n    color: rgba(255,255,255,1);\r\n    background-color: rgba(68,138,255, 0);\r\n    /* background-color: rgba(0,0,0,0.9); */\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <app-header class=\"header\" [hidden]=\"isHidden()\"></app-header>\r\n  <div [ngClass]=\"(isHidden()) ? 'work-home' : 'work-editor'\">\r\n    <router-outlet></router-outlet>\r\n    <ngx-fab-button #fabmenu icon=\"menu\" iconOpen=\"menu\" class=\"fab-button\" color=\"rgba(68,138,255, 1)\">\r\n      <ngx-fab-item-button color=\"rgba(68,138,255, 1)\" content=\"editor\" (click)=\"onGoTo('editor')\">editor</ngx-fab-item-button>\r\n      <ngx-fab-item-button color=\"rgba(68,138,255, 1)\" content=\"lab\" (click)=\"onGoTo('lab')\">lab</ngx-fab-item-button>\r\n      <ngx-fab-item-button color=\"rgba(68,138,255, 1)\" content=\"home\" (click)=\"onGoTo('home')\">home</ngx-fab-item-button>\r\n    </ngx-fab-button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, location) {
        this.router = router;
        this.title = 'app';
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.isHidden = function () {
        var list = ['/lab', '/home'], route = this.location.path();
        return (list.indexOf(route) > -1);
    };
    AppComponent.prototype.onGoTo = function (goto) {
        this.router.navigate([goto]);
        this.fabmenu.toggle();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fabmenu'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "fabmenu", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: appConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appConfig", function() { return appConfig; });
var appConfig = {
    apiUrl: 'http://localhost:3000'
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng5-slider */ "./node_modules/ng5-slider/esm5/ng5-slider.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ngx_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-drag-drop */ "./node_modules/ngx-drag-drop/ngx-drag-drop.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _iframe_iframe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./iframe/iframe.component */ "./src/app/iframe/iframe.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _editor_layout_property_layout_property_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./editor/layout-property/layout-property.component */ "./src/app/editor/layout-property/layout-property.component.ts");
/* harmony import */ var _lab_lab_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lab/lab.component */ "./src/app/lab/lab.component.ts");
/* harmony import */ var _device_device_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./device/device.component */ "./src/app/device/device.component.ts");
/* harmony import */ var _device_device_property_device_property_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./device/device-property/device-property.component */ "./src/app/device/device-property/device-property.component.ts");
/* harmony import */ var _device_tag_property_tag_property_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./device/tag-property/tag-property.component */ "./src/app/device/tag-property/tag-property.component.ts");
/* harmony import */ var _device_device_list_device_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./device/device-list/device-list.component */ "./src/app/device/device-list/device-list.component.ts");
/* harmony import */ var _device_device_map_device_map_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./device/device-map/device-map.component */ "./src/app/device/device-map/device-map.component.ts");
/* harmony import */ var _fuxa_view_fuxa_view_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./fuxa-view/fuxa-view.component */ "./src/app/fuxa-view/fuxa-view.component.ts");
/* harmony import */ var _tester_tester_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tester/tester.component */ "./src/app/tester/tester.component.ts");
/* harmony import */ var _helpers_custom_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./_helpers/custom-http */ "./src/app/_helpers/custom-http.ts");
/* harmony import */ var _tester_tester_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tester/tester.service */ "./src/app/tester/tester.service.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var _services_hmi_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./_services/hmi.service */ "./src/app/_services/hmi.service.ts");
/* harmony import */ var _help_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./help/tutorial/tutorial.component */ "./src/app/help/tutorial/tutorial.component.ts");
/* harmony import */ var _helpers_windowref__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./_helpers/windowref */ "./src/app/_helpers/windowref.ts");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./_helpers/utils */ "./src/app/_helpers/utils.ts");
/* harmony import */ var _helpers_define__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./_helpers/define */ "./src/app/_helpers/define.ts");
/* harmony import */ var _helpers_dictionary__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./_helpers/dictionary */ "./src/app/_helpers/dictionary.ts");
/* harmony import */ var _gui_helpers_fab_button_ngx_fab_button_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./gui-helpers/fab-button/ngx-fab-button.component */ "./src/app/gui-helpers/fab-button/ngx-fab-button.component.ts");
/* harmony import */ var _gui_helpers_fab_button_ngx_fab_item_button_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./gui-helpers/fab-button/ngx-fab-item-button.component */ "./src/app/gui-helpers/fab-button/ngx-fab-item-button.component.ts");
/* harmony import */ var _gui_helpers_treetable_treetable_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./gui-helpers/treetable/treetable.component */ "./src/app/gui-helpers/treetable/treetable.component.ts");
/* harmony import */ var _gui_helpers_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./gui-helpers/confirm-dialog/confirm-dialog.component */ "./src/app/gui-helpers/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _directives_dialog_draggable_directive__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./_directives/dialog-draggable.directive */ "./src/app/_directives/dialog-draggable.directive.ts");
/* harmony import */ var _directives_modal_position_cache__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./_directives/modal-position.cache */ "./src/app/_directives/modal-position.cache.ts");
/* harmony import */ var _directives_ngx_draggable_directive__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./_directives/ngx-draggable.directive */ "./src/app/_directives/ngx-draggable.directive.ts");
/* harmony import */ var _directives_number_directive__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./_directives/number.directive */ "./src/app/_directives/number.directive.ts");
/* harmony import */ var _directives_lazyFor_directive__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./_directives/lazyFor.directive */ "./src/app/_directives/lazyFor.directive.ts");
/* harmony import */ var _gauges_gauges_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./gauges/gauges.component */ "./src/app/gauges/gauges.component.ts");
/* harmony import */ var _gauges_gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./gauges/gauge-base/gauge-base.component */ "./src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var _dynamic_dynamic_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./dynamic/dynamic.component */ "./src/app/dynamic/dynamic.component.ts");
/* harmony import */ var _gauges_switch_switch_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./gauges/switch/switch.component */ "./src/app/gauges/switch/switch.component.ts");
/* harmony import */ var _gauges_controls_value_value_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./gauges/controls/value/value.component */ "./src/app/gauges/controls/value/value.component.ts");
/* harmony import */ var _gauges_proc_eng_compressor_compressor_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./gauges/proc-eng/compressor/compressor.component */ "./src/app/gauges/proc-eng/compressor/compressor.component.ts");
/* harmony import */ var _gauges_proc_eng_exchanger_exchanger_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./gauges/proc-eng/exchanger/exchanger.component */ "./src/app/gauges/proc-eng/exchanger/exchanger.component.ts");
/* harmony import */ var _gauges_proc_eng_valve_valve_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./gauges/proc-eng/valve/valve.component */ "./src/app/gauges/proc-eng/valve/valve.component.ts");
/* harmony import */ var _gauges_proc_eng_motor_motor_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./gauges/proc-eng/motor/motor.component */ "./src/app/gauges/proc-eng/motor/motor.component.ts");
/* harmony import */ var _gauges_gauge_property_gauge_property_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./gauges/gauge-property/gauge-property.component */ "./src/app/gauges/gauge-property/gauge-property.component.ts");
/* harmony import */ var _gauges_gauge_property_flex_input_flex_input_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./gauges/gauge-property/flex-input/flex-input.component */ "./src/app/gauges/gauge-property/flex-input/flex-input.component.ts");
/* harmony import */ var _gauges_gauge_property_flex_head_flex_head_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./gauges/gauge-property/flex-head/flex-head.component */ "./src/app/gauges/gauge-property/flex-head/flex-head.component.ts");
/* harmony import */ var _gauges_gauge_property_flex_event_flex_event_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./gauges/gauge-property/flex-event/flex-event.component */ "./src/app/gauges/gauge-property/flex-event/flex-event.component.ts");
/* harmony import */ var _gui_helpers_mat_select_search_mat_select_search_module__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./gui-helpers/mat-select-search/mat-select-search.module */ "./src/app/gui-helpers/mat-select-search/mat-select-search.module.ts");
/* harmony import */ var _gauges_controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./gauges/controls/html-input/html-input.component */ "./src/app/gauges/controls/html-input/html-input.component.ts");
/* harmony import */ var _gauges_controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./gauges/controls/html-button/html-button.component */ "./src/app/gauges/controls/html-button/html-button.component.ts");
/* harmony import */ var _gauges_controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./gauges/controls/html-select/html-select.component */ "./src/app/gauges/controls/html-select/html-select.component.ts");
/* harmony import */ var _gauges_controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./gauges/controls/gauge-progress/gauge-progress.component */ "./src/app/gauges/controls/gauge-progress/gauge-progress.component.ts");
/* harmony import */ var _gauges_controls_gauge_semaphore_gauge_semaphore_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./gauges/controls/gauge-semaphore/gauge-semaphore.component */ "./src/app/gauges/controls/gauge-semaphore/gauge-semaphore.component.ts");
// the start/root module that tells Angular how to assemble the application.
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_16__["EditorComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_15__["SidenavComponent"],
                _iframe_iframe_component__WEBPACK_IMPORTED_MODULE_14__["IframeComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _lab_lab_component__WEBPACK_IMPORTED_MODULE_18__["LabComponent"],
                _device_device_component__WEBPACK_IMPORTED_MODULE_19__["DeviceComponent"],
                _device_tag_property_tag_property_component__WEBPACK_IMPORTED_MODULE_21__["TagPropertyComponent"],
                _device_device_property_device_property_component__WEBPACK_IMPORTED_MODULE_20__["DevicePropertyComponent"],
                _editor_layout_property_layout_property_component__WEBPACK_IMPORTED_MODULE_17__["LayoutPropertyComponent"],
                _editor_layout_property_layout_property_component__WEBPACK_IMPORTED_MODULE_17__["DialogMenuItem"],
                _device_device_list_device_list_component__WEBPACK_IMPORTED_MODULE_22__["DeviceListComponent"],
                _device_device_map_device_map_component__WEBPACK_IMPORTED_MODULE_23__["DeviceMapComponent"],
                _fuxa_view_fuxa_view_component__WEBPACK_IMPORTED_MODULE_24__["FuxaViewComponent"],
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_16__["DialogDocProperty"],
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_16__["DialogDocName"],
                _gui_helpers_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_38__["ConfirmDialogComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["DialogInfo"],
                _gauges_gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_45__["GaugeBaseComponent"],
                _gauges_switch_switch_component__WEBPACK_IMPORTED_MODULE_47__["SwitchComponent"],
                _gauges_proc_eng_compressor_compressor_component__WEBPACK_IMPORTED_MODULE_49__["CompressorComponent"],
                _gauges_proc_eng_valve_valve_component__WEBPACK_IMPORTED_MODULE_51__["ValveComponent"],
                _gauges_proc_eng_motor_motor_component__WEBPACK_IMPORTED_MODULE_52__["MotorComponent"],
                _gauges_proc_eng_exchanger_exchanger_component__WEBPACK_IMPORTED_MODULE_50__["ExchangerComponent"],
                _gauges_controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_58__["HtmlInputComponent"],
                _gauges_controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_59__["HtmlButtonComponent"],
                _gauges_controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_60__["HtmlSelectComponent"],
                _gauges_controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_61__["GaugeProgressComponent"],
                _gauges_controls_gauge_semaphore_gauge_semaphore_component__WEBPACK_IMPORTED_MODULE_62__["GaugeSemaphoreComponent"],
                _gauges_gauge_property_gauge_property_component__WEBPACK_IMPORTED_MODULE_53__["GaugePropertyComponent"],
                _tester_tester_component__WEBPACK_IMPORTED_MODULE_25__["TesterComponent"],
                _help_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_30__["TutorialComponent"],
                _gauges_gauge_property_flex_input_flex_input_component__WEBPACK_IMPORTED_MODULE_54__["FlexInputComponent"],
                _gauges_gauge_property_flex_head_flex_head_component__WEBPACK_IMPORTED_MODULE_55__["FlexHeadComponent"],
                _gauges_gauge_property_flex_event_flex_event_component__WEBPACK_IMPORTED_MODULE_56__["FlexEventComponent"],
                _dynamic_dynamic_component__WEBPACK_IMPORTED_MODULE_46__["DynamicComponent"],
                _gauges_controls_value_value_component__WEBPACK_IMPORTED_MODULE_48__["ValueComponent"],
                _directives_dialog_draggable_directive__WEBPACK_IMPORTED_MODULE_39__["DialogDraggableDirective"],
                _helpers_utils__WEBPACK_IMPORTED_MODULE_32__["EnumToArrayPipe"],
                _directives_ngx_draggable_directive__WEBPACK_IMPORTED_MODULE_41__["DraggableDirective"],
                _directives_number_directive__WEBPACK_IMPORTED_MODULE_42__["NumberOnlyDirective"],
                _gui_helpers_fab_button_ngx_fab_button_component__WEBPACK_IMPORTED_MODULE_35__["NgxFabButtonComponent"],
                _gui_helpers_fab_button_ngx_fab_item_button_component__WEBPACK_IMPORTED_MODULE_36__["NgxFabItemButtonComponent"],
                _gui_helpers_treetable_treetable_component__WEBPACK_IMPORTED_MODULE_37__["TreetableComponent"],
                _directives_lazyFor_directive__WEBPACK_IMPORTED_MODULE_43__["LazyForDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_11__["routing"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__["ColorPickerModule"],
                ng5_slider__WEBPACK_IMPORTED_MODULE_7__["Ng5SliderModule"],
                _gui_helpers_mat_select_search_mat_select_search_module__WEBPACK_IMPORTED_MODULE_57__["MatSelectSearchModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({
                    timeOut: 3000,
                    positionClass: 'toast-bottom-right',
                    preventDuplicates: false,
                }),
                ngx_drag_drop__WEBPACK_IMPORTED_MODULE_9__["DndModule"]
            ],
            providers: [
                _services_hmi_service__WEBPACK_IMPORTED_MODULE_29__["HmiService"],
                _services_project_service__WEBPACK_IMPORTED_MODULE_28__["ProjectService"],
                _tester_tester_service__WEBPACK_IMPORTED_MODULE_27__["TesterService"],
                _helpers_custom_http__WEBPACK_IMPORTED_MODULE_26__["customHttpProvider"],
                _gauges_gauges_component__WEBPACK_IMPORTED_MODULE_44__["GaugesManager"],
                _helpers_windowref__WEBPACK_IMPORTED_MODULE_31__["WindowRef"],
                _helpers_utils__WEBPACK_IMPORTED_MODULE_32__["Utils"],
                _helpers_dictionary__WEBPACK_IMPORTED_MODULE_34__["Dictionary"],
                _directives_modal_position_cache__WEBPACK_IMPORTED_MODULE_40__["ModalPositionCache"],
                _helpers_define__WEBPACK_IMPORTED_MODULE_33__["Define"]
            ],
            entryComponents: [
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_16__["DialogDocProperty"],
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_16__["DialogDocName"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_13__["DialogInfo"],
                _dynamic_dynamic_component__WEBPACK_IMPORTED_MODULE_46__["DynamicComponent"],
                _gauges_gauge_property_gauge_property_component__WEBPACK_IMPORTED_MODULE_53__["GaugePropertyComponent"],
                _device_device_property_device_property_component__WEBPACK_IMPORTED_MODULE_20__["DevicePropertyComponent"],
                _device_tag_property_tag_property_component__WEBPACK_IMPORTED_MODULE_21__["TagPropertyComponent"],
                _gui_helpers_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_38__["ConfirmDialogComponent"],
                _editor_layout_property_layout_property_component__WEBPACK_IMPORTED_MODULE_17__["LayoutPropertyComponent"],
                _editor_layout_property_layout_property_component__WEBPACK_IMPORTED_MODULE_17__["DialogMenuItem"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _device_device_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device/device.component */ "./src/app/device/device.component.ts");
/* harmony import */ var _lab_lab_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lab/lab.component */ "./src/app/lab/lab.component.ts");





var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'editor', component: _editor_editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"] },
    { path: 'lab', component: _lab_lab_component__WEBPACK_IMPORTED_MODULE_4__["LabComponent"] },
    { path: 'device', component: _device_device_component__WEBPACK_IMPORTED_MODULE_3__["DeviceComponent"] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/device/device-list/device-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/device/device-list/device-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 300px;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    top: 0px;\r\n    left:0px;\r\n    right:0px;\r\n    background-color: white;\r\n}\r\n\r\n.filter {\r\n    display: inline-block;\r\n    min-height: 64px;\r\n    padding: 8px 24px 0;\r\n}\r\n\r\n.filter .mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n}\r\n\r\n.mat-table {\r\n    overflow: auto;\r\n    /* margin: 5px; */\r\n    /* max-height: 500px; */\r\n}\r\n\r\n.mat-header-cell.mat-sort-header-sorted {\r\n    color: black;\r\n}\r\n\r\n.mat-header-row {\r\n    top: 0;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    z-index: 1;\r\n    background-color: rgba(0,0,0,0.7);\r\n    color: white;\r\n}\r\n\r\n.mat-header-cell {\r\n    color: white;\r\n    font-size: 14px;\r\n}\r\n\r\n.mat-column-select {\r\n    overflow: visible;\r\n    flex: 0 0 100px;\r\n}\r\n\r\n.mat-column-name {\r\n    flex: 0 0 400px;\r\n}\r\n\r\n.mat-column-address {\r\n    flex: 0 0 260px;\r\n}\r\n\r\n.mat-column-device {\r\n    flex: 0 0 200px;\r\n}\r\n\r\n.mat-column-type {\r\n    flex: 0 0 160px;\r\n}\r\n\r\n.mat-column-value {\r\n    flex: 0 0 180px;\r\n}\r\n\r\n.mat-column-min {\r\n    flex: 0 0 100px;\r\n}\r\n\r\n.mat-column-max {\r\n    flex: 0 0 100px;\r\n}\r\n\r\n.mat-column-remove {\r\n    flex: 0 0 60px;\r\n}\r\n\r\n.selectidthClass{\r\n    flex: 0 0 50px;\r\n }"

/***/ }),

/***/ "./src/app/device/device-list/device-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/device/device-list/device-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"filter\" *ngIf=\"deviceSelected\">\r\n    <button mat-icon-button title=\"Device Map\" (click)=\"onGoBack()\" style=\"margin-right:10px;margin-left:-10px;\">\r\n      <mat-icon aria-label=\"Show devices map\">arrow_back</mat-icon>\r\n    </button>\r\n    <div class=\"my-form-field\" style=\"\">\r\n      <span>Device</span>\r\n      <mat-select [(value)]=\"deviceSelected\" style=\"width: 300px\" (selectionChange)=\"onDeviceChange($event.source)\">\r\n        <mat-option *ngFor=\"let device of devicesValue()\" [value]=\"device\">\r\n          {{ device.name }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </div>\r\n    <div class=\"my-form-field\" style=\"\">\r\n      <span>Filter</span>\r\n      <input (keyup)=\"applyFilter($event.target.value)\" style=\"width: 450px\" type=\"text\">\r\n    </div>\r\n    <!-- <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field> -->\r\n    <!-- <div class=\"my-form-field\" style=\"padding: 10 20 10 20\">\r\n      <input (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\" type=\"text\" style=\"width: 100%\">\r\n    </div> -->\r\n  </div>\r\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\r\n    <!-- Checkbox Column -->\r\n    <ng-container matColumnDef=\"select\">\r\n      <mat-header-cell *matHeaderCellDef [ngClass]=\"'selectidthClass'\">\r\n        <button mat-icon-button (click)=\"onAddTag()\" class=\"remove\">\r\n          <mat-icon>add</mat-icon>\r\n        </button>\r\n        <!-- <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\"\r\n          [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n        </mat-checkbox> -->\r\n      </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\" [ngClass]=\"'selectidthClass'\">\r\n        <button mat-icon-button (click)=\"onEditRow(element)\" class=\"remove\" *ngIf=\"deviceSelected.type === deviceType.SiemensS7\">\r\n          <mat-icon>edit</mat-icon>\r\n        </button>\r\n        <!-- <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\r\n        </mat-checkbox> -->\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Address Column -->\r\n    <ng-container matColumnDef=\"address\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Address </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.address}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Device Column -->\r\n    <ng-container matColumnDef=\"device\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Device </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{deviceSelected.name}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Device Column -->\r\n    <ng-container matColumnDef=\"type\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Type </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.type}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Min Column -->\r\n    <ng-container matColumnDef=\"min\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Min </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.min}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Max Column -->\r\n    <ng-container matColumnDef=\"max\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Max </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.max}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Value Column -->\r\n    <ng-container matColumnDef=\"value\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Value </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.value}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Button remove Column -->\r\n    <ng-container matColumnDef=\"remove\">\r\n      <mat-header-cell *matHeaderCellDef> </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <button mat-icon-button (click)=\"$event.stopPropagation();onRemoveRow(element)\" class=\"remove\">\r\n          <mat-icon>clear</mat-icon>\r\n        </button>\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\" class=\"my-mat-row\"></mat-row>\r\n  </mat-table>\r\n</div>\r\n\r\n<button mat-fab color=\"primary\" (click)=\"onAddTag()\" style=\"position: absolute; right: 20px; bottom: 30px; z-index: 9999;\">\r\n  <mat-icon class=\"\">add</mat-icon>\r\n</button>"

/***/ }),

/***/ "./src/app/device/device-list/device-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/device/device-list/device-list.component.ts ***!
  \*************************************************************/
/*! exports provided: DeviceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceListComponent", function() { return DeviceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _tag_property_tag_property_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../tag-property/tag-property.component */ "./src/app/device/tag-property/tag-property.component.ts");
/* harmony import */ var _models_device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_models/device */ "./src/app/_models/device.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var _services_hmi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/hmi.service */ "./src/app/_services/hmi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DeviceListComponent = /** @class */ (function () {
    function DeviceListComponent(dialog, hmiService, projectService) {
        this.dialog = dialog;
        this.hmiService = hmiService;
        this.projectService = projectService;
        this.displayedColumns = ['select', 'name', 'address', 'device', 'type', 'min', 'max', 'value', 'remove'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]([]);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.dirty = false;
        this.deviceType = _models_device__WEBPACK_IMPORTED_MODULE_4__["DeviceType"];
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.goto = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DeviceListComponent.prototype.ngOnInit = function () {
        this.devices = this.projectService.getDevices();
        if (!this.deviceSelected && this.devices) {
            this.deviceSelected = this.devices[0];
        }
    };
    DeviceListComponent.prototype.ngAfterViewInit = function () {
        if (this.deviceSelected) {
            this.bindToTable(this.deviceSelected.tags);
        }
        this.dataSource.sort = this.sort;
        this.table.renderRows();
    };
    DeviceListComponent.prototype.bindToTable = function (tags) {
        this.dataSource.data = Object.values(tags);
    };
    DeviceListComponent.prototype.onDeviceChange = function (source) {
        this.dataSource.data = [];
        this.deviceSelected = source.value;
        if (this.deviceSelected.tags) {
            this.bindToTable(this.deviceSelected.tags);
        }
    };
    DeviceListComponent.prototype.setSelectedDevice = function (device) {
        var _this = this;
        this.devices = this.projectService.getDevices(); //JSON.parse(JSON.stringify(this.projectService.getDevices()));
        this.updateDeviceValue();
        // this.devices = JSON.parse(JSON.stringify(this.projectService.getDevices()));
        Object.values(this.devices).forEach(function (d) {
            if (d.name === device.name) {
                _this.deviceSelected = d;
                _this.bindToTable(_this.deviceSelected.tags);
            }
        });
    };
    DeviceListComponent.prototype.onGoBack = function () {
        this.goto.emit();
    };
    DeviceListComponent.prototype.onRemoveRow = function (row) {
        var index = this.dataSource.data.indexOf(row, 0);
        // if (index > -1) {
        //   this.dataSource.data.splice(index, 1);
        //   this.dirty = true;
        // }
        if (this.dataSource.data[index]) {
            delete this.deviceSelected.tags[this.dataSource.data[index].id];
        }
        this.bindToTable(this.deviceSelected.tags);
        this.save.emit();
    };
    /** Whether the number of selected elements matches the total number of rows. */
    DeviceListComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    DeviceListComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    DeviceListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    DeviceListComponent.prototype.onEditRow = function (row) {
        this.editTag(row, false);
    };
    DeviceListComponent.prototype.onAddTag = function () {
        if (this.deviceSelected.type === _models_device__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].OPCUA) {
            this.addOpcTags(null);
        }
        else {
            var tag = new _models_device__WEBPACK_IMPORTED_MODULE_4__["Tag"]();
            this.editTag(tag, true);
        }
    };
    DeviceListComponent.prototype.addOpcTags = function (tag) {
        var _this = this;
        // console.log('The Edit Tag open');
        var dialogRef = this.dialog.open(_tag_property_tag_property_component__WEBPACK_IMPORTED_MODULE_3__["TagPropertyComponent"], {
            minWidth: '1200px',
            minHeight: '900px',
            panelClass: 'dialog-property',
            data: { device: this.deviceSelected, tag: tag, devices: this.devices },
            position: { top: '80px' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dirty = true;
                result.nodes.forEach(function (n) {
                    var tag = new _models_device__WEBPACK_IMPORTED_MODULE_4__["Tag"]();
                    tag.id = n.id;
                    tag.name = n.text;
                    tag.type = n.type;
                    tag.address = n.id;
                    _this.checkToAdd(tag, result.device);
                });
                _this.save.emit();
            }
        });
    };
    DeviceListComponent.prototype.editTag = function (tag, checkToAdd) {
        var _this = this;
        // console.log('The Edit Tag open');
        var oldtag = tag.name;
        var temptag = JSON.parse(JSON.stringify(tag));
        var dialogRef = this.dialog.open(_tag_property_tag_property_component__WEBPACK_IMPORTED_MODULE_3__["TagPropertyComponent"], {
            // minWidth: '700px',
            // minHeight: '700px',
            panelClass: 'dialog-property',
            data: { device: this.deviceSelected, tag: temptag, devices: this.devices },
            position: { top: '80px' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dirty = true;
                // console.log('The Edit Tag was closed');
                tag.id = temptag.name;
                tag.name = temptag.name;
                tag.type = temptag.type;
                tag.address = temptag.address;
                tag.min = temptag.min;
                tag.max = temptag.max;
                if (checkToAdd) {
                    _this.checkToAdd(tag, result.device);
                }
                else if (tag.id !== oldtag) {
                    //remove old tag device reference
                    delete result.device.tags[oldtag];
                    _this.checkToAdd(tag, result.device);
                }
                _this.save.emit();
            }
        });
    };
    DeviceListComponent.prototype.checkToAdd = function (tag, device) {
        var exist = false;
        Object.keys(device.tags).forEach(function (key) {
            if (device.tags[key].id) {
                if (device.tags[key].id === tag.id) {
                    exist = true;
                }
            }
            else if (device.tags[key].name === tag.id) {
                exist = true;
            }
        });
        if (!exist) {
            device.tags[tag.id] = tag;
        }
        this.bindToTable(this.deviceSelected.tags);
    };
    DeviceListComponent.prototype.updateDeviceValue = function () {
        var sigs = this.hmiService.getAllSignals();
        for (var id in sigs) {
            var vartoken = id.split(_services_hmi_service__WEBPACK_IMPORTED_MODULE_6__["HmiService"].separator);
            if (vartoken.length > 1 && this.devices[vartoken[0]] && this.devices[vartoken[0]].tags[vartoken[1]]) {
                this.devices[vartoken[0]].tags[vartoken[1]].value = sigs[id].value;
            }
        }
    };
    DeviceListComponent.prototype.devicesValue = function () {
        return Object.values(this.devices);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_device__WEBPACK_IMPORTED_MODULE_4__["Device"])
    ], DeviceListComponent.prototype, "deviceSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DeviceListComponent.prototype, "save", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DeviceListComponent.prototype, "goto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTable"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTable"])
    ], DeviceListComponent.prototype, "table", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DeviceListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
    ], DeviceListComponent.prototype, "trigger", void 0);
    DeviceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device-list',
            template: __webpack_require__(/*! ./device-list.component.html */ "./src/app/device/device-list/device-list.component.html"),
            styles: [__webpack_require__(/*! ./device-list.component.css */ "./src/app/device/device-list/device-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _services_hmi_service__WEBPACK_IMPORTED_MODULE_6__["HmiService"],
            _services_project_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]])
    ], DeviceListComponent);
    return DeviceListComponent;
}());



/***/ }),

/***/ "./src/app/device/device-map/device-map.component.html":
/*!*************************************************************!*\
  !*** ./src/app/device/device-map/device-map.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-line\"></div>\r\n<div *ngFor=\"let device of devicesValue(); index as i\" class=\"device-line\" [style.left]=\"getDeviceLinePosition(i) + 'px'\"></div>\r\n<div class=\"connection-line\" [style.left]=\"getDeviceConnectionLeftPosition(devicesValue().length) + 'px'\" [style.width]=\"getDeviceConnectionWidth(devicesValue().length) + 'px'\"></div>\r\n<div class=\"container\">\r\n  <div class=\"main-device\" *ngIf=\"server && server.property\">\r\n    <span class=\"device-header\" style=\"padding-top: 10px;\">{{ server.name }}</span>\r\n    <span class=\"device-pro\">{{ server.property.address }}</span>\r\n    <mat-icon (click)=\"onEditDevice(server)\" class=\"device-icon device-edit\">edit</mat-icon>\r\n  </div>\r\n  <div *ngFor=\"let device of devicesValue(); index as i\" class=\"node-device\" [style.color]=\"(device.enabled) ? '#FFFFFF' : '#C5C5C5'\" [style.left]=\"getDevicePosition(i) + 'px'\">\r\n    <span class=\"device-header\">{{ device.name }}</span>\r\n    <span class=\"device-pro\" *ngIf=\"device.property\">{{ device.property.address }}</span>\r\n    <div *ngIf=\"isDevicePropertyToShow(device)\" style=\"padding-bottom: 10px;\">\r\n      <span class=\"device-pro-line\" *ngIf=\"device.property.port\">Port: {{ device.property.port }}</span>\r\n      <span class=\"device-pro-line\" *ngIf=\"device.property.rack || device.property.rack === 0\"> / Rack: {{device.property.rack}}</span>\r\n      <span class=\"device-pro-line\" *ngIf=\"device.property.slot || device.property.slot === 0\"> / Slot: {{device.property.slot}}</span>\r\n    </div>\r\n    <div class=\"device-status\" *ngIf=\"device.enabled\" [style.background-color]=\"getDeviceStatusColor(device)\"></div>\r\n    <mat-icon (click)=\"onListDevice(device)\" class=\"device-icon device-list\">list_alt</mat-icon>\r\n    <mat-icon (click)=\"onEditDevice(device)\" class=\"device-icon device-edit\">edit</mat-icon>\r\n    <mat-icon (click)=\"onRemoveDevice(device)\" class=\"device-icon device-delete\">clear</mat-icon>\r\n  </div>\r\n</div>\r\n\r\n<button mat-fab color=\"primary\" (click)=\"addDevice()\" style=\"position: absolute; right: 20px; bottom: 30px; z-index: 9999;\">\r\n  <mat-icon class=\"\">add</mat-icon>\r\n</button>"

/***/ }),

/***/ "./src/app/device/device-map/device-map.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/device/device-map/device-map.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-device {\n  position: absolute;\n  left: calc((100% - 160px) / 2);\n  top: calc((100% - 90px) / 4);\n  width: 160px;\n  height: 90px;\n  min-height: 90px;\n  text-align: center;\n  background-color: #4C5358;\n  color: white;\n  border: 5px solid #3C3C3C;\n  /* border: 0.5px solid rgba(0,0,0,0.5); */\n  /* border-radius: 8px;  */ }\n\n.node-device {\n  position: absolute;\n  top: calc(((100% - 90px) / 4) + 90px + (60px * 2));\n  width: 160px;\n  height: 90px;\n  background-color: #464a4d;\n  color: white;\n  text-align: center;\n  padding-top: 17px;\n  left: 100px;\n  border: 5px solid #3C3C3C; }\n\n.main-line {\n  position: absolute;\n  left: calc(calc((100% - 160px) / 2) + calc((160px - 6px) / 2));\n  top: calc(((100% - 90px) / 4) + 90px);\n  height: 60px;\n  width: 6px;\n  background-color: #3C3C3C; }\n\n.device-line {\n  position: absolute;\n  top: calc(((100% - 90px) / 4) + 90px + 60px);\n  height: 60px;\n  width: 6px;\n  background-color: #3C3C3C; }\n\n.connection-line {\n  position: absolute;\n  top: calc(((100% - 90px) / 4) + 90px + 60px);\n  height: 6px;\n  background-color: #3C3C3C; }\n\n.main-device mat-icon {\n  font-size: 0px; }\n\n.main-device:hover mat-icon {\n  font-size: 17px; }\n\n.device-header {\n  display: block;\n  font-size: 17px;\n  padding-bottom: 7px;\n  padding-top: 0px; }\n\n.device-pro {\n  display: block;\n  font-size: 12px;\n  padding-top: 0px; }\n\n.device-pro-line {\n  display: inline-block;\n  font-size: 12px;\n  padding-top: 5px; }\n\n.device-icon {\n  position: absolute;\n  font-size: 17px;\n  color: rgba(255, 255, 255, 0.8);\n  cursor: pointer; }\n\n.device-edit {\n  bottom: 0px;\n  right: 2px; }\n\n.device-delete {\n  top: 2px;\n  right: 2px;\n  font-size: 17px; }\n\n.device-list {\n  bottom: 0px;\n  right: 26px; }\n\n.device-status {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  width: 10px;\n  height: 10px;\n  border-radius: 4px; }\n"

/***/ }),

/***/ "./src/app/device/device-map/device-map.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/device/device-map/device-map.component.ts ***!
  \***********************************************************/
/*! exports provided: DeviceMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceMapComponent", function() { return DeviceMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _device_property_device_property_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../device-property/device-property.component */ "./src/app/device/device-property/device-property.component.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var _models_device__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../_models/device */ "./src/app/_models/device.ts");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_helpers/utils */ "./src/app/_helpers/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeviceMapComponent = /** @class */ (function () {
    function DeviceMapComponent(dialog, projectService) {
        this.dialog = dialog;
        this.projectService = projectService;
        this.goto = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.devices = {};
        this.devicesStatus = {};
        this.dirty = false;
    }
    DeviceMapComponent.prototype.ngOnInit = function () {
    };
    DeviceMapComponent.prototype.ngAfterViewInit = function () {
        this.loadCurrentProject();
    };
    DeviceMapComponent.prototype.ngOnDestroy = function () {
    };
    DeviceMapComponent.prototype.onEditDevice = function (device) {
        this.editDevice(device, false);
    };
    DeviceMapComponent.prototype.loadCurrentProject = function () {
        // take the copy of devices to save by leave
        var prj = this.projectService.getProject();
        if (prj && prj.server) {
            this.server = prj.server;
        }
        if (prj && prj.devices) {
            this.devices = prj.devices;
        }
        // this.server = this.projectService.getServer();//JSON.parse(JSON.stringify(this.projectService.getServer()));
        // this.devices = this.projectService.getDevices();//JSON.parse(JSON.stringify(this.projectService.getDevices()));
    };
    // saveDeviceMap() {
    //   if (this.dirty) {
    //     this.projectService.setServer(this.server, true);
    //     this.projectService.setDevices(this.devices, true);
    //   }
    // }
    DeviceMapComponent.prototype.addDevice = function () {
        var device = new _models_device__WEBPACK_IMPORTED_MODULE_4__["Device"]();
        device.id = _helpers_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].getGUID();
        device.property = new _models_device__WEBPACK_IMPORTED_MODULE_4__["DeviceNetProperty"]();
        device.enabled = false;
        device.tags = {};
        this.editDevice(device, false);
    };
    DeviceMapComponent.prototype.onRemoveDevice = function (device) {
        this.editDevice(device, true);
    };
    DeviceMapComponent.prototype.removeDevice = function (device) {
        delete this.devices[device.name];
    };
    DeviceMapComponent.prototype.checkToAddDevice = function (device) {
        var _this = this;
        // let dev = this.devices[device.name];
        // this.devices[device.name] = device;
        // for (let key in Object.keys(this.devices)) {
        Object.keys(this.devices).forEach(function (key) {
            if (_this.devices[key].id === device.id) {
                delete _this.devices[key];
                return;
            }
        });
        this.devices[device.name] = device;
    };
    DeviceMapComponent.prototype.getDevicePosition = function (index) {
        if (this.devices && Object.values(this.devices).length) {
            var offset = 160; // scss.$card-width
            var pos = index + 1;
            var centerd = Object.keys(this.devices).length + 1;
            var result = ((window.innerWidth - offset) / centerd) * pos;
            return result;
        }
        return 0;
    };
    DeviceMapComponent.prototype.getDeviceLinePosition = function (index) {
        if (this.devices && Object.values(this.devices).length) {
            var offset = 160; // scss.$card-width
            var pos = index + 1;
            var centerd = Object.keys(this.devices).length + 1;
            var result = ((window.innerWidth - offset) / centerd) * pos;
            result += (160 - 6) / 2; // card center: scss.$card-width - $line-size
            return result;
        }
        return 0;
    };
    DeviceMapComponent.prototype.getDeviceConnectionLeftPosition = function (index) {
        var offset = 160; // scss.$card-width
        var centerd = Object.keys(this.devices).length + 1;
        var result = ((window.innerWidth - offset) / centerd) * 1;
        result += (160 - 6) / 2; // card center: scss.$card-width - $line-size
        return result;
    };
    DeviceMapComponent.prototype.getDeviceConnectionWidth = function (index) {
        var offset = 160; // scss.$card-width
        var pos = index;
        var centerd = Object.keys(this.devices).length + 1;
        var result = (((window.innerWidth - offset) / centerd) * pos) - (((window.innerWidth - offset) / centerd) * 1);
        return result;
    };
    DeviceMapComponent.prototype.devicesValue = function () {
        if (this.devices && Object.values(this.devices).length) {
            var result_1 = [];
            Object.values(this.devices).forEach(function (value) {
                result_1.push(value);
            });
            return result_1.sort(function (a, b) { return (a.name > b.name) ? 1 : -1; });
        }
        return [];
    };
    DeviceMapComponent.prototype.onListDevice = function (device) {
        this.goto.emit(device);
    };
    DeviceMapComponent.prototype.isDevicePropertyToShow = function (device) {
        if (device.property && device.type !== 'OPCUA') {
            return true;
        }
    };
    DeviceMapComponent.prototype.getDeviceStatusColor = function (device) {
        var st = this.devicesStatus[device.name];
        if (this.devicesStatus[device.name]) {
            if (st === 'connect-ok') {
                return '#00b050';
            }
            else if (st === 'connect-error') {
                return '#ff2d2d';
            }
            else if (st === 'connect-off') {
                return '#ffc000';
            }
        }
    };
    DeviceMapComponent.prototype.setDeviceStatus = function (event) {
        console.log('device set: ' + event.id + ' ' + event.status);
        this.devicesStatus[event.id] = event.status;
    };
    DeviceMapComponent.prototype.editDevice = function (device, toremove) {
        var _this = this;
        // console.log('The Edit Device open');
        var tempdevice = JSON.parse(JSON.stringify(device));
        var dialogRef = this.dialog.open(_device_property_device_property_component__WEBPACK_IMPORTED_MODULE_2__["DevicePropertyComponent"], {
            // minWidth: '700px',
            // minHeight: '700px',
            panelClass: 'dialog-property',
            data: { device: tempdevice, remove: toremove },
            position: { top: '80px' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.dirty = true;
                if (toremove) {
                    _this.removeDevice(device);
                }
                else {
                    // console.log('The Edit Device was closed');
                    device.name = tempdevice.name;
                    device.type = tempdevice.type;
                    device.enabled = tempdevice.enabled;
                    if (device.property && tempdevice.property) {
                        device.property.address = tempdevice.property.address;
                        device.property.port = parseInt(tempdevice.property.port);
                        device.property.slot = parseInt(tempdevice.property.slot);
                        device.property.rack = parseInt(tempdevice.property.rack);
                    }
                    if (device.type === _models_device__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].SiemensS7) {
                        _this.checkToAddDevice(device);
                    }
                    else if (device.type === _models_device__WEBPACK_IMPORTED_MODULE_4__["DeviceType"].OPCUA) {
                        _this.checkToAddDevice(device);
                    }
                    _this.save.emit();
                    // callback(result.settings);
                    // if (this.isToInitInEditor(result.settings)) {
                    //   this.checkElementToInit(result.settings);
                    // }
                }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DeviceMapComponent.prototype, "goto", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DeviceMapComponent.prototype, "save", void 0);
    DeviceMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device-map',
            template: __webpack_require__(/*! ./device-map.component.html */ "./src/app/device/device-map/device-map.component.html"),
            styles: [__webpack_require__(/*! ./device-map.component.scss */ "./src/app/device/device-map/device-map.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]])
    ], DeviceMapComponent);
    return DeviceMapComponent;
}());



/***/ }),

/***/ "./src/app/device/device-property/device-property.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/device/device-property/device-property.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/device/device-property/device-property.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/device/device-property/device-property.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div style=\"width: 100%;\"> -->\r\n<div style=\"width: 100%;position: relative;padding-bottom: 40px\">\r\n  <div *ngIf=\"isToRemove\" style=\"margin-top: 20px;margin-bottom: 20px;\">\r\n    Would you like to remove Device '{{data.device.name}}' ?\r\n  </div>\r\n  <div *ngIf=\"!isToRemove\">\r\n    <h1 mat-dialog-title style=\"display:inline-block; cursor:move; padding-top: 15px\" mat-dialog-draggable *ngIf=\"!isFuxaServer\">\r\n      Device Property</h1>\r\n    <h1 mat-dialog-title style=\"display:inline-block; cursor:move; padding-top: 15px\" mat-dialog-draggable *ngIf=\"isFuxaServer\">FUXA\r\n      Server Property</h1>\r\n    <mat-icon (click)=\"onNoClick()\" style=\"float:right;cursor:pointer;color:gray;position: relative; top: 10px; right: 0px\">clear</mat-icon>\r\n  </div>\r\n  <div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 5px;\" *ngIf=\"!isToRemove\">\r\n    <div style=\"display: block;\">\r\n      <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n        <span>Name</span>\r\n        <input [(ngModel)]=\"data.device.name\" style=\"width: 300px\" type=\"text\">\r\n      </div>\r\n      <div class=\"my-form-field\" style=\"display: inline-block;margin-bottom: 10px;\" *ngIf=\"!isFuxaServer\">\r\n        <span>Type</span>\r\n        <mat-select [(value)]=\"data.device.type\" style=\"width: 200px\" [disabled]=\"isFuxaServer\">\r\n          <mat-option *ngFor=\"let type of deviceType | enumToArray\" [value]=\"type.key\">\r\n            {{ type.value }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </div>\r\n      <div class=\"my-form-field\" style=\"display: inline-block;margin-bottom: 10px;margin-left: 20px;\" *ngIf=\"!isFuxaServer\">\r\n        <span>Enable</span>\r\n        <mat-slide-toggle color=\"primary\" [(ngModel)]=\"data.device.enabled\"></mat-slide-toggle>\r\n      </div>      \r\n      <div class=\"my-form-field\" *ngIf=\"data.device.property\" style=\"display: block;margin-bottom: 10px;\">\r\n        <span>Address (IP or opc.tcp://[server]:[port])</span>\r\n        <input [(ngModel)]=\"data.device.property.address\" style=\"width: 300px\" type=\"ip\">\r\n      </div>\r\n      <div *ngIf=\"data.device.property && isSiemensS7(data.device.type)\">\r\n        <div class=\"my-form-field\" style=\"display: inline-block;margin-bottom: 10px;\">\r\n          <span>Port</span>\r\n          <input numberOnly [(ngModel)]=\"data.device.property.port\" style=\"width: 80px\" type=\"text\">\r\n        </div>\r\n        <div class=\"my-form-field\" style=\"display: inline-block;margin-bottom: 10px;\">\r\n          <span>Rack</span>\r\n          <input numberOnly [(ngModel)]=\"data.device.property.rack\" style=\"width: 80px\" type=\"text\">\r\n        </div>\r\n        <div class=\"my-form-field\" style=\"display: inline-block;margin-bottom: 10px;\">\r\n          <span>Slot</span>\r\n          <input numberOnly [(ngModel)]=\"data.device.property.slot\" style=\"width: 80px\" type=\"text\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div mat-dialog-actions style=\"display: inline-block; position: absolute; bottom: 10px; right: 10px\">\r\n    <button mat-raised-button (click)=\"onNoClick()\">CANCEL</button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"onOkClick()\" [mat-dialog-close]=\"data\" cdkFocusInitial>OK</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/device/device-property/device-property.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/device/device-property/device-property.component.ts ***!
  \*********************************************************************/
/*! exports provided: DevicePropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevicePropertyComponent", function() { return DevicePropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_models/device */ "./src/app/_models/device.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DevicePropertyComponent = /** @class */ (function () {
    function DevicePropertyComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // @Input() name: any;
        this.deviceType = {};
        this.isFuxaServer = false;
        this.isToRemove = false;
    }
    DevicePropertyComponent.prototype.ngOnInit = function () {
        this.isToRemove = this.data.remove;
        this.isFuxaServer = (this.data.device.type && this.data.device.type === _models_device__WEBPACK_IMPORTED_MODULE_2__["DeviceType"].FuxaServer) ? true : false;
        for (var key in _models_device__WEBPACK_IMPORTED_MODULE_2__["DeviceType"]) {
            if (!this.isFuxaServer && key !== _models_device__WEBPACK_IMPORTED_MODULE_2__["DeviceType"].FuxaServer) {
                this.deviceType[key] = _models_device__WEBPACK_IMPORTED_MODULE_2__["DeviceType"][key];
            }
        }
    };
    DevicePropertyComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DevicePropertyComponent.prototype.onOkClick = function () {
    };
    DevicePropertyComponent.prototype.isSiemensS7 = function (type) {
        return (type === _models_device__WEBPACK_IMPORTED_MODULE_2__["DeviceType"].SiemensS7) ? true : false;
    };
    DevicePropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device-property',
            template: __webpack_require__(/*! ./device-property.component.html */ "./src/app/device/device-property/device-property.component.html"),
            styles: [__webpack_require__(/*! ./device-property.component.css */ "./src/app/device/device-property/device-property.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DevicePropertyComponent);
    return DevicePropertyComponent;
}());



/***/ }),

/***/ "./src/app/device/device.component.css":
/*!*********************************************!*\
  !*** ./src/app/device/device.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-panel {\r\n    /* z-index: 9999 !important; */\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    background-color: rgba(33,33,33,1);\r\n    /* background-color: rgba(33,33,33,0.92); */\r\n    color: rgba(255,255,255,1);\r\n    height: 40px;\r\n    width: 100%;\r\n}\r\n\r\n.device-btn {\r\n    height: 34px;\r\n    width: 34px;\r\n    min-width: unset !important;\r\n    padding:unset !important;\r\n    line-height: 34px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n    float: right;\r\n}\r\n\r\n.device-btn mat-icon {\r\n    font-size: 24px;\r\n    height: unset;\r\n    width: unset;\r\n}\r\n\r\n.work-panel {\r\n    position: absolute;\r\n    top: 40px;\r\n    left: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/device/device.component.html":
/*!**********************************************!*\
  !*** ./src/app/device/device.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-panel\">\r\n</div>\r\n<diV class=\"work-panel\">\r\n    <app-device-list [hidden]=\"showMode === 'map'\" #devicelist (save)=\"saveDevices()\" (goto)=\"gotoMap($event)\"></app-device-list>\r\n    <app-device-map [hidden]=\"showMode === 'tags'\" #devicemap (save)=\"saveDevices()\" (goto)=\"gotoList($event)\"></app-device-map>\r\n</diV>"

/***/ }),

/***/ "./src/app/device/device.component.ts":
/*!********************************************!*\
  !*** ./src/app/device/device.component.ts ***!
  \********************************************/
/*! exports provided: DeviceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceComponent", function() { return DeviceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _device_list_device_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./device-list/device-list.component */ "./src/app/device/device-list/device-list.component.ts");
/* harmony import */ var _device_map_device_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./device-map/device-map.component */ "./src/app/device/device-map/device-map.component.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var _services_hmi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/hmi.service */ "./src/app/_services/hmi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeviceComponent = /** @class */ (function () {
    function DeviceComponent(projectService, hmiService) {
        this.projectService = projectService;
        this.hmiService = hmiService;
        this.showMode = 'map';
    }
    DeviceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionSave = this.projectService.onSaveCurrent.subscribe(function (saveas) {
            _this.saveDevices();
            if (saveas) {
                _this.projectService.saveAs();
            }
        });
        this.subscriptionLoad = this.projectService.onLoadHmi.subscribe(function (res) {
            _this.deviceMap.loadCurrentProject();
            // this.deviceList.loadCurrentProject();
        });
        this.subscriptionDeviceChange = this.hmiService.onDeviceChanged.subscribe(function (event) {
            _this.deviceMap.setDeviceStatus(event);
        });
        this.subscriptionVariableChange = this.hmiService.onVariableChanged.subscribe(function (event) {
            _this.deviceList.updateDeviceValue();
        });
        this.hmiService.askDeviceStatus();
    };
    DeviceComponent.prototype.ngAfterViewInit = function () {
        this.showMode = 'map';
    };
    DeviceComponent.prototype.ngOnDestroy = function () {
        // this.checkToSave();
        try {
            if (this.subscriptionSave) {
                this.subscriptionSave.unsubscribe();
            }
            if (this.subscriptionLoad) {
                this.subscriptionLoad.unsubscribe();
            }
            if (this.subscriptionDeviceChange) {
                this.subscriptionDeviceChange.unsubscribe();
            }
            if (this.subscriptionVariableChange) {
                this.subscriptionVariableChange.unsubscribe();
            }
        }
        catch (e) {
        }
    };
    DeviceComponent.prototype.show = function (mode) {
        // this.checkToSave();
        this.showMode = mode;
        if (this.showMode === 'tags') {
            this.deviceList.updateDeviceValue();
            try {
                if (Object.values(this.deviceMap.devicesValue()).length > 0) {
                    this.deviceList.setSelectedDevice(this.deviceMap.devicesValue()[0]);
                }
            }
            catch (e) {
            }
        }
    };
    DeviceComponent.prototype.saveDevices = function () {
        // this.deviceMap.saveDeviceMap();
        // this.deviceList.saveDeviceList(); 
        this.projectService.save();
        this.deviceMap.dirty = false;
        this.deviceList.dirty = false;
    };
    // checkToSave() {
    //   if (this.deviceList.dirty || this.deviceMap.dirty) {
    //     // if (window.confirm('You want to save the Project change?')) {
    //       this.saveDevices();
    //     // }
    //   }
    // }
    DeviceComponent.prototype.gotoMap = function () {
        this.show('map');
    };
    DeviceComponent.prototype.gotoList = function (device) {
        this.show('tags');
        this.deviceList.setSelectedDevice(device);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('devicelist'),
        __metadata("design:type", _device_list_device_list_component__WEBPACK_IMPORTED_MODULE_1__["DeviceListComponent"])
    ], DeviceComponent.prototype, "deviceList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('devicemap'),
        __metadata("design:type", _device_map_device_map_component__WEBPACK_IMPORTED_MODULE_2__["DeviceMapComponent"])
    ], DeviceComponent.prototype, "deviceMap", void 0);
    DeviceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-device',
            template: __webpack_require__(/*! ./device.component.html */ "./src/app/device/device.component.html"),
            styles: [__webpack_require__(/*! ./device.component.css */ "./src/app/device/device.component.css")]
        }),
        __metadata("design:paramtypes", [_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"],
            _services_hmi_service__WEBPACK_IMPORTED_MODULE_4__["HmiService"]])
    ], DeviceComponent);
    return DeviceComponent;
}());



/***/ }),

/***/ "./src/app/device/tag-property/tag-property.component.css":
/*!****************************************************************!*\
  !*** ./src/app/device/tag-property/tag-property.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/device/tag-property/tag-property.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/device/tag-property/tag-property.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;position: relative;padding-bottom: 40px\">\r\n  <div *ngIf=\"isToRemove\" style=\"margin-top: 20px;margin-bottom: 20px;\">\r\n    Would you like to remove Tag '{{data.tag.name}}' from {{data.device.name}} ?\r\n  </div>\r\n  <div *ngIf=\"!isToRemove\">\r\n    <h1 *ngIf=\"!withtree\" mat-dialog-title style=\"display:inline-block; cursor:move; padding-top: 15px\" mat-dialog-draggable>\r\n      Tag Property\r\n    </h1>\r\n    <h1 *ngIf=\"withtree\" mat-dialog-title style=\"display:inline-block; cursor:move; padding-top: 15px\" mat-dialog-draggable>\r\n      Browse Tags in OPC UA Server\r\n    </h1>    \r\n    <mat-icon (click)=\"onNoClick()\" style=\"float:right;cursor:pointer;color:gray;position: relative; top: 10px; right: 0px\">clear</mat-icon>\r\n  </div>\r\n  <div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 5px;\" *ngIf=\"!isToRemove && !withtree\">\r\n    <div style=\"display: block;\">\r\n      <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n        <span>Device</span>\r\n        <mat-select [(value)]=\"data.device.name\" style=\"width: 300px\" [disabled]=\"true\">\r\n          <mat-option *ngFor=\"let device of devicesValue()\" [value]=\"device.name\">\r\n            {{ device.name }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </div>\r\n      <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n        <span>Tagname</span>\r\n        <input [(ngModel)]=\"data.tag.name\" style=\"width: 300px\" type=\"text\" (input)=\"onCheckValue($event)\">\r\n      </div>\r\n      <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n        <span>Type</span>\r\n        <mat-select [(value)]=\"data.tag.type\" style=\"width: 300px\">\r\n          <mat-option *ngFor=\"let type of tagType | enumToArray\" [value]=\"type.key\">\r\n            {{ type.value }}\r\n          </mat-option>\r\n        </mat-select>\r\n      </div>\r\n      <div class=\"my-form-field\"style=\"display: block;margin-bottom: 10px;\">\r\n        <span>Address (ex. db5.dbb3   db4.dbx2.0)</span>\r\n        <input [(ngModel)]=\"data.tag.address\" style=\"width: 300px\" type=\"text\">\r\n      </div>\r\n      <div class=\"my-form-field\" style=\"display: inline-block;margin-bottom: 10px;\">\r\n        <span>Min</span>\r\n        <input numberOnly [(ngModel)]=\"data.tag.min\" style=\"width: 80px\" type=\"text\">\r\n      </div>\r\n      <div class=\"my-form-field\" style=\"display: inline-block;margin-bottom: 10px;\">\r\n        <span>Max</span>\r\n        <input numberOnly [(ngModel)]=\"data.tag.max\" style=\"width: 80px\" type=\"text\">\r\n      </div>\r\n      <div class=\"error\" *ngIf=\"error\">\r\n          <span>{{error}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div style=\"overflow-y: auto; overflow-x: hidden; padding-top: 5px;\" [hidden]=\"isToRemove && !withtree\">\r\n    <ngx-treetable #treetable [config]=\"config\" (expand)=\"queryNext($event)\"></ngx-treetable>\r\n  </div>\r\n\r\n  <div mat-dialog-actions style=\"display: inline-block; position: absolute; bottom: 10px; right: 10px\">\r\n    <button mat-raised-button (click)=\"onNoClick()\">CANCEL</button>\r\n    <button mat-raised-button [disabled]=\"(error) ? 'true' : 'false'\" color=\"primary\" (click)=\"onOkClick()\" [mat-dialog-close]=\"data\" cdkFocusInitial>OK</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/device/tag-property/tag-property.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/device/tag-property/tag-property.component.ts ***!
  \***************************************************************/
/*! exports provided: TagPropertyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagPropertyComponent", function() { return TagPropertyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_device__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../_models/device */ "./src/app/_models/device.ts");
/* harmony import */ var _gui_helpers_treetable_treetable_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../gui-helpers/treetable/treetable.component */ "./src/app/gui-helpers/treetable/treetable.component.ts");
/* harmony import */ var _services_hmi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/hmi.service */ "./src/app/_services/hmi.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var TagPropertyComponent = /** @class */ (function () {
    function TagPropertyComponent(hmiService, dialogRef, data) {
        var _this = this;
        this.hmiService = hmiService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.existing = [];
        this.withtree = false;
        this.config = { width: '100%', height: '600px' };
        if (this.data.device.type === _models_device__WEBPACK_IMPORTED_MODULE_2__["DeviceType"].OPCUA) {
            this.withtree = true;
        }
        else {
            this.config.height = '0px';
            Object.keys(this.data.device.tags).forEach(function (key) {
                var tag = _this.data.device.tags[key];
                if (tag.id) {
                    if (tag.id !== _this.data.tag.id) {
                        _this.existing.push(tag.name);
                    }
                }
                else if (tag.name !== _this.data.tag.name) {
                    _this.existing.push(tag.name);
                }
            });
        }
    }
    TagPropertyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tagType = _models_device__WEBPACK_IMPORTED_MODULE_2__["TagType"];
        if (this.withtree) {
            if (this.data.device.type === _models_device__WEBPACK_IMPORTED_MODULE_2__["DeviceType"].OPCUA) {
                this.subscriptionBrowse = this.hmiService.onDeviceBrowse.subscribe(function (values) {
                    if (_this.data.device.name === values.device) {
                        if (values.error) {
                            _this.addError(values.node, values.error);
                        }
                        else {
                            _this.addNodes(values.node, values.result);
                        }
                    }
                    // console.log(values);
                });
                this.subscriptionNodeAttribute = this.hmiService.onDeviceNodeAttribute.subscribe(function (values) {
                    if (_this.data.device.name === values.device) {
                        if (values.error) {
                            //   this.addError(values.node, values.error);
                        }
                        else if (values.node) {
                            if (values.node.attribute[14]) { // datatype
                                values.node.type = values.node.attribute[14];
                            }
                            _this.treetable.setNodeProperty(values.node, _this.attributeToString(values.node.attribute));
                        }
                    }
                    // console.log(values);
                });
            }
            this.queryNext(null);
        }
    };
    TagPropertyComponent.prototype.ngOnDestroy = function () {
        // this.checkToSave();
        try {
            if (this.subscriptionBrowse) {
                this.subscriptionBrowse.unsubscribe();
            }
            if (this.subscriptionNodeAttribute) {
                this.subscriptionNodeAttribute.unsubscribe();
            }
        }
        catch (e) {
        }
    };
    TagPropertyComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    TagPropertyComponent.prototype.onOkClick = function () {
        var _this = this;
        this.data.nodes = [];
        Object.keys(this.treetable.nodes).forEach(function (key) {
            var n = _this.treetable.nodes[key];
            if (n.checked) {
                _this.data.nodes.push(_this.treetable.nodes[key]);
            }
        });
    };
    TagPropertyComponent.prototype.onCheckValue = function (tag) {
        if (this.existing.indexOf(tag.target.value) !== -1) {
            this.error = "Tagname exist!";
        }
        else {
            this.error = "";
        }
    };
    TagPropertyComponent.prototype.addNodes = function (parent, nodes) {
        var _this = this;
        nodes.forEach(function (n) {
            var node = new _gui_helpers_treetable_treetable_component__WEBPACK_IMPORTED_MODULE_3__["Node"](n.id, n.name);
            node.class = n.class;
            node.property = _this.getProperty(n);
            var enabled = true;
            if (_this.data.device.tags[n.id] && node.class === 'Variable') {
                // node allready selected
                enabled = false;
            }
            _this.treetable.addNode(node, parent, enabled);
            if (node.class === 'Variable') {
                _this.hmiService.askNodeAttributes(_this.data.device.name, n);
            }
        });
        this.treetable.update();
    };
    TagPropertyComponent.prototype.getProperty = function (n) {
        if (n.class === 'Object') { // Object
            return '';
        }
        else if (n.class === 'Variable') {
            return "Variable";
        }
        else if (n.class === 'Method') {
            return "Method";
        }
        return '';
    };
    TagPropertyComponent.prototype.addError = function (parent, error) {
    };
    TagPropertyComponent.prototype.devicesValue = function () {
        return Object.values(this.data.devices);
    };
    TagPropertyComponent.prototype.queryNext = function (node) {
        var n = (node) ? { id: node.id } : null;
        this.hmiService.askDeviceBrowse(this.data.device.name, n);
    };
    TagPropertyComponent.prototype.attributeToString = function (attribute) {
        var result = '';
        if (attribute) {
            Object.values(attribute).forEach(function (x) {
                if (result.length) {
                    result += ', ';
                }
                result += x;
            });
        }
        return result;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_gui_helpers_treetable_treetable_component__WEBPACK_IMPORTED_MODULE_3__["TreetableComponent"]),
        __metadata("design:type", _gui_helpers_treetable_treetable_component__WEBPACK_IMPORTED_MODULE_3__["TreetableComponent"])
    ], TagPropertyComponent.prototype, "treetable", void 0);
    TagPropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tag-property',
            template: __webpack_require__(/*! ./tag-property.component.html */ "./src/app/device/tag-property/tag-property.component.html"),
            styles: [__webpack_require__(/*! ./tag-property.component.css */ "./src/app/device/tag-property/tag-property.component.css")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_hmi_service__WEBPACK_IMPORTED_MODULE_4__["HmiService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], TagPropertyComponent);
    return TagPropertyComponent;
}());



/***/ }),

/***/ "./src/app/dynamic/dynamic.component.css":
/*!***********************************************!*\
  !*** ./src/app/dynamic/dynamic.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.content {\r\n  border: 1px solid rgba(0,0,0,0.1);\r\n  position: absolute;\r\n  background: rgba(255,255,255,1);\r\n}\r\n\r\n.close {\r\n  position: absolute;\r\n  bottom: 4px;\r\n  right: 4px;\r\n}"

/***/ }),

/***/ "./src/app/dynamic/dynamic.component.html":
/*!************************************************!*\
  !*** ./src/app/dynamic/dynamic.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" [style.left]=\"position.x + 'px'\" [style.top]=\"position.y + 'px'\" [style.width]=\"size.width + 'px'\" [style.height]=\"size.height + 40 + 'px'\">\r\n  <div #dataContainer></div>\r\n  <!-- <span>dynamically attached {{message}} {{position.x}} / {{position.y}}</span> -->\r\n\r\n  <!-- <div mat-dialog-actions class=\"close\"> -->\r\n    <button mat-button (click)=\"close()\" class=\"close\">Close</button>\r\n  <!-- </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dynamic/dynamic.component.ts":
/*!**********************************************!*\
  !*** ./src/app/dynamic/dynamic.component.ts ***!
  \**********************************************/
/*! exports provided: DynamicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicComponent", function() { return DynamicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicComponent = /** @class */ (function () {
    function DynamicComponent() {
        this.position = { x: 0, y: 0 };
        this.size = { width: 0, height: 0 };
    }
    DynamicComponent.prototype.ngOnInit = function () {
        this.dataContainer.nativeElement.innerHTML = this.message;
    };
    DynamicComponent.prototype.ngOnDestroy = function () {
    };
    DynamicComponent.prototype.close = function () {
        if (this.closeComponent) {
            this.closeComponent.destroy();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicComponent.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DynamicComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], DynamicComponent.prototype, "dataContainer", void 0);
    DynamicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dynamic-component',
            template: __webpack_require__(/*! ./dynamic.component.html */ "./src/app/dynamic/dynamic.component.html"),
            styles: [__webpack_require__(/*! ./dynamic.component.css */ "./src/app/dynamic/dynamic.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicComponent);
    return DynamicComponent;
}());



/***/ }),

/***/ "./src/app/editor/docname.dialog.html":
/*!********************************************!*\
  !*** ./src/app/editor/docname.dialog.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1 mat-dialog-title style=\"display:inline-block\" mat-dialog-draggable>Rename</h1>\r\n  <mat-icon (click)=\"onNoClick()\" style=\"float:right;margin-right:-10px;margin-top:-10px;cursor:pointer;color:gray;\">clear</mat-icon>\r\n  <div mat-dialog-content>\r\n    <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n        <span>Name</span>\r\n        <input [(ngModel)]=\"data.name\" type=\"text\" width=\"100%\" [readonly]=\"data.readonly\">\r\n    </div>\r\n    <!-- <div style=\"display: grid; margin-bottom: 20px;\">\r\n      <input [(ngModel)]=\"data.name\" type=\"text\" width=\"100%\" [readonly]=\"data.readonly\">\r\n    </div> -->\r\n  </div>\r\n  <div mat-dialog-actions style=\"float:right; margin-bottom:0px;padding-bottom:0px\">\r\n    <button mat-raised-button (click)=\"onNoClick()\">CANCEL</button>\r\n    <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>OK</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/editor/docproperty.dialog.html":
/*!************************************************!*\
  !*** ./src/app/editor/docproperty.dialog.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1 mat-dialog-title style=\"display:inline-block\" mat-dialog-draggable>Properties</h1>\r\n  <mat-icon (click)=\"onNoClick()\" style=\"float:right;margin-right:-10px;margin-top:-10px;cursor:pointer;color:gray;\">clear</mat-icon>\r\n  <div mat-dialog-content>\r\n    <div class=\"my-form-field\" style=\"display: inline-block;margin-bottom: 10px;\">\r\n      <span>Width</span>\r\n      <input numberOnly [(ngModel)]=\"data.width\" style=\"width: 100px\" type=\"text\">\r\n    </div>\r\n    <div class=\"my-form-field\" style=\"margin-bottom: 10px; float:right\">\r\n        <span>Height</span>\r\n        <input numberOnly [(ngModel)]=\"data.height\" style=\"width: 100px\" type=\"text\">\r\n    </div>    \r\n    <div style=\"display: block; margin-top: 10px;margin-bottom:10px\">\r\n      <span style=\"font-size:12px;color:darkgray\">Background</span>\r\n      <input style=\"width:100%;height:24px;border:1px solid rgba(0,0,0,0.2);margin-top: 4px;\" readonly [(colorPicker)]=\"data.bkcolor\"\r\n        class=\"color-stroke\" title=\"Change stroke color\" [style.background]=\"data.bkcolor\" [cpPresetColors]=\"defaultColor\"\r\n        [cpAlphaChannel]=\"'always'\" [cpPosition]=\"'top'\" [value]=\"data.bkcolor\" [cpCancelButton]=\"true\"\r\n        [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\" [cpOKButton]=\"true\"\r\n        [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" />\r\n    </div>\r\n  </div>\r\n  <div mat-dialog-actions style=\"float:right; margin-bottom:0px;padding-bottom:0px\">\r\n    <button mat-raised-button (click)=\"onNoClick()\">CANCEL</button>\r\n    <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>OK</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/editor/editor.component.css":
/*!*********************************************!*\
  !*** ./src/app/editor/editor.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#svg_editor_container {\r\n  /* position: absolute; */\r\n  /* bottom: 0px; */\r\n  /* left: 0px; */\r\n  /* right: 0px; */\r\n  /* display: block; */\r\n  background:#AAA;\r\n  height:100%; \r\n  width:100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0px;\r\n  left: 0px;\r\n}\r\n\r\n.svg-workarea-toolbar {\r\n  min-height: 46px;\r\n  height: 46px;\r\n}\r\n\r\n.svg-workarea-leftbar-p {\r\n  box-shadow: none !important;\r\n  background-color: rgba(33,33,33,1);\r\n}\r\n\r\n.svg-workarea-leftbar-h {\r\nmax-height: 26px;\r\ntext-align: center;\r\nvertical-align: middle;\r\npadding-left: 0px;\r\npadding-right: 0px;\r\nbackground-color: rgba(33,33,33,1);\r\ncolor: rgba(255,255,255,1);\r\n/* border-bottom: solid 1px rgba(0, 0, 0, 0.07); */\r\n}\r\n\r\n.svg-workarea-leftbar-h mat-icon {\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n}\r\n\r\n.svg-workarea-leftbar-h span {\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n  padding-top: 5px !important;\r\n  padding-left: 3px;\r\n  font-size: 11px;\r\n}\r\n\r\n/* .svg-workarea-leftbar-h:hover {\r\n} */\r\n\r\n.svg-workarea-leftbar-h:enabled .svg-workarea-leftbar-h::-moz-selection{\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n}\r\n\r\n.svg-workarea-leftbar-h:enabled .svg-workarea-leftbar-h::selection{\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n}\r\n\r\n/* .mat-expansion-panel-content {\r\n  background-color: rgb(53, 3, 3);\r\n} */\r\n\r\n.svg-workarea-flybar-h {\r\n  max-height: 26px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n  /* border-bottom: solid 1px rgba(0, 0, 0, 0.07); */\r\n }\r\n\r\n.svg-workarea-flybar-h mat-icon {\r\n     background-color: rgba(33,33,33,1);\r\n     color: rgba(255,255,255,1);\r\n }\r\n\r\n.svg-workarea-flybar-h span {\r\n     background-color: rgba(33,33,33,1);\r\n     color: rgba(255,255,255,1);\r\n     padding-top: 5px !important;\r\n     padding-left: 3px;\r\n     font-size: 11px;\r\n }\r\n\r\n/* .svg-workarea-flybar-h:hover {\r\n } */\r\n\r\n.svg-workarea-flybar-h:enabled .svg-workarea-flybar-h::-moz-selection{\r\n     background-color: rgba(33,33,33,1);\r\n     color: rgba(255,255,255,1);\r\n }\r\n\r\n.svg-workarea-flybar-h:enabled .svg-workarea-flybar-h::selection{\r\n     background-color: rgba(33,33,33,1);\r\n     color: rgba(255,255,255,1);\r\n }\r\n\r\n.svg-workarea-fly-p {\r\n  box-shadow: none !important;\r\n  background-color: rgba(33,33,33,1);\r\n  width: 200px;\r\n  padding-left: 0px;\r\n  padding-right: 0px;\r\n}\r\n\r\n.svg-property-split3:after {\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.svg-property-split3 div {\r\n  /* float: left; */\r\n  /* width: 49%; */\r\n  display: inline-block;\r\n}\r\n\r\n.svg-property-split2:after {\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.svg-property-split2 div {\r\n  /* float: left; */\r\n  /* width: 49%; */\r\n  display: inline-block;\r\n}\r\n\r\n.svg-property {\r\n  /* display: block; */\r\n  color: rgba(255,255,255,0.75);\r\n  /* position: relative; */\r\n  /* left: 5px; */\r\n  /* right: 5px; */\r\n  /* width: 100%; */\r\n}\r\n\r\n.svg-property span {\r\n  /* float: left; */\r\n  display: block;\r\n  font-size: 10px;\r\n  margin: 0px 5px 0px 10px;\r\n}\r\n\r\n.svg-property input {\r\n  /* float: right; */\r\n  /* position: relative; */\r\n  /* left: 0px; */\r\n  /* right: 0px; */\r\n  display: block;\r\n  margin: 0px 10px 12px 10px;\r\n  border: unset;\r\n  background-color: inherit;\r\n  color: inherit;\r\n  border-bottom: 1px solid rgba(255,255,255,0.75);\r\n}\r\n\r\n.svg-workarea-container {\r\n  /* position: relative; */\r\n  display: block;\r\n  height: 100%;\r\n  /* height: calc(100% - 46px);  */\r\n  /* bottom: 0px; */\r\n  /* top: 0px; */\r\n  /* left: 0px; */\r\n  /* right: 0px; */\r\n}\r\n\r\n.svg-tools-fly {\r\n  z-index: 9999;\r\n  position:absolute; \r\n  right:25px; \r\n  top:55px; \r\n  overflow-y: auto;\r\n  max-height: calc(100% - 75px); \r\n\r\n}\r\n\r\n.svg-tool-button {\r\n  vertical-align: middle;\r\n  display: inline-table;\r\n  /* display: inline-block; */\r\n  cursor: pointer;\r\n  height: 30px;\r\n  width: 30px;\r\n  border-radius: 50%;\r\n  margin: 2px 2px 2px 2px;\r\n  /* padding-top: 5px; */\r\n}\r\n\r\n.svg-tool-button span {\r\n  display: block;\r\n  margin: auto;\r\n  /* height: 30px; */\r\n  /* width: 30px; */\r\n}\r\n\r\n.svg-tool-button:hover {\r\n  background: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.svg-tool-active:active {\r\n  /* border: 1px solid #000000; */\r\n  background-color: rgba(48,89,175,1);        \r\n}\r\n\r\n.svg-tool-active {\r\n  /* border: 1px solid #000000; */\r\n  background-color: rgba(48,89,175,1);        \r\n}\r\n\r\n.leave-header-area {\r\n  margin-top: 36px;\r\n}\r\n\r\n.svg-sidenav {\r\n  min-width: 160px;\r\n  max-width: 200px;\r\n  background: rgba(33,33,33,1);\r\n}\r\n\r\n/* tool bar top */\r\n\r\n.tools_panel {\r\n  background-color: rgba(33,33,33,0.92);\r\n  color: rgba(255,255,255,1);\r\n}\r\n\r\n.main-btn {\r\n  height: 34px;\r\n  width: 34px;\r\n  min-width: unset !important;\r\n  padding:unset !important;\r\n  line-height: 34px;\r\n  margin-left: 5px;\r\n  margin-right: 5px;\r\n}\r\n\r\n.main-btn mat-icon {\r\n  font-size: 24px;\r\n  height: unset;\r\n  width: unset;\r\n}\r\n\r\n.main-btn .to-top {\r\n  background: url('/assets/images/to-top.svg') no-repeat center center;\r\n  background-size: contain;\r\n  display: inline-block;\r\n  height: 34px;\r\n  width: 34px;\r\n}\r\n\r\n.main-btn .to-bottom {\r\n  background: url('/assets/images/to-bottom.svg') no-repeat center center;\r\n  background-size: contain;\r\n  display: inline-block;\r\n  height: 34px;\r\n  width: 34px;\r\n}\r\n\r\n.main-btn .to-path {\r\n  background: url('/assets/images/to-path.svg') no-repeat center center;\r\n  background-size: contain;\r\n  display: inline-block;\r\n  height: 34px;\r\n  width: 34px;\r\n}\r\n\r\n.main-btn .group {\r\n  background: url('/assets/images/group.svg') no-repeat center center;\r\n  background-size: contain;\r\n  display: inline-block;\r\n  height: 34px;\r\n  width: 34px;\r\n}\r\n\r\n.main-btn .ungroup {\r\n  background: url('/assets/images/ungroup.svg') no-repeat center center;\r\n  background-size: contain;\r\n  display: inline-block;\r\n  height: 34px;\r\n  width: 34px;\r\n}\r\n\r\n.main-btn-sep {\r\n  width: 1px;\r\n  background: #888;\r\n  border-left: 1px outset #888;\r\n  margin: 5px 3px;\r\n  padding: 0;\r\n  height: 24px;\r\n}\r\n\r\n/* --------------- */\r\n\r\n/* left panel */\r\n\r\n/* --------------- */\r\n\r\n.view-panel {\r\n  max-height: 400px;\r\n  overflow: auto;\r\n}\r\n\r\n.leftbar-edit-btn {\r\n  margin-top: 2px;\r\n  font-size: 18px;\r\n  height: 18px;\r\n  width: 18px;\r\n  padding-right: 15px;\r\n}\r\n\r\n.leftbar-panel {\r\n  padding: 0px 0px 0px 0px;\r\n  font-size: 11px;\r\n  /* background-color: rgb(34, 107, 241); */\r\n  background-color: rgba(47,47,47,1);\r\n  /* overflow: auto; */\r\n}\r\n\r\n.leftbar-item {\r\n  /* padding-top: 6px; */\r\n  /* padding-bottom: 6px; */\r\n  /* width: 100%; */\r\n  padding: 3px 0px 1px 0px;\r\n  display: flow-root;\r\n  color: rgba(255,255,255,1);\r\n}\r\n\r\n.leftbar-item-active {\r\n  /* font-weight: 600; */\r\n  background-color: rgba(48,89,175,1);    \r\n}\r\n\r\n.leftbar-item span {\r\n  padding-left: 15px;    \r\n  float: left;\r\n}\r\n\r\n.leftbar-item mat-icon {\r\n  float: right;\r\n  font-size: 18px;\r\n  /* color: rgba(0, 0, 0, 0.4); */\r\n}\r\n\r\n::ng-deep .leftbar-item-menu {\r\n  background-color: rgba(47,47,47,1);\r\n}\r\n\r\n::ng-deep .svg-workarea-leftbar-p .mat-expansion-panel-body {\r\n  margin: 0px 0px 0px 0px !important;\r\n  padding: 0px 0px 0px 0px !important;\r\n  /* padding-left: 10px !important; */\r\n  flex-wrap: wrap !important;\r\n}\r\n\r\n::ng-deep .svg-workarea-fly-p .mat-expansion-panel-body {\r\n  margin: 0px 0px 0px 0px !important;\r\n  padding: 0px 0px 0px 0px !important;\r\n  /* padding-left: 10px !important; */\r\n  flex-wrap: wrap !important;\r\n  background-color: rgba(47,47,47,1);\r\n  \r\n}\r\n\r\n::ng-deep .mat-menu-item {\r\n  font-size: 11px;\r\n  color: rgba(255,255,255,1);\r\n  height: 30px !important;\r\n  line-height: unset !important;\r\n}\r\n\r\n.rightbar-panel {\r\n  /* padding: 0px 0px 0px 0px; */\r\n  /* font-size: 11px; */\r\n  /* background-color: rgb(34, 107, 241); */\r\n  background-color: rgba(47,47,47,1);\r\n  /* overflow: auto; */\r\n}\r\n\r\n.mat-expansion-panel-header-title span {\r\n  padding-top: 3px;\r\n}\r\n\r\n.mat-expansion-panel-spacing {\r\n  margin: 0px 0px 0px 0px !important;\r\n}\r\n\r\n.bottom-bar {\r\n  position: absolute;\r\n  left: 0px;\r\n  right: 0;\r\n  bottom: 0;\r\n  height: 30px;\r\n  overflow: visible;\r\n}\r\n\r\n.zoom-menu {\r\n  float: left;\r\n  padding-left: 5px;\r\n  width: 90px;  \r\n}\r\n\r\n.zoom-value {\r\n  background-color: inherit;\r\n  color: rgba(255,255,255,1);\r\n  border: unset;\r\n  display: inline-block;\r\n}\r\n\r\n.zoom-label {\r\n  display: inline-block;\r\n  height: 25px;\r\n}\r\n\r\n.zoom-value span {\r\n  display: inline-block;\r\n  /* position: absolute; */\r\n  /* top: 5px; */\r\n  /* left: 5px; */\r\n  /* height: 10px; */\r\n  /* width: 10px; */\r\n}\r\n\r\n.zoom-value .selection, button {\r\n  display: inline-block;\r\n  /* height: 10px; */\r\n  /* width: 10px; */\r\n  /* position: absolute; */\r\n  /* top: 3px; */\r\n  /* left: 55px; */\r\n}\r\n\r\n.zoom-value button {\r\n  /* width: unset; */\r\n  z-index: 9999;\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n  border: unset;\r\n}\r\n\r\n.zoom-value ul, li {\r\n  /* width: unset; */\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n  border: unset;\r\n}\r\n\r\n.zoom-value ul {\r\n  left: 0px;\r\n}\r\n\r\n.zoom-value li:hover {\r\n  background-color: rgb(22, 22, 22);\r\n  \r\n}\r\n\r\n.colors {\r\n  position: absolute;\r\n  left: 25px;\r\n  top: 0px;\r\n}\r\n\r\n.colors-palette {\r\n  position: absolute;\r\n  left: 850px;\r\n  top: 0px;\r\n}\r\n\r\n.color-fill {\r\n  position: relative;\r\n  top: 3px;\r\n  left: 10px;\r\n  cursor: pointer;\r\n  width: 14px;\r\n  height: 14px;\r\n  border: 1px solid  rgba(255,255,255,0.75);\r\n}\r\n\r\n.color-stroke {\r\n  position: absolute;\r\n  top: 3px;\r\n  left: 30px;\r\n  cursor: pointer;\r\n  width: 14px;\r\n  height: 14px;\r\n  border: 1px solid  rgba(255,255,255,0.75);\r\n}\r\n\r\n.style-stroke {\r\n  display: block !important;\r\n  margin: 0px 10px 12px 10px;\r\n  background-color: inherit;\r\n  color: inherit;\r\n}\r\n\r\n.style-stroke option {\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n}\r\n\r\n.font-family {\r\n  display: block;\r\n  margin: 0px 10px 12px 10px;\r\n  background-color: inherit;\r\n  color: inherit;\r\n}\r\n\r\n.font-family option {\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n}\r\n\r\n.text-align {\r\n  display: block;\r\n  margin: 0px 10px 12px 10px;\r\n  background-color: inherit;\r\n  color: inherit;\r\n}\r\n\r\n.text-align option {\r\n  background-color: rgba(33,33,33,1);\r\n  color: rgba(255,255,255,1);\r\n}\r\n\r\nselect#start_marker option[value=\"A\"] { background:url('/assets/images/select-pointer.svg');   }\r\n\r\nselect#start_marker option[value=\"B\"] { background:url('/assets/images/select-pointer.svg'); }\r\n\r\nselect#start_marker option[value=\"C\"] { background:url('/assets/images/select-pointer.svg'); }\r\n\r\nselect#start_marker option[value=\"D\"] { background:url('/assets/images/select-pointer.svg'); }\r\n\r\n.icon-select {\r\n  background: url('/assets/images/select-pointer.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-pencil {\r\n  background: url('/assets/images/pencil.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-line {\r\n  background: url('/assets/images/line.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-rect {\r\n  background: url('/assets/images/rect.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-circle {\r\n  background: url('/assets/images/circle.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-ellipse {\r\n  background: url('/assets/images/ellipse.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-path {\r\n  background: url('/assets/images/path.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-text {\r\n  background: url('/assets/images/text.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px; \r\n}\r\n\r\n.icon-image {\r\n  background: url('/assets/images/image.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-align-left {\r\n  background: url('/assets/images/align-left.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-align-center {\r\n  background: url('/assets/images/align-center.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-align-right {\r\n  background: url('/assets/images/align-right.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-align-top {\r\n  background: url('/assets/images/align-top.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-align-middle {\r\n  background: url('/assets/images/align-middle.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-align-bottom {\r\n  background: url('/assets/images/align-bottom.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-flip-orizontal {\r\n  background: url('/assets/images/flip-orizontal.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-flip-vertical {\r\n  background: url('/assets/images/flip-vertical.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-linejoin-miter {\r\n  background: url('/assets/images/linejoin-miter.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-linejoin-round {\r\n  background: url('/assets/images/linejoin-round.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-linejoin-bevel {\r\n  background: url('/assets/images/linejoin-bevel.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-linecap-butt {\r\n  background: url('/assets/images/linecap-butt.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-linecap-square {\r\n  background: url('/assets/images/linecap-square.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-linecap-round {\r\n  background: url('/assets/images/linecap-round.svg') no-repeat center center;\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.icon-tool {\r\n  background-size: contain;\r\n  height: 30px;\r\n  width: 30px;\r\n  color: rgba(255,255,255,1);\r\n}\r\n\r\n.icon-switch {\r\n  background: url('/assets/images/switch.svg') no-repeat center center;\r\n}\r\n\r\n.icon-compressor-void {\r\n  background: url('/assets/images/compressor-void.svg') no-repeat center center;\r\n}\r\n\r\n.icon-compressor-fan {\r\n  background: url('/assets/images/compressor-fan.svg') no-repeat center center;\r\n}\r\n\r\n.icon-compressor-piston {\r\n  background: url('/assets/images/compressor-piston.svg') no-repeat center center;\r\n}\r\n\r\n.icon-valve-ax {\r\n  background: url('/assets/images/valve-ax.svg') no-repeat center center;\r\n}\r\n\r\n.icon-valve-bx {\r\n  background: url('/assets/images/valve-bx.svg') no-repeat center center;\r\n}\r\n\r\n.icon-valve-cx {\r\n  background: url('/assets/images/valve-cx.svg') no-repeat center center;\r\n}\r\n\r\n.icon-value {\r\n  background: url('/assets/images/value.svg') no-repeat center center;\r\n}\r\n\r\n.icon-editvalue {\r\n  background: url('/assets/images/editvalue.svg') no-repeat center center;\r\n}\r\n\r\n.icon-selectvalue {\r\n  background: url('/assets/images/selectvalue.svg') no-repeat center center;\r\n}\r\n\r\n.icon-progress-v {\r\n  background: url('/assets/images/progress-v.svg') no-repeat center center;\r\n}\r\n\r\n.icon-semaphore {\r\n  background: url('/assets/images/semaphore.svg') no-repeat center center;\r\n}\r\n\r\n.icon-shape-diamond {\r\n  background: url('/assets/images/shape-diamond.svg') no-repeat center center;\r\n}\r\n\r\n.icon-shape-triangle {\r\n  background: url('/assets/images/shape-triangle.svg') no-repeat center center;\r\n}\r\n\r\n.icon-shape-halfcircle {\r\n  background: url('/assets/images/shape-halfcircle.svg') no-repeat center center;\r\n}\r\n\r\n.icon-shape-delay {\r\n  background: url('/assets/images/shape-delay.svg') no-repeat center center;\r\n}\r\n\r\n.icon-shape-looplimit {\r\n  background: url('/assets/images/shape-looplimit.svg') no-repeat center center;\r\n}\r\n\r\n.icon-shape-prepara {\r\n  background: url('/assets/images/shape-prepara.svg') no-repeat center center;\r\n}\r\n\r\n.icon-shape-trape {\r\n  background: url('/assets/images/shape-trape.svg') no-repeat center center;\r\n}\r\n\r\n.icon-shape-offpage {\r\n  background: url('/assets/images/shape-offpage.svg') no-repeat center center;\r\n}\r\n\r\n.icon-shape-ticket {\r\n  background: url('/assets/images/shape-ticket.svg') no-repeat center center;\r\n}\r\n\r\n.icon-shape-arrow {\r\n  background: url('/assets/images/shape-arrow.svg') no-repeat center center;\r\n}\r\n\r\n.icon-shape-doublearrow {\r\n  background: url('/assets/images/shape-doublearrow.svg') no-repeat center center;\r\n}\r\n\r\n.icon-shape-rectindi {\r\n  background: url('/assets/images/shape-rectindi.svg') no-repeat center center;\r\n}\r\n\r\n.icon-shape-circleindi {\r\n  background: url('/assets/images/shape-circleindi.svg') no-repeat center center;\r\n}\r\n\r\n.icon-button {\r\n  background: url('/assets/images/button.svg') no-repeat center center;\r\n}\r\n\r\n.icon-motor-simb {\r\n  background: url('/assets/images/motor-simb.svg') no-repeat center center;\r\n}\r\n\r\n.icon-exchanger-filter {\r\n  background: url('/assets/images/exchanger-filter.svg') no-repeat center center;\r\n}\r\n\r\n.icon-exchanger-heat {\r\n  background: url('/assets/images/exchanger-heat.svg') no-repeat center center;\r\n}\r\n\r\n.icon-exchanger-tube {\r\n  background: url('/assets/images/exchanger-tube.svg') no-repeat center center;\r\n}"

/***/ }),

/***/ "./src/app/editor/editor.component.html":
/*!**********************************************!*\
  !*** ./src/app/editor/editor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"svg_editor_container\">\r\n  <mat-drawer-container class=\"svg-workarea-container\">\r\n    <!-- LEFT BAR -->\r\n    <mat-drawer mode=\"side\" opened=\"true\" class=\"svg-sidenav leave-header-area\">\r\n      <mat-accordion multi=\"true\">\r\n        <mat-expansion-panel class=\"svg-workarea-leftbar-p\" (opened)=\"panelsState.panelA=true;savePanelState()\" (closed)=\"panelsState.panelA=false;savePanelState()\"\r\n          hideToggle=\"true\" [expanded]=\"panelsState.panelA\">\r\n          <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\r\n            <mat-panel-title>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"panelsState.panelA\">expand_less</mat-icon>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"!panelsState.panelA\">expand_more</mat-icon>\r\n              <span>View</span>  <!-- PROJECT FILES -->\r\n            </mat-panel-title>\r\n            <mat-icon aria-label=\"Set\" title=\"Layout settings\" *ngIf=\"panelsState.panelA\" class=\"leftbar-edit-btn\" (click)=\"onLayoutProperty();$event.stopPropagation()\">settings</mat-icon>\r\n            <mat-icon aria-label=\"Add\" title=\"Add View\" *ngIf=\"panelsState.panelA\" class=\"leftbar-edit-btn\" (click)=\"onAddView();$event.stopPropagation()\">add</mat-icon>\r\n          </mat-expansion-panel-header>\r\n          <div class=\"leftbar-panel view-panel\">\r\n            <div *ngIf=\"hmi.views && hmi.views.length <= 0\">\r\n              <br>\r\n            </div>\r\n            <div *ngFor=\"let item of hmi.views; let i = index\" (click)=\"onSelectView(item)\" [ngClass]=\"{'leftbar-item-active': isViewActive(item)}\"\r\n              class=\"leftbar-item mycursor-pointer\">\r\n              <span>{{item.name}}</span>\r\n              <mat-icon aria-label=\"More\" [matMenuTriggerFor]=\"menuview\" class=\"\">more_vert</mat-icon>\r\n              <mat-menu #menuview=\"matMenu\" class=\"leftbar-item-menu\">\r\n                <button mat-menu-item (click)=\"onDeleteView(item)\">Delete</button>\r\n                <button mat-menu-item (click)=\"onRenameView(item)\">Rename</button>\r\n                <button mat-menu-item (click)=\"onPropertyView(item)\">Property</button>\r\n              </mat-menu>\r\n            </div>\r\n          </div>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel class=\"svg-workarea-leftbar-p\" (opened)=\"panelsState.panelB=true;savePanelState()\" (closed)=\"panelsState.panelB=false;savePanelState()\"\r\n          hideToggle=\"true\" [expanded]=\"panelsState.panelB\">\r\n          <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\r\n            <mat-panel-title>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"panelsState.panelB\">expand_less</mat-icon>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"!panelsState.panelB\">expand_more</mat-icon>\r\n              <span>General</span>  <!-- GENERAL -->\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          \r\n          <div id=\"__tools_left\" class=\"leftbar-panel\">\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('select')}\" (click)=\"setMode('select')\">\r\n              <span class=\"icon-select\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('fhpath')}\" (click)=\"setMode('fhpath')\">\r\n              <span class=\"icon-pencil\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('line')}\" (click)=\"setMode('line')\">\r\n              <span class=\"icon-line\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('rect')}\" (click)=\"setMode('rect')\">\r\n              <span class=\"icon-rect\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('circle')}\" (click)=\"setMode('circle')\">\r\n              <span class=\"icon-circle\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('ellipse')}\" (click)=\"setMode('ellipse')\">\r\n              <span class=\"icon-ellipse\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('path')}\" (click)=\"setMode('path')\">\r\n              <span class=\"icon-path\"></span>\r\n            </div>            \r\n            <!-- <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('path')}\" (click)=\"setMode('path')\">\r\n              <span class=\"icon-path\"></span>\r\n            </div> -->\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('text')}\" (click)=\"setMode('text')\">\r\n              <span class=\"icon-text\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': (isModeActive('image') || isModeActive('svg-image'))}\" (click)=\"imagefile.value = '';imagefile.click();\">\r\n              <span class=\"icon-image\"></span>\r\n              <input #imagefile type=\"file\" style=\"display: none;\" (change)=\"onSetImage($event)\" accept=\"image/png|jpg|svg\"/>\r\n            </div>\r\n            <div id=\"tool_line\" style=\"display: none;\">\r\n              <span class=\"icon-image\"></span>\r\n            </div>\r\n          </div>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel class=\"svg-workarea-leftbar-p\" (opened)=\"panelsState.panelS=true;savePanelState()\" (closed)=\"panelsState.panelS=false;savePanelState()\"\r\n          hideToggle=\"true\" [expanded]=\"panelsState.panelS\">\r\n          <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\r\n            <mat-panel-title>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"panelsState.panelS\">expand_less</mat-icon>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"!panelsState.panelS\">expand_more</mat-icon>\r\n              <span>Shape</span>  <!-- SHAPE -->\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <div id=\"__tools_left\" class=\"leftbar-panel\">\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('shape-diamond')}\" (click)=\"setMode('shape-diamond')\">\r\n              <span class=\"icon-tool icon-shape-diamond\"> </span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('shape-triangle')}\" (click)=\"setMode('shape-triangle')\">\r\n              <span class=\"icon-tool icon-shape-triangle\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('shape-halfcircle')}\" (click)=\"setMode('shape-halfcircle')\">\r\n              <span class=\"icon-tool icon-shape-halfcircle\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('shape-delay')}\" (click)=\"setMode('shape-delay')\">\r\n              <span class=\"icon-tool icon-shape-delay\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('shape-looplimit')}\" (click)=\"setMode('shape-looplimit')\">\r\n              <span class=\"icon-tool icon-shape-looplimit\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('shape-prepara')}\" (click)=\"setMode('shape-prepara')\">\r\n              <span class=\"icon-tool icon-shape-prepara\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('shape-trape')}\" (click)=\"setMode('shape-trape')\">\r\n              <span class=\"icon-tool icon-shape-trape\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('shape-offpage')}\" (click)=\"setMode('shape-offpage')\">\r\n              <span class=\"icon-tool icon-shape-offpage\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('shape-ticket')}\" (click)=\"setMode('shape-ticket')\">\r\n              <span class=\"icon-tool icon-shape-ticket\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('shape-arrow')}\" (click)=\"setMode('shape-arrow')\">\r\n              <span class=\"icon-tool icon-shape-arrow\"></span>\r\n            </div> \r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('shape-doublearrow')}\" (click)=\"setMode('shape-doublearrow')\">\r\n              <span class=\"icon-tool icon-shape-doublearrow\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('shape-rectindi')}\" (click)=\"setMode('shape-rectindi')\">\r\n              <span class=\"icon-tool icon-shape-rectindi\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('shape-circleindi')}\" (click)=\"setMode('shape-circleindi')\">\r\n              <span class=\"icon-tool icon-shape-circleindi\"></span>\r\n            </div>           \r\n          </div>\r\n        </mat-expansion-panel>        \r\n        <mat-expansion-panel class=\"svg-workarea-leftbar-p\" (opened)=\"panelsState.panelC=true;savePanelState()\" (closed)=\"panelsState.panelC=false;savePanelState()\"\r\n          hideToggle=\"true\" [expanded]=\"panelsState.panelC\">\r\n          <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\r\n            <mat-panel-title>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"panelsState.panelC\">expand_less</mat-icon>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"!panelsState.panelC\">expand_more</mat-icon>\r\n              <span>Proc. Eng.</span>  <!-- PROCESS  -->\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <div id=\"__tools_left\" class=\"leftbar-panel\">\r\n            <!-- <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('switch')}\" (click)=\"setMode('switch')\">\r\n              <span class=\"icon-tool icon-switch\"></span>\r\n            </div> -->\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('compressor-void')}\" (click)=\"setMode('compressor-void')\">\r\n              <span class=\"icon-tool icon-compressor-void\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('compressor-fan')}\" (click)=\"setMode('compressor-fan')\">\r\n              <span class=\"icon-tool icon-compressor-fan\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('compressor-piston')}\" (click)=\"setMode('compressor-piston')\">\r\n              <span class=\"icon-tool icon-compressor-piston\"></span>\r\n            </div>                        \r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('valve-ax')}\" (click)=\"setMode('valve-ax')\">\r\n              <span class=\"icon-tool icon-valve-ax\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('valve-bx')}\" (click)=\"setMode('valve-bx')\">\r\n              <span class=\"icon-tool icon-valve-bx\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('valve-cx')}\" (click)=\"setMode('valve-cx')\">\r\n              <span class=\"icon-tool icon-valve-cx\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('motor-simb')}\" (click)=\"setMode('motor-simb')\">\r\n              <span class=\"icon-tool icon-motor-simb\"></span>\r\n            </div>         \r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('exchanger-filter')}\" (click)=\"setMode('exchanger-filter')\">\r\n              <span class=\"icon-tool icon-exchanger-filter\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('exchanger-heat')}\" (click)=\"setMode('exchanger-heat')\">\r\n              <span class=\"icon-tool icon-exchanger-heat\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('exchanger-tube')}\" (click)=\"setMode('exchanger-tube')\">\r\n              <span class=\"icon-tool icon-exchanger-tube\"></span>\r\n            </div>                       \r\n          </div>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel class=\"svg-workarea-leftbar-p\" (opened)=\"panelsState.panelD=true;savePanelState()\" (closed)=\"panelsState.panelD=false;savePanelState()\"\r\n          hideToggle=\"true\" [expanded]=\"panelsState.panelD\">\r\n          <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\r\n            <mat-panel-title>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"panelsState.panelD\">expand_less</mat-icon>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"!panelsState.panelD\">expand_more</mat-icon>\r\n              <span>Controls</span>  <!-- CONTROLLS  -->\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <div id=\"__tools_left\" class=\"leftbar-panel\">\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('html_input')}\" (click)=\"setMode('html_input')\">\r\n              <span class=\"icon-tool icon-editvalue\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('value')}\" (click)=\"setMode('value')\">\r\n              <span class=\"icon-tool icon-value\"></span>\r\n            </div>            \r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('html_button')}\" (click)=\"setMode('html_button')\">\r\n              <span class=\"icon-tool icon-button\"></span>\r\n            </div>            \r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('html_select')}\" (click)=\"setMode('html_select')\">\r\n              <span class=\"icon-tool icon-selectvalue\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('gauge_progress')}\" (click)=\"setMode('gauge_progress')\">\r\n              <span class=\"icon-tool icon-progress-v\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" [ngClass]=\"{'svg-tool-active': isModeActive('gauge_semaphore')}\" (click)=\"setMode('gauge_semaphore')\">\r\n              <span class=\"icon-tool icon-semaphore\"></span>\r\n            </div>              \r\n          </div>\r\n        </mat-expansion-panel>        \r\n      </mat-accordion>\r\n    </mat-drawer>\r\n    <!-- END LEFT BAR -->\r\n    <!-- WORK AREA -->\r\n    <mat-drawer-content>\r\n      <!-- RIGHT BAR -->\r\n      <div class=\"svg-tools-fly\">\r\n        <mat-expansion-panel class=\"svg-workarea-fly-p\" (opened)=\"panelPropertyIdOpenState = true\" (closed)=\"panelPropertyIdOpenState = false\"\r\n          hideToggle=\"true\" expanded=\"true\" style=\"display:none\">\r\n          <mat-expansion-panel-header class=\"svg-workarea-flybar-h\">\r\n            <mat-panel-title>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"panelPropertyIdOpenState\">expand_less</mat-icon>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"!panelPropertyIdOpenState\">expand_more</mat-icon>\r\n              <span>Interactivity</span>  <!-- INTERACTIVITY -->\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <div id=\"_selected_panel\">\r\n            <div class=\"_toolset\">\r\n              <label id=\"idLabel\" title=\"Identify the element\" class=\"svg-property\">\r\n                <span>id:</span>\r\n                <input id=\"elem_id\" #selid class=\"attr_changer\" data-attr=\"id\" type=\"text\" />\r\n              </label>\r\n              <label id=\"classLabel\" title=\"Element class\" class=\"svg-property\">\r\n                <span>class:</span>\r\n                <input id=\"elem_class\" class=\"attr_changer\" data-attr=\"class\" type=\"text\" />\r\n              </label>\r\n            </div>\r\n          </div>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel class=\"svg-workarea-fly-p\" (opened)=\"panelPropertyTransformOpenState = true\" (closed)=\"panelPropertyTransformOpenState = false\"\r\n          hideToggle=\"true\" expanded=\"true\">\r\n          <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\r\n            <mat-panel-title>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"panelPropertyTransformOpenState\">expand_less</mat-icon>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"!panelPropertyTransformOpenState\">expand_more</mat-icon>\r\n              <span>Transform</span>  <!-- TRANSFORM SIZE/POSITION-->\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <div id=\"_selected_panel\" class=\"rightbar-panel\">\r\n            <div class=\"_toolset\">\r\n              <div id=\"xy_panel\" class=\"_toolset\">\r\n                <div class=\"svg-property-split2\">\r\n                  <div class=\"svg-property\">\r\n                    <span>x</span>\r\n                    <input id=\"selected_x\" class=\"attr_changer\" title=\"Change X coordinate\" size=\"4\"  data-attr=\"x\" />\r\n                  </div>\r\n                  <div class=\"svg-property\">\r\n                    <span>y</span>\r\n                    <input id=\"selected_y\" class=\"attr_changer\" title=\"Change Y coordinate\" size=\"3\" data-attr=\"y\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div id=\"line_panel\">\r\n                <div class=\"svg-property-split2\">\r\n                  <div class=\"svg-property\">\r\n                    <span>x1</span>\r\n                    <input id=\"line_x1\" class=\"attr_changer\" title=\"Change line's starting x coordinate\" size=\"3\" data-attr=\"x1\" />\r\n                  </div>\r\n                  <div class=\"svg-property\">\r\n                    <span>y1</span>\r\n                    <input id=\"line_y1\" class=\"attr_changer\" title=\"Change line's starting y coordinate\" size=\"3\" data-attr=\"y1\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"svg-property-split2\">\r\n                  <div class=\"svg-property\">\r\n                    <span>x2</span>\r\n                    <input id=\"line_x2\" class=\"attr_changer\" title=\"Change line's starting x coordinate\" size=\"3\" data-attr=\"x2\" />\r\n                  </div>\r\n                  <div class=\"svg-property\">\r\n                    <span>y2</span>\r\n                    <input id=\"line_y2\" class=\"attr_changer\" title=\"Change line's starting y coordinate\" size=\"3\" data-attr=\"y2\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div id=\"rect_panel\">\r\n                <div class=\"svg-property-split2\">\r\n                  <div class=\"svg-property\" title=\"Change rectangle width\">\r\n                    <span>width</span>\r\n                    <input id=\"rect_width\" class=\"attr_changer\" size=\"3\" data-attr=\"width\" />\r\n                  </div>\r\n                  <div class=\"svg-property\" title=\"Change rectangle height\">\r\n                    <span>height</span>\r\n                    <input id=\"rect_height\" class=\"attr_changer\" size=\"3\" data-attr=\"height\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"svg-property-split2\">\r\n                  <div class=\"svg-property\" title=\"Change Rectangle Corner Radius\">\r\n                    <span>radius corner</span>\r\n                    <input id=\"rect_rx\" size=\"3\" value=\"0\" type=\"text\" data-attr=\"Corner Radius\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div id=\"htmlctrl_panel\">\r\n                <div class=\"svg-property-split2\">\r\n                  <div class=\"svg-property\" title=\"Change rectangle width\">\r\n                    <span>width</span>\r\n                    <input id=\"htmlctrl_width\" class=\"attr_changer\" size=\"3\" data-attr=\"width\" />\r\n                  </div>\r\n                  <div class=\"svg-property\" title=\"Change rectangle height\">\r\n                    <span>height</span>\r\n                    <input id=\"htmlctrl_height\" class=\"attr_changer\" size=\"3\" data-attr=\"height\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div id=\"shape_panel\">\r\n                <div class=\"svg-property-split2\">\r\n                  <div class=\"svg-property\" title=\"Change rectangle width\">\r\n                    <span>width</span>\r\n                    <input id=\"shape_width\" class=\"attr_changer\" size=\"3\" data-attr=\"width\" />\r\n                  </div>\r\n                  <div class=\"svg-property\" title=\"Change rectangle height\">\r\n                    <span>height</span>\r\n                    <input id=\"shape_height\" class=\"attr_changer\" size=\"3\" data-attr=\"height\" />\r\n                  </div>\r\n                </div>\r\n              </div>                          \r\n              <div id=\"circle_panel\">\r\n                <div class=\"svg-property-split2\">\r\n                  <div class=\"svg-property\">\r\n                    <span>cx</span>\r\n                    <input id=\"circle_cx\" class=\"attr_changer\" title=\"Change circle's cx coordinate\" size=\"3\" data-attr=\"cx\" />\r\n                  </div>\r\n                  <div class=\"svg-property\">\r\n                    <span>cy</span>\r\n                    <input id=\"circle_cy\" class=\"attr_changer\" title=\"Change circle's cy coordinate\" size=\"3\" data-attr=\"cy\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"svg-property-split2\">\r\n                  <div class=\"svg-property\">\r\n                    <span>r</span>\r\n                    <input id=\"circle_r\" class=\"attr_changer\" title=\"Change circle's radius\" size=\"3\" data-attr=\"r\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div id=\"ellipse_panel\">\r\n                <div class=\"svg-property-split2\">\r\n                  <div class=\"svg-property\">\r\n                    <span>cx</span>\r\n                    <input id=\"ellipse_cx\" class=\"attr_changer\" title=\"Change ellipse's cx coordinate\" size=\"3\" data-attr=\"cx\" />\r\n                  </div>\r\n                  <div class=\"svg-property\">\r\n                    <span>cy</span>\r\n                    <input id=\"ellipse_cy\" class=\"attr_changer\" title=\"Change ellipse's cy coordinate\" size=\"3\" data-attr=\"cy\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"svg-property-split2\">\r\n                  <div class=\"svg-property\">\r\n                    <span>rx</span>\r\n                    <input id=\"ellipse_rx\" class=\"attr_changer\" title=\"Change ellipse's x radius\" size=\"3\" data-attr=\"rx\" />\r\n                  </div>\r\n                  <div class=\"svg-property\">\r\n                    <span>ry</span>\r\n                    <input id=\"ellipse_ry\" class=\"attr_changer\" title=\"Change ellipse's y radius\" size=\"3\" data-attr=\"ry\" />\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div id=\"text_panel\">\r\n                <div class=\"svg-property\">\r\n                  <span>font family</span>\r\n                  <select class=\"font-family\" id=\"font_family\" #fontfamily (change)=\"onFontFamilyChange(fontfamily.value)\">\r\n                    <option style=\"font-family:serif\">Serif</option>\r\n                    <option style=\"font-family:sans-serif\">Sans-serif</option>\r\n                    <option style=\"font-family:cursive\">Cursive</option>\r\n                    <option style=\"font-family:fantasy\">Fantasy</option>\r\n                    <option style=\"font-family:monospace\">Monospace</option>\r\n                  </select>\r\n                </div>\r\n\r\n                <div class=\"svg-property-split2\">\r\n                  <div class=\"svg-property\">\r\n                    <span>font size</span>\r\n                    <input id=\"font_size\" size=\"3\" value=\"0\" class=\"attr_changer\" title=\"Change Font Size\" />\r\n                  </div>\r\n                  <div class=\"svg-property\">\r\n                    <span>text align</span>\r\n                    <select class=\"text-align\" id=\"text_anchor\" #textalign (change)=\"onTextAlignChange(textalign.value)\">\r\n                      <option value=\"start\">left</option>\r\n                      <option value=\"middle\">center</option>\r\n                      <option value=\"end\">right</option>\r\n                    </select>\r\n                    <!-- <div class=\"tool_button\" id=\"tool_bold\" title=\"Bold Text [B]\">\r\n                      <span>B</span>\r\n                    </div> -->\r\n                  </div>\r\n                  <!-- <div class=\"svg-property\">\r\n                    <div class=\"tool_button\" id=\"tool_italic\" title=\"Italic Text [I]\">\r\n                      <span>i</span>\r\n                    </div>\r\n                  </div> -->\r\n                </div>\r\n\r\n                <!-- Not visible, but still used -->\r\n                <input id=\"text\" type=\"text\" size=\"35\" />\r\n              </div>\r\n              <div id=\"image_panel\">\r\n                <div class=\"svg-property-split2\">\r\n                  <div class=\"svg-property\">\r\n                    <span>width</span>\r\n                    <input id=\"image_width\" class=\"attr_changer\" title=\"Change image width\" size=\"3\" data-attr=\"width\" />\r\n                  </div>\r\n                  <div class=\"svg-property\">\r\n                    <span>height</span>\r\n                    <input id=\"image_height\" class=\"attr_changer\" title=\"Change image height\" size=\"3\" data-attr=\"height\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"svg-property\" style=\"display: none;\">\r\n                  <div class=\"svg-property\">\r\n                    <span>url</span>\r\n                    <input id=\"image_url\" class=\"attr_changer\" type=\"text\" title=\"Change URL\" />\r\n                  </div>\r\n                  <div class=\"svg-property\">\r\n                    <div class=\"svg-property\">\r\n                      <button id=\"change_image_url\" style=\"display:none;\">Change Image</button>\r\n                      <span id=\"url_notice\" title=\"NOTE: This image cannot be embedded. It will depend on this path to be displayed\"></span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- <div id=\"hw_panel\">\r\n                <div class=\"svg-property-split2\">\r\n                  <div class=\"svg-property\" title=\"Change rectangle width\">\r\n                    <span>width</span>\r\n                    <input id=\"rect_width\" class=\"attr_changer\" size=\"3\" data-attr=\"width\" />\r\n                  </div>\r\n                  <div class=\"svg-property\" title=\"Change rectangle height\">\r\n                    <span>height</span>\r\n                    <input id=\"rect_height\" class=\"attr_changer\" size=\"3\" data-attr=\"height\" />\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n              <div id=\"tool_angle\" title=\"Change rotation angle\" class=\"svg-property\">\r\n                <div class=\"svg-property-split2\">\r\n                  <div class=\"svg-property\">\r\n                    <span>angle:</span>\r\n                    <input id=\"angle\" size=\"2\" value=\"0\" type=\"text\" />\r\n                  </div>\r\n                  <div class=\"svg-property\">\r\n                    <!-- <div class=\"svg-tool-button\" (click)=\"flipSelected('vertical')\" title=\"Flip vertically\">\r\n                      <span class=\"icon-flip-vertical\"></span>\r\n                    </div>\r\n                    <div class=\"svg-tool-button\" (click)=\"flipSelected('orizontal')\" title=\"Flip orizontally\">\r\n                      <span class=\"icon-flip-orizontal\"></span>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel class=\"svg-workarea-fly-p\" (opened)=\"panelAlignOpenState = true\" (closed)=\"panelAlignOpenState = false\"\r\n          hideToggle=\"true\" expanded=\"true\">\r\n          <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\r\n            <mat-panel-title>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"panelAlignOpenState\">expand_less</mat-icon>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"!panelAlignOpenState\">expand_more</mat-icon>\r\n              <span>Align</span>  <!-- ALIGN-->\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <div id=\"align_panel\" class=\"rightbar_panel\">\r\n            <div class=\"svg-tool-button\" (click)=\"onAlignSelected('left')\" title=\"Align Left\">\r\n              <span class=\"icon-align-left\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" (click)=\"onAlignSelected('center')\" title=\"Align Center\">\r\n              <span class=\"icon-align-center\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" (click)=\"onAlignSelected('right')\" title=\"Align Right\">\r\n              <span class=\"icon-align-right\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" (click)=\"onAlignSelected('top')\" title=\"Align Top\">\r\n              <span class=\"icon-align-top\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" (click)=\"onAlignSelected('middle')\" title=\"Align Middle\">\r\n              <span class=\"icon-align-middle\"></span>\r\n            </div>\r\n            <div class=\"svg-tool-button\" (click)=\"onAlignSelected('bottom')\" title=\"Align Bottom\">\r\n              <span class=\"icon-align-bottom\"></span>\r\n            </div>\r\n          </div>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel class=\"svg-workarea-fly-p\" (opened)=\"panelFillOpenState = true\" (closed)=\"panelFillOpenState = false\"\r\n          hideToggle=\"true\" expanded=\"true\">\r\n          <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\r\n            <mat-panel-title>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"panelFillOpenState\">expand_less</mat-icon>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"!panelFillOpenState\">expand_more</mat-icon>\r\n              <span>Stroke</span> <!-- STROKE-->\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <div class=\"rightbar_panel\">\r\n            <div class=\"_color_tool\" id=\"tool_stroke\">\r\n              <div class=\"svg-property-split2\">\r\n                <div class=\"svg-property\">\r\n                  <span>stroke width</span>\r\n                  <input id=\"stroke_width\" title=\"Change stroke width by 1, shift-click to change by 0.1\" size=\"2\" value=\"1\" type=\"text\" data-attr=\"Stroke Width\"\r\n                  />\r\n                </div>\r\n                <div class=\"svg-property\">\r\n                  <span>stroke style</span>\r\n                  <select id=\"stroke_style\" class=\"style-stroke\" title=\"Change stroke dash style\">\r\n                    <option selected=\"selected\" value=\"none\">&#8212;</option>\r\n                    <option value=\"2,2\">...</option>\r\n                    <option value=\"5,5\">- -</option>\r\n                    <option value=\"5,2,2,2\">- .</option>\r\n                    <option value=\"5,2,2,2,2,2\">- ..</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"svg-property\">\r\n                <div class=\"svg-tool-button\" id=\"linejoin_miter\" #linejoinmiter (click)=\"onSetStrokeOption(linejoinmiter)\" title=\"Linejoin Miter\">\r\n                  <span class=\"icon-linejoin-miter\"></span>\r\n                </div>\r\n                <div class=\"svg-tool-button\" id=\"linejoin_round\" #linejoinround (click)=\"onSetStrokeOption(linejoinround)\" title=\"Linejoin Round\">\r\n                  <span class=\"icon-linejoin-round\"></span>\r\n                </div>\r\n                <div class=\"svg-tool-button\" id=\"linejoin_bevel\" #linejoinbevel (click)=\"onSetStrokeOption(linejoinbevel)\" title=\"Linejoin Bevel\">\r\n                  <span class=\"icon-linejoin-bevel\"></span>\r\n                </div>\r\n              </div>\r\n              <div class=\"svg-property\">\r\n                <div class=\"svg-tool-button\" id=\"linecap_butt\" #linecapbutt (click)=\"onSetStrokeOption(linecapbutt)\" title=\"Linecap Butt\">\r\n                  <span class=\"icon-linecap-butt\"></span>\r\n                </div>\r\n                <div class=\"svg-tool-button\" id=\"linecap_square\" #linecapsquare (click)=\"onSetStrokeOption(linecapsquare)\" title=\"Linecap Square\">\r\n                  <span class=\"icon-linecap-square\"></span>\r\n                </div>\r\n                <div class=\"svg-tool-button\" id=\"linecap_round\" #linecapround (click)=\"onSetStrokeOption(linecapround)\" title=\"Linecap Round\">\r\n                  <span class=\"icon-linecap-round\"></span>\r\n                </div>\r\n              </div>\r\n              <div class=\"svg-property-split2\" style=\"display: none\">\r\n                <div class=\"svg-property\">\r\n                  <span for=\"class_shadow\">shadow</span>\r\n                  <input type=\"checkbox\" id=\"class_shadow\" name=\"class_shadow\" class=\"attr_changer\" title=\"With shadow\" (change)=\"onSetShadowOption($event.target.checked)\" label=\"shadow\"/>\r\n                </div>\r\n                <div class=\"svg-property\">\r\n                </div>\r\n              </div>\r\n              <!-- <ul id=\"linejoin_opts\">\r\n                <li class=\"tool_button current\" id=\"linejoin_miter\" title=\"Linejoin: Miter\"></li>\r\n                <li class=\"tool_button\" id=\"linejoin_round\" title=\"Linejoin: Round\"></li>\r\n                <li class=\"tool_button\" id=\"linejoin_bevel\" title=\"Linejoin: Bevel\"></li>\r\n              </ul>\r\n\r\n              <ul id=\"linecap_opts\">\r\n                <li class=\"tool_button current\" id=\"linecap_butt\" title=\"Linecap: Butt\"></li>\r\n                <li class=\"tool_button\" id=\"linecap_square\" title=\"Linecap: Square\"></li>\r\n                <li class=\"tool_button\" id=\"linecap_round\" title=\"Linecap: Round\"></li>\r\n              </ul> -->\r\n            </div>\r\n          </div>\r\n        </mat-expansion-panel>\r\n        <mat-expansion-panel class=\"svg-workarea-fly-p\" (opened)=\"panelMarkerOpenState = true\" (closed)=\"panelMarkerOpenState = false\"\r\n          hideToggle=\"true\" expanded=\"true\">\r\n          <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\r\n            <mat-panel-title>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"panelMarkerOpenState\">expand_less</mat-icon>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"!panelMarkerOpenState\">expand_more</mat-icon>\r\n              <span>Marker</span> <!-- MARKER-->\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <div id=\"marker_panel\" class=\"rightbar_panel\">\r\n            <div class=\"svg-property-split3\">\r\n              <div class=\"svg-property\">\r\n                <span>start</span>\r\n                <select id=\"start_marker\" #smarker class=\"style-stroke\" title=\"Select start marker type\" (click)=\"onSetMarker('start_marker', smarker.selectedIndex);\" onfocus=\"this.selectedIndex=-1;this.blur();\">\r\n                </select>\r\n              </div>\r\n              <div class=\"svg-property\">\r\n                <span>middle</span>\r\n                <select id=\"mid_marker\" #mmarker class=\"style-stroke\" title=\"Select mid marker type\" (click)=\"onSetMarker('mid_marker', mmarker.selectedIndex);\" onfocus=\"this.selectedIndex=-1;this.blur();\">\r\n                </select>\r\n              </div>\r\n              <div class=\"svg-property\">\r\n                <span>end</span>\r\n                <select id=\"end_marker\" #emarker class=\"style-stroke\" title=\"Select end marker type\" (click)=\"onSetMarker('end_marker', emarker.selectedIndex);\" onfocus=\"this.selectedIndex=-1;this.blur();\">\r\n                </select>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </mat-expansion-panel>        \r\n        <mat-expansion-panel class=\"svg-workarea-fly-p\" (opened)=\"panelEventOpenState = true\" (closed)=\"panelEventOpenState = false\"\r\n          hideToggle=\"true\" expanded=\"true\">\r\n          <mat-expansion-panel-header class=\"svg-workarea-leftbar-h\">\r\n            <mat-panel-title>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"panelEventOpenState\">expand_less</mat-icon>\r\n              <mat-icon aria-label=\"Select\" *ngIf=\"!panelEventOpenState\">expand_more</mat-icon>\r\n              <span>Interactivity</span>  <!-- INTERACTIVITY -->\r\n            </mat-panel-title>\r\n            <!-- <mat-icon aria-label=\"Add\" class=\"leftbar-edit-btn\" (click)=\"addEvent();$event.stopPropagation()\" *ngif=\"selectedElement\">add</mat-icon> -->\r\n          </mat-expansion-panel-header>\r\n          <div id=\"interaction_panel\" class=\"rightbar_panel\">\r\n            <gauge-base #gaugepanel *ngIf=\"selectedElement\" [settings]=getGaugeSettings(selectedElement) \r\n            (edit)=\"onGaugeEdit($event)\"></gauge-base>\r\n            <!-- (edit)=\"onGaugeEdit($event)\" [withEvents]=\"isWithEvents(selectedElement)\"></gauge-base> -->\r\n          </div>\r\n        </mat-expansion-panel>\r\n      </div>\r\n      <!-- END RIGHT BAR -->\r\n      <!-- Work Area -->\r\n      <div id=\"svg_editor\" style=\"z-index:-1\">\r\n        <!-- Rules bar -->\r\n        <div id=\"rulers\">\r\n          <div id=\"ruler_corner\"></div>\r\n          <div id=\"ruler_x\">\r\n            <div>\r\n              <canvas height=\"15\"></canvas>\r\n            </div>\r\n          </div>\r\n          <div id=\"ruler_y\">\r\n            <div>\r\n              <canvas width=\"15\"></canvas>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- END Rules bar -->\r\n        <!-- Draw Area -->\r\n        <div id=\"workarea\">\r\n          <style id=\"styleoverrides\" type=\"text/css\" media=\"screen\" scoped=\"scoped\"></style>\r\n          <div id=\"svgcanvas\" style=\"position:relative\">\r\n          </div>\r\n        </div>\r\n        <!-- END Draw Area -->\r\n        <!-- Draw top tool bar -->\r\n        <div id=\"tools_top\" class=\"tools_panel\">\r\n          <div id=\"editor_panel\">\r\n            <!-- <button mat-button title=\"Save Project\" [matMenuTriggerFor]=\"prjview\" class=\"main-btn\">\r\n              <mat-icon aria-label=\"Save Project\">save</mat-icon>\r\n            </button> -->\r\n            <!-- <mat-menu #prjview=\"matMenu\" class=\"leftbar-item-menu\" yPosition=\"below\" [overlapTrigger]=\"false\"> -->\r\n              <!-- <button mat-menu-item (click)=\"onSaveProject()\">Save</button> -->\r\n              <!-- <button mat-menu-item (click)=\"onSaveProjectAs()\">Save as...</button> -->\r\n              <!-- <button mat-menu-item (click)=\"onOpenProject();$event.stopPropagation()\">Open Project</button> -->\r\n              <!-- <button mat-menu-item (click)=\"onImportVariable();$event.stopPropagation()\">Import Variable</button> -->\r\n              <!-- <input type=\"file\" #fileImportInput style=\"display: none\" id=\"projectFileUpload\" (change)=\"onFileChangeListener($event)\" accept=\".wvc\"/> -->\r\n            <!-- </mat-menu> -->\r\n            <div class=\"main-btn-sep\"></div>\r\n            <button mat-button title=\"Launch Current View\" class=\"main-btn\" (click)=\"onStartCurrent()\">\r\n              <mat-icon aria-label=\"Launch Current View\">play_arrow</mat-icon>\r\n            </button>            \r\n            <div class=\"main-btn-sep\"></div>\r\n            <button mat-button title=\"Zoom Tool [Ctrl+Up/Down]\" class=\"main-btn\" (click)=\"onZoomSelect()\">\r\n              <mat-icon aria-label=\"Zoom Tool [Ctrl+Up/Down]\">zoom_in</mat-icon>\r\n            </button>\r\n            <button mat-button title=\"Show Hide Grid\" class=\"main-btn\" (click)=\"onShowGrid()\">\r\n              <mat-icon aria-label=\"Show Hide Grid\" *ngIf=\"!gridOn\">grid_on</mat-icon>\r\n              <mat-icon aria-label=\"Show Hide Grid\" *ngIf=\"gridOn\">grid_off</mat-icon>\r\n            </button>\r\n            <div id=\"history_panel\">\r\n              <button mat-button id=\"tool_undo\" title=\"Undo [Z]\" class=\"main-btn\">\r\n                <mat-icon aria-label=\"Undo [Z]\">undo</mat-icon>\r\n              </button>\r\n              <button mat-button id=\"tool_redo\" title=\"Redo [Y]\" class=\"main-btn\">\r\n                <mat-icon aria-label=\"Redo [Y]\">redo</mat-icon>\r\n              </button>\r\n            </div>\r\n\r\n            <!-- <div class=\"push_button\" title=\"Save Project\" (click)=\"saveProject()\"></div> -->\r\n            <!-- <div class=\"tool_sep\"></div> -->\r\n            <!-- <div class=\"push_button\" id=\"tool_source\" title=\"Edit Source [U]\"></div> -->\r\n            <!-- <div class=\"tool_button\" id=\"tool_wireframe\" title=\"Wireframe Mode [F]\"></div> -->\r\n            <!-- <div class=\"tool_sep\"></div> -->\r\n            <!-- <div class=\"tool_button\" id=\"tool_zoom\" title=\"Zoom Tool [Ctrl+Up/Down]\"></div> -->\r\n          </div>\r\n          <div id=\"selected_panel\">\r\n            <div class=\"main-btn-sep\"></div>\r\n            <button mat-button id=\"tool_clone\" title=\"Duplicate Element [D]\" class=\"main-btn\">\r\n              <mat-icon aria-label=\"Duplicate Element [D]\">content_copy</mat-icon>\r\n            </button>\r\n            <button mat-button id=\"tool_delete\" title=\"Delete Element [Delete/Backspace]\" class=\"main-btn\">\r\n              <mat-icon aria-label=\"Delete Element [Delete/Backspace]\">content_cut</mat-icon>\r\n            </button>\r\n            <button mat-button id=\"tool_move_bottom\" title=\"Send to Back [ Ctrl+Shift+[ ]\" class=\"main-btn\">\r\n              <span class=\"to-bottom\"></span>\r\n            </button>\r\n            <button mat-button id=\"tool_move_top\" title=\"Bring to Front [ Ctrl+Shift+] ]\" class=\"main-btn\">\r\n              <span class=\"to-top\"></span>\r\n            </button>\r\n            <button mat-button id=\"tool_topath\" title=\"Convert to Path\" class=\"main-btn\">\r\n              <mat-icon>linear_scale</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div id=\"multiselected_panel\">\r\n            <div class=\"main-btn-sep\"></div>\r\n            <button mat-button id=\"tool_clone_multi\" title=\"Clone Elements [C]\" class=\"main-btn\">\r\n              <mat-icon aria-label=\"Clone Elements [C]\">content_copy</mat-icon>\r\n            </button>\r\n            <button mat-button id=\"tool_delete_multi\" title=\"Delete Selected Elements [Delete/Backspace]\" class=\"main-btn\">\r\n              <mat-icon aria-label=\"Delete Selected Elements [Delete/Backspace]\">content_cut</mat-icon>\r\n            </button>\r\n            <button mat-button id=\"tool_group_elements\" title=\"Group Elements [G]\" class=\"main-btn\">\r\n              <span class=\"group\"></span>\r\n            </button>\r\n            <button mat-button id=\"tool_alignleft\" title=\"Align Left\" class=\"main-btn\">\r\n              <mat-icon>format_align_left</mat-icon>\r\n            </button>\r\n            <button mat-button id=\"tool_aligncenter\" title=\"Align Center\" class=\"main-btn\">\r\n              <mat-icon>format_align_center</mat-icon>\r\n            </button>\r\n            <button mat-button id=\"tool_alignright\" title=\"Align Right\" class=\"main-btn\">\r\n              <mat-icon>format_align_right</mat-icon>\r\n            </button>\r\n            <button mat-button id=\"tool_aligntop\" title=\"Align Top\" class=\"main-btn\">\r\n              <mat-icon>vertical_align_top</mat-icon>\r\n            </button>\r\n            <button mat-button id=\"tool_alignmiddle\" title=\"Align Middle\" class=\"main-btn\">\r\n              <mat-icon>vertical_align_center</mat-icon>\r\n            </button>\r\n            <button mat-button id=\"tool_alignbottom\" title=\"Align Bottom\" class=\"main-btn\">\r\n              <mat-icon>vertical_align_bottom</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div id=\"g_panel\">\r\n            <button mat-button id=\"tool_ungroup\" title=\"Ungroup Elements [G]\" class=\"main-btn\">\r\n              <span class=\"ungroup\"></span>\r\n            </button>\r\n          </div>\r\n\r\n          <!-- History buttons -->\r\n          <!-- <div id=\"history_panel\">\r\n            <div class=\"tool_sep\"></div>\r\n            <div class=\"push_button tool_button_disabled\" id=\"tool_undo\" title=\"Undo [Z]\"></div>\r\n            <div class=\"push_button tool_button_disabled\" id=\"tool_redo\" title=\"Redo [Y]\"></div>\r\n          </div> -->\r\n          <!-- Buttons when a single element is selected -->\r\n          <!-- <div id=\"_selected_panel\"> -->\r\n          <!-- <div class=\"toolset\"> -->\r\n          <!-- <div class=\"tool_sep\"></div> -->\r\n          <!-- <div class=\"push_button\" id=\"tool_clone\" title=\"Duplicate Element [D]\"></div> -->\r\n          <!-- <div class=\"push_button\" id=\"tool_delete\" title=\"Delete Element [Delete/Backspace]\"></div> -->\r\n          <!-- <div class=\"push_button\" id=\"tool_move_top\" title=\"Bring to Front [ Ctrl+Shift+] ]\"></div> -->\r\n          <!-- <div class=\"push_button\" id=\"tool_move_bottom\" title=\"Send to Back [ Ctrl+Shift+[ ]\"></div> -->\r\n          <!-- <div class=\"push_button\" id=\"tool_topath\" title=\"Convert to Path\"></div> -->\r\n          <!-- <div class=\"push_button\" id=\"tool_reorient\" title=\"Reorient path\"></div> -->\r\n          <!-- <div class=\"push_button\" id=\"tool_make_link\" title=\"Make (hyper)link\"></div> -->\r\n          <!-- </div> -->\r\n          <!-- </div> -->\r\n          <!-- select panel END -->\r\n          <!-- Buttons when multiple elements are selected -->\r\n          <!-- <div id=\"_multiselected_panel\"> -->\r\n          <!-- <div class=\"tool_sep\"></div> -->\r\n          <!-- <div class=\"push_button\" id=\"tool_clone_multi\" title=\"Clone Elements [C]\"></div> -->\r\n          <!-- <div class=\"push_button\" id=\"tool_delete_multi\" title=\"Delete Selected Elements [Delete/Backspace]\"></div> -->\r\n          <!-- <div class=\"tool_sep\"></div> -->\r\n          <!-- <div class=\"push_button\" id=\"tool_group_elements\" title=\"Group Elements [G]\"></div> -->\r\n          <!-- <div class=\"push_button\" id=\"tool_make_link_multi\" title=\"Make (hyper)link\"></div> -->\r\n          <!-- <div class=\"push_button\" id=\"tool_alignleft\" title=\"Align Left\"></div> -->\r\n          <!-- <div class=\"push_button\" id=\"tool_aligncenter\" title=\"Align Center\"></div> -->\r\n          <!-- <div class=\"push_button\" id=\"tool_alignright\" title=\"Align Right\"></div> -->\r\n          <!-- <div class=\"push_button\" id=\"tool_aligntop\" title=\"Align Top\"></div> -->\r\n          <!-- <div class=\"push_button\" id=\"tool_alignmiddle\" title=\"Align Middle\"></div> -->\r\n          <!-- <div class=\"push_button\" id=\"tool_alignbottom\" title=\"Align Bottom\"></div> -->\r\n          <!-- <label id=\"tool_align_relative\">\r\n              <span id=\"relativeToLabel\">relative to:</span>\r\n              <select id=\"align_relative_to\" title=\"Align relative to ...\">\r\n                <option id=\"selected_objects\" value=\"selected\">selected objects</option>\r\n                <option id=\"largest_object\" value=\"largest\">largest object</option>\r\n                <option id=\"smallest_object\" value=\"smallest\">smallest object</option>\r\n                <option id=\"page\" value=\"page\">page</option>\r\n              </select>\r\n            </label> -->\r\n          <!-- </div> -->\r\n\r\n          <!-- formerly gsvg_panel -->\r\n          <!-- <div id=\"container_panel\"> -->\r\n          <!-- <div class=\"tool_sep\"></div> -->\r\n          <!-- Add viewBox field here? -->\r\n          <!-- <label id=\"group_title\" title=\"Group identification label\">\r\n              <span>label:</span>\r\n              <input id=\"g_title\" data-attr=\"title\" size=\"10\" type=\"text\" />\r\n            </label> -->\r\n          <!-- </div> -->\r\n\r\n          <!-- <div id=\"use_panel\">\r\n            <div class=\"push_button\" id=\"tool_unlink_use\" title=\"Break link to reference element (make unique)\"></div>\r\n          </div> -->\r\n\r\n          <!-- <div id=\"g_panel\">\r\n            <div class=\"push_button\" id=\"tool_ungroup\" title=\"Ungroup Elements [G]\"></div>\r\n          </div> -->\r\n\r\n          <!-- For anchor elements -->\r\n          <!-- <div id=\"a_panel\">\r\n            <label id=\"tool_link_url\" title=\"Set link URL (leave empty to remove)\">\r\n              <span id=\"linkLabel\" class=\"icon_label\"></span>\r\n              <input id=\"link_url\" type=\"text\" size=\"35\" />\r\n            </label>\r\n          </div> -->\r\n\r\n          <!-- <div id=\"path_node_panel\"> -->\r\n            <!-- <div class=\"tool_sep\"></div> -->\r\n            <!-- <div class=\"tool_button push_button_pressed\" id=\"tool_node_link\" title=\"Link Control Points\"></div> -->\r\n            <!-- <div class=\"tool_sep\"></div> -->\r\n            <!-- <label id=\"tool_node_x\">x:\r\n              <input id=\"path_node_x\" class=\"attr_changer\" title=\"Change node's x coordinate\" size=\"3\" data-attr=\"x\" />\r\n            </label>\r\n            <label id=\"tool_node_y\">y:\r\n              <input id=\"path_node_y\" class=\"attr_changer\" title=\"Change node's y coordinate\" size=\"3\" data-attr=\"y\" />\r\n            </label> -->\r\n\r\n            <!-- <select id=\"seg_type\" title=\"Change Segment type\">\r\n              <option id=\"straight_segments\" selected=\"selected\" value=\"4\">Straight</option>\r\n              <option id=\"curve_segments\" value=\"6\">Curve</option>\r\n            </select> -->\r\n            <!-- <div class=\"tool_button\" id=\"tool_node_clone\" title=\"Clone Node\"></div>\r\n            <div class=\"tool_button\" id=\"tool_node_delete\" title=\"Delete Node\"></div>\r\n            <div class=\"tool_button\" id=\"tool_openclose_path\" title=\"Open/close sub-path\"></div>\r\n            <div class=\"tool_button\" id=\"tool_add_subpath\" title=\"Add sub-path\"></div> -->\r\n          <!-- </div> -->\r\n        </div>\r\n        <!-- tools_top -->\r\n        <div id=\"cur_context_panel\">\r\n\r\n        </div>\r\n\r\n        <!-- tools_left -->\r\n        <!-- <div id=\"tools_left\" class=\"tools_panel\">\r\n      <div class=\"tool_button\" id=\"tool_select\" title=\"Select Tool\"></div>\r\n      <div class=\"tool_button\" id=\"tool_fhpath\" title=\"Pencil Tool\"></div>\r\n      <div class=\"tool_button\" id=\"tool_line\" title=\"Line Tool\"></div>\r\n      <div class=\"tool_button flyout_current\" id=\"tools_rect_show\" title=\"Square/Rect Tool\">\r\n        <div class=\"flyout_arrow_horiz\"></div>\r\n      </div>\r\n      <div class=\"tool_button flyout_current\" id=\"tools_ellipse_show\" title=\"Ellipse/Circle Tool\">\r\n        <div class=\"flyout_arrow_horiz\"></div>\r\n      </div>\r\n      <div class=\"tool_button\" id=\"tool_path\" title=\"Path Tool\"></div>\r\n      <div class=\"tool_button\" id=\"tool_text\" title=\"Text Tool\"></div>\r\n      <div class=\"tool_button\" id=\"tool_image\" title=\"Image Tool\"></div>\r\n      <div class=\"tool_button\" id=\"tool_zoom\" title=\"Zoom Tool [Ctrl+Up/Down]\"></div>\r\n\r\n      <div style=\"display: none\">\r\n        <div id=\"tool_rect\" title=\"Rectangle\"></div>\r\n        <div id=\"tool_square\" title=\"Square\"></div>\r\n        <div id=\"tool_fhrect\" title=\"Free-Hand Rectangle\"></div>\r\n        <div id=\"tool_ellipse\" title=\"Ellipse\"></div>\r\n        <div id=\"tool_circle\" title=\"Circle\"></div>\r\n        <div id=\"tool_fhellipse\" title=\"Free-Hand Ellipse\"></div>\r\n      </div>\r\n    </div> -->\r\n        <!-- tools_left -->\r\n\r\n        <!-- tool bottom -->\r\n        <div class=\"bottom-bar tools_panel\">\r\n          <!-- Zoom buttons -->\r\n          <div class=\"zoom-menu\" title=\"Zoom level\">\r\n            <div class=\"zoom-value\">\r\n              <input id=\"zoom\" size=\"3\" value=\"100\" type=\"text\" #zoomValue hidden/>\r\n              <span id=\"zoomLabel\">{{zoomValue.value}} %</span>\r\n              <div id=\"zoom_dropdown\" class=\"dropdown selection\">\r\n                <button>O\r\n                </button>\r\n                <ul>\r\n                  <li>1000%</li>\r\n                  <li>400%</li>\r\n                  <li>200%</li>\r\n                  <li>100%</li>\r\n                  <li>50%</li>\r\n                  <li>25%</li>\r\n                  <li id=\"fit_to_canvas\" data-val=\"canvas\">Fit to canvas</li>\r\n                  <li id=\"fit_to_sel\" data-val=\"selection\">Fit to selection</li>\r\n                  <!-- <li id=\"fit_to_layer_content\" data-val=\"layer\">Fit to layer content</li> -->\r\n                  <li id=\"fit_to_all\" data-val=\"content\">Fit to all content</li>\r\n                  <li>100%</li>\r\n                </ul>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div id=\"tools_bottom_2\" class=\"colors\">\r\n            <input readonly [(colorPicker)]=\"colorFill\" class=\"color-fill\" title=\"Change fill color\" [style.background]=\"colorFill\" \r\n              [cpAlphaChannel]=\"'always'\" [cpPosition]=\"'top'\" (colorPickerChange)=\"onChangeFillColor($event)\" [cpPresetColors]=\"defaultColor\" \r\n              [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\"\r\n              [cpOKButton]=\"true\" [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\"/>\r\n            <input readonly [(colorPicker)]=\"colorStroke\" class=\"color-stroke\" title=\"Change stroke color\" [style.background]=\"colorStroke\"\r\n              [cpAlphaChannel]=\"'always'\" [cpPosition]=\"'top'\" (colorPickerChange)=\"onChangeStrokeColor($event)\" [cpPresetColors]=\"defaultColor\" \r\n              [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\"\r\n              [cpOKButton]=\"true\" [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\"/>\r\n            <!-- <div id=\"color_tools\"> -->\r\n            <div class=\"color_tool\" id=\"tool_fill\" hidden>\r\n              <label class=\"icon_label\" for=\"fill_color\" title=\"Change fill color\"></label>\r\n              <div class=\"color_block\">\r\n                <div id=\"fill_color\" class=\"color_block\" [style.border-color]=\"colorFill\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"color_tool\" id=\"tool_stroke\" hidden>\r\n              <label class=\"icon_label\" title=\"Change stroke color\"></label>\r\n              <div class=\"color_block\">\r\n                <div id=\"stroke_bg\"></div>\r\n                <div id=\"stroke_color\" class=\"color_block\" title=\"Change stroke color\" [style.border-color]=\"colorStroke\"></div>\r\n              </div>\r\n\r\n              <!-- <div id=\"toggle_stroke_tools\" title=\"Show/hide more stroke tools\"></div> -->\r\n\r\n              <!-- <label class=\"stroke_tool\">\r\n                  <select id=\"stroke_style\" title=\"Change stroke dash style\">\r\n                    <option selected=\"selected\" value=\"none\">&#8212;</option>\r\n                    <option value=\"2,2\">...</option>\r\n                    <option value=\"5,5\">- -</option>\r\n                    <option value=\"5,2,2,2\">- .</option>\r\n                    <option value=\"5,2,2,2,2,2\">- ..</option>\r\n                  </select>\r\n                </label> -->\r\n\r\n              <!-- <div class=\"stroke_tool dropdown\" id=\"stroke_linejoin\">\r\n                  <div id=\"cur_linejoin\" title=\"Linejoin: Miter\"></div>\r\n                  <button></button>\r\n                </div> -->\r\n\r\n              <!-- <div class=\"stroke_tool dropdown\" id=\"stroke_linecap\">\r\n                  <div id=\"cur_linecap\" title=\"Linecap: Butt\"></div>\r\n                  <button></button>\r\n                </div> -->\r\n\r\n              <!-- </div> -->\r\n\r\n              <!-- <div class=\"color_tool\" id=\"tool_opacity\" title=\"Change selected item opacity\">\r\n                <label>\r\n                  <span id=\"group_opacityLabel\" class=\"icon_label\"></span>\r\n                  <input id=\"group_opacity\" size=\"3\" value=\"100\" type=\"text\" />\r\n                </label>\r\n                <div id=\"opacity_dropdown\" class=\"dropdown\">\r\n                  <button></button>\r\n                  <ul>\r\n                    <li>0%</li>\r\n                    <li>25%</li>\r\n                    <li>50%</li>\r\n                    <li>75%</li>\r\n                    <li>100%</li>\r\n                    <li class=\"special\">\r\n                      <div id=\"opac_slider\"></div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n\r\n          <div id=\"tools_bottom_3\" class=\"colors-palette\">\r\n            <div id=\"palette_holder\">\r\n              <div id=\"palette\" title=\"Click to change fill color, shift-click to change stroke color\"></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"option_lists\" class=\"dropdown\">\r\n          <!-- <ul id=\"linejoin_opts\">\r\n            <li class=\"tool_button current\" id=\"linejoin_miter\" title=\"Linejoin: Miter\"></li>\r\n            <li class=\"tool_button\" id=\"linejoin_round\" title=\"Linejoin: Round\"></li>\r\n            <li class=\"tool_button\" id=\"linejoin_bevel\" title=\"Linejoin: Bevel\"></li>\r\n          </ul>\r\n\r\n          <ul id=\"linecap_opts\">\r\n            <li class=\"tool_button current\" id=\"linecap_butt\" title=\"Linecap: Butt\"></li>\r\n            <li class=\"tool_button\" id=\"linecap_square\" title=\"Linecap: Square\"></li>\r\n            <li class=\"tool_button\" id=\"linecap_round\" title=\"Linecap: Round\"></li>\r\n          </ul> -->\r\n\r\n          <ul id=\"position_opts\" class=\"optcols3\">\r\n            <li class=\"push_button\" id=\"tool_posleft\" title=\"Align Left\"></li>\r\n            <li class=\"push_button\" id=\"tool_poscenter\" title=\"Align Center\"></li>\r\n            <li class=\"push_button\" id=\"tool_posright\" title=\"Align Right\"></li>\r\n            <li class=\"push_button\" id=\"tool_postop\" title=\"Align Top\"></li>\r\n            <li class=\"push_button\" id=\"tool_posmiddle\" title=\"Align Middle\"></li>\r\n            <li class=\"push_button\" id=\"tool_posbottom\" title=\"Align Bottom\"></li>\r\n          </ul>\r\n        </div>\r\n\r\n\r\n        <!-- hidden divs -->\r\n        <!-- <div id=\"color_picker\"></div> -->\r\n\r\n      </div>\r\n    </mat-drawer-content>\r\n    <!-- work area END -->\r\n  </mat-drawer-container>\r\n\r\n\r\n  <!-- svg_editor -->\r\n\r\n  <div id=\"svg_source_editor\">\r\n    <div class=\"overlay\"></div>\r\n    <div id=\"svg_source_container\">\r\n      <div id=\"tool_source_back\" class=\"toolbar_button\">\r\n        <button id=\"tool_source_save\">Apply Changes</button>\r\n        <button id=\"tool_source_cancel\">Cancel</button>\r\n      </div>\r\n      <div id=\"save_output_btns\">\r\n        <p id=\"copy_save_note\">Copy the contents of this box into a text editor, then save the file with a .svg extension.</p>\r\n        <button id=\"copy_save_done\">Done</button>\r\n      </div>\r\n      <form>\r\n        <textarea id=\"svg_source_textarea\" spellcheck=\"false\"></textarea>\r\n      </form>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div id=\"svg_docprops\">\r\n    <div class=\"overlay\"></div>\r\n    <div id=\"svg_docprops_container\">\r\n      <div id=\"tool_docprops_back\" class=\"toolbar_button\">\r\n        <button id=\"tool_docprops_save\">OK</button>\r\n        <button id=\"tool_docprops_cancel\">Cancel</button>\r\n      </div>\r\n\r\n\r\n      <fieldset id=\"svg_docprops_docprops\">\r\n        <legend id=\"svginfo_image_props\">Image Properties</legend>\r\n        <label>\r\n          <span id=\"svginfo_title\">Title:</span>\r\n          <input type=\"text\" id=\"canvas_title\" />\r\n        </label>\r\n\r\n        <fieldset id=\"change_resolution\">\r\n          <legend id=\"svginfo_dim\">Canvas Dimensions</legend>\r\n\r\n          <label>\r\n            <span id=\"svginfo_width\">width:</span>\r\n            <input type=\"text\" id=\"canvas_width\" size=\"6\" />\r\n          </label>\r\n\r\n          <label>\r\n            <span id=\"svginfo_height\">height:</span>\r\n            <input type=\"text\" id=\"canvas_height\" size=\"6\" />\r\n          </label>\r\n\r\n          <label>\r\n            <select id=\"resolution\">\r\n              <option id=\"selectedPredefined\" selected=\"selected\">Select predefined:</option>\r\n              <option>640x480</option>\r\n              <option>800x600</option>\r\n              <option>1024x768</option>\r\n              <option>1280x960</option>\r\n              <option>1600x1200</option>\r\n              <option id=\"fitToContent\" value=\"content\">Fit to Content</option>\r\n            </select>\r\n          </label>\r\n        </fieldset>\r\n\r\n        <fieldset id=\"image_save_opts\">\r\n          <legend id=\"includedImages\">Included Images</legend>\r\n          <label>\r\n            <input type=\"radio\" name=\"image_opt\" value=\"embed\" checked=\"checked\" />\r\n            <span id=\"image_opt_embed\">Embed data (local files)</span>\r\n          </label>\r\n          <label>\r\n            <input type=\"radio\" name=\"image_opt\" value=\"ref\" />\r\n            <span id=\"image_opt_ref\">Use file reference</span>\r\n          </label>\r\n        </fieldset>\r\n      </fieldset>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"svg_prefs\">\r\n    <div class=\"overlay\"></div>\r\n    <div id=\"svg_prefs_container\">\r\n      <div id=\"tool_prefs_back\" class=\"toolbar_button\">\r\n        <button id=\"tool_prefs_save\">OK</button>\r\n        <button id=\"tool_prefs_cancel\">Cancel</button>\r\n      </div>\r\n\r\n      <fieldset>\r\n        <legend id=\"svginfo_editor_prefs\">Editor Preferences</legend>\r\n\r\n        <label>\r\n          <span id=\"svginfo_lang\">Language:</span>\r\n          <!-- Source: http://en.wikipedia.org/wiki/Language_names -->\r\n          <select id=\"lang_select\">\r\n            <option id=\"lang_ar\" value=\"ar\">العربية</option>\r\n            <option id=\"lang_cs\" value=\"cs\">Čeština</option>\r\n            <option id=\"lang_de\" value=\"de\">Deutsch</option>\r\n            <option id=\"lang_en\" value=\"en\" selected=\"selected\">English</option>\r\n            <option id=\"lang_es\" value=\"es\">Español</option>\r\n            <option id=\"lang_fa\" value=\"fa\">فارسی</option>\r\n            <option id=\"lang_fr\" value=\"fr\">Français</option>\r\n            <option id=\"lang_fy\" value=\"fy\">Frysk</option>\r\n            <option id=\"lang_hi\" value=\"hi\">&#2361;&#2367;&#2344;&#2381;&#2342;&#2368;, &#2361;&#2367;&#2306;&#2342;&#2368;</option>\r\n            <option id=\"lang_it\" value=\"it\">Italiano</option>\r\n            <option id=\"lang_ja\" value=\"ja\">日本語</option>\r\n            <option id=\"lang_nl\" value=\"nl\">Nederlands</option>\r\n            <option id=\"lang_pl\" value=\"pl\">Polski</option>\r\n            <option id=\"lang_pt-BR\" value=\"pt-BR\">Português (BR)</option>\r\n            <option id=\"lang_ro\" value=\"ro\">Română</option>\r\n            <option id=\"lang_ru\" value=\"ru\">Русский</option>\r\n            <option id=\"lang_sk\" value=\"sk\">Slovenčina</option>\r\n            <option id=\"lang_sl\" value=\"sl\">Slovenščina</option>\r\n            <option id=\"lang_zh-TW\" value=\"zh-TW\">繁體中文</option>\r\n          </select>\r\n        </label>\r\n\r\n        <label>\r\n          <span id=\"svginfo_icons\">Icon size:</span>\r\n          <select id=\"iconsize\">\r\n            <option id=\"icon_small\" value=\"s\">Small</option>\r\n            <option id=\"icon_medium\" value=\"m\" selected=\"selected\">Medium</option>\r\n            <option id=\"icon_large\" value=\"l\">Large</option>\r\n            <option id=\"icon_xlarge\" value=\"xl\">Extra Large</option>\r\n          </select>\r\n        </label>\r\n\r\n        <fieldset id=\"change_background\">\r\n          <legend id=\"svginfo_change_background\">Editor Background</legend>\r\n          <div id=\"bg_blocks\"></div>\r\n          <label>\r\n            <span id=\"svginfo_bg_url\">URL:</span>\r\n            <input type=\"text\" id=\"canvas_bg_url\" />\r\n          </label>\r\n          <p id=\"svginfo_bg_note\">Note: Background will not be saved with image.</p>\r\n        </fieldset>\r\n\r\n        <fieldset id=\"change_grid\">\r\n          <legend id=\"svginfo_grid_settings\">Grid</legend>\r\n          <label>\r\n            <span id=\"svginfo_snap_onoff\">Snapping on/off</span>\r\n            <input type=\"checkbox\" value=\"snapping_on\" id=\"grid_snapping_on\" />\r\n          </label>\r\n          <label>\r\n            <span id=\"svginfo_snap_step\">Snapping Step-Size:</span>\r\n            <input type=\"text\" id=\"grid_snapping_step\" size=\"3\" value=\"10\" />\r\n          </label>\r\n          <label>\r\n            <span id=\"svginfo_grid_color\">Grid color:</span>\r\n            <input type=\"text\" id=\"grid_color\" size=\"3\" value=\"#000\" />\r\n          </label>\r\n        </fieldset>\r\n\r\n        <fieldset id=\"units_rulers\">\r\n          <legend id=\"svginfo_units_rulers\">Units &amp; Rulers</legend>\r\n          <label>\r\n            <span id=\"svginfo_rulers_onoff\">Show rulers</span>\r\n            <input type=\"checkbox\" value=\"show_rulers\" id=\"show_rulers\" checked=\"checked\" />\r\n          </label>\r\n          <label>\r\n            <span id=\"svginfo_unit\">Base Unit:</span>\r\n            <select id=\"base_unit\">\r\n              <option value=\"px\">Pixels</option>\r\n              <option value=\"cm\">Centimeters</option>\r\n              <option value=\"mm\">Millimeters</option>\r\n              <option value=\"in\">Inches</option>\r\n              <option value=\"pt\">Points</option>\r\n              <option value=\"pc\">Picas</option>\r\n              <option value=\"em\">Ems</option>\r\n              <option value=\"ex\">Exs</option>\r\n            </select>\r\n          </label>\r\n          <!-- Should this be an export option instead? -->\r\n          <!-- \r\n          <span id=\"svginfo_unit_system\">Unit System:</span>\r\n          <label>\r\n            <input type=\"radio\" name=\"unit_system\" value=\"single\" checked=\"checked\"/>\r\n            <span id=\"svginfo_single_type_unit\">Single type unit</span>\r\n            <small id=\"svginfo_single_type_unit_sub\">CSS unit type is set on root element. If a different unit type is entered in a text field, it is converted back to user units on export.</small>\r\n          </label>\r\n          <label>\r\n            <input type=\"radio\" name=\"unit_system\" value=\"multi\"/>\r\n            <span id=\"svginfo_multi_units\">Multiple CSS units</span> \r\n            <small id=\"svginfo_single_type_unit_sub\">Attributes can be given different CSS units, which may lead to inconsistant results among viewers.</small>\r\n          </label>\r\n   -->\r\n        </fieldset>\r\n\r\n      </fieldset>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"dialog_box\">\r\n    <div class=\"overlay\"></div>\r\n    <div id=\"dialog_container\">\r\n      <div id=\"dialog_content\"></div>\r\n      <div id=\"dialog_buttons\"></div>\r\n    </div>\r\n  </div>\r\n\r\n  <ul id=\"cmenu_canvas\" class=\"contextMenu svg-workarea-contextmenu\">\r\n    <!-- <li>\r\n      <a href=\"#deselect\">Clear selection</a>\r\n    </li> -->\r\n    <li>\r\n      <a id=\"#interactivity\" (click)=\"isInteractivtyEnabled(selectedElement) && onGaugeEditEx()\">Interactivity</a>\r\n    </li>    \r\n    <li class=\"separator\">\r\n      <a id=\"#cut\">Cut</a>\r\n    </li>\r\n    <li>\r\n      <a id=\"#copy\">Copy</a>\r\n    </li>\r\n    <li>\r\n      <a id=\"#paste\">Paste</a>\r\n    </li>\r\n    <li>\r\n      <a id=\"#paste_in_place\">Paste in Place</a>\r\n    </li>\r\n    <li class=\"separator\">\r\n      <a id=\"#delete\">Delete</a>\r\n    </li>\r\n    <li class=\"separator\">\r\n      <a id=\"#group\">Group\r\n        <span class=\"shortcut\">G</span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a id=\"#ungroup\">Ungroup\r\n        <span class=\"shortcut\">G</span>\r\n      </a>\r\n    </li>\r\n    <li class=\"separator\">\r\n      <a id=\"#move_front\">Bring to Front\r\n        <span class=\"shortcut\">SHFT+CTRL+]</span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a id=\"#move_up\">Bring Forward\r\n        <span class=\"shortcut\">CTRL+]</span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a id=\"#move_down\">Send Backward\r\n        <span class=\"shortcut\">CTRL+[</span>\r\n      </a>\r\n    </li>\r\n    <li>\r\n      <a id=\"#move_back\">Send to Back\r\n        <span class=\"shortcut\">SHFT+CTRL+[</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n\r\n  <ul id=\"cmenu_layers\" class=\"contextMenu\" style=\"display: none\">\r\n    <li>\r\n      <a href=\"#dupe\">Duplicate Layer...</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#delete\">Delete Layer</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#merge_down\">Merge Down</a>\r\n    </li>\r\n    <li>\r\n      <a href=\"#merge_all\">Merge All</a>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/editor/editor.component.ts":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorComponent, DialogDocProperty, DialogDocName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDocProperty", function() { return DialogDocProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDocName", function() { return DialogDocName; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var _models_hmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/hmi */ "./src/app/_models/hmi.ts");
/* harmony import */ var _helpers_windowref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/windowref */ "./src/app/_helpers/windowref.ts");
/* harmony import */ var _gauges_gauge_property_gauge_property_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gauges/gauge-property/gauge-property.component */ "./src/app/gauges/gauge-property/gauge-property.component.ts");
/* harmony import */ var _layout_property_layout_property_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout-property/layout-property.component */ "./src/app/editor/layout-property/layout-property.component.ts");
/* harmony import */ var _gauges_gauges_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../gauges/gauges.component */ "./src/app/gauges/gauges.component.ts");
/* harmony import */ var _gauges_gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../gauges/gauge-base/gauge-base.component */ "./src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_helpers/utils */ "./src/app/_helpers/utils.ts");
/* harmony import */ var _gui_helpers_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../gui-helpers/confirm-dialog/confirm-dialog.component */ "./src/app/gui-helpers/confirm-dialog/confirm-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













var EditorComponent = /** @class */ (function () {
    function EditorComponent(projectService, winRef, dialog, gaugesManager, mdIconRegistry, sanitizer) {
        this.projectService = projectService;
        this.winRef = winRef;
        this.dialog = dialog;
        this.gaugesManager = gaugesManager;
        this.mdIconRegistry = mdIconRegistry;
        this.sanitizer = sanitizer;
        this.defaultColor = _helpers_utils__WEBPACK_IMPORTED_MODULE_10__["Utils"].defaultColor;
        this.colorFill = '#FFFFFF';
        this.colorStroke = '#000000';
        this.currentView = null;
        this.hmi = new _models_hmi__WEBPACK_IMPORTED_MODULE_4__["Hmi"](); // = {_id: '', name: '', networktype: '', ipaddress: '', maskaddress: '' };
        this.currentMode = '';
        this.gridOn = false;
        this.selectedElement = new _models_hmi__WEBPACK_IMPORTED_MODULE_4__["SelElement"]();
        this.panelsState = {
            enabled: false,
            panelA: true,
            panelB: true,
            panelC: true,
            panelD: true,
            panelS: true
        };
        mdIconRegistry.addSvgIcon('group', sanitizer.bypassSecurityTrustResourceUrl('/assets/images/group.svg'));
        mdIconRegistry.addSvgIcon('to_bottom', sanitizer.bypassSecurityTrustResourceUrl('/assets/images/to-bottom.svg'));
        mdIconRegistry.addSvgIcon('to_top', sanitizer.bypassSecurityTrustResourceUrl('/assets/images/to-top.svg'));
        // this.gaugesManager.stopDemo();
    }
    //#region Implemented onInit / onAfterInit event
    /**
     * init event
     */
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.subscriptionSave = this.projectService.onSaveCurrent.subscribe(function (saveas) {
                _this.onSaveProject();
                if (saveas) {
                    _this.projectService.saveAs();
                }
            });
            this.subscriptionLoad = this.projectService.onLoadHmi.subscribe(function (load) {
                _this.loadHmi();
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    /**
     * after init event
     */
    EditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.myInit();
            _this.setMode('select');
            _this.loadHmi();
            _this.loadPanelState();
        }, 1000);
    };
    EditorComponent.prototype.ngOnDestroy = function () {
        try {
            if (this.subscriptionSave) {
                this.subscriptionSave.unsubscribe();
            }
            if (this.subscriptionLoad) {
                this.subscriptionLoad.unsubscribe();
            }
        }
        catch (e) {
        }
        if (this.currentView) {
            this.currentView.svgcontent = this.winRef.nativeWindow.svgEditor.getSvgString();
            this.saveHmi();
        }
    };
    //#endregion
    //#region General private function
    /**
     * init, first init the svg-editor component
     */
    EditorComponent.prototype.myInit = function () {
        var _this = this;
        // this.winRef.nativeWindow.svgEditor = null;
        console.log('myInit');
        try {
            // first init svg-editor component
            mypathseg.initPathSeg();
            mybrowser.initBrowser();
            mysvgutils.initSvgutils();
            myselect.initSelect();
            mydraw.initDraw();
            mysvgcanvas.initSvgCanvas();
            // init svg-editor
            var toinit = mysvgeditor.initSvgEditor($, function (selected) {
                _this.onSelectedElement(selected);
            }, function (args) {
                _this.onExtensionLoaded(args);
                _this.clearSelection();
            }, function (type, color) {
                if (type == 'fill') {
                    _this.colorFill = color;
                    _this.setFillColor(_this.colorFill);
                    _this.checkMySelectedToSetColor(_this.colorFill, null, _this.winRef.nativeWindow.svgEditor.getSelectedElements());
                    // console.log('fill ' + color);
                }
                else if (type == 'stroke') {
                    _this.colorStroke = color;
                    _this.checkMySelectedToSetColor(null, _this.colorStroke, _this.winRef.nativeWindow.svgEditor.getSelectedElements());
                    // console.log('stroke ' + color);
                }
            }, function (eleadded) {
                // console.log('added: ' + eleadded.id + ' ' + eleadded.type);
                // this.hmiService.addGauge(this.hmi, eleadded);
            }, function (eleremoved) {
                _this.onRemoveElement(eleremoved);
            });
            // this.winRef.nativeWindow.svgEditor.ready(function() {
            //     this.winRef.nativeWindow.svgEditor.init();
            //     $(initLocale);
            //     $(initContextmenu);
            // });
            this.winRef.nativeWindow.svgEditor.init();
            $(initLocale);
            $(initContextmenu);
            console.log('myInit End');
        }
        catch (Error) {
            console.log(Error);
        }
        // mycontextmenu.initContextmenu();
        this.setFillColor(this.colorFill);
        this.setFillColor(this.colorStroke);
    };
    /**
     * load the hmi resource and bind it
     */
    EditorComponent.prototype.loadHmi = function () {
        this.hmi = this.projectService.getHmi();
        // check new hmi
        if (!this.hmi.views || this.hmi.views.length <= 0) {
            this.hmi.views = [];
            this.onAddView();
            this.currentView = this.hmi.views[0];
            this.saveHmi();
            // this.selectView(this.hmi.views[0].name);
        }
        else {
            var oldsel = localStorage.getItem("@frango.webeditor.currentview");
            if (!oldsel && this.hmi.views.length) {
                oldsel = this.hmi.views[0].name;
            }
            for (var i = 0; i < this.hmi.views.length; i++) {
                if (this.hmi.views[i].name === oldsel) {
                    this.onSelectView(this.hmi.views[i]);
                    break;
                }
            }
        }
    };
    /**
     * save hmi
     */
    EditorComponent.prototype.saveHmi = function () {
        // console.log('savehmi');
        this.projectService.setHmi(this.hmi);
        this.projectService.save();
    };
    /**
     * get gauge settings from current view items, if not exist create void settings from GaugesManager
     * @param ele gauge id
     */
    EditorComponent.prototype.getGaugeSettings = function (ele) {
        if (ele && this.currentView) {
            if (this.currentView.items[ele.id]) {
                return this.currentView.items[ele.id];
            }
            return this.gaugesManager.createSettings(ele.id, ele.type);
        }
        return null;
    };
    /**
     * add the gauge settings to the current view items list
     * @param ele
     */
    EditorComponent.prototype.setGaugeSettings = function (ele) {
        this.currentView.items[ele.id] = ele;
    };
    /**
     * check the gauge in current view of element
     * @param ele element to check
     */
    EditorComponent.prototype.checkGaugeInView = function (ele) {
        var g = this.getGaugeSettings(ele);
        if (!g) {
        }
    };
    /**
     * check and set the color panel with selected element
     * @param ele selected element
     */
    EditorComponent.prototype.checkColors = function (ele) {
        var eles = this.winRef.nativeWindow.svgEditor.getSelectedElements();
        var clrfill = null;
        var clrstroke = null;
        if (eles && (eles.length <= 1 || !eles[1]) && eles[0]) {
            // check for gauge fill and stroke color
            var colors = { fill: clrfill, stroke: clrstroke };
            if (_gauges_gauges_component__WEBPACK_IMPORTED_MODULE_8__["GaugesManager"].checkGaugeColor(ele, eles, colors)) {
                if (colors.fill) {
                    this.colorFill = colors.fill;
                }
                if (colors.stroke) {
                    this.colorStroke = colors.stroke;
                }
            }
            else {
                if (eles[0].attributes['fill']) {
                    clrfill = eles[0].attributes['fill'].value;
                    this.colorFill = clrfill;
                }
                if (eles[0].attributes['stroke']) {
                    clrstroke = eles[0].attributes['stroke'].value;
                    this.colorStroke = clrstroke;
                }
                // this.setFillColor(this.colorFill);
                // console.log('f:' + this.colorFill + ' s:' + this.colorStroke);
            }
        }
    };
    /**
     * load the view to svg-editor and canvas
     * @param view view to load
     */
    EditorComponent.prototype.loadView = function (view) {
        if (view) {
            this.clearEditor();
            // this.loadHmi();
            var svgcontent = '';
            var v = this.getView(view.name);
            if (v) {
                svgcontent = v.svgcontent;
            }
            if (svgcontent.length <= 0) {
                svgcontent = '<svg id="' + view.name + '" width="' + view.profile.width + '" height="' + view.profile.height +
                    '" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><g><title>Layer 1</title></g></svg>';
                // svgcontent = '<svg id="' + view.name + '" width="' + view.profile.width + '" height="' + view.profile.height +
                //     '" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><g><title>Layer 1</title>' +
                //     '<g transform="translate(267,179) scale(0.005) translate(-267,-179)" strokeWidth=\"2\" strokecolor=\"#000000\" fill=\"none\" type=\"svg-ext-switch\" id=\"svg_6\">' +
                //     '<path d="M1.07052,290.14898L1.0583,290.13018" id="svg_1" stroke-width="2" stroke="#000000" fill="none"/>' +
                //     '<path d="M1.0707,290.12L1.0707,290.12677" id="svg_2" stroke-width="2" stroke="#000000" fill="none"/>' +
                //     '<circle stroke_width="none" r="0.00165" cy="290.12825" cx="1.07065" id="svg_3" stroke-width="2" stroke="#000000" fill="none"/>' +
                //     '<path d="M1.0707,290.15724L1.0707,290.15046" id="svg_4" stroke-width="2" stroke="#000000" fill="none"/>' +
                //     '<circle transform="scale(1,-1)" r="0.00165" cy="-4777.94978" cx="17.44126" id="svg_5" stroke-width="2" stroke="#000000" fill="none"/>' +
                //     '</g>' +
                //     '</g></svg>';
            }
            this.winRef.nativeWindow.svgEditor.setDocProperty(view.name, view.profile.width, view.profile.height, view.profile.bkcolor);
            this.winRef.nativeWindow.svgEditor.setSvgString(svgcontent);
        }
    };
    /**
     * get view from hmi views list
     * @param name view name
     */
    EditorComponent.prototype.getView = function (name) {
        for (var i = 0; i < this.hmi.views.length; i++) {
            if (this.hmi.views[i].name === name) {
                return this.hmi.views[i];
            }
        }
        return null;
    };
    //#endregion
    //#region Svg-editor event and function interface 
    /**
     * set the mode to svg-editor (line,text,...)
     * @param mode mode to set
     */
    EditorComponent.prototype.setMode = function (mode) {
        this.currentMode = mode;
        this.winRef.nativeWindow.svgEditor.clickToSetMode(mode);
        // console.log('setmode: ' + mode);
    };
    /**
     * check with the current mode
     * @param mode mode to check
     */
    EditorComponent.prototype.isModeActive = function (mode) {
        return (this.currentMode === mode);
    };
    /**
     * clear svg-editor and the canvas
     */
    EditorComponent.prototype.clearEditor = function () {
        this.winRef.nativeWindow.svgEditor.clickClearAll();
    };
    /**
     * event from svg-editor by new selection svg element
     * @param event svg element
     */
    EditorComponent.prototype.onSelectedElement = function (event) {
        this.selectedElement = null;
        try {
            // to remove some strange effects
            if (document.activeElement !== document.body)
                document.activeElement.blur();
        }
        catch (e) { }
        // console.log('selected: ' + this.selectedElement);
        if (event) {
            for (var i = 0; i < event.length; i++) {
                console.log('selected: ' + event[i].id + ' ' + event[i].type);
            }
            if (event.length <= 1) {
                this.selectedElement = event[0];
                this.selectedElement.type = event[0].type;
                this.checkColors(this.selectedElement);
                this.checkGaugeInView(this.selectedElement);
            }
        }
    };
    /**
     * event from svg-editor: for every loaded extension
     * @param args
     */
    EditorComponent.prototype.onExtensionLoaded = function (args) {
        if (args && args.length) {
            // console.log('ext \'' + args[0] + '\' loaded');
        }
    };
    /**
     * event from svg-editor: change fill color
     * @param event color code
     */
    EditorComponent.prototype.onChangeFillColor = function (event) {
        this.setFillColor(event);
        this.checkMySelectedToSetColor(this.colorFill, null, this.winRef.nativeWindow.svgEditor.getSelectedElements());
    };
    /**
     * event change stroke color (from bottom color panel)
     * @param event color code
     */
    EditorComponent.prototype.onChangeStrokeColor = function (event) {
        this.setStrokeColor(event);
        this.checkMySelectedToSetColor(null, this.colorStroke, this.winRef.nativeWindow.svgEditor.getSelectedElements());
    };
    /**
     * event from svg-editor: svg element removed
     * @param ele svg element
     */
    EditorComponent.prototype.onRemoveElement = function (ele) {
        if (this.currentView && this.currentView.items && ele) {
            for (var i = 0; i < ele.length; i++) {
                if (this.currentView.items[ele[i].id]) {
                    delete this.currentView.items[ele[i].id];
                    // console.log('deleted :> ' + ele[i].id);
                }
            }
        }
    };
    /**
     * set the fill color (to svg-editor)
     * @param event color code
     */
    EditorComponent.prototype.setFillColor = function (event) {
        var color = event;
        if (color.charAt(0) === '#')
            color = color.slice(1);
        var alfa = 100;
        this.winRef.nativeWindow.svgEditor.setColor(color, alfa, "fill");
        // this.fillcolor;
    };
    /**
     * set stroke color (to svg-editor)
     * @param event color code
     */
    EditorComponent.prototype.setStrokeColor = function (event) {
        var color = event;
        if (color.charAt(0) === '#')
            color = color.slice(1);
        var alfa = 100;
        this.winRef.nativeWindow.svgEditor.setColor(color, alfa, "stroke");
        // this.fillcolor;
    };
    /**
     * set the marker to selected element (->, <->, <-)
     * @param id marker id (start,mid,end)
     * @param marker marker type
     */
    EditorComponent.prototype.onSetMarker = function (id, marker) {
        if (marker >= 0) {
            // console.log('marker select ' + id + ' ' + marker);
            this.winRef.nativeWindow.svgEditor.setMarker(id, marker);
        }
    };
    /**
     * align the selected element
     * @param letter align type (left,center,right,top,middle,bottom)
     */
    EditorComponent.prototype.onAlignSelected = function (letter) {
        this.winRef.nativeWindow.svgEditor.alignSelectedElements(letter.charAt(0));
    };
    /**
     * select the zoom area function
     */
    EditorComponent.prototype.onZoomSelect = function () {
        this.winRef.nativeWindow.svgEditor.clickZoom();
    };
    /**
     * show grid in canvas
     */
    EditorComponent.prototype.onShowGrid = function () {
        this.gridOn = this.gridOn = !this.gridOn;
        this.winRef.nativeWindow.svgEditor.clickExtension("view_grid");
        this.winRef.nativeWindow.svgEditor.enableGridSnapping(this.gridOn);
    };
    /**
     * add image to view
     * @param event selected file
     */
    EditorComponent.prototype.onSetImage = function (event) {
        if (event.target.files) {
            this.imagefile = 'assets/images/' + event.target.files[0].name;
            var self_1 = this;
            if (this.imagefile.split('.').pop().toLowerCase() === 'svg') {
                var reader = new FileReader();
                reader.onloadend = function (e) {
                    self_1.winRef.nativeWindow.svgEditor.setSvgImageToAdd(e.target.result);
                    self_1.setMode('svg-image');
                };
                reader.readAsText(event.target.files[0]);
            }
            else {
                this.getBase64Image(event.target.files[0], function (imgdata) {
                    var data = imgdata;
                    self_1.winRef.nativeWindow.svgEditor.promptImgURLcallback = data;
                    self_1.setMode('image');
                });
            }
        }
    };
    /**
     * convert image file to code to attach in svg
     * @param file image file
     * @param callback event for end load image
     */
    EditorComponent.prototype.getBase64Image = function (file, callback) {
        var fr = new FileReader();
        fr.onload = function () {
            callback(fr.result);
        };
        fr.readAsDataURL(file);
    };
    /**
     * set stroke to svg selected (joinmieter, joinround, joinbevel, capbutt, capsquare, capround)
     * @param option stroke type
     */
    EditorComponent.prototype.onSetStrokeOption = function (option) {
        this.winRef.nativeWindow.svgEditor.onSetStrokeOption(option);
    };
    /**
     * set shadow to svg selected
     * @param event shadow
     */
    EditorComponent.prototype.onSetShadowOption = function (event) {
        this.winRef.nativeWindow.svgEditor.onSetShadowOption(event);
    };
    /**
     * set font to svg selected
     * @param font font family
     */
    EditorComponent.prototype.onFontFamilyChange = function (font) {
        this.winRef.nativeWindow.svgEditor.setFontFamily(font);
    };
    /**
     * align the svg text (left,middle,right)
     * @param align type
     */
    EditorComponent.prototype.onTextAlignChange = function (align) {
        this.winRef.nativeWindow.svgEditor.setTextAlign(align);
    };
    EditorComponent.prototype.checkMySelectedToSetColor = function (bkcolor, color, elems) {
        _gauges_gauges_component__WEBPACK_IMPORTED_MODULE_8__["GaugesManager"].initElementColor(bkcolor, color, elems);
        // for (let i = 0; i < elems.length; i++) {
        //     HtmlButtonComponent.initElementColor(bkcolor, color, elems[i]);
        //     GaugeProgressComponent.initElementColor(bkcolor, color, elems[i]);
        // }
    };
    //#endregion
    //#region Toolbar Top Events
    /**
     * save current project and launch the Test in new Windows 'lab'
     */
    EditorComponent.prototype.onStartCurrent = function () {
        this.onSaveProject();
        this.winRef.nativeWindow.open('lab', 'MyTest', 'width=800,height=640,menubar=0');
    };
    //#endregion
    //#region Project Events
    /**
     * save Project
     */
    EditorComponent.prototype.onSaveProject = function () {
        if (this.currentView) {
            this.currentView.svgcontent = this.winRef.nativeWindow.svgEditor.getSvgString();
        }
        this.saveHmi();
    };
    //#endregion
    //#region View Events (Add/Rename/Delete/...)
    /**
     * Add View to Project with a default name View_[x]
     */
    EditorComponent.prototype.onAddView = function () {
        if (this.hmi.views) {
            var nn = "View_";
            var idx = 1;
            for (idx = 1; idx < this.hmi.views.length + 2; idx++) {
                var found = false;
                for (var i = 0; i < this.hmi.views.length; i++) {
                    if (this.hmi.views[i].name === nn + idx) {
                        found = true;
                        break;
                    }
                }
                if (!found)
                    break;
            }
            var v = new _models_hmi__WEBPACK_IMPORTED_MODULE_4__["View"]();
            if (this.hmi.views.length <= 0) {
                v.name = 'MainView';
            }
            else {
                v.name = nn + idx;
            }
            v.id = 'v_' + Date.now();
            this.hmi.views.push(v);
            this.onSelectView(v);
        }
    };
    /**
     * Delete the View from hmi.views list
     * @param view View to delete
     */
    EditorComponent.prototype.onDeleteView = function (view) {
        var _this = this;
        var dialogRef = this.dialog.open(_gui_helpers_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"], {
            minWidth: '350px',
            data: { msg: "Would you like to remove View '" + view.name + "' ?" },
            position: { top: '80px' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result && _this.hmi.views) {
                var toselect = null;
                for (var i = 0; i < _this.hmi.views.length; i++) {
                    if (_this.hmi.views[i].name == view.name) {
                        _this.hmi.views.splice(i, 1);
                        if (i > 0) {
                            toselect = _this.hmi.views[i - 1];
                        }
                        break;
                    }
                }
                // if (toselect) {
                //     this.onSelectView(toselect);
                // }
                _this.saveHmi();
            }
        });
    };
    /**
     * Rename the View (only name)
     * @param view View to rename
     */
    EditorComponent.prototype.onRenameView = function (view) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogDocName, {
            minWidth: '250px',
            data: { name: view.name }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            view.name = result.name;
            _this.saveHmi();
        });
    };
    /**
     * Edit View property
     * @param view View to change property (height, width, background)
     */
    EditorComponent.prototype.onPropertyView = function (view) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogDocProperty, {
            minWidth: '250px',
            data: { name: view.name, width: view.profile.width, height: view.profile.height, bkcolor: view.profile.bkcolor }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            view.profile.width = result.width;
            view.profile.height = result.height;
            view.profile.bkcolor = result.bkcolor;
            _this.winRef.nativeWindow.svgEditor.setDocProperty(view.name, view.profile.width, view.profile.height, view.profile.bkcolor);
            _this.saveHmi();
        });
        // this.winRef.nativeWindow.svgEditor.showDocProperties();
    };
    /**
     * select the view, save current vieww before
     * @param view selected view to load resource
     */
    EditorComponent.prototype.onSelectView = function (view) {
        if (this.currentView) {
            this.currentView.svgcontent = this.winRef.nativeWindow.svgEditor.getSvgString();
            // this.hmi.views[this.currentView].svgcontent = this.winRef.nativeWindow.svgEditor.getSvgString();
        }
        else {
            this.setFillColor(this.colorFill);
            // this.setFillColor(this.colorStroke);
        }
        if (this.currentView) {
            this.saveHmi();
        }
        this.currentView = view;
        localStorage.setItem("@frango.webeditor.currentview", this.currentView.name);
        this.loadView(this.currentView);
    };
    /**
     * check with the current view
     * @param view view to check
     */
    EditorComponent.prototype.isViewActive = function (view) {
        return (this.currentView && this.currentView.name == view.name);
    };
    /**
     * edit the layout property of project views
     */
    EditorComponent.prototype.onLayoutProperty = function () {
        var _this = this;
        // console.log('The Edit Device open');
        var templayout = null;
        if (this.hmi.layout) {
            templayout = JSON.parse(JSON.stringify(this.hmi.layout));
        }
        var dialogRef = this.dialog.open(_layout_property_layout_property_component__WEBPACK_IMPORTED_MODULE_7__["LayoutPropertyComponent"], {
            // minWidth: '700px',
            // minHeight: '700px',
            panelClass: 'dialog-property',
            data: { layout: templayout, views: this.hmi.views },
            position: { top: '80px' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.hmi.layout = JSON.parse(JSON.stringify(result.layout));
                _this.saveHmi();
            }
        });
    };
    //#endregion
    //#region Panels State
    /**
     * Load the left panels state copied in localstorage
     */
    EditorComponent.prototype.loadPanelState = function () {
        var ps = localStorage.getItem("@frango.webeditor.panelsState");
        this.panelsState.enabled = true;
        if (ps) {
            this.panelsState = JSON.parse(ps);
        }
    };
    /**
     * Save the panels state in localstorage (after every toggled)
     */
    EditorComponent.prototype.savePanelState = function () {
        if (this.panelsState.enabled) {
            localStorage.setItem("@frango.webeditor.panelsState", JSON.stringify(this.panelsState));
            console.log('set panelsState');
        }
    };
    //#endregion
    //#region Interactivity
    /**
     * to check from DOM and to control open close interaction panel
     * @param ele selected gauge element
     */
    EditorComponent.prototype.isInteractivtyEnabled = function (ele) {
        if (ele && ele.type) {
            return this.gaugesManager.isGauge(ele.type);
        }
        return false;
    };
    /**
     * callback to open edit gauge property form (from GaugeBase)
     * @param event
     */
    EditorComponent.prototype.onGaugeEdit = function (event) {
        var _this = this;
        // console.log('edit gauge: ' + event); // [i].id + ' ' + event[i].type);
        var settings = this.gaugePanelComponent.settings;
        this.openEditGauge(settings, function (data) {
            _this.setGaugeSettings(data);
        });
    };
    /**
     * callback to open edit gauge property form (from selected element context menu)
     */
    EditorComponent.prototype.onGaugeEditEx = function () {
        var _this = this;
        setTimeout(function () {
            _this.gaugePanelComponent.onEdit();
        }, 500);
    };
    EditorComponent.prototype.isWithEvents = function (type) {
        return this.gaugesManager.isWithEvents(type);
    };
    EditorComponent.prototype.openEditGauge = function (settings, callback) {
        var _this = this;
        // console.log('The Edit Gauge open');
        var tempsettings = JSON.parse(JSON.stringify(settings));
        var hmi = this.projectService.getHmi();
        var dlgType = _gauges_gauges_component__WEBPACK_IMPORTED_MODULE_8__["GaugesManager"].getEditDialogTypeToUse(settings.type);
        var eventsSupported = this.isWithEvents(settings.type);
        var defaultValue = _gauges_gauges_component__WEBPACK_IMPORTED_MODULE_8__["GaugesManager"].getDefaultValue(settings.type);
        // settings.property = JSON.parse(settings.property);
        var dialogRef = this.dialog.open(_gauges_gauge_property_gauge_property_component__WEBPACK_IMPORTED_MODULE_6__["GaugePropertyComponent"], {
            // data: { settings: tempsettings, signals: this.signals, views: hmi.views }
            minWidth: '700px',
            minHeight: '700px',
            panelClass: 'dialog-property',
            data: {
                settings: tempsettings, devices: Object.values(this.projectService.getDevices()),
                views: hmi.views, dlgType: dlgType, withEvents: eventsSupported, default: defaultValue
            },
            position: { top: '80px' }
            // data: data
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The Edit Gauge was closed');
            if (result) {
                callback(result.settings);
                if (_this.gaugesManager.isToInitInEditor(result.settings)) {
                    _this.gaugesManager.checkElementToInit(result.settings);
                }
            }
            // } else {
            //   settings = JSON.parse(JSON.stringify(oldvalue));
            // }
        });
    };
    //#endregion
    EditorComponent.prototype.isWithShadow = function () {
        if (this.selectedElement) {
        }
        return false;
    };
    EditorComponent.prototype.fileNew = function () {
    };
    EditorComponent.prototype.checkValid = function (hmi) {
        if (!hmi.views) {
            hmi.views = [];
            return false;
        }
        return true;
    };
    EditorComponent.prototype.clearSelection = function () {
        this.winRef.nativeWindow.svgEditor.clearSelection();
    };
    EditorComponent.prototype.cloneElement = function () {
        this.winRef.nativeWindow.svgEditor.clickExtension("view_grid");
    };
    EditorComponent.prototype.flipSelected = function (fliptype) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('gaugepanel'),
        __metadata("design:type", _gauges_gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_9__["GaugeBaseComponent"])
    ], EditorComponent.prototype, "gaugePanelComponent", void 0);
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"],
            _helpers_windowref__WEBPACK_IMPORTED_MODULE_5__["WindowRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _gauges_gauges_component__WEBPACK_IMPORTED_MODULE_8__["GaugesManager"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], EditorComponent);
    return EditorComponent;
}());

var DialogDocProperty = /** @class */ (function () {
    function DialogDocProperty(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.defaultColor = _helpers_utils__WEBPACK_IMPORTED_MODULE_10__["Utils"].defaultColor;
    }
    DialogDocProperty.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogDocProperty = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-doc-property',
            template: __webpack_require__(/*! ./docproperty.dialog.html */ "./src/app/editor/docproperty.dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogDocProperty);
    return DialogDocProperty;
}());

var DialogDocName = /** @class */ (function () {
    function DialogDocName(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogDocName.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogDocName = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-doc-name',
            template: __webpack_require__(/*! ./docname.dialog.html */ "./src/app/editor/docname.dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogDocName);
    return DialogDocName;
}());

//#region Model Help
// export class PanelState {
//     width: Number = 640;
//     height: Number = 480;
//     bkcolor: String = '';
// }
//#endregion


/***/ }),

/***/ "./src/app/editor/layout-property/layout-property.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/editor/layout-property/layout-property.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.layout-menu-item-icon {\r\n    /* position: absolute; */\r\n    font-size: 17px;\r\n    height: 18px;\r\n    width: 18px;\r\n    /* color: rgba(255,255,255,0.8); */\r\n    cursor:pointer;\r\n}\r\n.layout-menu-item-edit {\r\n    /* bottom: 0px; */\r\n    /* right: 2px; */\r\n}\r\n.layout-menu-item-delete {\r\n    /* top: 2px; */\r\n    /* right: 2px; */\r\n    /* font-size: 17px; */\r\n}\r\n.layout-menu-item-link {\r\n    /* min-width: 150px; */\r\n    /* color: rgba(0,0,0,0.3); */\r\n    font-size: 14px;\r\n    white-space: nowrap;\r\n  }"

/***/ }),

/***/ "./src/app/editor/layout-property/layout-property.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/editor/layout-property/layout-property.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;min-height: 650px;min-width: 950px;position: relative;padding-bottom: 40px\">\r\n    <h1 mat-dialog-title style=\"display:inline-block;padding-top: 14px; margin-bottom: 0px !important;\">Layout</h1>\r\n    <mat-icon (click)=\"onNoClick()\" style=\"float:right;cursor:pointer;color:gray;position: relative; top: 10px; right: 0px\">clear</mat-icon>\r\n    <mat-tab-group style=\"width: 100%;height: 100%\">\r\n        <mat-tab label=\"General\">\r\n            <div class=\"my-form-field\" style=\"display: inline-block;margin-top: 25px;\">\r\n                <span>Start View:</span>\r\n                <mat-select [(value)]=\"data.layout.start\" style=\"width: 400px\">\r\n                    <mat-option *ngFor=\"let view of data.views\" [value]=\"view.id\">\r\n                        {{ view.name }}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </div>\r\n\r\n            <!-- <div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 15px;\">\r\n                <div style=\"display: block;\">\r\n                    <div class=\"my-form-field\">\r\n                        <span>Name</span>\r\n                        <input [(ngModel)]=\"data.settings.name\" style=\"width: 220px\" type=\"text\">\r\n                    </div>\r\n                    <div class=\"toolbox\" *ngIf=\"isToolboxToShow()\">\r\n                        <button mat-icon-button (click)=\"onAddInput()\">\r\n                            <mat-icon>add_circle_outline</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button (click)=\"slideView = !slideView;onRangeViewToggle()\" *ngIf=\"isRangeToShow()\">\r\n                            <mat-icon class=\"header-icon\" *ngIf=\"slideView\">toll</mat-icon>\r\n                            <mat-icon class=\"header-icon\" *ngIf=\"!slideView\">input</mat-icon>\r\n                        </button>\r\n                        <button mat-icon-button (click)=\"withAlarm = !withAlarm;onAlarmToggle();\" *ngIf=\"isAlarmToShow()\">\r\n                            <mat-icon class=\"header-icon\" *ngIf=\"!withAlarm\">notifications</mat-icon>\r\n                            <mat-icon class=\"header-icon\" *ngIf=\"withAlarm\">notifications_off</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div mat-dialog-content style=\"overflow: hidden; width:100%\">\r\n                    <flex-head [data]=\"data\" [property]=\"property\" #flexhead></flex-head>\r\n                </div>\r\n            </div> -->\r\n        </mat-tab>\r\n        <mat-tab label=\"Navigation (Side Manu)\">\r\n            <div style=\"display: inline-block;margin-top: 10px;width:50%; min-height: 500px; overflow-y: auto; height: 620px\">\r\n                <div>\r\n                    <button mat-icon-button>\r\n                        <mat-icon aria-label=\"Menu\">menu</mat-icon>\r\n                    </button>\r\n                    <div style=\"display: inline-block;padding-left: 140px\">\r\n                        <button mat-icon-button (click)=\"onAddMenuItem()\">\r\n                            <mat-icon aria-label=\"Add\">control_point</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"sidenav-menu\" style=\"height: calc(100% - 50px);\" [ngClass]=\"'sidenav-menu-' + data.layout.navigation.type\">\r\n                    <mat-list dndDropzone [dndHorizontal]=\"layout.dndHorizontal\" dndEffectAllowed=\"copyMove\" (dndDrop)=\"onDrop($event, draggableListLeft)\"\r\n                        class=\"dndList\" style=\"padding-top: 10px; background-color: rgba(244,245,247, 1)\">\r\n\r\n                        <mat-list-item dndPlaceholderRef class=\"dndPlaceholder\">\r\n                        </mat-list-item>\r\n\r\n                        <mat-list-item *ngFor=\"let item of draggableListLeft; let i = index\" [dndDraggable]=\"item\"\r\n                            [dndEffectAllowed]=\"'move'\" (dndStart)=\"onDragStart($event)\" (dndMoved)=\"onDragged(item, draggableListLeft, 'move')\"\r\n                            (dndCanceled)=\"onDragged(item, draggableListLeft, 'none')\" (dndEnd)=\"onDragEnd($event)\"\r\n                            [ngClass]=\"'menu-item-' + data.layout.navigation.type\">\r\n                            <button type=\"button\" mat-button class=\"sidenav-btn\" [ngSwitch]=\"data.layout.navigation.type\" style=\"cursor: move;\">\r\n                                <!-- <mat-icon *ngIf=\"mode.value === navMode.icon || mode.value === navMode.block\">{{item.icon}}</mat-icon> -->\r\n                                <div *ngSwitchCase=\"'icon'\" class=\"manu-item-content-icon\">\r\n                                    <mat-icon>{{item.icon}}</mat-icon>\r\n                                </div>\r\n                                <div *ngSwitchCase=\"'text'\" class=\"manu-item-content-text\">\r\n                                    <span>{{item.text}}</span>\r\n                                </div>\r\n                                <div *ngSwitchCase=\"'block'\" class=\"manu-item-content-block\">\r\n                                    <mat-icon style=\"display: block;\">{{item.icon}}</mat-icon>\r\n                                    <span>{{item.text}}</span>\r\n                                </div>\r\n                                <div *ngSwitchCase=\"'inline'\" class=\"manu-item-content-inline\">\r\n                                    <mat-icon style=\"display: inline-block\">{{item.icon}}</mat-icon>\r\n                                    <span style=\"display: inline-block\">{{item.text}}</span>\r\n                                </div>\r\n                            </button>\r\n                            <div style=\"padding-left:15px\">\r\n                                <div style=\"display: block;width: 50px;\">\r\n                                    <mat-icon (click)=\"onAddMenuItem(item)\" class=\"layout-menu-item-icon layout-menu-item-edit\">edit</mat-icon>\r\n                                    <mat-icon (click)=\"onRemoveMenuItem(i, item)\" class=\"layout-menu-item-icon layout-menu-item-delete\">clear</mat-icon>\r\n                                </div>\r\n                                <div class=\"layout-menu-item-link; display: block\">{{getViewName(item)}}</div>\r\n                            </div>\r\n                        </mat-list-item>\r\n                    </mat-list>\r\n                </div>\r\n            </div>\r\n            <div style=\"display: inline-block;margin-top: 25px;margin-left: 10px;top: 0px;position: absolute;\">\r\n                <div class=\"my-form-field\" style=\"display: block;\">\r\n                    <span>Side Mode:</span>\r\n                    <mat-select [(value)]=\"data.layout.navigation.mode\" style=\"width: 300px\">\r\n                        <mat-option *ngFor=\"let mode of navMode | enumToArray\" [value]=\"mode.key\">\r\n                            {{ mode.value }}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </div>\r\n                <div class=\"my-form-field\" style=\"display: block; margin-top: 10px\">\r\n                    <span>Type:</span>\r\n                    <mat-select [(value)]=\"data.layout.navigation.type\" style=\"width: 300px\">\r\n                        <mat-option *ngFor=\"let type of navType | enumToArray\" [value]=\"type.key\">\r\n                            {{ type.value }}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- <div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 15px;\">\r\n                <div style=\"display: block;\">\r\n                    <div class=\"toolbox\">\r\n                        <button mat-icon-button (click)=\"onAddEvent()\">\r\n                            <mat-icon>add_circle_outline</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div mat-dialog-content style=\"overflow: hidden; width:100%\">\r\n                    <flex-event [property]=\"property\" [views]=\"views\" #flexevent *ngIf=\"eventsSupported\" style=\"padding-bottom: 5px\"></flex-event>\r\n                </div>\r\n            </div> -->\r\n        </mat-tab>\r\n        <mat-tab label=\"Header\">\r\n            <!-- <div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 15px;\">\r\n                        <div style=\"display: block;\">\r\n                            <div class=\"toolbox\">\r\n                                <button mat-icon-button (click)=\"onAddEvent()\">\r\n                                    <mat-icon>add_circle_outline</mat-icon>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div mat-dialog-content style=\"overflow: hidden; width:100%\">\r\n                            <flex-event [property]=\"property\" [views]=\"views\" #flexevent *ngIf=\"eventsSupported\" style=\"padding-bottom: 5px\"></flex-event>\r\n                        </div>\r\n                    </div> -->\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n    <div mat-dialog-actions style=\"display: inline-block; position: absolute; bottom: 10px; right: 10px\">\r\n        <button mat-raised-button [mat-dialog-close]=\"\">CANCEL</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onOkClick\" [mat-dialog-close]=\"data\" cdkFocusInitial>OK</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/editor/layout-property/layout-property.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/editor/layout-property/layout-property.component.ts ***!
  \*********************************************************************/
/*! exports provided: LayoutPropertyComponent, DialogMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPropertyComponent", function() { return LayoutPropertyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogMenuItem", function() { return DialogMenuItem; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _models_hmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_models/hmi */ "./src/app/_models/hmi.ts");
/* harmony import */ var _helpers_define__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_helpers/define */ "./src/app/_helpers/define.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var LayoutPropertyComponent = /** @class */ (function () {
    function LayoutPropertyComponent(data, dialog) {
        this.data = data;
        this.dialog = dialog;
        this.draggableListLeft = [];
        this.horizontalLayoutActive = false;
        this.verticalLayout = {
            container: "row",
            list: "column",
            dndHorizontal: false
        };
        this.horizontalLayout = {
            container: "row",
            list: "row",
            dndHorizontal: true
        };
        if (!data.layout) {
            data.layout = new _models_hmi__WEBPACK_IMPORTED_MODULE_2__["LayoutSettings"]();
        }
        this.startView = data.layout.start;
        this.sideMode = data.layout.navigation.mode;
        if (!data.layout.navigation.items) {
            data.layout.navigation.items = [];
        }
        this.draggableListLeft = data.layout.navigation.items;
        this.setHorizontalLayout(this.horizontalLayoutActive);
    }
    LayoutPropertyComponent.prototype.ngOnInit = function () {
        this.navMode = _models_hmi__WEBPACK_IMPORTED_MODULE_2__["NaviModeType"];
        this.navType = _models_hmi__WEBPACK_IMPORTED_MODULE_2__["NaviItemType"];
    };
    LayoutPropertyComponent.prototype.onAddMenuItem = function (item) {
        var _this = this;
        var eitem = new _models_hmi__WEBPACK_IMPORTED_MODULE_2__["NaviItem"]();
        if (item) {
            eitem = JSON.parse(JSON.stringify(item));
        }
        var views = JSON.parse(JSON.stringify(this.data.views));
        views.unshift({ id: '', name: '' });
        var dialogRef = this.dialog.open(DialogMenuItem, {
            minWidth: '350px',
            data: { item: eitem, views: views },
            position: { top: '90px' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                if (item) {
                    item.icon = result.item.icon;
                    item.text = result.item.text;
                    item.view = result.item.view;
                    item.link = result.item.link;
                    if (item.view) {
                        item.link = '';
                    }
                }
                else {
                    var nitem = new _models_hmi__WEBPACK_IMPORTED_MODULE_2__["NaviItem"]();
                    nitem.icon = result.item.icon;
                    nitem.text = result.item.text;
                    nitem.view = result.item.view;
                    nitem.link = result.item.link;
                    if (nitem.view) {
                        nitem.link = '';
                    }
                    _this.draggableListLeft.push(nitem);
                }
            }
        });
        // this.winRef.nativeWindow.svgEditor.showDocProperties();
    };
    LayoutPropertyComponent.prototype.onRemoveMenuItem = function (index, item) {
        this.draggableListLeft.splice(index, 1);
    };
    LayoutPropertyComponent.prototype.onDragStart = function (event) {
        this.currentDraggableEvent = event;
    };
    LayoutPropertyComponent.prototype.setHorizontalLayout = function (horizontalLayoutActive) {
        this.layout = (horizontalLayoutActive) ? this.horizontalLayout : this.verticalLayout;
    };
    LayoutPropertyComponent.prototype.onDragged = function (item, list, effect) {
        if (effect === "move") {
            var index = list.indexOf(item);
            list.splice(index, 1);
        }
    };
    LayoutPropertyComponent.prototype.onDragEnd = function (event) {
        this.currentDraggableEvent = event;
    };
    LayoutPropertyComponent.prototype.onDrop = function (event, list) {
        if (list && (event.dropEffect === "copy" || event.dropEffect === "move")) {
            var index = event.index;
            if (typeof index === "undefined") {
                index = list.length;
            }
            list.splice(index, 0, event.data);
        }
    };
    LayoutPropertyComponent.prototype.onOkClick = function () {
        var _this = this;
        this.data.layout.navigation.items = [];
        this.draggableListLeft.forEach(function (item) {
            var nitem = new _models_hmi__WEBPACK_IMPORTED_MODULE_2__["NaviItem"]();
            nitem.icon = item.icon;
            nitem.text = item.text;
            nitem.view = item.view;
            nitem.link = item.link;
            _this.data.layout.navigation.items.push(nitem);
        });
    };
    LayoutPropertyComponent.prototype.getViewName = function (vid) {
        if (vid.view) {
            var view = this.data.views.find(function (x) { return x.id === vid.view; });
            if (view) {
                return view.name;
            }
        }
        else if (vid.link) {
            return vid.link;
        }
        else {
            return '';
        }
    };
    LayoutPropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout-property',
            template: __webpack_require__(/*! ./layout-property.component.html */ "./src/app/editor/layout-property/layout-property.component.html"),
            styles: [__webpack_require__(/*! ./layout-property.component.css */ "./src/app/editor/layout-property/layout-property.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], LayoutPropertyComponent);
    return LayoutPropertyComponent;
}());

var DialogMenuItem = /** @class */ (function () {
    function DialogMenuItem(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // defaultColor = Utils.defaultColor;
        this.icons = _helpers_define__WEBPACK_IMPORTED_MODULE_3__["Define"].materialIcons;
    }
    DialogMenuItem.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogMenuItem.prototype.onOkClick = function () {
        this.dialogRef.close(true);
    };
    DialogMenuItem = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-menuitem',
            template: __webpack_require__(/*! ./menuitem.dialog.html */ "./src/app/editor/layout-property/menuitem.dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogMenuItem);
    return DialogMenuItem;
}());



/***/ }),

/***/ "./src/app/editor/layout-property/menuitem.dialog.html":
/*!*************************************************************!*\
  !*** ./src/app/editor/layout-property/menuitem.dialog.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h1 mat-dialog-title style=\"display:inline-block\" mat-dialog-draggable>Menu Item</h1>\r\n    <div mat-dialog-content>\r\n        <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n            <span>Icon</span>\r\n            <mat-select [(value)]=\"data.item.icon\" style=\"width: 60px; height: 30px\" #iconsel>\r\n                <mat-select-trigger>\r\n                    <mat-icon>{{iconsel.value}}</mat-icon>\r\n                </mat-select-trigger>\r\n                <mat-option *ngFor=\"let icon of icons\" [value]=\"icon\">\r\n                    <mat-icon class=\"\">{{ icon }}</mat-icon>\r\n                </mat-option>\r\n            </mat-select>\r\n        </div>\r\n        <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n            <span>Text</span>\r\n            <input [(ngModel)]=\"data.item.text\" type=\"text\" style=\"width:100%\">\r\n        </div>\r\n        <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n            <span>View by Click</span>\r\n            <mat-select [(value)]=\"data.item.view\" style=\"width: 300px\">\r\n                <mat-option *ngFor=\"let view of data.views\" [value]=\"view.id\">\r\n                    {{ view.name }}\r\n                </mat-option>\r\n            </mat-select>\r\n        </div>\r\n        <div class=\"my-form-field\" style=\"display: block;margin-bottom: 10px;\">\r\n            <span>Link by Click</span>\r\n            <input [(ngModel)]=\"data.item.link\" type=\"text\" style=\"width:100%\" [readonly]=\"data.item.view\">\r\n        </div>        \r\n    </div>\r\n    <div mat-dialog-actions style=\"float:right; margin-bottom:0px;padding-bottom:0px\">\r\n        <button mat-raised-button (click)=\"onNoClick()\">CANCEL</button>\r\n        <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"data\" cdkFocusInitial>OK</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/fuxa-view/fuxa-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/fuxa-view/fuxa-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view-container {\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\n.fab-card {\r\n    position: absolute;\r\n    width: 1300px;\r\n    height: 800px;\r\n    /* background-color:black; */\r\n    /* box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); */\r\n    box-shadow: 0px 1px 4px 1px #888888;\r\n}\r\n\r\n.card-close {\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    height: 22px;\r\n    width: 100%;\r\n    color: rgba(0,0,0,0.7);\r\n    background-color: transparent;\r\n    font-size: 12px;\r\n    cursor: move !important;\r\n}\r\n\r\n.card-close i {\r\n    float: right;\r\n}\r\n\r\n.dialog-modal {\r\n    /* display: none; */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n\r\n.dialog-modal-content {\r\n    /* background-color: #fefefe; */\r\n    margin: 15% auto; /*15% from the top and centered */\r\n    /* padding: 20px; */\r\n    border: 1px solid #888;\r\n    width: 80%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n.dialog-modal-close {\r\n    position: relative;\r\n    top: 0px;\r\n    right: 0px;\r\n    height: 22px;\r\n    width: 100%;\r\n    color: rgba(0,0,0,0.7);\r\n    background-color: transparent;\r\n    font-size: 12px;\r\n    cursor: move !important;\r\n}\r\n\r\n.dialog-modal-close i {\r\n    float: right;\r\n}"

/***/ }),

/***/ "./src/app/fuxa-view/fuxa-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/fuxa-view/fuxa-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #dataContainer class=\"view-container\">\r\n</div>\r\n<div class=\"fab-card\" draggable [draggableHeight]=\"22\" *ngFor=\"let card of cards; let i = index\" [style.top]=\"card.y +'px'\"\r\n    [style.left]=\"card.x + 'px'\" [style.width]=\"card.width +'px'\" [style.height]=\"getCardHeight(card.height) + 'px'\">\r\n    <a (click)=\"onCloseCard(card);\" class=\"card-close\">\r\n        <i class=\"material-icons\" style=\"font-size: 22px; cursor: pointer;\">close</i>\r\n    </a>\r\n    <app-fuxa-view [view]=\"card.view\" [hmi]=\"hmi\" [gaugesManager]=\"gaugesManager\" [parentcards]=\"cards\"></app-fuxa-view>\r\n</div>\r\n<div *ngIf=\"dialog\" class=\"dialog-modal\">\r\n    <div [style.width]=\"dialog.width +'px'\" [style.height]=\"dialog.height + 'px'\" class=\"dialog-modal-content\" [style.background-color]=\"dialog.bkcolor\">\r\n        <a (click)=\"onCloseDialog();\" class=\"dialog-modal-close\">\r\n            <i class=\"material-icons\" style=\"font-size: 22px; cursor: pointer;\">close</i>\r\n        </a>\r\n        <app-fuxa-view [view]=\"dialog.view\" [hmi]=\"hmi\" [gaugesManager]=\"gaugesManager\" ></app-fuxa-view>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/fuxa-view/fuxa-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/fuxa-view/fuxa-view.component.ts ***!
  \**************************************************/
/*! exports provided: FuxaViewComponent, CardModel, DialogModalModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuxaViewComponent", function() { return FuxaViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModel", function() { return CardModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModalModel", function() { return DialogModalModel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_hmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_models/hmi */ "./src/app/_models/hmi.ts");
/* harmony import */ var _gauges_gauges_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gauges/gauges.component */ "./src/app/gauges/gauges.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuxaViewComponent = /** @class */ (function () {
    function FuxaViewComponent(el) {
        this.el = el;
        this.cards = [];
    }
    FuxaViewComponent.prototype.ngOnInit = function () {
        try {
        }
        catch (e) {
            console.log(e);
        }
    };
    FuxaViewComponent.prototype.ngAfterViewInit = function () {
        this.loadHmi(this.view);
        try {
            this.gaugesManager.emitBindedSignals(this.id);
        }
        catch (e) {
        }
    };
    FuxaViewComponent.prototype.ngOnDestroy = function () {
        this.gaugesManager.unbindGauge(this.id);
        try {
            if (this.subscriptionOnChange) {
                this.subscriptionOnChange.unsubscribe();
            }
        }
        catch (e) {
        }
    };
    FuxaViewComponent.prototype.loadHmi = function (view) {
        if (this.id) {
            this.gaugesManager.unbindGauge(this.id);
        }
        if (view) {
            this.id = view.id;
            this.view = view;
            this.dataContainer.nativeElement.innerHTML = view.svgcontent;
            if (view.profile.bkcolor) {
                this.dataContainer.nativeElement.style.backgroundColor = view.profile.bkcolor;
            }
        }
        this.loadWatch(this.view);
    };
    FuxaViewComponent.prototype.loadWatch = function (view) {
        var _this = this;
        if (view && view.items) {
            // this.gaugesManager.initGaugesMap();
            for (var key in view.items) {
                console.log(key);
                this.gaugesManager.bindGauge(this.id, view.items[key], function (gatobindclick) {
                    _this.onBindClick(gatobindclick);
                }, function (gatobindhtmlevent) {
                    _this.onBindHtmlEvent(gatobindhtmlevent);
                });
            }
            var self_1 = this;
            this.subscriptionOnChange = this.gaugesManager.onchange.subscribe(function (sig) {
                console.log('lab sig ' + sig.id + ' ' + sig.value);
                try {
                    var gas = self_1.gaugesManager.getGaugeSettings(self_1.id, sig.id);
                    if (gas) {
                        for (var i = 0; i < gas.length; i++) {
                            var ga = gas[i];
                            // console.log('gaid: ' + ga.id);
                            var svgeles = _this.getSvgElements(ga.id);
                            for (var y = 0; y < svgeles.length; y++) {
                                _this.gaugesManager.processValue(ga, svgeles[y], sig);
                            }
                        }
                    }
                }
                catch (err) {
                }
            });
        }
    };
    FuxaViewComponent.prototype.onBindClick = function (ga) {
        var self = this;
        var svgele = this.getSvgElement(ga.id);
        if (svgele) {
            svgele.click(function (ev) {
                console.log('click -');
                var event = self.gaugesManager.getBindClick(ga);
                if (event && event.length > 0 && event[0].action && event[0].actparam) {
                    var actindex = Object.keys(_models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeEventActionType"]).indexOf(event[0].action);
                    if (Object.values(_models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeEventActionType"]).indexOf(_models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeEventActionType"].onpage) === actindex) {
                        self.loadPage(ev, event[0].actparam);
                    }
                    else if (Object.values(_models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeEventActionType"]).indexOf(_models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeEventActionType"].onwindow) === actindex) {
                        self.onOpenCard(ga.id, ev, event[0].actparam);
                    }
                    else if (Object.values(_models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeEventActionType"]).indexOf(_models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeEventActionType"].ondialog) === actindex) {
                        self.openDialog(ev, event[0].actparam);
                    }
                    else if (Object.values(_models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeEventActionType"]).indexOf(_models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeEventActionType"].onSetValue) === actindex) {
                        self.onSetValue(ga, event[0].actparam);
                    }
                    // self.createComponent(event[0].name, ev.x, ev.y);
                }
            });
        }
    };
    FuxaViewComponent.prototype.onBindHtmlEvent = function (htmlevent) {
        var self = this;
        // let htmlevent = this.getHtmlElement(ga.id);
        if (htmlevent.type === 'key-enter') {
            htmlevent.dom.onkeypress = function (ev) {
                if (ev.keyCode === 13) {
                    console.log('click sig ' + htmlevent.dom.id + ' ' + htmlevent.dom.value);
                    htmlevent.dbg = 'key pressed ' + htmlevent.dom.id + ' ' + htmlevent.dom.value;
                    htmlevent.id = htmlevent.dom.id;
                    htmlevent.value = htmlevent.dom.value;
                    self.gaugesManager.putEvent(htmlevent);
                }
            };
        }
        else if (htmlevent.type === 'change') {
            htmlevent.dom.onchange = function (ev) {
                console.log('change sig ' + htmlevent.dom.id + ' ' + htmlevent.dom.value);
                htmlevent.dbg = 'key pressed ' + htmlevent.dom.id + ' ' + htmlevent.dom.value;
                htmlevent.id = htmlevent.dom.id;
                htmlevent.value = htmlevent.dom.value;
                self.gaugesManager.putEvent(htmlevent);
            };
        }
    };
    FuxaViewComponent.prototype.getView = function (viewref) {
        var view;
        for (var i = 0; this.hmi.views.length; i++) {
            if (this.hmi.views[i] && this.hmi.views[i].id === viewref) {
                view = this.hmi.views[i];
                break;
            }
        }
        return view;
    };
    FuxaViewComponent.prototype.getSvgElements = function (svgid) {
        var ele = document.getElementsByTagName('svg');
        var result = [];
        for (var i = 0; i < ele.length; i++) {
            var svgItems = ele[i].getElementById(svgid);
            if (svgItems) {
                result.push(SVG.adopt(svgItems));
            }
        }
        return result;
    };
    FuxaViewComponent.prototype.getSvgElement = function (svgid) {
        var ele = document.getElementsByTagName('svg');
        for (var i = 0; i < ele.length; i++) {
            var svgItems = ele[i].getElementById(svgid);
            if (svgItems) {
                return SVG.adopt(svgItems);
            }
        }
    };
    FuxaViewComponent.prototype.loadPage = function (event, viewref) {
        console.log('loadPage ' + viewref);
        var view = this.getView(viewref);
        if (view) {
            this.loadHmi(view);
        }
    };
    FuxaViewComponent.prototype.openDialog = function (event, viewref) {
        console.log('openDialog ' + viewref);
        var view = this.getView(viewref);
        if (!view) {
            return;
        }
        this.dialog = new DialogModalModel(viewref);
        this.dialog.width = view.profile.width;
        this.dialog.height = view.profile.height + 26;
        this.dialog.view = view;
        this.dialog.bkcolor = 'trasparent';
        if (view.profile.bkcolor) {
            this.dialog.bkcolor = view.profile.bkcolor;
        }
    };
    FuxaViewComponent.prototype.onOpenCard = function (id, event, viewref) {
        console.log('open card' + viewref);
        var view = this.getView(viewref);
        if (!view) {
            return;
        }
        // check existing card
        var card = null;
        this.cards.forEach(function (c) {
            if (c.id === id) {
                card = c;
            }
        });
        if (card) {
            return;
        }
        card = new CardModel(id);
        card.x = event.clientX;
        card.y = event.clientY;
        card.width = view.profile.width;
        card.height = view.profile.height;
        card.view = view;
        if (this.parentcards) {
            this.parentcards.push(card);
        }
        else {
            this.cards.push(card);
        }
    };
    FuxaViewComponent.prototype.onCloseCard = function (card) {
        this.cards.splice(this.cards.indexOf(card), 1);
        console.log('closed' + card.id);
    };
    FuxaViewComponent.prototype.onCloseDialog = function () {
        delete this.dialog;
        console.log('dialog closed' + this.dialog.id);
    };
    FuxaViewComponent.prototype.onSetValue = function (ga, paramValue) {
        if (ga.property && ga.property.variableId) {
            console.log('onSetValue ' + ga.property.variableId);
            this.gaugesManager.putSignalValue(ga.property.variableId, paramValue);
        }
    };
    FuxaViewComponent.prototype.getCardHeight = function (height) {
        return parseInt(height) + 4;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FuxaViewComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_hmi__WEBPACK_IMPORTED_MODULE_1__["View"])
    ], FuxaViewComponent.prototype, "view", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_hmi__WEBPACK_IMPORTED_MODULE_1__["Hmi"])
    ], FuxaViewComponent.prototype, "hmi", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _gauges_gauges_component__WEBPACK_IMPORTED_MODULE_2__["GaugesManager"])
    ], FuxaViewComponent.prototype, "gaugesManager", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FuxaViewComponent.prototype, "parentcards", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('dataContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], FuxaViewComponent.prototype, "dataContainer", void 0);
    FuxaViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fuxa-view',
            template: __webpack_require__(/*! ./fuxa-view.component.html */ "./src/app/fuxa-view/fuxa-view.component.html"),
            styles: [__webpack_require__(/*! ./fuxa-view.component.css */ "./src/app/fuxa-view/fuxa-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FuxaViewComponent);
    return FuxaViewComponent;
}());

var CardModel = /** @class */ (function () {
    function CardModel(id) {
        this.id = id;
    }
    return CardModel;
}());

var DialogModalModel = /** @class */ (function () {
    function DialogModalModel(id) {
        this.id = id;
    }
    return DialogModalModel;
}());



/***/ }),

/***/ "./src/app/gauges/controls/gauge-progress/gauge-progress.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/gauges/controls/gauge-progress/gauge-progress.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/controls/gauge-progress/gauge-progress.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/gauges/controls/gauge-progress/gauge-progress.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/controls/gauge-progress/gauge-progress.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/gauges/controls/gauge-progress/gauge-progress.component.ts ***!
  \****************************************************************************/
/*! exports provided: GaugeProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeProgressComponent", function() { return GaugeProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gauge-base/gauge-base.component */ "./src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_helpers/utils */ "./src/app/_helpers/utils.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GaugeProgressComponent = /** @class */ (function (_super) {
    __extends(GaugeProgressComponent, _super);
    function GaugeProgressComponent() {
        return _super.call(this) || this;
    }
    GaugeProgressComponent.prototype.ngOnInit = function () {
    };
    GaugeProgressComponent.getSignal = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        return res;
    };
    GaugeProgressComponent.processValue = function (ga, svgele, sig) {
        // console.log('gaid value: ' + ga.id);
        if (svgele.node && svgele.node.children && svgele.node.children.length === 3 && ga.property && ga.property.ranges.length > 0) {
            var gap = ga.property.ranges[0];
            var g = svgele.node.children[0];
            var val = parseFloat(sig.value);
            var rectBase = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].searchTreeStartWith(svgele.node, this.prefixA);
            var heightBase = parseFloat(rectBase.getAttribute('height'));
            var yBase = parseFloat(rectBase.getAttribute('y'));
            var rect = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].searchTreeStartWith(svgele.node, this.prefixB);
            if (rectBase && rect) {
                var vtoy = (heightBase / (gap.max - gap.min)) * val;
                rect.setAttribute('y', yBase + heightBase - vtoy);
                rect.setAttribute('height', vtoy);
                if (gap.style[1]) {
                    var htmlValue = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].searchTreeStartWith(svgele.node, this.prefixValue);
                    if (htmlValue) {
                        htmlValue.innerHTML = val;
                        if (gap.text) {
                            htmlValue.innerHTML += ' ' + gap.text;
                        }
                        htmlValue.style.top = (heightBase - vtoy - 7).toString() + 'px';
                        // htmlValue.style.top = 'calc(100% - ' + (heightBase - vtoy).toString() + 'px)';
                    }
                }
            }
        }
    };
    GaugeProgressComponent.initElement = function (ga) {
        var ele = document.getElementById(ga.id);
        if (ele && ga.property && ga.property.ranges.length > 0) {
            var gap = ga.property.ranges[0];
            // label min
            var htmlLabel = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].searchTreeStartWith(ele, this.prefixMin);
            if (htmlLabel) {
                htmlLabel.innerHTML = gap.min.toString();
                htmlLabel.style.display = (gap.style[0]) ? 'block' : 'none';
            }
            // label max
            htmlLabel = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].searchTreeStartWith(ele, this.prefixMax);
            if (htmlLabel) {
                htmlLabel.innerHTML = gap.max.toString();
                htmlLabel.style.display = (gap.style[0]) ? 'block' : 'none';
            }
            // value
            var htmlValue = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].searchTreeStartWith(ele, this.prefixValue);
            if (htmlValue) {
                htmlValue.style.display = (gap.style[1]) ? 'block' : 'none';
            }
            // bar color
            var rect = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].searchTreeStartWith(ele, this.prefixB);
            if (rect) {
                rect.setAttribute('fill', gap.color);
            }
        }
    };
    GaugeProgressComponent.initElementColor = function (bkcolor, color, ele) {
        var rectArea = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].searchTreeStartWith(ele, this.prefixA);
        if (rectArea) {
            if (bkcolor) {
                rectArea.setAttribute('fill', bkcolor);
            }
            if (color) {
                rectArea.setAttribute('stroke', color);
            }
        }
        rectArea = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].searchTreeStartWith(ele, this.prefixB);
        if (rectArea) {
            if (color) {
                rectArea.setAttribute('stroke', color);
            }
        }
    };
    GaugeProgressComponent.getFillColor = function (ele) {
        var rectArea = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].searchTreeStartWith(ele, this.prefixA);
        if (rectArea) {
            return rectArea.getAttribute('fill');
        }
    };
    GaugeProgressComponent.getStrokeColor = function (ele) {
        var rectArea = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].searchTreeStartWith(ele, this.prefixA);
        if (rectArea) {
            return rectArea.getAttribute('stroke');
        }
    };
    GaugeProgressComponent.getDefaultValue = function () {
        return { color: this.barColor };
    };
    GaugeProgressComponent.TypeTag = 'svg-ext-gauge_progress';
    GaugeProgressComponent.LabelTag = 'HtmlProgress';
    GaugeProgressComponent.prefixA = 'A-GXP_';
    GaugeProgressComponent.prefixB = 'B-GXP_';
    GaugeProgressComponent.prefixH = 'H-GXP_';
    GaugeProgressComponent.prefixMax = 'M-GXP_';
    GaugeProgressComponent.prefixMin = 'm-GXP_';
    GaugeProgressComponent.prefixValue = 'V-GXP_';
    GaugeProgressComponent.barColor = '#1565c0';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GaugeProgressComponent.prototype, "data", void 0);
    GaugeProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gauge-progress',
            template: __webpack_require__(/*! ./gauge-progress.component.html */ "./src/app/gauges/controls/gauge-progress/gauge-progress.component.html"),
            styles: [__webpack_require__(/*! ./gauge-progress.component.css */ "./src/app/gauges/controls/gauge-progress/gauge-progress.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GaugeProgressComponent);
    return GaugeProgressComponent;
}(_gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__["GaugeBaseComponent"]));



/***/ }),

/***/ "./src/app/gauges/controls/gauge-semaphore/gauge-semaphore.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/gauges/controls/gauge-semaphore/gauge-semaphore.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/controls/gauge-semaphore/gauge-semaphore.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/gauges/controls/gauge-semaphore/gauge-semaphore.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/controls/gauge-semaphore/gauge-semaphore.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/gauges/controls/gauge-semaphore/gauge-semaphore.component.ts ***!
  \******************************************************************************/
/*! exports provided: GaugeSemaphoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeSemaphoreComponent", function() { return GaugeSemaphoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gauge-base/gauge-base.component */ "./src/app/gauges/gauge-base/gauge-base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GaugeSemaphoreComponent = /** @class */ (function (_super) {
    __extends(GaugeSemaphoreComponent, _super);
    function GaugeSemaphoreComponent() {
        return _super.call(this) || this;
    }
    GaugeSemaphoreComponent.prototype.ngOnInit = function () {
    };
    GaugeSemaphoreComponent.getSignal = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        return res;
    };
    GaugeSemaphoreComponent.processValue = function (ga, svgele, sig) {
        if (svgele.node && svgele.node.children && svgele.node.children.length <= 1) {
            var g = svgele.node.children[0];
            var clr = '';
            var val = parseFloat(sig.value);
            if (ga.property && ga.property.ranges) {
                for (var idx = 0; idx < ga.property.ranges.length; idx++) {
                    if (ga.property.ranges[idx].min <= val && ga.property.ranges[idx].max >= val) {
                        clr = ga.property.ranges[idx].color;
                    }
                }
                g.setAttribute('fill', clr);
            }
        }
    };
    GaugeSemaphoreComponent.getFillColor = function (ele) {
        if (ele.children && ele.children[0]) {
            return ele.children[0].getAttribute('fill');
        }
        return ele.getAttribute('fill');
    };
    GaugeSemaphoreComponent.getStrokeColor = function (ele) {
        if (ele.children && ele.children[0]) {
            return ele.children[0].getAttribute('stroke');
        }
        return ele.getAttribute('stroke');
    };
    GaugeSemaphoreComponent.TypeTag = 'svg-ext-gauge_semaphore';
    GaugeSemaphoreComponent.LabelTag = 'HtmlSemaphore';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GaugeSemaphoreComponent.prototype, "data", void 0);
    GaugeSemaphoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gauge-semaphore',
            template: __webpack_require__(/*! ./gauge-semaphore.component.html */ "./src/app/gauges/controls/gauge-semaphore/gauge-semaphore.component.html"),
            styles: [__webpack_require__(/*! ./gauge-semaphore.component.css */ "./src/app/gauges/controls/gauge-semaphore/gauge-semaphore.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GaugeSemaphoreComponent);
    return GaugeSemaphoreComponent;
}(_gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__["GaugeBaseComponent"]));



/***/ }),

/***/ "./src/app/gauges/controls/html-button/html-button.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/gauges/controls/html-button/html-button.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/controls/html-button/html-button.component.html":
/*!************************************************************************!*\
  !*** ./src/app/gauges/controls/html-button/html-button.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/controls/html-button/html-button.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/gauges/controls/html-button/html-button.component.ts ***!
  \**********************************************************************/
/*! exports provided: HtmlButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlButtonComponent", function() { return HtmlButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gauge-base/gauge-base.component */ "./src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_helpers/utils */ "./src/app/_helpers/utils.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HtmlButtonComponent = /** @class */ (function (_super) {
    __extends(HtmlButtonComponent, _super);
    function HtmlButtonComponent() {
        return _super.call(this) || this;
    }
    HtmlButtonComponent.prototype.ngOnInit = function () {
    };
    HtmlButtonComponent.getSignal = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        return res;
    };
    HtmlButtonComponent.initElement = function (gab) {
        var ele = document.getElementById(gab.id);
        if (ele && gab.property) {
            var htmlButton = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].searchTreeStartWith(ele, this.prefixB);
            if (htmlButton) {
                htmlButton.innerHTML = gab.name;
                //   htmlLabel.style.display = (gap.style[0]) ? 'block' : 'none';
            }
        }
    };
    HtmlButtonComponent.initElementColor = function (bkcolor, color, ele) {
        var htmlButton = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].searchTreeStartWith(ele, this.prefixB);
        if (htmlButton) {
            if (bkcolor) {
                htmlButton.style.backgroundColor = bkcolor;
            }
            if (color) {
                htmlButton.style.color = color;
            }
            // htmlButton.innerHTML = gab.name;
            //   htmlLabel.style.display = (gap.style[0]) ? 'block' : 'none';
        }
    };
    HtmlButtonComponent.processValue = function (ga, svgele, sig) {
        // if (svgele.node && svgele.node.children && svgele.node.children.length >= 1) {
        //   let input = Utils.searchTreeStartWith(svgele.node, this.prefix);
        //   if (input) {
        //     let val = parseInt(sig.value, 10);
        //     input.value = val;
        //   }
        // }
    };
    HtmlButtonComponent.getFillColor = function (ele) {
        if (ele.children && ele.children[0]) {
            var htmlButton = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].searchTreeStartWith(ele, this.prefixRect);
            if (htmlButton) {
                return htmlButton.getAttribute('fill');
            }
        }
        return ele.getAttribute('fill');
    };
    HtmlButtonComponent.getStrokeColor = function (ele) {
        if (ele.children && ele.children[0]) {
            var htmlButton = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].searchTreeStartWith(ele, this.prefixRect);
            if (htmlButton) {
                return htmlButton.getAttribute('stroke');
            }
        }
        return ele.getAttribute('stroke');
    };
    HtmlButtonComponent.TypeTag = 'svg-ext-html_button';
    HtmlButtonComponent.LabelTag = 'HtmlButton';
    HtmlButtonComponent.prefixB = 'B-HXB_';
    HtmlButtonComponent.prefixRect = 'svg_';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HtmlButtonComponent.prototype, "data", void 0);
    HtmlButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'html-button',
            template: __webpack_require__(/*! ./html-button.component.html */ "./src/app/gauges/controls/html-button/html-button.component.html"),
            styles: [__webpack_require__(/*! ./html-button.component.css */ "./src/app/gauges/controls/html-button/html-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HtmlButtonComponent);
    return HtmlButtonComponent;
}(_gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__["GaugeBaseComponent"]));



/***/ }),

/***/ "./src/app/gauges/controls/html-input/html-input.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/gauges/controls/html-input/html-input.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/controls/html-input/html-input.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/gauges/controls/html-input/html-input.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/controls/html-input/html-input.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/gauges/controls/html-input/html-input.component.ts ***!
  \********************************************************************/
/*! exports provided: HtmlInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlInputComponent", function() { return HtmlInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gauge-base/gauge-base.component */ "./src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var _models_hmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_models/hmi */ "./src/app/_models/hmi.ts");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_helpers/utils */ "./src/app/_helpers/utils.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HtmlInputComponent = /** @class */ (function (_super) {
    __extends(HtmlInputComponent, _super);
    function HtmlInputComponent() {
        return _super.call(this) || this;
    }
    HtmlInputComponent.prototype.ngOnInit = function () {
    };
    HtmlInputComponent.getSignal = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        return res;
    };
    HtmlInputComponent.getHtmlEvents = function (ga) {
        var ele = document.getElementById(ga.id);
        if (ele) {
            var input = _helpers_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].searchTreeStartWith(ele, this.prefix);
            if (input) {
                var event_1 = new _models_hmi__WEBPACK_IMPORTED_MODULE_2__["Event"]();
                event_1.dom = input;
                event_1.type = 'key-enter';
                event_1.ga = ga;
                return event_1;
            }
        }
        return null;
    };
    HtmlInputComponent.processValue = function (ga, svgele, sig) {
        if (svgele.node && svgele.node.children && svgele.node.children.length >= 1) {
            var input = _helpers_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].searchTreeStartWith(svgele.node, this.prefix);
            if (input) {
                var val = parseInt(sig.value, 10);
                input.value = val;
            }
        }
    };
    HtmlInputComponent.initElementColor = function (bkcolor, color, ele) {
        var htmlInput = _helpers_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].searchTreeStartWith(ele, this.prefix);
        if (htmlInput) {
            if (bkcolor) {
                htmlInput.style.backgroundColor = bkcolor;
            }
            if (color) {
                htmlInput.style.color = color;
            }
        }
    };
    HtmlInputComponent.getFillColor = function (ele) {
        if (ele.children && ele.children[0]) {
            var htmlInput = _helpers_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].searchTreeStartWith(ele, this.prefix);
            if (htmlInput) {
                return htmlInput.style.backgroundColor;
            }
        }
        return ele.getAttribute('fill');
    };
    HtmlInputComponent.getStrokeColor = function (ele) {
        if (ele.children && ele.children[0]) {
            var htmlInput = _helpers_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].searchTreeStartWith(ele, this.prefix);
            if (htmlInput) {
                return htmlInput.style.color;
            }
        }
        return ele.getAttribute('stroke');
    };
    HtmlInputComponent.TypeTag = 'svg-ext-html_input';
    HtmlInputComponent.LabelTag = 'HtmlInput';
    HtmlInputComponent.prefix = 'I-HXI_';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HtmlInputComponent.prototype, "data", void 0);
    HtmlInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'html-input',
            template: __webpack_require__(/*! ./html-input.component.html */ "./src/app/gauges/controls/html-input/html-input.component.html"),
            styles: [__webpack_require__(/*! ./html-input.component.css */ "./src/app/gauges/controls/html-input/html-input.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HtmlInputComponent);
    return HtmlInputComponent;
}(_gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__["GaugeBaseComponent"]));



/***/ }),

/***/ "./src/app/gauges/controls/html-select/html-select.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/gauges/controls/html-select/html-select.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/controls/html-select/html-select.component.html":
/*!************************************************************************!*\
  !*** ./src/app/gauges/controls/html-select/html-select.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/controls/html-select/html-select.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/gauges/controls/html-select/html-select.component.ts ***!
  \**********************************************************************/
/*! exports provided: HtmlSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HtmlSelectComponent", function() { return HtmlSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gauge-base/gauge-base.component */ "./src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var _models_hmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_models/hmi */ "./src/app/_models/hmi.ts");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_helpers/utils */ "./src/app/_helpers/utils.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HtmlSelectComponent = /** @class */ (function (_super) {
    __extends(HtmlSelectComponent, _super);
    function HtmlSelectComponent() {
        return _super.call(this) || this;
    }
    HtmlSelectComponent.prototype.ngOnInit = function () {
    };
    HtmlSelectComponent.getSignal = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        return res;
    };
    HtmlSelectComponent.getHtmlEvents = function (ga) {
        var ele = document.getElementById(ga.id);
        if (ele) {
            var select = _helpers_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].searchTreeStartWith(ele, this.prefix);
            if (select) {
                var event_1 = new _models_hmi__WEBPACK_IMPORTED_MODULE_2__["Event"]();
                event_1.dom = select;
                event_1.type = 'change';
                event_1.ga = ga;
                return event_1;
            }
        }
        return null;
    };
    HtmlSelectComponent.processValue = function (ga, svgele, sig) {
        var select = _helpers_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].searchTreeStartWith(svgele.node, this.prefix);
        if (select) {
            var val = parseInt(sig.value, 10);
            select.value = val;
        }
    };
    HtmlSelectComponent.initElement = function (ga) {
        var ele = document.getElementById(ga.id);
        if (ele) {
            var select_1 = _helpers_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].searchTreeStartWith(ele, this.prefix);
            if (select_1) {
                select_1.innerHTML = "";
                ga.property.ranges.forEach(function (element) {
                    var option = document.createElement("option");
                    option.value = element.min;
                    if (element.text) {
                        option.text = element.text;
                    }
                    select_1.appendChild(option);
                });
            }
        }
    };
    HtmlSelectComponent.initElementColor = function (bkcolor, color, ele) {
        var select = _helpers_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].searchTreeStartWith(ele, this.prefix);
        if (select) {
            if (bkcolor) {
                select.style.backgroundColor = bkcolor;
            }
            if (color) {
                select.style.color = color;
            }
        }
    };
    HtmlSelectComponent.getFillColor = function (ele) {
        if (ele.children && ele.children[0]) {
            var select = _helpers_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].searchTreeStartWith(ele, this.prefix);
            if (select) {
                return select.style.backgroundColor;
            }
        }
        return ele.getAttribute('fill');
    };
    HtmlSelectComponent.getStrokeColor = function (ele) {
        if (ele.children && ele.children[0]) {
            var select = _helpers_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].searchTreeStartWith(ele, this.prefix);
            if (select) {
                return select.style.color;
            }
        }
        return ele.getAttribute('stroke');
    };
    HtmlSelectComponent.TypeTag = 'svg-ext-html_select';
    HtmlSelectComponent.LabelTag = 'HtmlSelect';
    HtmlSelectComponent.prefix = 'S-HXS_';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HtmlSelectComponent.prototype, "data", void 0);
    HtmlSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'html-select',
            template: __webpack_require__(/*! ./html-select.component.html */ "./src/app/gauges/controls/html-select/html-select.component.html"),
            styles: [__webpack_require__(/*! ./html-select.component.css */ "./src/app/gauges/controls/html-select/html-select.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HtmlSelectComponent);
    return HtmlSelectComponent;
}(_gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__["GaugeBaseComponent"]));



/***/ }),

/***/ "./src/app/gauges/controls/value/value.component.css":
/*!***********************************************************!*\
  !*** ./src/app/gauges/controls/value/value.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/controls/value/value.component.html":
/*!************************************************************!*\
  !*** ./src/app/gauges/controls/value/value.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/controls/value/value.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/gauges/controls/value/value.component.ts ***!
  \**********************************************************/
/*! exports provided: ValueComponent, ValueProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueComponent", function() { return ValueComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueProperty", function() { return ValueProperty; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gauge-base/gauge-base.component */ "./src/app/gauges/gauge-base/gauge-base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValueComponent = /** @class */ (function (_super) {
    __extends(ValueComponent, _super);
    function ValueComponent() {
        return _super.call(this) || this;
    }
    ValueComponent.prototype.ngOnInit = function () {
    };
    ValueComponent.getSignals = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        return res;
    };
    ValueComponent.processValue = function (ga, svgele, sig) {
        // console.log('gaid value: ' + ga.id);
        if (svgele.node && svgele.node.children && svgele.node.children.length <= 1) {
            var g = svgele.node.children[0];
            var val = parseInt(sig.value, 10);
            var unit = _gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__["GaugeBaseComponent"].getUnit(ga.property);
            g.textContent = val;
            if (unit) {
                g.textContent += unit;
            }
        }
    };
    ValueComponent.TypeTag = 'svg-ext-value';
    ValueComponent.LabelTag = 'Value';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ValueComponent.prototype, "data", void 0);
    ValueComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gauge-value',
            template: __webpack_require__(/*! ./value.component.html */ "./src/app/gauges/controls/value/value.component.html"),
            styles: [__webpack_require__(/*! ./value.component.css */ "./src/app/gauges/controls/value/value.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ValueComponent);
    return ValueComponent;
}(_gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__["GaugeBaseComponent"]));

var ValueProperty = /** @class */ (function () {
    function ValueProperty() {
        this.signalid = '';
        this.format = '##.##';
    }
    return ValueProperty;
}());



/***/ }),

/***/ "./src/app/gauges/gauge-base/gauge-base.component.css":
/*!************************************************************!*\
  !*** ./src/app/gauges/gauge-base/gauge-base.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".svg-property-split2:after {\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n.svg-property-split2 div {\r\n  /* float: left; */\r\n  /* width: 49%; */\r\n  display: inline-block;\r\n}\r\n\r\n.svg-property {\r\n  /* display: block; */\r\n  color: rgba(255,255,255,0.75);\r\n  /* position: relative; */\r\n  /* left: 5px; */\r\n  /* right: 5px; */\r\n  /* width: 100%; */\r\n}\r\n\r\n.svg-property span {\r\n  /* float: left; */\r\n  display: block;\r\n  font-size: 10px;\r\n  margin: 0px 5px 0px 10px;\r\n}\r\n\r\n.svg-property input {\r\n  /* float: right; */\r\n  /* position: relative; */\r\n  /* left: 0px; */\r\n  /* right: 0px; */\r\n  display: block;\r\n  margin: 0px 10px 12px 10px;\r\n  border: unset;\r\n  background-color: inherit;\r\n  color: inherit;\r\n  border-bottom: 1px solid rgba(255,255,255,0.75);\r\n}\r\n\r\n.mat-button {\r\n  min-width: 60px;\r\n}"

/***/ }),

/***/ "./src/app/gauges/gauge-base/gauge-base.component.html":
/*!*************************************************************!*\
  !*** ./src/app/gauges/gauge-base/gauge-base.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"svg-property-split2\" *ngIf=\"settings\">\r\n  <div class=\"svg-property\" title=\"Gauge name\">\r\n    <span>name</span>\r\n    <input type=\"text\" id=\"gaugename\" [(ngModel)]=\"settings.name\"  type=\"text\" readonly />\r\n  </div>\r\n  <div class=\"svg-property\" style=\"display:block !important; padding: 0px 10px 5px 10px;\" title=\"Change rectangle height\">\r\n    <!-- <span>settings</span> -->\r\n    <button mat-button color=\"primary\" style=\"background-color: dimgrey;color:white; display: inline-block\" (click)=\"onEdit()\">Property</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/gauges/gauge-base/gauge-base.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/gauges/gauge-base/gauge-base.component.ts ***!
  \***********************************************************/
/*! exports provided: GaugeBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeBaseComponent", function() { return GaugeBaseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_hmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_models/hmi */ "./src/app/_models/hmi.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// declare var SVG: any;
var GaugeBaseComponent = /** @class */ (function () {
    function GaugeBaseComponent() {
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    GaugeBaseComponent.prototype.ngOnInit = function () {
    };
    GaugeBaseComponent.prototype.onEdit = function () {
        this.edit.emit(this.settings);
    };
    GaugeBaseComponent.prototype.isWithEvents = function () {
        return this.withEvents;
    };
    GaugeBaseComponent.pathToAbsolute = function (relativePath) {
        var pattern = /([ml])\s*(-?\d*\.?\d+)\s*,\s*(-?\d*\.?\d+)/ig, coords = [];
        relativePath.replace(pattern, function (match, command, x, y) {
            var prev;
            x = parseFloat(x);
            y = parseFloat(y);
            if (coords.length === 0 || command.toUpperCase() === command) {
                coords.push([x, y]);
            }
            else {
                prev = coords[coords.length - 1];
                coords.push([x + prev[0], y + prev[1]]);
            }
        });
        return coords;
    };
    GaugeBaseComponent.getEvents = function (pro, type) {
        var res = [];
        if (!pro.events) {
            return null;
        }
        var idxtype = Object.values(_models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeEventType"]).indexOf(type);
        pro.events.forEach(function (ev) {
            if (Object.keys(_models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeEventType"]).indexOf(ev.type) === idxtype) {
                res.push(ev);
            }
        });
        return res;
    };
    GaugeBaseComponent.getUnit = function (pro) {
        if (pro) {
            if (pro.ranges && pro.ranges.length > 0 && pro.ranges[0].type === 'unit') {
                return pro.ranges[0].text;
            }
        }
        return '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GaugeBaseComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeSettings"])
    ], GaugeBaseComponent.prototype, "settings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], GaugeBaseComponent.prototype, "withEvents", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GaugeBaseComponent.prototype, "edit", void 0);
    GaugeBaseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gauge-base',
            template: __webpack_require__(/*! ./gauge-base.component.html */ "./src/app/gauges/gauge-base/gauge-base.component.html"),
            styles: [__webpack_require__(/*! ./gauge-base.component.css */ "./src/app/gauges/gauge-base/gauge-base.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GaugeBaseComponent);
    return GaugeBaseComponent;
}());



/***/ }),

/***/ "./src/app/gauges/gauge-property/flex-event/flex-event.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/gauges/gauge-property/flex-event/flex-event.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\r\n    display: block;\r\n    min-height: 54px;\r\n    width: 100%;\r\n    border-bottom: 1px solid rgba(0,0,0,0.1);\r\n    padding: 5px 0px 0px 0px;\r\n    margin-bottom: -1px;\r\n}\r\n\r\n.remove {\r\n    position: relative;\r\n    top: 4px;\r\n    right: 0px;\r\n}\r\n\r\n.item-remove {\r\n    display: inline-block;\r\n    float: right;\r\n    /* padding-top: 6px; */\r\n    /* min-width: 140px; */\r\n}"

/***/ }),

/***/ "./src/app/gauges/gauge-property/flex-event/flex-event.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/gauges/gauge-property/flex-event/flex-event.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of events; index as i\" class=\"item\">\r\n  <div class=\"my-form-field\" style=\"width: 140px;\">\r\n    <span>Type</span>\r\n    <mat-select [(value)]=\"item.type\" >\r\n      <mat-option *ngFor=\"let ev of eventType | enumToArray\" [value]=\"ev.key\">\r\n        {{ ev.value }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </div>\r\n  <div class=\"my-form-field\" style=\"width: 140px;padding-left: 20px\">\r\n    <span>Action</span>\r\n    <mat-select [(value)]=\"item.action\" (change)=\"item.actparam = '';\">\r\n      <mat-option *ngFor=\"let type of actionType | enumToArray\" [value]=\"type.key\">\r\n        {{ type.value }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </div>\r\n  <div class=\"my-form-field\" style=\"width: 200px;padding-left: 20px\" *ngIf=\"withDestination(item.action)\">\r\n    <span>Destination</span>\r\n    <mat-select [(value)]=\"item.actparam\">\r\n      <mat-option *ngFor=\"let v of views; index as i\" [(value)]=\"v.id\">{{v.name}}</mat-option>\r\n    </mat-select>\r\n  </div>\r\n  <div class=\"my-form-field\" style=\"padding-left: 20px;\" *ngIf=\"withSetValue(item.action)\">\r\n    <span>Value</span>\r\n    <input numberOnly [(ngModel)]=\"item.actparam\" type=\"text\" style=\"width: 100px\">\r\n  </div>\r\n  <div class=\"item-remove\">\r\n    <button mat-icon-button (click)=\"onRemoveEvent(i)\" class=\"remove\">\r\n      <mat-icon>clear</mat-icon>\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/gauges/gauge-property/flex-event/flex-event.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/gauges/gauge-property/flex-event/flex-event.component.ts ***!
  \**************************************************************************/
/*! exports provided: FlexEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexEventComponent", function() { return FlexEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_hmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_models/hmi */ "./src/app/_models/hmi.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FlexEventComponent = /** @class */ (function () {
    function FlexEventComponent() {
    }
    FlexEventComponent.prototype.ngOnInit = function () {
        this.eventType = _models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeEventType"];
        this.actionType = _models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeEventActionType"];
        if (this.property) {
            this.events = this.property.events;
        }
    };
    FlexEventComponent.prototype.getEvents = function () {
        var result = [];
        this.events.forEach(function (element) {
            if (element.type) {
                result.push(element);
            }
        });
        return result;
    };
    FlexEventComponent.prototype.onAddEvent = function () {
        var ga = new _models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeEvent"]();
        this.addEvent(ga);
    };
    FlexEventComponent.prototype.onRemoveEvent = function (index) {
        this.events.splice(index, 1);
    };
    FlexEventComponent.prototype.withDestination = function (action) {
        var a = Object.keys(this.actionType).indexOf(action);
        var b = Object.values(this.actionType).indexOf(_models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeEventActionType"].onSetValue);
        return (a >= 0 && a != b) ? true : false;
    };
    FlexEventComponent.prototype.withSetValue = function (action) {
        var a = Object.keys(this.actionType).indexOf(action);
        var b = Object.values(this.actionType).indexOf(_models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeEventActionType"].onSetValue);
        return (a === b) ? true : false;
    };
    FlexEventComponent.prototype.addEvent = function (ge) {
        if (!this.events) {
            this.events = [];
        }
        this.events.push(ge);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeProperty"])
    ], FlexEventComponent.prototype, "property", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FlexEventComponent.prototype, "views", void 0);
    FlexEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flex-event',
            template: __webpack_require__(/*! ./flex-event.component.html */ "./src/app/gauges/gauge-property/flex-event/flex-event.component.html"),
            styles: [__webpack_require__(/*! ./flex-event.component.css */ "./src/app/gauges/gauge-property/flex-event/flex-event.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FlexEventComponent);
    return FlexEventComponent;
}());



/***/ }),

/***/ "./src/app/gauges/gauge-property/flex-head/flex-head.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/gauges/gauge-property/flex-head/flex-head.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  /* border: 1px solid rgba(248,249,250, 1); */\r\n}\r\n.head {\r\n    /* background-color: rgba(243,243,243, 1); */\r\n    /* padding-left: 10px; */\r\n    /* padding-right: 10px; */\r\n    padding-top: 0px;\r\n}\r\n.selection {\r\n  margin-right: 20px;\r\n  margin-bottom: -10px;\r\n  margin-top: 2px;\r\n  width: 220px;\r\n}\r\n.selection .mat-form-field-wrapper {\r\n  padding-bottom: 15px !important;\r\n}\r\n.item-set {\r\n  display: inline-block;\r\n  float: right;\r\n  padding-top: 13px;\r\n  min-width: 140px;\r\n}\r\n.panel-color-class {\r\n  position: relative;\r\n  top: 30px;\r\n}\r\n.panel-color {\r\n  display: inline-block;\r\n  padding-top: 10px;\r\n  max-width: 60px;\r\n  /* border: 1px solid rgba(0,0,0,0.1); */\r\n  height: 20px;\r\n  line-height: 12px;\r\n  margin-right: 25px;\r\n}\r\n.option-color {\r\n  height: 32px !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/gauges/gauge-property/flex-head/flex-head.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/gauges/gauge-property/flex-head/flex-head.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"head\" style=\"padding-top: 10px;\">\r\n    <div class=\"my-form-field\" style=\"width: 220px;\">\r\n      <span>Device</span>\r\n      <mat-select [formControl]=\"deviceCtrl\" (selectionChange)=\"onDeviceChange($event.source)\">\r\n        <mat-select-search [formControl]=\"deviceFilterCtrl\"></mat-select-search>\r\n        <mat-option *ngFor=\"let device of filteredDevice | async\" [value]=\"device\">\r\n          {{ device.name }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </div>\r\n    <div class=\"my-form-field\" style=\"width: 400px;float: right;margin-right: 10px;\">\r\n      <span>Variable</span>\r\n      <mat-select [formControl]=\"variableCtrl\" (selectionChange)=\"onVariableChange($event.source)\">\r\n        <mat-select-search [formControl]=\"variableFilterCtrl\"></mat-select-search>\r\n        <mat-option *ngFor=\"let vari of filteredVariable | async\" [value]=\"vari\">\r\n          {{ vari.name }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </div>\r\n  </div>\r\n  <flex-input [ranges]=\"property.ranges\" [default]=\"defaultValue\" #flexinput *ngIf=\"withInput\" [inputType]=\"withInput\" style=\"padding-bottom: 5px\"></flex-input>\r\n  <div *ngIf=\"withAlarm\" class=\"head\" style=\"padding-top: 15px;\">\r\n    <div class=\"my-form-field\" style=\"width: 220px;\">\r\n      <span>Device</span>\r\n      <mat-select [formControl]=\"alarmDeviceCtrl\" (selectionChange)=\"onAlarmDeviceChange($event.source)\" class=\"select-item\">\r\n        <mat-select-search [formControl]=\"alarmDeviceFilterCtrl\"></mat-select-search>\r\n        <mat-option *ngFor=\"let device of filteredAlarmDevice | async\" [value]=\"device\">\r\n          {{ device.name }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </div>\r\n    <div class=\"my-form-field\" style=\"width: 400px;float: right;margin-right: 10px;\">\r\n      <span>Alarm</span>\r\n      <mat-select [formControl]=\"alarmCtrl\" (selectionChange)=\"onAlarmChange($event.source)\">\r\n        <mat-select-search [formControl]=\"alarmFilterCtrl\"></mat-select-search>\r\n        <mat-option *ngFor=\"let vari of filteredAlarm | async\" [value]=\"vari\">\r\n          {{ vari.name }}\r\n        </mat-option>\r\n      </mat-select>\r\n    </div>\r\n    <div style=\"display: block; width:100%\">\r\n      <div class=\"my-form-field\" style=\"width: 60px;float: right;margin-right: 10px; top: 5px;\">\r\n        <span>Color</span>\r\n        <input [(colorPicker)]=\"property.alarmColor\" [style.background]=\"property.alarmColor\" [cpPresetColors]=\"defaultColor\" [cpOKButton]=\"true\" \r\n            [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\"\r\n            [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" class=\"panel-color\" style=\"padding: 10px 0 0 0;\"\r\n            [cpPosition]=\"'left'\"/>        \r\n        <!-- <mat-select class=\"panel-color\" style=\"padding: 10px 0 0 0;\" disableOptionCentering panelClass=\"panel-color-class\" [(value)]=\"property.alarmColor\"\r\n          [style.background-color]=\"property.alarmColor\" (selectionChange)=\"onAlarmColorChange($event.source)\">\r\n          <mat-option class=\"option-color\" value=\"green\" style=\"background-color: green\"></mat-option>\r\n          <mat-option class=\"option-color\" value=\"yellow\" style=\"background-color: yellow\"></mat-option>\r\n          <mat-option class=\"option-color\" value=\"red\" style=\"background-color: red\"></mat-option>\r\n          <mat-option class=\"option-color\" value=\"blue\" style=\"background-color: blue\"></mat-option>\r\n          <mat-option class=\"option-color\" value=\"gray\" style=\"background-color: gray\"></mat-option>\r\n        </mat-select> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/gauges/gauge-property/flex-head/flex-head.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/gauges/gauge-property/flex-head/flex-head.component.ts ***!
  \************************************************************************/
/*! exports provided: FlexHeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexHeadComponent", function() { return FlexHeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _flex_input_flex_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../flex-input/flex-input.component */ "./src/app/gauges/gauge-property/flex-input/flex-input.component.ts");
/* harmony import */ var _models_hmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_models/hmi */ "./src/app/_models/hmi.ts");
/* harmony import */ var _services_hmi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services/hmi.service */ "./src/app/_services/hmi.service.ts");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_helpers/utils */ "./src/app/_helpers/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FlexHeadComponent = /** @class */ (function () {
    function FlexHeadComponent() {
        this.withAlarm = false;
        this.withInput = null;
        this.currentTag = null;
        this.defaultColor = _helpers_utils__WEBPACK_IMPORTED_MODULE_7__["Utils"].defaultColor;
        // alarm: string;
        this.deviceCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.deviceFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.variableCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.variableFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.alarmDeviceCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.alarmDeviceFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.alarmCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.alarmFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        /** list of variable filtered by search keyword */
        this.filteredDevice = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.filteredAlarmDevice = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        /** list of variable filtered by search keyword */
        this.filteredVariable = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.filteredAlarm = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    FlexHeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.property) {
            this.property = new _models_hmi__WEBPACK_IMPORTED_MODULE_5__["GaugeProperty"]();
        }
        var seldevice = null;
        var selalarmdevice = null;
        if (this.data.devices) {
            if (this.property.variableSrc || this.property.alarmSrc) {
                this.data.devices.forEach(function (dev) {
                    if (_this.property.variableSrc && dev.name === _this.property.variableSrc) {
                        seldevice = dev;
                    }
                    if (_this.property.alarmSrc && dev.name === _this.property.alarmSrc) {
                        selalarmdevice = dev;
                    }
                });
            }
            this.loadDevices();
            this.loadAlarmDevices();
        }
        // if (this.data.variable) {
        //   this.variable = this.data.variable;
        //   this.loadVariable();
        // }
        // set value
        if (seldevice) {
            this.deviceCtrl.setValue(seldevice);
            this.onDeviceChange(this.deviceCtrl);
            if (this.property.variable) {
                for (var i = 0; i < this.variable.length; i++) {
                    if (this.variable[i].name === this.property.variable) {
                        this.currentTag = this.variable[i];
                    }
                }
            }
        }
        if (selalarmdevice) {
            this.withAlarm = true;
            this.alarmDeviceCtrl.setValue(selalarmdevice);
            this.onAlarmDeviceChange(this.alarmDeviceCtrl);
        }
    };
    FlexHeadComponent.prototype.ngAfterViewInit = function () {
    };
    FlexHeadComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    FlexHeadComponent.prototype.getProperty = function () {
        if (!this.withAlarm && this.property) {
            this.property.alarmId = '';
            this.property.alarmSrc = '';
            this.property.alarm = '';
            this.property.alarmColor = '';
        }
        if (this.withInput) {
            this.property.ranges = this.flexInput.getRanges();
        }
        return this.property;
    };
    FlexHeadComponent.prototype.onDeviceChange = function (event) {
        if (event.value) {
            if (this.property.variableSrc !== event.value.name) {
                this.property.variable = '';
                this.property.variableId = '';
            }
            this.property.variableSrc = event.value.name;
            this.variable = [];
            this.currentTag = null;
            if (event.value.tags) {
                this.variable = Object.values(event.value.tags);
                this.loadVariable(this.property.variable);
            }
        }
    };
    FlexHeadComponent.prototype.onVariableChange = function (event) {
        if (event.value) {
            this.property.variable = (event.value.id) ? event.value.id : event.value.name;
            this.property.variableId = _services_hmi_service__WEBPACK_IMPORTED_MODULE_6__["HmiService"].toVariableId(this.property.variableSrc, this.property.variable);
        }
        this.currentTag = event.value;
        if (this.flexInput) {
            this.flexInput.changeTag(this.currentTag);
        }
    };
    FlexHeadComponent.prototype.onAlarmDeviceChange = function (event) {
        if (event.value) {
            if (this.property.alarmSrc !== event.value.name) {
                this.property.alarm = '';
                this.property.alarmId = '';
            }
            this.property.alarmSrc = event.value.name;
            this.alarme = [];
            if (event.value.tags) {
                this.alarme = Object.values(event.value.tags);
                this.loadAlarm(this.property.alarm);
            }
            if (this.property.alarmColor) {
            }
        }
    };
    FlexHeadComponent.prototype.onAlarmChange = function (event) {
        if (event.value) {
            this.property.alarm = (event.value.id) ? event.value.id : event.value.name;
            this.property.alarmId = _services_hmi_service__WEBPACK_IMPORTED_MODULE_6__["HmiService"].toVariableId(this.property.alarmSrc, this.property.alarm);
            ;
        }
    };
    FlexHeadComponent.prototype.onAlarmColorChange = function (event) {
        this.property.alarmColor = event.value;
    };
    FlexHeadComponent.prototype.onAddInput = function () {
        this.flexInput.onAddInput();
    };
    FlexHeadComponent.prototype.onRangeViewToggle = function (slideView) {
        this.flexInput.onRangeViewToggle(slideView);
        this.flexInput.changeTag(this.currentTag);
    };
    FlexHeadComponent.prototype.onAlarmEnabled = function (enabled) {
        this.withAlarm = enabled;
    };
    FlexHeadComponent.prototype.loadDevices = function () {
        var _this = this;
        // load the initial variable list
        this.filteredDevice.next(this.data.devices.slice());
        // listen for search field value changes
        this.deviceFilterCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterDevice();
        });
    };
    FlexHeadComponent.prototype.loadAlarmDevices = function () {
        var _this = this;
        // load the initial variable list
        this.filteredAlarmDevice.next(this.data.devices.slice());
        // listen for search field value changes
        this.alarmDeviceFilterCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterAlarmDevice();
        });
    };
    FlexHeadComponent.prototype.filterDevice = function () {
        if (!this.data.devices) {
            return;
        }
        // get the search keyword
        var search = this.deviceFilterCtrl.value;
        if (!search) {
            this.filteredDevice.next(this.data.devices.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the device
        this.filteredDevice.next(this.data.devices.filter(function (dev) { return dev.name.toLowerCase().indexOf(search) > -1; }));
    };
    FlexHeadComponent.prototype.filterAlarmDevice = function () {
        if (!this.data.device) {
            return;
        }
        // get the search keyword
        var search = this.alarmDeviceFilterCtrl.value;
        if (!search) {
            this.filteredAlarmDevice.next(this.data.device.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the device
        this.filteredAlarmDevice.next(this.data.device.filter(function (dev) { return dev.name.toLowerCase().indexOf(search) > -1; }));
    };
    FlexHeadComponent.prototype.loadVariable = function (toset) {
        var _this = this;
        // load the initial variable list
        this.filteredVariable.next(this.variable.slice());
        // listen for search field value changes
        this.variableFilterCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterVariable();
        });
        if (toset) {
            var idx_1 = -1;
            this.variable.every(function (value, index, _arr) {
                if (value.id === toset) {
                    idx_1 = index;
                    return false;
                }
                return true;
            });
            if (idx_1 >= 0) {
                this.variableCtrl.setValue(this.variable[idx_1]);
            }
        }
    };
    FlexHeadComponent.prototype.loadAlarm = function (toset) {
        var _this = this;
        // load the initial variable list
        this.filteredAlarm.next(this.alarme.slice());
        // listen for search field value changes
        this.alarmFilterCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.filterAlarm();
        });
        if (toset) {
            var idx_2 = -1;
            this.alarme.every(function (value, index, _arr) {
                if (value.id === toset) {
                    idx_2 = index;
                    return false;
                }
                return true;
            });
            if (idx_2 >= 0) {
                this.alarmCtrl.setValue(this.alarme[idx_2]);
            }
        }
    };
    FlexHeadComponent.prototype.filterVariable = function () {
        if (!this.variable) {
            return;
        }
        // get the search keyword
        var search = this.variableFilterCtrl.value;
        if (!search) {
            this.filteredVariable.next(this.variable.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the variable
        this.filteredVariable.next(this.variable.filter(function (vari) { return vari.name.toLowerCase().indexOf(search) > -1; }));
    };
    FlexHeadComponent.prototype.filterAlarm = function () {
        if (!this.alarme) {
            return;
        }
        // get the search keyword
        var search = this.alarmFilterCtrl.value;
        if (!search) {
            this.filteredAlarm.next(this.alarme.slice());
            return;
        }
        else {
            search = search.toLowerCase();
        }
        // filter the variable
        this.filteredAlarm.next(this.alarme.filter(function (vari) { return vari.name.toLowerCase().indexOf(search) > -1; }));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FlexHeadComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_hmi__WEBPACK_IMPORTED_MODULE_5__["GaugeProperty"])
    ], FlexHeadComponent.prototype, "property", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('flexinput'),
        __metadata("design:type", _flex_input_flex_input_component__WEBPACK_IMPORTED_MODULE_4__["FlexInputComponent"])
    ], FlexHeadComponent.prototype, "flexInput", void 0);
    FlexHeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flex-head',
            template: __webpack_require__(/*! ./flex-head.component.html */ "./src/app/gauges/gauge-property/flex-head/flex-head.component.html"),
            styles: [__webpack_require__(/*! ./flex-head.component.css */ "./src/app/gauges/gauge-property/flex-head/flex-head.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [])
    ], FlexHeadComponent);
    return FlexHeadComponent;
}());



/***/ }),

/***/ "./src/app/gauges/gauge-property/flex-input/flex-input.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/gauges/gauge-property/flex-input/flex-input.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-conta {\r\n    margin-left: 30px;\r\n    max-height: 260px;\r\n    /* overflow: auto; */\r\n}\r\n\r\n.item {\r\n    display: block;\r\n    min-height: 54px;\r\n    width: 100%;\r\n    border-bottom: 1px solid rgba(0,0,0,0.1);\r\n    padding: 5px 0px 0px 0px;\r\n    margin-bottom: -1px;\r\n}\r\n\r\n.item-alarm {\r\n    margin-left: -30px;\r\n    width: calc(100% + 30px);\r\n}\r\n\r\n.remove {\r\n    position: relative;\r\n    top: 4px;\r\n    right: 0px;\r\n}\r\n\r\n.item-range {\r\n    display: inline-block;\r\n    min-width: 320px;\r\n    max-width: 320px;\r\n    width: 320px;\r\n}\r\n\r\n.item-minmax {\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.item-step {\r\n    display: inline-block;\r\n    width: 320px;\r\n}\r\n\r\n.item-remove {\r\n    display: inline-block;\r\n    float: right;\r\n    /* padding-top: 6px; */\r\n    /* min-width: 140px; */\r\n}\r\n\r\n.panel-color-class {\r\n    position: relative;\r\n    top: 30px;\r\n}\r\n\r\n.panel-color {\r\n    display: inline-block;\r\n    padding-top: 10px;\r\n    max-width: 60px;\r\n    /* border: 1px solid rgba(0,0,0,0.1); */\r\n    height: 21px;\r\n    line-height: 12px;\r\n    margin-right: 25px;\r\n}\r\n\r\n.option-color {\r\n    height: 32px !important;\r\n}\r\n\r\n.panel-color-class {\r\n    margin-top: 30px !important;\r\n}\r\n\r\n.input-range {\r\n    display: inline-block;\r\n    max-width: 80px;\r\n}\r\n\r\n.input-range input {\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.input-minmax {\r\n    display: inline-block;\r\n    max-width: 80px;\r\n}\r\n\r\n.input-minmax input {\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.input-step {\r\n    display: inline-block;\r\n    max-width: 80px;\r\n}\r\n\r\n.input-step input {\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.input-minmax-cb {\r\n    font-size: 15px;\r\n}\r\n\r\n::ng-deep .ng5-slider .ng5-slider-pointer { \r\n    width: 16px !important;\r\n    height: 16px !important;\r\n    border-radius: 8px !important; \r\n    top: -7px !important \r\n}\r\n\r\n::ng-deep .ng5-slider .ng5-slider-pointer:after { \r\n    top: 6px !important;\r\n    left: 6px !important;\r\n    width: 4px !important;\r\n    height: 4px !important; \r\n    border-radius: 2px !important \r\n}\r\n\r\n::ng-deep .input-range .input-step .input-minmax .mat-form-field-wrapper {\r\n    margin-bottom: -15px !important;\r\n}\r\n\r\n::ng-deep .input-range .input-step .input-minmax .mat-form-field-infix {\r\n    padding-top: 1px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.input-step input {\r\n    font-size: 15px;\r\n    text-align: center;\r\n}\r\n\r\n.input-slider {\r\n    display: inline;\r\n    /* max-width: 160px; */\r\n}\r\n\r\n::ng-deep .input-slider span {\r\n    font-size: 14px !important;\r\n}\r\n\r\n.input-slider ng5-slider {\r\n    /* display: block; */\r\n    max-width: 300px;\r\n    margin-top: 29px;\r\n    margin-right: 20px;\r\n}\r\n\r\n.toolbox {\r\n    margin-top: 3px;\r\n    margin-bottom: 3px;\r\n}\r\n\r\n.toolbox button {\r\n    margin-right: 8px;\r\n    margin-left: 8px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/gauges/gauge-property/flex-input/flex-input.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/gauges/gauge-property/flex-input/flex-input.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-conta\">\r\n  <div *ngFor=\"let item of ranges; index as i\" class=\"item\">\r\n    <div *ngIf=\"isWithRange()\">\r\n      <div *ngIf=\"slideView\" class=\"item-range\">\r\n        <div class=\"my-form-field\">\r\n          <span>Min</span>\r\n          <input numberOnly [(ngModel)]=\"item.min\" type=\"text\" style=\"width: 80px\">\r\n        </div>\r\n        <div class=\"my-form-field\" style=\"padding-left: 20px;\">\r\n          <span>Max</span>\r\n          <input numberOnly [(ngModel)]=\"item.max\" type=\"text\" style=\"width: 80px\">\r\n        </div>\r\n      </div>\r\n      <div class=\"item-range input-slider\" *ngIf=\"!slideView\">\r\n        <ng5-slider [(value)]=\"item.min\" [(highValue)]=\"item.max\" [options]=\"options\"></ng5-slider>\r\n      </div>\r\n      <div class=\"my-form-field\" style=\"width: 60px; top: 6px;\" *ngIf=\"isWithRangeColor()\">\r\n        <span>Color</span>\r\n        <input [(colorPicker)]=\"item.color\" [style.background]=\"item.color\" [cpPresetColors]=\"defaultColor\" [cpOKButton]=\"true\" \r\n            [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\"\r\n            [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" class=\"panel-color\" style=\"padding: 8px 0 0 0;\"\r\n            [cpPosition]=\"'left'\"/>\r\n        <!-- <mat-select class=\"panel-color\" style=\"padding: 8px 0 0 0;\" disableOptionCentering panelClass=\"panel-color-class\"\r\n          [(value)]=\"selected\" (change)=\"item.color = selected\" [style.background-color]=\"item.color\">\r\n          <mat-option class=\"option-color\" value=\"green\" style=\"background-color:limegreen\"></mat-option>\r\n          <mat-option class=\"option-color\" value=\"yellow\" style=\"background-color: yellow\"></mat-option>\r\n          <mat-option class=\"option-color\" value=\"red\" style=\"background-color: red\"></mat-option>\r\n          <mat-option class=\"option-color\" value=\"blue\" style=\"background-color: blue\"></mat-option>\r\n          <mat-option class=\"option-color\" value=\"gray\" style=\"background-color: gray\"></mat-option>\r\n        </mat-select> -->\r\n      </div>\r\n      <div class=\"item-remove\">\r\n        <button mat-icon-button (click)=\"onRemoveInput(i)\" class=\"remove\">\r\n          <mat-icon>clear</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"isMinMax()\">\r\n      <div class=\"item-minmax\">\r\n        <div class=\"my-form-field\">\r\n          <span>Min</span>\r\n          <input numberOnly [(ngModel)]=\"item.min\" type=\"text\" style=\"width: 80px\">\r\n        </div>\r\n        <div class=\"my-form-field\" style=\"padding-left: 20px;\">\r\n          <span>Max</span>\r\n          <input numberOnly [(ngModel)]=\"item.max\" type=\"text\" style=\"width: 80px\">\r\n        </div>\r\n        <div class=\"my-form-field\" style=\"padding-left: 30px\">\r\n          <!-- <span>Unit</span>\r\n          <input [(ngModel)]=\"item.text\" type=\"text\" style=\"width: 60px;text-align: center !important\"> -->\r\n        </div>\r\n        <div class=\"my-form-field\" style=\"width: 60px;padding-left: 20px; top: 4px;\">\r\n          <span>Color</span>\r\n          <input [(colorPicker)]=\"item.color\" [style.background]=\"getColor(item)\" [cpPresetColors]=\"defaultColor\" [cpOKButton]=\"true\" \r\n          [cpCancelButton]=\"true\" [cpCancelButtonClass]=\"'cpCancelButtonClass'\" [cpCancelButtonText]=\"'Cancel'\"\r\n          [cpOKButtonText]=\"'OK'\" [cpOKButtonClass]=\"'cpOKButtonClass'\" class=\"panel-color\" style=\"padding: 8px 0 0 0;\"\r\n          [cpPosition]=\"'left'\"/>          \r\n        </div>\r\n        <!-- <mat-checkbox class=\"input-minmax-cb\" style=\"padding-left: 30px\" [(ngModel)]=\"withLabel\">Range</mat-checkbox> -->\r\n        <!-- <mat-checkbox class=\"input-minmax-cb\" style=\"padding-left: 20px\" [(ngModel)]=\"withValue\">Value</mat-checkbox> -->\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"isWithStep()\" class=\"item-step\">\r\n      <div class=\"my-form-field\">\r\n        <span>Value</span>\r\n        <input numberOnly [(ngModel)]=\"item.min\" type=\"text\" style=\"width: 80px\">\r\n      </div>\r\n      <div class=\"my-form-field\" style=\"padding-left: 20px;\">\r\n        <span>Label</span>\r\n        <input [(ngModel)]=\"item.text\" type=\"text\" style=\"width: 160px;text-align: left !important\">\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"isWithUnit()\" class=\"item-step\">\r\n      <div class=\"my-form-field\">\r\n          <span>Unit</span>\r\n          <input [(ngModel)]=\"item.text\" type=\"text\" style=\"width: 60px;text-align: center !important\">\r\n      </div>\r\n    </div>    \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/gauges/gauge-property/flex-input/flex-input.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/gauges/gauge-property/flex-input/flex-input.component.ts ***!
  \**************************************************************************/
/*! exports provided: FlexInputComponent, InputItemType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexInputComponent", function() { return FlexInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputItemType", function() { return InputItemType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_hmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_models/hmi */ "./src/app/_models/hmi.ts");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_helpers/utils */ "./src/app/_helpers/utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FlexInputComponent = /** @class */ (function () {
    function FlexInputComponent() {
        this.tag = null;
        this.withLabel = true;
        this.withValue = true;
        this.slideView = true;
        this.defaultColor = _helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].defaultColor;
        this.options = {
            floor: 0,
            ceil: 100
        };
    }
    FlexInputComponent.prototype.ngOnInit = function () {
        if (!this.ranges) {
            this.ranges = [];
            var ip = new _models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeRangeProperty"]();
            if (this.isWithStep()) {
                ip.type = this.type;
                ip.min = 1;
                ip.max = 1;
            }
            else if (this.isMinMax()) {
                ip.type = this.type;
                ip.min = 0;
                ip.max = 100;
                ip.style = [true, true];
            }
            else {
                ip.type = this.type;
                ip.min = 20;
                ip.max = 80;
            }
            this.addInput(ip);
        }
        else if (this.isMinMax()) {
            if (this.ranges.length > 0 && this.ranges[0].style.length === 2) {
                this.withLabel = this.ranges[0].style[0];
                this.withValue = this.ranges[0].style[1];
            }
        }
        // this.ranges.forEach(element => {
        //   this.addInput(element.type, element.min, element.max, element.color);
        // });
    };
    FlexInputComponent.prototype.onAddInput = function () {
        var ip = new _models_hmi__WEBPACK_IMPORTED_MODULE_1__["GaugeRangeProperty"]();
        ip.type = this.type;
        this.addInput(ip);
    };
    FlexInputComponent.prototype.onRemoveInput = function (index) {
        this.ranges.splice(index, 1);
    };
    FlexInputComponent.prototype.onRangeViewToggle = function (slideView) {
        this.slideView = slideView;
    };
    FlexInputComponent.prototype.getRanges = function () {
        var _this = this;
        var result = [];
        this.ranges.forEach(function (element) {
            element.type = _this.inputType;
            if (_this.isWithStep()) {
                element.max = element.min;
                if (element.min !== null && element.max !== null) {
                    result.push(element);
                }
            }
            else if (_this.isMinMax()) {
                element.style = [_this.withLabel, _this.withValue];
                result.push(element);
            }
            else {
                if (!_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(element.min) && !_helpers_utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].isNullOrUndefined(element.max)) {
                    result.push(element);
                }
            }
        });
        return result;
    };
    FlexInputComponent.prototype.getColor = function (item) {
        if (item && item.color) {
            return item.color;
        }
        else if (this.default && this.default.color) {
            return this.default.color;
        }
    };
    FlexInputComponent.prototype.changeTag = function (_tag) {
        this.tag = _tag;
        if (this.tag) {
            var newOptions = Object.assign({}, this.options);
            try {
                if (this.tag.min != null) {
                    newOptions.floor = parseInt(this.tag.min);
                }
                if (this.tag.max != null) {
                    newOptions.ceil = parseInt(this.tag.max);
                }
                this.options = newOptions;
            }
            catch (e) { }
            for (var i = 0; i < this.ranges.length; i++) {
                if (!this.ranges[i].min || this.ranges[i].min <= newOptions.floor) {
                    this.ranges[i].min = newOptions.floor;
                }
                if (!this.ranges[i].max || this.ranges[i].max >= newOptions.ceil) {
                    this.ranges[i].max = newOptions.ceil;
                }
            }
        }
    };
    FlexInputComponent.prototype.isWithRange = function () {
        if (this.inputType === 'range') {
            return true;
        }
        return false;
    };
    FlexInputComponent.prototype.isMinMax = function () {
        if (this.inputType === 'minmax') {
            return true;
        }
        return false;
    };
    FlexInputComponent.prototype.isWithRangeColor = function () {
        if (this.inputType === 'range') {
            return true;
        }
        return false;
    };
    FlexInputComponent.prototype.isWithStep = function () {
        if (this.inputType === 'step') {
            return true;
        }
        return false;
    };
    FlexInputComponent.prototype.isWithUnit = function () {
        if (this.inputType === 'unit') {
            return true;
        }
        return false;
    };
    FlexInputComponent.prototype.addInput = function (gap) {
        this.ranges.push(gap);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], FlexInputComponent.prototype, "ranges", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FlexInputComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FlexInputComponent.prototype, "inputType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FlexInputComponent.prototype, "default", void 0);
    FlexInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'flex-input',
            template: __webpack_require__(/*! ./flex-input.component.html */ "./src/app/gauges/gauge-property/flex-input/flex-input.component.html"),
            styles: [__webpack_require__(/*! ./flex-input.component.css */ "./src/app/gauges/gauge-property/flex-input/flex-input.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FlexInputComponent);
    return FlexInputComponent;
}());

var InputItemType;
(function (InputItemType) {
    InputItemType[InputItemType["Color"] = 0] = "Color";
})(InputItemType || (InputItemType = {}));


/***/ }),

/***/ "./src/app/gauges/gauge-property/gauge-property.component.css":
/*!********************************************************************!*\
  !*** ./src/app/gauges/gauge-property/gauge-property.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbox {\r\n    display: inline-block;\r\n    float: right;\r\n    margin-top: 10px;\r\n    margin-bottom: 3px;\r\n}\r\n  \r\n.toolbox button {\r\n    margin-right: 8px;\r\n    margin-left: 8px;\r\n}\r\n  \r\n::ng-deep .input-text .mat-form-field-wrapper {\r\n    /* margin-bottom: -15px !important; */\r\n}\r\n  \r\n::ng-deep .input-text .mat-form-field-infix {\r\n    padding-top: 5px;\r\n    padding-bottom: 0px;\r\n}\r\n  \r\n::ng-deep .mat-dialog-container {\r\n    display: inline-table !important;\r\n}"

/***/ }),

/***/ "./src/app/gauges/gauge-property/gauge-property.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/gauges/gauge-property/gauge-property.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1 mat-dialog-title style=\"display:inline-block; cursor:move\" mat-dialog-draggable>Property</h1> -->\r\n<!-- <div style=\"width: 100%;\"> -->\r\n<div style=\"width: 100%;min-height: 400px;position: relative;padding-bottom: 40px\">\r\n  <mat-icon (click)=\"onNoClick()\" style=\"float:right;cursor:pointer;color:gray;position: relative; top: 10px; right: 0px\">clear</mat-icon>\r\n  <mat-tab-group style=\"width: 100%;\">\r\n    <mat-tab label=\"Property\">\r\n      <div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 15px;\">\r\n        <div style=\"display: block;\">\r\n          <div class=\"my-form-field\">\r\n            <span>Name</span>\r\n            <input [(ngModel)]=\"data.settings.name\" style=\"width: 220px\" type=\"text\">\r\n          </div>\r\n          <div class=\"toolbox\" *ngIf=\"isToolboxToShow()\">\r\n            <button mat-icon-button (click)=\"onAddInput()\">\r\n              <mat-icon>add_circle_outline</mat-icon>\r\n            </button>\r\n            <button mat-icon-button (click)=\"slideView = !slideView;onRangeViewToggle()\" *ngIf=\"isRangeToShow()\">\r\n              <mat-icon class=\"header-icon\" *ngIf=\"slideView\">toll</mat-icon>\r\n              <mat-icon class=\"header-icon\" *ngIf=\"!slideView\">input</mat-icon>\r\n            </button>\r\n            <button mat-icon-button (click)=\"withAlarm = !withAlarm;onAlarmToggle();\" *ngIf=\"isAlarmToShow()\">\r\n              <mat-icon class=\"header-icon\" *ngIf=\"!withAlarm\">notifications</mat-icon>\r\n              <mat-icon class=\"header-icon\" *ngIf=\"withAlarm\">notifications_off</mat-icon>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div mat-dialog-content style=\"overflow: hidden; width:100%\">\r\n          <flex-head [data]=\"data\" [property]=\"property\" #flexhead></flex-head>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n    <mat-tab label=\"Events\" *ngIf=\"eventsSupported\">\r\n      <div style=\"max-height: 540px; overflow-y: auto; overflow-x: hidden; padding-top: 15px;\">\r\n        <div style=\"display: block;\">\r\n          <div class=\"toolbox\">\r\n            <button mat-icon-button (click)=\"onAddEvent()\">\r\n              <mat-icon>add_circle_outline</mat-icon>\r\n            </button>\r\n            <!-- <button mat-icon-button (click)=\"slideView = !slideView;onRangeViewToggle()\" *ngIf=\"isRangeToShow()\">\r\n              <mat-icon class=\"header-icon\" *ngIf=\"slideView\">toll</mat-icon>\r\n              <mat-icon class=\"header-icon\" *ngIf=\"!slideView\">input</mat-icon>\r\n            </button>\r\n            <button mat-icon-button (click)=\"withAlarm = !withAlarm;onAlarmToggle();\" *ngIf=\"isAlarmToShow()\">\r\n              <mat-icon class=\"header-icon\" *ngIf=\"!withAlarm\">notifications</mat-icon>\r\n              <mat-icon class=\"header-icon\" *ngIf=\"withAlarm\">notifications_off</mat-icon>\r\n            </button> -->\r\n          </div>\r\n        </div>\r\n        <div mat-dialog-content style=\"overflow: hidden; width:100%\">\r\n          <flex-event [property]=\"property\" [views]=\"views\" #flexevent *ngIf=\"eventsSupported\" style=\"padding-bottom: 5px\"></flex-event>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n  <!-- <div mat-dialog-actions style=\"float:right; margin-bottom:0px;padding-bottom:0px; margin-top: 5px\"> -->\r\n  <div mat-dialog-actions style=\"display: inline-block; position: absolute; bottom: 10px; right: 10px\">\r\n    <button mat-raised-button (click)=\"onNoClick()\">CANCEL</button>\r\n    <button mat-raised-button color=\"primary\" (click)=\"onOkClick()\" [mat-dialog-close]=\"data\" cdkFocusInitial>OK</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/gauges/gauge-property/gauge-property.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/gauges/gauge-property/gauge-property.component.ts ***!
  \*******************************************************************/
/*! exports provided: GaugePropertyComponent, GaugeDialogType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugePropertyComponent", function() { return GaugePropertyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugeDialogType", function() { return GaugeDialogType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _flex_head_flex_head_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flex-head/flex-head.component */ "./src/app/gauges/gauge-property/flex-head/flex-head.component.ts");
/* harmony import */ var _flex_event_flex_event_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flex-event/flex-event.component */ "./src/app/gauges/gauge-property/flex-event/flex-event.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var GaugePropertyComponent = /** @class */ (function () {
    function GaugePropertyComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.withAlarm = false;
        this.slideView = true;
        this.dialogType = GaugeDialogType.RangeWithAlarm;
    }
    GaugePropertyComponent.prototype.ngOnInit = function () {
        this.dialogType = this.data.dlgType;
        this.eventsSupported = this.data.withEvents;
        this.views = this.data.views;
        this.property = JSON.parse(JSON.stringify(this.data.settings.property));
        this.defaultValue = this.data.default;
        if (this.dialogType === GaugeDialogType.OnlyValue) {
            this.flexHead.withInput = null;
        }
        else if (this.dialogType === GaugeDialogType.ValueAndUnit) {
            this.flexHead.withInput = 'unit';
        }
        else {
            this.flexHead.defaultValue = this.defaultValue;
            if (this.property && this.property.alarmSrc) {
                this.withAlarm = true;
            }
            this.flexHead.withInput = 'range';
            if (this.dialogType === GaugeDialogType.ValueWithRef) {
                this.flexHead.withInput = 'text';
                this.withAlarm = false;
            }
            else if (this.dialogType === GaugeDialogType.Step) {
                this.flexHead.withInput = 'step';
                this.withAlarm = false;
            }
            else if (this.dialogType === GaugeDialogType.MinMax) {
                this.flexHead.withInput = 'minmax';
                this.withAlarm = false;
            }
        }
    };
    GaugePropertyComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    GaugePropertyComponent.prototype.onOkClick = function () {
        // this.data.settings.property = this.flexHead.property;
        this.data.settings.property = this.flexHead.getProperty();
        if (this.flexEvent) {
            this.data.settings.property.events = this.flexEvent.getEvents();
        }
    };
    GaugePropertyComponent.prototype.onAddInput = function () {
        this.flexHead.onAddInput();
    };
    GaugePropertyComponent.prototype.onAddEvent = function () {
        this.flexEvent.onAddEvent();
    };
    GaugePropertyComponent.prototype.onRangeViewToggle = function () {
        this.flexHead.onRangeViewToggle(this.slideView);
    };
    GaugePropertyComponent.prototype.onAlarmToggle = function () {
        this.flexHead.onAlarmEnabled(this.withAlarm);
    };
    GaugePropertyComponent.prototype.isToolboxToShow = function () {
        if (this.dialogType === GaugeDialogType.RangeWithAlarm || this.dialogType === GaugeDialogType.Range || this.dialogType === GaugeDialogType.Step) {
            return true;
        }
        return false;
    };
    GaugePropertyComponent.prototype.isRangeToShow = function () {
        if (this.dialogType === GaugeDialogType.RangeWithAlarm || this.dialogType === GaugeDialogType.Range) {
            return true;
        }
        return false;
    };
    GaugePropertyComponent.prototype.isAlarmToShow = function () {
        if (this.dialogType === GaugeDialogType.RangeWithAlarm) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GaugePropertyComponent.prototype, "name", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('flexhead'),
        __metadata("design:type", _flex_head_flex_head_component__WEBPACK_IMPORTED_MODULE_2__["FlexHeadComponent"])
    ], GaugePropertyComponent.prototype, "flexHead", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('flexevent'),
        __metadata("design:type", _flex_event_flex_event_component__WEBPACK_IMPORTED_MODULE_3__["FlexEventComponent"])
    ], GaugePropertyComponent.prototype, "flexEvent", void 0);
    GaugePropertyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gauge-property',
            template: __webpack_require__(/*! ./gauge-property.component.html */ "./src/app/gauges/gauge-property/gauge-property.component.html"),
            styles: [__webpack_require__(/*! ./gauge-property.component.css */ "./src/app/gauges/gauge-property/gauge-property.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], GaugePropertyComponent);
    return GaugePropertyComponent;
}());

var GaugeDialogType;
(function (GaugeDialogType) {
    GaugeDialogType[GaugeDialogType["Range"] = 0] = "Range";
    GaugeDialogType[GaugeDialogType["RangeWithAlarm"] = 1] = "RangeWithAlarm";
    GaugeDialogType[GaugeDialogType["OnlyValue"] = 2] = "OnlyValue";
    GaugeDialogType[GaugeDialogType["ValueAndUnit"] = 3] = "ValueAndUnit";
    GaugeDialogType[GaugeDialogType["ValueWithRef"] = 4] = "ValueWithRef";
    GaugeDialogType[GaugeDialogType["Step"] = 5] = "Step";
    GaugeDialogType[GaugeDialogType["MinMax"] = 6] = "MinMax";
})(GaugeDialogType || (GaugeDialogType = {}));


/***/ }),

/***/ "./src/app/gauges/gauges.component.ts":
/*!********************************************!*\
  !*** ./src/app/gauges/gauges.component.ts ***!
  \********************************************/
/*! exports provided: GaugesManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaugesManager", function() { return GaugesManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_hmi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/hmi.service */ "./src/app/_services/hmi.service.ts");
/* harmony import */ var _switch_switch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switch/switch.component */ "./src/app/gauges/switch/switch.component.ts");
/* harmony import */ var _models_hmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/hmi */ "./src/app/_models/hmi.ts");
/* harmony import */ var _controls_value_value_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/value/value.component */ "./src/app/gauges/controls/value/value.component.ts");
/* harmony import */ var _proc_eng_compressor_compressor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proc-eng/compressor/compressor.component */ "./src/app/gauges/proc-eng/compressor/compressor.component.ts");
/* harmony import */ var _proc_eng_valve_valve_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./proc-eng/valve/valve.component */ "./src/app/gauges/proc-eng/valve/valve.component.ts");
/* harmony import */ var _proc_eng_motor_motor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./proc-eng/motor/motor.component */ "./src/app/gauges/proc-eng/motor/motor.component.ts");
/* harmony import */ var _proc_eng_exchanger_exchanger_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./proc-eng/exchanger/exchanger.component */ "./src/app/gauges/proc-eng/exchanger/exchanger.component.ts");
/* harmony import */ var _gauge_property_gauge_property_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gauge-property/gauge-property.component */ "./src/app/gauges/gauge-property/gauge-property.component.ts");
/* harmony import */ var _controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./controls/html-input/html-input.component */ "./src/app/gauges/controls/html-input/html-input.component.ts");
/* harmony import */ var _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./controls/html-button/html-button.component */ "./src/app/gauges/controls/html-button/html-button.component.ts");
/* harmony import */ var _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./controls/html-select/html-select.component */ "./src/app/gauges/controls/html-select/html-select.component.ts");
/* harmony import */ var _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controls/gauge-progress/gauge-progress.component */ "./src/app/gauges/controls/gauge-progress/gauge-progress.component.ts");
/* harmony import */ var _controls_gauge_semaphore_gauge_semaphore_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./controls/gauge-semaphore/gauge-semaphore.component */ "./src/app/gauges/controls/gauge-semaphore/gauge-semaphore.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var GaugesManager = /** @class */ (function () {
    function GaugesManager(hmiService, dialog) {
        var _this = this;
        this.hmiService = hmiService;
        this.dialog = dialog;
        this.onchange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onevent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // signalGaugeMap = new ViewSignalGaugeMap();      // map of all gauges (GaugeSettings) pro signals
        this.eventGauge = {};
        this.mapGaugeView = {};
        this.gaugeWithProperty = [_proc_eng_compressor_compressor_component__WEBPACK_IMPORTED_MODULE_6__["CompressorComponent"].TypeTag, _proc_eng_valve_valve_component__WEBPACK_IMPORTED_MODULE_7__["ValveComponent"].TypeTag, _proc_eng_motor_motor_component__WEBPACK_IMPORTED_MODULE_8__["MotorComponent"].TypeTag, _proc_eng_exchanger_exchanger_component__WEBPACK_IMPORTED_MODULE_9__["ExchangerComponent"].TypeTag, _controls_value_value_component__WEBPACK_IMPORTED_MODULE_5__["ValueComponent"].TypeTag,
            _controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_11__["HtmlInputComponent"].TypeTag, _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].TypeTag, _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__["HtmlSelectComponent"].TypeTag, _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__["GaugeProgressComponent"].TypeTag,
            _controls_gauge_semaphore_gauge_semaphore_component__WEBPACK_IMPORTED_MODULE_15__["GaugeSemaphoreComponent"].TypeTag];
        this.gaugeWithEvents = [_proc_eng_compressor_compressor_component__WEBPACK_IMPORTED_MODULE_6__["CompressorComponent"].TypeTag, _proc_eng_valve_valve_component__WEBPACK_IMPORTED_MODULE_7__["ValveComponent"].TypeTag, _proc_eng_motor_motor_component__WEBPACK_IMPORTED_MODULE_8__["MotorComponent"].TypeTag, _proc_eng_exchanger_exchanger_component__WEBPACK_IMPORTED_MODULE_9__["ExchangerComponent"].TypeTag, _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].TypeTag];
        this.hmiService.onVariableChanged.subscribe(function (sig) {
            try {
                _this.onchange.emit(sig);
            }
            catch (err) {
            }
        });
    }
    GaugesManager.prototype.ngOnDestroy = function () {
        console.log('GaugesManager destroy');
    };
    GaugesManager.prototype.randomRange = function (min, max) {
        return (Math.random() * (max - min + 1)) + min;
    };
    GaugesManager.prototype.createSettings = function (id, type) {
        var gs = null;
        switch (type) {
            case _proc_eng_compressor_compressor_component__WEBPACK_IMPORTED_MODULE_6__["CompressorComponent"].TypeTag:
                gs = new _models_hmi__WEBPACK_IMPORTED_MODULE_4__["GaugeSettings"](id, type);
                gs.label = _proc_eng_compressor_compressor_component__WEBPACK_IMPORTED_MODULE_6__["CompressorComponent"].LabelTag;
                break;
            case _proc_eng_valve_valve_component__WEBPACK_IMPORTED_MODULE_7__["ValveComponent"].TypeTag:
                gs = new _models_hmi__WEBPACK_IMPORTED_MODULE_4__["GaugeSettings"](id, type);
                gs.label = _proc_eng_valve_valve_component__WEBPACK_IMPORTED_MODULE_7__["ValveComponent"].LabelTag;
                break;
            case _proc_eng_motor_motor_component__WEBPACK_IMPORTED_MODULE_8__["MotorComponent"].TypeTag:
                gs = new _models_hmi__WEBPACK_IMPORTED_MODULE_4__["GaugeSettings"](id, type);
                gs.label = _proc_eng_motor_motor_component__WEBPACK_IMPORTED_MODULE_8__["MotorComponent"].LabelTag;
                break;
            case _proc_eng_exchanger_exchanger_component__WEBPACK_IMPORTED_MODULE_9__["ExchangerComponent"].TypeTag:
                gs = new _models_hmi__WEBPACK_IMPORTED_MODULE_4__["GaugeSettings"](id, type);
                gs.label = _proc_eng_exchanger_exchanger_component__WEBPACK_IMPORTED_MODULE_9__["ExchangerComponent"].LabelTag;
                break;
            case _controls_value_value_component__WEBPACK_IMPORTED_MODULE_5__["ValueComponent"].TypeTag:
                gs = new _models_hmi__WEBPACK_IMPORTED_MODULE_4__["GaugeSettings"](id, type);
                gs.label = _controls_value_value_component__WEBPACK_IMPORTED_MODULE_5__["ValueComponent"].LabelTag;
                break;
            case _switch_switch_component__WEBPACK_IMPORTED_MODULE_3__["SwitchComponent"].TypeTag:
                gs = new _models_hmi__WEBPACK_IMPORTED_MODULE_4__["GaugeSettings"](id, type);
                gs.label = _switch_switch_component__WEBPACK_IMPORTED_MODULE_3__["SwitchComponent"].LabelTag;
                break;
            case _controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_11__["HtmlInputComponent"].TypeTag:
                gs = new _models_hmi__WEBPACK_IMPORTED_MODULE_4__["GaugeSettings"](id, type);
                gs.label = _controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_11__["HtmlInputComponent"].LabelTag;
                break;
            case _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].TypeTag:
                gs = new _models_hmi__WEBPACK_IMPORTED_MODULE_4__["GaugeSettings"](id, type);
                gs.label = _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].LabelTag;
                break;
            case _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__["HtmlSelectComponent"].TypeTag:
                gs = new _models_hmi__WEBPACK_IMPORTED_MODULE_4__["GaugeSettings"](id, type);
                gs.label = _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__["HtmlSelectComponent"].LabelTag;
                break;
            case _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__["GaugeProgressComponent"].TypeTag:
                gs = new _models_hmi__WEBPACK_IMPORTED_MODULE_4__["GaugeSettings"](id, type);
                gs.label = _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__["GaugeProgressComponent"].LabelTag;
                break;
            case _controls_gauge_semaphore_gauge_semaphore_component__WEBPACK_IMPORTED_MODULE_15__["GaugeSemaphoreComponent"].TypeTag:
                gs = new _models_hmi__WEBPACK_IMPORTED_MODULE_4__["GaugeSettings"](id, type);
                gs.label = _controls_gauge_semaphore_gauge_semaphore_component__WEBPACK_IMPORTED_MODULE_15__["GaugeSemaphoreComponent"].LabelTag;
                break;
        }
        return gs;
    };
    GaugesManager.prototype.isWithEvents = function (type) {
        if (type) {
            return this.gaugeWithEvents.indexOf(type) > -1;
        }
        return false;
    };
    GaugesManager.prototype.isGauge = function (type) {
        return this.gaugeWithProperty.indexOf(type) > -1;
    };
    GaugesManager.prototype.isToInitInEditor = function (ga) {
        if (ga.type === _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__["GaugeProgressComponent"].TypeTag) {
            _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__["GaugeProgressComponent"].initElement(ga);
        }
        else if (ga.type === _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].TypeTag) {
            _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].initElement(ga);
        }
        return false;
    };
    GaugesManager.prototype.setSignalValue = function (sig) {
        console.log('end set ' + sig.id + ' ' + sig.value);
        this.onchange.emit(sig);
    };
    GaugesManager.prototype.initGaugesMap = function () {
        this.eventGauge = {};
        this.mapGaugeView = {};
    };
    GaugesManager.prototype.emitBindedSignals = function (domViewId) {
        this.hmiService.emitMappedSignalsGauge(domViewId);
    };
    /**
     * bind dom view, gauge with signal (for animation) and event
     * @param domViewId
     * @param ga
     * @param bindclick
     * @param bindhtmlevent
     */
    GaugesManager.prototype.bindGauge = function (domViewId, ga, bindclick, bindhtmlevent) {
        var sigs = this.getBindSignals(ga);
        if (sigs) {
            for (var i = 0; i < sigs.length; i++) {
                this.hmiService.addSignalGaugeToMap(domViewId, sigs[i], ga);
            }
        }
        var clicks = this.getBindClick(ga);
        if (clicks) { // && !this.eventGauge[ga.id]) {
            this.eventGauge[ga.id] = ga;
            if (!this.mapGaugeView[ga.id]) {
                this.mapGaugeView[ga.id] = {};
                this.mapGaugeView[ga.id][domViewId] = ga;
                bindclick(ga);
            }
            else if (!this.mapGaugeView[ga.id][domViewId]) {
                this.mapGaugeView[ga.id][domViewId] = ga;
                bindclick(ga);
            }
            // bindclick(ga);
        }
        var htmlEvents = this.getHtmlEvents(ga);
        if (htmlEvents) {
            this.eventGauge[htmlEvents.dom.id] = ga;
            bindhtmlevent(htmlEvents);
        }
        this.checkElementToInit(ga);
    };
    /**
     * remove bind of dom view gauge
     * @param domViewId
     */
    GaugesManager.prototype.unbindGauge = function (domViewId) {
        this.hmiService.removeSignalGaugeFromMap(domViewId);
        Object.values(this.mapGaugeView).forEach(function (val) {
            if (val[domViewId]) {
                delete val[domViewId];
            }
        });
    };
    GaugesManager.prototype.checkElementToInit = function (ga) {
        if (ga.type === _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__["HtmlSelectComponent"].TypeTag) {
            return _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__["HtmlSelectComponent"].initElement(ga);
        }
        // } else if (ga.type === GaugeProgressComponent.TypeTag) {
        //   return GaugeProgressComponent.initElement(ga);
        // }
        return null;
    };
    GaugesManager.prototype.onGaugeClick = function (evt) {
    };
    /**
     * get all gauge settings binded to dom view with the signal
     * @param domViewId
     * @param sigid
     */
    GaugesManager.prototype.getGaugeSettings = function (domViewId, sigid) {
        var gslist = this.hmiService.getMappedSignalsGauges(domViewId, sigid);
        return gslist;
    };
    /**
     * get all signals mapped in all dom views
     */
    GaugesManager.prototype.getMappedGaugesSignals = function () {
        return this.hmiService.getMappedVariables();
    };
    GaugesManager.prototype.getBindSignals = function (ga) {
        if (ga.type === _switch_switch_component__WEBPACK_IMPORTED_MODULE_3__["SwitchComponent"].TypeTag) {
            return _switch_switch_component__WEBPACK_IMPORTED_MODULE_3__["SwitchComponent"].getSignals(ga.property);
        }
        else if (ga.type === _proc_eng_valve_valve_component__WEBPACK_IMPORTED_MODULE_7__["ValveComponent"].TypeTag) {
            return _proc_eng_valve_valve_component__WEBPACK_IMPORTED_MODULE_7__["ValveComponent"].getSignals(ga.property);
        }
        else if (ga.type === _proc_eng_motor_motor_component__WEBPACK_IMPORTED_MODULE_8__["MotorComponent"].TypeTag) {
            return _proc_eng_motor_motor_component__WEBPACK_IMPORTED_MODULE_8__["MotorComponent"].getSignals(ga.property);
        }
        else if (ga.type === _proc_eng_exchanger_exchanger_component__WEBPACK_IMPORTED_MODULE_9__["ExchangerComponent"].TypeTag) {
            return _proc_eng_exchanger_exchanger_component__WEBPACK_IMPORTED_MODULE_9__["ExchangerComponent"].getSignals(ga.property);
        }
        else if (ga.type === _controls_value_value_component__WEBPACK_IMPORTED_MODULE_5__["ValueComponent"].TypeTag) {
            return _controls_value_value_component__WEBPACK_IMPORTED_MODULE_5__["ValueComponent"].getSignals(ga.property);
        }
        else if (ga.type === _proc_eng_compressor_compressor_component__WEBPACK_IMPORTED_MODULE_6__["CompressorComponent"].TypeTag) {
            return _proc_eng_compressor_compressor_component__WEBPACK_IMPORTED_MODULE_6__["CompressorComponent"].getSignals(ga.property);
        }
        else if (ga.type === _controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_11__["HtmlInputComponent"].TypeTag) {
            return _controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_11__["HtmlInputComponent"].getSignal(ga.property);
        }
        else if (ga.type === _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].TypeTag) {
            return _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].getSignal(ga.property);
        }
        else if (ga.type === _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__["HtmlSelectComponent"].TypeTag) {
            return _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__["HtmlSelectComponent"].getSignal(ga.property);
        }
        else if (ga.type === _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__["GaugeProgressComponent"].TypeTag) {
            return _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__["GaugeProgressComponent"].getSignal(ga.property);
        }
        else if (ga.type === _controls_gauge_semaphore_gauge_semaphore_component__WEBPACK_IMPORTED_MODULE_15__["GaugeSemaphoreComponent"].TypeTag) {
            return _controls_gauge_semaphore_gauge_semaphore_component__WEBPACK_IMPORTED_MODULE_15__["GaugeSemaphoreComponent"].getSignal(ga.property);
        }
        return null;
    };
    GaugesManager.prototype.getBindClick = function (ga) {
        if (ga.type === _proc_eng_compressor_compressor_component__WEBPACK_IMPORTED_MODULE_6__["CompressorComponent"].TypeTag) {
            return _proc_eng_compressor_compressor_component__WEBPACK_IMPORTED_MODULE_6__["CompressorComponent"].getEvents(ga.property, _models_hmi__WEBPACK_IMPORTED_MODULE_4__["GaugeEventType"].click);
        }
        else if (ga.type === _proc_eng_valve_valve_component__WEBPACK_IMPORTED_MODULE_7__["ValveComponent"].TypeTag) {
            return _proc_eng_valve_valve_component__WEBPACK_IMPORTED_MODULE_7__["ValveComponent"].getEvents(ga.property, _models_hmi__WEBPACK_IMPORTED_MODULE_4__["GaugeEventType"].click);
        }
        else if (ga.type === _proc_eng_motor_motor_component__WEBPACK_IMPORTED_MODULE_8__["MotorComponent"].TypeTag) {
            return _proc_eng_motor_motor_component__WEBPACK_IMPORTED_MODULE_8__["MotorComponent"].getEvents(ga.property, _models_hmi__WEBPACK_IMPORTED_MODULE_4__["GaugeEventType"].click);
        }
        else if (ga.type === _proc_eng_exchanger_exchanger_component__WEBPACK_IMPORTED_MODULE_9__["ExchangerComponent"].TypeTag) {
            return _proc_eng_exchanger_exchanger_component__WEBPACK_IMPORTED_MODULE_9__["ExchangerComponent"].getEvents(ga.property, _models_hmi__WEBPACK_IMPORTED_MODULE_4__["GaugeEventType"].click);
        }
        else if (ga.type === _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].TypeTag) {
            return _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].getEvents(ga.property, _models_hmi__WEBPACK_IMPORTED_MODULE_4__["GaugeEventType"].click);
        }
        return null;
    };
    GaugesManager.prototype.getHtmlEvents = function (ga) {
        if (ga.type === _controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_11__["HtmlInputComponent"].TypeTag) {
            return _controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_11__["HtmlInputComponent"].getHtmlEvents(ga);
        }
        else if (ga.type === _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__["HtmlSelectComponent"].TypeTag) {
            return _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__["HtmlSelectComponent"].getHtmlEvents(ga);
        }
        return null;
    };
    GaugesManager.prototype.processValue = function (ga, svgele, sig) {
        // console.log('gaid: ' + ga.id);
        if (ga.type === _switch_switch_component__WEBPACK_IMPORTED_MODULE_3__["SwitchComponent"].TypeTag) {
            return _switch_switch_component__WEBPACK_IMPORTED_MODULE_3__["SwitchComponent"].processValue(ga, svgele, sig);
        }
        else if (ga.type === _proc_eng_valve_valve_component__WEBPACK_IMPORTED_MODULE_7__["ValveComponent"].TypeTag) {
            return _proc_eng_valve_valve_component__WEBPACK_IMPORTED_MODULE_7__["ValveComponent"].processValue(ga, svgele, sig);
        }
        else if (ga.type === _proc_eng_motor_motor_component__WEBPACK_IMPORTED_MODULE_8__["MotorComponent"].TypeTag) {
            return _proc_eng_motor_motor_component__WEBPACK_IMPORTED_MODULE_8__["MotorComponent"].processValue(ga, svgele, sig);
        }
        else if (ga.type === _controls_value_value_component__WEBPACK_IMPORTED_MODULE_5__["ValueComponent"].TypeTag) {
            return _controls_value_value_component__WEBPACK_IMPORTED_MODULE_5__["ValueComponent"].processValue(ga, svgele, sig);
        }
        else if (ga.type === _proc_eng_compressor_compressor_component__WEBPACK_IMPORTED_MODULE_6__["CompressorComponent"].TypeTag) {
            return _proc_eng_compressor_compressor_component__WEBPACK_IMPORTED_MODULE_6__["CompressorComponent"].processValue(ga, svgele, sig);
        }
        else if (ga.type === _proc_eng_exchanger_exchanger_component__WEBPACK_IMPORTED_MODULE_9__["ExchangerComponent"].TypeTag) {
            return _proc_eng_exchanger_exchanger_component__WEBPACK_IMPORTED_MODULE_9__["ExchangerComponent"].processValue(ga, svgele, sig);
        }
        else if (ga.type === _controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_11__["HtmlInputComponent"].TypeTag) {
            return _controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_11__["HtmlInputComponent"].processValue(ga, svgele, sig);
        }
        else if (ga.type === _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].TypeTag) {
            return _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].processValue(ga, svgele, sig);
        }
        else if (ga.type === _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__["HtmlSelectComponent"].TypeTag) {
            return _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__["HtmlSelectComponent"].processValue(ga, svgele, sig);
        }
        else if (ga.type === _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__["GaugeProgressComponent"].TypeTag) {
            return _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__["GaugeProgressComponent"].processValue(ga, svgele, sig);
        }
        else if (ga.type === _controls_gauge_semaphore_gauge_semaphore_component__WEBPACK_IMPORTED_MODULE_15__["GaugeSemaphoreComponent"].TypeTag) {
            return _controls_gauge_semaphore_gauge_semaphore_component__WEBPACK_IMPORTED_MODULE_15__["GaugeSemaphoreComponent"].processValue(ga, svgele, sig);
        }
    };
    GaugesManager.prototype.putEvent = function (event) {
        if (event.ga.property && event.ga.property.variableId) {
            this.hmiService.putSignalValue(event.ga.property.variableId, event.value);
            event.dbg = 'put ' + event.ga.property.variableId + ' ' + event.value;
        }
        this.onevent.emit(event);
    };
    GaugesManager.prototype.putSignalValue = function (sigid, val) {
        this.hmiService.putSignalValue(sigid, val);
    };
    GaugesManager.getEditDialogTypeToUse = function (type) {
        if (type === _switch_switch_component__WEBPACK_IMPORTED_MODULE_3__["SwitchComponent"].TypeTag) {
            return _gauge_property_gauge_property_component__WEBPACK_IMPORTED_MODULE_10__["GaugeDialogType"].OnlyValue;
        }
        else if (type === _proc_eng_valve_valve_component__WEBPACK_IMPORTED_MODULE_7__["ValveComponent"].TypeTag) {
            return _gauge_property_gauge_property_component__WEBPACK_IMPORTED_MODULE_10__["GaugeDialogType"].RangeWithAlarm;
        }
        else if (type === _proc_eng_motor_motor_component__WEBPACK_IMPORTED_MODULE_8__["MotorComponent"].TypeTag) {
            return _gauge_property_gauge_property_component__WEBPACK_IMPORTED_MODULE_10__["GaugeDialogType"].RangeWithAlarm;
        }
        else if (type === _controls_value_value_component__WEBPACK_IMPORTED_MODULE_5__["ValueComponent"].TypeTag) {
            return _gauge_property_gauge_property_component__WEBPACK_IMPORTED_MODULE_10__["GaugeDialogType"].ValueAndUnit;
        }
        else if (type === _proc_eng_compressor_compressor_component__WEBPACK_IMPORTED_MODULE_6__["CompressorComponent"].TypeTag) {
            return _gauge_property_gauge_property_component__WEBPACK_IMPORTED_MODULE_10__["GaugeDialogType"].RangeWithAlarm;
        }
        else if (type === _proc_eng_exchanger_exchanger_component__WEBPACK_IMPORTED_MODULE_9__["ExchangerComponent"].TypeTag) {
            return _gauge_property_gauge_property_component__WEBPACK_IMPORTED_MODULE_10__["GaugeDialogType"].RangeWithAlarm;
        }
        else if (type === _controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_11__["HtmlInputComponent"].TypeTag) {
            return _gauge_property_gauge_property_component__WEBPACK_IMPORTED_MODULE_10__["GaugeDialogType"].OnlyValue;
        }
        else if (type === _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].TypeTag) {
            return _gauge_property_gauge_property_component__WEBPACK_IMPORTED_MODULE_10__["GaugeDialogType"].OnlyValue;
        }
        else if (type === _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__["HtmlSelectComponent"].TypeTag) {
            return _gauge_property_gauge_property_component__WEBPACK_IMPORTED_MODULE_10__["GaugeDialogType"].Step;
        }
        else if (type === _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__["GaugeProgressComponent"].TypeTag) {
            return _gauge_property_gauge_property_component__WEBPACK_IMPORTED_MODULE_10__["GaugeDialogType"].MinMax;
        }
        else if (type === _controls_gauge_semaphore_gauge_semaphore_component__WEBPACK_IMPORTED_MODULE_15__["GaugeSemaphoreComponent"].TypeTag) {
            return _gauge_property_gauge_property_component__WEBPACK_IMPORTED_MODULE_10__["GaugeDialogType"].Range;
        }
    };
    GaugesManager.getDefaultValue = function (type) {
        if (type === _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__["GaugeProgressComponent"].TypeTag) {
            return _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__["GaugeProgressComponent"].getDefaultValue();
        }
        return null;
    };
    GaugesManager.checkGaugeColor = function (ele, eles, colors) {
        if (ele && eles && (eles.length <= 1 || !eles[1])) {
            if (ele.type === _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__["GaugeProgressComponent"].TypeTag) {
                colors.fill = _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__["GaugeProgressComponent"].getFillColor(eles[0]);
                colors.stroke = _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__["GaugeProgressComponent"].getStrokeColor(eles[0]);
                return true;
            }
            else if (ele.type === _controls_gauge_semaphore_gauge_semaphore_component__WEBPACK_IMPORTED_MODULE_15__["GaugeSemaphoreComponent"].TypeTag) {
                colors.fill = _controls_gauge_semaphore_gauge_semaphore_component__WEBPACK_IMPORTED_MODULE_15__["GaugeSemaphoreComponent"].getFillColor(eles[0]);
                colors.stroke = _controls_gauge_semaphore_gauge_semaphore_component__WEBPACK_IMPORTED_MODULE_15__["GaugeSemaphoreComponent"].getStrokeColor(eles[0]);
                return true;
            }
            else if (ele.type === _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].TypeTag) {
                colors.fill = _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].getFillColor(eles[0]);
                colors.stroke = _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].getStrokeColor(eles[0]);
                return true;
            }
            else if (ele.type === _controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_11__["HtmlInputComponent"].TypeTag) {
                colors.fill = _controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_11__["HtmlInputComponent"].getFillColor(eles[0]);
                colors.stroke = _controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_11__["HtmlInputComponent"].getStrokeColor(eles[0]);
                return true;
            }
            else if (ele.type === _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__["HtmlSelectComponent"].TypeTag) {
                colors.fill = _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__["HtmlSelectComponent"].getFillColor(eles[0]);
                colors.stroke = _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__["HtmlSelectComponent"].getStrokeColor(eles[0]);
                return true;
            }
        }
        return false;
    };
    GaugesManager.initElementColor = function (bkcolor, color, elems) {
        for (var i = 0; i < elems.length; i++) {
            var type = elems[i].getAttribute('type');
            if (type === _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__["GaugeProgressComponent"].TypeTag) {
                _controls_gauge_progress_gauge_progress_component__WEBPACK_IMPORTED_MODULE_14__["GaugeProgressComponent"].initElementColor(bkcolor, color, elems[i]);
            }
            else if (type === _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].TypeTag) {
                _controls_html_button_html_button_component__WEBPACK_IMPORTED_MODULE_12__["HtmlButtonComponent"].initElementColor(bkcolor, color, elems[i]);
            }
            else if (type === _controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_11__["HtmlInputComponent"].TypeTag) {
                _controls_html_input_html_input_component__WEBPACK_IMPORTED_MODULE_11__["HtmlInputComponent"].initElementColor(bkcolor, color, elems[i]);
            }
            else if (type === _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__["HtmlSelectComponent"].TypeTag) {
                _controls_html_select_html_select_component__WEBPACK_IMPORTED_MODULE_13__["HtmlSelectComponent"].initElementColor(bkcolor, color, elems[i]);
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GaugesManager.prototype, "onchange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], GaugesManager.prototype, "onevent", void 0);
    GaugesManager = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_hmi_service__WEBPACK_IMPORTED_MODULE_2__["HmiService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], GaugesManager);
    return GaugesManager;
}());



/***/ }),

/***/ "./src/app/gauges/proc-eng/compressor/compressor.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/gauges/proc-eng/compressor/compressor.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.div-form-field {\r\n    /* background-color: rgba(0,0,0,0.3);\r\n    border-radius: 2px;\r\n    margin: 3px 5px 3px 5px; */\r\n}\r\n.input-form-field {\r\n    width:100%;\r\n    /* padding-left: 4px;\r\n    padding-right: 4px; */\r\n}\r\n::ng-deep .input-form-field input {\r\n    margin-bottom: -5px !important;\r\n}"

/***/ }),

/***/ "./src/app/gauges/proc-eng/compressor/compressor.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/gauges/proc-eng/compressor/compressor.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"div-form-field\">\r\n  <mat-form-field class=\"input-form-field\">\r\n    <input matInput [(ngModel)]=\"data.settings.name\" placeholder=\"Name\" type=\"text\">\r\n  </mat-form-field>\r\n</div>\r\n<!-- <div style=\"display: block\">\r\n  <mat-form-field>\r\n    <mat-select placeholder=\"View (click)\" [(ngModel)]=\"data.settings.property.winmode.name\">\r\n      <mat-option *ngFor=\"let view of data.views\" [value]=\"data.view.name\">\r\n        {{ view.name }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</div> -->\r\n<div style=\"display: block\">\r\n  <!-- <mat-form-field>\r\n    <input matInput [(ngModel)]=\"settings.property.onmin\" placeholder=\"On Min\" type=\"text\">\r\n  </mat-form-field> -->\r\n</div>\r\n<div style=\"display: block\">\r\n  <!-- <mat-form-field>\r\n    <input matInput [(ngModel)]=\"settings.property.onmax\" placeholder=\"On Max\" type=\"text\">\r\n  </mat-form-field> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gauges/proc-eng/compressor/compressor.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/gauges/proc-eng/compressor/compressor.component.ts ***!
  \********************************************************************/
/*! exports provided: CompressorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompressorComponent", function() { return CompressorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gauge-base/gauge-base.component */ "./src/app/gauges/gauge-base/gauge-base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CompressorComponent = /** @class */ (function (_super) {
    __extends(CompressorComponent, _super);
    function CompressorComponent() {
        return _super.call(this) || this;
    }
    CompressorComponent.prototype.ngOnInit = function () {
        if (!this.data) {
            // this.settings.property = new CompressorProperty();
        }
        // let property = JSON.stringify(this.settings.property);
        // this.settings.id = '';
    };
    CompressorComponent.prototype.ngAfterViewInit = function () {
    };
    CompressorComponent.getSignals = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        if (pro.alarmId) {
            res.push(pro.alarmId);
        }
        return res;
    };
    CompressorComponent.processValue = function (ga, svgele, sig) {
        if (svgele.node && svgele.node.children && svgele.node.children.length <= 1) {
            var g = svgele.node.children[0];
            var clr = '';
            var val = parseInt(sig.value, 10);
            if (ga.property && ga.property.ranges) {
                for (var idx = 0; idx < ga.property.ranges.length; idx++) {
                    if (ga.property.ranges[idx].min <= val && ga.property.ranges[idx].max >= val) {
                        clr = ga.property.ranges[idx].color;
                    }
                }
                g.setAttribute('fill', clr);
            }
            if (ga.property.alarmId === sig.id && ga.property.alarmColor && val > 0) {
                g.setAttribute('fill', ga.property.alarmColor);
            }
        }
    };
    CompressorComponent.TypeTag = 'svg-ext-compressor';
    CompressorComponent.LabelTag = 'Compressor';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CompressorComponent.prototype, "data", void 0);
    CompressorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gauge-compressor',
            template: __webpack_require__(/*! ./compressor.component.html */ "./src/app/gauges/proc-eng/compressor/compressor.component.html"),
            styles: [__webpack_require__(/*! ./compressor.component.css */ "./src/app/gauges/proc-eng/compressor/compressor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CompressorComponent);
    return CompressorComponent;
}(_gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__["GaugeBaseComponent"]));



/***/ }),

/***/ "./src/app/gauges/proc-eng/exchanger/exchanger.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/gauges/proc-eng/exchanger/exchanger.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/proc-eng/exchanger/exchanger.component.html":
/*!********************************************************************!*\
  !*** ./src/app/gauges/proc-eng/exchanger/exchanger.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/gauges/proc-eng/exchanger/exchanger.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/gauges/proc-eng/exchanger/exchanger.component.ts ***!
  \******************************************************************/
/*! exports provided: ExchangerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangerComponent", function() { return ExchangerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gauge-base/gauge-base.component */ "./src/app/gauges/gauge-base/gauge-base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExchangerComponent = /** @class */ (function (_super) {
    __extends(ExchangerComponent, _super);
    function ExchangerComponent() {
        return _super.call(this) || this;
    }
    ExchangerComponent.prototype.ngOnInit = function () {
        if (!this.data) {
        }
    };
    ExchangerComponent.getSignals = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        if (pro.alarmId) {
            res.push(pro.alarmId);
        }
        return res;
    };
    ExchangerComponent.processValue = function (ga, svgele, sig) {
        if (svgele.node && svgele.node.children && svgele.node.children.length >= 1) {
            for (var x = 0; x < svgele.node.children.length; x++) {
                var g = svgele.node.children[x];
                var clr = '';
                var val = parseInt(sig.value, 10);
                if (ga.property && ga.property.ranges) {
                    for (var idx = 0; idx < ga.property.ranges.length; idx++) {
                        if (ga.property.ranges[idx].min <= val && ga.property.ranges[idx].max >= val) {
                            clr = ga.property.ranges[idx].color;
                        }
                    }
                    g.setAttribute('fill', clr);
                }
            }
        }
    };
    ExchangerComponent.TypeTag = 'svg-ext-exchanger';
    ExchangerComponent.LabelTag = 'Exchanger';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ExchangerComponent.prototype, "data", void 0);
    ExchangerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gauge-exchanger',
            template: __webpack_require__(/*! ./exchanger.component.html */ "./src/app/gauges/proc-eng/exchanger/exchanger.component.html"),
            styles: [__webpack_require__(/*! ./exchanger.component.css */ "./src/app/gauges/proc-eng/exchanger/exchanger.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExchangerComponent);
    return ExchangerComponent;
}(_gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__["GaugeBaseComponent"]));



/***/ }),

/***/ "./src/app/gauges/proc-eng/motor/motor.component.css":
/*!***********************************************************!*\
  !*** ./src/app/gauges/proc-eng/motor/motor.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/proc-eng/motor/motor.component.html":
/*!************************************************************!*\
  !*** ./src/app/gauges/proc-eng/motor/motor.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/proc-eng/motor/motor.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/gauges/proc-eng/motor/motor.component.ts ***!
  \**********************************************************/
/*! exports provided: MotorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotorComponent", function() { return MotorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gauge-base/gauge-base.component */ "./src/app/gauges/gauge-base/gauge-base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MotorComponent = /** @class */ (function (_super) {
    __extends(MotorComponent, _super);
    function MotorComponent() {
        return _super.call(this) || this;
    }
    MotorComponent.prototype.ngOnInit = function () {
        if (!this.data) {
        }
    };
    MotorComponent.getSignals = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        if (pro.alarmId) {
            res.push(pro.alarmId);
        }
        return res;
    };
    MotorComponent.processValue = function (ga, svgele, sig) {
        if (svgele.node && svgele.node.children && svgele.node.children.length >= 1) {
            for (var x = 0; x < svgele.node.children.length; x++) {
                var g = svgele.node.children[x];
                if (g.id.startsWith("c")) {
                    var clr = '';
                    var val = parseInt(sig.value, 10);
                    if (ga.property && ga.property.ranges) {
                        for (var idx = 0; idx < ga.property.ranges.length; idx++) {
                            if (ga.property.ranges[idx].min <= val && ga.property.ranges[idx].max >= val) {
                                clr = ga.property.ranges[idx].color;
                            }
                        }
                        g.setAttribute('fill', clr);
                    }
                }
            }
        }
    };
    MotorComponent.TypeTag = 'svg-ext-motor';
    MotorComponent.LabelTag = 'Motor';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MotorComponent.prototype, "data", void 0);
    MotorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gauge-motor',
            template: __webpack_require__(/*! ./motor.component.html */ "./src/app/gauges/proc-eng/motor/motor.component.html"),
            styles: [__webpack_require__(/*! ./motor.component.css */ "./src/app/gauges/proc-eng/motor/motor.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MotorComponent);
    return MotorComponent;
}(_gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__["GaugeBaseComponent"]));



/***/ }),

/***/ "./src/app/gauges/proc-eng/valve/valve.component.css":
/*!***********************************************************!*\
  !*** ./src/app/gauges/proc-eng/valve/valve.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/proc-eng/valve/valve.component.html":
/*!************************************************************!*\
  !*** ./src/app/gauges/proc-eng/valve/valve.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/proc-eng/valve/valve.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/gauges/proc-eng/valve/valve.component.ts ***!
  \**********************************************************/
/*! exports provided: ValveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValveComponent", function() { return ValveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../gauge-base/gauge-base.component */ "./src/app/gauges/gauge-base/gauge-base.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValveComponent = /** @class */ (function (_super) {
    __extends(ValveComponent, _super);
    function ValveComponent() {
        return _super.call(this) || this;
    }
    ValveComponent.prototype.ngOnInit = function () {
        if (!this.data) {
            // this.settings.property = new CompressorProperty();
        }
        // let property = JSON.stringify(this.settings.property);
        // this.settings.id = '';
    };
    ValveComponent.getSignals = function (pro) {
        var res = [];
        if (pro.variableId) {
            res.push(pro.variableId);
        }
        if (pro.alarmId) {
            res.push(pro.alarmId);
        }
        return res;
    };
    ValveComponent.processValue = function (ga, svgele, sig) {
        if (svgele.node && svgele.node.children && svgele.node.children.length >= 1) {
            for (var x = 0; x < svgele.node.children.length; x++) {
                var g = svgele.node.children[x];
                var clr = '';
                var val = parseInt(sig.value, 10);
                if (ga.property && ga.property.ranges) {
                    for (var idx = 0; idx < ga.property.ranges.length; idx++) {
                        if (ga.property.ranges[idx].min <= val && ga.property.ranges[idx].max >= val) {
                            clr = ga.property.ranges[idx].color;
                        }
                    }
                    g.setAttribute('fill', clr);
                }
            }
        }
    };
    ValveComponent.TypeTag = 'svg-ext-valve';
    ValveComponent.LabelTag = 'Valve';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ValveComponent.prototype, "data", void 0);
    ValveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gauge-valve',
            template: __webpack_require__(/*! ./valve.component.html */ "./src/app/gauges/proc-eng/valve/valve.component.html"),
            styles: [__webpack_require__(/*! ./valve.component.css */ "./src/app/gauges/proc-eng/valve/valve.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ValveComponent);
    return ValveComponent;
}(_gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__["GaugeBaseComponent"]));



/***/ }),

/***/ "./src/app/gauges/switch/switch.component.css":
/*!****************************************************!*\
  !*** ./src/app/gauges/switch/switch.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gauges/switch/switch.component.html":
/*!*****************************************************!*\
  !*** ./src/app/gauges/switch/switch.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"display: block\">\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"settings.name\" placeholder=\"Name\" type=\"text\">\r\n  </mat-form-field>\r\n</div>\r\n<div style=\"display: block\">\r\n  <mat-form-field>\r\n    <mat-select placeholder=\"Signal\" [(ngModel)]=\"settings.property.signalid\">\r\n      <mat-option *ngFor=\"let sig of signals\" [value]=\"sig.id\">\r\n        {{ sig.name }}\r\n      </mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n</div>\r\n<div style=\"display: block\">\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"settings.property.onmin\" placeholder=\"On Min\" type=\"text\">\r\n  </mat-form-field>\r\n</div>\r\n<div style=\"display: block\">\r\n  <mat-form-field>\r\n    <input matInput [(ngModel)]=\"settings.property.onmax\" placeholder=\"On Max\" type=\"text\">\r\n  </mat-form-field>\r\n</div>"

/***/ }),

/***/ "./src/app/gauges/switch/switch.component.ts":
/*!***************************************************!*\
  !*** ./src/app/gauges/switch/switch.component.ts ***!
  \***************************************************/
/*! exports provided: SwitchComponent, SwitchProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchProperty", function() { return SwitchProperty; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gauge-base/gauge-base.component */ "./src/app/gauges/gauge-base/gauge-base.component.ts");
/* harmony import */ var _models_hmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_models/hmi */ "./src/app/_models/hmi.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SwitchComponent = /** @class */ (function (_super) {
    __extends(SwitchComponent, _super);
    function SwitchComponent() {
        return _super.call(this) || this;
    }
    SwitchComponent.prototype.ngOnInit = function () {
        if (!this.settings.property) {
            this.settings.property = new SwitchProperty();
        }
        // let property = JSON.stringify(this.settings.property);
        // this.settings.id = '';
    };
    SwitchComponent.prototype.ngAfterViewInit = function () {
    };
    SwitchComponent.getSignals = function (pro) {
        var res = [];
        if (pro.signalid) {
            res.push(pro.signalid);
        }
        return res;
    };
    SwitchComponent.processValue = function (ga, svgele, sig) {
        // console.log('gaid: ' + ga.id);
        if (svgele.node && svgele.node.children) {
            var toanimate = void 0;
            for (var i = 0; i < svgele.node.children.length; i++) {
                var node = svgele.node.children[i];
                if (node.id.indexOf('X') >= 0) {
                    toanimate = node.id.substring(node.id.indexOf('X'));
                }
            }
            if (toanimate) {
                var svggsuge = svgele.select('#' + toanimate);
                var path = document.getElementById(toanimate);
                //var pos = path.getBoundingClientRect();
                var pathString = path.getAttribute('d');
                var dims = Raphael.pathBBox(pathString);
                // yourTriangle.animate({transform: "r60" + "," + centerX + "," + centerY}, 2000);
                var rotation = 34;
                if (parseInt(sig.value, 10) === 0) {
                    rotation = 0;
                }
                svggsuge.animate(500).rotate(rotation, dims.x2, dims.y2);
            }
        }
    };
    SwitchComponent.TypeTag = 'svg-ext-switch';
    SwitchComponent.LabelTag = 'Switch';
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_hmi__WEBPACK_IMPORTED_MODULE_2__["GaugeSettings"])
    ], SwitchComponent.prototype, "settings", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwitchComponent.prototype, "signals", void 0);
    SwitchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'gauge-switch',
            template: __webpack_require__(/*! ./switch.component.html */ "./src/app/gauges/switch/switch.component.html"),
            styles: [__webpack_require__(/*! ./switch.component.css */ "./src/app/gauges/switch/switch.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SwitchComponent);
    return SwitchComponent;
}(_gauge_base_gauge_base_component__WEBPACK_IMPORTED_MODULE_1__["GaugeBaseComponent"]));

var SwitchProperty = /** @class */ (function () {
    function SwitchProperty() {
        this.signalid = '';
        this.onmin = 1;
        this.onmax = 1;
    }
    return SwitchProperty;
}());



/***/ }),

/***/ "./src/app/gui-helpers/confirm-dialog/confirm-dialog.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/gui-helpers/confirm-dialog/confirm-dialog.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gui-helpers/confirm-dialog/confirm-dialog.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/gui-helpers/confirm-dialog/confirm-dialog.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 100%;position: relative;padding-bottom: 40px\">\r\n    <div style=\"margin-top: 20px;margin-bottom: 20px;\">\r\n        {{msgtoconfirm}}\r\n    </div>\r\n\r\n    <div mat-dialog-actions style=\"display: inline-block; position: absolute; bottom: 10px; right: 10px\">\r\n        <button mat-raised-button (click)=\"onNoClick()\">CANCEL</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onOkClick()\" [mat-dialog-close]=\"data\" cdkFocusInitial>OK</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/gui-helpers/confirm-dialog/confirm-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/gui-helpers/confirm-dialog/confirm-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.msgtoconfirm = '';
        this.msgtoconfirm = this.data.msg;
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
    };
    ConfirmDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ConfirmDialogComponent.prototype.onOkClick = function () {
        this.dialogRef.close(true);
    };
    ConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/gui-helpers/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.css */ "./src/app/gui-helpers/confirm-dialog/confirm-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/gui-helpers/fab-button/ngx-fab-button.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/gui-helpers/fab-button/ngx-fab-button.component.ts ***!
  \********************************************************************/
/*! exports provided: NgxFabButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxFabButtonComponent", function() { return NgxFabButtonComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_fab_item_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-fab-item-button.component */ "./src/app/gui-helpers/fab-button/ngx-fab-item-button.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NgxFabButtonComponent = /** @class */ (function () {
    function NgxFabButtonComponent(element, cd) {
        this.element = element;
        this.cd = cd;
        this.subs = [];
        this.spaceBetweenButtons = 45;
        this.color = '#dd0031';
        this.disabled = false;
        this.events = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.opened = false;
        this.elementref = element.nativeElement;
        this.state = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({
            display: false,
            direction: 'top',
            event: 'start',
            spaceBetweenButtons: this.spaceBetweenButtons
        });
    }
    NgxFabButtonComponent.prototype.toggle = function () {
        if (this.disabled) {
            return this.disabled;
        }
        this.state.next(__assign({}, this.state.getValue(), { display: !this.state.getValue().display, event: !this.state.getValue().display ? 'open' : 'close' }));
        this.opened = this.state.getValue().display;
    };
    // only top and bottom support content element
    NgxFabButtonComponent.prototype.checkDirectionType = function () {
        if (this.buttons.toArray()) {
            var display_1 = 'block';
            if (this.direction === 'right' || this.direction === 'left') {
                display_1 = 'none';
            }
            this.buttons.toArray().forEach(function (element) {
                element.contentref.nativeElement.style.display = display_1;
            });
        }
    };
    // transition
    NgxFabButtonComponent.prototype.animateButtons = function (eventType) {
        var _this = this;
        this.buttons.toArray().forEach(function (btn, i) {
            i += 1;
            var style = btn.elementref.nativeElement.style;
            if (eventType !== 'directionChanged' && _this.state.getValue().display) {
                style['transform'] = 'scale(1)';
                style['transition-duration'] = '0s';
                if (btn.timeout) {
                    clearTimeout(btn.timeout);
                }
            }
            setTimeout(function () {
                style['transition-duration'] = _this.state.getValue().display ? 90 + (100 * i) + "ms" : '';
                style['transform'] = _this.state.getValue().display ? _this.getTranslate(i) : '';
            }, 50);
            if (eventType !== 'directionChanged' && !_this.state.getValue().display) {
                btn.timeout = setTimeout(function () {
                    style['transform'] = 'scale(0)';
                }, 90 + (100 * i));
            }
        });
    };
    // get transition direction
    NgxFabButtonComponent.prototype.getTranslate = function (i) {
        var animation;
        switch (this.direction) {
            case 'right':
                animation = "translate3d(" + this.state.getValue().spaceBetweenButtons * i + "px,0,0)";
                break;
            case 'bottom':
                animation = "translate3d(0," + this.state.getValue().spaceBetweenButtons * i + "px,0)";
                break;
            case 'left':
                animation = "translate3d(-" + this.state.getValue().spaceBetweenButtons * i + "px,0,0)";
                break;
            default:
                animation = "translate3d(0,-" + this.state.getValue().spaceBetweenButtons * i + "px,0)";
                break;
        }
        return animation;
    };
    /* some problems here */
    // @HostListener('document:click', ['$event.target']) private clickOutside(target) {
    //   if (this.state.getValue().display && !this.elementref.contains(target)) {
    //     this.state.next({
    //       ...this.state.getValue(),
    //       display: false,
    //       event: 'close'
    //     });
    //   }
    // }
    NgxFabButtonComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.direction) {
            // first time to check
            this.checkDirectionType();
        }
        this.buttons.toArray().map(function (v) {
            var sub = v.clicked.subscribe(function () {
                // this.state.next({
                //   ...this.state.getValue(),
                //   display: false,
                //   event: 'close'
                // });
            });
            _this.subs.push(sub);
        });
        var sub = this.state.subscribe(function (v) {
            _this.animateButtons(v.event);
            _this.events.next({
                display: v.display,
                event: v.event,
                direction: v.direction
            });
        });
        this.subs.push(sub);
    };
    // if @Input values changes, we need check the direction type
    NgxFabButtonComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.direction && !changes.direction.firstChange) {
            this.state.next(__assign({}, this.state.getValue(), { event: 'directionChanged', direction: changes.direction.currentValue }));
            // if changes happens
            this.checkDirectionType();
        }
        if (changes.open && changes.open.currentValue) {
            var sub = this.open.subscribe(function (v) {
                if (v !== _this.state.getValue().display) {
                    _this.state.next(__assign({}, _this.state.getValue(), { event: v ? 'open' : 'close', display: v }));
                    // make angular happy
                    _this.cd.markForCheck();
                }
            });
            this.subs.push(sub);
        }
        if (changes.spaceBetweenButtons && changes.spaceBetweenButtons.currentValue) {
            this.state.next(__assign({}, this.state.getValue(), { event: 'spaceBetweenButtonsChanged', spaceBetweenButtons: changes.spaceBetweenButtons.currentValue }));
        }
    };
    NgxFabButtonComponent.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (v) {
            v.unsubscribe();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String)
    ], NgxFabButtonComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String)
    ], NgxFabButtonComponent.prototype, "iconOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", String)
    ], NgxFabButtonComponent.prototype, "direction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], NgxFabButtonComponent.prototype, "spaceBetweenButtons", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"])
    ], NgxFabButtonComponent.prototype, "open", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], NgxFabButtonComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])(),
        __metadata("design:type", Object)
    ], NgxFabButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"])
    ], NgxFabButtonComponent.prototype, "events", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])(),
        __metadata("design:type", Object)
    ], NgxFabButtonComponent.prototype, "opened", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"])(_ngx_fab_item_button_component__WEBPACK_IMPORTED_MODULE_1__["NgxFabItemButtonComponent"]),
        __metadata("design:type", Object)
    ], NgxFabButtonComponent.prototype, "buttons", void 0);
    NgxFabButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            selector: 'ngx-fab-button',
            styles: ["\n  :host {\n    position: absolute;\n  }\n  .fab-menu {\n      box-sizing: border-box;\n      font-size: 12px;\n      width:40px;\n      height: 40px;\n      text-align: left;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      z-index: 9;\n  }\n  .fab-toggle {\n    border-radius: 100%;\n    width: 36px;\n    height: 36px;\n    color: white;\n    text-align: center;\n    line-height: 50px;\n    transform: translate3d(0, 0, 0);\n    transition: all ease-out 200ms;\n    z-index: 2;\n    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);\n    transition-duration: 400ms;\n    transform: scale(1, 1) translate3d(0, 0, 0);\n    cursor: pointer;\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n  }\n  .fab-menu .fab-toggle:hover {\n    transform: scale(1.2, 1.2) translate3d(0, 0, 0);\n  }\n  .fab-menu /deep/ .item {\n     opacity: 0;\n  }\n  .fab-menu.active /deep/ .item {\n     opacity: 1;\n  }\n  .fab-menu.active /deep/ .content-wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .fab-menu.active /deep/ .content {\n    display: block;\n  }\n  .fab-menu.active .fab-toggle {\n    transition-timing-function: linear;\n    transition-duration: 200ms;\n    transform: scale(1, 1) translate3d(0, 0, 0);\n  }\n  "],
            template: "\n    <div class=\"fab-menu\" [class.active]=\"(state | async).display\">\n        <a class=\"fab-toggle\" (click)=\"toggle()\" [style.backgroundColor]=\"color\">\n          <i class=\"material-icons\" *ngIf=\"!opened\"> {{icon}} </i>\n          <i class=\"material-icons\" *ngIf=\"opened\"> {{iconOpen}} </i>\n        </a>\n        <ng-content></ng-content>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], NgxFabButtonComponent);
    return NgxFabButtonComponent;
}());



/***/ }),

/***/ "./src/app/gui-helpers/fab-button/ngx-fab-item-button.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/gui-helpers/fab-button/ngx-fab-item-button.component.ts ***!
  \*************************************************************************/
/*! exports provided: NgxFabItemButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxFabItemButtonComponent", function() { return NgxFabItemButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NgxFabItemButtonComponent = /** @class */ (function () {
    function NgxFabItemButtonComponent() {
        this.color = 'white';
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.exclicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.disabled = false;
    }
    NgxFabItemButtonComponent.prototype.emitClickEvent = function ($event) {
        if (this.disabled) {
            return this.disabled;
        }
        this.clicked.emit($event);
    };
    NgxFabItemButtonComponent.prototype.emitClickExEvent = function ($event) {
        if (this.disabled) {
            return this.disabled;
        }
        this.exclicked.emit($event);
    };
    NgxFabItemButtonComponent.prototype.stopPropagation = function ($event) {
        $event.stopPropagation();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NgxFabItemButtonComponent.prototype, "icon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NgxFabItemButtonComponent.prototype, "svgicon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NgxFabItemButtonComponent.prototype, "iconex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NgxFabItemButtonComponent.prototype, "svgiconex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NgxFabItemButtonComponent.prototype, "content", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgxFabItemButtonComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NgxFabItemButtonComponent.prototype, "clicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], NgxFabItemButtonComponent.prototype, "exclicked", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgxFabItemButtonComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('elementref'),
        __metadata("design:type", Object)
    ], NgxFabItemButtonComponent.prototype, "elementref", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contentref'),
        __metadata("design:type", Object)
    ], NgxFabItemButtonComponent.prototype, "contentref", void 0);
    NgxFabItemButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-fab-item-button',
            styles: ["\n  .item {\n    /* width:40px; */\n    height: 36px;\n    left: 3px;\n    /* left: -3px; */\n    transform: translate3d(0, 0, 0);\n    transition: transform, opacity ease-out 200ms;\n    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n    transition-duration: 180ms;\n    position: absolute;\n    cursor: pointer;\n    top:5px;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    z-index: 9999;\n  }\n  .item.disabled {\n    pointer-events: none;\n  }\n  .item.disabled .fab-item {\n    background-color: lightgray;\n  }\n  .content {\n    z-index: 9999;\n    background: rgba(68,138,255, 1);\n    margin-left: 0px;\n    line-height: 25px;\n    color: white;\n    /* text-transform: lowercase; */\n    padding: 5px 20px 3px 20px;\n    border-top-right-radius: 18px;\n    border-bottom-right-radius: 18px;\n    border-bottom-left-radius: 18px;\n    border-top-left-radius: 18px;\n    display: none;\n    font-size: 13px;\n    height: 28px;\n    /* margin-top: 4px; */\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,.26);\n    white-space:nowrap;\n  }\n  .fab-item {\n    left: 0;\n    background: rgba(68,138,255, 1);\n    border-radius: 100%;\n    width: 36px;\n    height: 36px;\n    position: absolute;\n    color: white;\n    text-align: center;\n    cursor: pointer;\n    line-height: 50px;\n    /* box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); */\n  }\n  .fab-item-ex {\n    top: 0;\n    background: rgba(68,138,255, 1);\n    border-radius: 100%;\n    width: 36px;\n    height: 36px;\n    position: absolute;\n    color: white;\n    text-align: center;\n    cursor: pointer;\n    line-height: 45px;\n    /* box-shadow: 0 2px 5px 0 rgba(0,0,0,.26); */\n  }\n  .fab-item img {\n    padding-bottom: 2px;\n    padding-left: 5px;\n  }\n  "],
            template: "\n    <div #elementref class=\"item {{ disabled ? 'disabled' : ''}}\"\n    (click)=\"emitClickEvent($event)\">\n        <a class=\"fab-item\" [style.backgroundColor]=\"color\">\n          <img *ngIf=\"svgicon\" src=\"{{svgicon}}\"/>\n          <i class=\"material-icons\" *ngIf=\"!svgicon\"> {{ icon }} </i>\n        </a>\n        <div class=\"content-wrapper\" #contentref>\n          <div class=\"content\" [style.display]=\"content ? 'block' : 'none'\" [style.padding-right]=\"iconex ? '28px' : '20px'\">{{content}}\n            <a class=\"fab-item-ex\" [style.backgroundColor]=\"color\" *ngIf=\"iconex\" (click)=\"stopPropagation($event);emitClickExEvent($event)\">\n                <i class=\"material-icons\" style=\"font-size: 18px\"> {{ iconex }} </i>\n            </a>\n          </div>\n        </div>\n    </div>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], NgxFabItemButtonComponent);
    return NgxFabItemButtonComponent;
}());



/***/ }),

/***/ "./src/app/gui-helpers/mat-select-search/mat-select-search.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/gui-helpers/mat-select-search/mat-select-search.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<input matInput class=\"mat-select-search-input mat-select-search-hidden\"/>\r\n\r\n<div class=\"mat-select-search-inner\"\r\n     [ngClass]=\"{'mat-select-search-inner-multiple': matSelect.multiple}\">\r\n  <input matInput\r\n         class=\"mat-select-search-input\"\r\n         #searchSelectInput\r\n         (keydown)=\"_handleKeydown($event)\"\r\n         (input)=\"onInputChange($event.target.value)\"\r\n         (blur)=\"onBlur($event.target.value)\"\r\n         [placeholder]=\"placeholderLabel\"\r\n  />\r\n  <button mat-button *ngIf=\"value\"\r\n          mat-icon-button\r\n          aria-label=\"Clear\"\r\n          (click)=\"_reset(true)\"\r\n          class=\"mat-select-search-clear\">\r\n    <mat-icon>close</mat-icon>\r\n  </button>\r\n</div>\r\n\r\n<div *ngIf=\"noEntriesFoundLabel && value && _options?.length === 0\"\r\n     class=\"mat-select-search-no-entries-found\">\r\n  {{noEntriesFoundLabel}}\r\n</div>"

/***/ }),

/***/ "./src/app/gui-helpers/mat-select-search/mat-select-search.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/gui-helpers/mat-select-search/mat-select-search.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-select-search-hidden {\n  visibility: hidden; }\n\n.mat-select-search-inner {\n  position: absolute;\n  top: 0;\n  width: calc(100% + 22px);\n  border-bottom: 1px solid #cccccc;\n  background: white;\n  z-index: 100; }\n\n.mat-select-search-inner.mat-select-search-inner-multiple {\n    width: calc(100% + 55px); }\n\n::ng-deep .mat-select-search-panel {\n  /* allow absolute positioning relative to outer options container */\n  -webkit-transform: none !important;\n          transform: none !important;\n  max-height: 350px; }\n\n.mat-select-search-input {\n  padding: 16px;\n  padding-right: 36px;\n  box-sizing: border-box;\n  font-size: 15px;\n  border: none; }\n\n.mat-select-search-no-entries-found {\n  padding: 16px; }\n\n.mat-select-search-clear {\n  position: absolute;\n  right: 0;\n  top: 4px; }\n\n::ng-deep .cdk-overlay-pane-select-search {\n  /* correct offsetY so that the selected option is at the position of the select box when opening */\n  margin-top: 40px; }\n"

/***/ }),

/***/ "./src/app/gui-helpers/mat-select-search/mat-select-search.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/gui-helpers/mat-select-search/mat-select-search.component.ts ***!
  \******************************************************************************/
/*! exports provided: MatSelectSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectSearchComponent", function() { return MatSelectSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





/* tslint:disable:member-ordering */
/**
 * Component providing an input field for searching MatSelect options.
 *
 * Example usage:
 *
 * interface Bank {
 *  id: string;
 *  name: string;
 * }
 *
 * @Component({
 *   selector: 'my-app-data-selection',
 *   template: `
 *     <mat-form-field>
 *       <mat-select [formControl]="bankCtrl" placeholder="Bank">
 *         <mat-select-search [formControl]="bankFilterCtrl"></mat-select-search>
 *         <mat-option *ngFor="let bank of filteredBanks | async" [value]="bank.id">
 *           {{bank.name}}
 *         </mat-option>
 *       </mat-select>
 *     </mat-form-field>
 *   `
 * })
 * export class DataSelectionComponent implements OnInit, OnDestroy {
 *
 *   // control for the selected bank
 *   public bankCtrl: FormControl = new FormControl();
 *   // control for the MatSelect filter keyword
 *   public bankFilterCtrl: FormControl = new FormControl();
 *
 *   // list of banks
 *   private banks: Bank[] = [{name: 'Bank A', id: 'A'}, {name: 'Bank B', id: 'B'}, {name: 'Bank C', id: 'C'}];
 *   // list of banks filtered by search keyword
 *   public filteredBanks: ReplaySubject<Bank[]> = new ReplaySubject<Bank[]>(1);
 *
 *   // Subject that emits when the component has been destroyed.
 *   private _onDestroy = new Subject<void>();
 *
 *
 *   ngOnInit() {
 *     // load the initial bank list
 *     this.filteredBanks.next(this.banks.slice());
 *     // listen for search field value changes
 *     this.bankFilterCtrl.valueChanges
 *       .pipe(takeUntil(this._onDestroy))
 *       .subscribe(() => {
 *         this.filterBanks();
 *       });
 *   }
 *
 *   ngOnDestroy() {
 *     this._onDestroy.next();
 *     this._onDestroy.complete();
 *   }
 *
 *   private filterBanks() {
 *     if (!this.banks) {
 *       return;
 *     }
 *
 *     // get the search keyword
 *     let search = this.bankFilterCtrl.value;
 *     if (!search) {
 *       this.filteredBanks.next(this.banks.slice());
 *       return;
 *     } else {
 *       search = search.toLowerCase();
 *     }
 *
 *     // filter the banks
 *     this.filteredBanks.next(
 *       this.banks.filter(bank => bank.name.toLowerCase().indexOf(search) > -1)
 *     );
 *   }
 * }
 */
var MatSelectSearchComponent = /** @class */ (function () {
    function MatSelectSearchComponent(matSelect, changeDetectorRef) {
        this.matSelect = matSelect;
        this.changeDetectorRef = changeDetectorRef;
        /** Label of the search placeholder */
        this.placeholderLabel = 'Suche';
        /** Label to be shown when no entries are found. Set to null if no message should be shown. */
        this.noEntriesFoundLabel = 'Keine Optionen gefunden';
        this.onChange = function (_) { };
        this.onTouched = function (_) { };
        /** Whether the backdrop class has been set */
        this.overlayClassSet = false;
        /** Event that emits when the current value changes */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Subject that emits when the component has been destroyed. */
        this._onDestroy = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    MatSelectSearchComponent_1 = MatSelectSearchComponent;
    Object.defineProperty(MatSelectSearchComponent.prototype, "value", {
        /** Current search value */
        get: function () {
            return this._value;
        },
        enumerable: true,
        configurable: true
    });
    MatSelectSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set custom panel class
        var panelClass = 'mat-select-search-panel';
        if (this.matSelect.panelClass) {
            if (Array.isArray(this.matSelect.panelClass)) {
                this.matSelect.panelClass.push(panelClass);
            }
            else if (typeof this.matSelect.panelClass === 'string') {
                this.matSelect.panelClass = [this.matSelect.panelClass, panelClass];
            }
            else if (typeof this.matSelect.panelClass === 'object') {
                this.matSelect.panelClass[panelClass] = true;
            }
        }
        else {
            this.matSelect.panelClass = panelClass;
        }
        // when the select dropdown panel is opened or closed
        this.matSelect.openedChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._onDestroy))
            .subscribe(function (opened) {
            if (opened) {
                // focus the search field when opening
                _this._focus();
            }
            else {
                // clear it when closing
                _this._reset();
            }
        });
        // set the first item active after the options changed
        this.matSelect.openedChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this._options = _this.matSelect.options;
            _this._options.changes
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this._onDestroy))
                .subscribe(function () {
                var keyManager = _this.matSelect._keyManager;
                if (keyManager && _this.matSelect.panelOpen) {
                    // avoid "expression has been changed" error
                    setTimeout(function () {
                        keyManager.setFirstItemActive();
                    });
                }
            });
        });
        // detect changes when the input changes
        this.change
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            _this.changeDetectorRef.detectChanges();
        });
        this.initMultipleHandling();
    };
    MatSelectSearchComponent.prototype.ngOnDestroy = function () {
        this._onDestroy.next();
        this._onDestroy.complete();
    };
    MatSelectSearchComponent.prototype.ngAfterViewInit = function () {
        this.setOverlayClass();
    };
    /**
     * Handles the key down event with MatSelect.
     * Allows e.g. selecting with enter key, navigation with arrow keys, etc.
     * @param {KeyboardEvent} event
     * @private
     */
    MatSelectSearchComponent.prototype._handleKeydown = function (event) {
        if (event.keyCode === 32) {
            // do not propagate spaces to MatSelect, as this would select the currently active option
            event.stopPropagation();
        }
    };
    MatSelectSearchComponent.prototype.writeValue = function (value) {
        var valueChanged = value !== this._value;
        if (valueChanged) {
            this._value = value;
            this.change.emit(value);
        }
    };
    MatSelectSearchComponent.prototype.onInputChange = function (value) {
        var valueChanged = value !== this._value;
        if (valueChanged) {
            this._value = value;
            this.onChange(value);
            this.change.emit(value);
        }
    };
    MatSelectSearchComponent.prototype.onBlur = function (value) {
        this.writeValue(value);
        this.onTouched();
    };
    MatSelectSearchComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    MatSelectSearchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Focuses the search input field
     * @private
     */
    MatSelectSearchComponent.prototype._focus = function () {
        if (!this.searchSelectInput) {
            return;
        }
        // save and restore scrollTop of panel, since it will be reset by focus()
        // note: this is hacky
        var panel = this.matSelect.panel.nativeElement;
        var scrollTop = panel.scrollTop;
        // focus
        this.searchSelectInput.nativeElement.focus();
        panel.scrollTop = scrollTop;
    };
    /**
     * Resets the current search value
     * @param {boolean} focus whether to focus after resetting
     * @private
     */
    MatSelectSearchComponent.prototype._reset = function (focus) {
        if (!this.searchSelectInput) {
            return;
        }
        this.searchSelectInput.nativeElement.value = '';
        this.onInputChange('');
        if (focus) {
            this._focus();
        }
    };
    /**
     * Sets the overlay class  to correct offsetY
     * so that the selected option is at the position of the select box when opening
     */
    MatSelectSearchComponent.prototype.setOverlayClass = function () {
        var _this = this;
        if (this.overlayClassSet) {
            return;
        }
        var overlayClass = 'cdk-overlay-pane-select-search';
        this.matSelect.overlayDir.attach
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._onDestroy))
            .subscribe(function () {
            // note: this is hacky, but currently there is no better way to do this
            _this.searchSelectInput.nativeElement.parentElement.parentElement
                .parentElement.parentElement.parentElement.classList.add(overlayClass);
        });
        this.overlayClassSet = true;
    };
    /**
     * Initializes handling <mat-select [multiple]="true">
     * Note: to improve this code, mat-select should be extended to allow disabling resetting the selection while filtering.
     */
    MatSelectSearchComponent.prototype.initMultipleHandling = function () {
        var _this = this;
        // if <mat-select [multiple]="true">
        // store previously selected values and restore them when they are deselected
        // because the option is not available while we are currently filtering
        this.matSelect.valueChange
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._onDestroy))
            .subscribe(function (values) {
            if (_this.matSelect.multiple) {
                var restoreSelectedValues_1 = false;
                if (_this._value && _this._value.length
                    && _this.previousSelectedValues && Array.isArray(_this.previousSelectedValues)) {
                    if (!values || !Array.isArray(values)) {
                        values = [];
                    }
                    var optionValues_1 = _this.matSelect.options.map(function (option) { return option.value; });
                    _this.previousSelectedValues.forEach(function (previousValue) {
                        if (values.indexOf(previousValue) === -1 && optionValues_1.indexOf(previousValue) === -1) {
                            // if a value that was selected before is deselected and not found in the options, it was deselected
                            // due to the filtering, so we restore it.
                            values.push(previousValue);
                            restoreSelectedValues_1 = true;
                        }
                    });
                }
                if (restoreSelectedValues_1) {
                    _this.matSelect._onChange(values);
                }
                _this.previousSelectedValues = values;
            }
        });
    };
    var MatSelectSearchComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MatSelectSearchComponent.prototype, "placeholderLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MatSelectSearchComponent.prototype, "noEntriesFoundLabel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('searchSelectInput', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MatSelectSearchComponent.prototype, "searchSelectInput", void 0);
    MatSelectSearchComponent = MatSelectSearchComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mat-select-search',
            template: __webpack_require__(/*! ./mat-select-search.component.html */ "./src/app/gui-helpers/mat-select-search/mat-select-search.component.html"),
            styles: [__webpack_require__(/*! ./mat-select-search.component.scss */ "./src/app/gui-helpers/mat-select-search/mat-select-search.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return MatSelectSearchComponent_1; }),
                    multi: true
                }
            ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelect"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelect"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], MatSelectSearchComponent);
    return MatSelectSearchComponent;
}());



/***/ }),

/***/ "./src/app/gui-helpers/mat-select-search/mat-select-search.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/gui-helpers/mat-select-search/mat-select-search.module.ts ***!
  \***************************************************************************/
/*! exports provided: MatSelectSearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatSelectSearchModule", function() { return MatSelectSearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mat-select-search.component */ "./src/app/gui-helpers/mat-select-search/mat-select-search.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MatSelectSearchModule = /** @class */ (function () {
    function MatSelectSearchModule() {
    }
    MatSelectSearchModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"]
            ],
            declarations: [
                _mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__["MatSelectSearchComponent"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _mat_select_search_component__WEBPACK_IMPORTED_MODULE_1__["MatSelectSearchComponent"]
            ]
        })
    ], MatSelectSearchModule);
    return MatSelectSearchModule;
}());



/***/ }),

/***/ "./src/app/gui-helpers/treetable/treetable.component.css":
/*!***************************************************************!*\
  !*** ./src/app/gui-helpers/treetable/treetable.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    overflow: auto;\r\n}\r\n\r\n.item {\r\n    width: 100%;\r\n    height: 40px;\r\n}\r\n\r\n.item:hover {\r\n    background-color: rgba(0,0,0,0.1);\r\n}\r\n\r\n.item-text {\r\n    width: 500px;\r\n    position: relative;\r\n    display: inline-block;\r\n    overflow: hidden; \r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.item-text div {\r\n    display: inline-block;\r\n    overflow-wrap: break-word;\r\n    text-overflow: ellipsis;\r\n    /* word-wrap: break-word; */\r\n    white-space: nowrap;\r\n}\r\n\r\n.item-property {\r\n    position: relative;\r\n    /* left: 400px; */\r\n    width: 400px;\r\n    display: inline-block;\r\n    overflow: hidden; \r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    line-height: 40px;\r\n}\r\n\r\n.item-check {\r\n    float: right;\r\n    margin-right: 20px;\r\n    line-height: 32px;\r\n    /* display: inline-block; */\r\n}\r\n\r\n.item-waiting {\r\n    /* -moz-transition: height .5s;\r\n    -ms-transition: height .5s;\r\n    -o-transition: height .5s;\r\n    -webkit-transition: height .5s;\r\n    transition: height .5s; */\r\n    display:inline-block;\r\n    height: 40;\r\n    vertical-align: middle;\r\n    /* width: 80%; */\r\n    overflow: hidden;\r\n}\r\n   "

/***/ }),

/***/ "./src/app/gui-helpers/treetable/treetable.component.html":
/*!****************************************************************!*\
  !*** ./src/app/gui-helpers/treetable/treetable.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #treetable class=\"container\" [style.height]=\"containerProperty.height\" [style.width]=\"containerProperty.width\">\r\n  <div *lazyFor=\"let node of list; index as i\" class=\"item\">\r\n    <div *ngIf=\"node.visible\">\r\n      <div class=\"item-text\" [style.left.px]=\"node.childPos * 15\" [style.width.px]=\"500 - node.childPos * 15\">\r\n        <button mat-icon-button (click)=\"onExpandToggle(node)\" enabled=\"node.childs\" *ngIf=\"node.class === nodeType.Object\">\r\n          <mat-icon *ngIf=\"node.expanded\">expand_more</mat-icon>\r\n          <mat-icon *ngIf=\"!node.expanded\">chevron_right</mat-icon>\r\n        </button>\r\n        <div *ngIf=\"!node.childs.length\" class=\"item-waiting\" [ngStyle]=\"{'width': (node.expanded) ? '40px' : '0px'}\">\r\n            <mat-spinner diameter=\"20\"></mat-spinner>\r\n        </div>\r\n        <button mat-icon-button enabled=\"false\" *ngIf=\"node.class !== nodeType.Object\">\r\n          <mat-icon >label</mat-icon>\r\n        </button>\r\n          {{node.text}}\r\n      </div>\r\n      <div class=\"item-property\" [style.left.px]=\"node.childPos * 15\">\r\n        {{node.property}}\r\n      </div>\r\n      <div class=\"item-check\">\r\n        <mat-checkbox [(ngModel)]=\"node.checked\" [disabled]=\"!node.enabled\"  (change)=\"changeStatus(node,$event)\" *ngIf=\"node.class === nodeType.Variable\"></mat-checkbox>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/gui-helpers/treetable/treetable.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/gui-helpers/treetable/treetable.component.ts ***!
  \**************************************************************/
/*! exports provided: TreetableComponent, Node, NodeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreetableComponent", function() { return TreetableComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeType", function() { return NodeType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreetableComponent = /** @class */ (function () {
    function TreetableComponent() {
        this.expand = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.nodeType = NodeType;
        this.nodes = {};
        this.list = [];
        this.containerProperty = { width: '100%', height: '100%' };
    }
    TreetableComponent.prototype.ngOnInit = function () {
        if (this.config) {
            if (this.config.width) {
                this.containerProperty.width = this.config.width;
            }
            if (this.config.height) {
                this.containerProperty.height = this.config.height;
            }
        }
    };
    TreetableComponent.prototype.onExpandToggle = function (node) {
        node.expanded = (node.expanded) ? false : true;
        if (node.expanded) {
            if (!node.childs.length) {
                this.expand.emit(node);
            }
            this.hideNode(node, true);
        }
        else {
            this.hideNode(node, false);
        }
        this.list = this.nodeToItems();
    };
    TreetableComponent.prototype.hideNode = function (node, visible) {
        var _this = this;
        Object.values(node.childs).forEach(function (n) {
            n.visible = visible;
            _this.hideNode(n, (visible) ? n.expanded : visible);
        });
    };
    TreetableComponent.prototype.addNode = function (node, parent, enabled) {
        if (parent) {
            var refp = this.nodes[parent.id];
            node.setParent(refp);
            node.parent.waiting = false;
            node.enabled = enabled;
            if (!enabled) {
                node.checked = true;
            }
        }
        if (Object.keys(this.nodes).indexOf(node.id) < 0) {
            this.nodes[node.id] = node;
        }
    };
    TreetableComponent.prototype.update = function () {
        this.list = this.nodeToItems();
    };
    TreetableComponent.prototype.setNodeProperty = function (node, pro) {
        if (this.nodes[node.id]) {
            this.nodes[node.id].property = pro;
            this.nodes[node.id].type = node.type;
        }
    };
    TreetableComponent.prototype.nodeToItems = function () {
        if (this.nodes && Object.values(this.nodes).length) {
            var result_1 = [];
            Object.values(this.nodes).forEach(function (value) {
                if (value.visible) {
                    result_1.push(value);
                }
            });
            return result_1.sort(function (a, b) { return (a.path > b.path) ? 1 : -1; });
        }
        return [];
    };
    TreetableComponent.prototype.changeStatus = function (node, $event) {
        // console.log(node);
    };
    TreetableComponent.prototype.expandable = function (type) {
        if (type === NodeType.Object) {
            return true;
        }
        else {
            return false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TreetableComponent.prototype, "config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TreetableComponent.prototype, "expand", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('treetable'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TreetableComponent.prototype, "treetable", void 0);
    TreetableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-treetable',
            template: __webpack_require__(/*! ./treetable.component.html */ "./src/app/gui-helpers/treetable/treetable.component.html"),
            styles: [__webpack_require__(/*! ./treetable.component.css */ "./src/app/gui-helpers/treetable/treetable.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TreetableComponent);
    return TreetableComponent;
}());

var Node = /** @class */ (function () {
    function Node(id, text) {
        this.id = '';
        this.path = '';
        this.text = '';
        this.childPos = 0;
        this.expanded = false;
        this.visible = true;
        this.parent = null;
        this.property = '';
        this.type = ''; // boolean, int ...
        this.checked = false;
        this.childs = [];
        this.waiting = true;
        this.enabled = true;
        this.id = id;
        this.text = text;
        this.path = this.text;
    }
    Node.prototype.setParent = function (parent) {
        if (parent) {
            this.parent = parent;
            this.path = parent.path + Node.SEPARATOR + this.text;
            this.childPos = parent.childPos + 1;
            this.parent.childs.push(this);
        }
    };
    Node.SEPARATOR = '>';
    return Node;
}());

var NodeType;
(function (NodeType) {
    NodeType["Object"] = "Object";
    NodeType["Variable"] = "Variable";
    NodeType["Methode"] = "Methode";
})(NodeType || (NodeType = {}));


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.header-panel {\r\n    z-index: 9999 !important;\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    background-color: rgba(33,33,33,0.92);\r\n    color: rgba(255,255,255,1);\r\n    height: 40px;\r\n    width: 200px;\r\n}\r\n\r\n.header-help {\r\n    z-index: 9999 !important;\r\n    position: fixed;\r\n    top: 0px;\r\n    right: 30px;\r\n    /* background-color: rgba(33,33,33,0.92); */\r\n    color: rgba(255,255,255,1);\r\n    height: 36px;\r\n    width: 36px;\r\n\r\n}\r\n\r\n.main-btn {\r\n    height: 34px;\r\n    width: 34px;\r\n    min-width: unset !important;\r\n    padding:unset !important;\r\n    line-height: 34px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n  }\r\n\r\n.main-btn mat-icon {\r\n    font-size: 24px;\r\n    height: unset;\r\n    width: unset;\r\n  }\r\n\r\n.header-menu {\r\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2); \r\n}\r\n\r\n.header-icon {\r\n    padding: 0 14px;\r\n}\r\n\r\n.menu-separator {\r\n    border-top-color: rgba(0,0,0,1);\r\n}\r\n\r\n::ng-deep .leftbar-item-menu {\r\n    background-color: rgba(47,47,47,1);\r\n}\r\n\r\n::ng-deep .mat-menu-item {\r\n    font-size: 11px;\r\n    color: rgba(255,255,255,1);\r\n    height: 30px !important;\r\n    line-height: unset !important;\r\n  }"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-panel\" *ngIf=\"ineditor\">\r\n  <button mat-button title=\"Save Project\" [matMenuTriggerFor]=\"prjview\" class=\"main-btn\">\r\n    <mat-icon aria-label=\"Save Project\">save</mat-icon>\r\n  </button>\r\n  <mat-menu #prjview=\"matMenu\" class=\"leftbar-item-menu header-menu\" yPosition=\"below\" [overlapTrigger]=\"false\">\r\n    <button mat-menu-item (click)=\"onNewProject()\">New Project</button>\r\n    <mat-divider class=\"menu-separator\"></mat-divider>\r\n    <button mat-menu-item (click)=\"onSaveProject()\">Save Project</button>\r\n    <button mat-menu-item (click)=\"onSaveProjectAs()\">Save Project As...</button>\r\n    <mat-divider class=\"menu-separator\"></mat-divider>\r\n    <button mat-menu-item (click)=\"onOpenProject();$event.stopPropagation()\">Open Project</button>\r\n    <!-- <button mat-menu-item (click)=\"onImportVariable();$event.stopPropagation()\">Import Variable</button> -->\r\n    <input type=\"file\" #fileImportInput style=\"display: none\" id=\"projectFileUpload\" (change)=\"onFileChangeListener($event)\"\r\n      accept=\".fuxap\" />\r\n  </mat-menu>\r\n  <button mat-button title=\"View pages editor\" class=\"main-btn\" (click)=\"goTo('/editor')\">\r\n      <mat-icon aria-label=\"View pages editor\">widgets</mat-icon>\r\n  </button>\r\n  <button mat-button title=\"View Devices settings\" class=\"main-btn\" (click)=\"goTo('/device')\">\r\n      <mat-icon aria-label=\"View Devices settings\">device_hub</mat-icon>\r\n  </button>  \r\n</div>\r\n<div class=\"header-help\" *ngIf=\"ineditor && !winele\">\r\n    <button mat-button title=\"Help\" [matMenuTriggerFor]=\"helpmenu\" class=\"device-btn\" style=\"padding-top: 3px !important;\">\r\n        <mat-icon aria-label=\"Show FUXA Help\">help_outline</mat-icon>\r\n    </button>\r\n    <mat-menu #helpmenu=\"matMenu\" class=\"leftbar-item-menu header-menu\" yPosition=\"below\" [overlapTrigger]=\"false\">\r\n        <button mat-menu-item (click)=\"onShowHelp('help')\">Tutorial</button>\r\n        <mat-divider class=\"menu-separator\"></mat-divider>\r\n        <button mat-menu-item (click)=\"onShowHelp('info')\">Info</button>\r\n    </mat-menu>\r\n</div>\r\n<app-tutorial #tutorial></app-tutorial>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent, DialogInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogInfo", function() { return DialogInfo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var _models_hmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_models/hmi */ "./src/app/_models/hmi.ts");
/* harmony import */ var _help_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../help/tutorial/tutorial.component */ "./src/app/help/tutorial/tutorial.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, dialog, projectService) {
        var _this = this;
        this.router = router;
        this.dialog = dialog;
        this.projectService = projectService;
        this.ineditor = false;
        this.winele = false;
        this.router.events.subscribe(function () {
            _this.ineditor = (_this.router.url.indexOf('editor') >= 0 || _this.router.url.indexOf('device') >= 0) ? true : false;
        });
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].type === 'winele') {
            this.winele = true;
            console.log('env ' + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].type);
        }
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        try {
            if (this.subscriptionShowHelp) {
                this.subscriptionShowHelp.unsubscribe();
            }
        }
        catch (e) {
        }
    };
    HeaderComponent.prototype.onClick = function (targetElement) {
        this.sidenav.close();
    };
    HeaderComponent.prototype.onShowHelp = function (page) {
        var data = new _models_hmi__WEBPACK_IMPORTED_MODULE_5__["HelpData"]();
        data.page = page;
        data.tag = 'device';
        this.showHelp(data);
    };
    HeaderComponent.prototype.showHelp = function (data) {
        console.log('show help: ' + data.page);
        if (data.page === 'help') {
            this.tutorial.show = true;
        }
        else if (data.page === 'info') {
            this.showInfo();
        }
    };
    HeaderComponent.prototype.showInfo = function () {
        var dialogRef = this.dialog.open(DialogInfo, {
            minWidth: '250px',
            data: { name: 'Info', version: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].version }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    HeaderComponent.prototype.goTo = function (destination) {
        this.router.navigate([destination]); //, this.ID]);
    };
    //#region Project Events
    HeaderComponent.prototype.onNewProject = function () {
        try {
            if (window.confirm('You want to save the Project change?')) {
                this.onSaveProject();
                this.projectService.setNewProject();
            }
        }
        catch (e) {
        }
    };
    /**
     * save Project and Download in Browser
     */
    HeaderComponent.prototype.onSaveProjectAs = function () {
        try {
            this.projectService.saveProject(true);
        }
        catch (e) {
        }
    };
    HeaderComponent.prototype.onOpenProject = function () {
        var ele = document.getElementById('projectFileUpload');
        ele.click();
    };
    /**
     * open Project event file loaded
     * @param event file resource
     */
    HeaderComponent.prototype.onFileChangeListener = function (event) {
        var _this = this;
        var text = [];
        var files = event.srcElement.files;
        var input = event.target;
        var reader = new FileReader();
        reader.onload = function (data) {
            // console.log(reader.result);
            var prj = JSON.parse(reader.result);
            _this.projectService.setProject(prj, true);
        };
        reader.onerror = function () {
            alert('Unable to read ' + input.files[0]);
        };
        reader.readAsText(input.files[0]);
    };
    /**
     * save Project and Download in Browser
     */
    HeaderComponent.prototype.onSaveProject = function () {
        try {
            this.projectService.saveProject();
        }
        catch (e) {
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tutorial'),
        __metadata("design:type", _help_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_6__["TutorialComponent"])
    ], HeaderComponent.prototype, "tutorial", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());

var DialogInfo = /** @class */ (function () {
    function DialogInfo(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogInfo.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogInfo = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-info',
            template: __webpack_require__(/*! ./info.dialog.html */ "./src/app/header/info.dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogInfo);
    return DialogInfo;
}());



/***/ }),

/***/ "./src/app/header/info.dialog.html":
/*!*****************************************!*\
  !*** ./src/app/header/info.dialog.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div mat-dialog-title style=\"display:inline-block\">\r\n      <div class=\"logo\" style=\"display: inline-block\"></div>\r\n      <div style=\"font-size: 18px;display: inline-block;vertical-align: super;padding-left: 5px;\">FUXA</div>\r\n  </div>\r\n  <mat-icon (click)=\"onNoClick()\" style=\"float:right;margin-right:-10px;margin-top:-10px;cursor:pointer;color:gray;\">clear</mat-icon>\r\n  <div mat-dialog-content style=\"margin-bottom: 10px;\">\r\n    <div style=\"display: block\">\r\n      Version: {{data.version}}\r\n    </div>\r\n    <div style=\"display: block; font-size: 13px;margin-top: 10px;\">\r\n        developed by <span><b>frango</b>team</span>\r\n      </div>\r\n  </div>\r\n  <div mat-dialog-actions style=\"float:right; margin-bottom:0px;padding-bottom:0px\">\r\n    <button mat-raised-button [mat-dialog-close]=\"data\">OK</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/help/tutorial/tutorial.component.css":
/*!******************************************************!*\
  !*** ./src/app/help/tutorial/tutorial.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tutorial-panel {\r\n   width: 460px;\r\n   height: 720px;\r\n   z-index: 99999 !important;\r\n   position: absolute;\r\n   right: 10px;\r\n   top: 50px;\r\n   background-color: rgb(240, 240, 240);\r\n   /* background-color: rgb(250,250,250); */\r\n   box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2),0 2px 6px 0 rgba(0,0,0,0.188235);/*1px 2px 5px 1px rgba(0,0,0,.26);*/\r\n   border: 0px !important;\r\n }\r\n \r\n .tutorial-header {\r\n   height: 36px;\r\n   background-color: #212121;\r\n   color: #ffffff;\r\n   padding-left: 5px;\r\n   cursor: move;\r\n   line-height: 30px;\r\n }\r\n \r\n .tutorial-title {\r\n    padding: 5px 10px 5px 20px;\r\n    font-size: 16px;\r\n }\r\n \r\n .tutorial-close {\r\n   font-size: 28px;\r\n   /* float: right; */\r\n   cursor: pointer;\r\n   /* padding-right: 5px; */\r\n   right: 5px;\r\n     position: absolute;\r\n     top: 0px;\r\n }\r\n \r\n .my-expansion-panel {\r\n    margin: 0px;\r\n }\r\n \r\n .header {\r\n }\r\n \r\n .header mat-panel-title {\r\n    font-size: 20px;\r\n    font-weight: 100;\r\n }\r\n "

/***/ }),

/***/ "./src/app/help/tutorial/tutorial.component.html":
/*!*******************************************************!*\
  !*** ./src/app/help/tutorial/tutorial.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div draggable [draggableHeight]=\"30\" class=\"tutorial-panel\" *ngIf=\"show\">\r\n    <style>\r\n        pre {\r\n            white-space: pre-line;\r\n        }\r\n    </style>\r\n    <div class=\"tutorial-header\">\r\n        <div class=\"tutorial-title\">\r\n            FUXA-editor Tutorial\r\n        </div>\r\n        <div class=\"tutorial-close\" (click)=\"close()\">\r\n            &times;\r\n        </div>\r\n    </div>\r\n    <div class=\"tutorial-body\">\r\n        <mat-accordion multi=\"true\">\r\n            <mat-expansion-panel class=\"my-expansion-panel\">\r\n                <mat-expansion-panel-header class=\"header\" [collapsedHeight]=\"'40px'\" [expandedHeight]=\"'40px'\">\r\n                    <mat-panel-title>\r\n                        Basic Layout\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                Basic content\r\n\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel class=\"my-expansion-panel\">\r\n                <mat-expansion-panel-header class=\"header\" [collapsedHeight]=\"'40px'\" [expandedHeight]=\"'40px'\">\r\n                    <mat-panel-title>\r\n                        Page editor\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                Page editor content\r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel class=\"my-expansion-panel\">\r\n                <mat-expansion-panel-header class=\"header\" [collapsedHeight]=\"'40px'\" [expandedHeight]=\"'40px'\">\r\n                    <mat-panel-title>\r\n                        Device\r\n                    </mat-panel-title>\r\n                    <mat-panel-description>\r\n\r\n                    </mat-panel-description>\r\n                </mat-expansion-panel-header>\r\n                Device content\r\n            </mat-expansion-panel>\r\n        </mat-accordion>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/help/tutorial/tutorial.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/help/tutorial/tutorial.component.ts ***!
  \*****************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TutorialComponent = /** @class */ (function () {
    function TutorialComponent() {
        this.show = false;
    }
    TutorialComponent.prototype.ngOnInit = function () {
    };
    TutorialComponent.prototype.close = function () {
        this.show = false;
    };
    TutorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.component.html */ "./src/app/help/tutorial/tutorial.component.html"),
            styles: [__webpack_require__(/*! ./tutorial.component.css */ "./src/app/help/tutorial/tutorial.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-body {\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\n.home-info {\r\n    \r\n}\r\n\r\n.header {\r\n    display: block;\r\n    z-index: 9999 !important;\r\n    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2) !important; \r\n    /* min-height: 46px !important; */\r\n    /* max-height: 46px !important; */\r\n    height: 46px !important;\r\n    padding-left: 4px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.sidenav {\r\n    padding: 0px 0px 0px 0px;\r\n    background-color: rgba(44, 44, 44, 1) !important;\r\n    color: rgba(255, 255, 255, 1) !important;\r\n    /* max-width: 100px; */\r\n    display: inline-block !important;\r\n    top:0px;\r\n}\r\n\r\n.sidenav-container {\r\n    width: 100%;\r\n    height: 100% !important;\r\n    background-color:#FFFFFF;\r\n}\r\n\r\n::ng-deep .mat-drawer-backdrop.mat-drawer-shown {\r\n    background-color: transparent;\r\n}  "

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\r\n  <mat-sidenav #matsidenav *ngIf=\"showSidenav\" class=\"sidenav\" [mode]=\"showSidenav\">\r\n    <app-sidenav #sidenav [sidenav]=\"matsidenav\" (goToPage)=\"onGoToPage($event)\" (goToLink)=\"onGoToLink($event)\"></app-sidenav>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n    <div class=\"header\">\r\n      <button mat-icon-button *ngIf=\"showSidenav && this.showSidenav !== 'side'\" (click)=\"(matsidenav.opened) ? matsidenav.close() : matsidenav.open()\" class=\"sidenav-toogle\">\r\n        <mat-icon aria-label=\"Menu\">menu</mat-icon>\r\n      </button>\r\n    </div>\r\n    <app-fuxa-view *ngIf=\"showHomeView\" #fuxaview class=\"home-body\" id=\"home\" [view]=\"homeView\" [hmi]=\"hmi\" [gaugesManager]=\"gaugesManager\"></app-fuxa-view>\r\n    <!-- <app-fuxa-view [hidden]=\"!showHomeView\" #fuxaview class=\"home-body\" id=\"home\" [view]=\"homeView\" [hmi]=\"hmi\" [gaugesManager]=\"gaugesManager\"></app-fuxa-view> -->\r\n    <!-- <app-iframe [hidden]=\"isLoading && !showHomeLink\" #iframeview [link]=\"homeLink\" class=\"home-body\"></app-iframe> -->\r\n    <div [style.visibility]=\"(showHomeView) ? 'hidden' : 'visible' \" class=\"home-body home-info\">\r\n      <p>\r\n        Wait...go to editor, map the devices, design your visualization and bind the devices variables.\r\n      </p>\r\n    </div>\r\n  </mat-sidenav-content>\r\n\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _fuxa_view_fuxa_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fuxa-view/fuxa-view.component */ "./src/app/fuxa-view/fuxa-view.component.ts");
/* harmony import */ var _services_hmi_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/hmi.service */ "./src/app/_services/hmi.service.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var _gauges_gauges_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gauges/gauges.component */ "./src/app/gauges/gauges.component.ts");
/* harmony import */ var _models_hmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_models/hmi */ "./src/app/_models/hmi.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomeComponent = /** @class */ (function () {
    function HomeComponent(projectService, router, hmiService, gaugesManager) {
        this.projectService = projectService;
        this.router = router;
        this.hmiService = hmiService;
        this.gaugesManager = gaugesManager;
        // @ViewChild('iframeview') iframeview: IframeComponent;
        this.homeView = new _models_hmi__WEBPACK_IMPORTED_MODULE_8__["View"]();
        this.hmi = new _models_hmi__WEBPACK_IMPORTED_MODULE_8__["Hmi"]();
        this.showSidenav = 'over';
        this.showHomeView = false;
        this.homeLink = '';
        this.showHomeLink = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            this.subscriptionLoad = this.projectService.onLoadHmi.subscribe(function (res) {
                try {
                    _this.loadHmi();
                }
                catch (e) {
                    console.log(e);
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        try {
            // this.subscriptionLoad = this.projectService.onLoadHmi.subscribe(res => {
            //   try {
            //     this.loadHmi();
            //   }
            //   catch (e) {
            //     console.log(e);
            //   }
            // });
            this.loadHmi();
            if (!this.homeView) {
                setTimeout(function () {
                    _this.loadHmi();
                }, 4000);
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        try {
            if (this.subscriptionLoad) {
                this.subscriptionLoad.unsubscribe();
            }
        }
        catch (e) {
        }
    };
    HomeComponent.prototype.onGoToPage = function (event) {
        var view = this.hmi.views.find(function (x) { return x.id === event; });
        if (view) {
            this.homeView = view;
            this.fuxaview.loadHmi(this.homeView);
        }
        this.showHomeLink = false;
        this.showHomeView = (this.homeView) ? true : false;
    };
    HomeComponent.prototype.onGoToLink = function (event) {
        if (event.indexOf('://') >= 0) {
            // this.showHomeView = false;
            // this.showHomeLink = true;
            // this.iframeview.loadLink(event);
        }
        else {
            this.router.navigate([event]).then(function (data) {
                console.log('Route ' + event + ' exists, redirection is done');
            }).catch(function (e) {
                console.log('Route ' + event + '  not found, redirection stopped with no error raised');
                // try iframe link
            });
        }
        console.log(event);
    };
    HomeComponent.prototype.askValue = function () {
        this.hmiService.askDeviceValues();
    };
    HomeComponent.prototype.askStatus = function () {
        this.hmiService.askDeviceStatus();
    };
    HomeComponent.prototype.loadHmi = function () {
        var _this = this;
        var hmi = this.projectService.getHmi();
        if (hmi) {
            this.hmi = hmi;
        }
        if (this.hmi && this.hmi.views && this.hmi.views.length > 0) {
            if (this.hmi.layout.start) {
                var startView = this.hmi.views.find(function (x) { return x.id === _this.hmi.layout.start; });
                if (startView) {
                    this.homeView = startView;
                }
            }
            else {
                this.homeView = this.hmi.views[0];
            }
            // check sidenav
            var nvoid = _models_hmi__WEBPACK_IMPORTED_MODULE_8__["NaviModeType"][this.hmi.layout.navigation.mode];
            if (this.hmi.layout && nvoid !== _models_hmi__WEBPACK_IMPORTED_MODULE_8__["NaviModeType"].void) {
                if (nvoid === _models_hmi__WEBPACK_IMPORTED_MODULE_8__["NaviModeType"].over) {
                    this.showSidenav = 'over';
                }
                else if (nvoid === _models_hmi__WEBPACK_IMPORTED_MODULE_8__["NaviModeType"].fix) {
                    this.showSidenav = 'side';
                    this.matsidenav.open();
                }
                else if (nvoid === _models_hmi__WEBPACK_IMPORTED_MODULE_8__["NaviModeType"].push) {
                    this.showSidenav = 'push';
                }
                this.sidenav.setLayout(this.hmi.layout);
            }
            else {
                this.showSidenav = null;
            }
        }
        this.showHomeView = (this.homeView) ? true : false;
        if (this.homeView && this.fuxaview) {
            this.fuxaview.loadHmi(this.homeView);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["SidenavComponent"])
    ], HomeComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('matsidenav'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"])
    ], HomeComponent.prototype, "matsidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fuxaview'),
        __metadata("design:type", _fuxa_view_fuxa_view_component__WEBPACK_IMPORTED_MODULE_4__["FuxaViewComponent"])
    ], HomeComponent.prototype, "fuxaview", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_hmi_service__WEBPACK_IMPORTED_MODULE_5__["HmiService"],
            _gauges_gauges_component__WEBPACK_IMPORTED_MODULE_7__["GaugesManager"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/iframe/iframe.component.css":
/*!*********************************************!*\
  !*** ./src/app/iframe/iframe.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/iframe/iframe.component.html":
/*!**********************************************!*\
  !*** ./src/app/iframe/iframe.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe width=\"100%\" height=\"100%\" frameBorder=\"0\" [src]=\"urlSafe\"></iframe>\r\n"

/***/ }),

/***/ "./src/app/iframe/iframe.component.ts":
/*!********************************************!*\
  !*** ./src/app/iframe/iframe.component.ts ***!
  \********************************************/
/*! exports provided: IframeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IframeComponent", function() { return IframeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IframeComponent = /** @class */ (function () {
    function IframeComponent(activeroute, sanitizer) {
        this.activeroute = activeroute;
        this.sanitizer = sanitizer;
    }
    IframeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.link) {
            // input
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
        }
        else {
            this.subscription = this.activeroute.params.subscribe(function (params) {
                // routing
                _this.link = params['url'];
                _this.urlSafe = _this.sanitizer.bypassSecurityTrustResourceUrl(_this.link);
            });
        }
    };
    IframeComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    IframeComponent.prototype.loadLink = function (link) {
        this.link = link;
        if (this.link) {
            this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], IframeComponent.prototype, "link", void 0);
    IframeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-iframe',
            template: __webpack_require__(/*! ./iframe.component.html */ "./src/app/iframe/iframe.component.html"),
            styles: [__webpack_require__(/*! ./iframe.component.css */ "./src/app/iframe/iframe.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], IframeComponent);
    return IframeComponent;
}());



/***/ }),

/***/ "./src/app/lab/lab.component.css":
/*!***************************************!*\
  !*** ./src/app/lab/lab.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.lab-body {\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n.box_shadow {\r\n    box-shadow: 0px 2px 6px -1px #888888;\r\n    -webkit-filter: \r\n    drop-shadow( 3px 3px 2px rgba(0,0,0,.7) );\r\n          filter: \r\n    drop-shadow( 3px 3px 2px rgba(0,0,0,.7) );\r\n}\r\n.fab-btn {\r\n    position: absolute;\r\n    right: 10px;\r\n    bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/lab/lab.component.html":
/*!****************************************!*\
  !*** ./src/app/lab/lab.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <app-fuxa-view *ngIf=\"labView\" class=\"lab-body\" id=\"lab\" [view]=\"currentView\" [hmi]=\"hmi\" [gaugesManager]=\"gaugesManager\"></app-fuxa-view>\r\n  <div *ngIf=\"!labView\">\r\n      Loading...\r\n  </div>\r\n  <template #messagecontainer>\r\n  </template>    \r\n  <button mat-mini-fab color=\"warn\" class=\"fab-btn\" (click)=\"onTest()\">Test</button>\r\n  <app-tester #tester></app-tester>\r\n</div>"

/***/ }),

/***/ "./src/app/lab/lab.component.ts":
/*!**************************************!*\
  !*** ./src/app/lab/lab.component.ts ***!
  \**************************************/
/*! exports provided: LabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabComponent", function() { return LabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services/project.service */ "./src/app/_services/project.service.ts");
/* harmony import */ var _models_hmi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/hmi */ "./src/app/_models/hmi.ts");
/* harmony import */ var _gauges_gauges_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gauges/gauges.component */ "./src/app/gauges/gauges.component.ts");
/* harmony import */ var _tester_tester_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tester/tester.service */ "./src/app/tester/tester.service.ts");
/* harmony import */ var _tester_tester_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tester/tester.component */ "./src/app/tester/tester.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LabComponent = /** @class */ (function () {
    function LabComponent(projectService, gaugesManager, testerService) {
        this.projectService = projectService;
        this.gaugesManager = gaugesManager;
        this.testerService = testerService;
        this.currentView = null;
        this.hmi = new _models_hmi__WEBPACK_IMPORTED_MODULE_2__["Hmi"]();
        this.labView = null;
    }
    LabComponent.prototype.ngOnInit = function () {
        try {
            // this.gaugesManager.stopDemo();
            this.loadHmi();
            // this.gaugesManager.startDemo();
        }
        catch (e) {
            console.log(e);
        }
    };
    LabComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        try {
            this.loadHmi();
            if (!this.labView) {
                setTimeout(function () {
                    _this.loadHmi();
                }, 3000);
            }
        }
        catch (e) {
            console.log(e);
        }
    };
    LabComponent.prototype.onTest = function () {
        this.tester.setSignals(this.gaugesManager.getMappedGaugesSignals());
        this.testerService.toggle(true);
    };
    LabComponent.prototype.loadHmi = function () {
        console.log('lab load ' + this.projectService);
        this.hmi = this.projectService.getHmi();
        if (this.hmi && this.hmi.views && this.hmi.views.length > 0) {
            this.currentView = this.hmi.views[0];
            this.labView = this.hmi.views[0];
            var oldsel = localStorage.getItem("@frango.webeditor.currentview");
            if (oldsel) {
                console.log('lab hmi ' + this.currentView);
                for (var i = 0; i < this.hmi.views.length; i++) {
                    if (this.hmi.views[i].name === oldsel) {
                        this.currentView = this.hmi.views[i];
                        break;
                    }
                }
            }
            // this.dataContainer.nativeElement.innerHTML = this.currentView.svgcontent;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('messagecontainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], LabComponent.prototype, "entry", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tester'),
        __metadata("design:type", _tester_tester_component__WEBPACK_IMPORTED_MODULE_5__["TesterComponent"])
    ], LabComponent.prototype, "tester", void 0);
    LabComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            template: __webpack_require__(/*! ./lab.component.html */ "./src/app/lab/lab.component.html"),
            styles: [__webpack_require__(/*! ./lab.component.css */ "./src/app/lab/lab.component.css")]
        }),
        __metadata("design:paramtypes", [_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"],
            _gauges_gauges_component__WEBPACK_IMPORTED_MODULE_3__["GaugesManager"],
            _tester_tester_service__WEBPACK_IMPORTED_MODULE_4__["TesterService"]])
    ], LabComponent);
    return LabComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
            ],
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.html":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav-menu\" *ngIf=\"showSidenav\" style=\"height: 100%\" [ngClass]=\"'sidenav-menu-' + layout.navigation.type\">\r\n    <mat-list >\r\n        <mat-list-item style=\"height: 35px; font-weight: bold; padding-left: 10px;padding-bottom: 10px;margin-bottom: 10px\">\r\n            FUXA\r\n        </mat-list-item>\r\n        <mat-list-item *ngFor=\"let item of layout.navigation.items; let i = index\" [ngClass]=\"'menu-item-' + layout.navigation.type\">\r\n            <button type=\"button\" mat-button class=\"sidenav-btn\" (click)=\"onGoTo(item)\" [ngSwitch]=\"layout.navigation.type\">\r\n                <div *ngSwitchCase=\"'icon'\" class=\"manu-item-content-icon\">\r\n                    <mat-icon>{{item.icon}}</mat-icon>\r\n                </div>\r\n                <div *ngSwitchCase=\"'text'\" class=\"manu-item-content-text\">\r\n                    <span>{{item.text}}</span>\r\n                </div>\r\n                <div *ngSwitchCase=\"'block'\" class=\"manu-item-content-block\">\r\n                    <mat-icon style=\"display: block;\">{{item.icon}}</mat-icon>\r\n                    <span>{{item.text}}</span>\r\n                </div>\r\n                <div *ngSwitchCase=\"'inline'\" class=\"manu-item-content-inline\">\r\n                    <mat-icon style=\"display: inline-block\">{{item.icon}}</mat-icon>\r\n                    <span style=\"display: inline-block\">{{item.text}}</span>\r\n                </div>\r\n            </button>\r\n        </mat-list-item>\r\n    </mat-list>\r\n</div>"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(router, changeDetector) {
        this.router = router;
        this.changeDetector = changeDetector;
        this.goToPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.goToLink = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.layout = null;
        this.showSidenav = false;
    }
    SidenavComponent.prototype.ngAfterViewInit = function () {
    };
    SidenavComponent.prototype.ngAfterContentChecked = function () {
        this.showSidenav = (this.layout) ? true : false;
        this.changeDetector.detectChanges();
    };
    SidenavComponent.prototype.onGoTo = function (item) {
        if (item.view) {
            this.goToPage.emit(item.view);
        }
        else if (item.link) {
            this.goToLink.emit(item.link);
        }
    };
    SidenavComponent.prototype.setLayout = function (ly) {
        this.layout = ly;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"])
    ], SidenavComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SidenavComponent.prototype, "goToPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SidenavComponent.prototype, "goToLink", void 0);
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/tester/tester.component.css":
/*!*********************************************!*\
  !*** ./src/app/tester/tester.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.tester-panel {\r\n  width: 300px;\r\n  height: 563px;\r\n  z-index: 99999 !important;\r\n  position: absolute;\r\n  right: 10px;\r\n  top: 50px;\r\n  background-color: rgb(240, 240, 240);\r\n  /* background-color: rgb(250,250,250); */\r\n  box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2),0 2px 6px 0 rgba(0,0,0,0.188235);/*1px 2px 5px 1px rgba(0,0,0,.26);*/\r\n  border: 0px !important;\r\n}\r\n\r\n.tester-header {\r\n  height: 30px;\r\n  background-color: rgb(230, 230, 230);\r\n  padding-left: 10px;\r\n  cursor: move;\r\n  line-height: 30px;\r\n}\r\n\r\n.tester-close {\r\n  font-size: 28px;\r\n  /* float: right; */\r\n  cursor: pointer;\r\n  /* padding-right: 5px; */\r\n  right: 5px;\r\n    position: absolute;\r\n    top: 0px;\r\n}\r\n\r\n.tester-body {\r\n  overflow-y: auto;\r\n  height: 350px;\r\n}\r\n\r\n.tester-output {\r\n  /* position: absolute; */\r\n  /* bottom: 0px; */\r\n  /* left: 0px; */\r\n  /* right: 0px; */\r\n  overflow-y: auto;\r\n  height: 180px;\r\n  border-top: 1px solid gray;\r\n  padding: 2px 2px 0px 2px;\r\n}\r\n\r\n.output-item {\r\n  display: block;\r\n  font-size: 12px;\r\n}\r\n\r\n.svg-property {\r\n  color: rgba(0,0,0,0.75);\r\n}\r\n\r\n.svg-property span {\r\n  display: block;\r\n  font-size: 12px;\r\n  margin: 0px 5px 0px 10px;\r\n}\r\n\r\n.svg-property input {\r\n  width: 50%;\r\n  display: inline-block;\r\n  margin: 0px 10px 12px 10px;\r\n  border: unset;\r\n  background-color: inherit;\r\n  color: inherit;\r\n  /* border: 1px solid rgba(255,255,255,0.75); */\r\n  background-color: rgb(230, 230, 230);\r\n\r\n  /* border-bottom: 1px solid rgba(255,255,255,0.75); */\r\n}\r\n\r\n.svg-property button {\r\n  /* float: right; */\r\n  color: inherit;\r\n  border: none;\r\n  max-width: 50px;\r\n  min-width: 50px;\r\n  max-height: 20px;\r\n  min-height: 20px;\r\n  /* background-color: rgb(77, 74, 74); */\r\n  font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/tester/tester.component.html":
/*!**********************************************!*\
  !*** ./src/app/tester/tester.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div draggable  [draggableHeight]=\"30\" class=\"tester-panel\" *ngIf=\"show\">\r\n  <style>\r\n    pre {\r\n      white-space: pre-line;\r\n    }\r\n  </style>\r\n  <div name=\"dlgTesterForm\">\r\n    <div class=\"tester-header\">\r\n      <div class=\"tester-title\">\r\n        Variable\r\n      </div>\r\n      <div class=\"tester-close\" (click)=\"close()\">\r\n        &times;\r\n      </div>\r\n    </div>\r\n    <div class=\"tester-body\">\r\n      <div class=\"_svg-property\" mat-dialog-actions>\r\n        <!-- <button mat-button color=\"warn\" type=\"button\" class=\"\" (click)=\"setDemo(true)\">\r\n          Start\r\n        </button>\r\n        <button mat-button color=\"warn\" type=\"button\" class=\"\" (click)=\"setDemo(false)\">\r\n          End\r\n        </button> -->\r\n      </div>\r\n      <br>\r\n      <div *ngFor=\"let item of items\">\r\n        <div class=\"svg-property\">\r\n          <span>{{item.source}} {{item.name}} :</span>\r\n          <input id=\"item.name\" [(ngModel)]=\"item.value\" type=\"text\" class=\"no-spinners\" />\r\n          <button type=\"button\" class=\"\" (click)=\"setSignal(item)\">\r\n            >>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"tester-output\">\r\n      <span *ngFor=\"let item of output; index as i\" class=\"output-item\">\r\n        {{item}}\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/tester/tester.component.ts":
/*!********************************************!*\
  !*** ./src/app/tester/tester.component.ts ***!
  \********************************************/
/*! exports provided: TesterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesterComponent", function() { return TesterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gauges_gauges_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gauges/gauges.component */ "./src/app/gauges/gauges.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_hmi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/hmi.service */ "./src/app/_services/hmi.service.ts");
/* harmony import */ var _tester_tester_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tester/tester.service */ "./src/app/tester/tester.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TesterComponent = /** @class */ (function () {
    // items: Map<string, GaugeSettings> = new Map<string, GaugeSettings>();
    function TesterComponent(hmiService, gaugesManager, testerService) {
        this.hmiService = hmiService;
        this.gaugesManager = gaugesManager;
        this.testerService = testerService;
        this.show = false;
        this.items = [];
        this.output = [];
        this.demoSwitch = true;
    }
    TesterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testerService.change.subscribe(function (isOpen) {
            _this.show = isOpen;
        });
        this.gaugesManager.onevent.subscribe(function (event) {
            if (event.dbg) {
                _this.addOutput(event.dbg);
            }
        });
    };
    TesterComponent.prototype.ngOnDestroy = function () {
        console.log('Tester destroy');
        this.stopDemo();
    };
    TesterComponent.prototype.setSignal = function (sig) {
        this.hmiService.setSignalValue(sig);
        this.addOutput('set ' + sig.id + ' ' + sig.value);
    };
    TesterComponent.prototype.setSignals = function (items) {
        this.items = items;
        // let gauges: GaugeSettings[] = [];
        // Object.entries(items).forEach(([key, value]) => {
        //     console.log(key, value);
        //     gauges.push(<GaugeSettings>value);
        //   }
        // );
        // let vars = this.gaugesManager.getSignals(gauges);
        // if (vars && vars.length > 0) {
        //   this.items = vars;
        // }
        // console.log(this.items);
    };
    TesterComponent.prototype.setDemo = function (flag) {
        console.log('set demo' + flag);
        if (flag) {
            // this.gaugesManager.startDemo();
        }
        else {
            // this.gaugesManager.stopDemo();
        }
    };
    TesterComponent.prototype.addOutput = function (item) {
        this.output.unshift(item);
    };
    TesterComponent.prototype.close = function () {
        this.testerService.toggle(false);
    };
    TesterComponent.prototype.startDemo = function () {
        var _this = this;
        this.stopDemo();
        var t = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(2000);
        this.subscription = t.subscribe(function (t) {
            _this.demoValue();
        });
    };
    TesterComponent.prototype.stopDemo = function () {
        try {
            if (this.subscription) {
                this.subscription.unsubscribe();
            }
        }
        catch (e) {
        }
    };
    TesterComponent.prototype.demoValue = function () {
        // this.demoSwitch = (this.demoSwitch) ? false : true;
        // for (let i = 0; i < this.signals.length; i++) {
        //   if (this.demoSwitch && i % 2) {
        //     continue;
        //   }
        //   if (this.signals[i].type === 'analog') {
        //     this.signals[i].value = Number(this.randomRange(-10, 100)).toFixed(2);
        //   } else if (this.signals[i].type === 'digital') {
        //     this.signals[i].value = (Math.random() > 0.5) ? '1' : '0'; // Number(this.randomRange(0, 0.99)).toFixed(0);
        //   }
        //   this.setSignalValue(this.signals[i]);
        //   console.log('set sig ' + this.signals[i].name + ' ' + this.signals[i].value);
        // }
    };
    TesterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tester',
            template: __webpack_require__(/*! ./tester.component.html */ "./src/app/tester/tester.component.html"),
            styles: [__webpack_require__(/*! ./tester.component.css */ "./src/app/tester/tester.component.css")]
        }),
        __metadata("design:paramtypes", [_services_hmi_service__WEBPACK_IMPORTED_MODULE_3__["HmiService"], _gauges_gauges_component__WEBPACK_IMPORTED_MODULE_1__["GaugesManager"],
            _tester_tester_service__WEBPACK_IMPORTED_MODULE_4__["TesterService"]])
    ], TesterComponent);
    return TesterComponent;
}());



/***/ }),

/***/ "./src/app/tester/tester.service.ts":
/*!******************************************!*\
  !*** ./src/app/tester/tester.service.ts ***!
  \******************************************/
/*! exports provided: TesterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TesterService", function() { return TesterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TesterService = /** @class */ (function () {
    function TesterService() {
        // isOpen = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TesterService.prototype.toggle = function (flag) {
        console.log('toggle tester');
        //   this.isOpen = !this.isOpen;
        this.change.emit(flag); //this.isOpen);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TesterService.prototype, "change", void 0);
    TesterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TesterService);
    return TesterService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    version: __webpack_require__(/*! ../../package.json */ "./package.json").version,
    production: false,
    apiEndpoint: null,
    apiPort: 1881,
    serverEnabled: true,
    type: null
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\work\FUXA\client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map