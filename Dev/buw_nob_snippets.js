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
    if(state.units === "metric"){
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
    if(state.units === "metric"){
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
    if(state.units === "metric"){
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