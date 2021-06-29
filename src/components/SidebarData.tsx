import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

interface NavBarItem {
    title: string;
    path: string;
    icon: any
    className: string;
}

export const SidebarData: NavBarItem[] = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'nav-text',
    },
    {
        title: 'Categories',
        path: '/categories',
        icon: <FaIcons.FaList />,
        className: 'nav-text'
    },
    {
        title: 'Posts',
        path: '/posts',
        icon: <IoIcons.IoIosAddCircleOutline />,
        className: 'nav-text'
    }
];