require.config({
    baseUrl: "",
    urlArgs: 'ver=' + (+new Date()),
    waitSeconds: 0,
    paths: {
        'app': 'scripts/app',
        'angular': 'vender/angular-1.2.28/angular.min',
        'ngRoute': 'vender/angular-1.2.28/angular-route',
        'angular-ui-router': 'scripts/angular-ui-router',
        'angularAMD': 'scripts/angularAMD',
        'ocLazyLoad': 'scripts/ocLazyLoad.require',
        'ngAnimate': 'vender/angular-1.2.28/angular-animate.min',
        'jquery': 'vender/jquery/jquery-1.11.3.min',
        'ui-bootstrap': 'scripts/ui-bootstrap-tpls-0.11.0',
        'angular-sanitize': 'vender/angular-1.2.28/angular-sanitize',
        'blockUI': 'scripts/block-ui',
        
        'bootstrapf':'scripts/frame/bootstrap.min',
        'mainf':'scripts/frame/main',
        'modernizr':'scripts/frame/modernizr-2.6.2.min',
        'owl':'scripts/frame/owl.carousel.min',
        'respondf':'scripts/frame/respond.min',
        'countTo':'vender/jquery/jquery.countTo',
        'easing':'vender/jquery/jquery.easing.1.3',
        'magnific':'vender/jquery/jquery.magnific-popup.min',
        'stellar':'vender/jquery/jquery.stellar.min',
        'waypoints':'vender/jquery/jquery.waypoints.min',
        
        'directives': 'scripts/directives/directives',
        'filters': 'scripts/filter/filters',
        'ajaxService': 'scripts/services/ajaxServices',
        'upload': 'vender/ngFileUpload/ng-file-upload.min',
        'uploadShim': 'vender/ngFileUpload/ng-file-upload-shim.min',
        'widget': 'scripts/widget',
        'window': 'scripts/window',
		
        
        'homeServices':'views/home/homeServices',
        'blogServices':'views/blog/blogServices',
        'contactServices':'views/contact/contactServices',
        'photosServices':'views/photos/photosServices',
    },
    shim: {
        'upload': ['angular', 'uploadShim'],
        'angular-ui-router': ['angular'],
        'angular': ['jquery'],
        'ngRoute':['angular'],
        'angularAMD': ['angular'],
        'ocLazyLoad': ['angular'],
        'ngAnimate': ['angular'],
        'ui-bootstrap': ['angular'],
        'angular-sanitize': ['angular'],
        'blockUI': ['angular'],
        'directives': ['angular'],
        'filters': ['angular'],
        'owl':['jquery'],
        'easing':['jquery'],
        'magnific':['jquery'],
        'stellar':['jquery'],
        'waypoints':['jquery'],
        'bootstrapf':['jquery']
    },
    deps: ['app']
});