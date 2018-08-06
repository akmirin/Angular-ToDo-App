import {Action} from '@ngrx/store';

import { UPDATE_APP_STATE,UPDATE_TASK_LIST} from '../appState-reducer';

export class CustomAppStateAction implements Action{
    readonly type =  UPDATE_APP_STATE ||UPDATE_TASK_LIST;
    
    constructor(public payload:any){}
}

export type Actions = CustomAppStateAction;