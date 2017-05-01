const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export default {
    increment: (value) => {
        return {
            type: INCREMENT,
            value: value
        }
    },
    decrement: (value) => {
        return {
            type: DECREMENT,
            value: value
        }
    }
}