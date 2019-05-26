import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { Modal } from './components/modal/modal';
export { ModalBody } from './components/modal/modal-body/modal-body';
export { ModalFooter } from './components/modal/modal-footer/modal-footer';

export function configure(config: FrameworkConfiguration) {
    config.globalResources([
        PLATFORM.moduleName('./components/modal/modal'),
        PLATFORM.moduleName('./components/modal/modal-header/modal-header.html'),
        PLATFORM.moduleName('./components/modal/modal-body/modal-body'),
        PLATFORM.moduleName('./components/modal/modal-footer/modal-footer')
    ]);
}