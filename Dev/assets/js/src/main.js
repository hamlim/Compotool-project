document.addEventListener("DOMContentLoaded", function(event) {
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



});
