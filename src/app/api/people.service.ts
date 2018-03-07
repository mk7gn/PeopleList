import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { catchError, map, tap } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'
import { Person } from './people.model'
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database'

@Injectable()
export class PeopleService {
  private peopleUrl = 'api/people'

  constructor(
    private db: AngularFireDatabase,
  ) { }

    /** GET people from the server */
    getPeople (): AngularFireList<Person[]> {
      const data = this.db
      debugger
      return this.db.list('/people')
    }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error) // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`)

      // Let the app keep running by returning an empty result.
      return of(result as T)
    }
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('PeopleService: ' + message)
  }
}
