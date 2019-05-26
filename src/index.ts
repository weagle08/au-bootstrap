import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { Modal, ModalEvents, IModalOptions } from './components/modal/modal';

export function configure(config: FrameworkConfiguration) {
    config.globalResources([
        PLATFORM.moduleName('./components/modal/modal'),
        PLATFORM.moduleName('./components/modal/modal-header/modal-header.html'),
        PLATFORM.moduleName('./components/modal/modal-body/modal-body.html'),
        PLATFORM.moduleName('./components/modal/modal-footer/modal-footer.html')
    ]);
}