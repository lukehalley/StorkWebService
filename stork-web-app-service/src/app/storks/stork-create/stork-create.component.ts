import { Stork } from './../stork.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { StorksService } from './../storks.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-stork-create',
  templateUrl: './stork-create.component.html'
})
export class StorkCreateComponent implements OnInit {
  // Edit Feature
  private mode = 'create';
  private storkId: string;
  stork: Stork;

  // Input field values
  enteredStork_id = '';
  enteredNickname = '';

  // Init classes for input fields
  public idInput = 'input';
  public nicknameInput = 'input';

  // Readymade classes to set inputs as error or ok
  public normalInput = 'input';
  public errorInput = 'input is-danger';
  public goodInput = 'input is-success';

  // Init classes for error messages
  public idMsgError = 'help is-danger is-hidden';
  public nicknameMsgError = 'help is-danger is-hidden';

  // Init classes for success messages
  public idMsgGood = 'help is-success is-hidden';
  public nicknameMsgGood = 'help is-success is-hidden';

  // Readymade classes to set error messages as visible or invisible
  public hiddenMsgError = 'help is-danger is-hidden';
  public showMsgError = 'help is-danger';

  // Readymade classes to set error messages as visible or invisible
  public hiddenMsgGood = 'help is-success is-hidden';
  public showMsgGood = 'help is-success';

  constructor(
    public storksService: StorksService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('storkId')) {
        this.mode = 'edit';
        this.storkId = paramMap.get('storkId');
        this.storksService.getStork(this.storkId).subscribe(storkData => {
          this.stork = {
            id: storkData._id,
            stork_code: storkData.stork_code,
            nickname: storkData.nickname
          };
        });
      } else {
        this.mode = 'create';
        this.storkId = null;
      }
    });
  }

  // Create the button press listener
  onSaveStork(form: NgForm) {
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

    const idVal = form.value.inputStorkID;
    const idNick = form.value.inputStorkNickname;

    const idLen = form.value.inputStorkID.length;
    const nickLen = form.value.inputStorkNickname.length;

    const idType = typeof form.value.inputStorkID;
    const nickType = typeof form.value.inputStorkNickname;

    const clearIndicators = async () => {
      await delay(2000);
      this.idMsgGood = this.hiddenMsgError;
      this.nicknameMsgGood = this.hiddenMsgError;
      this.idInput = this.normalInput;
      this.nicknameInput = this.normalInput;
    };

    if (form.valid) {
      this.idInput = this.goodInput;
      this.idMsgError = this.hiddenMsgError;
      this.idMsgGood = this.showMsgGood;
      this.nicknameInput = this.goodInput;
      this.nicknameMsgError = this.hiddenMsgError;
      this.nicknameMsgGood = this.showMsgGood;
      if (this.mode === 'create') {
        this.storksService.addStork(
          form.value.inputStorkID,
          form.value.inputStorkNickname
        );
      } else {
        this.storksService.updateStork(
          this.storkId,
          form.value.inputStorkID,
          form.value.inputStorkNickname
        );
      }
      form.resetForm();
      clearIndicators();
    } else {
      if (idLen !== 7 || idType !== 'string' || !/[A-Z0-9]*/.test(idVal)) {
        this.idInput = this.errorInput;
        this.idMsgGood = this.hiddenMsgError;
        this.idMsgError = this.showMsgError;
      } else {
        this.idInput = this.goodInput;
        this.idMsgError = this.hiddenMsgError;
        this.idMsgGood = this.showMsgGood;
      }
      if (
        nickLen > 20 ||
        nickLen < 4 ||
        nickType !== 'string' ||
        !/[a-zA-Z0-9 ]*/.test(idNick)
      ) {
        this.nicknameInput = this.errorInput;
        this.nicknameMsgGood = this.hiddenMsgError;
        this.nicknameMsgError = this.showMsgError;
      } else {
        this.nicknameInput = this.goodInput;
        this.nicknameMsgError = this.hiddenMsgError;
        this.nicknameMsgGood = this.showMsgGood;
      }
      return;
    }
  }
}
