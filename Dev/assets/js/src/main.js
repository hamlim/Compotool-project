function updateState(newState){
    let oldState = localStorage.getItem('CTstate');
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
    let xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            console.log(this.responseText);
            let data = JSON.parse(this.responseText);
            vars.metric = {};
            vars.imperial = {};
            vars.metric.sealer = {};
            vars.imperial.sealer = {};
            vars.metric.buw = {};
            vars.imperials.buw = {};
            vars.metric.nob = {};
            vars.imperial.nob = {};
            for(let i=0; i<data.length; i++){
                if(data[i].Order === "1"){
                    // Imperial adhesive
                    vars.imperial.adhesive = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "2") {
                    // Metric adhesive
                    vars.metric.adhesive = parseFloat(data[i].Coverage);
                } else if (data[i].Order === "3") {
                    // Imperial stage one sealer
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
                    // buw
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
                }
            }

        }
    });

    xhr.open("GET", "https://sheetsu.com/apis/v1.0/755fe98f1e9c");
    xhr.setRequestHeader("authorization", "Basic cGRBek5zM3hxMjRNbTZiUGJ5ZjE6ZjlibzVBVjEyOTNoZUh4c3lIYml0cUc0RXlXWXhqenF4MndITmh0cQ==");

    xhr.send();

};


document.addEventListener("DOMContentLoaded", function(event) {
    // Lets get the vars
    let variables = {};
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
    let output_sealer_stage2_elem = document.getElementById('input--sealer-3');

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
       let query = window.location.search.substring(1);
       let vars = query.split("&");
       for (let i=0;i<vars.length;i++) {
               let pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
    }

    function pageInit(){
        let query = getQueryVariable("clear");
        if(query){
            initializeInputs();
        } else {
            // Don't do anything
        }
    }
    pageInit();

    // Lets handle state
    let state = JSON.parse(localStorage.getItem('CTstate')) || {};

    function getFormState(){
        let form = {};
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
                // output_nob_ct300_elem.value = variables.metric.
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
        let form = getFormState();
        state.form = form;
        console.log(state);
        updateState(state);


    }

    // Onclick events
    btn_units_elem.onclick = function(state){

    }


});
