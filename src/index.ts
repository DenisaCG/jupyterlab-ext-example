import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab-ext-example extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-ext-example:plugin',
  description: 'A JupyterLab extension example.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-ext-example is activated!');
  }
};

export default plugin;
