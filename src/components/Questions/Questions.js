import React from 'react';

const Questions = () => {
    return (
        <div className='mt-5'>
            <div className='container bg-light p-4 rounded-4 mb-3'>
                <h4>How does react work ?</h4>
                <p className='opacity-75'>React is a JavaScript library developed by Facebook. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>
            </div>
            <div className='container bg-light p-4 rounded-4 mb-3'>
                <h4>What is the difference between props and state in react ?</h4>
                <p className='opacity-75'><span className='fw-bold'>Props :</span> <br />
                1.The Data is passed from one component to another.<br />
                2.It is Immutable (cannot be modified).<br />
                3.Props can be used with state and functional components.<br />
                4.Props are read-only. <br />

                <span className='fw-bold'>State :</span> <br />
                1.The Data is passed within the component only.<br />
                2.It is Mutable ( can be modified).<br />
                3.State can be used only with the state components/class component (Before 16.0).<br />
                4.State is both read and write.
                </p>
            </div>
            <div className='container bg-light p-4 rounded-4 mb-3'>
                <h4>uses of useEffect</h4>
                <p className='opacity-75'>The useEffect Hook allows you to perform side effects in your components. This Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our ???effect???), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
            </div>
        </div>
    );
};

export default Questions;