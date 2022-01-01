import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  tab = [];
  isConsecutive = false;
  message: String;


  ngOnInit(){
    this.form = new FormGroup({
      number : new FormControl( null , {
        validators: [Validators.required]
      })
    })

  }

  check_is_consecutive(){
    for(var i = 1 ; i < this.tab.length ; i++){
      if (this.tab[i] - this.tab[i-1] ==1){
        this.isConsecutive = true
      }else{
        this.isConsecutive = false
      }
    }
    if(this.isConsecutive){
      this.message = "Ses éléments sont tous consécutifs."
    }else{
      this.message = "Ses éléments ne sont pas consécutifs"
    }

    }

  add(){
    this.tab.push(this.form.value.number)
    this.form.reset();
  }
  done(){
    this.check_is_consecutive();
  }

}
