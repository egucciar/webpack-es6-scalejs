/*global define,sandbox,mainViewModel */
import sandbox from 'scalejs.sandbox';
import mainTemplate from 'html!./main.html';

sandbox.mvvm.registerTemplates(mainTemplate);    

    export default function main() {
        var root = sandbox.mvvm.root,
            template = sandbox.mvvm.template;
            
        root(template('main_template', {}));  
    };
