/* global require */
//import extensions from 'scalejs.extensions';
//import common from 'scalejs.metadataFactory-common';
import modules from 'app/modules';
import app from 'scalejs.application';
import ko from 'knockout';

//css app overrides
// import '../../sass/test.scss';

app.registerModules(...modules);
app.run();
