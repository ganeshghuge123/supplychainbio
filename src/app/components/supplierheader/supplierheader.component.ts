import { Component } from '@angular/core';
import { SuppliermaterialserviceService } from '../../services/suppliermaterialservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplierheader',
  templateUrl: './supplierheader.component.html',
  styleUrl: './supplierheader.component.css'
})
export class SupplierheaderComponent {

  constructor(private service:SuppliermaterialserviceService,
    private router: Router) { }

    supplierHome(){
      this.router.navigate([''])
    }
  

  addRawmaterial(){
    this.router.navigate(['add']);
  }

  // addSupplier()
  // {
  //   this.router.navigate(['addSupplier']);
  // }

  supplierList(id:number)
  {
    this.router.navigate(['supplierlist']);
  }

  rawmaterialList()
  {
    this.router.navigate(['rawlist']);
  }

  companymaterialList()
  {
    this.router.navigate(['companyrawlist']);
  }

  

}
