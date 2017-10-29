import { Component, Input } from '@angular/core';
import { ITimer } from '../../interface/ITimer';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'timer',
    templateUrl: 'timer.html'
})
export class TimerComponent {
 
    @Input() timeInSeconds: number;
    public timer: ITimer;
 
    constructor(public alertCtrl: AlertController, public navCtrl : NavController) {
    }
 
    ngOnInit() {
        this.initTimer();
    }
 
    hasFinished() {
        return this.timer.hasFinished;
    }
 
    initTimer() {
        if(!this.timeInSeconds) { this.timeInSeconds = 0; }
 
        this.timer = <ITimer>{
            seconds: this.timeInSeconds,
            runTimer: false,
            hasStarted: false,
            hasFinished: false,
            secondsRemaining: this.timeInSeconds
        };
 
        this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
    }
 
    startTimer() {
        this.timer.hasStarted = true;
        this.timer.runTimer = true;
        this.timerTick();
    }
 
    pauseTimer() {
        this.timer.runTimer = false;
    }
 
    resumeTimer() {
        this.startTimer();
    }
 
    timerRemaining() {
        return this.timer.secondsRemaining;
    }

    timerTick() {
        setTimeout(() => {
            if (!this.timer.runTimer) { return; }
            this.timer.secondsRemaining--;
            this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
            if (this.timer.secondsRemaining > 0) {
                this.timerTick();
            }
            else {
                this.pauseTimer();
                this.timer.hasFinished = true;
                this.presentAlert();
            }
        }, 1000);
    }

    presentAlert() {
        const alert = this.alertCtrl.create({
            title: 'Your time is over',
            buttons: ['Ok']
        });
        alert.present();
        alert.onDidDismiss((result) =>{
            this.navCtrl.push('FinishPage');
        });
    }

 
    getSecondsAsDigitalClock(inputSeconds: number) {
        var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);
        var hoursString = '';
        var minutesString = '';
        var secondsString = '';
        hoursString = (hours < 10) ? "0" + hours : hours.toString();
        minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
        secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
        return hoursString + ':' + minutesString + ':' + secondsString;
    }
    
}