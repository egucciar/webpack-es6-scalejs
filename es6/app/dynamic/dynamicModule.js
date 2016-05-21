import view from 'html!./dynamic.html';
import viewModel from './dynamicViewModel';
import sandbox from 'scalejs.sandbox';

sandbox.mvvm.registerTemplates(view);

    export default function dynamic() {
        sandbox.metadataFactory.registerViewModels({
            dynamic: viewModel
        });
    }