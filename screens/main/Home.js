import React from "react";

import { } from 'react-native';

import { useRoute } from '../../router';

const Home = () => {
    const routing = useRoute({});

    return (<>
        {routing}
    </>)
};


export default Home;