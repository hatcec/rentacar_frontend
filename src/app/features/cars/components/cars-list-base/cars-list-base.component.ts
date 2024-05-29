import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CarDto, CarsControllerService } from '../../../../shared/services/api';
import { CarsService } from '../../services/cars.service';

@Component({
  standalone: true,
  imports: [],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListBaseComponent {
  @Input() initialSelectedCarId: number | null = null; // 1. OnPush, yönteminde input değerlerinde değişiklik olduğunda değişikliği algılar.
  @Output() selectCar = new EventEmitter<CarDto | null>();

  cars!: CarDto[];
  selectedCar: CarDto | null = null;
  initialSelectedCarIndex: number | null = null;

  // carsService: CarsService;
  constructor(
    private carsService: CarsControllerService,
    private change: ChangeDetectorRef
  ) {
    // this.carsService = carsService;
  }

  // ngOnInit component ilk yerleştiğinde bir kez çalışır.
  // 2. OnPush, lifecycle hookları tetiklendiğinde değişikliği algılar.
  ngOnInit(): void {
    this.getCarsList();
  }

  getCarsList() {
    this.carsService.getAllCar().subscribe((response) => {
      this.cars = response;

      if (this.initialSelectedCarId) {
        this.selectedCar =
          this.cars.find(
            (car) => car.id === this.initialSelectedCarId
          ) ?? null;
        this.initialSelectedCarIndex = this.cars.findIndex(
          (car) => car.id === this.initialSelectedCarId
        );
      }

      // 3. OnPush, ChangeDetectorRef.markForCheck metodu ile componentin değişiklikleri algılaması sağlanır.
      this.change.markForCheck();
    });
  }

  // 2. OnPush, kullancı html üzerinden bir event tetiklendiğinde değişikliği algılar.
  onSelectCar(car: CarDto) {
    this.selectedCar = this.selectedCar?.id !== car.id ? car : null;
    this.selectCar.emit(this.selectedCar);
  }
}