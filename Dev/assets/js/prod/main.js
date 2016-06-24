function updateState(newState){
    var oldState = localStorage.getItem('CTstate');
    if(oldState){
        if(JSON.parse(oldState).timestamp <= newState.timestamp){
            localStorage.setItem('CTstate', JSON.stringify(newState));
        } else {

        }
    } else {
        localStorage.setItem('CTstate', JSON.stringify(newState));
    }
};
function fetchVars(vars) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            // console.log(this.responseText);
            var data = JSON.parse(this.responseText);
            vars.metric = {};
            vars.imperial = {};
            vars.metric.sealer = {};
            vars.imperial.sealer = {};
            vars.metric.buw = {};
            vars.imperial.buw = {};
            vars.metric.nob = {};
            vars.imperial.nob = {};
            vars.metric.shipping = {};
            vars.imperial.shipping = {};
            vars.metric.shipping.adhesive = {};
            vars.imperial.shipping.adhesive = {};
            vars.metric.shipping.sealer = {};
            vars.imperial.shipping.sealer = {};
            vars.metric.shipping.sealer.stageOne = {};
            vars.imperial.shipping.sealer.stageOne = {};
            vars.metric.shipping.sealer.stageTwo = {};
            vars.imperial.shipping.sealer.stageTwo = {};
            for(var i=0; i<data.length; i++){
                if(data[i].Order === "1"){
                    vars.imperial.adhesive = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "2") {
                    vars.metric.adhesive = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "3") {
                    vars.imperial.sealer.stageOne = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "4") {
                    vars.metric.sealer.stageOne = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "5") {
                    vars.imperial.sealer.stageTwo = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "6") {
                    vars.metric.sealer.stageTwo = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "7") {
                    // releaser
                } else if (data[i].Order === "8") {
                    // releaser
                } else if (data[i].Order === "9") {
                    vars.imperial.buw.ct300 = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "10") {
                    vars.metric.buw.ct300 = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "11") {
                    vars.imperial.buw.ct850 = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "12") {
                    vars.metric.buw.ct850 = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "13") {
                    vars.imperial.nob.ct300 = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "14") {
                    vars.metric.nob.ct300 = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "15") {
                    vars.imperial.nob.ct8504 = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "16") {
                    vars.metric.nob.ct8504 = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "17") {
                    vars.imperial.nob.ct8502 = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "18") {
                    vars.metric.nob.ct8502 = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "19") {
                    vars.imperial.shipping.ct300 = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "20") {
                    vars.metric.shipping.ct300 = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "21") {
                    vars.imperial.shipping.ct8502 = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "22") {
                    vars.metric.shipping.ct8502 = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "23") {
                    vars.imperial.shipping.ct8504 = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "24") {
                    vars.metric.shipping.ct8504 = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "25") {
                    vars.imperial.shipping.adhesive.liters = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "26") {
                    vars.metric.shipping.adhesive.liters = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "27") {
                    vars.imperial.shipping.adhesive.weight = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "28") {
                    vars.metric.shipping.adhesive.weight = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "29") {
                    vars.imperial.shipping.sealer.stageOne.liters = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "30") {
                    vars.metric.shipping.sealer.stageOne.liters = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "31") {
                    vars.imperial.shipping.sealer.stageOne.weight = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "32") {
                    vars.metric.shipping.sealer.stageOne.weight = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "33") {
                    vars.imperial.shipping.sealer.stageTwo.liters = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "34") {
                    vars.metric.shipping.sealer.stageTwo.liters = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "35") {
                    vars.imperial.shipping.sealer.stageTwo.weight = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "36") {
                    vars.metric.shipping.sealer.stageTwo.weight = parseFloat(data[i].Coverage);
                }
            }

        }
    });

    xhr.open("GET", "https://sheetsu.com/apis/v1.0/755fe98f1e9c");
    xhr.setRequestHeader("authorization", "Basic cGRBek5zM3hxMjRNbTZiUGJ5ZjE6ZjlibzVBVjEyOTNoZUh4c3lIYml0cUc0RXlXWXhqenF4MndITmh0cQ==");

    xhr.send();

};

// Lets get the vars
var variables = {};
fetchVars(variables);
console.log(variables);

