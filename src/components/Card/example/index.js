/* eslint-disable react/jsx-key */
import React from 'react';
import Card from '../index';

export default [
    {
        examples: [
            <Card title="this is a title">
                <div>
                    Hello World
                </div>
            </Card>,
        ],
        examples: [
            <Card title="this is a title" onClose={() => console.log("clicked close")} testSection="data-track-card-close">
                <div>
                    Hello World with closer element
                </div>
            </Card>,
        ],
    },
];