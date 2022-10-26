import { PokemonComponent } from '../components/pokemon-component/pokemon-component'

const paths = () => ({
    ['/home']: {
        component: PokemonComponent,
    }
})

export { paths as routes }
