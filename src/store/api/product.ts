import axios from '@/utils/axios';
import store from '@/store/index.js';
import { showFailToast } from 'vant';
export default {
    //===================側邊欄===================//
    async  get_side_list(payload) {
        const res = await axios.post('/api/products/type', payload);
        if (!res.error) {
          return res;
        } else {
          showFailToast(res.msg);
          return false;
        }
      },
    //===================商品列表===================//
    async get_products_list(payload) {
        const res = await axios.get('/api/products/list', payload);
        if (!res.error) {
          return res;
        } else {
          showFailToast(res.msg);
          return false;
        }
      }
}