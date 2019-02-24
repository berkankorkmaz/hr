import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeListService {

  constructor(private http : HttpClient) { }
  public selectedEmployee = {};
  getEmployees(){
    /*return [
    {"id":1, "adi": "Berkan" , "soyadi": "Korkmaz" , "phone":5351234565 , "email": "adi@gmail.com" , "cinsiyet":"E" , "picture":"https://randomuser.me/api/portraits/med/women/23.jpg"},
    {"id":2, "adi": "Duygu" , "soyadi": "Ogunc" , "phone":5326548161, "email": "soyadi@gmail.com" , "cinsiyet":"K" , "picture":"https://randomuser.me/api/portraits/women/51.jpg"},
    {"id":3, "adi": "Baris" , "soyadi": "Manco" , "phone":5333154867, "email": "cinsiyet@gmail.com" , "cinsiyet":"E" , "picture":"https://randomuser.me/api/portraits/men/39.jpg"},
    {"id":4, "adi": "Marie" , "soyadi": "Currie" , "phone":5341648461, "email": "telefon@gmail.com" , "cinsiyet":"K" , "picture":"https://randomuser.me/api/portraits/men/87.jpg"}
  ];
  */
 return this.http.get('https://randomuser.me/api?results=10');
  }
}
