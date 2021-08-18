import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user/user.service';
import { Add } from 'src/app/shared/state/actions/user.action';

@Injectable({
  providedIn: 'root'
})
export class HomeResolver implements Resolve<void> {

  constructor(
    private userService: UserService,
    private userStore: Store<{ user: User }>
  ) {}

  resolve(): void {
    this.userService.getUser(1).subscribe(
      (user: User) => {
        this.userStore.dispatch(Add({ payload: user }));
      }
    );
  }
}
