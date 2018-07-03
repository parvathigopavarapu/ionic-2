import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

import { Chart } from 'chart.js';


@Component({
  selector: 'page-charts',
  templateUrl: 'charts.html'
})
export class ChartsPage {


  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  @ViewChild('pieCanvas') pieCanvas;
  menu: any = null;
  barChart: any;
  doughnutChart: any;
  lineChart: any;
  pieChart: any;

  // dataprovider: Array<{ value: number }>
  title = [];
  constructor(public navCtrl: NavController, public dataProvider: DataProvider) {
    // dataProvider.getMenu().then((menu) => {
    //   this.menu = menu;
    // alert(this.menu)
    // });

  }
  getItems() {

  }

  ionViewDidLoad() {

    this.dataProvider.getMenu().then((menu) => {
      this.menu = menu;
      let datatitle: number[] = new Array(this.menu.length)
      let datacount: number[] = new Array(this.menu.length)
      for (let i = 0; i < this.menu.length; i++) {
        for (let j = 0; j < this.menu.length; j++) {
          datatitle[j] = this.menu[j].name
          datacount[j] = this.menu[j].items.length;

        }
      }

      this.barChart = new Chart(this.barCanvas.nativeElement, {
        type: 'bar',
        data: {
          labels: datatitle,
          datasets: [{
            label: '# of items',
            data: datacount,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },

        options: {
          tooltips: {
            enabled: true
          },
          events: {

            touched: false
          },

          animation: {
            onComplete: function () {
              //  var ctx = this.chart.ctx;
              let ctx = this.canvas.getContext('2d');
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";

              var chart = this;
              var datasets = this.config.data.datasets;
              // chart.defaults.global.showTooltips = false;

              datasets.forEach(function (dataset, i) {

                ctx.font = "40px";

                ctx.fillStyle = "black";

                chart.getDatasetMeta(i).data.forEach(function (p, j) {

                  ctx.fillText(datasets[i].data[j], p._model.x, p._model.y - 5);

                });

              })

            }


          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }

      });



      this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
        type: 'doughnut',
        data: {
          labels: datatitle,
          datasets: [{
            label: '# of Votes',
            data: datacount,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            hoverBackgroundColor: [
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF6384",
              "#36A2EB",
              "#FFCE56"
            ]
          }]
        },
        options: {
          animation: {
            onComplete: function () {
              let ctx: CanvasRenderingContext2D = this.canvas.getContext("2d");
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              var chart = this;
             
              var datasets = this.config.data.datasets;
              datasets.forEach(function (dataset, i) {

                ctx.font = "20px ";

                ctx.fillStyle = "black";
              //   chart.labels().position('outside');
                chart.getDatasetMeta(i).data.forEach(function (p, j) {
                //  var text = "82%",
                //  textX = Math.round((p._model.x - this.chart.ctx.measureText(text).width) / 2),
                //  textY = p._model.y / 2;
                  //  ctx.arc(p._model.x, p._model.y, 20, 0, 2 * Math.PI);
                //  textY = p._model.y / 2;
                  ctx.fillText(datasets[i].data[j],  Math.round((p._model.x - chart.ctx.measureText(datasets[i].data[j]).width) / 2), p._model.y);
                });
              })
            }
          }
        },

      });//doughnut ends
      this.lineChart = new Chart(this.lineCanvas.nativeElement, {
        type: 'line',
        data: {
          labels: datatitle,
          datasets: [{
            label: '# of items',
            data: datacount,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          animation: {
            onComplete: function () {
              var ctx = this.chart.ctx;
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              var chart = this;
              var datasets = this.config.data.datasets;


              datasets.forEach(function (dataset, i) {

                ctx.font = "20px";

                ctx.fillStyle = "black";
                chart.getDatasetMeta(i).data.forEach(function (p, j) {
                  ctx.fillText(datasets[i].data[j], p._model.x, p._model.y - 20);
                });

              })

            }

          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }

      }); //line chart ends

      /*      this.pieChart = new Chart(this.pieCanvas.nativeElement, {
              type: 'pie',
              data: {
                labels: datatitle,
                datasets: [{
                  label: '# of items',
                  data: datacount,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                  ],
                  borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
                }]
              },
              options: {
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true
                    }
                  }]
                }
              }
      
            });*/

    });

  }

}



/**/


