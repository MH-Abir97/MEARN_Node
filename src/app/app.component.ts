import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularWithNode';

 /**
  *
  */
 fileName=''
 constructor(private http: HttpClient) {

 }

  onFileSelected(event:any) {

    const file:File = event.target.files[0];
     console.log(file);
    if (file) {
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("thumbnail", file);
       //  const upload$ = this.http.post("/api/thumbnail-upload", formData);
         //upload$.subscribe();
    }

   // if (typeof (FileReader) !== 'undefined') {
      // let reader = new FileReader();
      //  reader.onload = (e: any) => {
      //    this.fileName = e.target.result;
      //  };

      //  reader.readAsArrayBuffer(event.target.files[0]);
     //}

     if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event:any) => { // called once readAsDataURL is completed
        this.fileName = event.target.result;
      }
    }
}
}
