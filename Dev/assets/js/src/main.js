function updateState(newState){
    let oldState = JSON.parse(localStorage.getItem('CTstate'));
    if(oldState.timestamp <= newState.timestamp){
        localStorage.setItem('CTstate', JSON.stringify(newState));
        return true;
    } else {
        return false;
    }
}
function fetchVars(vars) {

    // $.ajax({
    //     url: "";
    //
    // }).done(function (data){
    //
    // });
}
document.addEventListener("DOMContentLoaded", function(event) {
    // Lets get the vars
    let variables;
    fetchVars(variables);
    // variables


    // inputs

    // Units
    let unit_metric_elem = document.getElementById('input--units-1');
    let unit_imperial_elem = document.getElementById('input--units-2');

    // Block up weight + number of boards -> buw
    let buw_ct300_volume_elem = document.getElementById('input--buw_nob-1');
    let buw_ct8504_volume_elem = document.getElementById('input--buw_nob-2');
    let buw_ct8502_volume_elem = document.getElementById('input--buw_nob-3');

    // The output weights of the boards
    let output_buw_ct300_weight_elem = document.getElementById('input--buw_nob-4');
    let output_buw_ct850_weight_elem = document.getElementById('input--buw_nob-5');
    let output_buw_total_weight_elem = document.getElementById('input--buw_nob-6');

    // Number of boards
    let output_nob_ct300_elem = document.getElementById('input--buw_nob-7');
    let output_nob_ct8504_elem = document.getElementById('input--buw_nob-8');
    let output_nob_ct8502_elem = document.getElementById('input--buw_nob-9');

    // Adhesive
    let adhesive_bondedSurface_elem = document.getElementById('input--adhesive-1');
    // output
    let output_adhesive_volumeAdhesive_elem = document.getElementById('input--adhesive-2');

    // Sealer
    let sealer_toolSurface_elem = document.getElementById('input--sealer-1');
    // output
    let output_sealer_stage1_elem = document.getElementById('input--sealer-2');
    let output_sealer_stage2_elem = document.getElementById('input--selaer-3');

    // Shipping weight
    let output_ship_ct300_elem = document.getElementById('input--shipping_weight-1');
    let output_ship_ct850_elem = document.getElementById('input--shipping_weight-2');
    let output_ship_adhesive_elem = document.getElementById('input--shipping_weight-3');
    let output_ship_sealerStage1_elem = document.getElementById('input--shipping_weight-4');
    let output_ship_sealerStage2_elem = document.getElementById('input--shipping_weight-5');
    let output_ship_other_elem = document.getElementById('input--shipping_weight-6');
    let output_ship_total_elem = document.getElementById('input--shipping_weight-7');


    // Buttons

    let btn_units_elem = document.getElementsByClassName('js--setUnits')[0];
    let btn_buw_elem = document.getElementsByClassName("js--buw_nob")[0];
    let btn_adhesive_elem = document.getElementsByClassName('js--adhesive')[0];
    let btn_sealer_elem = document.getElementsByClassName("js--sealer")[0];
    let btn_export_elem = document.getElementsByClassName("js--export")[0];
    let btn_quote_elem = document.getElementsByClassName("js--quote")[0];

    // Logic

    // Lets handle state
    let state = JSON.parse(localStorage.getItem('CTstate')) || {};
    if (state.timestamp != null){
        // Ok we have data from last time
        let formData = state.form;
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
            // TODO calculate the weight given the variables var

        }
        if(formData.buw.ct850.weight != null){
            output_buw_ct850_weight_elem.value = formData.buw.ct850.weight;
        } else {
            // TODO calculate the weight of CT850 from the variables var

        }
        if (formData.buw.total.weight != null){
            output_buw_total_weight_elem.value = formData.buw.total.weight;
        } else {
            // TODO calculat the total weight from the variables var

        }
        // Number of Boards
        if(formData.nob.ct300.amount != null){
            output_nob_ct300_elem.value = formData.nob.ct300.amount;
        } else {
            // TODO calculate the number of ct300 boards given the variables var

        }
        if(formData.nob.ct8504.amount != null){
            output_nob_ct8504_elem.value = formData.nob.ct8504.amount;
        } else {
            // TODO calculate the number of ct8504 boards given the variables var

        }
        if(formData.nob.ct8502.amount != null){
            output_nob_ct8502_elem.value = formData.nob.ct8502.amount;
        } else {
            // TODO calc the number of ct8502 boards
        }

        // Adhesive
        if(formData.adhesive.surfaceArea != null){
            adhesive_bondedSurface_elem.value = formData.adhesive.surfaceArea;
        } else {
            // TODO calc this

        }
        if(formData.adhesive.volume != null){
            output_adhesive_volumeAdhesive_elem.value = formData.adhesive.volume;
        } else {
            // TODO calc

        }

        // Sealer
        if(formData.sealer.toolSurface != null){
            sealer_toolSurface_elem.value = formData.sealer.toolSurface;
        } else {
            // TODO calc

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
            
        }

    } else {
        // we don't have any saved state
        state.timestamp = Math.floor(new Date().getTime() / 1000);
        let form = {}

    }


});
