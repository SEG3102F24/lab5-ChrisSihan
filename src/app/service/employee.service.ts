import { inject, Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Employee} from "../model/employee";
import {Firestore,collection,collectionData,addDoc,doc,setDoc,deleteDoc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private firestore: Firestore = inject(Firestore);
  employees$: BehaviorSubject<readonly Employee[]> = new BehaviorSubject<readonly Employee[]>([]);

  get $(): Observable<readonly Employee[]> {
    return this.employees$;
  }

  addEmployee(employee: Employee) {
    const employeesCollection = collection(this.firestore, 'employees');
    this.employees$.next([...this.employees$.getValue(), employee]);
    return true;
  }
}
