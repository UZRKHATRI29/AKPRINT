import React from "react";
import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        name: 'Outdoor LED Board',
        description: 'High Visibility and weather-resistance',
        image: '/assets/images/outdoor-led-board.jpeg'
    },
    {
        id: 2,
        name: 'Indoor LED Display',
        description: 'High Visibility and weather-resistance',
        image: '/path-to-your-image/indoor-led-display.jpg'
    },
    {
        id: 3,
        name: 'Indoor LED Board',
        description: 'High Visibility and weather-resistance',
        image: '/path-to-your-image/indoor-led-board.jpg'
    },
];

const Products = () => (
    <div className="products-section">
        <h2>Featured Products</h2>
        <div className="product-list">
            {products.map(product => (
                <motion.div
                    key={product.id}
                    className="product-item"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img src={product.image} alt={product.name} className="product-image" />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                </motion.div>
            ))}
        </div>
    </div>
);

export default Products;
