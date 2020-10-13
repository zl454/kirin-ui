import { createWebHashHistory, createRouter } from "vue-router"
import Home from "./views/Home.vue"
import Doc from "./views/Doc.vue"
import SwitchDemo from "./components/switch/SwitchDemo.vue"
import ButtonDemo from "./components/button/ButtonDemo.vue"
import DialogDemo from "./components/dialog/DialogDemo.vue"
import TabsDemo from "./components/tabs/TabsDemo.vue"
import MenuDemo from "./components/menu/MenuDemo.vue"
import ToastDemo from "./components/toast/ToastDemo.vue"
import GridDemo from "./components/grid/GridDemo.vue"
import CarouselDemo from "./components/carousel/CarouselDemo.vue"
import Markdown from "./components/Markdown.vue"
import install from './markdown/install.md'
import getStart from './markdown/get-start.md'
import introduce from './markdown/introduce.md'
import { h } from "vue"
const history = createWebHashHistory()
const md = string => h(Markdown, { content: string, key: string })
// const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc, children: [
        { path: '', redirect: "/doc/introduce" },
        { path: 'introduce', component: md(introduce) },
        { path: 'install', component: md(install) },
        { path: 'get-start', component: md(getStart) },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
        { path: 'menu', component: MenuDemo },
        { path: 'toast', component: ToastDemo },
        { path: 'grid', component: GridDemo },
        { path: 'carousel', component: CarouselDemo },
      ]
    }
  ]
})
router.afterEach(() => {
  // to and from are both route objects.
})
