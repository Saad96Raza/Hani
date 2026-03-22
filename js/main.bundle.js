(() => {
"use strict";
var __webpack_modules__ = ({
"./src/scss/main.scss"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin


},
"./src/apps/become-a-model/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (BecomeAModel)
});
/* import */ var country_list__rspack_import_0 = __webpack_require__("./node_modules/country-list/country-list.js");
/* import */ var lodash_map__rspack_import_1 = __webpack_require__("./node_modules/lodash/map.js");
/* import */ var lodash_map__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(lodash_map__rspack_import_1);
/* import */ var lodash_forEach__rspack_import_2 = __webpack_require__("./node_modules/lodash/forEach.js");
/* import */ var lodash_forEach__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__rspack_import_2);
/* import */ var litepicker__rspack_import_3 = __webpack_require__("./node_modules/litepicker/dist/litepicker.umd.js");
/* import */ var litepicker__rspack_import_3_default = /*#__PURE__*/__webpack_require__.n(litepicker__rspack_import_3);
/* import */ var _extra_model_data__rspack_import_4 = __webpack_require__("./src/apps/extra/model-data.js");
/* import */ var litepicker_dist_css_litepicker_css__rspack_import_5 = __webpack_require__("./node_modules/litepicker/dist/css/litepicker.css");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}






