$(document).ready(function () {
    const size = $(".pop").css("fontSize");
    $("#pop").hover(function () {
        $(".pop").css("fontSize", "150%");
    },
    function () {
        $(".pop").css("fontSize", size);
    });
});

// OO form validation

;(function (window, undefined) {
    const Verifier ={
        constructor: function (form, config) {
            this._dataForm = form;
            this._data = config.fields || {};

            this.init();
        },
        init: function () {
            this.addFormListener();
        },
    addFormListener: function () {
            let formSelector = this._dataForm, dataForm = document.querySelector(formSelector);
            dataForm.addEventListener("submit", this.validate.bind(this), false);
        },
        validate: function (e) {
            let dataFields = this._data;
            for(var field in dataFields){
                givenData = document.querySelector(field), givenDataVal = givenData.value;
                if (dataFields[field].require || givenDataVal === "" || givenDataVal.length > dataFields[field].maxlength) {
                    givenData.classList.alert("invalid");
                }
            }
            e.preventDefault();
        }
    }

    let inputForm = Object.create(Verifier);
    inputForm.constructor("#form", {
        fields: {
            "#name": {
                required: true,
                maxlength: 20
            },
            "#message": {
                maxlength: 50
            }
        }
    })

})(window, undefined);

    