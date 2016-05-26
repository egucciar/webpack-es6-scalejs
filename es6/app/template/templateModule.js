import sanbox from 'scalejs.sandbox';
import templateViewModel from './templateViewModel';
import template from 'html!./template.html';

sanbox.mvvm.registerTemplates(template);

sanbox.metadataFactory.registerViewModels({
    template: templateViewModel
});