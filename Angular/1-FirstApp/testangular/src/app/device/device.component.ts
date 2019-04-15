import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  @Input() deviceName : string = 'Machine à laver';
  @Input() deviceStatus : string = 'Off';

  constructor() { }

  ngOnInit() {
  }

  getstatus() { return this.deviceStatus;}
}
