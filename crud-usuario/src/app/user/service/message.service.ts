import { NotifierService } from 'angular-notifier';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessageService {


  private readonly notifier : NotifierService;
  public display = false;
  public sessionExpireListener = new EventEmitter();


  constructor(notifierService: NotifierService) {
      this.notifier = notifierService
    }

    public success(message: string, sumary?: string) {
      this.notifier.notify('success', message);
    }

    public info(message: string, sumary?: string) {
    this.notifier.notify('info', message);
    }

    public error(message: string, sumary?: string) {
      this.notifier.notify('error', message);
    }
}
