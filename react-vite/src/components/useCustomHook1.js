import useCustomHook from './useCustomHook';
import { useState, useRef, useEffect, useMemo, useCallback } from 'react'

export default function useCustomHook1(){
    let value = useCustomHook();
    console.log("...sid useCustomHook1 ", value);

    return  useMemo(()=>{ return value}, []);
}