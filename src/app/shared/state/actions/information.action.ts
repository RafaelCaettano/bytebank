import { createAction, props } from '@ngrx/store';
import { Information } from '../../models/information.model';

export const Add = createAction(
    '[Informations] Add informations',
    props<{ payload: Information }>()
);
