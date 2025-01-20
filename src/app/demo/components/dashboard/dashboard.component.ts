import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Product } from '../../api/product';
import { ProductService } from '../../service/product.service';
import { Subscription, debounceTime } from 'rxjs';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit, OnDestroy {

    items!: MenuItem[];

    products!: Product[];

    chartData: any;

    chartOptions: any;

    subscription!: Subscription;
    test:any = window.location.pathname.split("/",3)
    url : any;
    url1 : any;
    url2 : any;
    url3 : any;
    url4 : any;
    url5 : any;
    url6 : any;

    constructor(private productService: ProductService, public layoutService: LayoutService) {
        this.subscription = this.layoutService.configUpdate$
        .pipe(debounceTime(25))
        .subscribe((config) => {
            this.initChart();
        });
        this.test = "/"+this.test[1]+"/"+this.test[2]+"/"
        console.log(this.test);
        this.url = "https://ecoleentreprise.sec.gouv.sn";
        this.url1 = "https://pf2e.taktyl.io/page/dashboard?id=L1JobkdyUElOb1Z2NGlyb1JlMVhQQT09&add";
        this.url2="https://pf2e.sn";
        this.url3="https://pf2e.sn/mail/";
        this.url4="https://pf2e.taktyl.io/gstock/dashboard?id=L1JobkdyUElOb1Z2NGlyb1JlMVhQQT09&add_g";
        this.url5="https://pf2e.taktyl.io/page/budget?id=L1JobkdyUElOb1Z2NGlyb1JlMVhQQT09";
        this.url6="https://pf2e.taktyl.io/page/conge_annuel?id=L1JobkdyUElOb1Z2NGlyb1JlMVhQQT09&add";
        //https://pf2e.sn/portailweb//http/ecoleentreprise.sec.gouv.sn
        //window.location.protocol=='https:'?this.url=this.url=window.location.origin+ this.test +"http/ecoleentreprise.sec.gouv.sn":this.url='http://ecoleentreprise.sec.gouv.sn';
        //window.location.protocol=='https:'?this.url=this.url=window.location.origin+ this.test +"https://pf2e.sn/portailweb//http/ecoleentreprise.sec.gouv.sn":this.url='https://pf2e.sn/portailweb//http/ecoleentreprise.sec.gouv.sn';
        //window.location.protocol=='https:'?this.url1=this.url1=window.location.origin+ this.test +"https://pf2e.taktyl.io/page/dashboard?id=L1JobkdyUElOb1Z2NGlyb1JlMVhQQT09&add":this.url1='https://pf2e.taktyl.io/page/dashboard?id=L1JobkdyUElOb1Z2NGlyb1JlMVhQQT09&add';
        //window.location.protocol=='https:'?this.url2=this.url2=window.location.origin+ this.test +"http/pf2e.sn":this.url2='http://pf2e.sn';
        //window.location.protocol=='https:'?this.url3=this.url3=window.location.origin+ this.test +"http/pf2e.sn/mail":this.url3='http://pf2e.sn/mail';
        //window.location.protocol=='https:'?this.url4=this.url4=window.location.origin+ this.test +"https://pf2e.taktyl.io/gstock/dashboard?id=L1JobkdyUElOb1Z2NGlyb1JlMVhQQT09&add_g":this.url4='https://pf2e.taktyl.io/gstock/dashboard?id=L1JobkdyUElOb1Z2NGlyb1JlMVhQQT09&add_g';
        //window.location.protocol=='https:'?this.url5=this.url5=window.location.origin+ this.test +"https://pf2e.taktyl.io/page/budget?id=L1JobkdyUElOb1Z2NGlyb1JlMVhQQT09":this.url5='https://pf2e.taktyl.io/page/budget?id=L1JobkdyUElOb1Z2NGlyb1JlMVhQQT09';
        //console.log(this.url);
    }

    ngOnInit() {
        this.initChart();
        this.productService.getProductsSmall().then(data => this.products = data);

        this.items = [
            { label: 'Add New', icon: 'pi pi-fw pi-plus' },
            { label: 'Remove', icon: 'pi pi-fw pi-minus' }
        ];
    }

    initChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--bluegray-700'),
                    borderColor: documentStyle.getPropertyValue('--bluegray-700'),
                    tension: .4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    backgroundColor: documentStyle.getPropertyValue('--green-600'),
                    borderColor: documentStyle.getPropertyValue('--green-600'),
                    tension: .4
                }
            ]
        };

        this.chartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
