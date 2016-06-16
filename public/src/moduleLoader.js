function resolveModule(moduleType, done) {
    switch (moduleType) {
        case 'dynamic':
            require.ensure([], function (require) {
                require('./app/dynamic/dynamicModule.js').default();
                done();
            });
    }
}

export { resolveModule }
