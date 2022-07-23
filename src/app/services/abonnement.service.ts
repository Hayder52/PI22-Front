import { HttpClient, HttpClientModule } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Abonnement } from '../model/Abonnement'
import { Activiter } from '../model/Activiter'
import { TypeAbonnement } from '../model/TypeAbonnement'

@Injectable({
  providedIn: 'root',
})
export class AbonnementService {
  constructor(private http: HttpClient) {}

  getAllABonnement(): Observable<Abonnement> {
    return this.http.get<Abonnement>('http://localhost:8083/SpringMVC/Active/Getabn')
  }

  DeleteAbonnement(idU: any, idA: any): Observable<Abonnement> {
    return this.http.delete('http://localhost:8083/SpringMVC/Active/supAbn/' + idU + '/' + idA)
  }
  AjoutAbonnement(Abonnement: Abonnement) {
    console.log("Service",Abonnement)
    return this.http.post('http://localhost:8083/SpringMVC/Active/AjtAbn', Abonnement)
  }

  //---------------------------------- ty_pe Activite ----------------------------------------//

  getAllType(): Observable<TypeAbonnement> {
    return this.http.get<TypeAbonnement>('http://localhost:8083/SpringMVC/ListType/All')
  }

  //---------------------------------------------------------------

  getAllActi(): Observable<Activiter> {
    return this.http.get<Activiter>('http://localhost:8083/SpringMVC/Activ/GetList')
  }
  AjoutAc(Activiter: Activiter) {
    return this.http.post('http://localhost:8083/SpringMVC/Activ/AjtActiv', Activiter)
  }

  //------------------------------------------

  SendMail(email: any, obj: any, text: any) {
    return this.http.get(
      'http://localhost:8083/SpringMVC/send/mail/' + email + '/' + obj + '/' + text,
    )
  }
}
