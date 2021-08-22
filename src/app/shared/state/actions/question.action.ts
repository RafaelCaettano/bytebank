import { createAction, props } from '@ngrx/store';
import { Information } from '../../models/information.model';

export const Add = createAction(
    '[Question] Add information',
    props<{ payload: Information }>()
);
