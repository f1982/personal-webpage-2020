import React from 'react';
import { connect } from 'react-redux';
interface CounterProp {
    // value: number;
    // addHandler: any;
    // reduceHandler: any;
    dispatch: any;
}

const Counter = (props: any) => {
    console.log('Counter props', props);
    const { counter: value, dispatch } = props;

    return (
        <>
            <div>count:{value}</div>
            <button
                onClick={() => {
                    dispatch({ type: 'increment' });
                }}>
                Increase
            </button>
            <button
                onClick={() => {
                    dispatch({ type: 'decrement' });
                }}>
                Decrese
            </button>
        </>
    );
};

//这里必须 map redux 里面定义的 state
const mapStatesToProps = (state: any) => {
    const { counter } = state;

    return {
        counter
    };
};
export default connect(mapStatesToProps)(Counter);
