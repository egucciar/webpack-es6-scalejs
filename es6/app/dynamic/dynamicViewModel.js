import sandbox from 'scalejs.sandbox';

    export default function dynamicViewModel(node) {
        
        return sandbox.object.merge(node, {
            text: 'I am a dynamic module named ' + node.id
        });
    }