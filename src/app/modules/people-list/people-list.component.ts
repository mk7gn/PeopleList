import { Component, OnInit } from '@angular/core'
import { PeopleService } from '../../api/people.service'
import { Person } from '../../api/people.model'
import { AngularFireList} from 'angularfire2/database'

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  public people: AngularFireList<Person[]>

  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.people = this.peopleService.getPeople()
    debugger
  }

}
