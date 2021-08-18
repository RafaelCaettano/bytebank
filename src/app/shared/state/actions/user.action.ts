import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.model';

export const Add = createAction(
    '[User] Add user',
    props<{ payload: User }>()
);

export const Clear = createAction(
    '[User] Remove user'
);