import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {HttpClient} from "@angular/common/http";
import {delay, forkJoin} from "rxjs";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {MylibModule} from "@CompoLib";

@Component({
  standalone: true,
  selector: 'ot-lib-test',
  templateUrl: './test.component.html',
  styleUrls: ['./style.scss'],
  imports: [CommonModule, RouterModule, MylibModule, MatCardModule, MatButtonModule, MatInputModule, MatProgressSpinnerModule],
})
export default class TestComponent implements OnInit {
  private http = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  public loading: boolean = false

  svgLink: string = 'https://raw.githubusercontent.com/powsybl/powsybl-network-viewer/main/demo/src/diagram-viewers/data/nad-four-substations.svg';//sld/sld-example.svg';
  metadataLink: string = 'https://raw.githubusercontent.com/powsybl/powsybl-network-viewer/main/demo/src/diagram-viewers/data/nad-four-substations_metadata.json';//sld/sld-example_metadata.json';
  svgContent: string | null = null;
  metadata: any = null;

  diagram$ = forkJoin({
    svg: this.http.get(this.svgLink, { responseType: 'text' }),
    metadata: this.http.get<any>(this.metadataLink),
  });

  ngOnInit(): void {
    this.loading = true;
    this.diagram$
        .pipe(delay(500))
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(({ svg, metadata }) => {
      this.svgContent = svg;
      this.metadata = metadata;
      this.loading = false;
    });
  }
}
