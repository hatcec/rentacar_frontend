import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  MenuComponent,
  MenuItem,
} from '../../../../shared/components/menu/menu.component';
// import { TransmissionListItemDto } from '../../models/transmission-list-item-dto';
import { TransmissionsListBaseComponent } from '../transmissions-list-base/transmissions-list-base.component';
// import { TransmissionsService } from '../../services/transmissions.service';

@Component({
  selector: 'app-transmissions-list-menu',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './transmissions-list-menu.component.html',
  styleUrl: './transmissions-list-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // OnPush ile değişikliklerin kontrolü optimize edilir.
})
export class TransmissionsListMenuComponent
  extends TransmissionsListBaseComponent
  implements OnInit
{
  // override ngOnInit(): void {
  //   console.log('TransmissionsListMenuComponent');
  //   super.ngOnInit();
  // }

  get transmissionsMenuItems(): MenuItem[] {
    return (
      this.transmissions?.map((transmission) => {
        return {
          label: transmission.name!, // ! : null olmayan bir değer olduğunu belirtir.
          click: (_: MouseEvent) => this.onSelectTransmission(transmission),
        };
      }) ?? []
    );
  }
}