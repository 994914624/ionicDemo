(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/build/hbatjqru.sc.entry.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/build/hbatjqru.sc.entry.js ***!
  \**************************************************************************/
/*! exports provided: IonLoading, IonLoadingController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonLoading", function() { return Loading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonLoadingController", function() { return LoadingController; });
/* harmony import */ var _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/tslib.js */ "./node_modules/@ionic/core/dist/esm/es5/polyfills/tslib.js");
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunk-2994e275.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-2994e275.js");
/* harmony import */ var _chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunk-b9ec67ac.js */ "./node_modules/@ionic/core/dist/esm/es5/build/chunk-b9ec67ac.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
function iosEnterAnimation(e,n){var t=new e,o=new e;o.addElement(n.querySelector("ion-backdrop"));var i=new e;return i.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.01,.3),i.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(t.addElement(n).easing("ease-in-out").duration(200).add(o).add(i))}function iosLeaveAnimation(e,n){var t=new e,o=new e;o.addElement(n.querySelector("ion-backdrop"));var i=new e;return i.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.3,0),i.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(t.addElement(n).easing("ease-in-out").duration(200).add(o).add(i))}function mdEnterAnimation(e,n){var t=new e,o=new e;o.addElement(n.querySelector("ion-backdrop"));var i=new e;return i.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.01,.32),i.fromTo("opacity",.01,1).fromTo("scale",1.1,1),Promise.resolve(t.addElement(n).easing("ease-in-out").duration(200).add(o).add(i))}function mdLeaveAnimation(e,n){var t=new e,o=new e;o.addElement(n.querySelector("ion-backdrop"));var i=new e;return i.addElement(n.querySelector(".loading-wrapper")),o.fromTo("opacity",.32,0),i.fromTo("opacity",.99,0).fromTo("scale",1,.9),Promise.resolve(t.addElement(n).easing("ease-in-out").duration(200).add(o).add(i))}var Loading=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}return e.prototype.componentWillLoad=function(){void 0===this.spinner&&(this.spinner=this.config.get("loadingSpinner","ios"===this.mode?"lines":"crescent"))},e.prototype.componentDidLoad=function(){this.ionLoadingDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionLoadingDidUnload.emit()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["a"])},e.prototype.present=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){var e=this;return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(n){switch(n.label){case 0:return[4,Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["e"])(this,"loadingEnter",iosEnterAnimation,mdEnterAnimation,void 0)];case 1:return n.sent(),this.duration>0&&(this.durationTimeout=setTimeout(function(){return e.dismiss()},this.duration+10)),[2]}})})},e.prototype.dismiss=function(e,n){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this,e,n,"loadingLeave",iosLeaveAnimation,mdLeaveAnimation)},e.prototype.onDidDismiss=function(){return Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.el,"ionLoadingDidDismiss")},e.prototype.onWillDismiss=function(){return Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["c"])(this.el,"ionLoadingWillDismiss")},e.prototype.hostData=function(){var e=this.translucent?Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_3__["k"])(this.mode,"loading-translucent"):{};return{style:{zIndex:4e4+this.overlayIndex},class:Object.assign({},Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_3__["k"])(this.mode,"loading"),e,Object(_chunk_b9ec67ac_js__WEBPACK_IMPORTED_MODULE_3__["g"])(this.cssClass))}},e.prototype.render=function(){return[Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-backdrop",{visible:this.showBackdrop,tappable:!1}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"loading-wrapper",role:"dialog"},this.spinner&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"loading-spinner"},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("ion-spinner",{name:this.spinner})),this.message&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_1__["h"])("div",{class:"loading-content"},this.message))]},Object.defineProperty(e,"is",{get:function(){return"ion-loading"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},spinner:{type:String,attr:"spinner",mutable:!0},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionLoadingDidUnload",method:"ionLoadingDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingDidLoad",method:"ionLoadingDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionLoadingDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ion-loading{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}ion-loading-controller{display:none}.loading-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0;z-index:10}.loading-ios{font-size:14px}.loading-ios .loading-wrapper{border-radius:8px;padding:24px 34px;max-width:270px;max-height:90%;background-color:var(--ion-background-color-step-50,#f2f2f2);color:var(--ion-text-color,#000)}.loading-translucent-ios .loading-wrapper{background-color:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.loading-ios .loading-content{font-weight:700}.loading-ios .loading-spinner+.loading-content{margin-left:16px}.loading-ios .spinner-lines-ios line,.loading-ios .spinner-lines-small-ios line{stroke:var(--ion-text-color-step-400,#666)}.loading-ios .spinner-bubbles circle,.loading-ios .spinner-circles circle{fill:var(--ion-text-color-step-400,#666)}.loading-ios .spinner-crescent circle{stroke:var(--ion-text-color-step-400,#666)}.loading-ios .spinner-dots circle{fill:var(--ion-text-color-step-400,#666)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),LoadingController=function(){function e(){}return e.prototype.create=function(e){return Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.doc.createElement("ion-loading"),e)},e.prototype.dismiss=function(e,n,t){return Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["g"])(this.doc,e,n,"ion-loading",t)},e.prototype.getTop=function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this,void 0,void 0,function(){return _polyfills_tslib_js__WEBPACK_IMPORTED_MODULE_0__["__generator"](this,function(e){return[2,Object(_chunk_2994e275_js__WEBPACK_IMPORTED_MODULE_2__["h"])(this.doc,"ion-loading")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-loading-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}();

/***/ })

}]);
//# sourceMappingURL=67.js.map