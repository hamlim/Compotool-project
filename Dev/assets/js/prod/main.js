document.addEventListener("DOMContentLoaded", function(event) {
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
    var output_sealer_stage2_elem = document.getElementById('input--selaer-3');

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


});
