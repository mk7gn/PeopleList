import { Component, OnInit } from '@angular/core'
import { PeopleService } from '../../api/people.service'
import { Person } from '../../api/people.model'
import { AngularFirestoreCollection} from 'angularfire2/firestore'

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  public people: AngularFirestoreCollection<Person[]>

  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.people = this.peopleService.getPeople()
    debugger
  }

}
