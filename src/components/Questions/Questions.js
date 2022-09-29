import React from 'react';

const Questions = () => {
    return (
        <div className='mt-5'>
            <div className='container bg-light p-4 rounded-4 mb-3'>
                <h4>how does react work ?</h4>
                <p>React is a JavaScript library developed by Facebook. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>
            </div>
            
        </div>
    );
};

export default Questions;