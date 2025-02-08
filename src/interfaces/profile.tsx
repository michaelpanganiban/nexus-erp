import { Dispatch, SetStateAction } from 'react';

export interface ProfileInterface {
    setSelectedIndex: Dispatch<SetStateAction<number | null>>,
    selectedIndex: number | null,
    setComponent: Dispatch<SetStateAction<string>>,
}