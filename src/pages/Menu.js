import React from 'react';
import { motion } from 'framer-motion';
import menu from '../data/menu.json';
import { styled } from 'styled-components';
import { useSearchParams } from 'react-router-dom';

const MenuStyles = styled(motion.div)`
    .items{

    }
`;
const Menu = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const category = searchParams.get("category");
    const items = menu[category];

    return (
        <MenuStyles>
        <div className='items'>
            {items.map((item, index) => (
                <div className='item' key={index}>
                    <h3>{item.dish}</h3>
                    <p>{item.spice}</p>
                    <p>{item.price}</p>
                </div>
            ))}
        </div>
        </MenuStyles>
    )
};

export default Menu;