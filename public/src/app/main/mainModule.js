/*global define,sandbox,mainViewModel */
import sandbox from 'scalejs.sandbox';
import mainTemplate from 'html!./main.html';
import _ from 'lodash';
import '../../../sass/main.scss';
import 'moduleLoader'

window.resolveModule = function (type, done) {
    sandbox.moduleLoader.resolveModule(type, done)
}

sandbox.mvvm.registerTemplates(mainTemplate);

    export default function main() {
        var root = sandbox.mvvm.root,
            template = sandbox.mvvm.template,
            // properties
            metadata = sandbox.mvvm.observable({}); // needs to be initialized or currently throws exception

        root(template('main_template', {
            metadata: metadata,
            modules: sandbox.moduleLoader.modules
        }));

        function walkGetTypes(nodes) {
            return (nodes || [])
                .reduce( (types, node) => types.concat([node.type])
                .concat(walkGetTypes(node.children)), []);
        }

        function loadMetadata(md) {
            // first, walk through metadata to gather all types
            var types = _.uniq(walkGetTypes(Array.isArray(md) ? md : [md])).filter(function (type) {
                return type && sandbox.metadataFactory.getRegisteredTypes().indexOf(type) === -1
            });
            console.log(types);

            if (types.length === 0) {
                metadata(md);
            } else {
                let counter = 0;

                types.forEach(function (type) {
                    resolveModule(type, function () {
                        counter++;
                        if (counter === types.length) {
                            //we loaded all the types! now we can load metadata
                            metadata(md);
                        }
                    })
                });

            }
        }


        loadMetadata([
            {
                type: 'template',
                template: 'test_template',
                name: 'Erica'
            }
        ]);

        window.loadMetadata = loadMetadata;
    };
