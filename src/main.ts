import { createApp, DirectiveBinding, VNode } from "vue";
import App from "./App.vue";

createApp(App)
  .directive("hello", {
    mounted(_, binding: DirectiveBinding<{ text: string }>, vnode: VNode) {
      vnode.props?.onCustomEvent(`Hello, ${binding.value.text}`);
    },
  })
  .mount("#app");
