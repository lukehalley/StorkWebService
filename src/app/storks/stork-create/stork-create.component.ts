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
          this.isLoading = false;
          this.stork = {
            id: storkData._id,
            stork_code: storkData.stork_code,
            nickname: storkData.nickname
          };
          console.log('GETTING STORK: ' + JSON.stringify(this.stork));
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
          form.value.inputStorkNickname
        );
        console.log(
          this.storkId + form.value.inputStorkID + form.value.inputStorkNickname
        );
      } else {
        this.storksService.addStork(
          form.value.inputStorkID,
          form.value.inputStorkNickname
        );
      }
      form.resetForm();
      this.router.navigate(['/your-storks']);
    }
  }
}
