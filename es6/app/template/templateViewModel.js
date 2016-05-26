import sandbox from 'scalejs.sandbox';
import ko from 'knockout';
import $ from 'jquery';

var merge = sandbox.object.merge;


    // node is a configuration object from json
    export default function(node) {
        var createViewModels = sandbox.metadataFactory.createViewModels.bind(this), // pass context 
            data = ko.observable(),
            mappedChildNodes = createViewModels(node.children || []);
      
        window.data = data;
        
        if (node.endpoint) {
            $.ajax(merge(node.endpoint, {
                success: function (results) {
                    data(results);
                },
                error: function (error) {
                    console.error(error);
                }
            }))
        }
              
        
        return merge(node, {
            data: data,
            mappedChildNodes: mappedChildNodes
        });
    }