import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Inicio',
                items: [
                    {
                        label: 'Administracion',
                        icon: 'pi pi-fw pi-cog',
                        items: [
                            {
                                label: 'Tablas basicas',
                                items: [
                                    {
                                        label: 'Barrios',

                                        routerLink: ['/pages/barrios']
                                    },
                                    {
                                        label: 'Ciudades',

                                        routerLink: ['/pages/ciudades']
                                    },
                                    {
                                        label: 'Zonas',

                                        routerLink: ['/pages/zonas']
                                    },
                                    {
                                        label: 'Zonas prestamos',

                                        routerLink: ['/pages/zonas-prestamos']
                                    },
                                    {
                                        label: 'Tipos de clientes',

                                        routerLink: ['/pages/tipos-cliente']
                                    },
                                    {
                                        label: 'Clientes',

                                        routerLink: ['/pages/clientes']
                                    },
                                    {
                                        label: 'Fiadores',

                                        routerLink: ['/pages/fiadores']
                                    },
                                    {
                                        label: 'Responsables',

                                        routerLink: ['/pages/responsables']
                                    },
                                    {
                                        label: 'Rutas',

                                        routerLink: ['/pages/rutas']
                                    },
                                    {
                                        label: 'Inconsistencias',

                                        routerLink: ['/pages/inconsistencias']
                                    },
                                    {
                                        label: 'Bancos',

                                        routerLink: ['/pages/bancos']
                                    },
                                    {
                                        label: 'Check list',

                                        routerLink: ['/pages/check-list']
                                    },
                                    {
                                        label: 'Empleados',

                                        routerLink: ['/pages/empleados']
                                    },

                                ]
                            },

                            {
                                label: 'Seguridad',

                                routerLink: ['/auth/access']
                            },
                            {
                                label: 'Parametros del sistema',

                                routerLink: ['/pages/bancos']
                            },
                            {
                                label: 'Exportar ruta',

                                routerLink: ['/auth/access']
                            },
                            {
                                label: 'Cargar movimiento',

                                routerLink: ['/pages/empty']
                            },
                            {
                                label: 'Validar comentarios',

                                routerLink: ['/auth/error']
                            },

                        ]
                    },
                ]
            },

            {
                label: 'Paginas',
                icon: 'pi pi-fw pi-briefcase',
                items: [

                    {
                        label: 'Movimientos',
                        icon: 'pi pi-fw pi-dollar',
                        items: [
                            {
                                label: 'Registro de prestamos',

                                routerLink: ['/pages/crud']
                            },
                            {
                                label: 'Actulizacion de prestamos',

                                routerLink: ['/pages/empty']
                            },
                            {
                                label: 'Alertas',

                                routerLink: ['/auth/access']
                            },
                            {
                                label: 'Recaudo',

                                routerLink: ['/pages/empty']
                            },
                            {
                                label: 'Notificaciones',

                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Rutas',
                                routerLink: ['/auth/access'],


                            },
                            {
                                label: 'Cuentas bancarias',
                                items: [
                                    {
                                        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                                        items: [
                                            {
                                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                                items: [
                                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                                                ]
                                            },
                                            {
                                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                                items: [
                                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                                        items: [
                                            {
                                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                                items: [
                                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                                                ]
                                            },
                                            {
                                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                                items: [
                                                    { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                                                ]
                                            },


                                        ]
                                    }
                                ]
                            },
                            {
                                label: 'Consultas',
                                items: [
                                    {
                                        label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                                        items: [
                                            {
                                                label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                                items: [
                                                    { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                                                ]
                                            },
                                            {
                                                label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                                items: [
                                                    { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                                        items: [
                                            {
                                                label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                                items: [
                                                    { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                                    { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                                                ]
                                            },
                                            {
                                                label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                                items: [
                                                    { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                                                ]
                                            },


                                        ]
                                    }
                                ]
                            },
                        ]
                    },

                    {
                        label: 'Reportes',
                        icon: 'pi pi-fw pi-chart-line',
                        items: [
                            {
                                label: 'Prestamos emitidos',

                                routerLink: ['/pages/empty']
                            },
                            {
                                label: 'Recaudo diario',

                                routerLink: ['/pages/empty']
                            },
                            {
                                label: 'Recaudo por ruta',

                                routerLink: ['/pages/empty']
                            },
                            {
                                label: 'Liquidacion por usuario',

                                routerLink: ['/pages/empty']
                            },
                            {
                                label: 'Canceladas',

                                routerLink: ['/pages/empty']
                            },
                            {
                                label: 'Balance',

                                routerLink: ['/pages/empty']
                            },
                            {
                                label: 'Para Recaudo',

                                routerLink: ['/pages/empty']
                            },
                            {
                                label: 'Confirmacion de Prestamos',

                                routerLink: ['/pages/empty']
                            },
                            {
                                label: 'Datos Inconsisistentes',

                                routerLink: ['/pages/empty']
                            },

                        {
                            label: 'Cartera',
                            items: [
                                {
                                    label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {
                                            label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                                            items: [
                                                { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                                                { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                                { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
                                            ]
                                        },
                                        {
                                            label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                                            items: [
                                                { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                                    items: [
                                        {
                                            label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                                            items: [
                                                { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                                                { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
                                            ]
                                        },
                                        {
                                            label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                                            items: [
                                                { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
                                            ]
                                        },
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'Listados de clientes',

                            routerLink: ['/auth/login']
                        },
                        {
                            label: 'Listado de clientes por barrio',

                            routerLink: ['/auth/error']
                        },
                        ]
                    },


                    {
                        label: 'Ayuda',
                        icon: 'pi pi-fw pi-question-circle',
                        routerLink: ['/landing']
                    },

                ]
            },


        ];
    }
}

