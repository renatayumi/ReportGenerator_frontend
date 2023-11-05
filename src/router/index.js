import FormLogin from '../pages/FormLogin.vue'
import FormRegister from '../pages/FormRegister.vue'
import TipoTemplate from '../pages/TipoTemplate.vue'
import CadastroTemplate from '../pages/CadastroTemplate.vue'

const routes = [
  {
    path: '/',
    component: FormLogin
  },
  {
    path: '/Register',
    component: FormRegister
  },
  {
    path: '/TipoTemplate',
    component: TipoTemplate
  },
  {
    path: '/CadastroTemplate',
    component: CadastroTemplate
  },
]

export default routes
