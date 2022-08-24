import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './sidebar.css';
import { Icon } from '@iconify/react';

const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <Icon icon="akar-icons:dashboard" />,
        to: '/',
        section: ''
    },
    {
        display: 'Getting Started',
        icon: <Icon icon="akar-icons:dashboard" />,
        to: '/started',
        section: 'started'
    },
    {
        display: 'Calendar',
        to: '/calendar',
        icon: <Icon icon="akar-icons:dashboard" />,
        section: 'calendar'
    },
    {
        icon: <Icon icon="akar-icons:dashboard" />,
        display: 'User',
        to: '/user',
        section: 'user'
    },
    {
        display: 'Orders',
        to: '/order',
        icon: <Icon icon="akar-icons:dashboard" />,
        section: 'order'
    },
]

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>
       
        <div ref={sidebarRef} className="menu">
            <div
                ref={indicatorRef}
                className="indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="icon">
                                {item.icon}
                            </div>
                            <div className="text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
};

export default Navbar;