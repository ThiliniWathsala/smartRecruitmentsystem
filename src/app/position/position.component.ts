import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Position} from '../model/position.model';
import { ActivatedRoute } from '@angular/router';
import { PositionServiceComponent } from '../Services/position.service';
@Component({
    selector:'app-position',
    templateUrl:'./position.component.html',
    styleUrls:['./position.component.css']
  
})

export class PositionComponent{
    
    constructor(public positionservice:PositionServiceComponent,public route:ActivatedRoute){  // used to identify the correct rout path
    
    }




    enteredPosition="";
    enteredjobSummety="";
    enteredjobDescrition="";
    imagePreview:string;
    form:FormGroup;
    position:Position;
    private mode='positioncreate';
    private pId:string;



    ngOnInit(){
        this.form= new FormGroup({
            position: new FormControl(null,{validators:[Validators.required] }),
           
    
            jobSummery: new FormControl(null,{validators:[Validators.required]}),
            jobDescription: new FormControl(null,{validators:[Validators.required]}),
            
           // image:new FormControl(null,{validators:[Validators.required],asyncValidators:[mimeType]})
        });

    }

 /*   
    onImagePicked(event:Event){
        const file=(event.target as HTMLInputElement).files[0];      //HTMLINPUTElement is used to identify te incominf file is html file input  and .files come as array so we give 0 eleent ususally   
        this.form.patchValue({image:file});        // patchValue allows to target single control     
        this.form.get('image').updateValueAndValidity();
        const reader= new FileReader();
        reader.onload=()=>{
        this.imagePreview=reader.result as string;
        };
        reader.readAsDataURL(file);
                                               
    }
*/


    save(){

        if(this.form.invalid){
            return;
        }
       
           this.positionservice.addPost(this.form.value.position,this.form.value.jobSummery,this.form.value.jobDescription);
            console.log(this.form.value.position);
        
          this.form.reset();  // to reset the form 
      }








}