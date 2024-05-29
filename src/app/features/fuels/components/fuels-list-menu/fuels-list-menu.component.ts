import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  MenuComponent,
  MenuItem,
} from '../../../../shared/components/menu/menu.component';
// import { FuelListItemDto } from '../../models/fuel-list-item-dto';
import { FuelsListBaseComponent } from '../fuels-list-base/fuels-list-base.component';
// import { FuelsService } from '../../services/fuels.service';

@Component({
  selector: 'app-fuels-list-menu',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './fuels-list-menu.component.html',
  styleUrl: './fuels-list-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, // OnPush ile değişikliklerin kontrolü optimize edilir.
})
export class FuelsListMenuComponent
  extends FuelsListBaseComponent
  implements OnInit
{
  // override ngOnInit(): void {
  //   console.log('FuelsListMenuComponent');
  //   super.ngOnInit();
  // }

  get fuelsMenuItems(): MenuItem[] {
    return (
      this.fuels?.map((fuel) => {
        return {
          label: fuel.name!, // ! : null olmayan bir değer olduğunu belirtir.
          click: (_: MouseEvent) => this.onSelectFuel(fuel),
        };
      }) ?? []
    );
  }
}