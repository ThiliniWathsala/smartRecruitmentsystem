import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



Injectable({providedIn:"root"}) 

export class PositionServiceComponent{
    constructor(private http:HttpClient){}



    addPost(position:string,jobSummery:string,jobDescription:string){
        const positiondata = {
            position:position,
            jobSummery:jobSummery,
            jobDescription:jobDescription
        }
        this.http.post<{message:string, position:string}>('http://localhost:3000/api/position',positiondata)
        .subscribe((responseData)=>{
          console.log(responseData)
        })
}
}