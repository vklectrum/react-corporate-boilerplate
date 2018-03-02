import React from 'react';

const DaytimeCodingComponents = {
    morning () {
        return <h1>I‘m coding in the morning!</h1>;
    },
    evening () {
        return <h1>I‘m coding in the evening!</h1>;
    },
};

const DaytimeCoding = () => <DaytimeCodingComponents.morning />;

export default <DaytimeCoding />;
