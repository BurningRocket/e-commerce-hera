import { Component } from '@angular/core';
import { NodeService } from '../../../../interfaces/nodeservice';

@Component({
  selector: 'app-header-tree-select',
  templateUrl: './header-tree-select.component.html',
  styleUrl: './header-tree-select.component.css'
})
export class HeaderTreeSelectComponent {
    nodes!: any[];
    selectedNodes: any;

    constructor(private nodeService: NodeService) {
        this.nodeService.getFiles().then((files) => (this.nodes = files));
    }
}
