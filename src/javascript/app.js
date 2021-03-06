// Styles are imported via JS bundles
// import '../../public/build/app';

// __DEV__ is a global boolean that is set by Webpack
// This is good to use if you want exclude some JS from
// the production build, e.g. console statements
__DEV__ && require('../../styleguide/styles/styleguide') && console.log('Zone boilerplate\n================\nThis message is only viewable in the development build');

/**
 * @namespace PRSapp
 */
(function() {
    window.PRSapp = window.PRSapp || {};
}());
