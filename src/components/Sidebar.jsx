import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetwors';
import Avatar from '../img/eu.jpg';

import "../styles/components/sidebar.sass"

const Sidebar = () => {
    return <aside id='sidebar'>
        <img src={Avatar} alt="Lucas Tandy" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="" className="btn">Download currículo</a>
    </aside>;
}

export default Sidebar