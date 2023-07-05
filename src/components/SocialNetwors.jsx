import {FaLinkedinIn, FaGithub, FaInstagram} from 'react-icons/fa';

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    {name: "linkedin", link:"https://www.linkedin.com/in/lucas-tandy/", icon: <FaLinkedinIn />},
    {name: "github", link:"https://github.com/lucastandy", icon: <FaGithub />},
    {name: "instagram", link:"https://www.instagram.com/lucastandy/",  icon: <FaInstagram />}
];

const SocialNetworks = () => {
    return (<section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.link} target='_blank' className='social-btn' id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>);
};

export default SocialNetworks