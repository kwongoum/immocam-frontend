import { Component, OnInit } from '@angular/core';
import {ResourceService} from '../../services/resource.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-realty',
  templateUrl: './list-realty.component.html',
  styleUrls: ['./list-realty.component.css']
})
export class ListRealtyComponent implements OnInit {
   realties:any;
  constructor( private resourceService: ResourceService,
              private router: Router) { }

  ngOnInit() {

this.getRealties();
  }

   getRealties(){
      this.resourceService.getListResource("/realties").subscribe(
        (value) => {
           this.realties= value;

         },
        error => {
            console.log(error);
        }
      );
}

  onDeleteSelectedRealty(id) {
    this.resourceService.deleteResource("/realty/", id)
      .subscribe(
        value => {
          this.getRealties();
        },
        error => {
          console.log("error ON DELETING.."+error);
        }
      );
    console.log("element supprimé AVEC SUCCESS ==>>>"+id);
     //console.log("element supprimé==>>>"+id);

  }


}
