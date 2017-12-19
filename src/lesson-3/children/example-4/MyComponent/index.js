const MyComponent = (props) => {
    const { children } = props;

    console.log('•λ•', props);
    console.log('•λ•', typeof children);
    console.log('•λ•', children);
    console.log('•λ•', children());

    return children();
};

export default MyComponent;