var BecomeAModel = /*#__PURE__*/ function() {
    "use strict";
    function BecomeAModel() {
        _class_call_check(this, BecomeAModel);
        this.createReRender();
    }
    _create_class(BecomeAModel, [
        {
            key: "createReRender",
            value: function createReRender() {
                this.createCountries();
                this.createModelMeasurement();
                this.createFileInput();
                this.createDateInput();
            }
        },
        {
            key: "createCountries",
            value: function createCountries() {
                var _this = this;
                this.countries = document.querySelector('.countries');
                if (this.countries) {
                    lodash_map__rspack_import_1_default()((0,country_list__rspack_import_0.getData)(), function(element) {
                        _this.countries.innerHTML += '<option value="'.concat(element.name, '">').concat(element.code, " - ").concat(element.name, "</option>");
                    });
                }
            }
        },
        {
            key: "createModelMeasurement",
            value: function createModelMeasurement() {
                var _this = this;
                this.heights = document.querySelector('.heights');
                this.waist = document.querySelector('.waist');
                this.hips = document.querySelector('.hips');
                this.bust = document.querySelector('.bust');
                if (this.heights || this.waist || this.hips) {
                    lodash_map__rspack_import_1_default()(_extra_model_data__rspack_import_4.modelProfileAttributes, function(element) {
                        switch(element.type){
                            case "Height":
                                return _this.heights.innerHTML += '<option value="'.concat(element.cm, '">').concat(element.cm, " cm - ").concat(element.label, "</option>");
                        }
                        switch(element.type){
                            case "Waist":
                                return _this.waist.innerHTML += '<option value="'.concat(element.cm, '">').concat(element.cm, " cm - ").concat(element.label, "</option>");
                        }
                        switch(element.type){
                            case "Bust":
                                return _this.bust.innerHTML += '<option value="'.concat(element.cm, '">').concat(element.cm, " cm - ").concat(element.label, "</option>");
                        }
                        switch(element.type){
                            case "Hips":
                                return _this.hips.innerHTML += '<option value="'.concat(element.cm, '">').concat(element.cm, " cm - ").concat(element.label, "</option>");
                        }
                    });
                }
            }
        },
        {
            key: "createFileInput",
            value: function createFileInput() {
                var that = this;
                that.input = document.querySelectorAll('.file-button .file');
                if (that.input) {
                    that.placeHolder = document.querySelectorAll('.file-button .place-holder');
                    lodash_forEach__rspack_import_2_default()(that.input, function(element, index) {
                        element.addEventListener('change', function() {
                            that.placeHolder[index].textContent = element.files[0].name;
                        });
                    });
                }
            }
        },
        {
            key: "createDateInput",
            value: function createDateInput() {
                var that = this;
                that.dataPicker = document.getElementById("datePicker");
                if (that.dataPicker) {
                    new (litepicker__rspack_import_3_default())({
                        element: that.dataPicker,
                        format: "YYYY-MM-DD",
                        allowInput: true,
                        dropdowns: {
                            minYear: 1970,
                            maxYear: 2026,
                            months: true,
                            years: true // show year dropdown
                        }
                    });
                }
            }
        }
    ]);
    return BecomeAModel;
}();



},
"./src/apps/contact/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Contact)
});
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Contact = /*#__PURE__*/ function() {
    "use strict";
    function Contact() {
        _class_call_check(this, Contact);
        this.createReRender();
    }
    _create_class(Contact, [
        {
            key: "createReRender",
            value: function createReRender() {}
        }
    ]);
    return Contact;
}();



},
"./src/apps/extra/model-data.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  modelProfileAttributes: () => (modelProfileAttributes)
});
var modelProfileAttributes = [
    // Heights
    {
        type: "Height",
        cm: 150,
        label: "4'11''"
    },
    {
        type: "Height",
        cm: 151,
        label: "4'11'' 1/2"
    },
    {
        type: "Height",
        cm: 152,
        label: "5'0''"
    },
    {
        type: "Height",
        cm: 153,
        label: "5'0'' 1/2"
    },
    {
        type: "Height",
        cm: 154,
        label: "5'1''"
    },
    {
        type: "Height",
        cm: 155,
        label: "5'1'' 1/2"
    },
    {
        type: "Height",
        cm: 156,
        label: "5'2''"
    },
    {
        type: "Height",
        cm: 157,
        label: "5'2'' 1/2"
    },
    {
        type: "Height",
        cm: 158,
        label: "5'3''"
    },
    {
        type: "Height",
        cm: 159,
        label: "5'3'' 1/2"
    },
    {
        type: "Height",
        cm: 160,
        label: "5'4''"
    },
    {
        type: "Height",
        cm: 161,
        label: "5'4'' 1/2"
    },
    {
        type: "Height",
        cm: 162,
        label: "5'5''"
    },
    {
        type: "Height",
        cm: 163,
        label: "5'5'' 1/2"
    },
    {
        type: "Height",
        cm: 164,
        label: "5'6''"
    },
    {
        type: "Height",
        cm: 165,
        label: "5'6'' 1/2"
    },
    {
        type: "Height",
        cm: 166,
        label: "5'7''"
    },
    {
        type: "Height",
        cm: 167,
        label: "5'7'' 1/2"
    },
    {
        type: "Height",
        cm: 168,
        label: "5'8''"
    },
    {
        type: "Height",
        cm: 169,
        label: "5'8'' 1/2"
    },
    {
        type: "Height",
        cm: 170,
        label: "5'9''"
    },
    {
        type: "Height",
        cm: 171,
        label: "5'9'' 1/2"
    },
    {
        type: "Height",
        cm: 172,
        label: "5'10''"
    },
    {
        type: "Height",
        cm: 173,
        label: "5'10'' 1/2"
    },
    {
        type: "Height",
        cm: 174,
        label: "5'11''"
    },
    {
        type: "Height",
        cm: 175,
        label: "5'11'' 1/2"
    },
    {
        type: "Height",
        cm: 176,
        label: "6'0''"
    },
    {
        type: "Height",
        cm: 177,
        label: "6'0'' 1/2"
    },
    {
        type: "Height",
        cm: 178,
        label: "6'1''"
    },
    {
        type: "Height",
        cm: 179,
        label: "6'1'' 1/2"
    },
    {
        type: "Height",
        cm: 180,
        label: "6'2''"
    },
    {
        type: "Height",
        cm: 181,
        label: "6'2'' 1/2"
    },
    {
        type: "Height",
        cm: 182,
        label: "6'3''"
    },
    {
        type: "Height",
        cm: 183,
        label: "6'3'' 1/2"
    },
    {
        type: "Height",
        cm: 184,
        label: "6'4''"
    },
    {
        type: "Height",
        cm: 185,
        label: "6'4'' 1/2"
    },
    {
        type: "Height",
        cm: 186,
        label: "6'5''"
    },
    {
        type: "Height",
        cm: 187,
        label: "6'5'' 1/2"
    },
    {
        type: "Height",
        cm: 188,
        label: "6'6''"
    },
    {
        type: "Height",
        cm: 189,
        label: "6'6'' 1/2"
    },
    {
        type: "Height",
        cm: 190,
        label: "6'7''"
    },
    {
        type: "Height",
        cm: 191,
        label: "6'7'' 1/2"
    },
    {
        type: "Height",
        cm: 192,
        label: "6'8''"
    },
    {
        type: "Height",
        cm: 193,
        label: "6'8'' 1/2"
    },
    {
        type: "Height",
        cm: 194,
        label: "6'9''"
    },
    {
        type: "Height",
        cm: 195,
        label: "6'9'' 1/2"
    },
    {
        type: "Height",
        cm: 196,
        label: "6'10''"
    },
    {
        type: "Height",
        cm: 197,
        label: "6'10'' 1/2"
    },
    {
        type: "Height",
        cm: 198,
        label: "6'11''"
    },
    {
        type: "Height",
        cm: 199,
        label: "6'11'' 1/2"
    },
    {
        type: "Height",
        cm: 200,
        label: "7'0''"
    },
    {
        type: "Eye Color",
        name: "Brown"
    },
    {
        type: "Eye Color",
        name: "Dark Brown"
    },
    {
        type: "Eye Color",
        name: "Light Brown"
    },
    {
        type: "Eye Color",
        name: "Hazel"
    },
    {
        type: "Eye Color",
        name: "Amber"
    },
    {
        type: "Eye Color",
        name: "Green"
    },
    {
        type: "Eye Color",
        name: "Light Green"
    },
    {
        type: "Eye Color",
        name: "Blue"
    },
    {
        type: "Eye Color",
        name: "Light Blue"
    },
    {
        type: "Eye Color",
        name: "Ice Blue"
    },
    {
        type: "Eye Color",
        name: "Gray"
    },
    {
        type: "Eye Color",
        name: "Silver"
    },
    {
        type: "Eye Color",
        name: "Violet"
    },
    {
        type: "Eye Color",
        name: "Purple"
    },
    {
        type: "Eye Color",
        name: "Golden"
    },
    {
        type: "Eye Color",
        name: "Honey"
    },
    {
        type: "Eye Color",
        name: "Turquoise"
    },
    {
        type: "Eye Color",
        name: "Sea Green"
    },
    {
        type: "Eye Color",
        name: "Steel Blue"
    },
    {
        type: "Eye Color",
        name: "Copper"
    },
    {
        type: "Eye Color",
        name: "Chestnut"
    },
    // Hair Colors
    {
        type: "Hair Color",
        name: "Black"
    },
    {
        type: "Hair Color",
        name: "Dark Brown"
    },
    {
        type: "Hair Color",
        name: "Brown"
    },
    {
        type: "Hair Color",
        name: "Light Brown"
    },
    {
        type: "Hair Color",
        name: "Blonde"
    },
    {
        type: "Hair Color",
        name: "Platinum Blonde"
    },
    {
        type: "Hair Color",
        name: "Ash Blonde"
    },
    {
        type: "Hair Color",
        name: "Golden Blonde"
    },
    {
        type: "Hair Color",
        name: "Strawberry Blonde"
    },
    {
        type: "Hair Color",
        name: "Red"
    },
    {
        type: "Hair Color",
        name: "Auburn"
    },
    {
        type: "Hair Color",
        name: "Ginger"
    },
    {
        type: "Hair Color",
        name: "Copper"
    },
    {
        type: "Hair Color",
        name: "Chestnut"
    },
    {
        type: "Hair Color",
        name: "Gray"
    },
    {
        type: "Hair Color",
        name: "Silver"
    },
    {
        type: "Hair Color",
        name: "White"
    },
    {
        type: "Hair Color",
        name: "Pastel Pink"
    },
    {
        type: "Hair Color",
        name: "Pastel Blue"
    },
    {
        type: "Hair Color",
        name: "Pastel Purple"
    },
    {
        type: "Hair Color",
        name: "Rainbow / Multicolor"
    },
    {
        type: "Hair Color",
        name: "Ombre"
    },
    {
        type: "Hair Color",
        name: "Highlights"
    },
    {
        type: "Hair Color",
        name: "Balayage"
    },
    {
        type: "Hair Color",
        name: "Jet Black"
    },
    {
        type: "Hair Color",
        name: "Chocolate Brown"
    },
    {
        type: "Hair Color",
        name: "Honey Brown"
    },
    // Numeric busts in cm
    {
        type: "Bust",
        cm: 71,
        label: "28\""
    },
    {
        type: "Bust",
        cm: 76,
        label: "30\""
    },
    {
        type: "Bust",
        cm: 81,
        label: "32\""
    },
    {
        type: "Bust",
        cm: 86,
        label: "34\""
    },
    {
        type: "Bust",
        cm: 91,
        label: "36\""
    },
    {
        type: "Bust",
        cm: 97,
        label: "38\""
    },
    {
        type: "Bust",
        cm: 102,
        label: "40\""
    },
    {
        type: "Bust",
        cm: 107,
        label: "42\""
    },
    {
        type: "Bust",
        cm: 112,
        label: "44\""
    },
    {
        type: "Bust",
        cm: 117,
        label: "46\""
    },
    {
        type: "Bust",
        cm: 122,
        label: "48\""
    },
    {
        type: "Bust",
        cm: 83.5,
        label: "A"
    },
    {
        type: "Bust",
        cm: 86,
        label: "B"
    },
    {
        type: "Bust",
        cm: 88.5,
        label: "C"
    },
    {
        type: "Bust",
        cm: 91,
        label: "D"
    },
    {
        type: "Bust",
        cm: 93.5,
        label: "DD / E"
    },
    {
        type: "Bust",
        cm: 96,
        label: "F"
    },
    {
        type: "Bust",
        cm: 98.5,
        label: "G"
    },
    // Waist Sizes
    {
        type: "Waist",
        cm: 56,
        label: "22\""
    },
    {
        type: "Waist",
        cm: 58,
        label: "23\""
    },
    {
        type: "Waist",
        cm: 61,
        label: "24\""
    },
    {
        type: "Waist",
        cm: 64,
        label: "25\""
    },
    {
        type: "Waist",
        cm: 66,
        label: "26\""
    },
    {
        type: "Waist",
        cm: 69,
        label: "27\""
    },
    {
        type: "Waist",
        cm: 71,
        label: "28\""
    },
    {
        type: "Waist",
        cm: 74,
        label: "29\""
    },
    {
        type: "Waist",
        cm: 76,
        label: "30\""
    },
    {
        type: "Waist",
        cm: 79,
        label: "31\""
    },
    {
        type: "Waist",
        cm: 81,
        label: "32\""
    },
    {
        type: "Waist",
        cm: 84,
        label: "33\""
    },
    {
        type: "Waist",
        cm: 86,
        label: "34\""
    },
    {
        type: "Hips",
        cm: 81,
        label: "32\""
    },
    {
        type: "Hips",
        cm: 86,
        label: "34\""
    },
    {
        type: "Hips",
        cm: 91,
        label: "36\""
    },
    {
        type: "Hips",
        cm: 97,
        label: "38\""
    },
    {
        type: "Hips",
        cm: 102,
        label: "40\""
    },
    {
        type: "Hips",
        cm: 107,
        label: "42\""
    },
    {
        type: "Hips",
        cm: 112,
        label: "44\""
    },
    {
        type: "Hips",
        cm: 117,
        label: "46\""
    },
    {
        type: "Hips",
        cm: 122,
        label: "48\""
    },
    {
        type: "Hips",
        cm: 127,
        label: "50\""
    },
    {
        type: "Shoe Size",
        size: 4,
        label: "4"
    },
    {
        type: "Shoe Size",
        size: 4.5,
        label: "4.5"
    },
    {
        type: "Shoe Size",
        size: 5,
        label: "5"
    },
    {
        type: "Shoe Size",
        size: 5.5,
        label: "5.5"
    },
    {
        type: "Shoe Size",
        size: 6,
        label: "6"
    },
    {
        type: "Shoe Size",
        size: 6.5,
        label: "6.5"
    },
    {
        type: "Shoe Size",
        size: 7,
        label: "7"
    },
    {
        type: "Shoe Size",
        size: 7.5,
        label: "7.5"
    },
    {
        type: "Shoe Size",
        size: 8,
        label: "8"
    },
    {
        type: "Shoe Size",
        size: 8.5,
        label: "8.5"
    },
    {
        type: "Shoe Size",
        size: 9,
        label: "9"
    },
    {
        type: "Shoe Size",
        size: 9.5,
        label: "9.5"
    },
    {
        type: "Shoe Size",
        size: 10,
        label: "10"
    },
    {
        type: "Shoe Size",
        size: 10.5,
        label: "10.5"
    },
    {
        type: "Shoe Size",
        size: 11,
        label: "11"
    }
];


},
"./src/apps/home/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Home)
});
/* import */ var _splidejs_splide__rspack_import_0 = __webpack_require__("./node_modules/@splidejs/splide/dist/js/splide.esm.js");
/* import */ var _splidejs_splide_css_core__rspack_import_1 = __webpack_require__("./node_modules/@splidejs/splide/dist/css/splide-core.min.css");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}


