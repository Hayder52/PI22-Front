import { Component, OnInit } from '@angular/core';
import { TypeAbonnement } from '../model/TypeAbonnement';
import { AbonnementService } from '../services/abonnement.service';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.scss']
})
export class ActiviteComponent implements OnInit {

  Nom=""
  desciptionActiv=""
  prixActiv=""
  dateDebutActiv=""
  dateFinActiv=""

  tabss:any=[]
  listeTyp :TypeAbonnement[];
  typeAct=new TypeAbonnement();
TabAc:any=[]
  tabType:any=[]
  constructor(private ab:AbonnementService) { }

  getAlltyoe()
  {
    this.ab.getAllType().subscribe(res=>{
      this.tabType=res
      console.log(res)
    })
  }

  ajoutAct()
  {
    
    //console.log(this.Nom,'+',this.desciptionActiv,'+',this.prixActiv,'+',this.dateFinActiv,'+',this.dateDebutActiv ,'+' ,this.typeAct)

    let data={
      "nomActiv":this.Nom,
      "desciptionActiv":this.desciptionActiv,
      "prixActiv":this.prixActiv,
      "dateDebutActiv":this.dateDebutActiv,
      "dateFinActiv":this.dateFinActiv,
      "typeActivite":this.typeAct
    }
    this.ab.AjoutAc(data).subscribe(res=>{
      this.getAlltyoe()
      console.log(res)});
  }


  getAllAct()
  {
    this.ab.getAllActi().subscribe(res=>{
      this.TabAc=res
      console.log(res)
    })
  }
  ngOnInit() {

    this.getAlltyoe();
    this.getAllAct();
  }

}
