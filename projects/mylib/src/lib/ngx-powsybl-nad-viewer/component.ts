import { Component, ElementRef, EventEmitter, Input, NgZone, Output, SimpleChanges, ViewChild, inject } from '@angular/core';

import * as v37 from '../../../../network-viewer-core-3.7.0/dist/powsybl-network-viewer-core.js';
import * as v38 from '../../../../network-viewer-core-3.8.0/dist/index';
type NetworkAreaDiagramViewer = typeof v37.NetworkAreaDiagramViewer | v38.NetworkAreaDiagramViewer;

@Component({
  selector: 'ngx-powsybl-nad-viewer',
  templateUrl: './template.html',
  styleUrls: ['./styles.scss']
})
export class NgxPowsyblNadViewerComponent {

  @Input() coreVersion: '3.7.0' | '3.8.0' = '3.7.0';
  @Input({required: false}) showVersion: boolean = true;

  @Input({ required: true }) svgContent: string | null;
  @Input() metadata: any;
  @Input() options: any;

  @Output() viewerReady = new EventEmitter<NetworkAreaDiagramViewer>();

  @ViewChild('host', { static: true }) private host!: ElementRef<HTMLDivElement>;
  private zone = inject(NgZone);
  private viewer?: InstanceType<typeof v37.NetworkAreaDiagramViewer> | InstanceType<typeof v38.NetworkAreaDiagramViewer>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['version'] ||changes['svgContent'] || changes['metadata'] || changes['options']) {
      this.createViewer();
    }
  }

  ngOnDestroy(): void {
    this.viewer = undefined;
  }

  private createViewer(): void {
    this.viewer = undefined;
    if (!this.svgContent) return;
    this.viewer = this.zone.runOutsideAngular(() => {
      const { NetworkAreaDiagramViewer } = this.coreVersion === '3.7.0' ? v37 : v38;
     return new NetworkAreaDiagramViewer(this.host.nativeElement, this.svgContent!, this.metadata, { ...this.options });
    });
  }

}