var Home = /*#__PURE__*/ function() {
    "use strict";
    function Home() {
        _class_call_check(this, Home);
        this.createReRender();
    }
    _create_class(Home, [
        {
            key: "createReRender",
            value: function createReRender() {
                this.createModelsSlider();
            }
        },
        {
            key: "createModelsSlider",
            value: function createModelsSlider() {
                var _this = this;
                this.splideWrapper = document.querySelector(".home-gallery-slider");
                if (this.splideWrapper) {
                    this.splide = new _splidejs_splide__rspack_import_0["default"](this.splideWrapper, {
                        type: 'loop',
                        drag: 'free',
                        interval: 3000,
                        autoplay: true,
                        speed: 2000,
                        pauseOnHover: false,
                        perPage: 3,
                        arrows: false,
                        focus: 'center',
                        gap: '4rem',
                        breakpoints: {
                            1280: {
                                perPage: 4
                            },
                            1024: {
                                perPage: 3
                            },
                            768: {
                                perPage: 2
                            },
                            480: {
                                perPage: 1.5
                            }
                        }
                    });
                    this.bar = this.splide.root.querySelector('.home-slider-progress-bar');
                    this.splide.on('mounted move', function() {
                        var end = _this.splide.Components.Controller.getEnd() + 1;
                        var rate = Math.min((_this.splide.index + 1) / end, 1);
                        _this.bar.style.width = 100 * rate + '%';
                    });
                    this.splide.mount();
                }
            }
        }
    ]);
    return Home;
}();



},
"./src/apps/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* import */ var _home__rspack_import_0 = __webpack_require__("./src/apps/home/index.js");
/* import */ var _contact__rspack_import_1 = __webpack_require__("./src/apps/contact/index.js");
/* import */ var _become_a_model__rspack_import_2 = __webpack_require__("./src/apps/become-a-model/index.js");
/* import */ var _model__rspack_import_3 = __webpack_require__("./src/apps/model/index.js");
/* import */ var _single_model__rspack_import_4 = __webpack_require__("./src/apps/single-model/index.js");
/* import */ var _barba_core__rspack_import_5 = __webpack_require__("./node_modules/@barba/core/dist/barba.umd.js");
/* import */ var _barba_core__rspack_import_5_default = /*#__PURE__*/__webpack_require__.n(_barba_core__rspack_import_5);
/* import */ var gsap__rspack_import_8 = __webpack_require__("./node_modules/gsap/index.js");
/* import */ var lodash_forEach__rspack_import_6 = __webpack_require__("./node_modules/lodash/forEach.js");
/* import */ var lodash_forEach__rspack_import_6_default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__rspack_import_6);
/* import */ var _scss_main_scss__rspack_import_7 = __webpack_require__("./src/scss/main.scss");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}









