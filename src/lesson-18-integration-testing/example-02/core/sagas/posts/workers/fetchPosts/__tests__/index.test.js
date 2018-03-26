// Core
import { put, call } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

// Instruments
import { fetchPostsWorker } from '../';
import postsActions from '../../../../../actions/posts';
import {
    response,
    responseFail,
    responseData,
    responseDataFail,
    error,
    errorMessage,
    user,
    setup
} from '../../../../../../mocks';

setup();

const saga = cloneableGenerator(fetchPostsWorker)();

describe('fetch posts saga:', () => {
    test(`should dispatch 'START_POSTS_FETCHING' action`, () => {
        expect(saga.next().value).toEqual(put(postsActions.startPostsFetching()));
    });

    // Сага создаёт с помощью эффектов дескрипторы
    // Данный тест вызовет ошибку, так как в воркере
    // нет объекта с опциями.
    // test(`should call a 'fetch' request`, () => {
    //     expect(saga.next().value).toEqual(
    //         call(fetch, 'https://jsonplaceholder.typicode.com/posts', {
    //             method: 'GET',
    //         })
    //     );
    // });

    test(`should call a 'fetch' request`, () => {
        expect(saga.next().value).toEqual(
            call(fetch, 'https://jsonplaceholder.typicode.com/posts')
        );
    });

    test('should handle !== 200 response status', () => {
        const clone = saga.clone();

        expect(clone.next(responseFail).value).toEqual(
            call([responseFail, responseFail.json])
        );

        expect(clone.next(responseDataFail).value).toEqual(
            put(postsActions.fetchPostsError(errorMessage))
        );
    });

    test(`the 'fetch' request should return valid response`, () => {
        expect(saga.next(response).value).toEqual(
            call([response, response.json])
        );
    });

    test(`should dispatch 'FETCH_POSTS_SUCCESS' action`, () => {
        expect(saga.next(responseData).value).toEqual(
            put(postsActions.fetchPostsSuccess(responseData))
        );
    });
});