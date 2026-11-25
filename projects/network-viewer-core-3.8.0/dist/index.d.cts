import { Point, Svg, ViewBoxLike } from "@svgdotjs/svg.js";
import "@svgdotjs/svg.panzoom.js";
/**
 * Copyright (c) 2024, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * SPDX-License-Identifier: MPL-2.0
 */
interface DiagramMetadata {
  layoutParameters: LayoutParametersMetadata;
  svgParameters: SvgParametersMetadata;
  busNodes: BusNodeMetadata[];
  nodes: NodeMetadata[];
  injections?: InjectionMetadata[];
  edges: EdgeMetadata[];
  textNodes: TextNodeMetadata[];
}
interface LayoutParametersMetadata {
  textNodesForceLayout: boolean;
  textNodeFixedShift: PointMetadata;
  textNodeEdgeConnectionYShift: number;
  maxSteps: number;
  timeoutSeconds: number;
  injectionsAdded: boolean;
  scaleFactor: number;
}
interface SvgParametersMetadata {
  diagramPadding: DiagramPaddingMetadata;
  voltageLevelCircleRadius: number;
  interAnnulusSpace: number;
  transformerCircleRadius: number;
  edgesForkAperture: number;
  edgesForkLength: number;
  arrowShift: number;
  arrowLabelShift: number;
  converterStationWidth: number;
  nodeHollowWidth: number;
  unknownBusNodeExtraRadius: number;
  fictitiousVoltageLevelCircleRadius: number;
  powerValuePrecision: number;
  currentValuePrecision: number;
  angleValuePrecision: number;
  voltageValuePrecision: number;
  insertNameDesc: boolean;
  cssLocation: string;
  arrowPathIn: string;
  arrowPathOut: string;
  svgWidthAndHeightAdded: boolean;
  sizeConstraint: string;
  fixedWidth: number;
  fixedHeight: number;
  fixedScale: number;
  edgeStartShift: number;
  loopDistance: number;
  loopEdgesAperture: number;
  loopControlDistance: number;
  edgeInfoAlongEdge: boolean;
  svgPrefix: string;
  languageTag: string;
  percentageValuePrecision: number;
  pstArrowHeadSize: number;
  undefinedValueSymbol: string;
  highlightGraph: boolean;
  injectionAperture: number;
  injectionEdgeLength: number;
  injectionCircleRadius: number;
  voltageLevelLegendsIncluded: boolean;
  edgeInfosIncluded: boolean;
  doubleArrowShiftFactorArrows: number;
  doubleArrowShiftFactorText: number;
}
interface DiagramPaddingMetadata {
  left: number;
  top: number;
  right: number;
  bottom: number;
}
interface BusNodeMetadata {
  svgId: string;
  equipmentId: string;
  nbNeighbours: number;
  index: number;
  vlNode: string;
  legend?: string;
  classes?: string[];
  style?: string;
}
interface NodeMetadata {
  svgId: string;
  equipmentId: string;
  x: number;
  y: number;
  fictitious?: boolean;
  legendSvgId?: string;
  legendEdgeSvgId?: string;
  legendHeader?: string[];
  legendFooter?: string[];
  invisible?: boolean;
  type?: string;
  unknownBus?: boolean;
  classes?: string[];
}
interface EdgeMetadata {
  svgId: string;
  equipmentId: string;
  node1: string;
  node2: string;
  busNode1: string;
  busNode2: string;
  type: string;
  bendingPoints?: PointMetadata[];
  edgeInfoMiddle?: EdgeInfoMetadata;
  edgeInfo1?: EdgeInfoMetadata;
  edgeInfo2?: EdgeInfoMetadata;
  invisible1?: boolean;
  invisible2?: boolean;
  side?: string;
  classes1?: string[];
  classes2?: string[];
  style1?: string;
  style2?: string;
}
interface PointMetadata {
  x: number;
  y: number;
}
interface TextNodeMetadata {
  svgId: string;
  equipmentId: string;
  vlNode: string;
  shiftX: number;
  shiftY: number;
  connectionShiftX: number;
  connectionShiftY: number;
}
interface InjectionMetadata {
  svgId: string;
  equipmentId: string;
  componentType: string;
  busNodeId: string;
  vlNodeId: string;
  edgeInfo?: EdgeInfoMetadata;
}
interface EdgeInfoMetadata {
  svgId: string;
  infoTypeA?: string;
  infoTypeB?: string;
  direction?: string;
  directionA?: string;
  directionB?: string;
  labelA?: string;
  labelB?: string;
  componentType?: string;
}
declare enum EdgeInfoEnum {
  ACTIVE_POWER = 0,
  REACTIVE_POWER = 1,
  CURRENT = 2,
  NAME = 3,
  PERMANENT_LIMIT_PERCENTAGE = 4
}
type DiagramPadding = {
  left: number;
  top: number;
  right: number;
  bottom: number;
};
declare enum CssLocationEnum {
  INSERTED_IN_SVG = 0,
  EXTERNAL_IMPORTED = 1,
  EXTERNAL_NO_IMPORT = 2
}
declare class SvgParameters {
  static readonly VOLTAGE_LEVEL_CIRCLE_RADIUS_DEFAULT = 30;
  static readonly INTER_ANNULUS_SPACE_DEFAULT = 5;
  static readonly TRANSFORMER_CIRCLE_RADIUS_DEFAULT = 20;
  static readonly EDGES_FORK_APERTURE_DEFAULT = 60;
  static readonly EDGES_FORK_LENGTH_DEFAULT = 80;
  static readonly ARROW_SHIFT_DEFAULT = 30;
  static readonly ARROW_LABEL_SHIFT_DEFAULT = 19;
  static readonly CONVERTER_STATION_WIDTH_DEFAULT = 70;
  static readonly NODE_HOLLOW_WIDTH_DEFAULT = 15;
  static readonly UNKNOWN_BUS_NODE_EXTRA_RADIUS_DEFAULT = 10;
  static readonly FICTITIOUS_VOLTAGE_LEVEL_CIRCLE_RADIUS_DEFAULT = 15;
  static readonly EDGE_INFO_DISPLAYED_DEFAULT = EdgeInfoEnum.ACTIVE_POWER;
  static readonly POWER_VALUE_PRECISION_RADIUS_DEFAULT = 0;
  static readonly CURRENT_VALUE_PRECISION_DEFAULT = 0;
  static readonly ANGLE_VALUE_PRECISION_DEFAULT = 1;
  static readonly VOLTAGE_VALUE_PRECISION_DEFAULT = 1;
  static readonly PERCENTAGE_VALUE_PRECISION_DEFAULT = 0;
  static readonly DIAGRAM_PADDING_LEFT_DEFAULT = 200;
  static readonly DIAGRAM_PADDING_TOP_DEFAULT = 200;
  static readonly DIAGRAM_PADDING_RIGHT_DEFAULT = 200;
  static readonly DIAGRAM_PADDING_BOTTON_DEFAULT = 200;
  static readonly CSS_LOCATION_DEFAULT = CssLocationEnum.EXTERNAL_NO_IMPORT;
  static readonly ARROW_PATH_IN_DEFAULT = "M-10 -10 H10 L0 10z";
  static readonly ARROW_PATH_OUT_DEFAULT = "M-10 10 H10 L0 -10z";
  static readonly DOUBLE_ARROW_SHIFT_FACTOR_ARROWS_DEFAULT = 1.5;
  static readonly DOUBLE_ARROW_SHIFT_FACTOR_TEXT_DEFAULT = 1.8;
  svgParametersMetadata: SvgParametersMetadata | undefined;
  constructor(svgParametersMetadata: SvgParametersMetadata | undefined);
  getVoltageLevelCircleRadius(): number;
  getInterAnnulusSpace(): number;
  getTransformerCircleRadius(): number;
  getEdgesForkAperture(): number;
  getEdgesForkLength(): number;
  getArrowShift(): number;
  getArrowLabelShift(): number;
  getArrowPathIn(): string;
  getArrowPathOut(): string;
  getConverterStationWidth(): number;
  getNodeHollowWidth(): number;
  getUnknownBusNodeExtraRadius(): number;
  getFictitiousVoltageLevelCircleRadius(): number;
  getEdgeInfoDisplayed(edgeInfoType: string | undefined): EdgeInfoEnum;
  getPowerValuePrecision(): number;
  getCurrentValuePrecision(): number;
  getAngleValuePrecision(): number;
  getVoltageValuePrecision(): number;
  getPercentageValuePrecision(): number;
  getDiagramPadding(): DiagramPadding;
  getCssLocation(): CssLocationEnum;
  getDoubleArrowShiftFactorArrows(): number;
  getDoubleArrowShiftFactorText(): number;
}
declare class LayoutParameters {
  static readonly TEXT_NODE_EDGE_CONNECTION_Y_SHIFT_DEFAULT = 25;
  layoutParametersMetadata: LayoutParametersMetadata | undefined;
  constructor(layoutParametersMetadata: LayoutParametersMetadata | undefined);
  getTextNodeEdgeConnectionYShift(): number;
}
/**
 * Copyright (c) 2026, RTE (http://www.rte-france.com)
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 * SPDX-License-Identifier: MPL-2.0
 */
