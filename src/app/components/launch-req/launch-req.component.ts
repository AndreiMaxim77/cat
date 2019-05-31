import { Component, OnInit } from '@angular/core';
import { LocationEntry } from '../../LocationEntry';
import {ApiInterfService} from '../../services/api-interf.service'

@Component({
  selector: 'app-launch-req',
  templateUrl: './launch-req.component.html',
  styleUrls: ['./launch-req.component.css']
})
export class LaunchReqComponent implements OnInit {

  constructor( private apiInterfService: ApiInterfService) { }

    entries: LocationEntry[];
    crit: string[] = ["address", "postcode", "local-authority"];


  ngOnInit() {
    //this.apiInterfService.getData().subscribe(entries => {this.entries = entries})
  }

  registerCrit(){

  }
  reqButton(){
  }

  submitKey(){
    console.log("submit crit:")
    console.log("")
    console.log("submit key:")
    console.log("")
  }

}