document.addEventListener("DOMContentLoaded", function(event) {
    // variables


    // inputs

    // Units
    var unit_metric_elem = document.getElementById('input--units-1');
    var unit_imperial_elem = document.getElementById('input--units-2');

    var unit_spans_elemCollection = document.getElementsByClassName('js--hook-units');

    // Block up weight + number of boards -> buw
    var buw_ct300_volume_elem = document.getElementById('input--buw_nob-1');
    var buw_ct8504_volume_elem = document.getElementById('input--buw_nob-2');
    var buw_ct8502_volume_elem = document.getElementById('input--buw_nob-3');

    // The output weights of the boards
    var output_buw_ct300_weight_elem = document.getElementById('input--buw_nob-4');
    var output_buw_ct850_weight_elem = document.getElementById('input--buw_nob-5');
    var output_buw_total_weight_elem = document.getElementById('input--buw_nob-6');

    // Number of boards
    var output_nob_ct300_elem = document.getElementById('input--buw_nob-7');
    var output_nob_ct8504_elem = document.getElementById('input--buw_nob-8');
    var output_nob_ct8502_elem = document.getElementById('input--buw_nob-9');

    // Adhesive
    var adhesive_bondedSurface_elem = document.getElementById('input--adhesive-1');
    // output
    var output_adhesive_volumeAdhesive_elem = document.getElementById('input--adhesive-2');

    // Sealer
    var sealer_toolSurface_elem = document.getElementById('input--sealer-1');
    // output
    var output_sealer_stage1_elem = document.getElementById('input--sealer-2');
    var output_sealer_stage2_elem = document.getElementById('input--sealer-3');

    // Shipping weight
    var output_ship_ct300_elem = document.getElementById('input--shipping_weight-1');
    var output_ship_ct850_elem = document.getElementById('input--shipping_weight-2');
    var output_ship_adhesive_elem = document.getElementById('input--shipping_weight-3');
    var output_ship_sealerStage1_elem = document.getElementById('input--shipping_weight-4');
    var output_ship_sealerStage2_elem = document.getElementById('input--shipping_weight-5');
    var output_ship_other_elem = document.getElementById('input--shipping_weight-6');
    var output_ship_total_elem = document.getElementById('input--shipping_weight-7');


    // Buttons

    var btn_units_elem = document.getElementsByClassName('js--setUnits')[0];
    var btn_buw_elem = document.getElementsByClassName("js--buw_nob")[0];
    var btn_adhesive_elem = document.getElementsByClassName('js--adhesive')[0];
    var btn_sealer_elem = document.getElementsByClassName("js--sealer")[0];
    var btn_export_elem = document.getElementsByClassName("js--export")[0];
    var btn_quote_elem = document.getElementsByClassName("js--quote")[0];

    // Logic

    function initializeInputs(){
        buw_ct300_volume_elem.value = 0;
        buw_ct8504_volume_elem.value = 0;
        buw_ct8502_volume_elem.value = 0;
        output_buw_ct300_weight_elem.value = 0;
        output_buw_ct850_weight_elem.value = 0;
        output_buw_total_weight_elem.value = 0;
        output_nob_ct300_elem.value = 0;
        output_nob_ct8502_elem.value = 0;
        output_nob_ct8504_elem.value = 0;
        adhesive_bondedSurface_elem.value = 0;
        output_adhesive_volumeAdhesive_elem.value = 0;
        sealer_toolSurface_elem.value = 0;
        output_sealer_stage1_elem.value = 0;
        output_sealer_stage2_elem.value = 0;
        output_ship_ct300_elem.value = 0;
        output_ship_ct850_elem.value = 0;
        output_ship_adhesive_elem.value = 0;
        output_ship_sealerStage1_elem.value = 0;
        output_ship_sealerStage2_elem.value = 0;
        output_ship_other_elem.value = 0;
        output_ship_total_elem.value = 0;
    };

    function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
    }

    function pageInit(){
        var query = getQueryVariable("clear");
        if(query){
            initializeInputs();
        } else {
            // Don't do anything
        }
    }
    pageInit();

    function calculateBUW(state){
        // Ok we need to calculate any changes to buw inputs
        /*
            output_buw_ct300_weight_elem
            output_buw_ct850_weight_elem
            output_buw_total_weight_elem
        */
        if(state.form.units === "metric"){
            // Element
            output_buw_ct300_weight_elem.value = variables.metric.buw.ct300 * parseFloat(buw_ct300_volume_elem.value);
            // State
            state.form.buw.ct300.weight = variables.metric.buw.ct300 * parseFloat(buw_ct300_volume_elem.value);
            // Element
            output_buw_ct850_weight_elem.value = variables.metric.buw.ct850 * (parseFloat(buw_ct8502_volume_elem.value) + parseFloat(buw_ct8504_volume_elem.value));
            // State
            state.form.buw.ct850.weight = variables.metric.buw.ct850 * (parseFloat(buw_ct8502_volume_elem.value) + parseFloat(buw_ct8504_volume_elem.value));
            // Element
            output_buw_total_weight_elem.value = (parseFloat(output_buw_ct850_weight_elem.value) + parseFloat(output_buw_ct300_weight_elem.value));
            // State
            state.form.buw.total.weight = (parseFloat(output_buw_ct850_weight_elem.value) + parseFloat(output_buw_ct300_weight_elem.value));
        } else {
            // Element
            output_buw_ct300_weight_elem.value = variables.imperial.buw.ct300 * parseFloat(buw_ct300_volume_elem.value);
            // State
            state.form.buw.ct300.weight = variables.imperial.buw.ct300 * parseFloat(buw_ct300_volume_elem.value);
            // Element
            output_buw_ct850_weight_elem.value = variables.imperial.buw.ct850 * (parseFloat(buw_ct8502_volume_elem.value) + parseFloat(buw_ct8504_volume_elem.value));
            // State
            state.form.buw.ct850.weight = variables.imperial.buw.ct850 * (parseFloat(buw_ct8502_volume_elem.value) + parseFloat(buw_ct8504_volume_elem.value));
            // Element
            output_buw_total_weight_elem.value = (parseFloat(output_buw_ct850_weight_elem.value) + parseFloat(output_buw_ct300_weight_elem.value));
            // State
            state.form.buw.total.weight = (parseFloat(output_buw_ct850_weight_elem.value) + parseFloat(output_buw_ct300_weight_elem.value));
        }
        updateState(state);
    }

    function calculateNOB(state){
        // Ok we need to calculate any changes to nob inputs
        /*
            output_nob_ct300_elem
            output_nob_ct8502_elem
            output_nob_ct8504_elem
        */
        if(state.form.units === "metric"){
            output_nob_ct300_elem.value = Math.ceil(parseFloat(buw_ct300_volume_elem.value) / variables.metric.nob.ct300);
            state.form.nob.ct300.amount = Math.ceil(parseFloat(output_nob_ct300_elem.value));
            output_nob_ct8502_elem.value = Math.ceil(parseFloat(output_nob_ct8502_elem.value) / variables.metric.nob.ct8502);
            state.form.nob.ct8502.amount = Math.ceil(parseFloat(output_nob_ct8502_elem.value));
            output_nob_ct8504_elem.value = Math.ceil(parseFloat(output_nob_ct8504_elem.value) / variables.metric.nob.ct8504);
            state.form.nob.ct8504.amount = Math.ceil(parseFloat(output_nob_ct8504_elem.value));
        } else {
            output_nob_ct300_elem.value = Math.ceil(parseFloat(buw_ct300_volume_elem.value) / variables.imperial.nob.ct300);
            state.form.nob.ct300.amount = Math.ceil(parseFloat(output_nob_ct300_elem.value));
            output_nob_ct8502_elem.value = Math.ceil(parseFloat(output_nob_ct8502_elem.value) / variables.imperial.nob.ct8502);
            state.form.nob.ct8502.amount = Math.ceil(parseFloat(output_nob_ct8502_elem.value));
            output_nob_ct8504_elem.value = Math.ceil(parseFloat(output_nob_ct8504_elem.value) / variables.imperial.nob.ct8504);
            state.form.nob.ct8504.amount = Math.ceil(parseFloat(output_nob_ct8504_elem.value));
        }
        updateState(state);
    }

    function calculateShippingWeight(sstate){
        // Ok we need to calculate any changes to nob inputs
        /*
            output_ship_ct300_elem
            output_ship_ct850_elem
            output_ship_adhesive_elem
            output_ship_sealerStage1_elem
            output_ship_sealerStage2_elem
            output_ship_total_elem
            output_ship_other_elem
        */
        if(state.form.units === "metric"){
            output_ship_ct300_elem.value = parseFloat(output_nob_ct300_elem.value) * variables.metric.shipping.ct300;
            state.form.shipping.ct300 = parseFloat(output_ship_ct300_elem.value);
            output_ship_ct850_elem.value = (parseFloat(output_nob_ct8502_elem.value) + parseFloat(output_nob_ct8504_elem.value)) * variables.metric.shipping.ct850;
            state.form.shipping.ct850 = parseFloat(output_ship_ct850_elem.value);
            output_ship_adhesive_elem.value = (Math.ceil(parseFloat(output_adhesive_volumeAdhesive_elem.value) / variables.metric.shipping.adhesive.liters)) * variables.metric.shipping.adhesive.weight;
            state.form.shipping.adhesive = parseFloat(output_ship_adhesive_elem.value);
            output_ship_sealerStage1_elem.value = (Math.ceil(parseFloat(output_sealer_stage1_elem.value) / variables.metric.shipping.sealer.stageOne.liters)) * variables.metric.shipping.sealer.stageOne.weight;
            state.form.shipping.sealer.stageOne = parseFloat(output_ship_sealerStage1_elem.value);
            output_ship_sealerStage2_elem.value = (Math.ceil(parseFloat(output_ship_sealerStage2_elem.value) / variables.metric.shipping.sealer.stageTwo.liters)) * variables.metric.shipping.sealer.stageTwo.weight;
            state.form.shipping.sealer.stageTwo = parseFloat(output_ship_sealerStage2_elem.value);
            output_ship_total_elem.value = parseFloat(output_ship_ct300_elem.value) + parseFloat(output_ship_adhesive_elem.value) + parseFloat(output_ship_sealerStage2_elem.value) + parseFloat(output_ship_sealerStage1_elem.value) + parseFloat(output_ship_ct850_elem.value) + parseFloat(output_ship_other_elem.value);
            state.form.shipping.total = parseFloat(output_ship_total_elem.value);
            output_ship_other_elem.value = 0;
            state.form.shipping.other = parseFloat(output_ship_other_elem.value);
        } else {
            output_ship_ct300_elem.value = parseFloat(output_nob_ct300_elem.value) * variables.imperial.shipping.ct300;
            state.form.shipping.ct300 = parseFloat(output_ship_ct300_elem.value);
            output_ship_ct850_elem.value = (parseFloat(output_nob_ct8502_elem.value) + parseFloat(output_nob_ct8504_elem.value)) * variables.metric.shipping.ct850;
            state.form.shipping.ct850 = parseFloat(output_ship_ct850_elem.value);
            output_ship_adhesive_elem.value = (Math.ceil(parseFloat(output_adhesive_volumeAdhesive_elem.value) / variables.imperial.shipping.adhesive.liters)) * variables.imperial.shipping.adhesive.weight;
            state.form.shipping.adhesive = parseFloat(output_ship_adhesive_elem.value);
            output_ship_sealerStage1_elem.value = (Math.ceil(parseFloat(output_sealer_stage1_elem.value) / variables.imperial.shipping.sealer.stageOne.liters)) * variables.imperial.shipping.sealer.stageOne.weight;
            state.form.shipping.sealer.stageOne = parseFloat(output_ship_sealerStage1_elem.value);
            output_ship_sealerStage2_elem.value = (Math.ceil(parseFloat(output_ship_sealerStage2_elem.value) / variables.imperial.shipping.sealer.stageTwo.liters)) * variables.imperial.shipping.sealer.stageTwo.weight;
            state.form.shipping.sealer.stageTwo = parseFloat(output_ship_sealerStage2_elem.value);
            output_ship_total_elem.value = parseFloat(output_ship_ct300_elem.value) + parseFloat(output_ship_adhesive_elem.value) + parseFloat(output_ship_sealerStage2_elem.value) + parseFloat(output_ship_sealerStage1_elem.value) + parseFloat(output_ship_ct850_elem.value) + parseFloat(output_ship_other_elem.value);
            state.form.shipping.total = parseFloat(output_ship_total_elem.value);
            output_ship_other_elem.value = 0;
            state.form.shipping.other = parseFloat(output_ship_other_elem.value);
        }
        updateState(state);
    }

    function calculateAdhesive(state){
        // Ok we need to calculate any changes to adhesive inputs
        /*
            output_adhesive_volumeAdhesive_elem
        */
        if(state.form.units === "metric"){
            output_adhesive_volumeAdhesive_elem.value = parseFloat(adhesive_bondedSurface_elem.value) * variables.metric.adhesive;
            state.form.adhesive.amount = parseFloat(output_adhesive_volumeAdhesive_elem.value);
        } else {
            output_adhesive_volumeAdhesive_elem.value = parseFloat(adhesive_bondedSurface_elem.value) * variables.imperial.adhesive;
            state.form.adhesive.amount = parseFloat(output_adhesive_volumeAdhesive_elem.value);
        }
        updateState(state);
    }
    function calculateSealers(state){
        // Ok we need to calculate any changes to sealer inputs
        /*
            output_sealer_stage1_elem
            output_sealer_stage2_elem
        */
        if(state.form.units === "metric"){
            output_sealer_stage1_elem.value = parseFloat(sealer_toolSurface_elem.value) * variables.metric.sealer.stageOne;
            state.form.sealer.stageOne = parseFloat(output_sealer_stage1_elem.value);
            output_sealer_stage2_elem.value = parseFloat(sealer_toolSurface_elem.value) * variables.metric.sealer.stageTwo;
            state.form.sealer.stageTwo = parseFloat(output_sealer_stage2_elem.value);
        } else {
            output_sealer_stage1_elem.value = parseFloat(sealer_toolSurface_elem.value) * variables.imperial.sealer.stageOne;
            state.form.sealer.stageOne = parseFloat(output_sealer_stage1_elem.value);
            output_sealer_stage2_elem.value = parseFloat(sealer_toolSurface_elem.value) * variables.imperial.sealer.stageTwo;
            state.form.sealer.stageTwo = parseFloat(output_sealer_stage2_elem.value);
        }
        updateState(state);
    }

    // Lets handle state
    var state = JSON.parse(localStorage.getItem('CTstate')) || {};

    function getFormState(){
        var form = {};
        if(unit_metric_elem.checked === true){
            form.units = "metric";
        } else {
            form.units = "imperial";
        }
        form.buw = {};
        form.buw.ct300 = {};
        form.buw.ct8502 = {};
        form.buw.ct8504 = {};
        form.buw.ct850 = {};
        form.buw.total = {};
        form.sealer = {};
        form.nob = {};
        form.nob.ct300 = {};
        form.nob.ct8502 = {};
        form.nob.ct8504 = {};
        form.adhesive = {};
        form.shipping = {};
        form.shipping.sealer = {};

        form.buw.ct300.volume = parseInt(buw_ct300_volume_elem.value, 10);
        form.buw.ct8502.volume = parseInt(buw_ct8502_volume_elem.value, 10);
        form.buw.ct8504.volume = parseInt(buw_ct8504_volume_elem.value, 10);
        form.buw.ct300.weight = parseInt(output_buw_ct300_weight_elem.value, 10);
        form.buw.ct850.weight = parseInt(output_buw_ct850_weight_elem.value, 10);
        form.buw.total.weight = parseInt(output_buw_total_weight_elem.value, 10);
        form.nob.ct300.amount = parseInt(output_nob_ct300_elem.value, 10);
        form.nob.ct8502.amount = parseInt(output_nob_ct8502_elem.value, 10);
        form.nob.ct8504.amount = parseInt(output_nob_ct8504_elem.value, 10);
        form.adhesive.surfaceArea = parseInt(adhesive_bondedSurface_elem.value, 10);
        form.adhesive.volume = parseInt(output_adhesive_volumeAdhesive_elem.value, 10);
        form.sealer.toolSurface = parseInt(sealer_toolSurface_elem.value, 10);
        form.sealer.stageOne = parseInt(output_sealer_stage1_elem.value, 10);
        form.sealer.stageTwo = parseInt(output_sealer_stage2_elem.value, 10);
        form.shipping.ct300 = parseInt(output_ship_ct300_elem.value, 10);
        form.shipping.ct850 = parseInt(output_ship_ct850_elem.value, 10);
        form.shipping.adhesive = parseInt(output_ship_adhesive_elem.value, 10);
        form.shipping.sealer.stageOne = parseInt(output_ship_sealerStage1_elem.value, 10);
        form.shipping.sealer.stageTwo = parseInt(output_ship_sealerStage2_elem.value, 10);
        form.shipping.other = parseInt(output_ship_other_elem.value, 10);
        form.shipping.total = parseInt(output_ship_total_elem.value, 10);

        return form;
    };

    if (state.timestamp != null){
        document.getElementsByClassName('hide')[0].className = "alert alert-info alert--info show";
        // Ok we have data from last time
        var formData = state.form;
        // units
        if(formData.units === "metric"){
            unit_imperial_elem.checked = false;
            unit_metric_elem.checked = true;
        } else {
            unit_metric_elem.checked = false;
            unit_imperial_elem.checked = true;
        }
        // Block Up weight
        if (formData.buw.ct300.volume != null){
            buw_ct300_volume_elem.value = formData.buw.ct300.volume;
        } else {
            buw_ct300_volume_elem.value = 0;
        }
        if (formData.buw.ct8504.volume != null){
            buw_ct8504_volume_elem.value = formData.buw.ct8504.volume;
        } else {
            buw_ct8504_volume_elem.value = 0;
        }
        if (formData.buw.ct8502.volume != null){
            buw_ct8502_volume_elem.value = formData.buw.ct8502.volume;
        } else {
            buw_ct8502_volume_elem.value = 0;
        }

        if(formData.buw.ct300.weight != null){
            output_buw_ct300_weight_elem.value = formData.buw.ct300.weight;
        } else {
            if(formData.units === "metric"){
                output_buw_ct300_weight_elem.value = variables.metric.buw.ct300 * parseFloat(buw_ct300_volume_elem.value);
                formData.buw.ct300.weight = parseFloat(output_buw_ct300_weight_elem.value);
            } else {
                output_buw_ct300_weight_elem.value = variables.imperial.buw.ct300 * parseFloat(buw_ct300_volume_elem.value);
                formData.buw.ct300.weight = parseFloat(output_buw_ct300_weight_elem.value);
            }
        }
        if(formData.buw.ct850.weight != null){
            output_buw_ct850_weight_elem.value = formData.buw.ct850.weight;
        } else {
            if(formData.units === "metric"){
                output_buw_ct850_weight_elem.value = (variables.metric.buw.ct850 * parseFloat(buw_ct8502_volume_elem.value) + variables.metric.buw.ct850 * parseFloat(buw_ct8504_volume_elem.value));
                formData.buw.ct850.weight = parseFloat(output_buw_ct850_weight_elem.value);
            } else {
                output_buw_ct850_weight_elem.value = (variables.imperial.buw.ct850 * parseFloat(buw_ct8502_volume_elem.value) + variables.imperial.buw.ct850 * parseFloat(buw_ct8504_volume_elem.value));
                formData.buw.ct850.weight = parseFloat(output_buw_ct850_weight_elem.value);
            }
        }
        if (formData.buw.total.weight != null){
            output_buw_total_weight_elem.value = formData.buw.total.weight;
        } else {
            output_buw_total_weight_elem.value = parseFloat(output_buw_ct850_weight_elem.value) + parseFloat(output_buw_ct300_weight_elem.value);
            formData.buw.total.weight = parseFloat(output_buw_total_weight_elem.value);
        }
        // Number of Boards
        if(formData.nob.ct300.amount != null){
            output_nob_ct300_elem.value = formData.nob.ct300.amount;
        } else {
            if(formData.units === "metric"){
                output_nob_ct300_elem.value = Math.ceil(parseFloat(buw_ct300_volume_elem.value) / variables.metric.nob.ct300);
                formData.nob.ct300.amount = Math.ceil(parseFloat(output_nob_ct300_elem.value));
            } else {
                output_nob_ct300_elem.value = Math.ceil(parseFloat(buw_ct300_volume_elem.value) / variables.imperial.nob.ct300);
                formData.nob.ct300.amount = Math.ceil(parseFloat(output_nob_ct300_elem.value));
            }
        }
        if(formData.nob.ct8504.amount != null){
            output_nob_ct8504_elem.value = formData.nob.ct8504.amount;
        } else {
            if(formData.units === "metric"){
                output_nob_ct8504_elem.value = Math.ceil(parseFloat(output_nob_ct8504_elem.value) / variables.metric.nob.ct8504);
                formData.nob.ct8504.amount = Math.ceil(parseFloat(output_nob_ct8504_elem.value));
            } else {
                output_nob_ct8504_elem.value = Math.ceil(parseFloat(output_nob_ct8504_elem.value) / variables.imperial.nob.ct8504);
                formData.nob.ct8504.amount = Math.ceil(parseFloat(output_nob_ct8504_elem.value));
            }
        }
        if(formData.nob.ct8502.amount != null){
            output_nob_ct8502_elem.value = formData.nob.ct8502.amount;
        } else {
            if(formData.units === "metric"){
                output_nob_ct8502_elem.value = Math.ceil(parseFloat(output_nob_ct8502_elem.value) / variables.metric.nob.ct8502);
                formData.nob.ct8502.amount = Math.ceil(parseFloat(output_nob_ct8502_elem.value));
            } else {
                output_nob_ct8502_elem.value = Math.ceil(parseFloat(output_nob_ct8502_elem.value) / variables.imperial.nob.ct8502);
                formData.nob.ct8502.amount = Math.ceil(parseFloat(output_nob_ct8502_elem.value));
            }
        }

        // Adhesive
        if(formData.adhesive.surfaceArea != null){
            adhesive_bondedSurface_elem.value = formData.adhesive.surfaceArea;
        } else {
            adhesive_bondedSurface_elem.value = 0;
            formData.adhesive.surfaceArea = parseFloat(output_adhesive_volumeAdhesive_elem.value);
        }
        if(formData.adhesive.volume != null){
            output_adhesive_volumeAdhesive_elem.value = formData.adhesive.volume;
        } else {
            if(formData.units === "metric"){
                output_adhesive_volumeAdhesive_elem.value = parseFloat(adhesive_bondedSurface_elem.value) * variables.metric.adhesive;
                formData.adhesive.amount = parseFloat(output_adhesive_volumeAdhesive_elem.value);
            } else {
                output_adhesive_volumeAdhesive_elem.value = parseFloat(adhesive_bondedSurface_elem.value) * variables.imperial.adhesive;
                formData.adhesive.amount = parseFloat(output_adhesive_volumeAdhesive_elem.value);
            }
        }

        // Sealer
        if(formData.sealer.toolSurface != null){
            sealer_toolSurface_elem.value = formData.sealer.toolSurface;
        } else {
            sealer_toolSurface_elem.value = 0;
            formData.sealer.toolSurface = parseFloat(sealer_toolSurface_elem.value);
        }
        if(formData.sealer.stageOne != null){
            output_sealer_stage1_elem.value = formData.sealer.stageOne;
        } else {
            if(formData.units === "metric"){
                output_sealer_stage1_elem.value = parseFloat(sealer_toolSurface_elem.value) * variables.metric.sealer.stageOne;
                formData.sealer.stageOne = parseFloat(output_sealer_stage1_elem.value);
            } else {
                output_sealer_stage1_elem.value = parseFloat(sealer_toolSurface_elem.value) * variables.imperial.sealer.stageOne;
                formData.sealer.stageOne = parseFloat(output_sealer_stage1_elem.value);
            }
        }
        if(formData.sealer.stageTwo != null){
            output_sealer_stage2_elem.value = formData.sealer.stageTwo;
        } else {
            if(formData.units === "metric"){
                output_sealer_stage2_elem.value = parseFloat(sealer_toolSurface_elem.value) * variables.metric.sealer.stageTwo;
                formData.sealer.stageTwo = parseFloat(output_sealer_stage2_elem.value);
            } else {
                output_sealer_stage2_elem.value = parseFloat(sealer_toolSurface_elem.value) * variables.imperial.sealer.stageTwo;
                formData.sealer.stageTwo = parseFloat(output_sealer_stage2_elem.value);
            }
        }

        // Shipping weight
        if(formData.shipping.ct300 != null){
            output_ship_ct300_elem.value = formData.shipping.ct300;
        } else {
            if(formData.units === "metric"){
                output_ship_ct300_elem.value = parseFloat(output_nob_ct300_elem.value) * variables.metric.shipping.ct300;
                formData.shipping.ct300 = parseFloat(output_ship_ct300_elem.value);
            } else {
                output_ship_ct300_elem.value = parseFloat(output_nob_ct300_elem.value) * variables.imperial.shipping.ct300;
                formData.shipping.ct300 = parseFloat(output_ship_ct300_elem.value);
            }
        }
        if(formData.shipping.ct850 != null){
            output_ship_ct850_elem.value = formData.shipping.ct850;
        } else {
            if(formData.units === "metric"){
                output_ship_ct850_elem.value = ((parseFloat(output_nob_ct8502_elem.value) * variables.metric.shipping.ct8502) + (parseFloat(output_nob_ct8504_elem.value) * variables.metric.shipping.ct8504));
                formData.shipping.ct850 = parseFloat(output_ship_ct850_elem.value);
            } else {
                output_ship_ct850_elem.value = (parseFloat(output_nob_ct8502_elem.value) * variables.imperial.shipping.ct8502) + (parseFloat(output_nob_ct8504_elem.value) * variables.imperial.shipping.ct8504);
                formData.shipping.ct850 = parseFloat(output_ship_ct850_elem.value);
            }

        }
        if(formData.shipping.adhesive != null){
            output_ship_adhesive_elem.value = formData.shipping.adhesive;
        } else {
            if(formData.units === "metric"){
                output_ship_adhesive_elem.value = (Math.ceil(parseFloat(output_adhesive_volumeAdhesive_elem.value) / variables.metric.shipping.adhesive.liters)) * variables.metric.shipping.adhesive.weight;
                formData.shipping.adhesive = parseFloat(output_ship_adhesive_elem.value);
            } else {
                output_ship_adhesive_elem.value = (Math.ceil(parseFloat(output_adhesive_volumeAdhesive_elem.value) / variables.imperial.shipping.adhesive.liters)) * variables.imperial.shipping.adhesive.weight;
                formData.shipping.adhesive = parseFloat(output_ship_adhesive_elem.value);
            }

        }
        if(formData.shipping.sealer.stageOne != null){
            output_ship_sealerStage1_elem.value = formData.shipping.sealer.stageOne;
        } else {
            if(formData.units === "metric"){
                output_ship_sealerStage1_elem.value = (Math.ceil(parseFloat(output_sealer_stage1_elem.value) / variables.metric.shipping.sealer.stageOne.liters)) * variables.metric.shipping.sealer.stageOne.weight;
                formData.shipping.sealer.stageOne = parseFloat(output_ship_sealerStage1_elem.value);
            } else {
                output_ship_sealerStage1_elem.value = (Math.ceil(parseFloat(output_sealer_stage1_elem.value) / variables.imperial.shipping.sealer.stageOne.liters)) * variables.imperial.shipping.sealer.stageOne.weight;
                formData.shipping.sealer.stageOne = parseFloat(output_ship_sealerStage1_elem.value);
            }
        }
        if(formData.shipping.sealer.stageTwo != null){
            output_ship_sealerStage2_elem.value = formData.shipping.sealer.stageTwo;
        } else {
            if(formData.units === "metric"){
                output_ship_sealerStage2_elem.value = (Math.ceil(parseFloat(output_ship_sealerStage2_elem.value) / variables.metric.shipping.sealer.stageTwo.liters)) * variables.metric.shipping.sealer.stageTwo.weight;
                formData.shipping.sealer.stageTwo = parseFloat(output_ship_sealerStage2_elem.value);
            } else {
                output_ship_sealerStage2_elem.value = (Math.ceil(parseFloat(output_ship_sealerStage2_elem.value) / variables.imperial.shipping.sealer.stageTwo.liters)) * variables.imperial.shipping.sealer.stageTwo.weight;
                formData.shipping.sealer.stageTwo = parseFloat(output_ship_sealerStage2_elem.value);
            }
        }
        if(formData.shipping.other != null){
            output_ship_other_elem.value = formData.shipping.other;
        } else {
            output_ship_other_elem.value = 0;
            formData.shipping.other = parseFloat(output_ship_other_elem.value);
        }
        if(formData.shipping.total != null){
            output_ship_total_elem.value = formData.shipping.total;
        } else {
            output_ship_total_elem.value = parseFloat(output_ship_ct300_elem.value) + parseFloat(output_ship_adhesive_elem.value) + parseFloat(output_ship_sealerStage2_elem.value) + parseFloat(output_ship_sealerStage1_elem.value) + parseFloat(output_ship_ct850_elem.value) + parseFloat(output_ship_other_elem.value);
            formData.shipping.total = parseFloat(output_ship_total_elem.value);
        }
    } else {
        // we don't have any saved state
        state.timestamp = Math.floor(new Date().getTime() / 1000);
        // initialize everything to zero
        initializeInputs();
        var form = getFormState();
        state.form = form;
        console.log(state);
        updateState(state);
    }

    // Onclick events
    btn_units_elem.onclick = function(){
        if(state.form.units === "metric"){
            if(unit_metric_elem.checked === true){
                // Do nothing because the units haven't changed
            } else {
                // Imperial is selected, previous units were metric, change all unit_spans_elemCollection to Lbs
                for(var i=0; i<unit_spans_elemCollection.length; i++){
                    unit_spans_elemCollection[i].innerText = "Lbs";
                }
                state.form.units = "imperial";
                updateState(state);
                calculateBUW(state);
                calculateNOB(state);
                calculateShippingWeight(state);
            }
        } else {
            if(unit_imperial_elem.checked === true){
                // do nothing, they are both imperial
            } else {
                // it is imperial but they are changing it to metric
                for(var i$0=0; i$0<unit_spans_elemCollection.length; i$0++){
                    unit_spans_elemCollection[i$0].innerText = "Kgs";
                }
                state.form.units = "metric";
                updateState(state);
                calculateBUW(state);
                calculateNOB(state);
                calculateShippingWeight(state);
            }
        }
    }

    btn_buw_elem.onclick = function() {
        // first update the state var, and sync with localStorage




        // Now call updatebuw(), update nob(), update Shipping()
        updateState(state);
        calculateBUW(state);
        calculateNOB(state);
        calculateShippingWeight(state);
    }


});
