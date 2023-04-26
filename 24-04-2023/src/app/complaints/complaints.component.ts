import { Component } from '@angular/core';
import { ComplaintsService } from '../services/complaints.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface Prod {
  flag: string;
  name: string;
}

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent {
  stateCtrl = new FormControl('');
  filteredStates: Observable<Prod[]>;

  pproducts: Prod[] = [
    {      
      "name": "Data Stuctures using C",
      "flag": "http://localhost/datastructure.jpg"
    },
    {      
      "name": "Apple Airpods Pro, 2nd Generation",
      "flag": "http://localhost/pods.jpg"
    },
    {      
      "name": "Dry Fruits Combo Pack",
      "flag": "http://localhost/nut.jpg"
    },
    {      
      "name": "LG Fridge",
      "flag": "http://localhost/fridge.jpg"
    },
    {      
      "name": "Boat Airdopes 441",
      "flag": "http://localhost/boatairpods.jpg"
    },
    {      
      "name": "Nutriwish Steel Cut Oats (200G)",
      "flag": "http://localhost/oats.jpg"
    },
    {      
      "name": "Angular for Beginners",
      "flag": "http://localhost/java.jpg"
    },
    {      
      "name": "i-phone 14 pro",
      "flag": "http://localhost/vignes.jpg"
    },
    {      
      "name": "Python Programming",
      "flag": "http://localhost/pyth.jpg"
    },
    {
      "name": "Mamaearth Complete Skin Glow Kit",
      "flag": "http://localhost/mama.jpg"
    },
    {
      "name": "MOROCCAN ARGAN HAIR SHAMPOO",
      "flag": "http://localhost/shampoo.jpg"
    }
  ];
  // 
  fname:any;
  email:any;
  message:any;
  product:any;
  errors:string[] = [];
  //
  constructor(private cs:ComplaintsService){
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map(prod => (prod ? this._filterStates(prod) : this.pproducts.slice())),
    );
    // 
    
    //
  }
  
  //
  ngOnInit(): void {
  }
  submit(){
    this.errors=[]
    if(this.errors.length==0){
      let obj={
        id:Math.round(Math.random()*100000),
        fname: this.fname,
        email: this.email,
        message: this.message,
        product:this.product
      }
      this.cs.postComplaint(obj).subscribe({
        next:()=>{
          console.log(obj)
          alert("Your complaint is raised")
            this.fname="",
            this.email="",
            this.message="",
            this.product=""
          },
          error: ()=>alert("Your Compliant is Raised :)")
        }
        )
      }
  }
  //
  private _filterStates(value: string): Prod[] {
    const filterValue = value.toLowerCase();
    return this.pproducts.filter(state => state.name.toLowerCase().includes(filterValue));
  }
}