var App = /*#__PURE__*/ function() {
    "use strict";
    function App() {
        _class_call_check(this, App);
        this.scroll = {
            last: 0,
            current: 0,
            nav: document.querySelector('.header')
        };
        this.pages = {
            home: new _home__rspack_import_0["default"](),
            contact: new _contact__rspack_import_1["default"](),
            model: new _model__rspack_import_3["default"](),
            become_a_model: new _become_a_model__rspack_import_2["default"](),
            single_model: new _single_model__rspack_import_4["default"]()
        };
        this.offCanvas = document.querySelector('#offcanvas');
        this.links = document.querySelectorAll('.menu li a');
        this.createStickyNav();
        this.createAjaxNavigation();
        this.createCreativeCta();
        this.createReRender();
        this.addEventListeners();
    }
    _create_class(App, [
        {
            key: "createStickyNav",
            value: function createStickyNav() {
                this.scroll.current = window.scrollY;
                if (this.scroll.current > this.scroll.last) {
                    this.scroll.nav.style.transform = "translateY(-100%)";
                } else {
                    this.scroll.nav.style.transform = "translateY(0)";
                }
                this.scroll.last = this.scroll.current;
            }
        },
        {
            key: "createAjaxNavigation",
            value: function createAjaxNavigation() {
                var _this = this;
                lodash_forEach__rspack_import_6_default()(this.links, function(element) {
                    element.addEventListener('click', function() {
                        return _this.offCanvas.checked = false;
                    });
                });
                var easeIn = function easeIn(container, done) {
                    return gsap__rspack_import_8["default"].to(container, {
                        autoAlpha: 0,
                        duration: 1,
                        ease: 'none',
                        onComplete: function onComplete() {
                            return done();
                        }
                    });
                };
                var easeOut = function easeOut(container) {
                    return gsap__rspack_import_8["default"].from(container, {
                        autoAlpha: 0,
                        duration: 1,
                        ease: 'none'
                    });
                };
                _barba_core__rspack_import_5_default().init({
                    preventRunning: true,
                    transitions: [
                        {
                            once: function once(param) {
                                var next = param.next;
                                easeOut(next.container);
                            },
                            leave: function leave(param) {
                                var current = param.current;
                                var done = this.async();
                                easeIn(current.container, done);
                            },
                            enter: function enter(param) {
                                var next = param.next;
                                easeOut(next.container);
                            }
                        }
                    ]
                });
            }
        },
        {
            key: "createReRender",
            value: function createReRender() {
                var _this = this;
                _barba_core__rspack_import_5_default().hooks.before(function() {});
                _barba_core__rspack_import_5_default().hooks.after(function() {
                    _this.pages.home.createReRender();
                    _this.pages.model.createReRender();
                    _this.pages.become_a_model.createReRender();
                    _this.pages.single_model.createReRender();
                    _this.createCreativeCta();
                });
            }
        },
        {
            key: "createCreativeCta",
            value: function createCreativeCta() {
                this.buttons = document.querySelectorAll('.button-1-stroke , .button-1-bg');
                lodash_forEach__rspack_import_6_default()(this.buttons, function(element) {
                    element.addEventListener('mouseenter', function() {
                        if (!element.classList.contains('is-animating')) element.classList.add('is-animating');
                        element.addEventListener('animationend', function() {
                            return element.classList.remove('is-animating');
                        });
                    });
                });
            }
        },
        {
            key: "addEventListeners",
            value: function addEventListeners() {
                window.addEventListener('scroll', this.createStickyNav.bind(this));
            }
        }
    ]);
    return App;
}();
new App();


},
"./src/apps/model/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (Model)
});
/* import */ var lodash_each__rspack_import_0 = __webpack_require__("./node_modules/lodash/each.js");
/* import */ var lodash_each__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(lodash_each__rspack_import_0);
/* import */ var lodash_debounce__rspack_import_1 = __webpack_require__("./node_modules/lodash/debounce.js");
/* import */ var lodash_debounce__rspack_import_1_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__rspack_import_1);
/* import */ var lodash_some__rspack_import_2 = __webpack_require__("./node_modules/lodash/some.js");
/* import */ var lodash_some__rspack_import_2_default = /*#__PURE__*/__webpack_require__.n(lodash_some__rspack_import_2);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}



