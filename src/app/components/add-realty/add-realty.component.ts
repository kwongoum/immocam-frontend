import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ResourceService} from '../../services/resource.service';


@Component({
  selector: 'app-add-realty',
  templateUrl: './add-realty.component.html',
  styleUrls: ['./add-realty.component.css']
})
export class AddRealtyComponent implements OnInit {
  addForm: FormGroup;

  constructor( private formBuilder: FormBuilder,
               public resourceService : ResourceService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(){
    this.addForm= this.formBuilder.group(
      {
        description:'',
        price:'',
        quantity:'',
        category:'',
        appliesNumbers:''
      }
    );
  }
  realtyToadd: any;
  onAdd() {
console.log("Nothing yet added !!!");
 const values = {
   "description": this.addForm.get('description').value,
   "price":this.addForm.get('price').value,
   "quantity":this.addForm.get('quantity').value,
   "category":this.addForm.get('category').value,
   "appliesNumbers":this.addForm.get('appliesNumbers').value
 };
    console.log("testtt"+JSON.stringify(values));

            this.resourceService.saveResource("/realty",values).subscribe(
              value => {
                console.log("APRES" +JSON.stringify(value));
              },
              error => {
                console.log(error);
              }
            );

  }
}
