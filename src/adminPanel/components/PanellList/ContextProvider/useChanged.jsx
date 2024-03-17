import { useContext } from 'react';
import { ChangedContext } from './ChangeContext';

export const useChanged = () => useContext(ChangedContext);