var Model = /*#__PURE__*/ function() {
    "use strict";
    function Model() {
        _class_call_check(this, Model);
        this.createReRender();
    }
    _create_class(Model, [
        {
            key: "createReRender",
            value: function createReRender() {
                this.createModelFilter();
            }
        },
        {
            key: "createModelFilter",
            value: function createModelFilter() {
                var _this = this;
                this.filter = document.querySelector('.filter input');
                this.filterCard = _to_consumable_array(document.querySelectorAll('.model-section-1 .filter-card'));
                this.notFoundMessage = document.querySelector('.no-models-found');
                if (this.filter && this.filterCard) {
                    // 1. Define the debounced logic
                    var updateFilter = lodash_debounce__rspack_import_1_default()(function(value) {
                        var visibleCount = 0;
                        lodash_each__rspack_import_0_default()(_this.filterCard, function(element) {
                            var titles = element.querySelectorAll('h3');
                            var match = lodash_some__rspack_import_2_default()(titles, function(title) {
                                return title.innerText.trim().toLowerCase().startsWith(value);
                            });
                            var isVisible = match || value === '';
                            element.style.display = isVisible ? 'block' : 'none';
                            if (isVisible) visibleCount++;
                        });
                        if (_this.notFoundMessage) {
                            _this.notFoundMessage.style.display = visibleCount === 0 ? 'block' : 'none';
                        }
                    }, 200); // 200ms delay
                    // 2. Call the debounced function on input
                    this.filter.addEventListener('input', function(e) {
                        var value = e.target.value.trim().toLowerCase();
                        updateFilter(value);
                    });
                }
            }
        }
    ]);
    return Model;
}();



},
"./src/apps/single-model/index.js"(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (SingleModel)
});
/* import */ var glightbox__rspack_import_0 = __webpack_require__("./node_modules/glightbox/dist/js/glightbox.min.js");
/* import */ var glightbox__rspack_import_0_default = /*#__PURE__*/__webpack_require__.n(glightbox__rspack_import_0);
/* import */ var _splidejs_splide__rspack_import_1 = __webpack_require__("./node_modules/@splidejs/splide/dist/js/splide.esm.js");
/* import */ var _splidejs_splide_css_core__rspack_import_2 = __webpack_require__("./node_modules/@splidejs/splide/dist/css/splide-core.min.css");
/* import */ var glightbox_dist_css_glightbox_css__rspack_import_3 = __webpack_require__("./node_modules/glightbox/dist/css/glightbox.css");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}




