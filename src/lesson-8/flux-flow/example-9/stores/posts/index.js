// Core
import { EventEmitter } from 'events';

// Instruments
import { FETCH_POSTS } from '../../actions/posts/types';
import dispatcher from '../../dispatcher';

export default new class PostsStore extends EventEmitter {
    constructor () {
        super();

        this.state = {
            posts:         [],
            postsFetching: false,
        };

        dispatcher.register((action) => {
            switch (action.type) {
                case FETCH_POSTS:
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

    getState () {
        return this.state;
    }

    async fetchPosts () {
        this.state.postsFetching = true;
        this.update();

        const posts = await new Promise((resolve) => {
            setTimeout(
                () => resolve([{ id: '123', comment: 'yo!' }, { id: '456', comment: 'sup cuz?' }]),
                3000,
            );
        });

        this.state.posts = posts;
        this.state.postsFetching = false;
        this.update();
    }
}();
