function updateState(newState) {
    let oldState = localStorage.CTstate;
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
        let myHeaders = new window.Headers();
        myHeaders.append("authorization", "Basic cGRBek5zM3hxMjRNbTZiUGJ5ZjE6ZjlibzVBVjEyOTNoZUh4c3lIYml0cUc0RXlXWXhqenF4MndITmh0cQ==");
        let myInit = { method: 'GET',
                    headers: myHeaders,
                    mode: 'cors',
                    cache: 'default' };
        window.fetch('https://sheetsu.com/apis/v1.0/755fe98f1e9c', myInit)
            .then(function(response){
                return response.json();
            }).then(function(json){
                // console.log('parsed json', json);
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
                for (let i = 0; i < json.length; i++) {
                    if (json[i].Order === "1") {
                        vars.imperial.adhesive = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "2") {
                        vars.metric.adhesive = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "3") {
                        vars.imperial.sealer.stageOne = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "4") {
                        vars.metric.sealer.stageOne = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "5") {
                        vars.imperial.sealer.stageTwo = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "6") {
                        vars.metric.sealer.stageTwo = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "7") {
                        // releaser
                    } else if (json[i].Order === "8") {
                        // releaser
                    } else if (json[i].Order === "9") {
                        vars.imperial.buw.ct300 = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "10") {
                        vars.metric.buw.ct300 = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "11") {
                        vars.imperial.buw.ct850 = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "12") {
                        vars.metric.buw.ct850 = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "13") {
                        vars.imperial.nob.ct300 = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "14") {
                        vars.metric.nob.ct300 = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "15") {
                        vars.imperial.nob.ct8504 = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "16") {
                        vars.metric.nob.ct8504 = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "17") {
                        vars.imperial.nob.ct8502 = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "18") {
                        vars.metric.nob.ct8502 = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "19") {
                        vars.ct300.shipping.imperial = parseFloat(json[i].Coverage);
                        vars.imperial.shipping.ct300 = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "20") {
                        // console.log(vars.ct300);
                        vars.ct300.shipping.metric = parseFloat(json[i].Coverage);
                        vars.metric.shipping.ct300 = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "21") {
                        vars.imperial.shipping.ct8502 = parseFloat(json[i].Coverage);
                        vars.ct8502.shipping.imperial = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "22") {
                        vars.metric.shipping.ct8502 = parseFloat(json[i].Coverage);
                        vars.ct8502.shipping.metric = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "23") {
                        vars.imperial.shipping.ct8504 = parseFloat(json[i].Coverage);
                        vars.ct8504.shipping.imperial = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "24") {
                        vars.metric.shipping.ct8504 = parseFloat(json[i].Coverage);
                        vars.ct8504.shipping.metric = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "25") {
                        vars.imperial.shipping.adhesive.liters = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "26") {
                        vars.metric.shipping.adhesive.liters = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "27") {
                        vars.imperial.shipping.adhesive.weight = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "28") {
                        vars.metric.shipping.adhesive.weight = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "29") {
                        vars.imperial.shipping.sealer.stageOne.liters = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "30") {
                        vars.metric.shipping.sealer.stageOne.liters = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "31") {
                        vars.imperial.shipping.sealer.stageOne.weight = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "32") {
                        vars.metric.shipping.sealer.stageOne.weight = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "33") {
                        vars.imperial.shipping.sealer.stageTwo.liters = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "34") {
                        vars.metric.shipping.sealer.stageTwo.liters = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "35") {
                        vars.imperial.shipping.sealer.stageTwo.weight = parseFloat(json[i].Coverage);
                    } else if (json[i].Order === "36") {
                        vars.metric.shipping.sealer.stageTwo.weight = parseFloat(json[i].Coverage);
                    }
                }
            }).catch(function(ex) {
                console.log('parsing failed', ex);
            });
    } else {
        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function() {
            if (this.readyState === 4) {
                // console.log(this.responseText);
                let data = JSON.parse(this.responseText);
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
                for (let i = 0; i < data.length; i++) {
                    if (data[i].Order === "1") {
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
                        vars.ct300.shipping.imperial = parseFloat(data[i].Coverage);
                        vars.imperial.shipping.ct300 = parseFloat(data[i].Coverage);
                    } else if (data[i].Order === "20") {
                        // console.log(vars.ct300);
                        vars.ct300.shipping.metric = parseFloat(data[i].Coverage);
                        vars.metric.shipping.ct300 = parseFloat(data[i].Coverage);
                    } else if (data[i].Order === "21") {
                        vars.imperial.shipping.ct8502 = parseFloat(data[i].Coverage);
                        vars.ct8502.shipping.imperial = parseFloat(data[i].Coverage);
                    } else if (data[i].Order === "22") {
                        vars.metric.shipping.ct8502 = parseFloat(data[i].Coverage);
                        vars.ct8502.shipping.metric = parseFloat(data[i].Coverage);
                    } else if (data[i].Order === "23") {
                        vars.imperial.shipping.ct8504 = parseFloat(data[i].Coverage);
                        vars.ct8504.shipping.imperial = parseFloat(data[i].Coverage);
                    } else if (data[i].Order === "24") {
                        vars.metric.shipping.ct8504 = parseFloat(data[i].Coverage);
                        vars.ct8504.shipping.metric = parseFloat(data[i].Coverage);
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

        xhr.open("GET", "https://sheetsu.com/apis/v1.0/755fe98f1e9c", false);
        xhr.setRequestHeader("authorization", "Basic cGRBek5zM3hxMjRNbTZiUGJ5ZjE6ZjlibzVBVjEyOTNoZUh4c3lIYml0cUc0RXlXWXhqenF4MndITmh0cQ==");

        xhr.send();
    
    }
}

// Lets get the vars
let constants = {};
fetchVars(constants);
// console.log(constants);
// console.log(constants.ct300);

document.addEventListener("DOMContentLoaded", function(event) {
    // variables


    // inputs

    // Units
    let unit_metric_elem = document.getElementById('input--units-1');
    let unit_imperial_elem = document.getElementById('input--units-2');

    let unit_spans_elemCollection = document.getElementsByClassName('js--hook-units');

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
    let state = {};
    if (localStorage.getItem('CTstate')) {
        state = JSON.parse(localStorage.getItem('CTstate'));
    } else {
        state = {};
    }
    // let state = JSON.parse(localStorage.getItem('CTstate')) || {};

    function getFormState() {
        let form = {};
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
        let formData = state.form;
        // units
        if (formData.units === "metric") {
            unit_imperial_elem.checked = false;
            unit_metric_elem.checked = true;
            for (let i = 0; i < unit_spans_elemCollection.length; i++) {
                unit_spans_elemCollection[i].innerText = "Kgs";
            }
        } else {
            unit_metric_elem.checked = false;
            unit_imperial_elem.checked = true;
            for (let i = 0; i < unit_spans_elemCollection.length; i++) {
                unit_spans_elemCollection[i].innerText = "Lbs";
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
        let form = getFormState();
        state.form = form;
        updateState(state);
    }


    let clearLinkElem = document.getElementsByClassName('js--clear')[0];
    clearLinkElem.onclick = function() {
        localStorage.setItem("CTstate", "");
        initializeInputs();
        let statetwo = {};
        let initform = getFormState();
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
                for (let i = 0; i < unit_spans_elemCollection.length; i++) {
                    unit_spans_elemCollection[i].innerText = "Lbs";
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
                for (let i = 0; i < unit_spans_elemCollection.length; i++) {
                    unit_spans_elemCollection[i].innerText = "Kgs";
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
        let data;
        data = `Compotool Material Calculator Export, ${new Date().toJSON().slice(0, 10)}  
Units, ${state.form.units}
Section, Blockup Weight
ct300 volume, ${state.form.buw.ct300.volume}
ct8504 volume, ${state.form.buw.ct8504.volume}
ct8502 volume, ${state.form.buw.ct8502.volume} 
ct300 weight, ${state.form.buw.ct300.weight} 
ct850 weight, ${state.form.buw.ct850.weight} 
total weight, ${state.form.buw.total.weight} 
Section, Number of Boards 
ct300 boards, ${state.form.nob.ct300.amount} 
ct8504 boards, ${state.form.nob.ct8504.amount} 
ct8502 boards, ${state.form.nob.ct8502.amount} 
Section, Adhesive 
Bonded Surface Area, ${state.form.adhesive.surfaceArea} 
Volume of Adhesive, ${state.form.adhesive.volume} 
Section, Sealer 
Tool Surface Area, ${state.form.sealer.toolSurface} 
Stage 1 Sealer Volume, ${state.form.sealer.stageOne}
Stage 2 Sealer Volume, ${state.form.sealer.stageTwo} 
Section, Shipping Weight 
ct300 shipping weight, ${state.form.shipping.ct300}
ct850 shipping weight, ${state.form.shipping.ct850}
Adhesive shipping weight, ${state.form.shipping.adhesive}
Sealer stage 1 weight, ${state.form.shipping.sealer.stageOne}
Sealer stage 2 weight, ${state.form.shipping.sealer.stageTwo}
Other weight, ${state.form.shipping.other}
Total Shipping Weight, ${state.form.shipping.total}`;
        download(`Compotool_data (${new Date().toJSON().slice(0, 10)}).csv`, data);
    }

});