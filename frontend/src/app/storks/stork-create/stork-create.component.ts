import { Stork } from './../stork.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StorksService } from './../storks.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stork-create',
  templateUrl: './stork-create.component.html'
})
export class StorkCreateComponent implements OnInit {
  // Edit Feature
  public editMode = false;
  public isLoading = false;
  private storkId: string;
  private lastSeen: string;
  private gpsType: string;
  private latitude: number;
  private longitude: number;
  private statusCode: number;
  private temperature: number;
  private humidity: number;
  stork: Stork;

  constructor(
    public storksService: StorksService,
    public route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('storkId')) {
        this.editMode = true;
        this.storkId = paramMap.get('storkId');
        this.isLoading = true;
        this.storksService.getStork(this.storkId).subscribe(storkData => {
          this.latitude = storkData.latitude;
          this.latitude = storkData.longitude;
          this.gpsType = storkData.gpsType;
          this.lastSeen = storkData.lastSeen;
          this.statusCode = storkData.statusCode;
          this.stork = {
            id: storkData._id,
            stork_code: storkData.stork_code,
            lastSeen: storkData.lastSeen,
            nickname: storkData.nickname,
            gpsType: this.gpsType,
            latitude: this.latitude,
            longitude: this.longitude,
            statusCode: this.statusCode,
            temperature: this.temperature,
            humidity: this.humidity
          };
        });
      } else {
        this.editMode = false;
        this.storkId = null;
      }
    });
  }

  // Create the button press listener
  onSaveStork(form: NgForm) {
    if (form.valid) {
      if (this.editMode) {
        this.storksService.updateStork(
          this.storkId,
          form.value.inputStorkID,
          this.lastSeen,
          form.value.inputStorkNickname,
          this.gpsType,
          this.latitude,
          this.longitude,
          this.statusCode,
          this.temperature,
          this.humidity
        );
      } else {
        this.storksService.addStork(
          form.value.inputStorkID,
          form.value.inputStorkNickname
        );
      }
      form.resetForm();
    }
  }
}
