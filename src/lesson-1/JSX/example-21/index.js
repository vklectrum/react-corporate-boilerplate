import React from 'react';
import { createPortal } from 'react-dom';

const target = document.getElementsById('portal');

const Message = () =>
    createPortal(
        <h1>I live outside of the main React component tree</h1>,
        target
    );

export default Message;
