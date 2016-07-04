function updateState(newState) {
    var oldState = localStorage.CTstate;
    if (oldState) {
        if (JSON.parse(oldState).timestamp <= newState.timestamp) {
            localStorage.setItem('CTstate', JSON.stringify(newState));
        }
    } else {
        localStorage.setItem('CTstate', JSON.stringify(newState));
    }
}

function updateTimestamp(state) {
    state.timestamp = Math.floor(new Date().getTime() / 1000);
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function fetchVars(vars) {
    if(window.fetch){
        var myInit = { method: 'GET',
                    mode: 'cors',
                    cache: 'default' };
        window.fetch('https://fieldbookcode.com/5776ee58633c03030006c8ab/get-codelet', myInit)
            .then(function(response){
                return response.json();
            }).then(function(json){

                console.log('parsed json', json);
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
                vars.metric.shipping.ct8502 = 0;
                vars.imperial.shipping.ct8502 = 0;
                vars.metric.shipping.ct8504 = 0;
                vars.imperial.shipping.ct8504 = 0;
                vars.ct300 = {};
                vars.ct300.shipping = {};
                vars.ct300.shipping.metric = 0;
                vars.ct300.shipping.imperial = 0;
                vars.ct8502 = {};
                vars.ct8504 = {};
                vars.ct8502.shipping = {};
                vars.ct8504.shipping = {};
                vars.ct8502.shipping.metric = 0;
                vars.ct8504.shipping.metric = 0;
                vars.ct8502.shipping.imperial = 0;
                vars.ct8504.shipping.imperial = 0;
                for (var i = 0; i < json.length; i++) {
                    if (json[i].order === 1) {
                        vars.imperial.adhesive = parseFloat(json[i].coverage);
                    } else if (json[i].order === 2) {
                        vars.metric.adhesive = parseFloat(json[i].coverage);
                    } else if (json[i].order === 3) {
                        vars.imperial.sealer.stageOne = parseFloat(json[i].coverage);
                    } else if (json[i].order === 4) {
                        vars.metric.sealer.stageOne = parseFloat(json[i].coverage);
                    } else if (json[i].order === 5) {
                        vars.imperial.sealer.stageTwo = parseFloat(json[i].coverage);
                    } else if (json[i].order === 6) {
                        vars.metric.sealer.stageTwo = parseFloat(json[i].coverage);
                    } else if (json[i].order === 7) {
                        // releaser
                    } else if (json[i].order === 8) {
                        // releaser
                    } else if (json[i].order === 9) {
                        vars.imperial.buw.ct300 = parseFloat(json[i].coverage);
                    } else if (json[i].order === 10) {
                        vars.metric.buw.ct300 = parseFloat(json[i].coverage);
                    } else if (json[i].order === 11) {
                        vars.imperial.buw.ct850 = parseFloat(json[i].coverage);
                    } else if (json[i].order === 12) {
                        vars.metric.buw.ct850 = parseFloat(json[i].coverage);
                    } else if (json[i].order === 13) {
                        vars.imperial.nob.ct300 = parseFloat(json[i].coverage);
                    } else if (json[i].order === 14) {
                        vars.metric.nob.ct300 = parseFloat(json[i].coverage);
                    } else if (json[i].order === 15) {
                        vars.imperial.nob.ct8504 = parseFloat(json[i].coverage);
                    } else if (json[i].order === 16) {
                        vars.metric.nob.ct8504 = parseFloat(json[i].coverage);
                    } else if (json[i].order === 17) {
                        vars.imperial.nob.ct8502 = parseFloat(json[i].coverage);
                    } else if (json[i].order === 18) {
                        vars.metric.nob.ct8502 = parseFloat(json[i].coverage);
                    } else if (json[i].order === 19) {
                        vars.ct300.shipping.imperial = parseFloat(json[i].coverage);
                        vars.imperial.shipping.ct300 = parseFloat(json[i].coverage);
                    } else if (json[i].order === 20) {
                        // console.log(vars.ct300);
                        vars.ct300.shipping.metric = parseFloat(json[i].coverage);
                        vars.metric.shipping.ct300 = parseFloat(json[i].coverage);
                    } else if (json[i].order === 21) {
                        vars.imperial.shipping.ct8502 = parseFloat(json[i].coverage);
                        vars.ct8502.shipping.imperial = parseFloat(json[i].coverage);
                    } else if (json[i].order === 22) {
                        vars.metric.shipping.ct8502 = parseFloat(json[i].coverage);
                        vars.ct8502.shipping.metric = parseFloat(json[i].coverage);
                    } else if (json[i].order === 23) {
                        vars.imperial.shipping.ct8504 = parseFloat(json[i].coverage);
                        vars.ct8504.shipping.imperial = parseFloat(json[i].coverage);
                    } else if (json[i].order === 24) {
                        vars.metric.shipping.ct8504 = parseFloat(json[i].coverage);
                        vars.ct8504.shipping.metric = parseFloat(json[i].coverage);
                    } else if (json[i].order === 25) {
                        vars.imperial.shipping.adhesive.liters = parseFloat(json[i].coverage);
                    } else if (json[i].order === 26) {
                        vars.metric.shipping.adhesive.liters = parseFloat(json[i].coverage);
                    } else if (json[i].order === 27) {
                        vars.imperial.shipping.adhesive.weight = parseFloat(json[i].coverage);
                    } else if (json[i].order === 28) {
                        vars.metric.shipping.adhesive.weight = parseFloat(json[i].coverage);
                    } else if (json[i].order === 29) {
                        vars.imperial.shipping.sealer.stageOne.liters = parseFloat(json[i].coverage);
                    } else if (json[i].order === 30) {
                        vars.metric.shipping.sealer.stageOne.liters = parseFloat(json[i].coverage);
                    } else if (json[i].order === 31) {
                        vars.imperial.shipping.sealer.stageOne.weight = parseFloat(json[i].coverage);
                    } else if (json[i].order === 32) {
                        vars.metric.shipping.sealer.stageOne.weight = parseFloat(json[i].coverage);
                    } else if (json[i].order === 33) {
                        vars.imperial.shipping.sealer.stageTwo.liters = parseFloat(json[i].coverage);
                    } else if (json[i].order === 34) {
                        vars.metric.shipping.sealer.stageTwo.liters = parseFloat(json[i].coverage);
                    } else if (json[i].order === 35) {
                        vars.imperial.shipping.sealer.stageTwo.weight = parseFloat(json[i].coverage);
                    } else if (json[i].order === 36) {
                        vars.metric.shipping.sealer.stageTwo.weight = parseFloat(json[i].coverage);
                    }
                }
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });
    } else {
        var xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
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
                vars.metric.shipping.ct8502 = 0;
                vars.imperial.shipping.ct8502 = 0;
                vars.metric.shipping.ct8504 = 0;
                vars.imperial.shipping.ct8504 = 0;
                vars.ct300 = {};
                vars.ct300.shipping = {};
                vars.ct300.shipping.metric = 0;
                vars.ct300.shipping.imperial = 0;
                vars.ct8502 = {};
                vars.ct8504 = {};
                vars.ct8502.shipping = {};
                vars.ct8504.shipping = {};
                vars.ct8502.shipping.metric = 0;
                vars.ct8504.shipping.metric = 0;
                vars.ct8502.shipping.imperial = 0;
                vars.ct8504.shipping.imperial = 0;
                for (var i = 0; i < data.length; i++) {
                    if (data[i].order === 1) {
                        vars.imperial.adhesive = parseFloat(data[i].coverage);
                    } else if (data[i].order === 2) {
                        vars.metric.adhesive = parseFloat(data[i].coverage);
                    } else if (data[i].order === 3) {
                        vars.imperial.sealer.stageOne = parseFloat(data[i].coverage);
                    } else if (data[i].order === 4) {
                        vars.metric.sealer.stageOne = parseFloat(data[i].coverage);
                    } else if (data[i].order === 5) {
                        vars.imperial.sealer.stageTwo = parseFloat(data[i].coverage);
                    } else if (data[i].order === 6) {
                        vars.metric.sealer.stageTwo = parseFloat(data[i].coverage);
                    } else if (data[i].order === 7) {
                        // releaser
                    } else if (data[i].order === 8) {
                        // releaser
                    } else if (data[i].order === 9) {
                        vars.imperial.buw.ct300 = parseFloat(data[i].coverage);
                    } else if (data[i].order === 10) {
                        vars.metric.buw.ct300 = parseFloat(data[i].coverage);
                    } else if (data[i].order === 11) {
                        vars.imperial.buw.ct850 = parseFloat(data[i].coverage);
                    } else if (data[i].order === 12) {
                        vars.metric.buw.ct850 = parseFloat(data[i].coverage);
                    } else if (data[i].order === 13) {
                        vars.imperial.nob.ct300 = parseFloat(data[i].coverage);
                    } else if (data[i].order === 14) {
                        vars.metric.nob.ct300 = parseFloat(data[i].coverage);
                    } else if (data[i].order === 15) {
                        vars.imperial.nob.ct8504 = parseFloat(data[i].coverage);
                    } else if (data[i].order === 16) {
                        vars.metric.nob.ct8504 = parseFloat(data[i].coverage);
                    } else if (data[i].order === 17) {
                        vars.imperial.nob.ct8502 = parseFloat(data[i].coverage);
                    } else if (data[i].order === 18) {
                        vars.metric.nob.ct8502 = parseFloat(data[i].coverage);
                    } else if (data[i].order === 19) {
                        vars.ct300.shipping.imperial = parseFloat(data[i].coverage);
                        vars.imperial.shipping.ct300 = parseFloat(data[i].coverage);
                    } else if (data[i].order === 20) {
                        // console.log(vars.ct300);
                        vars.ct300.shipping.metric = parseFloat(data[i].coverage);
                        vars.metric.shipping.ct300 = parseFloat(data[i].coverage);
                    } else if (data[i].order === 21) {
                        vars.imperial.shipping.ct8502 = parseFloat(data[i].coverage);
                        vars.ct8502.shipping.imperial = parseFloat(data[i].coverage);
                    } else if (data[i].order === 22) {
                        vars.metric.shipping.ct8502 = parseFloat(data[i].coverage);
                        vars.ct8502.shipping.metric = parseFloat(data[i].coverage);
                    } else if (data[i].order === 23) {
                        vars.imperial.shipping.ct8504 = parseFloat(data[i].coverage);
                        vars.ct8504.shipping.imperial = parseFloat(data[i].coverage);
                    } else if (data[i].order === 24) {
                        vars.metric.shipping.ct8504 = parseFloat(data[i].coverage);
                        vars.ct8504.shipping.metric = parseFloat(data[i].coverage);
                    } else if (data[i].order === 25) {
                        vars.imperial.shipping.adhesive.liters = parseFloat(data[i].coverage);
                    } else if (data[i].order === 26) {
                        vars.metric.shipping.adhesive.liters = parseFloat(data[i].coverage);
                    } else if (data[i].order === 27) {
                        vars.imperial.shipping.adhesive.weight = parseFloat(data[i].coverage);
                    } else if (data[i].order === 28) {
                        vars.metric.shipping.adhesive.weight = parseFloat(data[i].coverage);
                    } else if (data[i].order === 29) {
                        vars.imperial.shipping.sealer.stageOne.liters = parseFloat(data[i].coverage);
                    } else if (data[i].order === 30) {
                        vars.metric.shipping.sealer.stageOne.liters = parseFloat(data[i].coverage);
                    } else if (data[i].order === 31) {
                        vars.imperial.shipping.sealer.stageOne.weight = parseFloat(data[i].coverage);
                    } else if (data[i].order === 32) {
                        vars.metric.shipping.sealer.stageOne.weight = parseFloat(data[i].coverage);
                    } else if (data[i].order === 33) {
                        vars.imperial.shipping.sealer.stageTwo.liters = parseFloat(data[i].coverage);
                    } else if (data[i].order === 34) {
                        vars.metric.shipping.sealer.stageTwo.liters = parseFloat(data[i].coverage);
                    } else if (data[i].order === 35) {
                        vars.imperial.shipping.sealer.stageTwo.weight = parseFloat(data[i].coverage);
                    } else if (data[i].order === 36) {
                        vars.metric.shipping.sealer.stageTwo.weight = parseFloat(data[i].coverage);
                    }
                }

            }
        });

        xhr.open("GET", "https://fieldbookcode.com/5776ee58633c03030006c8ab/get-codelet", false);
        // xhr.setRequestHeader("authorization", "Basic cGRBek5zM3hxMjRNbTZiUGJ5ZjE6ZjlibzVBVjEyOTNoZUh4c3lIYml0cUc0RXlXWXhqenF4MndITmh0cQ==");

        xhr.send();
    
    }
}

