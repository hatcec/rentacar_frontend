import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FuelsControllerService, GetAllFuelResponse } from '../../../../shared/services/api';
import { FuelsService } from '../../services/fuels.service';

@Component({
  standalone: true,
  imports: [],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FuelsListBaseComponent {
  @Input() initialSelectedFuelId: number | null = null; // 1. OnPush, yönteminde input değerlerinde değişiklik olduğunda değişikliği algılar.
  @Output() selectFuel = new EventEmitter<GetAllFuelResponse | null>();

  fuels!: GetAllFuelResponse[];
  selectedFuel: GetAllFuelResponse | null = null;
  initialSelectedFuelIndex: number | null = null;

  // fuelsService: FuelsService;
  constructor(
    private fuelsService: FuelsControllerService,
    private change: ChangeDetectorRef
  ) {
    // this.fuelsService = fuelsService;
  }

  // ngOnInit component ilk yerleştiğinde bir kez çalışır.
  // 2. OnPush, lifecycle hookları tetiklendiğinde değişikliği algılar.
  ngOnInit(): void {
    this.getFuelsList();
  }

  getFuelsList() {
    this.fuelsService.getAllFuel().subscribe((response) => {
      this.fuels = response;

      if (this.initialSelectedFuelId) {
        this.selectedFuel =
          this.fuels.find(
            (fuel) => fuel.id === this.initialSelectedFuelId
          ) ?? null;
        this.initialSelectedFuelIndex = this.fuels.findIndex(
          (fuel) => fuel.id === this.initialSelectedFuelId
        );
      }

      // 3. OnPush, ChangeDetectorRef.markForCheck metodu ile componentin değişiklikleri algılaması sağlanır.
      this.change.markForCheck();
    });
  }

  // 2. OnPush, kullancı html üzerinden bir event tetiklendiğinde değişikliği algılar.
  onSelectFuel(fuel: GetAllFuelResponse) {
    this.selectedFuel = this.selectedFuel?.id !== fuel.id ? fuel : null;
    this.selectFuel.emit(this.selectedFuel);
  }
}