interface LibraryComponent {
  type: string;
  size: ComponentSize;
  subComponents: SubComponents[];
  styleClass: string;
}
interface ComponentSize {
  width: number;
  height: number;
}
interface SubComponents {
  name: string;
  fileName: string;
}
type OnMoveNodeCallbackType = (equipmentId: string, nodeId: string, x: number, y: number, XOrig: number, yOrig: number) => void;
type OnMoveTextNodeCallbackType = (equipmentId: string, vlNodeId: string, textNodeId: string, shiftX: number, shiftY: number, shiftXOrig: number, shiftYOrig: number, connectionShiftX: number, connectionShiftY: number, connectionShiftXOrig: number, connectionShiftYOrig: number) => void;
type OnSelectNodeCallbackType = (equipmentId: string, nodeId: string, mousePosition: Point) => void;
type OnToggleNadHoverCallbackType = (hovered: boolean, mousePosition: Point | null, equipmentId: string, equipmentType: string) => void;
type OnRightClickCallbackType = (svgId: string, equipmentId: string, equipmentType: string, mousePosition: Point) => void;
type OnBendLineCallbackType = (svgId: string, equipmentId: string, equipmentType: string, linePoints: Point[] | null, lineOperation: string) => void;
interface AdaptiveTextZoomOptions {
  enabled?: boolean;
  threshold?: number;
  edgeSideLabelThreshold?: number;
  edgeMiddleLabelThreshold?: number;
  edgeMiddleArrowThreshold?: number;
}
interface NadViewerParametersOptions {
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  enableDragInteraction?: boolean;
  enableLevelOfDetail?: boolean;
  zoomLevels?: number[];
  addButtons?: boolean;
  onMoveNodeCallback?: OnMoveNodeCallbackType | null;
  onMoveTextNodeCallback?: OnMoveTextNodeCallbackType | null;
  onSelectNodeCallback?: OnSelectNodeCallbackType | null;
  onToggleHoverCallback?: OnToggleNadHoverCallbackType | null;
  onRightClickCallback?: OnRightClickCallbackType | null;
  onBendLineCallback?: OnBendLineCallbackType | null;
  initialViewBox?: ViewBoxLike;
  hoverPositionPrecision?: number | null;
  adaptiveTextZoom?: AdaptiveTextZoomOptions;
  componentLibrary?: LibraryComponent[];
  svgUrlResolver?: (fileName: string) => string;
}
declare class NadViewerParameters {
  static readonly MIN_WIDTH_DEFAULT = 500;
  static readonly MIN_HEIGHT_DEFAULT = 600;
  static readonly MAX_WIDTH_DEFAULT = 1000;
  static readonly MAX_HEIGHT_DEFAULT = 1200;
  static readonly ENABLE_DRAG_INTERACTION_DEFAULT = false;
  static readonly ENABLE_LEVEL_OF_DETAIL_DEFAULT = false;
  static readonly ZOOM_LEVELS_DEFAULT: number[];
  static readonly ADD_BUTTONS_DEFAULT = false;
  static readonly HOVER_POSITION_PRECISION_DEFAULT = 10;
  static readonly ENABLE_ADAPTIVE_ZOOM_DEFAULT = false;
  static readonly THRESHOLD_ADAPTIVE_ZOOM_DEFAULT = 3000;
  nadViewerParametersOptions: NadViewerParametersOptions | undefined;
  constructor(nadViewerParametersOptions: NadViewerParametersOptions | undefined);
  getMinWidth(): number;
  getMinHeight(): number;
  getMaxWidth(): number;
  getMaxHeight(): number;
  getEnableDragInteraction(): boolean;
  getEnableLevelOfDetail(): boolean;
  getZoomLevels(): number[];
  getAddButtons(): boolean;
  getOnMoveNodeCallback(): OnMoveNodeCallbackType | null;
  getOnMoveTextNodeCallback(): OnMoveTextNodeCallbackType | null;
  getOnSelectNodeCallback(): OnSelectNodeCallbackType | null;
  getOnToggleHoverCallback(): OnToggleNadHoverCallbackType | null;
  getOnRightClickCallback(): OnRightClickCallbackType | null;
  getOnBendingLineCallback(): OnBendLineCallbackType | null;
  getInitialViewBox(): ViewBoxLike | undefined;
  getHoverPositionPrecision(): number;
  getAdaptiveTextZoom(): Required<AdaptiveTextZoomOptions>;
  getComponentLibrary(): LibraryComponent[] | undefined;
  getSvgUrlResolver(): ((fileName: string) => string) | undefined;
}
type Dimensions = {
  width: number;
  height: number;
  viewbox: ViewBox;
};
type ViewBox = {
  x: number;
  y: number;
  width: number;
  height: number;
};
interface Cancelable {
  cancel(): void;
  flush(): void;
}
type BranchState = {
  branchId: string;
  value1: number | string;
  value2: number | string;
  connected1: boolean;
  connected2: boolean;
  connectedBus1: string;
  connectedBus2: string;
};
type VoltageLevelState = {
  voltageLevelId: string;
  busValue: {
    busId: string;
    voltage: number;
    angle: number;
  }[];
};
declare enum DraggedElementType {
  VOLTAGE_LEVEL_NODE = 0,
  TEXT_NODE = 1,
  BENT_SQUARE = 2
}
declare class NetworkAreaDiagramViewer {
  static readonly DEFAULT_PNG_BACKGROUND_COLOR = "white";
  container: HTMLElement;
  svgDiv: HTMLElement;
  svgContent: string;
  diagramMetadata: DiagramMetadata | null;
  width: number;
  height: number;
  originalWidth: number;
  originalHeight: number;
  svgDraw: Svg | undefined;
  innerSvg: SVGElement | undefined;
  textNodesSection: SVGElement | undefined;
  textEdgesSection: SVGElement | undefined;
  edgeInfosSection: SVGElement | undefined;
  ratio: number;
  selectedElement: SVGGraphicsElement | null;
  draggedElement: SVGGraphicsElement | null;
  hoveredElement: SVGElement | null;
  hoveredElementPosition: Point;
  transform: SVGTransform | undefined;
  ctm: DOMMatrix | null | undefined;
  initialPosition: Point | null;
  svgParameters: SvgParameters;
  layoutParameters: LayoutParameters;
  nadViewerParameters: NadViewerParameters;
  edgeAngles1: Map<string, number>;
  edgeAngles2: Map<string, number>;
  draggedElementType: DraggedElementType | null;
  enableDragInteraction: boolean;
  isDragging: boolean;
  cursorOverlayRect: SVGRectElement | null;
  endTextEdge: Point;
  onMoveNodeCallback: OnMoveNodeCallbackType | null;
  onMoveTextNodeCallback: OnMoveTextNodeCallbackType | null;
  onSelectNodeCallback: OnSelectNodeCallbackType | null;
  onToggleHoverCallback: OnToggleNadHoverCallbackType | null;
  debounceToggleHoverCallback: (OnToggleNadHoverCallbackType | null) & Cancelable;
  previousMaxDisplayedSize: number;
  edgesMap: Map<string, EdgeMetadata>;
  onRightClickCallback: OnRightClickCallbackType | null;
  originalNodePosition: Point;
  originalTextNodeShift: Point;
  originalTextNodeConnectionShift: Point;
  lastZoomLevel: number;
  zoomLevels: number[];
  isHoverCallbackUsed: boolean;
  hoverPositionPrecision: number;
  bendLines: boolean;
  onBendLineCallback: OnBendLineCallbackType | null;
  straightenedElement: SVGGraphicsElement | null;
  bendableLines: string[];
  linePointIndexMap: Map<string, {
    edgeId: string;
    index: number;
  }>;
  groupedEdgesIndexMap: Map<string, string[]> | null;
  nodeMap: Map<string, NodeMetadata> | null;
  componentLibrary: LibraryComponent[];
  static readonly ZOOM_CLASS_PREFIX = "nad-zoom-";
  /**
   * @param container - The HTML element that will contain the SVG diagram.
   * @param svgContent - The SVG content to be rendered in the viewer.
   * @param diagramMetadata - Metadata associated with the diagram, including nodes, edges, and other properties.
   * @param nadViewerParametersOptions - Parameters for the network area diagram viewer.
   */
  constructor(container: HTMLElement, svgContent: string, diagramMetadata: DiagramMetadata | null, nadViewerParametersOptions: NadViewerParametersOptions | null);
  setWidth(width: number): void;
  setOriginalWidth(originalWidth: number): void;
  setHeight(height: number): void;
  setOriginalHeight(originalHeight: number): void;
  setContainer(container: HTMLElement): void;
  setSvgContent(svgContent: string): void;
  getWidth(): number;
  getOriginalWidth(): number;
  getHeight(): number;
  getOriginalHeight(): number;
  getContainer(): HTMLElement;
  getSvgContent(): string;
  getViewBox(): ViewBoxLike | undefined;
  setViewBox(viewBox: ViewBoxLike): void;
  setPreviousMaxDisplayedSize(previousMaxDisplayedSize: number): void;
  getPreviousMaxDisplayedSize(): number;
  private getNodeIdFromEquipmentId;
  moveNodeToCoordinates(equipmentId: string, x: number, y: number): void;
  moveTextNodeToCoordinates(equipmentId: string, shiftX: number, shiftY: number, connectionShiftX: number, connectionShiftY: number): void;
  private hasNodeInteraction;
  init(): void;
  private getOrCreateTextNodesSection;
  private getOrCreateTextEdgesSection;
  private getOrCreateEdgeInfosSection;
  private initDebounceToggleHoverCallback;
  private getZoomButtonsBar;
  private getActionButtonsBar;
  getSvg(): string | null;
  getJsonMetadata(): string | null;
  getDimensionsFromSvg(): Dimensions | null;
  private enablePanzoom;
  private disablePanzoom;
  private onMouseLeftDown;
  private initSelection;
  private initDrag;
  private attachCursorOverlay;
  private detachCursorOverlay;
  private onDragStart;
  private onMouseMove;
  private updateNodeMetadata;
  private updateTextNodeMetadata;
  private updateElement;
  private existsNearbyHoveredElement;
  private onHover;
  private handleHoverCallBack;
  private resetHoverCallback;
  private onMouseLeftUpOrLeave;
  private resetMouseEventParams;
  private onDragEnd;
  private callMoveNodeCallback;
  private callMoveTextNodeCallback;
  private onSelectEnd;
  private getMousePosition;
  private getTranslation;
  private updateVoltageLevelText;
  private updateVoltageLevelNode;
  private updateNodePosition;
  private updateText;
  private updateTextNodePosition;
  private redrawTextEdge;
  private updateSvgElementPosition;
  private updateInjections;
  private updateEdges;
  private getEdgesMetadata;
  private addInjectionEdges;
  private addBusNodeEdge;
  private addInjectionEdge;
  private redrawEdgeGroup;
  private redrawEdge;
  private isThreeWtEdge;
  private redrawBranchEdge;
  private redrawHalfEdge;
  private getHalfEdgeNodeFromEdgeNode;
  private getHalfEdgeNode;
  private getHalfEdgeNodeFromEdgeElements;
  private redrawEdgeArrowAndLabels;
  private redrawArrows;
  private redrawLabel;
  private redrawMiddleEdgeArrowAndLabels;
  private redrawTransformer;
  private redrawTransformerCircle;
  private redrawTransformerArrow;
  private redrawConverterStation;
  private redrawLoopEdgeGroup;
  private redrawVoltageLevelNode;
  private getEdgeAngle;
  private getInjectionEdgeAngle;
  private redrawBusNode;
  private redrawBothVoltageLevelNodes;
  private redrawOtherVoltageLevelNode;
  private addBusNodeEdges;
  private redrawThreeWtEdge;
  private redrawBoundaryNode;
  private callSelectNodeCallback;
  getCurrentlyMaxDisplayedSize(): number;
  checkAndUpdateLevelOfDetail(): void;
  private getZoomLevel;
  private getNodeMap;
  private getElementsInViewbox;
  private createLegendBox;
  private createTextHeader;
  private createLegendEdge;
  private hasEdgeInfo;
  private getEdgeInfo;
  private hasTextNode;
  private hasTextEdge;
  private getHalfEdgesForEdgeInfos;
  private createEdgeInfos;
  private createEdgesInfos;
  private static readonly TRANSLATE_POINT_REGEX;
  private removeEdgeInfoItems;
  private filterLegends;
  private filterEdgeInfos;
  private updateAdaptiveEdgeInfos;
  private updateAdaptiveLegends;
  private adaptiveZoomViewboxUpdate;
  setJsonBranchStates(branchStates: string): void;
  private buildGroupedEdgesIndexMap;
  setBranchStates(branchStates: BranchState[]): void;
  setJsonVoltageLevelStates(voltageLevelStates: string): void;
  setVoltageLevelStates(voltageLevelStates: VoltageLevelState[]): void;
  private setBranchSideLabel;
  private updateEdgeInfoMetadata;
  private addBranchComponentElement;
  private addBranchArrowElement;
  private setBranchMiddleLabel;
  private addBranchMiddleArrowOrComponent;
  private addBranchMiddleLabels;
  private addBranchLabelElement;
  private getOrCreateEdgeInfo;
  private getOrCreateEdgeInfoArrow;
  private getOrCreateEdgeInfoText;
  private getOrCreateEdgeInfoComponent;
  private setBranchSideConnection;
  /**
   * Updates the connection between a branch and a bus in the electrical network diagram
   * @param edge - the edge to be modified
   * @param branchId - the ID of the branch
   * @param side - The side of the branch to connect ('1' or '2')
   * @param busId - The ID of the target bus to connect to
   */
  private setBranchBusConnection;
  private onMouseRightDown;
  zoomToFit(): void;
  zoomIn(): void;
  zoomOut(): void;
  saveSvg(): void;
  private downloadFile;
  private addStyle;
  private removeStyle;
  savePng(backgroundColor?: string): void;
  screenshot(backgroundColor?: string): void;
  private copyPng;
  private addBackgroundColor;
  private removeBackgroundColor;
  private copyToClipboard;
  private handleHighlightableElementHover;
  private handleInjectionHover;
  private handleEdgeHover;
  private highlightRelatedElements;
  private addHighlightBusClass;
  private addHighlightTextClass;
  private clearHighlights;
  private enableLineBending;
  private addLinePoint;
  private disableLineBending;
  private createEdgeBendPoint;
  private onStraightenStart;
  private updateEdgeMetadata;
  private updateEdgeMetadataWhenBending;
  private updateEdgeMetadataWhenStraightening;
  private redrawBentLine;
  private getHalfEdges;
  private onStraightenEnd;
  private callBendLineCallback;
  private showEdgePreviewPoints;
  private calculateEdgeSegmentMidpoints;
  private hideEdgePreviewPoints;
  syncViewBoxWith(others: NetworkAreaDiagramViewer | NetworkAreaDiagramViewer[]): void;
}
type DIMENSIONS = {
  width: number;
  height: number;
  viewbox: VIEWBOX;
};
type VIEWBOX = {
  x: number;
  y: number;
  width: number;
  height: number;
};
interface SLDMetadataNode {
  id: string;
  vid: string;
  nextVId: string;
  componentType: string;
  rotationAngle?: number;
  open: boolean;
  direction: string;
  vlabel: boolean;
  equipmentId: string;
}
interface SLDMetadataComponentSize {
  width: number;
  height: number;
}
interface SLDMetadataComponent {
  type: string;
  vid: string;
  anchorPoints: unknown[];
  size: SLDMetadataComponentSize;
  transformations: unknown;
  styleClass: string;
}
interface SLDMetadata {
  components: SLDMetadataComponent[];
  nodes: SLDMetadataNode[];
  wires: unknown[];
  lines: unknown[];
  arrows: unknown[];
  layoutParams: unknown;
}
type OnNextVoltageCallbackType = (nextVId: string, event: MouseEvent) => void;
type OnBreakerCallbackType = (breakerId: string, open: boolean, switchElement: SVGElement | null) => void;
type OnFeederCallbackType = (equipmentId: string, equipmentType: string | null, svgId: string, x: number, y: number) => void;
type OnBusCallbackType = (busId: string, svgId: string, x: number, y: number) => void;
type OnToggleSldHoverCallbackType = (hovered: boolean, anchorEl: EventTarget | null, equipmentId: string, equipmentType: string) => void;
declare class SingleLineDiagramViewer {
  container: HTMLElement;
  svgContent: string;
  svgMetadata: SLDMetadata | null;
  width: number;
  height: number;
  originalWidth: number;
  originalHeight: number;
  onNextVoltageCallback: OnNextVoltageCallbackType | null;
  onBreakerCallback: OnBreakerCallbackType | null;
  onFeederCallback: OnFeederCallbackType | null;
  onBusCallback: OnBusCallbackType | null;
  selectionBackColor: string;
  svgType: string;
  arrowSvg: string;
  arrowHoverSvg: string;
  svgDraw: Svg | undefined;
  onToggleHoverCallback: OnToggleSldHoverCallbackType | null;
  constructor(container: HTMLElement, svgContent: string, svgMetadata: SLDMetadata | null, svgType: string, minWidth: number, minHeight: number, maxWidth: number, maxHeight: number, onNextVoltageCallback: OnNextVoltageCallbackType | null, onBreakerCallback: OnBreakerCallbackType | null, onFeederCallback: OnFeederCallbackType | null, onBusCallback: OnBusCallbackType | null, selectionBackColor: string, onToggleHoverCallback: OnToggleSldHoverCallbackType | null);
  setWidth(width: number): void;
  setOriginalWidth(originalWidth: number): void;
  setHeight(height: number): void;
  setOriginalHeight(originalHeight: number): void;
  setContainer(container: HTMLElement): void;
  setSvgContent(svgContent: string): void;
  getWidth(): number;
  getOriginalWidth(): number;
  getHeight(): number;
  getOriginalHeight(): number;
  getContainer(): HTMLElement;
  getSvgContent(): string;
  getViewBox(): ViewBoxLike | undefined;
  setViewBox(viewBox: ViewBoxLike): void;
  refreshZoom(): void;
  init(minWidth: number, minHeight: number, maxWidth: number, maxHeight: number): void;
  getDimensionsFromSvg(): DIMENSIONS | null;
  private addNavigationArrow;
  private readonly setArrowsStyle;
  private createSvgArrow;
  private addSwitchesHandler;
  private addFeederSelectionRect;
  private addFeedersHandler;
  private addEquipmentsPopover;
  private hoverOnElement;
  private addBusHandler;
}
export { type BranchState, type BusNodeMetadata, type DiagramMetadata, type EdgeMetadata, LayoutParameters, type LayoutParametersMetadata, type NadViewerParameters, type NadViewerParametersOptions, NetworkAreaDiagramViewer, type NodeMetadata, type OnBendLineCallbackType, type OnBreakerCallbackType, type OnBusCallbackType, type OnFeederCallbackType, type OnMoveNodeCallbackType, type OnMoveTextNodeCallbackType, type OnNextVoltageCallbackType, type OnRightClickCallbackType, type OnSelectNodeCallbackType, type OnToggleNadHoverCallbackType, type OnToggleSldHoverCallbackType, type SLDMetadata, type SLDMetadataComponent, type SLDMetadataComponentSize, type SLDMetadataNode, SingleLineDiagramViewer, SvgParameters, type SvgParametersMetadata, type TextNodeMetadata };
//# sourceMappingURL=index.d.cts.map