// Lets get the vars
var constants = {};
fetchVars(constants);
console.log(constants);
// console.log(constants.ct300);

document.addEventListener("DOMContentLoaded", function(event) {
    // variables


    // inputs

    // Units
    var unit_metric_elem = document.getElementById('input--units-1');
    var unit_imperial_elem = document.getElementById('input--units-2');

    var unit_spans_elemCollection = document.getElementsByClassName('js--hook-units');
    var volum_unit_spans = document.getElementsByClassName('js--hook-units-vol');
    var area_unit_spans = document.getElementsByClassName('js--hook-units-area');
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
    var btn_request_elem = document.getElementsByClassName("js--request")[0];

    // Logic

    function initializeInputs() {
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


    // Blockup weight and Number of Boards
    // Individual calculation functions
    /*
        a = buw_ct300_volume_elem
        a = state.form.buw.ct300.volume

        b = buw_ct8504_volume_elem
        b = state.form.buw.ct8504.volume

        c = buw_ct8502_volume_elem
        c = state.form.buw.ct8502.volume


        d = output_buw_ct300_weight_elem
        d = state.form.buw.ct300.weight

        e = output_buw_ct850_weight_elem
        e = state.form.buw.ct850.weight

        f = output_buw_total_weight_elem
        f = state.form.buw.total.weight


        g = output_nob_ct300_elem
        g = state.form.nob.ct300.amount

        h = output_nob_ct8504_elem
        h = state.form.nob.ct8504.amount

        i = output_nob_ct8502_elem
        i = state.form.nob.ct8502.amount

    */

    function changeA(state, newA){
        /*
            Arguments:
                state: an object representing the current state of all the calculated values currently
                newA: a float of the new blockup volume of ct300
            Returns:
                none
        */
        // a has changed
        /* 
            Update:
                d, f, g
            Permutate:
                a, d, f, g
        */
        // permutate a
        state.form.buw.ct300.volume = newA;
        if(state.form.units === "metric"){
            // update d
            output_buw_ct300_weight_elem.value = (constants.metric.buw.ct300 * newA).toFixed(3);
            // update f
            output_buw_total_weight_elem.value = ((parseFloat(output_buw_ct850_weight_elem.value) + parseFloat(output_buw_ct300_weight_elem.value))).toFixed(3);
            // update g
            output_nob_ct300_elem.value = Math.ceil(newA / constants.metric.nob.ct300);

            // Permutate d
            state.form.buw.ct300.weight = parseFloat(output_buw_ct300_weight_elem.value);
            // Permutate f
            state.form.buw.total.weight = parseFloat(output_buw_total_weight_elem.value);
            // Permutate g
            state.form.nob.ct300.amount = parseFloat(output_nob_ct300_elem.value);
        } else {
            // update d
            output_buw_ct300_weight_elem.value = (constants.imperial.buw.ct300 * parseFloat(buw_ct300_volume_elem.value)).toFixed(3);
            // update f
            output_buw_total_weight_elem.value = ((parseFloat(output_buw_ct850_weight_elem.value) + parseFloat(output_buw_ct300_weight_elem.value))).toFixed(3);
            // update g
            output_nob_ct300_elem.value = Math.ceil(parseFloat(buw_ct300_volume_elem.value) / constants.imperial.nob.ct300);

            // Permutate d
            state.form.buw.ct300.weight = parseFloat(output_buw_ct300_weight_elem.value);
            // Permutate f
            state.form.buw.total.weight = parseFloat(output_buw_total_weight_elem.value);
            // Permutate g
            state.form.nob.ct300.amount = parseFloat(output_nob_ct300_elem.value);
        }
        updateTimestamp(state);
        updateState(state);
    }

    function changeB(state, newval){
        /*
            Arguments:
                state: an object representing the current state of all the calculated values currently
                newval: a float of the new blockup volume of ct8504
            Returns:
                none
        */
        // b has changed
        /* 
            Update:
                e, f, h
            Permutate:
                b, e, f, h
        */
        // permutate b
        state.form.buw.ct8504.volume = newval
        if(state.form.units === "metric"){
            // update e
            output_buw_ct850_weight_elem.value =  (constants.metric.buw.ct850 * (parseFloat(buw_ct8502_volume_elem.value) + parseFloat(buw_ct8504_volume_elem.value))).toFixed(3);
            // update f
            output_buw_total_weight_elem.value = ((parseFloat(output_buw_ct850_weight_elem.value) + parseFloat(output_buw_ct300_weight_elem.value))).toFixed(3);
            // update h
            output_nob_ct8504_elem.value = Math.ceil(parseFloat(buw_ct8504_volume_elem.value) / constants.metric.nob.ct8504);

            // permutate e
            state.form.buw.ct850.weight = parseFloat(output_buw_ct850_weight_elem.value);
            // permutate f
            state.form.buw.total.weight = parseFloat(output_buw_total_weight_elem.value);
            // permutate h
            state.form.nob.ct8504.amount = Math.ceil(parseFloat(output_nob_ct8504_elem.value));
        } else {
            // update e
            output_buw_ct850_weight_elem.value =  (constants.imperial.buw.ct850 * (parseFloat(buw_ct8502_volume_elem.value) + parseFloat(buw_ct8504_volume_elem.value))).toFixed(3);
            // update f
            output_buw_total_weight_elem.value = ((parseFloat(output_buw_ct850_weight_elem.value) + parseFloat(output_buw_ct300_weight_elem.value))).toFixed(3);
            // update h
            output_nob_ct8504_elem.value = Math.ceil(parseFloat(buw_ct8504_volume_elem.value) / constants.imperial.nob.ct8504);

            // permutate e
            state.form.buw.ct850.weight = parseFloat(output_buw_ct850_weight_elem.value);
            // permutate f
            state.form.buw.total.weight = parseFloat(output_buw_total_weight_elem.value);
            // permutate h
            state.form.nob.ct8504.amount = Math.ceil(parseFloat(output_nob_ct8504_elem.value));
        }
        updateTimestamp(state);
        updateState(state);
    }

    function changeC(state, newval){
        /*
            Arguments:
                state: an object representing the current state of all the calculated values currently
                newval: a float of the new blockup volume of ct8502
            Returns:
                none
        */
        // c has changed
        /* 
            Update:
                e, f, i
            Permutate:
                c, e, f, i
        */
        // permutate c
        state.form.buw.ct8502.volume = newval
        if(state.form.units === "metric"){
            // update e
            output_buw_ct850_weight_elem.value = (constants.metric.buw.ct850 * (parseFloat(buw_ct8502_volume_elem.value) + parseFloat(buw_ct8504_volume_elem.value))).toFixed(3);
            // update f
            output_buw_total_weight_elem.value = ((parseFloat(output_buw_ct850_weight_elem.value) + parseFloat(output_buw_ct300_weight_elem.value))).toFixed(3);
            // update i
            output_nob_ct8502_elem.value = Math.ceil(parseFloat(buw_ct8502_volume_elem.value) / constants.metric.nob.ct8502);

            // permutate e
            state.form.buw.ct850.weight = parseFloat(output_buw_ct850_weight_elem.value);
            // permutate f
            state.form.buw.total.weight = parseFloat(output_buw_total_weight_elem.value);
            // permutate i
            state.form.nob.ct8502.amount = Math.ceil(parseFloat(output_nob_ct8502_elem.value));
        } else {
            // update e
            output_buw_ct850_weight_elem.value = (constants.imperial.buw.ct850 * (parseFloat(buw_ct8502_volume_elem.value) + parseFloat(buw_ct8504_volume_elem.value))).toFixed(3);
            // update f
            output_buw_total_weight_elem.value = ((parseFloat(output_buw_ct850_weight_elem.value) + parseFloat(output_buw_ct300_weight_elem.value))).toFixed(3);
            // update i
            output_nob_ct8502_elem.value = Math.ceil(parseFloat(buw_ct8502_volume_elem.value) / constants.imperial.nob.ct8502);

            // permutate e
            state.form.buw.ct850.weight = parseFloat(output_buw_ct850_weight_elem.value);
            // permutate f
            state.form.buw.total.weight = parseFloat(output_buw_total_weight_elem.value);
            // permutate i
            state.form.nob.ct8502.amount = Math.ceil(parseFloat(output_nob_ct8502_elem.value));
        }
        updateTimestamp(state);
        updateState(state);
    }



    function changeG(state, newval){
        /*
            Arguments:
                state: an object representing the current state of all the calculated values currently
                newval: an int of the new number of blocks of ct300
            Returns:
                none
        */
        /* 
        Permutate g
        */
        state.form.nob.ct300.amount = newval;
        updateTimestamp(state);
        updateState(state);
    }

    function changeH(state, newval){
        /*
            Arguments:
                state: an object representing the current state of all the calculated values currently
                newval: an int of the new number of blocks of ct8504
            Returns:
                none
        */
        /* 
        Permutate h
        */
        state.form.nob.ct8504.amount = newval;
        updateTimestamp(state);
        updateState(state);
    }

    function changeI(state, newval){
        /*
            Arguments:
                state: an object representing the current state of all the calculated values currently
                newval: an int of the new number of blocks of ct8502
            Returns:
                none
        */
        /* 
        Permutate i
        */
        state.form.nob.ct8502.amount = newval;
        updateTimestamp(state);
        updateState(state);
    }

    function calculateShippingWeight(state) {
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
        if (state.form.units === "metric") {
            // output_ship_ct300_elem.value = parseFloat(output_nob_ct300_elem.value) * constants.metric.shipping.ct300;
            output_ship_ct300_elem.value = parseFloat(output_nob_ct300_elem.value) * constants.ct300.shipping.metric;
            state.form.shipping.ct300 = parseFloat(output_ship_ct300_elem.value);
            output_ship_ct850_elem.value = (parseFloat(output_nob_ct8502_elem.value) * constants.ct8502.shipping.metric) + (parseFloat(output_nob_ct8504_elem.value) * constants.ct8504.shipping.metric); // (parseFloat(output_nob_ct8502_elem.value) + parseFloat(output_nob_ct8504_elem.value)) * constants.metric.shipping.ct850;
            state.form.shipping.ct850 = parseFloat(output_ship_ct850_elem.value);
            output_ship_adhesive_elem.value = (Math.ceil(parseFloat(output_adhesive_volumeAdhesive_elem.value) / constants.metric.shipping.adhesive.liters)) * constants.metric.shipping.adhesive.weight;
            state.form.shipping.adhesive = parseFloat(output_ship_adhesive_elem.value);
            output_ship_sealerStage1_elem.value = (Math.ceil(parseFloat(output_sealer_stage1_elem.value) / constants.metric.shipping.sealer.stageOne.liters)) * constants.metric.shipping.sealer.stageOne.weight;
            state.form.shipping.sealer.stageOne = parseFloat(output_ship_sealerStage1_elem.value);
            output_ship_sealerStage2_elem.value = (Math.ceil(parseFloat(output_sealer_stage2_elem.value) / constants.metric.shipping.sealer.stageTwo.liters)) * constants.metric.shipping.sealer.stageTwo.weight;
            state.form.shipping.sealer.stageTwo = parseFloat(output_ship_sealerStage2_elem.value);
            output_ship_total_elem.value = parseFloat(output_ship_ct300_elem.value) + parseFloat(output_ship_adhesive_elem.value) + parseFloat(output_ship_sealerStage2_elem.value) + parseFloat(output_ship_sealerStage1_elem.value) + parseFloat(output_ship_ct850_elem.value) + parseFloat(output_ship_other_elem.value);
            state.form.shipping.total = parseFloat(output_ship_total_elem.value);
            output_ship_other_elem.value = 0;
            state.form.shipping.other = parseFloat(output_ship_other_elem.value);
        } else {
            // output_ship_ct300_elem.value = parseFloat(output_nob_ct300_elem.value) * constants.imperial.shipping.ct300;
            output_ship_ct300_elem.value = parseFloat(output_nob_ct300_elem.value) * constants.ct300.shipping.imperial;
            state.form.shipping.ct300 = parseFloat(output_ship_ct300_elem.value);
            output_ship_ct850_elem.value = (parseFloat(output_nob_ct8502_elem.value) * constants.ct8502.shipping.imperial) + (parseFloat(output_nob_ct8504_elem.value) * constants.ct8504.shipping.imperial); // (parseFloat(output_nob_ct8502_elem.value) * constants.imperial.shipping.ct8502) + (parseFloat(output_nob_ct8504_elem.value) * constants.imperial.shipping.ct8504);
            state.form.shipping.ct850 = parseFloat(output_ship_ct850_elem.value);
            output_ship_adhesive_elem.value = (Math.ceil(parseFloat(output_adhesive_volumeAdhesive_elem.value) / constants.imperial.shipping.adhesive.liters)) * constants.imperial.shipping.adhesive.weight;
            state.form.shipping.adhesive = parseFloat(output_ship_adhesive_elem.value);
            output_ship_sealerStage1_elem.value = (Math.ceil(parseFloat(output_sealer_stage1_elem.value) / constants.imperial.shipping.sealer.stageOne.liters)) * constants.imperial.shipping.sealer.stageOne.weight;
            state.form.shipping.sealer.stageOne = parseFloat(output_ship_sealerStage1_elem.value);
            output_ship_sealerStage2_elem.value = (Math.ceil(parseFloat(output_sealer_stage2_elem.value) / constants.imperial.shipping.sealer.stageTwo.liters)) * constants.imperial.shipping.sealer.stageTwo.weight;
            state.form.shipping.sealer.stageTwo = parseFloat(output_ship_sealerStage2_elem.value);
            output_ship_total_elem.value = parseFloat(output_ship_ct300_elem.value) + parseFloat(output_ship_adhesive_elem.value) + parseFloat(output_ship_sealerStage2_elem.value) + parseFloat(output_ship_sealerStage1_elem.value) + parseFloat(output_ship_ct850_elem.value) + parseFloat(output_ship_other_elem.value);
            state.form.shipping.total = parseFloat(output_ship_total_elem.value);
            output_ship_other_elem.value = 0;
            state.form.shipping.other = parseFloat(output_ship_other_elem.value);
        }
        updateTimestamp(state);
        updateState(state);
    }

    function calculateAdhesive(state) {
        // Ok we need to calculate any changes to adhesive inputs
        /*
            output_adhesive_volumeAdhesive_elem
        */
        if (state.form.units === "metric") {
            output_adhesive_volumeAdhesive_elem.value = parseFloat(adhesive_bondedSurface_elem.value) * constants.metric.adhesive;
            state.form.adhesive.amount = parseFloat(output_adhesive_volumeAdhesive_elem.value);
        } else {
            output_adhesive_volumeAdhesive_elem.value = parseFloat(adhesive_bondedSurface_elem.value) * constants.imperial.adhesive;
            state.form.adhesive.amount = parseFloat(output_adhesive_volumeAdhesive_elem.value);
        }
        updateTimestamp(state);
        updateState(state);
    }

    function calculateSealers(state) {
        // Ok we need to calculate any changes to sealer inputs
        /*
            output_sealer_stage1_elem
            output_sealer_stage2_elem
        */
        if (state.form.units === "metric") {
            output_sealer_stage1_elem.value = Math.ceil(parseFloat(sealer_toolSurface_elem.value) * constants.metric.sealer.stageOne);
            state.form.sealer.stageOne = parseFloat(output_sealer_stage1_elem.value);
            output_sealer_stage2_elem.value = Math.ceil(parseFloat(sealer_toolSurface_elem.value) * constants.metric.sealer.stageTwo);
            state.form.sealer.stageTwo = parseFloat(output_sealer_stage2_elem.value);
        } else {
            output_sealer_stage1_elem.value = Math.ceil(parseFloat(sealer_toolSurface_elem.value) * constants.imperial.sealer.stageOne);
            state.form.sealer.stageOne = parseFloat(output_sealer_stage1_elem.value);
            output_sealer_stage2_elem.value = Math.ceil(parseFloat(sealer_toolSurface_elem.value) * constants.imperial.sealer.stageTwo);
            state.form.sealer.stageTwo = parseFloat(output_sealer_stage2_elem.value);
        }
        updateTimestamp(state);
        updateState(state);
    }

    // Lets handle state
    var state = {};
    if (localStorage.getItem('CTstate')) {
        state = JSON.parse(localStorage.getItem('CTstate'));
    } else {
        state = {};
    }
    // let state = JSON.parse(localStorage.getItem('CTstate')) || {};

    function getFormState() {
        var form = {};
        if (unit_metric_elem.checked === true) {
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

        form.buw.ct300.volume = parseFloat(buw_ct300_volume_elem.value);
        form.buw.ct8502.volume = parseFloat(buw_ct8502_volume_elem.value);
        form.buw.ct8504.volume = parseFloat(buw_ct8504_volume_elem.value);
        form.buw.ct300.weight = parseFloat(output_buw_ct300_weight_elem.value);
        form.buw.ct850.weight = parseFloat(output_buw_ct850_weight_elem.value);
        form.buw.total.weight = parseFloat(output_buw_total_weight_elem.value);
        form.nob.ct300.amount = parseFloat(output_nob_ct300_elem.value);
        form.nob.ct8502.amount = parseFloat(output_nob_ct8502_elem.value);
        form.nob.ct8504.amount = parseFloat(output_nob_ct8504_elem.value);
        form.adhesive.surfaceArea = parseFloat(adhesive_bondedSurface_elem.value);
        form.adhesive.volume = parseFloat(output_adhesive_volumeAdhesive_elem.value);
        form.sealer.toolSurface = parseFloat(sealer_toolSurface_elem.value);
        form.sealer.stageOne = parseFloat(output_sealer_stage1_elem.value);
        form.sealer.stageTwo = parseFloat(output_sealer_stage2_elem.value);
        form.shipping.ct300 = parseFloat(output_ship_ct300_elem.value);
        form.shipping.ct850 = parseFloat(output_ship_ct850_elem.value);
        form.shipping.adhesive = parseFloat(output_ship_adhesive_elem.value);
        form.shipping.sealer.stageOne = parseFloat(output_ship_sealerStage1_elem.value);
        form.shipping.sealer.stageTwo = parseFloat(output_ship_sealerStage2_elem.value);
        form.shipping.other = parseFloat(output_ship_other_elem.value);
        form.shipping.total = parseFloat(output_ship_total_elem.value);

        return form;
    };

    if (state.timestamp != null) {
        document.getElementsByClassName('hide')[0].className = "alert alert-info alert--info show";
        // Ok we have data from last time
        var formData = state.form;
        // units
        if (formData.units === "metric") {
            unit_imperial_elem.checked = false;
            unit_metric_elem.checked = true;
            for (var i = 0; i < unit_spans_elemCollection.length; i++) {
                unit_spans_elemCollection[i].innerText = "Kgs";
            }
            for(var j=0; j<area_unit_spans.length; j++){
                area_unit_spans[j].innerHTML = "m<sup>2</sup>";
            }
            for(var k=0; k<volum_unit_spans.length; k++){
                volum_unit_spans[k].innerHTML = "m<sup>3</sup>";
            }
        } else {
            unit_metric_elem.checked = false;
            unit_imperial_elem.checked = true;
            for (var i$0 = 0; i$0 < unit_spans_elemCollection.length; i$0++) {
                unit_spans_elemCollection[i$0].innerText = "Lbs";
            }
            for(var j$0=0; j$0<area_unit_spans.length; j$0++){
                area_unit_spans[j$0].innerHTML = "ft<sup>2</sup>";
            }
            for(var k$0=0; k$0<volum_unit_spans.length; k$0++){
                volum_unit_spans[k$0].innerHTML = "ft<sup>3</sup>";
            }
        }
        // Block Up weight
        if (formData.buw.ct300.volume != null) {
            buw_ct300_volume_elem.value = formData.buw.ct300.volume;
        } else {
            buw_ct300_volume_elem.value = 0;
        }
        if (formData.buw.ct8504.volume != null) {
            buw_ct8504_volume_elem.value = formData.buw.ct8504.volume;
        } else {
            buw_ct8504_volume_elem.value = 0;
        }
        if (formData.buw.ct8502.volume != null) {
            buw_ct8502_volume_elem.value = formData.buw.ct8502.volume;
        } else {
            buw_ct8502_volume_elem.value = 0;
        }

        if (formData.buw.ct300.weight != null) {
            output_buw_ct300_weight_elem.value = formData.buw.ct300.weight;
        } else {
            if (formData.units === "metric") {
                output_buw_ct300_weight_elem.value = constants.metric.buw.ct300 * parseFloat(buw_ct300_volume_elem.value);
                formData.buw.ct300.weight = parseFloat(output_buw_ct300_weight_elem.value);
            } else {
                output_buw_ct300_weight_elem.value = constants.imperial.buw.ct300 * parseFloat(buw_ct300_volume_elem.value);
                formData.buw.ct300.weight = parseFloat(output_buw_ct300_weight_elem.value);
            }
        }
        if (formData.buw.ct850.weight != null) {
            output_buw_ct850_weight_elem.value = formData.buw.ct850.weight;
        } else {
            if (formData.units === "metric") {
                output_buw_ct850_weight_elem.value = (constants.metric.buw.ct850 * parseFloat(buw_ct8502_volume_elem.value) + constants.metric.buw.ct850 * parseFloat(buw_ct8504_volume_elem.value));
                formData.buw.ct850.weight = parseFloat(output_buw_ct850_weight_elem.value);
            } else {
                output_buw_ct850_weight_elem.value = (constants.imperial.buw.ct850 * parseFloat(buw_ct8502_volume_elem.value) + constants.imperial.buw.ct850 * parseFloat(buw_ct8504_volume_elem.value));
                formData.buw.ct850.weight = parseFloat(output_buw_ct850_weight_elem.value);
            }
        }
        if (formData.buw.total.weight != null) {
            output_buw_total_weight_elem.value = formData.buw.total.weight;
        } else {
            output_buw_total_weight_elem.value = parseFloat(output_buw_ct850_weight_elem.value) + parseFloat(output_buw_ct300_weight_elem.value);
            formData.buw.total.weight = parseFloat(output_buw_total_weight_elem.value);
        }
        // Number of Boards
        if (formData.nob.ct300.amount != null) {
            output_nob_ct300_elem.value = formData.nob.ct300.amount;
        } else {
            if (formData.units === "metric") {
                output_nob_ct300_elem.value = Math.ceil(parseFloat(buw_ct300_volume_elem.value) / constants.metric.nob.ct300);
                formData.nob.ct300.amount = Math.ceil(parseFloat(output_nob_ct300_elem.value));
            } else {
                output_nob_ct300_elem.value = Math.ceil(parseFloat(buw_ct300_volume_elem.value) / constants.imperial.nob.ct300);
                formData.nob.ct300.amount = Math.ceil(parseFloat(output_nob_ct300_elem.value));
            }
        }
        if (formData.nob.ct8504.amount != null) {
            output_nob_ct8504_elem.value = formData.nob.ct8504.amount;
        } else {
            if (formData.units === "metric") {
                output_nob_ct8504_elem.value = Math.ceil(parseFloat(output_nob_ct8504_elem.value) / constants.metric.nob.ct8504);
                formData.nob.ct8504.amount = Math.ceil(parseFloat(output_nob_ct8504_elem.value));
            } else {
                output_nob_ct8504_elem.value = Math.ceil(parseFloat(output_nob_ct8504_elem.value) / constants.imperial.nob.ct8504);
                formData.nob.ct8504.amount = Math.ceil(parseFloat(output_nob_ct8504_elem.value));
            }
        }
        if (formData.nob.ct8502.amount != null) {
            output_nob_ct8502_elem.value = formData.nob.ct8502.amount;
        } else {
            if (formData.units === "metric") {
                output_nob_ct8502_elem.value = Math.ceil(parseFloat(output_nob_ct8502_elem.value) / constants.metric.nob.ct8502);
                formData.nob.ct8502.amount = Math.ceil(parseFloat(output_nob_ct8502_elem.value));
            } else {
                output_nob_ct8502_elem.value = Math.ceil(parseFloat(output_nob_ct8502_elem.value) / constants.imperial.nob.ct8502);
                formData.nob.ct8502.amount = Math.ceil(parseFloat(output_nob_ct8502_elem.value));
            }
        }

        // Adhesive
        if (formData.adhesive.surfaceArea != null) {
            adhesive_bondedSurface_elem.value = formData.adhesive.surfaceArea;
        } else {
            adhesive_bondedSurface_elem.value = 0;
            formData.adhesive.surfaceArea = parseFloat(output_adhesive_volumeAdhesive_elem.value);
        }
        if (formData.adhesive.volume != null) {
            output_adhesive_volumeAdhesive_elem.value = formData.adhesive.volume;
        } else {
            if (formData.units === "metric") {
                output_adhesive_volumeAdhesive_elem.value = parseFloat(adhesive_bondedSurface_elem.value) * constants.metric.adhesive;
                formData.adhesive.amount = parseFloat(output_adhesive_volumeAdhesive_elem.value);
            } else {
                output_adhesive_volumeAdhesive_elem.value = parseFloat(adhesive_bondedSurface_elem.value) * constants.imperial.adhesive;
                formData.adhesive.amount = parseFloat(output_adhesive_volumeAdhesive_elem.value);
            }
        }

        // Sealer
        if (formData.sealer.toolSurface != null) {
            sealer_toolSurface_elem.value = formData.sealer.toolSurface;
        } else {
            sealer_toolSurface_elem.value = 0;
            formData.sealer.toolSurface = parseFloat(sealer_toolSurface_elem.value);
        }
        if (formData.sealer.stageOne != null) {
            output_sealer_stage1_elem.value = formData.sealer.stageOne;
        } else {
            if (formData.units === "metric") {
                output_sealer_stage1_elem.value = parseFloat(sealer_toolSurface_elem.value) * constants.metric.sealer.stageOne;
                formData.sealer.stageOne = parseFloat(output_sealer_stage1_elem.value);
            } else {
                output_sealer_stage1_elem.value = parseFloat(sealer_toolSurface_elem.value) * constants.imperial.sealer.stageOne;
                formData.sealer.stageOne = parseFloat(output_sealer_stage1_elem.value);
            }
        }
        if (formData.sealer.stageTwo != null) {
            output_sealer_stage2_elem.value = formData.sealer.stageTwo;
        } else {
            if (formData.units === "metric") {
                output_sealer_stage2_elem.value = parseFloat(sealer_toolSurface_elem.value) * constants.metric.sealer.stageTwo;
                formData.sealer.stageTwo = parseFloat(output_sealer_stage2_elem.value);
            } else {
                output_sealer_stage2_elem.value = parseFloat(sealer_toolSurface_elem.value) * constants.imperial.sealer.stageTwo;
                formData.sealer.stageTwo = parseFloat(output_sealer_stage2_elem.value);
            }
        }

        // Shipping weight
        if (formData.shipping.ct300 != null) {
            output_ship_ct300_elem.value = formData.shipping.ct300;
        } else {
            if (formData.units === "metric") {
                output_ship_ct300_elem.value = parseFloat(output_nob_ct300_elem.value) * constants.metric.shipping.ct300;
                formData.shipping.ct300 = parseFloat(output_ship_ct300_elem.value);
            } else {
                output_ship_ct300_elem.value = parseFloat(output_nob_ct300_elem.value) * constants.imperial.shipping.ct300;
                formData.shipping.ct300 = parseFloat(output_ship_ct300_elem.value);
            }
        }
        if (formData.shipping.ct850 != null) {
            output_ship_ct850_elem.value = formData.shipping.ct850;
        } else {
            // let metric8502 = constants.ct8502.shipping.metric || 0;
            // let metric8504 = constants.ct8504.shipping.metric || 0;
            // let imperial8502 = constants.ct8503.shipping.imperial || 0;
            // let imperial8504 = constants.ct8504.shipping.imperial || 0;
            // let formShippingData = {};
            // formShippingData.metric8502 = metric8502;
            // formShippingData.metric8504 = metric8504;
            // formShippingData.imperial8502 = imperial8502;
            // formShippingData.imperial8504 = imperial8504;
            // console.log(formShippingData);
            if (formData.units === "metric") {
                output_ship_ct850_elem.value = (parseFloat(output_nob_ct8502_elem.value) * constants.metric.shipping.ct8502) + (parseFloat(output_nob_ct8504_elem.value) * constants.metric.shipping.ct8504); // ((parseFloat(output_nob_ct8502_elem.value) * constants.metric.shipping.ct8502) + (parseFloat(output_nob_ct8504_elem.value) * constants.metric.shipping.ct8504));
                formData.shipping.ct850 = parseFloat(output_ship_ct850_elem.value);
            } else {
                output_ship_ct850_elem.value = (parseFloat(output_nob_ct8502_elem.value) * constants.imperial.shipping.ct8502) + (parseFloat(output_nob_ct8504_elem.value) * constants.imperial.shipping.ct8504s); // output_ship_ct850_elem.value = ((parseFloat(output_nob_ct8502_elem.value) * constants.imperial.shipping.ct8502) + (parseFloat(output_nob_ct8504_elem.value) * constants.imperial.shipping.ct8504));
                formData.shipping.ct850 = parseFloat(output_ship_ct850_elem.value);
            }
        }
        if (formData.shipping.adhesive != null) {
            output_ship_adhesive_elem.value = formData.shipping.adhesive;
        } else {
            if (formData.units === "metric") {
                output_ship_adhesive_elem.value = (Math.ceil(parseFloat(output_adhesive_volumeAdhesive_elem.value) / constants.metric.shipping.adhesive.liters)) * constants.metric.shipping.adhesive.weight;
                formData.shipping.adhesive = parseFloat(output_ship_adhesive_elem.value);
            } else {
                output_ship_adhesive_elem.value = (Math.ceil(parseFloat(output_adhesive_volumeAdhesive_elem.value) / constants.imperial.shipping.adhesive.liters)) * constants.imperial.shipping.adhesive.weight;
                formData.shipping.adhesive = parseFloat(output_ship_adhesive_elem.value);
            }

        }
        if (formData.shipping.sealer.stageOne != null) {
            output_ship_sealerStage1_elem.value = formData.shipping.sealer.stageOne;
        } else {
            if (formData.units === "metric") {
                output_ship_sealerStage1_elem.value = (Math.ceil(parseFloat(output_sealer_stage1_elem.value) / constants.metric.shipping.sealer.stageOne.liters)) * constants.metric.shipping.sealer.stageOne.weight;
                formData.shipping.sealer.stageOne = parseFloat(output_ship_sealerStage1_elem.value);
            } else {
                output_ship_sealerStage1_elem.value = (Math.ceil(parseFloat(output_sealer_stage1_elem.value) / constants.imperial.shipping.sealer.stageOne.liters)) * constants.imperial.shipping.sealer.stageOne.weight;
                formData.shipping.sealer.stageOne = parseFloat(output_ship_sealerStage1_elem.value);
            }
        }
        if (formData.shipping.sealer.stageTwo != null) {
            output_ship_sealerStage2_elem.value = formData.shipping.sealer.stageTwo;
        } else {
            if (formData.units === "metric") {
                output_ship_sealerStage2_elem.value = (Math.ceil(parseFloat(output_ship_sealerStage2_elem.value) / constants.metric.shipping.sealer.stageTwo.liters)) * constants.metric.shipping.sealer.stageTwo.weight;
                formData.shipping.sealer.stageTwo = parseFloat(output_ship_sealerStage2_elem.value);
            } else {
                output_ship_sealerStage2_elem.value = (Math.ceil(parseFloat(output_ship_sealerStage2_elem.value) / constants.imperial.shipping.sealer.stageTwo.liters)) * constants.imperial.shipping.sealer.stageTwo.weight;
                formData.shipping.sealer.stageTwo = parseFloat(output_ship_sealerStage2_elem.value);
            }
        }
        if (formData.shipping.other != null) {
            output_ship_other_elem.value = formData.shipping.other;
        } else {
            output_ship_other_elem.value = 0;
            formData.shipping.other = parseFloat(output_ship_other_elem.value);
        }
        if (formData.shipping.total != null) {
            output_ship_total_elem.value = formData.shipping.total;
        } else {
            output_ship_total_elem.value = parseFloat(output_ship_ct300_elem.value) + parseFloat(output_ship_adhesive_elem.value) + parseFloat(output_ship_sealerStage2_elem.value) + parseFloat(output_ship_sealerStage1_elem.value) + parseFloat(output_ship_ct850_elem.value) + parseFloat(output_ship_other_elem.value);
            formData.shipping.total = parseFloat(output_ship_total_elem.value);
        }
    } else {
        // we don't have any saved state
        updateTimestamp(state);
        // initialize everything to zero
        initializeInputs();
        var form = getFormState();
        state.form = form;
        updateState(state);
    }


    var clearLinkElem = document.getElementsByClassName('js--clear')[0];
    clearLinkElem.onclick = function() {
        localStorage.setItem("CTstate", "");
        initializeInputs();
        var statetwo = {};
        var initform = getFormState();
        updateTimestamp(statetwo);
        statetwo.form = initform;
        updateState(statetwo);
        document.getElementsByClassName('show')[0].className = "alert alert-info alert--info hide";
    };


    // Onclick events
    btn_units_elem.onclick = function() {
        if (state.form.units === "metric") {
            if (unit_metric_elem.checked === true) {
                state.form.oldunits = state.form.units;
                // Do nothing because the units haven't changed
            } else {
                // Imperial is selected, previous units were metric, change all unit_spans_elemCollection to Lbs
                for (var i = 0; i < unit_spans_elemCollection.length; i++) {
                    unit_spans_elemCollection[i].innerText = "Lbs";
                }
                for(var j=0; j<area_unit_spans.length; j++){
                    area_unit_spans[j].innerHTML = "ft<sup>2</sup>";
                }
                for(var k=0; k<volum_unit_spans.length; k++){
                    volum_unit_spans[k].innerHTML = "ft<sup>3</sup>";
                }
                state.form.oldunits = "metric";
                state.form.units = "imperial";
                updateTimestamp(state);
                updateState(state);
                buwandnob();
                calculateShippingWeight(state);
            }
        } else {
            if (unit_imperial_elem.checked === true) {
                state.form.oldunits = state.form.units;
                // do nothing, they are both imperial
            } else {
                // it is imperial but they are changing it to metric
                for (var i$1 = 0; i$1 < unit_spans_elemCollection.length; i$1++) {
                    unit_spans_elemCollection[i$1].innerText = "Kgs";
                }
                for(var j$1=0; j$1<area_unit_spans.length; j$1++){
                    area_unit_spans[j$1].innerHTML = "m<sup>2</sup>";
                }
                for(var k$1=0; k$1<volum_unit_spans.length; k$1++){
                    volum_unit_spans[k$1].innerHTML = "m<sup>3</sup>";
                }
                state.form.oldunits = "imperial";
                state.form.units = "metric";
                updateTimestamp(state);
                updateState(state);
                buwandnob();
                calculateShippingWeight(state);
            }
        }
    }

    function buwandnob() {
        // first update the state var, and sync with localStorage
        // Lets get the values that they have entered
        /*
            buw_ct300_volume_elem
            buw_ct8502_volume_elem
            buw_ct8504_volume_elem
        */
        if(parseFloat(buw_ct300_volume_elem.value) != state.form.buw.ct300.volume || state.form.oldunits != state.form.units){
            changeA(state, parseFloat(buw_ct300_volume_elem.value));
        }
        if(parseFloat(buw_ct8504_volume_elem.value) != state.form.buw.ct8504.volume || state.form.oldunits != state.form.units){
            changeB(state, parseFloat(buw_ct8504_volume_elem.value));
        }
        if(parseFloat(buw_ct8502_volume_elem.value) != state.form.buw.ct8502.volume || state.form.oldunits != state.form.units){
            changeC(state, parseFloat(buw_ct8502_volume_elem.value));
        }
        if(parseFloat(output_nob_ct300_elem.value) != state.form.nob.ct300.amount || state.form.oldunits != state.form.units){
            changeG(state, parseFloat(output_nob_ct300_elem.value));
        }
        if(parseFloat(output_nob_ct8504_elem.value) != state.form.nob.ct8504.amount || state.form.oldunits != state.form.units){
            changeH(state, parseFloat(output_nob_ct8504_elem.value));
        }
        if(parseFloat(output_nob_ct8502_elem.value) != state.form.nob.ct8502.amount || state.form.oldunits != state.form.units){
            changeI(state, parseFloat(output_nob_ct8502_elem.value));
        }
        calculateShippingWeight(state);
    }

    btn_buw_elem.onclick = function(){
        // first update the state var, and sync with localStorage
        // Lets get the values that they have entered
        /*
            buw_ct300_volume_elem
            buw_ct8502_volume_elem
            buw_ct8504_volume_elem
        */
        if(parseFloat(buw_ct300_volume_elem.value) != state.form.buw.ct300.volume){
            changeA(state, parseFloat(buw_ct300_volume_elem.value));
        }
        if(parseFloat(buw_ct8504_volume_elem.value) != state.form.buw.ct8504.volume){
            changeB(state, parseFloat(buw_ct8504_volume_elem.value));
        }
        if(parseFloat(buw_ct8502_volume_elem.value) != state.form.buw.ct8502.volume){
            changeC(state, parseFloat(buw_ct8502_volume_elem.value));
        }
        if(parseFloat(output_nob_ct300_elem.value) != state.form.nob.ct300.amount){
            changeG(state, parseFloat(output_nob_ct300_elem.value));
        }
        if(parseFloat(output_nob_ct8504_elem.value) != state.form.nob.ct8504.amount){
            changeH(state, parseFloat(output_nob_ct8504_elem.value));
        }
        if(parseFloat(output_nob_ct8502_elem.value) != state.form.nob.ct8502.amount){
            changeI(state, parseFloat(output_nob_ct8502_elem.value));
        }
        calculateShippingWeight(state);
    };

    btn_adhesive_elem.onclick = function() {
        /*
            adhesive_bondedSurface_elem.value
            output_adhesive_volumeAdhesive_elem.value
        */
        calculateAdhesive(state);
        calculateShippingWeight(state);
    }
    btn_sealer_elem.onclick = function() {
        calculateSealers(state);
        calculateShippingWeight(state);
    }

    btn_export_elem.onclick = function() {
        var data;
        data = (("Compotool Material Calculator Export, " + (new Date().toJSON().slice(0, 10))) + ("  \
\nUnits, " + (state.form.units)) + ("\
\nSection, Blockup Weight\
\nct300 volume, " + (state.form.buw.ct300.volume)) + ("\
\nct8504 volume, " + (state.form.buw.ct8504.volume)) + ("\
\nct8502 volume, " + (state.form.buw.ct8502.volume)) + (" \
\nct300 weight, " + (state.form.buw.ct300.weight)) + (" \
\nct850 weight, " + (state.form.buw.ct850.weight)) + (" \
\ntotal weight, " + (state.form.buw.total.weight)) + (" \
\nSection, Number of Boards \
\nct300 boards, " + (state.form.nob.ct300.amount)) + (" \
\nct8504 boards, " + (state.form.nob.ct8504.amount)) + (" \
\nct8502 boards, " + (state.form.nob.ct8502.amount)) + (" \
\nSection, Adhesive \
\nBonded Surface Area, " + (state.form.adhesive.surfaceArea)) + (" \
\nVolume of Adhesive, " + (state.form.adhesive.volume)) + (" \
\nSection, Sealer \
\nTool Surface Area, " + (state.form.sealer.toolSurface)) + (" \
\nStage 1 Sealer Volume, " + (state.form.sealer.stageOne)) + ("\
\nStage 2 Sealer Volume, " + (state.form.sealer.stageTwo)) + (" \
\nSection, Shipping Weight \
\nct300 shipping weight, " + (state.form.shipping.ct300)) + ("\
\nct850 shipping weight, " + (state.form.shipping.ct850)) + ("\
\nAdhesive shipping weight, " + (state.form.shipping.adhesive)) + ("\
\nSealer stage 1 weight, " + (state.form.shipping.sealer.stageOne)) + ("\
\nSealer stage 2 weight, " + (state.form.shipping.sealer.stageTwo)) + ("\
\nOther weight, " + (state.form.shipping.other)) + ("\
\nTotal Shipping Weight, " + (state.form.shipping.total)) + "");
        download((("Compotool_data (" + (new Date().toJSON().slice(0, 10))) + ").csv"), data);
    }


    btn_request_elem.onclick = function(){
        // We want to post the data to mailer.php
        // compose data object
        // form validation
        var cname = document.getElementById("contact-name");
        var cemail = document.getElementById("contact-email");
        var ccompany = document.getElementById("contact-company");
        var cphone = document.getElementById("contact-phone");
        var caddress = document.getElementById("contact-address");
        var cnotes = document.getElementById("contact-company");
        if(cname.value === "" || cname.value === null){
            cname.setAttribute('className', 'invalid-input');
        }
        if(cemail.value === "" || cemail.value === null){
            cemail.setAttribute('className', 'invalid-input');
        }
        if(ccompany.value === "" || ccompany.value === null){
            ccompany.setAttribute('className', 'invalid-input');
        }
        if(cphone.value === "" || cphone.value === null){
            cphone.setAttribute('className', 'invalid-input');
        }
        if(caddress.value === "" || caddress.value === null){
            caddress.setAttribute('className', 'invalid-input');
        }

        var package = {};
        package.contact = {};
        package.input = {};
        package.contact.name = cname.value;
        package.contact.email = cemail.value;
        package.contact.company_name = ccompany.value;
        package.contact.phone_number = cphone.value;
        package.contact.address = caddress.value;
        package.contact.notes = cnotes.value;
        package.input.units = state.form.units;
        package.input.ct300 = {};
        package.input.ct300.buv = state.form.buw.ct300.volume;
        package.input.ct300.buw = state.form.buw.ct300.weight;
        package.input.ct300.nob = state.form.nob.ct300.amount;
        package.input.ct850 = {};
        package.input.ct850.buw = state.form.buw.ct850.weight;
        package.input.ct8504 = {};
        package.input.ct8504.buv = state.form.buw.ct8504.volume;
        package.input.ct8504.nob = state.form.nob.ct8504.amount;
        package.input.ct8502 = {};
        package.input.ct8502.buv = state.form.buw.ct8502.volume;
        package.input.ct8502.nob = state.form.nob.ct8502.amount;
        package.input.total = {};
        package.input.total.buw = state.form.buw.total.weight;
        package.input.adhesive = {};
        package.input.adhesive.surface_area = state.form.adhesive.surfaceArea;
        package.input.adhesive.volume = state.form.adhesive.volume;
        package.input.sealer = {};
        package.input.sealer.surface_area = state.form.sealer.toolSurface;
        package.input.sealer.stageOne = state.form.sealer.stageOne;
        package.input.sealer.stageTwo = state.form.sealer.stageTwo;
        package.input.ship = {};
        package.input.ship.ct300 = state.form.shipping.ct300;
        package.input.ship.ct850 = state.form.shipping.ct850;
        package.input.ship.adhesive = state.form.shipping.adhesive;
        package.input.ship.sealerStageOne = state.form.shipping.sealer.stageOne;
        package.input.ship.sealerStageTwo = state.form.shipping.sealer.stageTwo;
        package.input.ship.other = state.form.shipping.other;
        package.input.ship.total = state.form.shipping.total;


        var url = "/mailer.php";

        window.fetch(url, {
            method: "POST",
            body: JSON.stringify(package),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
            }).then(function(response) {
                // response.status     //=> number 100–599
                // response.statusText //=> String
                // response.headers    //=> Headers
                // response.url        //=> String

                // response.text().then(function(responseText) { ... })
                // }, function(error) {
                // error.message //=> String
            });
    }


});