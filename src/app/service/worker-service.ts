import { Injectable } from '@angular/core';
import {worker} from '../model/worker.model';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  Workers: worker[] = [];

}
