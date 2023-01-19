import { configureStore } from '@reduxjs/toolkit';
import parse from './AccountSlice';
export default configureStore ({
    reducer:{
        pharse : parse
    }
})