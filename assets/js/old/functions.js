/* ----------- Project Name CI ADMIN ------------ */
/* ----------- Own Scripts for Applications ----------- */
/* -------- Code By Vivek -- Creators Infotek --------- */

jQuery(document).ready(function ($) {
    /*------For toggle--------*/
    $('#toggle_btn').click(function () {
        $('#header').toggleClass('sidebar_hide');
        $('#sidebar').toggleClass('sidebar_hide');
        $('#content_block').toggleClass('sidebar_hide');
        
    })
});