// Buttons listen to
export const createPostButton = document.createElement('button');
export const deletePostButton = document.createElement('button');
export const createPostAsyncButton = document.createElement('button');
export const firstReducerButton = document.createElement('button');
export const secondReducerButton = document.createElement('button');

const noscript = document.querySelector('noscript');

export const drawButtons = (mode) => {
    switch (mode) {
        case 'create': {
            createPostButton.innerText = 'Create post';
            document.body.insertBefore(createPostButton, noscript);

            break;
        }

        case 'normal': {
            createPostButton.innerText = 'Create post';
            document.body.insertBefore(createPostButton, noscript);

            deletePostButton.innerText = 'Delete post';
            document.body.insertBefore(deletePostButton, noscript);
            break;
        }

        case 'async': {
            createPostButton.innerText = 'Create post';
            document.body.insertBefore(createPostButton, noscript);

            deletePostButton.innerText = 'Delete post';
            document.body.insertBefore(deletePostButton, noscript);

            createPostAsyncButton.innerText = 'Create post async';
            document.body.insertBefore(createPostAsyncButton, noscript);
            break;
        }

        case 'replaceReducer': {
            firstReducerButton.innerText = 'Append post';
            document.body.insertBefore(firstReducerButton, noscript);

            secondReducerButton.innerText = 'Prepend post';
            document.body.insertBefore(secondReducerButton, noscript);
            break;
        }

        default:
            return false;
    }
};

// Initialize list
document.body.appendChild(document.createElement('ul'));

export const render = (store, mode) => {
    drawButtons(mode);

    return () => {
        const oldList = document.querySelector('ul');
        const newList = document.createElement('ul');

        for (const { comment } of store.getState().posts) {
            const item = document.createElement('li');

            item.innerText = comment;
            newList.appendChild(item);
        }

        document.body.replaceChild(newList, oldList);
    };
};