var SingleModel = /*#__PURE__*/ function() {
    "use strict";
    function SingleModel() {
        _class_call_check(this, SingleModel);
        this.createReRender();
    }
    _create_class(SingleModel, [
        {
            key: "createReRender",
            value: function createReRender() {
                this.createSlider();
                this.createPlaybtn();
                this.createLightBox();
            }
        },
        {
            key: "createSlider",
            value: function createSlider() {
                this.splideWrapper = document.querySelector(".single-model-slider");
                if (this.splideWrapper) {
                    var _obj;
                    new _splidejs_splide__rspack_import_1["default"](this.splideWrapper, (_obj = {
                        type: 'loop',
                        drag: 'free',
                        perPage: 3,
                        interval: 3000,
                        autoplay: true,
                        speed: 1000,
                        arrows: false,
                        focus: 'start',
                        gap: 'calc(7.527rem/2)'
                    }, _define_property(_obj, "drag", true), _define_property(_obj, "breakpoints", {
                        1280: {
                            perPage: 4
                        },
                        1024: {
                            perPage: 3
                        },
                        768: {
                            perPage: 2
                        },
                        480: {
                            perPage: 1.5,
                            gap: 'calc(7.527rem/4)'
                        }
                    }), _obj)).mount();
                }
            }
        },
        {
            key: "createPlaybtn",
            value: function createPlaybtn() {
                var that = this;
                that.video = document.querySelector('.video-container video');
                that.playContainer = document.querySelector('.video-container');
                that.playBtn = document.querySelector('.video-container .play-btn');
                if (that.video && that.playContainer && that.playBtn) {
                    that.playContainer.addEventListener('click', function() {
                        if (that.video.paused) {
                            that.video.play();
                            that.playBtn.classList.remove('fa-solid', 'fa-play');
                            that.playBtn.classList.add('fa-regular', 'fa-circle-pause');
                        } else {
                            that.video.pause();
                            that.playBtn.classList.remove('fa-regular', 'fa-circle-pause');
                            that.playBtn.classList.add('fa-solid', 'fa-play');
                        }
                    });
                    that.video.addEventListener('ended', function() {
                        that.playBtn.classList.remove('fa-regular', 'fa-circle-pause');
                        that.playBtn.classList.add('fa-solid', 'fa-play');
                    });
                }
            }
        },
        {
            key: "createLightBox",
            value: function createLightBox() {
                this.lightbox = glightbox__rspack_import_0_default()({
                    selector: ".glightbox",
                    closeButton: true
                });
            }
        }
    ]);
    return SingleModel;
}();



},

});
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
id: moduleId,
loaded: false,
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);

