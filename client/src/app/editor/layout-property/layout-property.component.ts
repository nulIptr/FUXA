import { Component, OnInit, Inject } from '@angular/core';
import { DndDropEvent, DropEffect } from 'ngx-drag-drop';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { LayoutSettings, NaviModeType, NaviItem, NaviItemType } from '../../_models/hmi';
import { Define } from '../../_helpers/define';

@Component({
    selector: 'app-layout-property',
    templateUrl: './layout-property.component.html',
    styleUrls: ['./layout-property.component.css']
})
export class LayoutPropertyComponent implements OnInit {

    draggableListLeft = [];
    layout: any;
    horizontalLayoutActive: boolean = false;
    private currentDraggableEvent: DragEvent;
    private readonly verticalLayout = {
        container: "row",
        list: "column",
        dndHorizontal: false
    };
    private readonly horizontalLayout = {
        container: "row",
        list: "row",
        dndHorizontal: true
    };


    startView: string;
    sideMode: string;
    navMode: any;
    navType: any;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialog) {
        if (!data.layout) {
            data.layout = new LayoutSettings();
        }
        this.startView = data.layout.start;
        this.sideMode = data.layout.navigation.mode;
        if (!data.layout.navigation.items) {
            data.layout.navigation.items = [];
        }
        this.draggableListLeft = data.layout.navigation.items;
        this.setHorizontalLayout(this.horizontalLayoutActive);
    }

    ngOnInit() {
        this.navMode = NaviModeType;
        this.navType = NaviItemType;

    }

    onAddMenuItem(item) {
        let eitem = new NaviItem();
        if (item) {
            eitem = JSON.parse(JSON.stringify(item));
        }
        let views = JSON.parse(JSON.stringify(this.data.views));
        views.unshift({id: '', name: ''});
        let dialogRef = this.dialog.open(DialogMenuItem, {
            minWidth: '350px',
            data: { item: eitem, views: views },
            position: { top: '90px' }
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                if (item) {
                    item.icon = result.item.icon;
                    item.text = result.item.text;
                    item.view = result.item.view;
                    item.link = result.item.link;
                    if (item.view) {
                        item.link = '';
                    }
                } else {
                    let nitem = new NaviItem();
                    nitem.icon = result.item.icon;
                    nitem.text = result.item.text;
                    nitem.view = result.item.view;
                    nitem.link = result.item.link;
                    if (nitem.view) {
                        nitem.link = '';
                    }
                    this.draggableListLeft.push(nitem);
                }
            }
        });
        // this.winRef.nativeWindow.svgEditor.showDocProperties();
    }

    onRemoveMenuItem(index: number, item) {
        this.draggableListLeft.splice(index, 1);
    }

    onDragStart(event: DragEvent) {

        this.currentDraggableEvent = event;
    }

    setHorizontalLayout(horizontalLayoutActive: boolean) {
        this.layout = (horizontalLayoutActive) ? this.horizontalLayout : this.verticalLayout;
    }

    onDragged(item: any, list: any[], effect: DropEffect) {
        if (effect === "move") {
            const index = list.indexOf(item);
            list.splice(index, 1);
        }
    }

    onDragEnd(event: DragEvent) {

        this.currentDraggableEvent = event;
    }

    onDrop(event: DndDropEvent, list?: any[]) {
        if (list && (event.dropEffect === "copy" || event.dropEffect === "move")) {
            let index = event.index;
            if (typeof index === "undefined") {
                index = list.length;
            }
            list.splice(index, 0, event.data);
        }
    }

    onOkClick() {
        this.data.layout.navigation.items = [];
        this.draggableListLeft.forEach(item => {
            let nitem = new NaviItem();
            nitem.icon = item.icon;
            nitem.text = item.text;
            nitem.view = item.view;
            nitem.link = item.link;
            this.data.layout.navigation.items.push(nitem);            
        })
    }

    getViewName(vid: NaviItem) {
        if (vid.view) {
            const view = this.data.views.find(x=>x.id === vid.view);
            if (view) {
                return view.name;
            }
        } else if (vid.link) {
            return vid.link;
        } else {
            return '';
        }
    }
}

@Component({
    selector: 'dialog-menuitem',
    templateUrl: './menuitem.dialog.html',
})
export class DialogMenuItem {
    // defaultColor = Utils.defaultColor;

    icons = Define.materialIcons;
    constructor(
        public dialogRef: MatDialogRef<DialogMenuItem>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onOkClick(): void {
        this.dialogRef.close(true);
    }

}