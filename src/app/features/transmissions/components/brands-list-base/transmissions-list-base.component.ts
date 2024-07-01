import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TransmissionsControllerService, GetAllTransmissionResponse } from '../../../../shared/services/api';


@Component({
  standalone: true,
  imports: [],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransmissionsListBaseComponent {
  @Input() initialSelectedTransmissionId: number | null = null; // 1. OnPush, yönteminde input değerlerinde değişiklik olduğunda değişikliği algılar.
  @Output() selectTransmission = new EventEmitter<GetAllTransmissionResponse | null>();

  transmissions!: GetAllTransmissionResponse[];
  selectedTransmission: GetAllTransmissionResponse | null = null;
  initialSelectedTransmissionIndex: number | null = null;

  // transmissionsService: TransmissionsService;
  constructor(
    private transmissionsService: TransmissionsControllerService,
    private change: ChangeDetectorRef
  ) {
    // this.transmissionsService = transmissionsService;
  }

  // ngOnInit component ilk yerleştiğinde bir kez çalışır.
  // 2. OnPush, lifecycle hookları tetiklendiğinde değişikliği algılar.
  ngOnInit(): void {
    this.getTransmissionsList();
  }

  getTransmissionsList() {
    this.transmissionsService.getAllTransmission().subscribe((response) => {
      this.transmissions = response;

      if (this.initialSelectedTransmissionId) {
        this.selectedTransmission =
          this.transmissions.find(
            (transmission) => transmission.id === this.initialSelectedTransmissionId
          ) ?? null;
        this.initialSelectedTransmissionIndex = this.transmissions.findIndex(
          (transmission) => transmission.id === this.initialSelectedTransmissionId
        );
      }

      // 3. OnPush, ChangeDetectorRef.markForCheck metodu ile componentin değişiklikleri algılaması sağlanır.
      this.change.markForCheck();
    });
  }

  // 2. OnPush, kullancı html üzerinden bir event tetiklendiğinde değişikliği algılar.
  onSelectTransmission(transmission: GetAllTransmissionResponse) {
    this.selectedTransmission = this.selectedTransmission?.id !== transmission.id ? transmission : null;
    this.selectTransmission.emit(this.selectedTransmission);
  }
}