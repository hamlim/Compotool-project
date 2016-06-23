function updateState(newState){
    var oldState = localStorage.getItem('CTstate');
    if(oldState){
        if(JSON.parse(oldState).timestamp <= newState.timestamp){
            localStorage.setItem('CTstate', JSON.stringify(newState));
            return true;
        } else {
            return false;
        }
    } else {
        localStorage.setItem('CTstate', JSON.stringify(newState));
        return true;
    }
};
function fetchVars(vars) {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
            var data = JSON.parse(this.responseText);


        }
    });

    xhr.open("GET", "https://sheetsu.com/apis/v1.0/755fe98f1e9c");
    xhr.setRequestHeader("authorization", "Basic cGRBek5zM3hxMjRNbTZiUGJ5ZjE6ZjlibzVBVjEyOTNoZUh4c3lIYml0cUc0RXlXWXhqenF4MndITmh0cQ==");

    xhr.send();

};
document.addEventListener("DOMContentLoaded", function(event) {
    // Lets get the vars
    var variables;
    fetchVars(variables);
    // variables


    // inputs

    // Units
    var unit_metric_elem = document.getElementById('input--units-1');
    var unit_imperial_elem = document.getElementById('input--units-2');

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
                output_buw_ct300_weight_elem.value = variables.metric.volume.weight.ct300 * buw_ct300_volume_elem.value;
            } else {
                output_buw_ct300_weight_elem.value = variables.imperial.volume.weight.ct300 * buw_ct300_volume_elem.value;
            }
        }
        if(formData.buw.ct850.weight != null){
            output_buw_ct850_weight_elem.value = formData.buw.ct850.weight;
        } else {
            if(formData.units === "metric"){
                output_buw_ct850_weight_elem.value = (variables.metric.volume.weight.ct850 * buw_ct8502_volume_elem.value + variables.metric.volume.weight.ct850 * buw_ct8504_volume_elem.value);
            } else {
                output_buw_ct850_weight_elem.value = (variables.imperial.volume.weight.ct850 * buw_ct8502_volume_elem.value + variables.imperial.volume.weight.ct850 * buw_ct8504_volume_elem.value);
            }
        }
        if (formData.buw.total.weight != null){
            output_buw_total_weight_elem.value = formData.buw.total.weight;
        } else {
            output_buw_total_weight_elem.value = output_buw_ct850_weight_elem.value + output_buw_ct300_weight_elem.value;
        }
        // Number of Boards
        if(formData.nob.ct300.amount != null){
            output_nob_ct300_elem.value = formData.nob.ct300.amount;
        } else {
            // TODO calculate the number of ct300 boards given the variables var
            if(formData.units === "metric"){

            } else {

            }
        }
        if(formData.nob.ct8504.amount != null){
            output_nob_ct8504_elem.value = formData.nob.ct8504.amount;
        } else {
            // TODO calculate the number of ct8504 boards given the variables var
            if(formData.units === "metric"){

            } else {

            }
        }
        if(formData.nob.ct8502.amount != null){
            output_nob_ct8502_elem.value = formData.nob.ct8502.amount;
        } else {
            // TODO calc the number of ct8502 boards
            if(formData.units === "metric"){

            } else {

            }
        }

        // Adhesive
        if(formData.adhesive.surfaceArea != null){
            adhesive_bondedSurface_elem.value = formData.adhesive.surfaceArea;
        } else {
            adhesive_bondedSurface_elem.value = 0;
        }
        if(formData.adhesive.volume != null){
            output_adhesive_volumeAdhesive_elem.value = formData.adhesive.volume;
        } else {
            // TODO calc
            if(formData.units === "metric"){

            } else {

            }
        }

        // Sealer
        if(formData.sealer.toolSurface != null){
            sealer_toolSurface_elem.value = formData.sealer.toolSurface;
        } else {
            sealer_toolSurface_elem.value = 0;
        }
        if(formData.sealer.stageOne != null){
            output_sealer_stage1_elem.value = formData.sealer.stageOne;
        } else {
            // TODO calc

        }
        if(formData.sealer.stageTwo != null){
            output_sealer_stage2_elem.value = formData.sealer.stageTwo;
        } else {
            // TODO calc

        }

        // Shipping weight
        if(formData.shipping.ct300 != null){
            output_ship_ct300_elem.value = formData.shipping.ct300;
        } else {
            // TODO calc

        }
        if(formData.shipping.ct850 != null){
            output_ship_ct850_elem.value = formData.shipping.ct850;
        } else {
            // TODO calc

        }
        if(formData.shipping.adhesive != null){
            output_ship_adhesive_elem.value = formData.shipping.adhesive;
        } else {
            // TODO calc

        }
        if(formData.shipping.sealer.stageOne != null){
            output_ship_sealerStage1_elem.value = formData.shipping.sealer.stageOne;
        } else {
            // TODO calc

        }
        if(formData.shipping.sealer.stageTwo != null){
            output_ship_sealerStage2_elem.value = formData.shipping.sealer.stageTwo;
        } else {
            // TODO calc

        }
        if(formData.shipping.other != null){
            output_ship_other_elem.value = formData.shipping.other;
        } else {
            // TODO Determine what to do here

        }
        if(formData.shipping.total != null){
            output_ship_total_elem.value = formData.shipping.total;
        } else {
            // This one is easy
            output_ship_total_elem.value = formData.shipping.ct300 + formData.shipping.ct850 + formData.shipping.adhesive + formData.shipping.sealer.stageOne + formData.shipping.sealer.stageTwo + formData.shipping.other;
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
    btn_units_elem.onclick = function(state){

    }


});
