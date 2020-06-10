import { Action } from '@ngrx/store'
import { Tutorial } from '../../models/tutorial.model'
import * as TutorialActions from './../actions/tutorial.actions'
import { isNgTemplate } from '@angular/compiler';

// Section 1
const initialState: Tutorial = {
    name: 'Initial Tutorial',
    url: 'http://google.com'
}

// Section 2
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {

    // Section 3
    switch(action.type) {

        case TutorialActions.ADD_TUTORIAL:
            return [...state, action.payload];

        // Add this case:
        case TutorialActions.REMOVE_TUTORIAL:
            return state.filter(item => action.payload != state.indexOf(item));
            
        default:
            return state;
    }
}