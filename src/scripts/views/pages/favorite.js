/* eslint-disable indent */
import RestaurantSource from '../../data/source';
import '../../component/resto-fav';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <resto-list></resto-list>`;
  },

  async afterRender() {
    const resto = await RestaurantSource.listResto();
    console.log(resto);
  },
};

export default Favorite;
