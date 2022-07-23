import { Component, OnInit } from '@angular/core'
import { Activiter } from '../model/Activiter'
import { AbonnementService } from '../services/abonnement.service'

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.scss'],
})
export class AbonnementComponent implements OnInit {
  tab: any = []
  TabAc: any = []
  TabAc2: any = []

  TabActivite = new Activiter()

  name = ''
  dureeParMois = ''
  dateDebut = ''
  dateFin = ''
  prix = ''
  obje = 'Confirmation'
  text = "bien recu";
  userAbn = {
    id: 2,
    name: 'Hayder',
    email: 'hayder1.abbassi@gmail.com',
  }
  
  constructor(private abs: AbonnementService) {}

  getAll() {
    this.abs.getAllABonnement().subscribe(res => {
      this.tab = res
      console.log(res)
    })
  }

  getAllAct() {
    this.abs.getAllActi().subscribe(res => {
      this.TabAc = res
      console.log(res)
    })
  }
  deletAb(idU: any, idA: any) {
    this.abs.DeleteAbonnement(idU, idA).subscribe(res => {
      this.getAll()
    })
  }
  sendMail(email: any, obj: any, text: any) {
    console.log(email)

    this.abs.SendMail(email, obj, text).subscribe(ex => {
      console.log(ex)
    })
  }
id:any=[]
  ajoutAbon() {
    this.id = {
      "userId": 2,
      "activiteId": this.TabAc2,
    }
   let data = {
      id: this.id,
      name: this.name,
      dureeParMois: this.dureeParMois,
      dateDebut: this.dateDebut,
    }
    console.log('component', data)
    this.abs.AjoutAbonnement(data).subscribe(res => {
      this.sendMail(this.userAbn.email,this.obje,this.text)
      console.log(res)
    })
    console.log(this.TabAc2)
  }

  ngOnInit() {
    this.getAll()
    this.getAllAct()
  }
}
