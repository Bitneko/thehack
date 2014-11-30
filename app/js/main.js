/**
 * Application Bootstrap
 */
require.config({
    paths: {
        jquery: 'libs/jquery',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        hammer: 'libs/hammer',
        'jquery-ui': 'libs/jquery-ui',
        'jquery.ui.touch-punch': 'libs/jquery.ui.touch-punch',
        templates: '/templates'
    },

    shim: {
        "jquery-ui": {
            exports: "$",
            deps: ['jquery']
        },
        "jquery.ui.touch-punch": {
            exports: "$",
            deps: ['jquery', 'jquery-ui']
        }
    }
});

require([
    'app'
], function(App){
    'use strict';
    
    function addMenu() {
        var $appmenu = "<ul id='appmenu'><li class='profileImg'><img src='/img/thumbnail.jpg' /></li><li><a href='#'>Robyn</a></li><li><a id='suitcaseTrigger' href='#'>Your suitcase (15)</a></li><li><a id='contributeTrigger' href='#'>Contribute a secret</a></li><li><a href='#'>About</a></li><li id='fakeCont' ><img src='/img/contribute.png' /></li><li id='fakeCont2' ><img src='/img/suitcasex.png' /></li></ul>";
        $('#app').prepend($appmenu);

        $("#controls .geolocator a").click(function(){
            $("#controls .actions-toggle").toggleClass("hidden");
            $("#appmenu").toggle(500);
        });

        $("#contributeTrigger").click(function(){
            $("#fakeCont").fadeIn(200);
        });
        $("#suitcaseTrigger").click(function(){
            $("#fakeCont2").fadeIn(200);
        });
        $("#fakeCont, #fakeCont2").click(function(){
            $(this).fadeOut(200);
        });

        console.log("Menu Success");

    }
    

   function addCatCat() {
        var $CatCat = "<ul id='CatCat'><li><a href='#'>History</a></li><li><a href='#'>Experiences</a></li><li><a href='#'>Nature</a></li><li><a href='#'>Nightlife</a></li><li><a href='#'>Sports</a></li><li><a href='#'>Culture</a></li><li><a href='#'>Architecture</a></li><li><a href='#'>Food & Drink</a></li><li><a href='#'>Quirky</a></li><li><a class='activeAll' href='#'>Near me</a></li><li><a href='#'>All</a></li></ul>";
        $('#app').prepend($CatCat);

        $("#controls .actions-toggle a").click(function(){
            $("#controls .geolocator").toggleClass("hidden");
            $("#CatCat").toggle(500);
        });

        $("#CatCat a").click(function(){
            $(this).toggleClass("active");
        });

        console.log("CatCat Success");

    }

    function fakeLoaders() {
        var $fakeScreens = "<div id='fakeLoaders'><img id='lockScreen' src='/img/lockscreen.png' /><img id='homeScreen' src='/img/homescreenx.png' /></div>";
        $('#app').prepend($fakeScreens);

        $("#lockScreen").click(function(){
            $(this).fadeOut(200);
        });
        $("#homeScreen").click(function(){
            $(this).fadeOut(200);
            $('#fakeLoaders').fadeOut(200).delay(200).remove();
            $("#geoScanner").fadeIn(500);
        });

        console.log("fakeLoaders Success");

    }
    fakeLoaders();

    // Defining Circles. Because they are pretty.
    var circlesEverywhere,
        loadTime = '6000', // Set Introduction/Loading time.
        appWait = loadTime - 500;
        
    // Circle on circles. 
    function addCircle() {
        var $circle = $('<div class="circle"></div>');
        $circle.animate({
            'width': '500px',
            'height': '500px',
            'margin-top': '-250px',
            'margin-left': '-250px',
            'opacity': '0'
        }, 4000, 'easeOutCirc');
        $('#geoScanner').append($circle);

        setTimeout(function __remove() {
            $circle.remove();
        }, 3000);
    }
    // addCircle();
    circlesEverywhere = setInterval(addCircle, 800);

    // Setting how long the circles run.
    // setTimeout(function(){
    //    clearInterval(circlesEverywhere);
    // },loadTime);

    // Setting Click
    $("#geoScanner img").click(function(){
        console.log("hello");
        clearInterval(circlesEverywhere);
        $("#geoScanner").fadeOut(1000).delay(1000).remove();
        App.initialize();
        addMenu();
        addCatCat();
    });
});
