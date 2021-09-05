import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ResourceService} from '../../services/resource.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-edit-realty',
  templateUrl: './edit-realty.component.html',
  styleUrls: ['./edit-realty.component.css']
})
export class EditRealtyComponent implements OnInit {
public id:any;
public realty:any;

  realtyForm: any;
  private realties: any[];
constructor( private activatedRoute : ActivatedRoute,
             public  resourceService: ResourceService,
             public formBuilder: FormBuilder) {

}

  ngOnInit() {
   this.id= this.activatedRoute.snapshot.params['id'];
    console.log("Soo==1 ==ooo"+this.id);

     this.getRealtyToModif(this.id);
      console.log(" the realty to modif is == 4 ==="+this.realty);
 this.initForm();

  }
   initForm(){
     this.realtyForm =  this.formBuilder.group({
       description:'',
       price:''
     });
   }
      public  getRealtyToModif(id){
         this.resourceService.getByIdResource("/realty",id).subscribe(

           (value) => {
             console.log("enter in value 2 === "+value.description);
             this.realty=value;
              console.log("realty== 3 => "+this.realty.description);
           },
           error => {
             console.log(error);
           }
         );
        }

  onUpdate() {
   const values = this.realtyForm.value;
    this.realty.description = values['description'];
    this.realty.price = values['price'];

      console.log('ICICIC'+this.realty.description);


    this.resourceService.updateResource("/realty",this.realty).subscribe(
      value => {
          },
          error => {
            console.log(error);
          }
        );

      }



  /*onUpdate() {
    this.realty.description= this.realty.description+"added";
    console.log(" the realty to modif is == 4 ==="+this.realty.description);
  }

   */
}