// Flag the module as loaded
module.loaded = true;
// Return the exports of the module
return module.exports;

}

// expose the modules object (__webpack_modules__)
__webpack_require__.m = __webpack_modules__;

// webpack/runtime/compat_get_default_export
(() => {
// getDefaultExport function for compatibility with non-ESM modules
__webpack_require__.n = (module) => {
	var getter = module && module.__esModule ?
		() => (module['default']) :
		() => (module);
	__webpack_require__.d(getter, { a: getter });
	return getter;
};

})();
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = (exports, definition) => {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/global
(() => {
__webpack_require__.g = (() => {
	if (typeof globalThis === 'object') return globalThis;
	try {
		return this || new Function('return this')();
	} catch (e) {
		if (typeof window === 'object') return window;
	}
})();
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = (exports) => {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};
})();
// webpack/runtime/node_module_decorator
(() => {
__webpack_require__.nmd = (module) => {
  module.paths = [];
  if (!module.children) module.children = [];
  return module;
};
})();
// webpack/runtime/on_chunk_loaded
(() => {
var deferred = [];
__webpack_require__.O = (result, chunkIds, fn, priority) => {
	if (chunkIds) {
		priority = priority || 0;
		for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
			deferred[i] = deferred[i - 1];
		deferred[i] = [chunkIds, fn, priority];
		return;
	}
	var notFulfilled = Infinity;
	for (var i = 0; i < deferred.length; i++) {
		var [chunkIds, fn, priority] = deferred[i];
		var fulfilled = true;
		for (var j = 0; j < chunkIds.length; j++) {
			if (
				(priority & (1 === 0) || notFulfilled >= priority) &&
				Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))
			) {
				chunkIds.splice(j--, 1);
			} else {
				fulfilled = false;
				if (priority < notFulfilled) notFulfilled = priority;
			}
		}
		if (fulfilled) {
			deferred.splice(i--, 1);
			var r = fn();
			if (r !== undefined) result = r;
		}
	}
	return result;
};

})();
// webpack/runtime/rspack_version
(() => {
__webpack_require__.rv = () => ("1.7.8")
})();
// webpack/runtime/jsonp_chunk_loading
(() => {

      // object to store loaded and loading chunks
      // undefined = chunk not loaded, null = chunk preloaded/prefetched
      // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
      var installedChunks = {"main": 0,};
      __webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
// install a JSONP callback for chunk loading
var __rspack_jsonp = (parentChunkLoadingFunction, data) => {
	var [chunkIds, moreModules, runtime] = data;
	// add "moreModules" to the modules object,
	// then flag all "chunkIds" as loaded and fire callback
	var moduleId, chunkId, i = 0;
	if (chunkIds.some((id) => (installedChunks[id] !== 0))) {
		for (moduleId in moreModules) {
			if (__webpack_require__.o(moreModules, moduleId)) {
				__webpack_require__.m[moduleId] = moreModules[moduleId];
			}
		}
		if (runtime) var result = runtime(__webpack_require__);
	}
	if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
	for (; i < chunkIds.length; i++) {
		chunkId = chunkIds[i];
		if (
			__webpack_require__.o(installedChunks, chunkId) &&
			installedChunks[chunkId]
		) {
			installedChunks[chunkId][0]();
		}
		installedChunks[chunkId] = 0;
	}
	
	return __webpack_require__.O(result);
	
};

var chunkLoadingGlobal = self["webpackChunkRspack"] = self["webpackChunkRspack"] || [];
chunkLoadingGlobal.forEach(__rspack_jsonp.bind(null, 0));
chunkLoadingGlobal.push = __rspack_jsonp.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

})();
// webpack/runtime/rspack_unique_id
(() => {
__webpack_require__.ruid = "bundler=rspack@1.7.8";
})();
// startup
// Load entry module and return exports
// This entry module depends on other loaded chunks and execution need to be delayed
var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_barba_core_dist_barba_umd_js-node_modules_splidejs_splide_dist_css_splid-c321a2"], () => __webpack_require__("./src/apps/index.js"));
__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
})()
;