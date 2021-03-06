import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

  Datas = [];
  DatasId = [];
  ResellerData = [];
  ResellerDataFiltered = [];
  constructor() { }
  
  async gettemplatesDatabyId(id) {
    await axios.get('http://103.214.233.141:3003/v1/secure/users/templates/'+id)
    .then( res => {
      this.DatasId =  res.data;
      console.log(this.DatasId);
         })
    .catch( err => {
        console.log(err.data);
    });
    return this.DatasId ? Promise.resolve(this.DatasId) : Promise.resolve('Getbyid failed');

  }
  async getUsersData() {
    await axios.get('http://103.214.233.141:3003/v1/secure/users/templates')
    .then( res => {
      this.Datas =  res.data;
      console.log(this.Datas);
         })
    .catch( err => {
        console.log(err.data);
    });
    return this.Datas ? Promise.resolve(this.Datas) : Promise.resolve('Generation failed');

  }
}
