import {createContext} from 'react'
// import {createContextualCan } from '@casl/react'
import { useContext } from 'react';
import {ability} from './ability.js'

export const AbilityContext= createContext(ability);
// export const Can= createContextualCan(AbilityContext.Consumer)
export function Can({ I: action, a: subject, children }) {
  const ability = useContext(AbilityContext);
  return ability.can(action, subject) ? children : null;
}


