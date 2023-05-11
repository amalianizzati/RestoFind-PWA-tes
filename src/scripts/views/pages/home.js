import RestaurantSource from '../../data/source';
import { createRestoItemTemplate } from '../templates/template-creator';
import '../../component/resto-list';

const Home = {
  async render() {
    return `
        <resto-list></resto-list>
      `;
  },
  async afterRender() {
    const restos = await RestaurantSource.listResto();
    const restosContainer = document.querySelector('#resto-list');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};
export default Home;
