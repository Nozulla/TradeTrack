import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    winrateData: any;
    winrateOptions: any;


  constructor() { }

  ngOnInit(): void {
    this.winrateData = this.winratedata();
    this.winrateOptions = this.winrateoptions();
  }
 

  winratedata() {
    const { winscolor, loseColor } = this.getColors();
    const borderColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';

    return {
        labels: ['Wins', 'Losses'],
        datasets: [
            {
                data: [670, 330],
                backgroundColor: [
                  winscolor,
                  loseColor,                  
                ],
                borderColor
            }]
    };
  }

  getColors() {    
    return {
        winscolor:  '#00C185',
        loseColor:  '#FF7290',
        deeppurpleColor:  '#B39DDB',
        indigoColor:  '#9FA8DA',
        blueColor:  '#90CAF9',
        lightblueColor: '#81D4FA',
        cyanColor:  '#4DD0E1',
        tealColor: '#80CBC4',
        greenColor:  '#A5D6A7',
        lightgreenColor:  '#C5E1A5',
        limeColor:  '#E6EE9C',
        yellowColor:  '#FFF59D',
        amberColor:  '#FFE082',
        orangeColor: '#FFCC80',
        deeporangeColor:'#FFAB91',
        brownColor:  '#BCAAA4'
    };
  }

  winrateoptions() {
    const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
    const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');
    const alignment = getComputedStyle(document.body).getPropertyValue('--Alignleft');
    return {
        plugins: {
            legend: {
                display: true,
                labels: {
                    alignment,
                    fontFamily,
                    fontColor: textColor,
                }
            }
        }
    };
  }

}
