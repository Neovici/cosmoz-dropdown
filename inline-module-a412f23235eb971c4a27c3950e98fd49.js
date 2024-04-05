import './sb-preview/runtime.js';

const channel = __STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__.createChannel({ page: "preview" });
__STORYBOOK_MODULE_PREVIEW_API__.addons.setChannel(channel);
window.__STORYBOOK_ADDONS_CHANNEL__ = channel;
const { SERVER_CHANNEL_URL } = globalThis;
if (SERVER_CHANNEL_URL) {
  const serverChannel = __STORYBOOK_MODULE_CHANNEL_WEBSOCKET__.createChannel({ url: SERVER_CHANNEL_URL });
  __STORYBOOK_MODULE_PREVIEW_API__.addons.setServerChannel(serverChannel);
  window.__STORYBOOK_SERVER_CHANNEL__ = serverChannel;
}

const importers = {
  "./stories/cosmoz-dropdown.stories.ts": () => import('./cosmoz-dropdown.stories-RV6XyNkv.js')
};
function importFn(path) {
  return importers[path]();
}

const getProjectAnnotations = async () => {
  const configs = await Promise.all([
    import('./entry-preview-DdMqoff1.js'),
    import('./entry-preview-docs-i6OGAHQp.js'),
    import('./preview-pEHmEj2z.js'),
    import('./preview-LSB5aSA_.js'),
    import('./preview-fr89Ma8P.js'),
    import('./preview-BcG-TehC.js'),
    import('./preview-nPmPU166.js'),
    import('./preview-GQUB9WQH.js'),
    import('./preview-fUuOAKnW.js')
  ]);
  return __STORYBOOK_MODULE_PREVIEW_API__.composeConfigs(configs);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new __STORYBOOK_MODULE_PREVIEW_API__.PreviewWeb();
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
window.__STORYBOOK_CLIENT_API__ = window.__STORYBOOK_CLIENT_API__ || new __STORYBOOK_MODULE_PREVIEW_API__.ClientApi({ storyStore: window.__STORYBOOK_PREVIEW__.storyStore });
window.__STORYBOOK_PREVIEW__.initialize({ importFn, getProjectAnnotations });
