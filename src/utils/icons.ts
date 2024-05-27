import { App } from 'vue';
import {
    Search,
    Like,
    Home,
    User,
    HamburgerButton,
    People,
    ShoppingBagOne,
    Instagram,
    Facebook,
    Youtube,
    Wechat
} from '@icon-park/vue-next';

const icons = {
    Search,
    Like,
    Home,
    User,
    HamburgerButton,
    People,
    ShoppingBagOne,
    Instagram,
    Facebook,
    Youtube,
    Wechat
};

export default {
  install: (app: App) => {
    for (const key in icons) {
      app.component(key, icons[key as keyof typeof icons]);
    }
  }
};
