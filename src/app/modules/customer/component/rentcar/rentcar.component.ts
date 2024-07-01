import { Component, Input } from "@angular/core";
import { CarDto, CarsControllerService, GetCarByIdRequestParams } from "../../../../shared/services/api";
import { CarService } from "../services/car.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-rentcar',
  standalone: true,
  imports: [],
  templateUrl: './rentcar.component.html',
  styleUrl: './rentcar.component.scss'
})
export class RentcarComponent   {
  car!: CarDto;

  constructor(private activatedRoute: ActivatedRoute, private carService: CarService) {}

  ngOnInit(): void {
    this.getCarById();
  }

  getCarById(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log(id);

    if (id === null || id === undefined) {
      console.error('ID parametresi null veya undefined');
      return;
    }

    const requestParams: GetCarByIdRequestParams = { id: Number(id) };

    this.carService.getCarById(requestParams.id).subscribe((res: CarDto) => {
      console.log(res);
      this.car = res;
    }, (error) => {
      console.error('Araba bilgileri alınamadı:', error);
    });
  }
}
  // car:any;
  // carId2:number=this.activated.snapshot.params["carId"];
  // @Input() id!: number;
  // requestParameters?: GetCarByIdRequestParams;
  // constructor(private carService:CarService,
  //   private carser:CarsControllerService,
  //   private snackBar:MatSnackBar,
  //   private activated:ActivatedRoute
  // ){
  //   this.getCarById();
    
  // }
  

  // getCarById(){
  //   const params: number =  this.activated.snapshot.params["id"] ;
  //   console.log(this.carId2);
  //   console.log(params);

  //   if (params === null || params === undefined) {
  //     console.error('ID parametresi null veya undefined');
  //     return;
  // }

 
  //     this.carser.getCarById(params).subscribe((res)=>{
  //       console.log(res);
  //       console.log(params);
  //       this.car=res;
  //    })
  // }

