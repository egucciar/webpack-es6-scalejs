import sandbox from 'scalejs.sandbox';
import ko from 'knockout';

let resolveModuleLookup = {
    dynamic: function (done) {
        require.ensure([], function (require) {
            require('./app/dynamic/dynamicModule.js').default();
            done();
        });
    },
    moduleA: function (done) {
        require.ensure([], function (require) {
            require('./app/moduleA/moduleA.js');
            done();
        })
    },
    newModule: function (done) {
        require.ensure([], function (require) {
            require('./app/newModule.js');
            done();
        })
    }
}

let modules = ko.observableArray();
if(sandbox.moduleLoader) {
    modules = sandbox.moduleLoader.modules;
}

modules(Object.keys(resolveModuleLookup));

sandbox.moduleLoader = {
    resolveModule,
    modules
};

function empty () {}

function resolveModule(moduleType, done = empty) {
    let resolveModuleFunc = resolveModuleLookup[moduleType];

    if (!resolveModuleFunc) {
        console.log('Module not found:', moduleType);
        return;
    }

    resolveModuleFunc(done);
}

if (module.hot) {
    module.hot.accept();
}

        // case 'moduleA':
        //     require.ensure([], function (require) {
        //         require('./app/moduleA/moduleA.js');
        //         done();
        //     })
        //     break;
        // case 'moduleB':
        //     require.ensure([], function (require) {
        //         require('./app/moduleB.js');
        //         done();
        //     })
        //     break;
        // case 'moduleC':
        //     require.ensure([], function (require) {
        //         require('./app/moduleC.js');
        //         done();
        //     })
        //     break;
