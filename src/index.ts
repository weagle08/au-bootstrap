import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export { Modal } from './components/modal/modal';

export function configure(config: FrameworkConfiguration) {
    config.globalResources([
        PLATFORM.moduleName('./components/modal/modal')
    ]);
}