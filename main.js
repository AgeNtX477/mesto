(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o,i,a,c,u,s,l){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._cardName=e,this._cardLink=n,this._cardLikes=r,this._cardId=o,this._userId=i,this._ownerId=a,this._cardSelector=c,this._handleImageClick=u,this._handleDeleteClick=s,this._handleLikeClick=l}var n,r;return n=t,(r=[{key:"_handlePutLike",value:function(){this._likeButton.classList.add("element__like-button_type_active")}},{key:"_handleDeleteLike",value:function(){this._likeButton.classList.remove("element__like-button_type_active")}},{key:"isLiked",value:function(){var e=this;return this._cardLikes.some((function(t){return t._id===e._userId}))}},{key:"handleDelete",value:function(){this._element.remove()}},{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element__box").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._cardImage.addEventListener("click",(function(){e._handleImageClick()})),this._cardDeleteButton.addEventListener("click",(function(){e._handleDeleteClick(e._cardId)})),this._likeButton.addEventListener("click",(function(){e._handleLikeClick(e._cardId)}))}},{key:"setLikes",value:function(e){this._cardLikes=e,this._element.querySelector(".element__like-counter").textContent=this._cardLikes.length,this.isLiked()?this._handlePutLike():this._handleDeleteLike()}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._likeButton=this._element.querySelector(".element__like-button"),this._cardImage=this._element.querySelector(".element__image"),this._cardTitle=this._element.querySelector(".element__title"),this._cardDeleteButton=this._element.querySelector(".element__del-button_visible"),this._cardImage.src=this._cardLink,this._cardImage.alt=this._cardName,this._cardTitle.textContent=this._cardName,this._setEventListeners(),this.setLikes(this._cardLikes),this._userId!==this._ownerId&&this._cardDeleteButton.classList.add("element__del-button_hidden"),this._element}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._settings=t,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._submitButtonElement=this._form.querySelector(this._settings.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_getErrorElement",value:function(e){var t=e.getAttribute("name");return document.getElementById("".concat(t,"-error"))}},{key:"_showInputError",value:function(e,t){var n=this._getErrorElement(e);n.textContent=t,e.classList.add(this._settings.inputErrorClass),n.classList.add(this._settings.errorClass)}},{key:"_hideInputError",value:function(e){var t=this._getErrorElement(e);t.textContent="",t.classList.remove(this._settings.errorClass),e.classList.remove(this._settings.inputErrorClass)}},{key:"_checkValidity",value:function(e){if(e.validity.valid)this._hideInputError(e);else{var t=e.validationMessage;this._showInputError(e,t)}}},{key:"_makeButtonInaсtive",value:function(){this._submitButtonElement.classList.add(this._settings.inactiveButtonClass),this._submitButtonElement.setAttribute("disabled",!0)}},{key:"_makeButtonActive",value:function(){this._submitButtonElement.classList.remove(this._settings.inactiveButtonClass),this._submitButtonElement.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){Array.from(this._inputList).some((function(e){return!e.validity.valid}))?this._makeButtonInaсtive():this._makeButtonActive()}},{key:"deactivateValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setInputListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkValidity(t),e._toggleButtonState()})),e._toggleButtonState()}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submmit",(function(e){e.preventDefault()})),this._setInputListeners()}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=document.querySelector(n),this._items=r,this._renderer=o}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._closeButton=this._popup.querySelector(".popup__close-button"),this._overlay=this._popup.querySelector(".popup__overlay")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"==e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._closeButton.addEventListener("click",(function(){return e.close()})),this._overlay.addEventListener("click",(function(){return e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=d(e)););return e}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(r);if(o){var n=d(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._popup.querySelector(".popup__image"),t._caption=t._popup.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e,t){l(d(a.prototype),"open",this).call(this),this._caption.textContent=e,this._image.src=t,this._image.alt=e}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=m(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function m(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function k(e,t){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},k(e,t)}function g(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&k(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function a(e,t){var n,r=t.handleSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleSubmit=r,n._form=n._popup.querySelector(".popup__form"),n._inputs=Array.from(n._form.querySelectorAll(".popup__input")),n._submitButton=n._form.querySelector(".popup__submit"),n._submitButtonIsntLoading=n._submitButton.textContent,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;b(w(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues())}))}},{key:"close",value:function(){b(w(a.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._submitButtonIsntLoading}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function E(e){return E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(){return O="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=j(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},O.apply(this,arguments)}function j(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function P(e,t){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},P(e,t)}function C(e,t){if(t&&("object"===E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&P(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._form=t._popup.querySelector(".popup__form"),t}return t=a,(n=[{key:"changeSubmitHandler",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;O(I(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit()}))}},{key:"close",value:function(){O(I(a.prototype),"close",this).call(this),this._form.reset()}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(c);function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(t){var n=t.profileNameSelector,r=t.profileAbouttSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._about=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e,t,n){this._name.textContent=e,this._about.textContent=t,this._avatar.src=n}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var A,D=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._headers=r,this._baseUrl=n}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._checkResponse)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"putLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkResponse)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._checkResponse)}}])&&T(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-44",headers:{authorization:"ed24a158-2646-4ac3-a112-ed7a389062f2","Content-Type":"application/json"}}),U=document.querySelector(".popup__form_place_edit"),x=U.querySelector(".popup__input_type_author"),V=U.querySelector(".popup__input_type_description"),N=document.querySelector(".popup__form_place_add"),H=document.querySelector(".popup__form_place_avatar"),J=document.querySelector(".profile__edit-button"),z=document.querySelector(".profile__add-button"),M=document.querySelector(".profile__avatar-button"),$={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function G(e,n,r,o,i,a){var c=new t(e,n,r,o,i,a,".template__card",(function(){Q.open(e,n)}),(function(e){Z.open(),Z.changeSubmitHandler((function(){D.deleteCard(e).then((function(e){c.handleDelete(),Z.close()})).catch((function(e){console.log(e)}))}))}),(function(e){c.isLiked()?D.deleteLike(e).then((function(e){c.setLikes(e.likes)})).catch((function(e){console.log(e)})):D.putLike(e).then((function(e){c.setLikes(e.likes)})).catch((function(e){console.log(e)}))}));return c.generateCard()}Promise.all([D.getProfile(),D.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];A=o._id,ee.setUserInfo(o.name,o.about,o.avatar),i.reverse(),i.forEach((function(e){var t=G(e.name,e.link,e.likes,e._id,A,e.owner._id);K.addItem(t)}))})).catch((function(e){console.log(e)}));var K=new i({items:[],renderer:function(e){var t=G(e.cardName,e.cardLink,e.cardLikes,e.cardId,A,e.ownerId);K.addItem(t)}},".element"),Q=new _(".popup_img-zoomed"),W=new S(".popup_profile-edit",{handleSubmit:function(e){var t=e.name,n=e.about;W.renderLoading(!0),D.editProfile(t,n).then((function(e){ee.setUserInfo(e.name,e.about,e.avatar),W.close()})).catch((function(e){console.log(e)})).finally((function(){return W.renderLoading(!1)}))}}),X=new S(".popup_img-add",{handleSubmit:function(e){X.renderLoading(!0),D.addCard(e.place,e.url).then((function(e){var t=G(e.name,e.link,e.likes,e._id,A,e.owner._id);K.addItem(t),X.close()})).catch((function(e){console.log(e)})).finally((function(){return X.renderLoading(!1)}))}}),Y=new S(".popup_avatar",{handleSubmit:function(e){Y.renderLoading(!0),D.changeAvatar(e.avatar).then((function(e){ee.setUserAvatar({avatar:e.avatar}),Y.close()})).catch((function(e){console.log(e)})).finally((function(){return Y.renderLoading(!1)}))}}),Z=new B(".popup_del-confirm");Q.setEventListeners(),W.setEventListeners(),X.setEventListeners(),Z.setEventListeners(),Y.setEventListeners(),K.renderItems();var ee=new q({profileNameSelector:".profile__author",profileAbouttSelector:".profile__description",profileAvatarSelector:".profile__avatar"});J.addEventListener("click",(function(){W.open();var e=ee.getUserInfo(),t=e.name,n=e.about;te.deactivateValidation(),x.value=t,V.value=n})),z.addEventListener("click",(function(){X.open(),ne.deactivateValidation()})),M.addEventListener("click",(function(){Y.open(),re.deactivateValidation()}));var te=new r($,U);te.enableValidation();var ne=new r($,N);ne.enableValidation();var re=new r($,H);re.enableValidation()})();