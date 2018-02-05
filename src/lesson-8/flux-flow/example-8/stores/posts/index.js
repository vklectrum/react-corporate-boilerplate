// Core
import { EventEmitter } from 'events';

// Instruments
import * as types from '../../actions/posts/types';
import dispatcher from '../../dispatcher';

export default new class PostsStore extends EventEmitter {
    constructor () {
        super();

        this.state = {
            posts: [],
        };

        dispatcher.register((action) => {
            switch (action.type) {
                case types.FETCH_POSTS:
                    this.fetchPosts();
                    break;

                default:
                    return false;
            }
        });
    }

    subscribe (callback) {
        this.on('change', callback);
    }

    unsubscribe (callback) {
        this.removeListener('change', callback);
    }

    update () {
        this.emit('change');
    }

    getInitialState () {
        this.state = [];

        return this.state;
    }

    getPosts () {
        return this.state.posts;
    }

    async fetchPosts () {
        const posts = await new Promise((resolve) => {
            setTimeout(
                () => resolve([{ id: '123', comment: 'yo!' }, { id: '456', comment: 'sup cuz?' }]),
                3000,
            );
        });

        this.state.posts = posts;
        this.update();
    }
}();
