Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));
//#endregion
let _svgdotjs_svg_js = require("@svgdotjs/svg.js");
require("@svgdotjs/svg.panzoom.js");
let lodash_debounce = require("lodash.debounce");
lodash_debounce = __toESM(lodash_debounce, 1);
//#region src/network-area-diagram-viewer/svg-parameters.ts
var EdgeInfoEnum = /* @__PURE__ */ function(EdgeInfoEnum) {
	EdgeInfoEnum[EdgeInfoEnum["ACTIVE_POWER"] = 0] = "ACTIVE_POWER";
	EdgeInfoEnum[EdgeInfoEnum["REACTIVE_POWER"] = 1] = "REACTIVE_POWER";
	EdgeInfoEnum[EdgeInfoEnum["CURRENT"] = 2] = "CURRENT";
	EdgeInfoEnum[EdgeInfoEnum["NAME"] = 3] = "NAME";
	EdgeInfoEnum[EdgeInfoEnum["PERMANENT_LIMIT_PERCENTAGE"] = 4] = "PERMANENT_LIMIT_PERCENTAGE";
	return EdgeInfoEnum;
}({});
var EdgeInfoEnumMapping = {
	ActivePower: 0,
	ReactivePower: 1,
	Current: 2,
	Name: 3,
	PermanentLimitPercentage: 4
};
var CssLocationEnum = /* @__PURE__ */ function(CssLocationEnum) {
	CssLocationEnum[CssLocationEnum["INSERTED_IN_SVG"] = 0] = "INSERTED_IN_SVG";
	CssLocationEnum[CssLocationEnum["EXTERNAL_IMPORTED"] = 1] = "EXTERNAL_IMPORTED";
	CssLocationEnum[CssLocationEnum["EXTERNAL_NO_IMPORT"] = 2] = "EXTERNAL_NO_IMPORT";
	return CssLocationEnum;
}({});
var CssLocationEnumMapping = {
	INSERTED_IN_SVG: 0,
	EXTERNAL_IMPORTED: 1,
	EXTERNAL_NO_IMPORT: 2
};
var SvgParameters = class SvgParameters {
	static VOLTAGE_LEVEL_CIRCLE_RADIUS_DEFAULT = 30;
	static INTER_ANNULUS_SPACE_DEFAULT = 5;
	static TRANSFORMER_CIRCLE_RADIUS_DEFAULT = 20;
	static EDGES_FORK_APERTURE_DEFAULT = 60;
	static EDGES_FORK_LENGTH_DEFAULT = 80;
	static ARROW_SHIFT_DEFAULT = 30;
	static ARROW_LABEL_SHIFT_DEFAULT = 19;
	static CONVERTER_STATION_WIDTH_DEFAULT = 70;
	static NODE_HOLLOW_WIDTH_DEFAULT = 15;
	static UNKNOWN_BUS_NODE_EXTRA_RADIUS_DEFAULT = 10;
	static FICTITIOUS_VOLTAGE_LEVEL_CIRCLE_RADIUS_DEFAULT = 15;
	static EDGE_INFO_DISPLAYED_DEFAULT = 0;
	static POWER_VALUE_PRECISION_RADIUS_DEFAULT = 0;
	static CURRENT_VALUE_PRECISION_DEFAULT = 0;
	static ANGLE_VALUE_PRECISION_DEFAULT = 1;
	static VOLTAGE_VALUE_PRECISION_DEFAULT = 1;
	static PERCENTAGE_VALUE_PRECISION_DEFAULT = 0;
	static DIAGRAM_PADDING_LEFT_DEFAULT = 200;
	static DIAGRAM_PADDING_TOP_DEFAULT = 200;
	static DIAGRAM_PADDING_RIGHT_DEFAULT = 200;
	static DIAGRAM_PADDING_BOTTON_DEFAULT = 200;
	static CSS_LOCATION_DEFAULT = 2;
	static ARROW_PATH_IN_DEFAULT = "M-10 -10 H10 L0 10z";
	static ARROW_PATH_OUT_DEFAULT = "M-10 10 H10 L0 -10z";
	static DOUBLE_ARROW_SHIFT_FACTOR_ARROWS_DEFAULT = 1.5;
	static DOUBLE_ARROW_SHIFT_FACTOR_TEXT_DEFAULT = 1.8;
	svgParametersMetadata;
	constructor(svgParametersMetadata) {
		this.svgParametersMetadata = svgParametersMetadata;
	}
	getVoltageLevelCircleRadius() {
		return this.svgParametersMetadata?.voltageLevelCircleRadius ?? SvgParameters.VOLTAGE_LEVEL_CIRCLE_RADIUS_DEFAULT;
	}
	getInterAnnulusSpace() {
		return this.svgParametersMetadata?.interAnnulusSpace ?? SvgParameters.INTER_ANNULUS_SPACE_DEFAULT;
	}
	getTransformerCircleRadius() {
		return this.svgParametersMetadata?.transformerCircleRadius ?? SvgParameters.TRANSFORMER_CIRCLE_RADIUS_DEFAULT;
	}
	getEdgesForkAperture() {
		return degToRad(this.svgParametersMetadata?.edgesForkAperture ?? SvgParameters.EDGES_FORK_APERTURE_DEFAULT);
	}
	getEdgesForkLength() {
		return this.svgParametersMetadata?.edgesForkLength ?? SvgParameters.EDGES_FORK_LENGTH_DEFAULT;
	}
	getArrowShift() {
		return this.svgParametersMetadata?.arrowShift ?? SvgParameters.ARROW_SHIFT_DEFAULT;
	}
	getArrowLabelShift() {
		return this.svgParametersMetadata?.arrowLabelShift ?? SvgParameters.ARROW_LABEL_SHIFT_DEFAULT;
	}
	getArrowPathIn() {
		return this.svgParametersMetadata?.arrowPathIn ?? SvgParameters.ARROW_PATH_IN_DEFAULT;
	}
	getArrowPathOut() {
		return this.svgParametersMetadata?.arrowPathOut ?? SvgParameters.ARROW_PATH_OUT_DEFAULT;
	}
	getConverterStationWidth() {
		return this.svgParametersMetadata?.converterStationWidth ?? SvgParameters.CONVERTER_STATION_WIDTH_DEFAULT;
	}
	getNodeHollowWidth() {
		return this.svgParametersMetadata?.nodeHollowWidth ?? SvgParameters.NODE_HOLLOW_WIDTH_DEFAULT;
	}
	getUnknownBusNodeExtraRadius() {
		return this.svgParametersMetadata?.unknownBusNodeExtraRadius ?? SvgParameters.UNKNOWN_BUS_NODE_EXTRA_RADIUS_DEFAULT;
	}
	getFictitiousVoltageLevelCircleRadius() {
		return this.svgParametersMetadata?.fictitiousVoltageLevelCircleRadius ?? SvgParameters.FICTITIOUS_VOLTAGE_LEVEL_CIRCLE_RADIUS_DEFAULT;
	}
	getEdgeInfoDisplayed(edgeInfoType) {
		return edgeInfoType ? EdgeInfoEnumMapping[edgeInfoType] : SvgParameters.EDGE_INFO_DISPLAYED_DEFAULT;
	}
	getPowerValuePrecision() {
		return this.svgParametersMetadata?.powerValuePrecision ?? SvgParameters.POWER_VALUE_PRECISION_RADIUS_DEFAULT;
	}
	getCurrentValuePrecision() {
		return this.svgParametersMetadata?.currentValuePrecision ?? SvgParameters.CURRENT_VALUE_PRECISION_DEFAULT;
	}
	getAngleValuePrecision() {
		return this.svgParametersMetadata?.angleValuePrecision ?? SvgParameters.ANGLE_VALUE_PRECISION_DEFAULT;
	}
	getVoltageValuePrecision() {
		return this.svgParametersMetadata?.voltageValuePrecision ?? SvgParameters.VOLTAGE_VALUE_PRECISION_DEFAULT;
	}
	getPercentageValuePrecision() {
		return this.svgParametersMetadata?.percentageValuePrecision ?? SvgParameters.PERCENTAGE_VALUE_PRECISION_DEFAULT;
	}
	getDiagramPadding() {
		return {
			left: this.svgParametersMetadata?.diagramPadding.left ?? SvgParameters.DIAGRAM_PADDING_LEFT_DEFAULT,
			top: this.svgParametersMetadata?.diagramPadding.top ?? SvgParameters.DIAGRAM_PADDING_TOP_DEFAULT,
			right: this.svgParametersMetadata?.diagramPadding.right ?? SvgParameters.DIAGRAM_PADDING_RIGHT_DEFAULT,
			bottom: this.svgParametersMetadata?.diagramPadding.bottom ?? SvgParameters.DIAGRAM_PADDING_BOTTON_DEFAULT
		};
	}
	getCssLocation() {
		return this.svgParametersMetadata?.cssLocation ? CssLocationEnumMapping[this.svgParametersMetadata?.cssLocation] : SvgParameters.CSS_LOCATION_DEFAULT;
	}
	getDoubleArrowShiftFactorArrows() {
		return this.svgParametersMetadata?.doubleArrowShiftFactorArrows ?? SvgParameters.DOUBLE_ARROW_SHIFT_FACTOR_ARROWS_DEFAULT;
	}
	getDoubleArrowShiftFactorText() {
		return this.svgParametersMetadata?.doubleArrowShiftFactorText ?? SvgParameters.DOUBLE_ARROW_SHIFT_FACTOR_TEXT_DEFAULT;
	}
};
//#endregion
//#region src/network-area-diagram-viewer/diagram-types.ts
var EdgeType = /* @__PURE__ */ function(EdgeType) {
	EdgeType[EdgeType["LINE"] = 0] = "LINE";
	EdgeType[EdgeType["TWO_WINDINGS_TRANSFORMER"] = 1] = "TWO_WINDINGS_TRANSFORMER";
	EdgeType[EdgeType["PHASE_SHIFT_TRANSFORMER"] = 2] = "PHASE_SHIFT_TRANSFORMER";
	EdgeType[EdgeType["HVDC_LINE_VSC"] = 3] = "HVDC_LINE_VSC";
	EdgeType[EdgeType["HVDC_LINE_LCC"] = 4] = "HVDC_LINE_LCC";
	EdgeType[EdgeType["BOUNDARY_LINE"] = 5] = "BOUNDARY_LINE";
	EdgeType[EdgeType["TIE_LINE"] = 6] = "TIE_LINE";
	EdgeType[EdgeType["THREE_WINDINGS_TRANSFORMER"] = 7] = "THREE_WINDINGS_TRANSFORMER";
	EdgeType[EdgeType["THREE_WINDINGS_PHASE_SHIFT_TRANSFORMER"] = 8] = "THREE_WINDINGS_PHASE_SHIFT_TRANSFORMER";
	EdgeType[EdgeType["UNKNOWN"] = 9] = "UNKNOWN";
	return EdgeType;
}({});
var ElementType = /* @__PURE__ */ function(ElementType) {
	ElementType[ElementType["VOLTAGE_LEVEL"] = 0] = "VOLTAGE_LEVEL";
	ElementType[ElementType["THREE_WINDINGS_TRANSFORMER"] = 1] = "THREE_WINDINGS_TRANSFORMER";
	ElementType[ElementType["TEXT_NODE"] = 2] = "TEXT_NODE";
	ElementType[ElementType["BRANCH"] = 3] = "BRANCH";
	ElementType[ElementType["UNKNOWN"] = 4] = "UNKNOWN";
	return ElementType;
}({});
//#endregion
//#region src/network-area-diagram-viewer/diagram-utils.ts
/**
* Copyright (c) 2024, RTE (http://www.rte-france.com)
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/
function getDistance(point1, point2) {
	const deltax = point1.x - point2.x;
	const deltay = point1.y - point2.y;
	return Math.hypot(deltax, deltay);
}
function getFormattedValue(value) {
	return value.toFixed(2);
}
function getFormattedPoint(point) {
	return getFormattedValue(point.x) + "," + getFormattedValue(point.y);
}
function getFormattedPolyline(points) {
	return points.map((point) => getFormattedPoint(point)).join(" ");
}
function degToRad(deg) {
	return deg * (Math.PI / 180);
}
function radToDeg(rad) {
	return rad * 180 / Math.PI;
}
function round(num) {
	return Math.round(num * 100) / 100;
}
function getMidPosition(point1, point2) {
	return new _svgdotjs_svg_js.Point(.5 * (point1.x + point2.x), .5 * (point1.y + point2.y));
}
function getPointAtDistance(point1, point2, radius) {
	const r = radius / getDistance(point1, point2);
	return new _svgdotjs_svg_js.Point(point1.x + r * (point2.x - point1.x), point1.y + r * (point2.y - point1.y));
}
function getAngle(point1, point2) {
	return Math.atan2(point2.y - point1.y, point2.x - point1.x);
}
function getEdgeFork(point, edgeForkLength, angleFork) {
	return new _svgdotjs_svg_js.Point(point.x + edgeForkLength * Math.cos(angleFork), point.y + edgeForkLength * Math.sin(angleFork));
}
function getTransformerArrowMatrix(rotationAngle, transformerCenter, transfomerCircleRadius) {
	const arrowSize = 3 * transfomerCircleRadius;
	const cosRo = Math.cos(rotationAngle);
	const sinRo = Math.sin(rotationAngle);
	const cdx = arrowSize / 2;
	const cdy = arrowSize / 2;
	const e1 = transformerCenter.x - cdx * cosRo + cdy * sinRo;
	const f1 = transformerCenter.y - cdx * sinRo - cdy * cosRo;
	return [
		+cosRo,
		sinRo,
		-sinRo,
		cosRo,
		e1,
		f1
	];
}
function getTransformerArrowMatrixString(rotationAngle, transformerCenter, transfomerCircleRadius) {
	return getTransformerArrowMatrix(rotationAngle, transformerCenter, transfomerCircleRadius).map((e) => getFormattedValue(e)).join(",");
}
function getVoltageLevelCircleRadius(nbNeighbours, fictitiousVl, svgParameters) {
	const voltageLevelCircleRadius = fictitiousVl ? svgParameters.getFictitiousVoltageLevelCircleRadius() : svgParameters.getVoltageLevelCircleRadius();
	return Math.min(Math.max(nbNeighbours + 1, 1), 2) * voltageLevelCircleRadius;
}
function getCirclePath(radius, angleStart, angleEnd, clockWise) {
	const arcAngle = angleEnd - angleStart;
	const xStart = radius * Math.cos(angleStart);
	const yStart = radius * Math.sin(angleStart);
	const xEnd = radius * Math.cos(angleEnd);
	const yEnd = radius * Math.sin(angleEnd);
	const largeArc = Math.abs(arcAngle) > Math.PI ? 1 : 0;
	return xStart.toFixed(3) + "," + yStart.toFixed(3) + " A" + radius.toFixed(3) + "," + radius.toFixed(3) + " " + radToDeg(arcAngle).toFixed(3) + " " + largeArc + " " + (clockWise ? 1 : 0) + " " + xEnd.toFixed(3) + "," + yEnd.toFixed(3);
}
function getFragmentedAnnulusPath(angles, nodeRadius, nodeHollowWidth) {
	let path = "";
	if (angles.length == 0) {
		path = "M" + getCirclePath(nodeRadius.busOuterRadius, 0, Math.PI, true) + " M" + getCirclePath(nodeRadius.busOuterRadius, Math.PI, 0, true);
		if (nodeRadius.busInnerRadius > 0) path += " M" + getCirclePath(nodeRadius.busInnerRadius, 0, Math.PI, false) + " M" + getCirclePath(nodeRadius.busInnerRadius, Math.PI, 0, false);
		return path;
	}
	const halfWidth = nodeHollowWidth / 2;
	const deltaAngle0 = halfWidth / nodeRadius.busOuterRadius;
	const deltaAngle1 = halfWidth / nodeRadius.busInnerRadius;
	for (let index = 0; index < angles.length; index++) {
		const outerArcStart = angles[index] + deltaAngle0;
		const outerArcEnd = angles[index + 1] - deltaAngle0;
		const innerArcStart = angles[index + 1] - deltaAngle1;
		const innerArcEnd = angles[index] + deltaAngle1;
		if (outerArcEnd > outerArcStart && innerArcEnd < innerArcStart) path = path + "M" + getCirclePath(nodeRadius.busOuterRadius, outerArcStart, outerArcEnd, true) + " L" + getCirclePath(nodeRadius.busInnerRadius, innerArcStart, innerArcEnd, false) + " Z ";
	}
	return path;
}
function getBoundarySemicircle(edgeStartAngle, busOuterRadius) {
	const startAngle = -Math.PI / 2 + edgeStartAngle;
	return "M" + getCirclePath(busOuterRadius, startAngle, startAngle + Math.PI, true);
}
function getEdgeNameAngle(point1, point2) {
	const angle = getAngle(point1, point2);
	return radToDeg(Math.cos(angle) < 0 ? angle - Math.PI : angle);
}
function isTransformerEdge(edgeType) {
	return edgeType == EdgeType.TWO_WINDINGS_TRANSFORMER || edgeType == EdgeType.PHASE_SHIFT_TRANSFORMER;
}
function getTextEdgeEnd(textNodePosition, vlNodePosition, detailedTextNodeYShift, height, width) {
	const angle = radToDeg(getAngle(vlNodePosition, textNodePosition));
	if (angle > 60 && angle < 175) return new _svgdotjs_svg_js.Point(textNodePosition.x + detailedTextNodeYShift, textNodePosition.y);
	if (angle < -70 && angle > -155) return new _svgdotjs_svg_js.Point(textNodePosition.x + detailedTextNodeYShift, textNodePosition.y + height);
	if (angle >= 175 || angle <= -155) return new _svgdotjs_svg_js.Point(textNodePosition.x + width, textNodePosition.y + detailedTextNodeYShift);
	return new _svgdotjs_svg_js.Point(textNodePosition.x, textNodePosition.y + detailedTextNodeYShift);
}
var EdgeInfoClassMap = {
	ActivePower: "nad-active",
	ReactivePower: "nad-reactive",
	Current: "nad-current",
	Name: "nad-name",
	PermanentLimitPercentage: "nad-permanent-limit-percentage"
};
function getEdgeInfoTypeClass(edgeInfoType) {
	return edgeInfoType ? EdgeInfoClassMap[edgeInfoType] ?? null : null;
}
function getEdgeInfoClasses() {
	return Object.values(EdgeInfoClassMap);
}
function getArrowDirection(p) {
	return p < 0 ? "IN" : "OUT";
}
function getArrowPath(direction, svgParameters) {
	switch (direction) {
		case "IN": return svgParameters.getArrowPathIn();
		case "OUT": return svgParameters.getArrowPathOut();
		default: return;
	}
}
function getEdgeInfoDirectionClass(direction) {
	switch (direction) {
		case "IN": return "nad-arrow-in";
		case "OUT": return "nad-arrow-out";
		default: return;
	}
}
function getEdgeInfoValuePrecision(edgeInfoType, svgParameters) {
	switch (svgParameters.getEdgeInfoDisplayed(edgeInfoType)) {
		case EdgeInfoEnum.ACTIVE_POWER:
		case EdgeInfoEnum.REACTIVE_POWER: return svgParameters.getPowerValuePrecision();
		case EdgeInfoEnum.CURRENT: return svgParameters.getCurrentValuePrecision();
		case EdgeInfoEnum.PERMANENT_LIMIT_PERCENTAGE: return svgParameters.getPercentageValuePrecision();
		default: return 0;
	}
}
function getFormattedInfoLabel(label, type, svgParameters) {
	const edgeValueMiddle = Number(label ?? null);
	const value = Number.isNaN(edgeValueMiddle) ? label ?? "" : edgeValueMiddle;
	return typeof value === "number" ? value.toFixed(getEdgeInfoValuePrecision(type, svgParameters)) : value;
}
function getLabelShiftAndStyle(labelAngle, externalLabel, arrowLabelShift) {
	const textFlipped = Math.cos(labelAngle) < 0;
	const style = externalLabel == textFlipped ? "text-anchor:end" : void 0;
	const shift = arrowLabelShift * (externalLabel ? 1 : -1);
	return [textFlipped ? -shift : shift, style];
}
//#endregion
//#region src/network-area-diagram-viewer/layout-parameters.ts
var LayoutParameters = class LayoutParameters {
	static TEXT_NODE_EDGE_CONNECTION_Y_SHIFT_DEFAULT = 25;
	layoutParametersMetadata;
	constructor(layoutParametersMetadata) {
		this.layoutParametersMetadata = layoutParametersMetadata;
	}
	getTextNodeEdgeConnectionYShift() {
		return this.layoutParametersMetadata?.textNodeEdgeConnectionYShift ?? LayoutParameters.TEXT_NODE_EDGE_CONNECTION_Y_SHIFT_DEFAULT;
	}
};
//#endregion
//#region src/network-area-diagram-viewer/nad-viewer-parameters.ts
var NadViewerParameters = class NadViewerParameters {
	static MIN_WIDTH_DEFAULT = 500;
	static MIN_HEIGHT_DEFAULT = 600;
	static MAX_WIDTH_DEFAULT = 1e3;
	static MAX_HEIGHT_DEFAULT = 1200;
	static ENABLE_DRAG_INTERACTION_DEFAULT = false;
	static ENABLE_LEVEL_OF_DETAIL_DEFAULT = false;
	static ZOOM_LEVELS_DEFAULT = [
		0,
		1e3,
		2200,
		2500,
		3e3,
		4e3,
		9e3,
		12e3,
		2e4
	];
	static ADD_BUTTONS_DEFAULT = false;
	static HOVER_POSITION_PRECISION_DEFAULT = 10;
	static ENABLE_ADAPTIVE_ZOOM_DEFAULT = false;
	static THRESHOLD_ADAPTIVE_ZOOM_DEFAULT = 3e3;
	nadViewerParametersOptions;
	constructor(nadViewerParametersOptions) {
		this.nadViewerParametersOptions = nadViewerParametersOptions;
	}
	getMinWidth() {
		return this.nadViewerParametersOptions?.minWidth ?? NadViewerParameters.MIN_WIDTH_DEFAULT;
	}
	getMinHeight() {
		return this.nadViewerParametersOptions?.minHeight ?? NadViewerParameters.MIN_HEIGHT_DEFAULT;
	}
	getMaxWidth() {
		return this.nadViewerParametersOptions?.maxWidth ?? NadViewerParameters.MAX_WIDTH_DEFAULT;
	}
	getMaxHeight() {
		return this.nadViewerParametersOptions?.maxHeight ?? NadViewerParameters.MAX_HEIGHT_DEFAULT;
	}
	getEnableDragInteraction() {
		return this.nadViewerParametersOptions?.enableDragInteraction ?? NadViewerParameters.ENABLE_DRAG_INTERACTION_DEFAULT;
	}
	getEnableLevelOfDetail() {
		return this.nadViewerParametersOptions?.enableLevelOfDetail ?? NadViewerParameters.ENABLE_LEVEL_OF_DETAIL_DEFAULT;
	}
	getZoomLevels() {
		return this.nadViewerParametersOptions?.zoomLevels ?? NadViewerParameters.ZOOM_LEVELS_DEFAULT;
	}
	getAddButtons() {
		return this.nadViewerParametersOptions?.addButtons ?? NadViewerParameters.ADD_BUTTONS_DEFAULT;
	}
	getOnMoveNodeCallback() {
		return this.nadViewerParametersOptions?.onMoveNodeCallback ?? null;
	}
	getOnMoveTextNodeCallback() {
		return this.nadViewerParametersOptions?.onMoveTextNodeCallback ?? null;
	}
	getOnSelectNodeCallback() {
		return this.nadViewerParametersOptions?.onSelectNodeCallback ?? null;
	}
	getOnToggleHoverCallback() {
		return this.nadViewerParametersOptions?.onToggleHoverCallback ?? null;
	}
	getOnRightClickCallback() {
		return this.nadViewerParametersOptions?.onRightClickCallback ?? null;
	}
	getOnBendingLineCallback() {
		return this.nadViewerParametersOptions?.onBendLineCallback ?? null;
	}
	getInitialViewBox() {
		return this.nadViewerParametersOptions?.initialViewBox;
	}
	getHoverPositionPrecision() {
		return this.nadViewerParametersOptions?.hoverPositionPrecision ?? NadViewerParameters.HOVER_POSITION_PRECISION_DEFAULT;
	}
	getAdaptiveTextZoom() {
		const adaptiveTextZoom = this.nadViewerParametersOptions?.adaptiveTextZoom;
		const threshold = adaptiveTextZoom?.threshold ?? NadViewerParameters.THRESHOLD_ADAPTIVE_ZOOM_DEFAULT;
		return {
			enabled: adaptiveTextZoom?.enabled ?? NadViewerParameters.ENABLE_ADAPTIVE_ZOOM_DEFAULT,
			threshold,
			edgeSideLabelThreshold: adaptiveTextZoom?.edgeSideLabelThreshold ?? threshold,
			edgeMiddleLabelThreshold: adaptiveTextZoom?.edgeMiddleLabelThreshold ?? threshold,
			edgeMiddleArrowThreshold: adaptiveTextZoom?.edgeMiddleArrowThreshold ?? threshold
		};
	}
	getComponentLibrary() {
		return this.nadViewerParametersOptions?.componentLibrary;
	}
	getSvgUrlResolver() {
		return this.nadViewerParametersOptions?.svgUrlResolver;
	}
};
//#endregion
//#region src/resources/material-icons/zoom-to-fit.svg
var zoom_to_fit_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='15px'%20viewBox='0%20-960%20960%20960'%20width='15px'%3e%3cpath%20d='M200-120q-33%200-56.5-23.5T120-200v-160h80v160h160v80H200Zm400%200v-80h160v-160h80v160q0%2033-23.5%2056.5T760-120H600ZM120-600v-160q0-33%2023.5-56.5T200-840h160v80H200v160h-80Zm640%200v-160H600v-80h160q33%200%2056.5%2023.5T840-760v160h-80Z'/%3e%3c/svg%3e";
//#endregion
//#region src/resources/material-icons/zoom-in.svg
var zoom_in_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='15px'%20viewBox='0%20-960%20960%20960'%20width='15px'%3e%3cpath%20d='M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z'/%3e%3c/svg%3e";
//#endregion
//#region src/resources/material-icons/zoom-out.svg
var zoom_out_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='15px'%20viewBox='0%20-960%20960%20960'%20width='15px'%3e%3cpath%20d='M200-440v-80h560v80H200Z'/%3e%3c/svg%3e";
//#endregion
//#region src/resources/material-icons/save_svg.svg
var save_svg_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='20px'%20viewBox='0%20-960%20960%20960'%20width='20px'%3e%3cpath%20d='m764,-120%20162,-160%20-58,-56%20-64,64%20v-167%20h-80%20v167%20l-64,-64%20-56,56z%20M604,0%20V-80%20H926%20V0%20Z'/%3e%3cpath%20d='m%20392,-175%20q%20-50,0%20-85,-35%20-35,-35%20-35,-85%200,-11%202,-23%202,-11%206,-21%20l%20-61,-49%20q%20-14,10%20-31,16%20-17,5%20-36,5%20-49,0%20-84.2,-35%20-35.1,-35%20-35.1,-85%200,-50%2035.1,-85%2035.2,-35%2084.2,-35%2031,0%2057,14%2025,14%2042,37%20l%2093,-28%20q%200,-20%207,-39%207,-19%2018,-34%20l%20-37,-52%20q%20-9,3%20-18,4%20-9,1%20-19,1%20-50,0%20-85,-35%20-35,-35%20-35,-85%200,-50%2035,-85%2035,-35%2085,-35%2050,0%2085,35%2035,35%2035,85%200,20%20-6,39%20-7,19%20-19,34%20l%2038,53%20q%208,-3%2017,-4%209,-1%2019,-1%2017,0%2033,4%2015,5%2029,13%20l%2045,-40%20q%20-5,-11%20-8,-23%20-3,-13%20-3,-26%200,-50%2035,-85%2035,-35%2085,-35%2050,0%2085,35%2035,35%2035,85%200,50%20-35,85%20-35,35%20-85,35%20-17,0%20-32,-5%20-16,-4%20-30,-12%20l%20-44,39%20q%205,11%208,23%202,13%202,27%200,50%20-35,85%20-35,35%20-85,35%20-31,0%20-56,-15%20-26,-14%20-43,-37%20l%20-93,28%20q%200,11%20-2,22%20-2,11%20-6,21%20l%2061,49%20q%2014,-10%2031,-15%2017,-5%2036,-5%2050,0%2085,35%2035,35%2035,85%200,50%20-35,85%20-35,35%20-85,35%20z%20M%20152,-439%20q%2020,0%2034,-14%2014,-14%2014,-34%200,-20%20-14,-34%20-14,-14%20-34,-14%20-20,0%20-34,14%20-13,14%20-13,34%200,20%2013,34%2014,14%2034,14%20z%20m%20144,-336%20q%2020,0%2034,-14%2014,-14%2014,-34%200,-20%20-14,-34%20-14,-14%20-34,-14%20-20,0%20-34,14%20-14,14%20-14,34%200,20%2014,34%2014,14%2034,14%20z%20m%2096,528%20q%2020,0%2034,-14%2014,-14%2014,-34%200,-20%20-14,-34%20-14,-14%20-34,-14%20-20,0%20-34,14%20-14,14%20-14,34%200,20%2014,34%2014,14%2034,14%20z%20m%2072,-288%20q%2020,0%2034,-14%2014,-14%2014,-34%200,-20%20-14,-34%20-14,-14%20-34,-14%20-20,0%20-34,14%20-14,14%20-14,34%200,20%2014,34%2014,14%2034,14%20z%20m%20216,-192%20q%2020,0%2034,-14%2014,-14%2014,-34%200,-20%20-14,-34%20-14,-14%20-34,-14%20-20,0%20-34,14%20-14,14%20-14,34%200,20%2014,34%2014,14%2034,14%20z'/%3e%3c/svg%3e";
//#endregion
//#region src/resources/material-icons/save_png.svg
var save_png_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='20px'%20viewBox='0%20-960%20960%20960'%20width='20px'%3e%3cpath%20d='m764,-120%20162,-160%20-58,-56%20-64,64%20v-167%20h-80%20v167%20l-64,-64%20-56,56z%20M604,0%20V-80%20H926%20V0%20Z'/%3e%3cpath%20d='M%20164,-364%20H%20596%20L%20452,-556%20344,-412%20272,-508Z%20M%20644,-499%20V%20-820%20H%20116%20v%20528%20h%20434%20v%2072%20H%20116%20c%20-20,0%20-37,-7%20-51,-22%20-14,-14%20-21,-31%20-21,-50%20v%20-528%20c%200,-19%207,-36%2021,-51%2014,-14%2031,-21%2051,-21%20h%20528%20c%2020,0%2037,7%2051,21%2014,15%2021,32%2021,51%20v%20321%20z'%20/%3e%3c/svg%3e";
//#endregion
//#region src/resources/material-icons/screenshot.svg
var screenshot_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='20px'%20viewBox='0%20-960%20960%20960'%20width='20px'%3e%3cpath%20d='M480-260q75%200%20127.5-52.5T660-440q0-75-52.5-127.5T480-620q-75%200-127.5%2052.5T300-440q0%2075%2052.5%20127.5T480-260Zm0-80q-42%200-71-29t-29-71q0-42%2029-71t71-29q42%200%2071%2029t29%2071q0%2042-29%2071t-71%2029ZM160-120q-33%200-56.5-23.5T80-200v-480q0-33%2023.5-56.5T160-760h126l74-80h240l74%2080h126q33%200%2056.5%2023.5T880-680v480q0%2033-23.5%2056.5T800-120H160Zm0-80h640v-480H638l-73-80H395l-73%2080H160v480Zm320-240Z'/%3e%3c/svg%3e";
//#endregion
//#region src/resources/material-icons/bend-lines.svg
var bend_lines_default = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='18px'%20viewBox='0%20-960%20960%20960'%20width='18px'%3e%3cpath%20d='M120-240q-33%200-56.5-23.5T40-320q0-33%2023.5-56.5T120-400h10.5q4.5%200%209.5%202l182-182q-2-5-2-9.5V-600q0-33%2023.5-56.5T400-680q33%200%2056.5%2023.5T480-600q0%202-2%2020l102%20102q5-2%209.5-2h21q4.5%200%209.5%202l142-142q-2-5-2-9.5V-640q0-33%2023.5-56.5T840-720q33%200%2056.5%2023.5T920-640q0%2033-23.5%2056.5T840-560h-10.5q-4.5%200-9.5-2L678-420q2%205%202%209.5v10.5q0%2033-23.5%2056.5T600-320q-33%200-56.5-23.5T520-400v-10.5q0-4.5%202-9.5L420-522q-5%202-9.5%202H400q-2%200-20-2L198-340q2%205%202%209.5v10.5q0%2033-23.5%2056.5T120-240Z'/%3e%3c/svg%3e";
//#endregion
//#region src/network-area-diagram-viewer/viewer-buttons.ts
/**
* Copyright (c) 2025, RTE (http://www.rte-france.com)
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/.
* SPDX-License-Identifier: MPL-2.0
*/
function getButton(inputImg, title, size) {
	const button = document.createElement("button");
	button.style.backgroundImage = `url("${inputImg}")`;
	button.style.backgroundRepeat = "no-repeat";
	button.style.backgroundPosition = "center center";
	button.title = title;
	button.style.height = size;
	button.style.width = size;
	button.style.padding = "0px";
	button.style.display = "flex";
	button.style.alignItems = "center";
	button.style.justifyContent = "center";
	return button;
}
function getZoomToFitButton() {
	const b = getButton(zoom_to_fit_default, "Zoom to fit", "25px");
	b.style.borderRadius = "0 0 5px 5px";
	b.style.marginTop = "1px";
	return b;
}
function getZoomInButton() {
	const b = getButton(zoom_in_default, "Zoom in", "25px");
	b.style.borderRadius = "5px 5px 0 0";
	return b;
}
function getZoomOutButton() {
	const b = getButton(zoom_out_default, "Zoom out", "25px");
	b.style.marginTop = "1px";
	return b;
}
function getSaveSvgButton() {
	const b = getButton(save_svg_default, "Save SVG", "30px");
	b.style.borderRadius = "5px 0 0 5px";
	b.style.marginRight = "1px";
	return b;
}
function getSavePngButton() {
	const b = getButton(save_png_default, "Save PNG", "30px");
	b.style.borderRadius = "0 0 0 0";
	b.style.marginRight = "1px";
	return b;
}
function getDisabledScreenshotButton() {
	const b = getButton(screenshot_default, "Screenshot", "30px");
	b.style.borderRadius = "0 5px 5px 0";
	b.style.marginRight = "5px";
	b.disabled = true;
	b.style.cursor = "not-allowed";
	return b;
}
function enableButton(buttonElement) {
	buttonElement.disabled = false;
	buttonElement.style.cursor = "";
}
function getBendLinesButton() {
	const b = getButton(bend_lines_default, "Enable line bending", "30px");
	b.style.borderRadius = "5px 5px 5px 5px";
	return b;
}
//#endregion
//#region src/network-area-diagram-viewer/svg-utils.ts
/**
* Copyright (c) 2025, RTE (http://www.rte-france.com)
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/.
* SPDX-License-Identifier: MPL-2.0
*/
function getDraggableFrom(element) {
	if (isDraggable(element)) return element;
	else if (element.parentElement) return getDraggableFrom(element.parentNode);
}
function getSelectableFrom(element) {
	if (isSelectable(element)) return element;
	else if (element.parentElement) return getSelectableFrom(element.parentNode);
}
function isDraggable(element) {
	return hasId(element) && element.parentNode != null && classIsContainerOfDraggables(element.parentNode) || isTextNode(element) || isBendable(element);
}
function isSelectable(element) {
	return hasId(element) && element.parentNode != null && element.parentNode.classList.contains("nad-vl-nodes");
}
function hasId(element) {
	return element.id != void 0 && element.id != "";
}
function classIsContainerOfDraggables(element) {
	return element.classList.contains("nad-vl-nodes") || element.classList.contains("nad-boundary-nodes") || element.classList.contains("nad-3wt-nodes");
}
function isHoverable(element) {
	if (isTextNode(element)) return true;
	if (isInjection(element)) return true;
	return hasId(element) && element.parentNode != null && classIsContainerOfHoverables(element.parentNode);
}
function getHoverableFrom(element) {
	if (isHoverable(element)) return element;
	else if (element.parentElement) return getHoverableFrom(element.parentNode);
}
function classIsContainerOfHoverables(element) {
	return element.classList.contains("nad-branch-edges") || element.classList.contains("nad-3wt-edges") || element.classList.contains("nad-vl-nodes") || element.classList.contains("nad-injections");
}
function getBendableFrom(element) {
	if (isBendable(element)) return element;
	else if (element.parentElement) return getBendableFrom(element.parentNode);
}
function isBendable(element) {
	return element.classList.contains("nad-line-point");
}
function getBendableLineFrom(element, bendableIds) {
	if (isBendableLine(element, bendableIds)) return element;
	else if (element.parentElement) return getBendableLineFrom(element.parentNode, bendableIds);
}
function isBendableLine(element, bendableIds) {
	return hasId(element) && element.parentNode != null && classIsContainerOfLines(element.parentNode) && bendableIds.includes(element.id);
}
function classIsContainerOfLines(element) {
	return element.classList.contains("nad-branch-edges");
}
function getRightClickableFrom(element) {
	if (isDraggable(element) || isHoverable(element)) return element;
	else if (element.parentElement) return getRightClickableFrom(element.parentNode);
}
function isTextNode(element) {
	return element?.parentElement?.classList.contains("nad-text-nodes") ?? false;
}
/**
* Checks if an SVG element can be highlighted (text node or voltage level element)
*/
function isHighlightableElement(element) {
	return isTextNode(element) || isVoltageLevelElement(element);
}
function createLinePointElement(edgeId, linePoint, index, previewPoint, linePointIndexMap) {
	const linePointElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
	linePointElement.setAttribute("transform", "translate(" + getFormattedPoint(linePoint) + ")");
	const squareElement = document.createElementNS("http://www.w3.org/2000/svg", "rect");
	squareElement.setAttribute("width", "16");
	squareElement.setAttribute("height", "16");
	squareElement.setAttribute("x", "-8");
	squareElement.setAttribute("y", "-8");
	if (previewPoint) linePointElement.classList.add("nad-line-point-preview");
	linePointElement.appendChild(squareElement);
	if (!previewPoint && linePointIndexMap) {
		linePointElement.id = crypto.randomUUID();
		linePointElement.classList.add("nad-line-point");
		linePointIndexMap.set(linePointElement.id, {
			edgeId,
			index
		});
	}
	return linePointElement;
}
function getTransform(element) {
	let transforms = element?.transform.baseVal;
	if (transforms?.length === 0 || transforms?.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
		element?.setAttribute("transform", "translate(0,0)");
		transforms = element?.transform.baseVal;
	}
	return transforms?.getItem(0);
}
function getPosition(element) {
	const transform = getTransform(element);
	return new _svgdotjs_svg_js.Point(transform?.matrix.e ?? 0, transform?.matrix.f ?? 0);
}
function getAttribute(element, tagName, attribute) {
	if (element.tagName !== tagName) return null;
	return element.getAttribute(attribute);
}
function getPolylinePoints(polyline) {
	if (!polyline) return null;
	const polylinePoints = getAttribute(polyline, "polyline", "points");
	if (polylinePoints == null) return null;
	const coordinates = polylinePoints.split(/[, ]/);
	if (coordinates.length < 4) return null;
	const points = [];
	for (let index = 0; index < coordinates.length; index = index + 2) {
		const point = new _svgdotjs_svg_js.Point(+coordinates[index], +coordinates[index + 1]);
		points.push(point);
	}
	return points;
}
function getPolylineAngle(polyline) {
	const points = getPolylinePoints(polyline);
	if (points == null) return null;
	return getAngle(points[0], points[1]);
}
function getPathAngle(path) {
	const points = getPathPoints(getAttribute(path, "path", "d"));
	if (points == null) return null;
	return getAngle(points[0], points[1]);
}
function getPathPoints(pathPoints) {
	if (pathPoints == null) return null;
	const stringPoints = pathPoints.split(" ");
	if (stringPoints.length < 2) return null;
	const startsWithLetter = (str) => /^[a-zA-Z]/.test(str);
	const points = [];
	for (let index = 0; index < 5; index++) {
		const coordinates = stringPoints[index].split(",");
		if (startsWithLetter(coordinates[0])) coordinates[0] = coordinates[0].substring(1);
		const point = new _svgdotjs_svg_js.Point(+coordinates[0], +coordinates[1]);
		points.push(point);
	}
	return points;
}
function isInjection(element) {
	return (element != null && hasId(element) && element.parentElement?.parentElement?.parentElement?.classList.contains("nad-injections")) ?? false;
}
function isVoltageLevelElement(element) {
	return element != null && hasId(element) && element.parentElement?.classList.contains("nad-vl-nodes") === true;
}
function getTextNodeSize(textNode) {
	return {
		width: textNode?.firstElementChild?.scrollWidth ?? 0,
		height: textNode?.firstElementChild?.scrollHeight ?? 0
	};
}
function getTextNodeTopLeftCornerFromCenter(textNode, centrePosition) {
	const textNodeSize = getTextNodeSize(textNode);
	return new _svgdotjs_svg_js.Point(centrePosition.x - textNodeSize.width / 2, centrePosition.y - textNodeSize.height / 2);
}
function getTextNodePosition(textNode) {
	const textNodeX = textNode?.getAttribute("x") ?? "0";
	const textNodeY = textNode?.getAttribute("y") ?? "0";
	return new _svgdotjs_svg_js.Point(+textNodeX, +textNodeY);
}
function getElementType(element) {
	if (isTextNode(element)) return ElementType.TEXT_NODE;
	if (element?.parentElement?.classList.contains("nad-3wt-nodes")) return ElementType.THREE_WINDINGS_TRANSFORMER;
	if (element?.parentElement?.classList.contains("nad-vl-nodes") || element?.parentElement?.classList.contains("nad-boundary-nodes")) return ElementType.VOLTAGE_LEVEL;
	if (element?.parentElement?.classList.contains("nad-branch-edges") || element?.parentElement?.classList.contains("nad-3wt-edges")) return ElementType.BRANCH;
	return ElementType.UNKNOWN;
}
function getStyleCData(css) {
	const styleElement = document.createElementNS("http://www.w3.org/2000/svg", "style");
	const styleCData = document.implementation.createDocument(null, null).createCDATASection(css);
	styleElement.appendChild(styleCData);
	return styleElement;
}
function getStyle(styleSheets, svgElement) {
	const nadCssRules = [];
	Array.from(styleSheets).forEach((sheet) => {
		Array.from(sheet.cssRules).forEach((rule) => {
			const cssRule = rule;
			if (svgElement?.querySelector(cssRule.selectorText)) nadCssRules.push(rule.cssText.replace("foreignobject", "foreignObject"));
		});
	});
	return getStyleCData(nadCssRules.join("\n"));
}
function getSvgXml(svg) {
	const bytes = new TextEncoder().encode("<?xml version=\"1.0\" standalone=\"no\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\" [<!ENTITY nbsp \"&#160;\">]>" + svg);
	const encodedSvg = Array.from(bytes, (byte) => String.fromCodePoint(byte)).join("");
	return `data:image/svg+xml;base64,${globalThis.btoa(encodedSvg)}`;
}
function getPngFromImage(image) {
	const canvas = document.createElement("canvas");
	const context = canvas.getContext("2d");
	const pixelRatio = window.devicePixelRatio || 1;
	canvas.width = image.width * pixelRatio;
	canvas.height = image.height * pixelRatio;
	canvas.style.width = `${canvas.width}px`;
	canvas.style.height = `${canvas.height}px`;
	context?.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
	context?.drawImage(image, 0, 0);
	return canvas.toDataURL("image/png", .8);
}
function getBlobFromPng(png) {
	const byteString = globalThis.atob(png.split(",")[1]);
	const mimeString = png.split(",")[0].split(":")[1].split(";")[0];
	const buffer = new ArrayBuffer(byteString.length);
	const intArray = new Uint8Array(buffer);
	for (let i = 0; i < byteString.length; i++) intArray[i] = byteString.codePointAt(i) ?? NaN;
	return new Blob([buffer], { type: mimeString });
}
function computeVisibleArea(vbox, containerWidth, containerHeight) {
	if (!vbox) return;
	if (vbox.width == 0 || vbox.height == 0 || containerWidth == 0 || containerHeight == 0) return;
	const scaleWidth = containerWidth / vbox.width;
	const scaleHeight = containerHeight / vbox.height;
	const scale = Math.min(scaleWidth, scaleHeight);
	const dx = (containerWidth / scale - vbox.width) / 2;
	const dy = (containerHeight / scale - vbox.height) / 2;
	return {
		x: vbox.x - dx,
		y: vbox.y - dy,
		width: vbox.width + dx * 2,
		height: vbox.height + dy * 2
	};
}
//#endregion
//#region src/network-area-diagram-viewer/metadata-utils.ts
/**
* Copyright (c) 2025, RTE (http://www.rte-france.com)
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/.
* SPDX-License-Identifier: MPL-2.0
*/
var TEXT_BOX_WIDTH_DEFAULT = 200;
var TEXT_BOX_HEIGHT_DEFAULT = 100;
var EdgeTypeMapping = {
	LineEdge: EdgeType.LINE,
	TwoWtEdge: EdgeType.TWO_WINDINGS_TRANSFORMER,
	PstEdge: EdgeType.PHASE_SHIFT_TRANSFORMER,
	HvdcLineVscEdge: EdgeType.HVDC_LINE_VSC,
	HvdcLineLccEdge: EdgeType.HVDC_LINE_LCC,
	BoundaryLineEdge: EdgeType.BOUNDARY_LINE,
	TieLineEdge: EdgeType.TIE_LINE,
	ThreeWtEdge: EdgeType.THREE_WINDINGS_TRANSFORMER,
	ThreeWtPstEdge: EdgeType.THREE_WINDINGS_PHASE_SHIFT_TRANSFORMER
};
function getBendableLines(edges) {
	const groupedEdges = /* @__PURE__ */ new Map();
	for (const edge of edges ?? []) {
		let edgeGroup = [];
		if (edge.node1 != edge.node2) {
			const edgeGroupId = getGroupedEdgesIndexKey(edge);
			if (groupedEdges.has(edgeGroupId)) edgeGroup = groupedEdges.get(edgeGroupId) ?? [];
			edgeGroup.push(edge);
			groupedEdges.set(edgeGroupId, edgeGroup);
		}
	}
	const lines = [];
	for (const edgeGroup of groupedEdges.values()) {
		const edge = edgeGroup[0];
		if (edgeGroup.length > 1) continue;
		if (getEdgeType(edge) != EdgeType.LINE) continue;
		if (getInvisibleSide(edge)) continue;
		lines.push(edge);
	}
	return lines;
}
function getInvisibleSide(edge) {
	if (edge?.invisible1) return "1";
	if (edge?.invisible2) return "2";
}
function addPointToList(pointsMetadata, node1, node2, bendPoint) {
	let index = 0;
	if (pointsMetadata == void 0) pointsMetadata = [{
		x: bendPoint.x,
		y: bendPoint.y
	}];
	else {
		pointsMetadata.splice(0, 0, {
			x: node1.x,
			y: node1.y
		});
		pointsMetadata.push({
			x: node2.x,
			y: node2.y
		});
		let minDistance = Number.MAX_VALUE;
		for (let i = 0; i < pointsMetadata.length - 1; i++) {
			const distance = getSquareDistanceFromSegment(bendPoint, new _svgdotjs_svg_js.Point(pointsMetadata[i].x, pointsMetadata[i].y), new _svgdotjs_svg_js.Point(pointsMetadata[i + 1].x, pointsMetadata[i + 1].y));
			if (distance < minDistance) {
				minDistance = distance;
				index = i;
			}
		}
		pointsMetadata.pop();
		pointsMetadata.splice(0, 1);
		pointsMetadata.splice(index, 0, {
			x: round(bendPoint.x),
			y: round(bendPoint.y)
		});
	}
	return {
		linePoints: pointsMetadata,
		index
	};
}
function getSquareDistanceFromSegment(p, a, b) {
	const dx = b.x - a.x;
	const dy = b.y - a.y;
	const param = ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx ** 2 + dy ** 2);
	const xx = getValue(param, a.x, b.x);
	const yy = getValue(param, a.y, b.y);
	const distX = p.x - xx;
	const distY = p.y - yy;
	return distX ** 2 + distY ** 2;
}
function getValue(param, firstValue, secondValue) {
	if (param < 0) return firstValue;
	return param > 1 ? secondValue : firstValue + param * (secondValue - firstValue);
}
function getSortedBusNodes(busNodes) {
	const sortedBusNodes = [];
	busNodes?.forEach((busNode) => {
		if (busNode.index >= 0) sortedBusNodes[busNode.index] = busNode;
	});
	return sortedBusNodes;
}
function getGroupedEdgesIndexKey(edge) {
	return edge.node1 < edge.node2 ? edge.node1 + "_" + edge.node2 : edge.node2 + "_" + edge.node1;
}
function getBusNodeMetadata(busNodeId, diagramMetadata) {
	return diagramMetadata?.busNodes.find((busNode) => busNode.svgId == busNodeId);
}
function getNodeMetadata(nodeId, diagramMetadata) {
	return diagramMetadata?.nodes.find((node) => node.svgId == nodeId);
}
function getNodeMove(node, nodePosition) {
	const xNew = round(nodePosition.x);
	const yNew = round(nodePosition.y);
	return {
		xOrig: node.x,
		yOrig: node.y,
		xNew,
		yNew
	};
}
function getTextNodeMoves(textNode, vlNode, textPosition, connectionPosition) {
	const xNew = round(textPosition.x - vlNode.x);
	const yNew = round(textPosition.y - vlNode.y);
	const connXNew = round(connectionPosition.x - vlNode.x);
	const connYNew = round(connectionPosition.y - vlNode.y);
	return [{
		xOrig: textNode.shiftX,
		yOrig: textNode.shiftY,
		xNew,
		yNew
	}, {
		xOrig: textNode.connectionShiftX,
		yOrig: textNode.connectionShiftY,
		xNew: connXNew,
		yNew: connYNew
	}];
}
function getRightClickableElementData(elementId, elementType, nodes, textNodes, edges) {
	if (!elementId) return;
	switch (elementType) {
		case ElementType.VOLTAGE_LEVEL:
		case ElementType.THREE_WINDINGS_TRANSFORMER: {
			const node = nodes?.find((node) => node.svgId == elementId);
			return node == null ? void 0 : {
				svgId: node.svgId,
				equipmentId: node.equipmentId,
				type: ElementType[elementType]
			};
		}
		case ElementType.TEXT_NODE: {
			const textNode = textNodes?.find((textNode) => textNode.svgId == elementId);
			return textNode == null ? void 0 : {
				svgId: textNode.svgId,
				equipmentId: textNode.equipmentId,
				type: ElementType[elementType]
			};
		}
		case ElementType.BRANCH: {
			const edge = edges?.find((edge) => edge.svgId == elementId);
			return edge == null ? void 0 : {
				svgId: edge.svgId,
				equipmentId: edge.equipmentId,
				type: getStringEdgeType(edge)
			};
		}
		default: return;
	}
}
function getViewBox(nodes, textNodes, svgParameters) {
	const size = {
		minX: Number.MAX_VALUE,
		maxX: -Number.MAX_VALUE,
		minY: Number.MAX_VALUE,
		maxY: -Number.MAX_VALUE
	};
	const nodesMap = /* @__PURE__ */ new Map();
	nodes?.forEach((node) => {
		nodesMap.set(node.equipmentId, node);
		size.minX = Math.min(size.minX, node.x);
		size.maxX = Math.max(size.maxX, node.x);
		size.minY = Math.min(size.minY, node.y);
		size.maxY = Math.max(size.maxY, node.y);
	});
	textNodes?.forEach((textNode) => {
		const node = nodesMap.get(textNode.equipmentId);
		if (node !== void 0) {
			size.minX = Math.min(size.minX, node.x + textNode.shiftX);
			size.maxX = Math.max(size.maxX, node.x + textNode.shiftX + TEXT_BOX_WIDTH_DEFAULT);
			size.minY = Math.min(size.minY, node.y + textNode.shiftY);
			size.maxY = Math.max(size.maxY, node.y + textNode.shiftY + TEXT_BOX_HEIGHT_DEFAULT);
		}
	});
	return {
		x: round(size.minX - svgParameters.getDiagramPadding().left),
		y: round(size.minY - svgParameters.getDiagramPadding().top),
		width: round(size.maxX - size.minX + svgParameters.getDiagramPadding().left + svgParameters.getDiagramPadding().right),
		height: round(size.maxY - size.minY + svgParameters.getDiagramPadding().top + svgParameters.getDiagramPadding().bottom)
	};
}
function getNodeRadius(busNode, node, svgParameters) {
	const nbNeighbours = busNode?.nbNeighbours ?? 0;
	const busIndex = busNode?.index ?? 0;
	const vlCircleRadius = getVoltageLevelCircleRadius(nbNeighbours, node?.fictitious, svgParameters);
	const interAnnulusSpace = svgParameters.getInterAnnulusSpace();
	const unitaryRadius = vlCircleRadius / (nbNeighbours + 1);
	return {
		busInnerRadius: busIndex == 0 ? 0 : busIndex * unitaryRadius + interAnnulusSpace / 2,
		busOuterRadius: (busIndex + 1) * unitaryRadius - interAnnulusSpace / 2,
		voltageLevelRadius: vlCircleRadius
	};
}
function getEdgePoints(edgeStart1, edgeFork1, edgeEnd1, edgeStart2, edgeFork2, edgeEnd2, bendingPoints) {
	if (!bendingPoints) return [edgeFork1 ? [
		edgeStart1,
		edgeFork1,
		edgeEnd1
	] : [edgeStart1, edgeEnd1], edgeFork2 ? [
		edgeStart2,
		edgeFork2,
		edgeEnd2
	] : [edgeStart2, edgeEnd2]];
	const pointsMetadata = bendingPoints.slice();
	pointsMetadata.splice(0, 0, {
		x: edgeStart1.x,
		y: edgeStart1.y
	});
	pointsMetadata.push({
		x: edgeStart2.x,
		y: edgeStart2.y
	});
	let distance = 0;
	for (let i = 0; i < pointsMetadata.length - 1; i++) distance += getDistance(new _svgdotjs_svg_js.Point(pointsMetadata[i].x, pointsMetadata[i].y), new _svgdotjs_svg_js.Point(pointsMetadata[i + 1].x, pointsMetadata[i + 1].y));
	const halfEdgePoints1 = [new _svgdotjs_svg_js.Point(pointsMetadata[0].x, pointsMetadata[0].y)];
	const halfEdgePoints2 = [];
	let partialDistance = 0;
	let middleAdded = false;
	for (let i = 0; i < pointsMetadata.length - 1; i++) {
		const point = new _svgdotjs_svg_js.Point(pointsMetadata[i].x, pointsMetadata[i].y);
		const nextPoint = new _svgdotjs_svg_js.Point(pointsMetadata[i + 1].x, pointsMetadata[i + 1].y);
		partialDistance += getDistance(point, nextPoint);
		if (partialDistance < distance / 2) halfEdgePoints1.push(nextPoint);
		else {
			if (!middleAdded) {
				const edgeMiddle = getPointAtDistance(nextPoint, point, partialDistance - distance / 2);
				halfEdgePoints1.push(edgeMiddle);
				halfEdgePoints2.push(edgeMiddle);
				middleAdded = true;
			}
			halfEdgePoints2.push(nextPoint);
		}
	}
	return [halfEdgePoints1, halfEdgePoints2.reverse()];
}
function getEdgeType(edge) {
	if (edge.type == null) return EdgeType.UNKNOWN;
	return EdgeTypeMapping[edge.type];
}
function getStringEdgeType(edge) {
	return EdgeType[getEdgeType(edge)];
}
function getEdgeNodePoints(edge, diagramMetadata) {
	const node1 = getNodeMetadata(edge.node1, diagramMetadata);
	const node2 = getNodeMetadata(edge.node2, diagramMetadata);
	if (node1 == null || node2 == null) return [void 0, void 0];
	return [new _svgdotjs_svg_js.Point(node1.x, node1.y), new _svgdotjs_svg_js.Point(node2.x, node2.y)];
}
//#endregion
//#region src/network-area-diagram-viewer/half-edge-utils.ts
/**
* Copyright (c) 2025, RTE (http://www.rte-france.com)
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/.
* SPDX-License-Identifier: MPL-2.0
*/
function getEdgeStartAngle(halfEdge) {
	return getAngle(halfEdge.edgePoints[0], halfEdge.edgePoints[1]);
}
function getArrowRotation(halfEdge) {
	const angle = getArrowEdgeAngle(halfEdge);
	return radToDeg(angle + (angle > Math.PI / 2 ? -3 * Math.PI / 2 : Math.PI / 2));
}
function getArrowEdgeAngle(halfEdge) {
	return halfEdge.fork ? getAngle(halfEdge.edgePoints[1], halfEdge.edgePoints[2]) : getAngle(halfEdge.edgePoints[0], halfEdge.edgePoints[1]);
}
function getMiddleArrowRotation(halfEdge1, halfEdge2) {
	if (!halfEdge1 && !halfEdge2) return 0;
	let angleMiddleArrow = halfEdge1 && halfEdge2 ? getAngle(halfEdge1.edgePoints.at(-2) ?? halfEdge1.edgePoints[0], halfEdge2.edgePoints.at(-2) ?? halfEdge2.edgePoints[0]) : getArrowEdgeAngle(halfEdge1 ?? halfEdge2);
	angleMiddleArrow += angleMiddleArrow > Math.PI / 2 ? -3 * Math.PI / 2 : Math.PI / 2;
	return radToDeg(halfEdge1 === null && halfEdge2 !== null ? angleMiddleArrow - Math.PI : angleMiddleArrow);
}
function getInfoPoint(halfEdge, svgParameters) {
	if (halfEdge.fork) return getPointAtDistance(halfEdge.edgePoints[1], halfEdge.edgePoints[2], svgParameters.getArrowShift());
	else {
		const arrowShiftFromEdgeStart = svgParameters.getArrowShift() + (halfEdge.voltageLevelRadius - halfEdge.busOuterRadius);
		return getPointAtDistance(halfEdge.edgePoints[0], halfEdge.edgePoints[1], arrowShiftFromEdgeStart);
	}
}
function getLabelData(halfEdge, arrowLabelShift) {
	const angle = getArrowEdgeAngle(halfEdge);
	const textFlipped = Math.cos(angle) < 0;
	const internalShiftAndStyle = getLabelShiftAndStyle(angle, false, arrowLabelShift);
	const externalShiftAndStyle = getLabelShiftAndStyle(angle, true, arrowLabelShift);
	return {
		angle: radToDeg(textFlipped ? angle - Math.PI : angle),
		internal: {
			shift: internalShiftAndStyle[0],
			style: internalShiftAndStyle[1]
		},
		external: {
			shift: externalShiftAndStyle[0],
			style: externalShiftAndStyle[1]
		}
	};
}
function getConverterStationPoints(halfEdge, converterStationWidth) {
	const halfWidth = converterStationWidth / 2;
	const middlePoint = halfEdge.edgePoints.at(-1);
	const point1 = getPointAtDistance(middlePoint, halfEdge.edgePoints.at(-2), halfWidth);
	return [point1, getPointAtDistance(point1, middlePoint, converterStationWidth)];
}
function getConverterStationPolyline(halfEdge1, halfEdge2, converterStationWidth) {
	if (halfEdge1) return getFormattedPolyline(getConverterStationPoints(halfEdge1, converterStationWidth));
	else if (halfEdge2) return getFormattedPolyline(getConverterStationPoints(halfEdge2, converterStationWidth));
	else return "";
}
function getThreeWtHalfEdge(points, edgeMetadata, threeWtMoved, initialPosition, diagramMetadata, svgParameters) {
	if (!points) return;
	const busNode = getBusNodeMetadata(edgeMetadata.busNode1, diagramMetadata);
	const vlNode = getNodeMetadata(edgeMetadata.node1, diagramMetadata);
	const twtNode = getNodeMetadata(edgeMetadata.node2, diagramMetadata);
	if (!vlNode || !twtNode) return;
	const pointVl = new _svgdotjs_svg_js.Point(vlNode.x, vlNode.y);
	const pointTwt = new _svgdotjs_svg_js.Point(twtNode.x, twtNode.y);
	const nodeRadius = getNodeRadius(busNode, vlNode, svgParameters);
	const edgeStart = getEdgeStart(edgeMetadata.busNode1, pointVl, pointTwt, nodeRadius.busOuterRadius, svgParameters);
	const edgeEnd = threeWtMoved && initialPosition ? new _svgdotjs_svg_js.Point(points.at(-1).x + pointTwt.x - initialPosition.x, points.at(-1).y + pointTwt.y - initialPosition.y) : points.at(-1);
	return {
		side: "1",
		fork: false,
		busOuterRadius: nodeRadius.busOuterRadius,
		voltageLevelRadius: nodeRadius.voltageLevelRadius,
		edgeInfoId: edgeMetadata.edgeInfo1?.svgId,
		edgePoints: [edgeStart, edgeEnd]
	};
}
function getHalfVisibleHalfEdges(polylinePoints, edgeMetadata, visibleSide, fork, diagramMetadata, initialPosition, svgParameters) {
	if (!polylinePoints || polylinePoints.length == 0) return [null, null];
	const visibleNodeId = visibleSide == "1" ? edgeMetadata.node1 : edgeMetadata.node2;
	const visibleNodeMetadata = diagramMetadata?.nodes.find((node) => node.svgId === visibleNodeId);
	if (!visibleNodeMetadata) return [null, null];
	if (initialPosition) polylinePoints = getTranslatedPolyline(polylinePoints, visibleNodeMetadata, initialPosition);
	const nodeRadius = getNodeRadius(getBusNodeMetadata(visibleSide == "1" ? edgeMetadata.busNode1 : edgeMetadata.busNode2, diagramMetadata), getNodeMetadata(visibleSide == "1" ? edgeMetadata.node1 : edgeMetadata.node2, diagramMetadata), svgParameters);
	const point = new _svgdotjs_svg_js.Point(visibleNodeMetadata.x, visibleNodeMetadata.y);
	const visibleBusNode = visibleSide == "1" ? edgeMetadata.busNode1 : edgeMetadata.busNode2;
	polylinePoints[0] = getEdgeStart(visibleBusNode, point, polylinePoints[1], nodeRadius.busOuterRadius, svgParameters);
	const halfEdges = [null, null];
	const visibleHalfEdge = {
		side: visibleSide,
		fork,
		busOuterRadius: nodeRadius.busOuterRadius,
		voltageLevelRadius: nodeRadius.voltageLevelRadius,
		edgePoints: polylinePoints
	};
	if (visibleSide == "1") {
		halfEdges[0] = visibleHalfEdge;
		visibleHalfEdge.edgeInfoId = edgeMetadata.edgeInfo1?.svgId;
	} else {
		halfEdges[1] = visibleHalfEdge;
		visibleHalfEdge.edgeInfoId = edgeMetadata.edgeInfo2?.svgId;
	}
	return halfEdges;
}
function getHalfEdges(edge, iEdge, groupedEdgesCount, diagramMetadata, svgParameters, point1, point2) {
	const edgeType = getEdgeType(edge);
	const busNode1 = getBusNodeMetadata(edge.busNode1, diagramMetadata);
	const busNode2 = getBusNodeMetadata(edge.busNode2, diagramMetadata);
	const node1 = getNodeMetadata(edge.node1, diagramMetadata);
	const node2 = getNodeMetadata(edge.node2, diagramMetadata);
	if (node1 == null || node2 == null) return [null, null];
	point1 ??= new _svgdotjs_svg_js.Point(node1.x, node1.y);
	point2 ??= new _svgdotjs_svg_js.Point(node2.x, node2.y);
	let edgeFork1;
	let edgeFork2;
	if (groupedEdgesCount > 1) {
		const angle = getAngle(point1, point2);
		const angleStep = svgParameters.getEdgesForkAperture() / (groupedEdgesCount - 1);
		const alpha = -svgParameters.getEdgesForkAperture() / 2 + iEdge * angleStep;
		const angleFork1 = angle - alpha;
		const angleFork2 = angle + Math.PI + alpha;
		edgeFork1 = getEdgeFork(point1, svgParameters.getEdgesForkLength(), angleFork1);
		edgeFork2 = getEdgeFork(point2, svgParameters.getEdgesForkLength(), angleFork2);
	}
	const edgeDirection1 = getEdgeDirection(point2, edgeFork1, edge.bendingPoints?.at(0));
	const nodeRadius1 = getNodeRadius(busNode1, node1, svgParameters);
	const edgeStart1 = getEdgeStart(edge.busNode1, point1, edgeDirection1, nodeRadius1.busOuterRadius, svgParameters);
	const edgeDirection2 = getEdgeDirection(point1, edgeFork2, edge.bendingPoints?.at(-1));
	const nodeRadius2 = getNodeRadius(busNode2, node2, svgParameters);
	const edgeStart2 = getEdgeStart(edge.busNode2, point2, edgeDirection2, nodeRadius2.busOuterRadius, svgParameters);
	const edgeMiddle = edgeFork1 && edgeFork2 ? getMidPosition(edgeFork1, edgeFork2) : getMidPosition(edgeStart1, edgeStart2);
	let edgeEnd1 = edgeMiddle;
	let edgeEnd2 = edgeMiddle;
	if (isTransformerEdge(edgeType)) {
		const endShift = 1.5 * svgParameters.getTransformerCircleRadius();
		edgeEnd1 = getPointAtDistance(edgeMiddle, edgeFork1 ?? edgeStart1, endShift);
		edgeEnd2 = getPointAtDistance(edgeMiddle, edgeFork2 ?? edgeStart2, endShift);
	}
	const edgePoints = getEdgePoints(edgeStart1, edgeFork1, edgeEnd1, edgeStart2, edgeFork2, edgeEnd2, edge.bendingPoints);
	return [{
		side: "1",
		fork: groupedEdgesCount > 1,
		busOuterRadius: nodeRadius1.busOuterRadius,
		voltageLevelRadius: nodeRadius1.voltageLevelRadius,
		edgeInfoId: edge.edgeInfo1?.svgId,
		edgePoints: edgePoints[0]
	}, {
		side: "2",
		fork: groupedEdgesCount > 1,
		busOuterRadius: nodeRadius2.busOuterRadius,
		voltageLevelRadius: nodeRadius2.voltageLevelRadius,
		edgeInfoId: edge.edgeInfo2?.svgId,
		edgePoints: edgePoints[1]
	}];
}
function getHalfEdgesLoop(edge, diagramMetadata, element, svgParameters) {
	if (!element) return [null, null];
	const node1 = getNodeMetadata(edge.node1, diagramMetadata);
	const node2 = getNodeMetadata(edge.node2, diagramMetadata);
	if (node1 != node2) return [null, null];
	const busNode1 = getBusNodeMetadata(edge.busNode1, diagramMetadata);
	const busNode2 = getBusNodeMetadata(edge.busNode2, diagramMetadata);
	const nodeRadius1 = getNodeRadius(busNode1, node1, svgParameters);
	const nodeRadius2 = getNodeRadius(busNode2, node2, svgParameters);
	const paths = element.getElementsByTagName("path");
	const path1 = paths.length > 0 ? paths[0].getAttribute("d") : null;
	const path2 = paths.length > 1 ? paths[1].getAttribute("d") : null;
	const pathPoints1 = getPathPoints(path1) ?? [];
	const pathPoints2 = getPathPoints(path2) ?? [];
	const transform = getTransform(element);
	if (transform) {
		const svgTransformMatrix = new _svgdotjs_svg_js.Matrix(transform.matrix);
		for (const points of [pathPoints1, pathPoints2]) for (let i = 0; i < points.length; i++) points[i] = points[i].transform(svgTransformMatrix);
	}
	return [{
		side: "1",
		fork: false,
		busOuterRadius: nodeRadius1.busOuterRadius,
		voltageLevelRadius: nodeRadius1.voltageLevelRadius,
		edgeInfoId: edge.edgeInfo1?.svgId,
		edgePoints: pathPoints1
	}, {
		side: "2",
		fork: false,
		busOuterRadius: nodeRadius2.busOuterRadius,
		voltageLevelRadius: nodeRadius2.voltageLevelRadius,
		edgeInfoId: edge.edgeInfo2?.svgId,
		edgePoints: pathPoints2
	}];
}
function getTranslatedPolyline(polylinePoints, nodeMetadata, initialPosition) {
	const translation = new _svgdotjs_svg_js.Point(nodeMetadata.x - initialPosition.x, nodeMetadata.y - initialPosition.y);
	return polylinePoints.map((point) => new _svgdotjs_svg_js.Point(point.x + translation.x, point.y + translation.y));
}
function getEdgeStart(busNodeId, vlPoint, direction, busOuterRadius, svgParameters) {
	return getPointAtDistance(vlPoint, direction, busNodeId?.length == 0 ? busOuterRadius + svgParameters.getUnknownBusNodeExtraRadius() : busOuterRadius);
}
function getEdgeDirection(nodePoint, edgeFork, firstBendingPoint) {
	if (firstBendingPoint) return new _svgdotjs_svg_js.Point(firstBendingPoint.x, firstBendingPoint.y);
	if (edgeFork) return edgeFork;
	return nodePoint;
}
function getInfoPointAndAngle(halfEdge1, halfEdge2) {
	if (halfEdge1 && halfEdge2) return [getMidPosition(halfEdge1.edgePoints.at(-1), halfEdge2.edgePoints.at(-1)), getEdgeNameAngle(halfEdge1.edgePoints.at(-2), halfEdge2.edgePoints.at(-1))];
	else {
		const visibleHalfEdge = halfEdge1 ?? halfEdge2 ?? null;
		if (!visibleHalfEdge) return void 0;
		return [visibleHalfEdge.edgePoints.at(-1), getEdgeNameAngle(visibleHalfEdge.edgePoints.at(-2), visibleHalfEdge.edgePoints.at(-1))];
	}
}
function getMiddleLabelData(halfEdge1, halfEdge2, externalLabel, arrowLabelShift) {
	if (!halfEdge1 && !halfEdge2) return [0, void 0];
	const halfEdge = halfEdge1 ?? halfEdge2;
	return getLabelShiftAndStyle(getAngle(halfEdge.edgePoints.at(-2), halfEdge.edgePoints.at(-1)), externalLabel, arrowLabelShift);
}
//#endregion
//#region src/resources/default-library/components.json
var components_default = [
	{
		"type": "LOCK",
		"size": {
			"width": 50,
			"height": 50
		},
		"subComponents": [{
			"name": "LOCK",
			"fileName": "lock.svg"
		}],
		"styleClass": "nad-lock"
	},
	{
		"type": "FLASH",
		"size": {
			"width": 50,
			"height": 50
		},
		"subComponents": [{
			"name": "FLASH",
			"fileName": "flash.svg"
		}],
		"styleClass": "nad-flash"
	},
	{
		"type": "UNKNOWN_COMPONENT",
		"size": {
			"width": 50,
			"height": 50
		},
		"subComponents": [{
			"name": "UNKNOWN_COMPONENT",
			"fileName": "unknown-component.svg"
		}],
		"styleClass": "nad-unknown"
	}
];
//#endregion
//#region src/network-area-diagram-viewer/component-utils.ts
var DefaultComponentSvgMapping = Object.fromEntries(Object.entries(/* @__PURE__ */ Object.assign({
	"../resources/default-library/flash.svg": "data:image/svg+xml,%3csvg%20width='50'%20height='50'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M34.71%203.91H21l-7.4%2022.28a.1.1%200%200%200%20.09.13h8.49a.1.1%200%200%201%20.1.13L15.71%2046.09a.5.5%200%200%200%20.88.45L36.41%2019.33a.1.1%200%200%200-.08-.16H27.42a.11.11%200%200%201-.09-.15l7.47-15a.1.1%200%200%200-.09-.11Z'/%3e%3c/svg%3e",
	"../resources/default-library/lock.svg": "data:image/svg+xml,%3c?xml%20version='1.0'%20standalone='no'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='50'%20height='50'%20style='fill:none;stroke:black;stroke-width:1'%3e%3cpath%20d='M32%2022V18A8%208%200%200%200%2016%2018v4a3.24%203.24%200%200%200-3%203.21v9.54A3.23%203.23%200%200%200%2016.23%2038H31.77A3.23%203.23%200%200%200%2035%2034.77V25.23A3.24%203.24%200%200%200%2032%2022ZM24%2012a6%206%200%200%201%206%206v4H18V18A6%206%200%200%201%2024%2012Zm9%2022.77A1.23%201.23%200%200%201%2031.77%2036H16.23A1.23%201.23%200%200%201%2015%2034.77V25.23A1.23%201.23%200%200%201%2016.23%2024H31.77A1.23%201.23%200%200%201%2033%2025.23Z'/%3e%3c/svg%3e",
	"../resources/default-library/unknown-component.svg": "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20version='1.0'%20height='50'%20width='50'%3e%3cpath%20d='M25,15%2015,25%2025,35%2035,25Z%20m2.57,7.93%20c%200,1.7%20-0.8,1.93%20-2.2,2.87%20V%2027%20H%2024.28%20V%2025.3%20C%2025.5,24.73%2026.5,24.26%2026.5,23%2026.5,21.35%2023.89,21.58%2022.62,22.36%20H%2022.93%20V%2021.19%20C%2024.97,20.55%2027.5,20.59%2027.5,22.93%20Z%20M%2024.25,27.7%20h%201.15%20v%201.2%20H24.25%20Z'/%3e%3c/svg%3e"
})).map(([modulePath, url]) => {
	return [modulePath.split("/").at(-1), url];
}));
function getComponent(componentLibrary, type) {
	return componentLibrary.find((component) => component.type == type);
}
async function getComponentPath(componentFilename, svgUrlResolver) {
	const url = svgUrlResolver ? svgUrlResolver(componentFilename) : DefaultComponentSvgMapping[componentFilename];
	const svgContent = await (await fetch(url)).text();
	return (0, _svgdotjs_svg_js.SVG)().svg(svgContent).node.firstElementChild?.firstElementChild;
}
//#endregion
//#region src/network-area-diagram-viewer/network-area-diagram-viewer.ts
/**
* Copyright (c) 2022-2024, RTE (http://www.rte-france.com)
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/
var LineOperation = /* @__PURE__ */ function(LineOperation) {
	LineOperation[LineOperation["BEND"] = 0] = "BEND";
	LineOperation[LineOperation["STRAIGHTEN"] = 1] = "STRAIGHTEN";
	return LineOperation;
}({});
var dynamicCssRulesUpdateThreshold = .01;
var NetworkAreaDiagramViewer = class NetworkAreaDiagramViewer {
	static DEFAULT_PNG_BACKGROUND_COLOR = "white";
	container;
	svgDiv;
	svgContent;
	diagramMetadata;
	width;
	height;
	originalWidth;
	originalHeight;
	svgDraw;
	innerSvg;
	textNodesSection;
	textEdgesSection;
	edgeInfosSection;
	ratio = 1;
	selectedElement = null;
	draggedElement = null;
	hoveredElement = null;
	hoveredElementPosition = new _svgdotjs_svg_js.Point(0, 0);
	transform;
	ctm = null;
	initialPosition = null;
	svgParameters;
	layoutParameters;
	nadViewerParameters;
	edgeAngles1 = /* @__PURE__ */ new Map();
	edgeAngles2 = /* @__PURE__ */ new Map();
	draggedElementType = null;
	enableDragInteraction = false;
	isDragging = false;
	cursorOverlayRect = null;
	endTextEdge = new _svgdotjs_svg_js.Point(0, 0);
	onMoveNodeCallback;
	onMoveTextNodeCallback;
	onSelectNodeCallback;
	onToggleHoverCallback;
	debounceToggleHoverCallback;
	previousMaxDisplayedSize;
	edgesMap = /* @__PURE__ */ new Map();
	onRightClickCallback;
	originalNodePosition = new _svgdotjs_svg_js.Point(0, 0);
	originalTextNodeShift = new _svgdotjs_svg_js.Point(0, 0);
	originalTextNodeConnectionShift = new _svgdotjs_svg_js.Point(0, 0);
	lastZoomLevel = 0;
	zoomLevels = [
		0,
		1e3,
		2200,
		2500,
		3e3,
		4e3,
		9e3,
		12e3,
		2e4
	];
	isHoverCallbackUsed = false;
	hoverPositionPrecision = 0;
	bendLines = false;
	onBendLineCallback;
	straightenedElement = null;
	bendableLines = [];
	linePointIndexMap = /* @__PURE__ */ new Map();
	groupedEdgesIndexMap = null;
	nodeMap = null;
	componentLibrary = components_default;
	static ZOOM_CLASS_PREFIX = "nad-zoom-";
	/**
	* @param container - The HTML element that will contain the SVG diagram.
	* @param svgContent - The SVG content to be rendered in the viewer.
	* @param diagramMetadata - Metadata associated with the diagram, including nodes, edges, and other properties.
	* @param nadViewerParametersOptions - Parameters for the network area diagram viewer.
	*/
	constructor(container, svgContent, diagramMetadata, nadViewerParametersOptions) {
		this.container = container;
		this.svgDiv = document.createElement("div");
		this.svgDiv.id = "svg-container";
		this.svgContent = svgContent;
		this.diagramMetadata = diagramMetadata;
		this.nadViewerParameters = new NadViewerParameters(nadViewerParametersOptions ?? void 0);
		this.width = 0;
		this.height = 0;
		this.originalWidth = 0;
		this.originalHeight = 0;
		this.enableDragInteraction = this.nadViewerParameters.getEnableDragInteraction();
		this.onMoveNodeCallback = this.nadViewerParameters.getOnMoveNodeCallback();
		this.onMoveTextNodeCallback = this.nadViewerParameters.getOnMoveTextNodeCallback();
		this.onRightClickCallback = this.nadViewerParameters.getOnRightClickCallback();
		this.onSelectNodeCallback = this.nadViewerParameters.getOnSelectNodeCallback();
		this.onToggleHoverCallback = this.nadViewerParameters.getOnToggleHoverCallback();
		this.debounceToggleHoverCallback = this.initDebounceToggleHoverCallback();
		this.onBendLineCallback = this.nadViewerParameters.getOnBendingLineCallback();
		this.zoomLevels = this.nadViewerParameters.getZoomLevels();
		this.zoomLevels.sort((a, b) => b - a);
		this.hoverPositionPrecision = this.nadViewerParameters.getHoverPositionPrecision();
		this.svgParameters = new SvgParameters(this.diagramMetadata?.svgParameters);
		this.init();
		this.layoutParameters = new LayoutParameters(this.diagramMetadata?.layoutParameters);
		this.previousMaxDisplayedSize = 0;
		this.componentLibrary = this.nadViewerParameters.getComponentLibrary() ?? components_default;
	}
	setWidth(width) {
		this.width = width;
	}
	setOriginalWidth(originalWidth) {
		this.originalWidth = originalWidth;
	}
	setHeight(height) {
		this.height = height;
	}
	setOriginalHeight(originalHeight) {
		this.originalHeight = originalHeight;
	}
	setContainer(container) {
		this.container = container;
	}
	setSvgContent(svgContent) {
		this.svgContent = svgContent;
	}
	getWidth() {
		return this.width;
	}
	getOriginalWidth() {
		return this.originalWidth;
	}
	getHeight() {
		return this.height;
	}
	getOriginalHeight() {
		return this.originalHeight;
	}
	getContainer() {
		return this.container;
	}
	getSvgContent() {
		return this.svgContent;
	}
	getViewBox() {
		return this.svgDraw?.viewbox();
	}
	setViewBox(viewBox) {
		this.svgDraw?.viewbox(viewBox);
	}
	setPreviousMaxDisplayedSize(previousMaxDisplayedSize) {
		this.previousMaxDisplayedSize = previousMaxDisplayedSize;
	}
	getPreviousMaxDisplayedSize() {
		return this.previousMaxDisplayedSize;
	}
	getNodeIdFromEquipmentId(equipmentId) {
		return (this.diagramMetadata?.nodes.find((node) => node.equipmentId == equipmentId))?.svgId || null;
	}
	moveNodeToCoordinates(equipmentId, x, y) {
		const nodeId = this.getNodeIdFromEquipmentId(equipmentId);
		if (nodeId != null) {
			const elemToMove = this.svgDiv.querySelector("[id=\"" + nodeId + "\"]");
			if (elemToMove) {
				this.updateNodeMetadata(elemToMove, new _svgdotjs_svg_js.Point(x, y));
				this.updateElement(elemToMove);
				this.initialPosition = null;
			}
		}
	}
	moveTextNodeToCoordinates(equipmentId, shiftX, shiftY, connectionShiftX, connectionShiftY) {
		const nodeId = this.getNodeIdFromEquipmentId(equipmentId);
		if (nodeId == null) return;
		const nodeElement = this.svgDiv.querySelector("[id=\"" + nodeId + "\"]");
		if (!nodeElement) return;
		const nodePosition = getPosition(nodeElement);
		const textNodeMetadata = this.diagramMetadata?.textNodes.find((node) => node.equipmentId == equipmentId);
		if (!textNodeMetadata) return;
		const elemToMove = this.svgDiv.querySelector("[id=\"" + textNodeMetadata.svgId + "\"]");
		if (!elemToMove) return;
		this.endTextEdge = new _svgdotjs_svg_js.Point(nodePosition.x + connectionShiftX, nodePosition.y + connectionShiftY);
		const textNodeTopLeftCornerPosition = new _svgdotjs_svg_js.Point(nodePosition.x + shiftX, nodePosition.y + shiftY);
		this.updateTextNodeMetadata(textNodeMetadata.svgId, textNodeTopLeftCornerPosition);
		this.updateElement(elemToMove);
		this.initialPosition = null;
	}
	hasNodeInteraction() {
		return this.enableDragInteraction || this.onRightClickCallback != null || this.onSelectNodeCallback != null;
	}
	init() {
		if (!this.container || !this.svgContent) return;
		const dimensions = this.getDimensionsFromSvg();
		if (!dimensions) return;
		this.container.innerHTML = "";
		const nadViewerDiv = document.createElement("div");
		nadViewerDiv.id = "nad-viewer";
		nadViewerDiv.style.position = "relative";
		this.container.appendChild(nadViewerDiv);
		if (this.nadViewerParameters.getAddButtons()) {
			nadViewerDiv.appendChild(this.getZoomButtonsBar());
			nadViewerDiv.appendChild(this.getActionButtonsBar());
		}
		nadViewerDiv.appendChild(this.svgDiv);
		this.setOriginalWidth(dimensions.width);
		this.setOriginalHeight(dimensions.height);
		this.setWidth(dimensions.width < this.nadViewerParameters.getMinWidth() ? this.nadViewerParameters.getMinWidth() : Math.min(dimensions.width, this.nadViewerParameters.getMaxWidth()));
		this.setHeight(dimensions.height < this.nadViewerParameters.getMinHeight() ? this.nadViewerParameters.getMinHeight() : Math.min(dimensions.height, this.nadViewerParameters.getMaxHeight()));
		const viewBox = this.nadViewerParameters.getInitialViewBox() ?? {
			x: dimensions.viewbox.x,
			y: dimensions.viewbox.y,
			width: dimensions.viewbox.width,
			height: dimensions.viewbox.height
		};
		this.svgDraw = (0, _svgdotjs_svg_js.SVG)().addTo(this.svgDiv).size(this.width, this.height).viewbox(viewBox);
		this.innerSvg = this.svgDraw.svg(this.svgContent).node.firstElementChild;
		this.innerSvg.style.overflow = "visible";
		this.textNodesSection = this.getOrCreateTextNodesSection();
		this.textEdgesSection = this.getOrCreateTextEdgesSection();
		this.edgeInfosSection = this.getOrCreateEdgeInfosSection();
		const hasMetadata = this.diagramMetadata !== null;
		if (this.hasNodeInteraction() && hasMetadata) {
			this.svgDraw.on("mousedown", (e) => {
				if (e.button == 0) this.onMouseLeftDown(e);
			});
			this.svgDraw.on("mousemove", (e) => {
				this.onMouseMove(e);
			});
			this.svgDraw.on("mouseup mouseleave", (e) => {
				if (e.button == 0) this.onMouseLeftUpOrLeave(e);
			});
		}
		if (hasMetadata) {
			this.svgDraw.on("mouseover", (e) => {
				this.onHover(e);
			});
			this.svgDraw.on("mouseout", () => {
				this.clearHighlights();
				this.hideEdgePreviewPoints();
			});
		}
		if (this.onRightClickCallback != null && hasMetadata) this.svgDraw.on("mousedown", (e) => {
			if (e.button == 2) this.onMouseRightDown(e);
		});
		this.svgDraw.on("panStart", () => {
			this.attachCursorOverlay("move");
		});
		this.svgDraw.on("panEnd", () => {
			this.detachCursorOverlay();
			if (this.nadViewerParameters.getAdaptiveTextZoom().enabled) this.adaptiveZoomViewboxUpdate(this.getCurrentlyMaxDisplayedSize());
		});
		const widthRatio = dimensions.viewbox.width / this.getWidth();
		const heightRatio = dimensions.viewbox.height / this.getHeight();
		this.ratio = Math.max(widthRatio, heightRatio);
		this.enablePanzoom();
		const firstChild = this.svgDraw.node.firstChild;
		firstChild.removeAttribute("viewBox");
		firstChild.removeAttribute("width");
		firstChild.removeAttribute("height");
		if (this.nadViewerParameters.getEnableLevelOfDetail() || this.nadViewerParameters.getAdaptiveTextZoom().enabled) {
			this.svgDraw.fire("zoom");
			this.checkAndUpdateLevelOfDetail();
			const observerCallback = (mutationList) => {
				for (const mutation of mutationList) if (mutation.attributeName === "viewBox") this.checkAndUpdateLevelOfDetail();
			};
			const debouncedObserverCallback = (0, lodash_debounce.default)(observerCallback, 50);
			new MutationObserver(debouncedObserverCallback).observe(this.svgDraw.node, { attributeFilter: ["viewBox"] });
		}
		if (this.hasNodeInteraction() && hasMetadata) this.svgDiv.querySelectorAll(".nad-unknown-busnode, .nad-3wt-nodes .nad-winding, g.nad-injections>g>g>g>g>circle").forEach((emptyElement) => {
			emptyElement.style.fill = "#0000";
		});
		if (this.onRightClickCallback != null && hasMetadata) this.svgDiv.querySelectorAll(".nad-branch-edges .nad-winding").forEach((emptyElement) => {
			emptyElement.style.fill = "#0000";
		});
	}
	getOrCreateTextNodesSection() {
		let textNodesGElement = this.innerSvg?.querySelector(":scope > g.nad-text-nodes");
		if (!textNodesGElement) {
			textNodesGElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
			textNodesGElement.classList.add("nad-text-nodes");
			this.innerSvg?.appendChild(textNodesGElement);
		}
		return textNodesGElement;
	}
	getOrCreateTextEdgesSection() {
		let legendEdgesSection = this.innerSvg?.querySelector(":scope > g.nad-text-edges");
		if (!legendEdgesSection) {
			legendEdgesSection = document.createElementNS("http://www.w3.org/2000/svg", "g");
			legendEdgesSection.classList.add("nad-text-edges");
			this.innerSvg?.appendChild(legendEdgesSection);
		}
		return legendEdgesSection;
	}
	getOrCreateEdgeInfosSection() {
		let edgeInfos = this.innerSvg?.querySelector(":scope > g.nad-edge-infos");
		if (!edgeInfos) {
			edgeInfos = document.createElementNS("http://www.w3.org/2000/svg", "g");
			edgeInfos.classList.add("nad-edge-infos");
			this.innerSvg?.appendChild(edgeInfos);
		}
		return edgeInfos;
	}
	initDebounceToggleHoverCallback() {
		return (0, lodash_debounce.default)((hovered, mousePosition, equipmentId, equipmentType) => {
			this.onToggleHoverCallback?.(hovered, mousePosition, equipmentId, equipmentType);
		}, 250);
	}
	getZoomButtonsBar() {
		const buttonsDiv = document.createElement("div");
		buttonsDiv.id = "zoom-buttons-bars";
		buttonsDiv.style.display = "inline-grid";
		buttonsDiv.style.alignItems = "center";
		buttonsDiv.style.position = "absolute";
		buttonsDiv.style.left = "6px";
		buttonsDiv.style.bottom = "6px";
		const zoomInButton = getZoomInButton();
		buttonsDiv.appendChild(zoomInButton);
		zoomInButton.addEventListener("click", () => {
			this.zoomIn();
		});
		const zoomOutButton = getZoomOutButton();
		buttonsDiv.appendChild(zoomOutButton);
		zoomOutButton.addEventListener("click", () => {
			this.zoomOut();
		});
		const zoomToFitButton = getZoomToFitButton();
		buttonsDiv.appendChild(zoomToFitButton);
		zoomToFitButton.addEventListener("click", () => {
			this.zoomToFit();
		});
		return buttonsDiv;
	}
	getActionButtonsBar() {
		const buttonsDiv = document.createElement("div");
		buttonsDiv.id = "action-buttons-bars";
		buttonsDiv.style.display = "flex";
		buttonsDiv.style.alignItems = "center";
		buttonsDiv.style.position = "absolute";
		buttonsDiv.style.left = "6px";
		buttonsDiv.style.top = "6px";
		const saveSvgButton = getSaveSvgButton();
		buttonsDiv.appendChild(saveSvgButton);
		saveSvgButton.addEventListener("click", () => {
			this.saveSvg();
		});
		const savePngButton = getSavePngButton();
		buttonsDiv.appendChild(savePngButton);
		savePngButton.addEventListener("click", () => {
			this.savePng(NetworkAreaDiagramViewer.DEFAULT_PNG_BACKGROUND_COLOR);
		});
		const screenshotButton = getDisabledScreenshotButton();
		buttonsDiv.appendChild(screenshotButton);
		screenshotButton.addEventListener("click", () => {
			this.screenshot(NetworkAreaDiagramViewer.DEFAULT_PNG_BACKGROUND_COLOR);
		});
		navigator.permissions.query({ name: "clipboard-write" }).then((result) => {
			if (result.state == "granted" || result.state == "prompt") enableButton(screenshotButton);
			else console.warn("Write access to clipboard not granted");
		}).catch((err) => {
			console.warn("clipboard-write permission not supported: " + err);
			if (navigator.clipboard) enableButton(screenshotButton);
			else console.warn("Navigator clipboard not available");
		});
		const bendLinesButton = getBendLinesButton();
		buttonsDiv.appendChild(bendLinesButton);
		bendLinesButton.addEventListener("click", () => {
			if (this.bendLines) {
				this.disableLineBending();
				bendLinesButton.classList.remove("button-active");
				bendLinesButton.title = "Enable line bending";
			} else {
				this.enableLineBending();
				if (this.bendLines) {
					bendLinesButton.classList.add("button-active");
					bendLinesButton.title = "Disable line bending";
				}
			}
		});
		return buttonsDiv;
	}
	getSvg() {
		return this.svgDraw === void 0 ? null : this.svgDraw.svg();
	}
	getJsonMetadata() {
		return JSON.stringify(this.diagramMetadata);
	}
	getDimensionsFromSvg() {
		const result = this.svgContent.match("<svg[^>]*>");
		if (result === null || result.length === 0) return null;
		const emptiedSvgContent = result[0] + "</svg>";
		const svg = new DOMParser().parseFromString(emptiedSvgContent, "image/svg+xml").getElementsByTagName("svg")[0];
		return {
			width: Number(svg.getAttribute("width")),
			height: Number(svg.getAttribute("height")),
			viewbox: svg.viewBox.baseVal
		};
	}
	enablePanzoom() {
		this.svgDraw?.panZoom({
			panning: true,
			zoomMin: .5 / this.ratio,
			zoomMax: 20 * this.ratio,
			zoomFactor: .2
		});
	}
	disablePanzoom() {
		this.svgDraw?.panZoom({ panning: false });
	}
	onMouseLeftDown(event) {
		let targetElement = event.target;
		if (this.hoveredElement && this.existsNearbyHoveredElement(this.getMousePosition(event))) targetElement = this.hoveredElement;
		const selectableElem = getSelectableFrom(targetElement);
		const draggableElem = getDraggableFrom(targetElement);
		if (event.shiftKey) {
			this.initSelection(selectableElem);
			if (this.bendLines) this.onStraightenStart(getBendableFrom(targetElement));
		} else {
			this.initSelection(selectableElem);
			if (this.enableDragInteraction) this.initDrag(draggableElem);
			if (this.bendLines && !draggableElem) this.createEdgeBendPoint(getBendableLineFrom(targetElement, this.bendableLines), event);
		}
	}
	initSelection(selectableElem) {
		if (!selectableElem) return;
		if (this.onSelectNodeCallback != null) this.disablePanzoom();
		this.selectedElement = selectableElem;
	}
	initDrag(draggableElem) {
		if (!draggableElem) return;
		this.disablePanzoom();
		this.resetHoverCallback();
		this.hoveredElement = null;
		this.draggedElement = draggableElem;
		if (isBendable(this.draggedElement)) this.draggedElementType = 2;
		else if (isTextNode(draggableElem)) this.draggedElementType = 1;
		else this.draggedElementType = 0;
	}
	attachCursorOverlay(cursor) {
		if (!this.svgDraw) return;
		this.detachCursorOverlay();
		const size = 2e6;
		const overlay = this.svgDraw.rect().attr({
			x: -2e6 / 2,
			y: -2e6 / 2,
			width: size,
			height: size,
			fill: "none"
		});
		overlay.node.style.cursor = cursor;
		overlay.node.style.pointerEvents = "all";
		this.cursorOverlayRect = overlay.node;
	}
	detachCursorOverlay() {
		this.cursorOverlayRect?.remove();
		this.cursorOverlayRect = null;
	}
	onDragStart() {
		this.isDragging = true;
		this.attachCursorOverlay("grabbing");
		this.ctm = this.svgDraw?.node.getScreenCTM();
		this.edgeAngles1 = /* @__PURE__ */ new Map();
		this.edgeAngles2 = /* @__PURE__ */ new Map();
		if (this.draggedElementType == 1) {
			this.initialPosition = getTextNodePosition(this.draggedElement);
			this.endTextEdge = new _svgdotjs_svg_js.Point(0, 0);
			const textNode = this.diagramMetadata?.textNodes.find((textNode) => textNode.svgId == this.draggedElement?.id);
			if (textNode) {
				this.originalTextNodeShift = new _svgdotjs_svg_js.Point(textNode.shiftX, textNode.shiftY);
				this.originalTextNodeConnectionShift = new _svgdotjs_svg_js.Point(textNode.connectionShiftX, textNode.connectionShiftY);
			}
		} else if (this.draggedElementType == 0) {
			this.initialPosition = getPosition(this.draggedElement);
			const node = this.diagramMetadata?.nodes.find((node) => node.svgId == this.draggedElement?.id);
			if (node) this.originalNodePosition = new _svgdotjs_svg_js.Point(node.x, node.y);
		} else if (this.draggedElementType === 2) this.initialPosition = getPosition(this.draggedElement);
	}
	onMouseMove(event) {
		if (!this.draggedElement) {
			this.handleHoverCallBack(event);
			return;
		}
		event.preventDefault();
		this.ctm = this.svgDraw?.node.getScreenCTM();
		const mousePosition = this.getMousePosition(event);
		if (!this.isDragging) this.onDragStart();
		if (this.draggedElementType === 1) {
			const topLeftCornerPosition = getTextNodeTopLeftCornerFromCenter(this.draggedElement, mousePosition);
			this.updateTextNodeMetadata(this.draggedElement.id, topLeftCornerPosition);
			this.updateElement(this.draggedElement);
		} else if (this.draggedElementType === 0) {
			this.updateNodeMetadata(this.draggedElement, mousePosition);
			this.updateElement(this.draggedElement);
		} else if (this.draggedElementType === 2) {
			this.updateEdgeMetadata(this.draggedElement, mousePosition, 0);
			this.redrawBentLine(this.draggedElement, 0);
		}
	}
	updateNodeMetadata(vlNode, position) {
		const node = this.diagramMetadata?.nodes.find((node) => node.svgId == vlNode.id);
		if (node != null) {
			const nodeMove = getNodeMove(node, position);
			node.x = nodeMove.xNew;
			node.y = nodeMove.yNew;
		}
	}
	updateTextNodeMetadata(textNodeId, position) {
		const textNode = this.diagramMetadata?.textNodes.find((textNode) => textNode.svgId == textNodeId);
		if (!textNode) return;
		const node = this.diagramMetadata?.nodes.find((node) => node.svgId == textNode.vlNode);
		if (!node) return;
		const textNodeMoves = getTextNodeMoves(textNode, node, position, this.endTextEdge);
		textNode.shiftX = textNodeMoves[0].xNew;
		textNode.shiftY = textNodeMoves[0].yNew;
		textNode.connectionShiftX = textNodeMoves[1].xNew;
		textNode.connectionShiftY = textNodeMoves[1].yNew;
	}
	updateElement(element) {
		if (isTextNode(element)) {
			this.initialPosition = getTextNodePosition(element);
			this.updateVoltageLevelText(element);
		} else {
			this.initialPosition = getPosition(element);
			this.updateVoltageLevelNode(element);
		}
	}
	existsNearbyHoveredElement(mousePosition) {
		if (!this.hoveredElement) return false;
		return getDistance(this.hoveredElementPosition, mousePosition) <= this.hoverPositionPrecision;
	}
	onHover(mouseEvent) {
		const hoverableElem = getHoverableFrom(mouseEvent.target);
		if (!hoverableElem) return;
		this.hoveredElement = hoverableElem;
		this.hoveredElementPosition = this.getMousePosition(mouseEvent);
	}
	handleHoverCallBack(mouseEvent) {
		if (!this.hoveredElement) return;
		const mousePosition = this.getMousePosition(mouseEvent);
		const hoverableElem = getHoverableFrom(mouseEvent.target);
		if (hoverableElem && hoverableElem === this.hoveredElement) this.hoveredElementPosition = mousePosition;
		if (this.existsNearbyHoveredElement(mousePosition)) {
			if (isHighlightableElement(this.hoveredElement)) this.handleHighlightableElementHover(this.hoveredElement, mousePosition);
			else if (isInjection(this.hoveredElement)) this.handleInjectionHover(this.hoveredElement, mousePosition);
			else this.handleEdgeHover(this.hoveredElement, mousePosition);
			this.isHoverCallbackUsed = true;
		} else {
			this.clearHighlights();
			this.resetHoverCallback();
			this.hoveredElement = null;
			this.hideEdgePreviewPoints();
		}
	}
	resetHoverCallback() {
		this.debounceToggleHoverCallback.cancel();
		if (this.isHoverCallbackUsed) {
			this.isHoverCallbackUsed = false;
			this.onToggleHoverCallback?.(false, null, "", "");
		}
	}
	onMouseLeftUpOrLeave(mouseEvent) {
		if (this.isDragging) {
			this.onDragEnd();
			this.enablePanzoom();
		} else if (this.selectedElement) {
			const mousePosition = this.getMousePosition(mouseEvent);
			this.onSelectEnd(mousePosition);
			this.enablePanzoom();
		} else if (this.straightenedElement) {
			this.onStraightenEnd();
			this.enablePanzoom();
		} else if (this.draggedElement) this.enablePanzoom();
		this.resetMouseEventParams();
	}
	resetMouseEventParams() {
		this.resetHoverCallback();
		this.hoveredElement = null;
		this.selectedElement = null;
		this.isDragging = false;
		this.draggedElement = null;
		this.draggedElementType = null;
		this.initialPosition = null;
		this.ctm = null;
		this.originalNodePosition = new _svgdotjs_svg_js.Point(0, 0);
		this.originalTextNodeShift = new _svgdotjs_svg_js.Point(0, 0);
		this.originalTextNodeConnectionShift = new _svgdotjs_svg_js.Point(0, 0);
		this.detachCursorOverlay();
	}
	onDragEnd() {
		if (!this.draggedElement) return;
		switch (this.draggedElementType) {
			case 2:
				this.callBendLineCallback(this.draggedElement, 0);
				break;
			case 1:
				this.callMoveTextNodeCallback(this.draggedElement);
				break;
			case 0:
				this.callMoveNodeCallback(this.draggedElement);
				break;
			default: return;
		}
	}
	callMoveNodeCallback(vlNode) {
		if (this.onMoveNodeCallback) {
			const node = this.diagramMetadata?.nodes.find((node) => node.svgId == vlNode.id);
			if (node != null) this.onMoveNodeCallback(node.equipmentId, node.svgId, node.x, node.y, this.originalNodePosition.x, this.originalNodePosition.y);
		}
	}
	callMoveTextNodeCallback(textNodeElement) {
		if (this.onMoveTextNodeCallback) {
			const textNode = this.diagramMetadata?.textNodes.find((textNode) => textNode.svgId == textNodeElement.id);
			if (!textNode) return;
			const node = this.diagramMetadata?.nodes.find((node) => node.svgId == textNode.vlNode);
			if (!node) return;
			this.onMoveTextNodeCallback(node.equipmentId, node.svgId, textNode.svgId, textNode.shiftX, textNode.shiftY, this.originalTextNodeShift.x, this.originalTextNodeShift.y, textNode.connectionShiftX, textNode.connectionShiftY, this.originalTextNodeConnectionShift.x, this.originalTextNodeConnectionShift.y);
		}
	}
	onSelectEnd(mousePosition) {
		this.callSelectNodeCallback(mousePosition);
	}
	getMousePosition(event) {
		return new _svgdotjs_svg_js.Point((event.clientX - (this.ctm?.e ?? 0)) / (this.ctm?.a ?? 1), (event.clientY - (this.ctm?.f ?? 0)) / (this.ctm?.d ?? 1));
	}
	getTranslation(position) {
		if (this.initialPosition) return new _svgdotjs_svg_js.Point(position.x - this.initialPosition.x, position.y - this.initialPosition.y);
		return new _svgdotjs_svg_js.Point(0, 0);
	}
	updateVoltageLevelText(textNode) {
		globalThis.getSelection()?.empty();
		const textNodeMetadata = this.diagramMetadata?.textNodes.find((node) => node.svgId === textNode.id);
		if (!textNodeMetadata) return;
		const vlNodeMetadata = this.diagramMetadata?.nodes.find((node) => node.svgId === textNodeMetadata.vlNode);
		if (vlNodeMetadata) {
			const position = new _svgdotjs_svg_js.Point(vlNodeMetadata.x + textNodeMetadata.shiftX, vlNodeMetadata.y + textNodeMetadata.shiftY);
			this.updateText(textNode, vlNodeMetadata, position);
		}
	}
	updateVoltageLevelNode(vlNode) {
		const nodeMetadata = this.diagramMetadata?.nodes.find((node) => node.svgId === vlNode.id);
		if (nodeMetadata) {
			const position = new _svgdotjs_svg_js.Point(nodeMetadata.x, nodeMetadata.y);
			this.updateNodePosition(vlNode, position);
			const textNode = this.svgDiv.querySelector("[id='" + nodeMetadata.legendSvgId + "']");
			if (textNode) this.updateVoltageLevelText(textNode);
			this.updateEdges(vlNode, position);
			this.updateInjections(vlNode, position);
		}
	}
	updateNodePosition(vlNode, position) {
		vlNode.setAttribute("transform", "translate(" + getFormattedPoint(position) + ")");
	}
	updateText(textNode, nodeMetadata, position) {
		this.updateTextNodePosition(textNode, position);
		const textNodeSize = getTextNodeSize(textNode);
		this.redrawTextEdge(nodeMetadata.legendEdgeSvgId, position, nodeMetadata, textNodeSize.height, textNodeSize.width);
	}
	updateTextNodePosition(textElement, point) {
		if (textElement != null) {
			textElement.setAttribute("x", getFormattedValue(point.x));
			textElement.setAttribute("y", getFormattedValue(point.y));
		}
	}
	redrawTextEdge(textEdgeId, textNodePosition, node, textHeight, textWidth) {
		if (!textEdgeId) return;
		const textEdge = this.svgDiv.querySelector("[id='" + textEdgeId + "']");
		if (textEdge != null) {
			const busNodes = this.diagramMetadata?.busNodes.filter((busNode) => busNode.vlNode == node.svgId);
			const voltageLevelCircleRadius = getVoltageLevelCircleRadius(busNodes !== void 0 && busNodes.length > 1 ? busNodes.length - 1 : 0, node?.fictitious, this.svgParameters);
			const vlNodePosition = new _svgdotjs_svg_js.Point(node.x, node.y);
			const textNodeMetadata = this.diagramMetadata?.textNodes.find((tn) => tn.svgId === node.legendSvgId);
			if (textHeight !== 0 || textWidth !== 0) {
				this.endTextEdge = getTextEdgeEnd(textNodePosition, vlNodePosition, this.layoutParameters.getTextNodeEdgeConnectionYShift(), textHeight, textWidth);
				if (textNodeMetadata) {
					textNodeMetadata.connectionShiftX = this.endTextEdge.x - node.x;
					textNodeMetadata.connectionShiftY = this.endTextEdge.y - node.y;
				}
			} else if (textNodeMetadata) this.endTextEdge = new _svgdotjs_svg_js.Point(node.x + (textNodeMetadata.connectionShiftX ?? 0), node.y + (textNodeMetadata.connectionShiftY ?? 0));
			const polyline = getFormattedPolyline([getPointAtDistance(vlNodePosition, this.endTextEdge, voltageLevelCircleRadius), this.endTextEdge]);
			textEdge.setAttribute("points", polyline);
		}
	}
	updateSvgElementPosition(svgElementId, translation) {
		if (!svgElementId) return;
		const svgElement = this.svgDiv.querySelector("[id='" + svgElementId + "']");
		if (svgElement) {
			const transform = getTransform(svgElement);
			const totalTranslation = new _svgdotjs_svg_js.Point((transform?.matrix.e ?? 0) + translation.x, (transform?.matrix.f ?? 0) + translation.y);
			svgElement?.setAttribute("transform", "translate(" + getFormattedPoint(totalTranslation) + ")");
		}
	}
	updateInjections(vlNode, position) {
		(this.diagramMetadata?.injections?.filter((inj) => inj.vlNodeId == vlNode.id))?.forEach((inj) => {
			const translation = this.getTranslation(position);
			this.updateSvgElementPosition(inj.svgId, translation);
			this.updateSvgElementPosition(inj.edgeInfo?.svgId, translation);
		});
	}
	updateEdges(vlNode, position) {
		const edges = this.getEdgesMetadata(vlNode.id);
		const groupedEdges = /* @__PURE__ */ new Map();
		const loopEdges = /* @__PURE__ */ new Map();
		edges?.forEach((edge) => {
			let edgeGroup = [];
			if (edge.node1 == edge.node2) {
				if (loopEdges.has(edge.node1)) edgeGroup = loopEdges.get(edge.node1) ?? [];
				edgeGroup.push(edge);
				loopEdges.set(edge.node1, edgeGroup);
			} else {
				const edgeGroupId = getGroupedEdgesIndexKey(edge);
				if (groupedEdges.has(edgeGroupId)) edgeGroup = groupedEdges.get(edgeGroupId) ?? [];
				edgeGroup.push(edge);
				groupedEdges.set(edgeGroupId, edgeGroup);
			}
		});
		for (const edgeGroup of groupedEdges.values()) {
			this.redrawEdgeGroup(edgeGroup);
			this.redrawOtherVoltageLevelNode(edgeGroup[0], vlNode.id);
		}
		for (const edgeGroup of loopEdges.values()) this.redrawLoopEdgeGroup(edgeGroup, position);
		this.redrawVoltageLevelNode(vlNode, edges);
	}
	getEdgesMetadata(vlNodeId) {
		return this.diagramMetadata?.edges.filter((edge) => edge.node1 == vlNodeId || edge.node2 == vlNodeId) ?? [];
	}
	addInjectionEdges(vlNodeId, injectionsEdges) {
		(this.diagramMetadata?.injections?.filter((injection) => injection.vlNodeId == vlNodeId))?.forEach((inj) => {
			this.addInjectionEdge(inj.busNodeId, inj, injectionsEdges);
		});
	}
	addBusNodeEdge(busNodeId, edge, busNodeEdges) {
		let busEdgeGroup = [];
		if (busNodeId != null) {
			if (busNodeEdges.has(busNodeId)) busEdgeGroup = busNodeEdges.get(busNodeId) ?? [];
			busEdgeGroup.push(edge);
			busNodeEdges.set(busNodeId, busEdgeGroup);
		}
	}
	addInjectionEdge(busNodeId, injection, injectionEdges) {
		let injectionEdgesGroup = [];
		if (busNodeId != null) {
			if (injectionEdges.has(busNodeId)) injectionEdgesGroup = injectionEdges.get(busNodeId) ?? [];
			injectionEdgesGroup.push(injection);
			injectionEdges.set(busNodeId, injectionEdgesGroup);
		}
	}
	redrawEdgeGroup(edges) {
		const edgeNodePoints = getEdgeNodePoints(edges[0], this.diagramMetadata);
		for (let iEdge = 0; iEdge < edges.length; iEdge++) this.redrawEdge(edges[iEdge], iEdge, edges.length, edgeNodePoints[0], edgeNodePoints[1]);
	}
	redrawEdge(edge, iEdge, groupedEdgesCount, point1, point2) {
		const edgeType = getEdgeType(edge);
		if (edgeType == EdgeType.UNKNOWN) return;
		if (this.isThreeWtEdge(edgeType)) this.redrawThreeWtEdge(edge);
		else {
			const halfEdges = this.getHalfEdges(edge, iEdge, groupedEdgesCount, point1, point2);
			this.redrawBranchEdge(edge, halfEdges[0], halfEdges[1]);
		}
	}
	isThreeWtEdge(edgeType) {
		return edgeType == EdgeType.THREE_WINDINGS_TRANSFORMER || edgeType == EdgeType.THREE_WINDINGS_PHASE_SHIFT_TRANSFORMER;
	}
	redrawBranchEdge(edge, halfEdge1, halfEdge2) {
		const edgeNode = this.svgDiv.querySelector("[id='" + edge.svgId + "']");
		if (!edgeNode) return;
		this.redrawHalfEdge(edgeNode, halfEdge1);
		this.redrawHalfEdge(edgeNode, halfEdge2);
		const edgeType = getEdgeType(edge);
		const isTransformerEdge$1 = isTransformerEdge(edgeType);
		const isHVDCLineEdge = edgeType == EdgeType.HVDC_LINE_LCC || edgeType == EdgeType.HVDC_LINE_VSC;
		if (isTransformerEdge$1) this.redrawTransformer(edgeNode, halfEdge1, halfEdge2, edgeType);
		else if (isHVDCLineEdge) this.redrawConverterStation(edgeNode, halfEdge1, halfEdge2);
		if (edge.edgeInfoMiddle) {
			const edgeInfoElement = this.getEdgeInfo(edge.edgeInfoMiddle.svgId);
			if (!edgeInfoElement) return;
			const hasBothLabels = edge.edgeInfoMiddle.labelA !== void 0 && edge.edgeInfoMiddle.labelB !== void 0;
			this.redrawMiddleEdgeArrowAndLabels(halfEdge1, halfEdge2, edgeInfoElement, edge.edgeInfoMiddle.direction ?? edge.edgeInfoMiddle.directionB, edge.edgeInfoMiddle.directionA, hasBothLabels);
		}
	}
	redrawHalfEdge(edgeNode, halfEdge) {
		if (!halfEdge) return;
		(halfEdge.side == "1" ? this.edgeAngles1 : this.edgeAngles2).set(edgeNode.id, getEdgeStartAngle(halfEdge));
		this.getHalfEdgeNodeFromEdgeNode(edgeNode, halfEdge.side)?.setAttribute("points", getFormattedPolyline(halfEdge.edgePoints));
		this.redrawEdgeArrowAndLabels(halfEdge);
	}
	getHalfEdgeNodeFromEdgeNode(edgeNode, side) {
		const allPath = edgeNode.querySelectorAll(":scope > polyline.nad-edge-path");
		return this.getHalfEdgeNodeFromEdgeElements(allPath, side);
	}
	getHalfEdgeNode(edgeId, side) {
		const allPath = this.svgDiv.querySelectorAll("[id='" + edgeId + "'] > .nad-edge-path");
		return this.getHalfEdgeNodeFromEdgeElements(allPath, side);
	}
	getHalfEdgeNodeFromEdgeElements(allPath, side) {
		if (!allPath) return null;
		if (allPath.length > 1) return allPath.item(side == "1" ? 0 : 1);
		else return allPath.item(0);
	}
	redrawEdgeArrowAndLabels(halfEdge, edgeInfo = null) {
		if (!halfEdge.edgeInfoId) return;
		if (!edgeInfo) {
			edgeInfo = this.getEdgeInfo(halfEdge.edgeInfoId);
			if (!edgeInfo) return;
		}
		const infoPoint = getInfoPoint(halfEdge, this.svgParameters);
		edgeInfo.setAttribute("transform", "translate(" + getFormattedPoint(infoPoint) + ")");
		const arrowsNum = this.redrawArrows(edgeInfo, getArrowRotation(halfEdge));
		const labelData = getLabelData(halfEdge, this.svgParameters.getArrowLabelShift());
		const factor = arrowsNum == 2 ? this.svgParameters.getDoubleArrowShiftFactorText() : 1;
		const labelBElement = edgeInfo.querySelector("text:nth-of-type(1)");
		this.redrawLabel(labelBElement, labelData.angle, labelData.external.shift * factor, labelData.external.style);
		const labelAElement = edgeInfo.querySelector("text:nth-of-type(2)");
		this.redrawLabel(labelAElement, labelData.angle, labelData.internal.shift * factor, labelData.internal.style);
	}
	redrawArrows(edgeInfo, arrowAngle) {
		const arrowElements = edgeInfo.querySelectorAll(":scope > path");
		const arrowRotateString = "rotate(" + getFormattedValue(arrowAngle) + ")";
		if (arrowElements.length == 1) arrowElements.item(0).setAttribute("transform", arrowRotateString);
		else if (arrowElements.length == 2) {
			const shift = this.svgParameters.getArrowLabelShift() / this.svgParameters.getDoubleArrowShiftFactorArrows();
			arrowElements.item(0).setAttribute("transform", arrowRotateString + " translate(" + getFormattedPoint(new _svgdotjs_svg_js.Point(0, -shift)) + ")");
			arrowElements.item(1).setAttribute("transform", arrowRotateString + " translate(" + getFormattedPoint(new _svgdotjs_svg_js.Point(0, shift)) + ")");
		}
		return arrowElements.length;
	}
	redrawLabel(labelElement, angle, shift, style) {
		if (labelElement) {
			labelElement.setAttribute("transform", "rotate(" + getFormattedValue(angle) + ")");
			labelElement.setAttribute("x", getFormattedValue(shift));
			if (style) labelElement.setAttribute("style", style);
			else if (labelElement.hasAttribute("style")) labelElement.removeAttribute("style");
		}
	}
	redrawMiddleEdgeArrowAndLabels(halfEdge1, halfEdge2, edgeInfo, direction, directionA, bothLabels) {
		if (!edgeInfo) return;
		const infoPointAndAngle = getInfoPointAndAngle(halfEdge1, halfEdge2);
		if (!infoPointAndAngle) return;
		const infoPoint = infoPointAndAngle[0];
		const infoAngle = infoPointAndAngle[1];
		edgeInfo.setAttribute("transform", "translate(" + getFormattedPoint(infoPoint) + ")");
		let factor = 1;
		if (direction) {
			const arrowAngle = getMiddleArrowRotation(halfEdge1, halfEdge2);
			factor = this.redrawArrows(edgeInfo, arrowAngle) == 2 ? this.svgParameters.getDoubleArrowShiftFactorText() : 1;
		}
		let shift = 0;
		let style = "text-anchor:middle";
		let i = 1;
		if (bothLabels) {
			const labelBElement = edgeInfo.querySelector("text:nth-of-type(" + i++ + ")");
			const middleLabelBData = getMiddleLabelData(halfEdge1, halfEdge2, true, this.svgParameters.getArrowLabelShift());
			this.redrawLabel(labelBElement, infoAngle, middleLabelBData[0] * factor, middleLabelBData[1]);
			const middleLabelAData = getMiddleLabelData(halfEdge1, halfEdge2, false, this.svgParameters.getArrowLabelShift());
			shift = middleLabelAData[0];
			style = middleLabelAData[1];
		}
		const labelAElement = edgeInfo.querySelector("text:nth-of-type(" + i + ")");
		this.redrawLabel(labelAElement, infoAngle, shift * factor, style);
	}
	redrawTransformer(edgeNode, halfEdge1, halfEdge2, edgeType) {
		if (!halfEdge1 && !halfEdge2) return;
		const transformerElement = edgeNode.lastElementChild;
		const transformerCircles = transformerElement?.querySelectorAll("circle");
		this.redrawTransformerCircle(transformerCircles.item(0), halfEdge1, halfEdge2);
		this.redrawTransformerCircle(transformerCircles.item(1), halfEdge2, halfEdge1);
		if (edgeType == EdgeType.PHASE_SHIFT_TRANSFORMER) this.redrawTransformerArrow(transformerElement, halfEdge1, halfEdge2);
	}
	redrawTransformerCircle(transformerCircle, halfEdge, oppositeHalfEdge) {
		let circleCenter = new _svgdotjs_svg_js.Point(0, 0);
		if (halfEdge) circleCenter = getPointAtDistance(halfEdge.edgePoints.at(-1), halfEdge.edgePoints.at(-2), -this.svgParameters.getTransformerCircleRadius());
		else if (oppositeHalfEdge) circleCenter = getPointAtDistance(oppositeHalfEdge.edgePoints.at(-1), oppositeHalfEdge.edgePoints.at(-2), -2 * this.svgParameters.getTransformerCircleRadius());
		transformerCircle.setAttribute("cx", getFormattedValue(circleCenter.x));
		transformerCircle.setAttribute("cy", getFormattedValue(circleCenter.y));
	}
	redrawTransformerArrow(transformerElement, halfEdge1, halfEdge2) {
		let rotationAngle = 0;
		let transformerCenter = new _svgdotjs_svg_js.Point(0, 0);
		if (halfEdge1) {
			const start = halfEdge1.edgePoints.at(-2);
			const end = halfEdge1.edgePoints.at(-1);
			const shiftEnd = -1.5 * this.svgParameters.getTransformerCircleRadius();
			rotationAngle = getAngle(start, end);
			transformerCenter = getPointAtDistance(end, start, shiftEnd);
		} else if (halfEdge2) {
			const start = halfEdge2.edgePoints.at(-2);
			const end = halfEdge2.edgePoints.at(-1);
			const shiftEnd = -2 * this.svgParameters.getTransformerCircleRadius();
			rotationAngle = getAngle(end, start);
			transformerCenter = getPointAtDistance(end, start, shiftEnd);
		}
		const arrowPath = transformerElement.querySelector("path");
		const matrix = getTransformerArrowMatrixString(rotationAngle, transformerCenter, this.svgParameters.getTransformerCircleRadius());
		arrowPath?.setAttribute("transform", "matrix(" + matrix + ")");
	}
	redrawConverterStation(edgeNode, halfEdge1, halfEdge2) {
		const converterStationElement = edgeNode.lastElementChild;
		const polylinePoints = getConverterStationPolyline(halfEdge1, halfEdge2, this.svgParameters.getConverterStationWidth());
		converterStationElement.querySelector("polyline")?.setAttribute("points", polylinePoints);
	}
	redrawLoopEdgeGroup(edges, position) {
		edges.forEach((edge) => {
			const translation = this.getTranslation(position);
			this.updateSvgElementPosition(edge.svgId, translation);
			this.updateSvgElementPosition(edge.edgeInfo1?.svgId, translation);
			this.updateSvgElementPosition(edge.edgeInfo2?.svgId, translation);
			this.updateSvgElementPosition(edge.edgeInfoMiddle?.svgId, translation);
		});
	}
	redrawVoltageLevelNode(node, edges) {
		if (!node) return;
		const busNodeEdges = /* @__PURE__ */ new Map();
		this.addBusNodeEdges(node.id, edges, busNodeEdges);
		const injectionsEdges = /* @__PURE__ */ new Map();
		this.addInjectionEdges(node.id, injectionsEdges);
		if (node.classList.contains("nad-boundary-node")) for (const edge of busNodeEdges.values()) {
			const halfEdges = this.getHalfEdges(edge[0], 0, 1);
			this.redrawBoundaryNode(node, halfEdges[1]);
		}
		const busNodes = this.diagramMetadata?.busNodes.filter((busNode) => busNode.vlNode == node.id);
		if (busNodes !== void 0 && busNodes.length <= 1) return;
		const sortedBusNodes = getSortedBusNodes(busNodes);
		const traversingBusEdgesAngles = [];
		const nodeMetadata = getNodeMetadata(node.id, this.diagramMetadata);
		for (let index = 0; index < sortedBusNodes.length; index++) {
			const busNode = sortedBusNodes[index];
			if (index > 0 && traversingBusEdgesAngles.length > 0) this.redrawBusNode(node, busNode, nodeMetadata, traversingBusEdgesAngles);
			(busNodeEdges.get(busNode.svgId) ?? []).forEach((edge) => {
				const edgeAngle = this.getEdgeAngle(busNode, edge, edge.svgId, edge.node1 == edge.node2);
				if (edgeAngle !== void 0) traversingBusEdgesAngles.push(edgeAngle);
			});
			(injectionsEdges.get(busNode.svgId) ?? []).forEach((inj) => {
				const edgeAngle = this.getInjectionEdgeAngle(inj);
				if (edgeAngle !== void 0) traversingBusEdgesAngles.push(edgeAngle);
			});
		}
	}
	getEdgeAngle(busNode, edge, edgeId, isLoopEdge) {
		const side = busNode.svgId == edge.busNode1 ? "1" : "2";
		const edgeAngles = busNode.svgId == edge.busNode1 ? this.edgeAngles1 : this.edgeAngles2;
		if (!edgeAngles.has(edgeId)) {
			const halfEdgeDrawElement = this.getHalfEdgeNode(edgeId, side);
			if (halfEdgeDrawElement != null) {
				const angle = isLoopEdge ? getPathAngle(halfEdgeDrawElement) : getPolylineAngle(halfEdgeDrawElement);
				if (angle != null) edgeAngles.set(edgeId, angle);
			}
		}
		return edgeAngles.get(edgeId);
	}
	getInjectionEdgeAngle(injection) {
		const injectionEdgeDrawElement = this.svgDiv.querySelector(`#${CSS.escape(injection.svgId)} polyline.nad-edge-path`);
		if (injectionEdgeDrawElement != null) return getPolylineAngle(injectionEdgeDrawElement) ?? void 0;
	}
	redrawBusNode(node, busNode, nodeMetadata, traversingBusEdgesAngles) {
		const busNodeRadius = getNodeRadius(busNode, nodeMetadata, this.svgParameters);
		const edgeAngles = [...traversingBusEdgesAngles].sort((a, b) => a - b);
		edgeAngles.push(edgeAngles[0] + 2 * Math.PI);
		const path = getFragmentedAnnulusPath(edgeAngles, busNodeRadius, this.svgParameters.getNodeHollowWidth());
		const busElement = node.querySelectorAll(".nad-busnode")[busNode.index];
		if (busElement != null) busElement.setAttribute("d", path);
	}
	redrawBothVoltageLevelNodes(edge) {
		this.redrawOtherVoltageLevelNode(edge, edge.node2);
		this.redrawOtherVoltageLevelNode(edge, edge.node1);
	}
	redrawOtherVoltageLevelNode(edge, vlNodeId) {
		const otherNodeId = vlNodeId === edge.node1 ? edge.node2 : edge.node1;
		const otherNode = this.svgDiv.querySelector("[id='" + otherNodeId + "']");
		if (!otherNode) return;
		this.redrawVoltageLevelNode(otherNode, this.getEdgesMetadata(otherNodeId));
	}
	addBusNodeEdges(nodeId, edges, busNodeEdges) {
		edges.forEach((edge) => {
			if (edge.node1 == edge.node2) {
				this.addBusNodeEdge(edge.busNode1, edge, busNodeEdges);
				this.addBusNodeEdge(edge.busNode2, edge, busNodeEdges);
			} else {
				const busNodeId = edge.node1 == nodeId ? edge.busNode1 : edge.busNode2;
				this.addBusNodeEdge(busNodeId, edge, busNodeEdges);
			}
		});
	}
	redrawThreeWtEdge(edge) {
		const twtEdge = this.svgDiv.querySelector("[id='" + edge.svgId + "']")?.firstElementChild;
		if (!twtEdge) return;
		const threeWtMoved = edge.node1 != this.draggedElement?.id;
		const halfEdge = getThreeWtHalfEdge(getPolylinePoints(twtEdge), edge, threeWtMoved, this.initialPosition, this.diagramMetadata, this.svgParameters);
		if (!halfEdge) return;
		twtEdge.setAttribute("points", getFormattedPolyline(halfEdge.edgePoints));
		this.redrawEdgeArrowAndLabels(halfEdge);
		this.edgeAngles1.set(edge.svgId, getEdgeStartAngle(halfEdge));
	}
	redrawBoundaryNode(node, halfEdge) {
		if (!node || !halfEdge) return;
		const path = getBoundarySemicircle(getAngle(halfEdge.edgePoints[0], halfEdge.edgePoints[1]), halfEdge.busOuterRadius);
		const pathElement = node.firstElementChild;
		if (pathElement?.tagName == "path") pathElement.setAttribute("d", path);
	}
	callSelectNodeCallback(mousePosition) {
		if (this.onSelectNodeCallback != null) {
			const node = this.diagramMetadata?.nodes.find((node) => node.svgId == this.selectedElement?.id);
			if (node != null) this.onSelectNodeCallback(node.equipmentId, node.svgId, mousePosition);
		}
	}
	getCurrentlyMaxDisplayedSize() {
		const viewbox = this.getViewBox();
		return Math.max(viewbox?.height || 0, viewbox?.width || 0);
	}
	checkAndUpdateLevelOfDetail() {
		const maxDisplayedSize = this.getCurrentlyMaxDisplayedSize();
		const previousMaxDisplayedSize = this.getPreviousMaxDisplayedSize();
		if (Math.abs(previousMaxDisplayedSize - maxDisplayedSize) / previousMaxDisplayedSize < dynamicCssRulesUpdateThreshold) return;
		this.setPreviousMaxDisplayedSize(maxDisplayedSize);
		if (this.nadViewerParameters.getAdaptiveTextZoom().enabled) this.adaptiveZoomViewboxUpdate(maxDisplayedSize);
		if (this.nadViewerParameters.getEnableLevelOfDetail() && this.innerSvg) {
			const zoomLevel = this.getZoomLevel(maxDisplayedSize);
			if (![...this.innerSvg.classList].some((c) => c.startsWith(NetworkAreaDiagramViewer.ZOOM_CLASS_PREFIX)) || zoomLevel != this.lastZoomLevel) {
				this.innerSvg.setAttribute("class", NetworkAreaDiagramViewer.ZOOM_CLASS_PREFIX + zoomLevel);
				this.lastZoomLevel = zoomLevel;
			}
		}
	}
	getZoomLevel(maxDisplayedSize) {
		for (const zoomLevel of this.zoomLevels) if (maxDisplayedSize >= zoomLevel) return zoomLevel;
		return 0;
	}
	getNodeMap() {
		if (this.nodeMap) return this.nodeMap;
		const map = /* @__PURE__ */ new Map();
		const nodes = this.diagramMetadata?.nodes ?? [];
		for (const n of nodes) map.set(n.svgId, n);
		this.nodeMap = map;
		return map;
	}
	getElementsInViewbox(viewBox, tolerance = 0) {
		const metadata = this.diagramMetadata;
		if (!viewBox || !metadata) return {
			nodes: [],
			edges: []
		};
		const { nodes = [], edges = [] } = metadata;
		const x = viewBox?.x ?? 0;
		const y = viewBox?.y ?? 0;
		const width = viewBox?.width ?? 0;
		const height = viewBox?.height ?? 0;
		const minX = x - tolerance;
		const maxX = x + width + tolerance;
		const minY = y - tolerance;
		const maxY = y + height + tolerance;
		const nodeMap = this.getNodeMap();
		const visibleNodes = [];
		const visibleNodeIds = /* @__PURE__ */ new Set();
		for (const node of nodes) if (!node.invisible && node.x >= minX && node.x <= maxX && node.y >= minY && node.y <= maxY) {
			visibleNodes.push(node);
			visibleNodeIds.add(node.svgId);
		}
		const visibleEdges = [];
		for (const edge of edges) {
			const s1 = nodeMap.get(edge.node1);
			const s2 = nodeMap.get(edge.node2);
			if (!s1 || !s2) continue;
			if (visibleNodeIds.has(s1.svgId) || visibleNodeIds.has(s2.svgId)) visibleEdges.push(edge);
		}
		return {
			nodes: visibleNodes,
			edges: visibleEdges
		};
	}
	createLegendBox(textNode, busNodes, node) {
		if (this.hasTextNode(textNode)) return;
		const newTextElement = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
		newTextElement.setAttribute("y", getFormattedValue(node.y + textNode.shiftY));
		newTextElement.setAttribute("x", getFormattedValue(node.x + textNode.shiftX));
		newTextElement.setAttribute("height", "1");
		newTextElement.setAttribute("width", "1");
		newTextElement.id = textNode.svgId;
		const newDivElement = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
		node.classes?.forEach((cls) => {
			newDivElement.classList.add(cls);
		});
		newDivElement.classList.add("nad-label-box");
		newTextElement.appendChild(newDivElement);
		this.textNodesSection?.appendChild(newTextElement);
		if (node.legendHeader) node.legendHeader.forEach((header) => {
			newDivElement.appendChild(this.createTextHeader(header));
		});
		else newDivElement.appendChild(this.createTextHeader(textNode.equipmentId));
		for (const busNode of busNodes) {
			const newBusDivElement = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
			newBusDivElement.classList.add("nad-bus-descr");
			const newBusLegendElement = document.createElementNS("http://www.w3.org/1999/xhtml", "span");
			busNode.classes?.forEach((cls) => {
				newBusLegendElement.classList.add(cls);
			});
			newBusLegendElement.classList.add("nad-legend-square");
			const textNode = document.createTextNode(busNode.legend ?? "");
			newBusDivElement?.appendChild(newBusLegendElement);
			newBusDivElement?.appendChild(textNode);
			newDivElement.appendChild(newBusDivElement);
		}
		return newTextElement;
	}
	createTextHeader(header) {
		const newHeaderElement = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
		newHeaderElement.textContent = header;
		return newHeaderElement;
	}
	createLegendEdge(textNode, busNodes, node) {
		if (this.hasTextEdge(node)) return;
		const nodePoint = new _svgdotjs_svg_js.Point(node.x, node.y);
		const endTextEdge = new _svgdotjs_svg_js.Point(node.x + textNode.connectionShiftX, node.y + textNode.connectionShiftY);
		const startTextEdge = getPointAtDistance(nodePoint, endTextEdge, getVoltageLevelCircleRadius(busNodes !== void 0 && busNodes.length > 1 ? busNodes.length - 1 : 0, node?.fictitious, this.svgParameters));
		const newLegendEdgeElement = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
		newLegendEdgeElement.id = node?.legendEdgeSvgId ?? "";
		const polyline = getFormattedPolyline([startTextEdge, endTextEdge]);
		newLegendEdgeElement.setAttribute("points", polyline);
		this.textEdgesSection?.appendChild(newLegendEdgeElement);
		return newLegendEdgeElement;
	}
	hasEdgeInfo(edgeInfo) {
		return !!this.getEdgeInfo(edgeInfo.svgId);
	}
	getEdgeInfo(edgeInfoSvgId) {
		return this.edgeInfosSection?.querySelector(":scope > [id='" + edgeInfoSvgId + "']") ?? null;
	}
	hasTextNode(textNode) {
		return !!this.textNodesSection?.querySelector(":scope > [id='" + textNode.svgId + "']");
	}
	hasTextEdge(node) {
		return !!this.textEdgesSection?.querySelector(":scope > [id='" + node.legendEdgeSvgId + "']");
	}
	getHalfEdgesForEdgeInfos(edge) {
		let halfEdges;
		if (edge.node1 == edge.node2) {
			const edgeElement = this.svgDiv.querySelector("[id='" + edge.svgId + "']");
			halfEdges = getHalfEdgesLoop(edge, this.diagramMetadata, edgeElement, this.svgParameters);
		} else {
			const groupedEdgesIndex = this.buildGroupedEdgesIndexMap();
			let iEdge = 0;
			let nbGroupedEdges = 1;
			const groupedEdges = groupedEdgesIndex.get(getGroupedEdgesIndexKey(edge));
			if (groupedEdges && groupedEdges.length > 0) {
				const i = groupedEdges.indexOf(edge.equipmentId);
				if (i !== -1) {
					iEdge = i;
					nbGroupedEdges = groupedEdges.length;
				}
			}
			halfEdges = this.getHalfEdges(edge, iEdge, nbGroupedEdges, void 0, void 0, null);
		}
		return halfEdges;
	}
	createEdgeInfos(edge, maxDisplayedSize) {
		const halfEdges = this.getHalfEdgesForEdgeInfos(edge);
		const adaptiveTextZoom = this.nadViewerParameters.getAdaptiveTextZoom();
		if (edge.edgeInfo1 && halfEdges[0] && maxDisplayedSize <= adaptiveTextZoom.edgeSideLabelThreshold) {
			const edgeValue1 = Number(edge.edgeInfo1?.labelB);
			this.setBranchSideLabel(edge, halfEdges[0], edge.edgeInfo1, "1", Number.isNaN(edgeValue1) ? edge.edgeInfo1?.labelB ?? "" : edgeValue1, true);
		}
		if (edge.edgeInfo2 && halfEdges[1] && maxDisplayedSize <= adaptiveTextZoom.edgeSideLabelThreshold) {
			const edgeValue2 = Number(edge.edgeInfo2?.labelB);
			this.setBranchSideLabel(edge, halfEdges[1], edge.edgeInfo2, "2", Number.isNaN(edgeValue2) ? edge.edgeInfo2?.labelB ?? "" : edgeValue2, true);
		}
		if (edge.edgeInfoMiddle && maxDisplayedSize <= Math.max(adaptiveTextZoom.edgeMiddleLabelThreshold, adaptiveTextZoom.edgeMiddleArrowThreshold)) {
			const showArrow = maxDisplayedSize <= adaptiveTextZoom.edgeMiddleArrowThreshold;
			const showLabel = maxDisplayedSize <= adaptiveTextZoom.edgeMiddleLabelThreshold;
			this.setBranchMiddleLabel(edge, halfEdges[0], halfEdges[1], edge.edgeInfoMiddle, showArrow, showLabel);
		}
	}
	createEdgesInfos(edges, maxDisplayedSize) {
		for (const edge of edges) if (edge.edgeInfo1 && !this.hasEdgeInfo(edge.edgeInfo1) || edge.edgeInfo2 && !this.hasEdgeInfo(edge.edgeInfo2) || edge.edgeInfoMiddle && !this.hasEdgeInfo(edge.edgeInfoMiddle)) this.createEdgeInfos(edge, maxDisplayedSize);
	}
	static TRANSLATE_POINT_REGEX = /translate\(\s*(-?[\d.]+)\s*,\s*(-?[\d.]+)\s*\)/;
	removeEdgeInfoItems(viewBox) {
		if (!viewBox) return;
		const xMax = viewBox.x + viewBox.width;
		const yMax = viewBox.y + viewBox.height;
		for (const g of this.getOrCreateEdgeInfosSection().querySelectorAll(":scope > g")) {
			const transform = g.getAttribute("transform");
			if (!transform) continue;
			const parsed = NetworkAreaDiagramViewer.TRANSLATE_POINT_REGEX.exec(transform);
			if (!parsed) continue;
			const x = Number.parseFloat(parsed[1]);
			const y = Number.parseFloat(parsed[2]);
			if (x < viewBox.x || x > xMax || y < viewBox.y || y > yMax) g.remove();
		}
	}
	filterLegends(nodeList) {
		const validLegendIds = new Set(nodeList.map((n) => n.legendSvgId));
		const validLegendEdgeIds = new Set(nodeList.map((n) => n.legendEdgeSvgId));
		this.getOrCreateTextNodesSection().querySelectorAll("foreignObject[id]")?.forEach((textBox) => {
			if (!validLegendIds.has(textBox.id)) textBox.remove();
		});
		this.getOrCreateTextEdgesSection().querySelectorAll("polyline[id]")?.forEach((polyline) => {
			if (!validLegendEdgeIds.has(polyline.id)) polyline.remove();
		});
	}
	filterEdgeInfos(edges, viewBox, maxDisplayedSize, adaptiveTextZoom) {
		this.removeEdgeInfoItems(viewBox);
		const shouldRemoveSideInfos = maxDisplayedSize > adaptiveTextZoom.edgeSideLabelThreshold;
		const shouldRemoveMiddleInfo = maxDisplayedSize > Math.min(adaptiveTextZoom.edgeMiddleLabelThreshold, adaptiveTextZoom.edgeMiddleArrowThreshold);
		for (const edge of edges) {
			if (shouldRemoveSideInfos) {
				if (edge.edgeInfo1) this.getEdgeInfo(edge.edgeInfo1.svgId)?.remove();
				if (edge.edgeInfo2) this.getEdgeInfo(edge.edgeInfo2.svgId)?.remove();
			}
			if (shouldRemoveMiddleInfo && edge.edgeInfoMiddle) this.getEdgeInfo(edge.edgeInfoMiddle.svgId)?.remove();
		}
	}
	updateAdaptiveEdgeInfos(edges, viewBox, maxDisplayedSize, adaptiveTextZoom) {
		this.filterEdgeInfos(edges, viewBox, maxDisplayedSize, adaptiveTextZoom);
		this.createEdgesInfos(edges, maxDisplayedSize);
	}
	updateAdaptiveLegends(nodeList, maxDisplayedSize, adaptiveTextZoom) {
		if (maxDisplayedSize > adaptiveTextZoom.threshold) {
			this.textNodesSection?.replaceChildren();
			this.textEdgesSection?.replaceChildren();
			return;
		}
		this.filterLegends(nodeList);
		for (const node of nodeList) {
			const textNode = this.diagramMetadata?.textNodes.find((tNode) => tNode.svgId === node.legendSvgId);
			if (textNode) {
				const busNodes = this.diagramMetadata?.busNodes.filter((busNode) => busNode.vlNode == node.svgId) ?? [];
				this.createLegendBox(textNode, busNodes, node);
				this.createLegendEdge(textNode, busNodes, node);
			}
		}
	}
	adaptiveZoomViewboxUpdate(maxDisplayedSize) {
		const adaptiveTextZoom = this.nadViewerParameters.getAdaptiveTextZoom();
		if (maxDisplayedSize > Math.max(adaptiveTextZoom.threshold, adaptiveTextZoom.edgeSideLabelThreshold, adaptiveTextZoom.edgeMiddleLabelThreshold, adaptiveTextZoom.edgeMiddleArrowThreshold)) {
			this.edgeInfosSection?.replaceChildren();
			this.textEdgesSection?.replaceChildren();
			this.textNodesSection?.replaceChildren();
			return;
		}
		const containerRect = this.container.getBoundingClientRect();
		const viewBox = computeVisibleArea(this.getViewBox(), containerRect.width, containerRect.height);
		const containedElementList = this.getElementsInViewbox(viewBox, 50);
		const containedNodeList = containedElementList.nodes;
		const containedEdgeList = containedElementList.edges;
		this.updateAdaptiveLegends(containedNodeList, maxDisplayedSize, adaptiveTextZoom);
		this.updateAdaptiveEdgeInfos(containedEdgeList, viewBox, maxDisplayedSize, adaptiveTextZoom);
	}
	setJsonBranchStates(branchStates) {
		const branchStatesArray = JSON.parse(branchStates);
		this.setBranchStates(branchStatesArray);
	}
	buildGroupedEdgesIndexMap() {
		if (!this.groupedEdgesIndexMap) {
			this.groupedEdgesIndexMap = /* @__PURE__ */ new Map();
			for (const edge of this.diagramMetadata?.edges ?? []) if (edge.node1 !== edge.node2) {
				const key = getGroupedEdgesIndexKey(edge);
				const group = this.groupedEdgesIndexMap.get(key) ?? [];
				group.push(edge.equipmentId);
				this.groupedEdgesIndexMap.set(key, group);
			}
		}
		return this.groupedEdgesIndexMap;
	}
	setBranchStates(branchStates) {
		const groupedEdgesIndex = this.buildGroupedEdgesIndexMap();
		branchStates.forEach((branchState) => {
			if (!this.edgesMap.has(branchState.branchId)) {
				const edge = (this.diagramMetadata?.edges ?? []).find((edge) => edge.equipmentId == branchState.branchId);
				if (edge === void 0) {
					console.warn(`Skipping updating branch ${branchState.branchId} labels: branch not found`);
					return;
				}
				if (edge.node1 == edge.node2) {
					console.warn(`Skipping updating branch ${branchState.branchId} labels: not supported for loops`);
					return;
				}
				this.edgesMap.set(branchState.branchId, edge);
			}
			const edgeId = this.edgesMap.get(branchState.branchId)?.svgId ?? "-1";
			const edge = this.diagramMetadata?.edges.find((edge) => edge.svgId == edgeId);
			if (!edge) {
				console.warn(`Skipping updating branch ${branchState.branchId} label: edge metadata missing`);
				return;
			}
			this.setBranchBusConnection(edge, branchState.branchId, "1", branchState.connectedBus1);
			this.setBranchBusConnection(edge, branchState.branchId, "2", branchState.connectedBus2);
			let iEdge = 0;
			let nbGroupedEdges = 1;
			const groupedEdges = groupedEdgesIndex.get(getGroupedEdgesIndexKey(edge));
			if (groupedEdges && groupedEdges.length > 0) {
				const i = groupedEdges.indexOf(edge.equipmentId);
				if (i !== -1) {
					iEdge = i;
					nbGroupedEdges = groupedEdges.length;
				}
			}
			const halfEdges = this.getHalfEdges(edge, iEdge, nbGroupedEdges);
			if (branchState.connectedBus1 || branchState.connectedBus2) this.redrawBranchEdge(edge, halfEdges[0], halfEdges[1]);
			this.setBranchSideLabel(edge, halfEdges[0], edge.edgeInfo1, "1", branchState.value1);
			this.setBranchSideLabel(edge, halfEdges[1], edge.edgeInfo2, "2", branchState.value2);
			if (halfEdges[0]) this.setBranchSideConnection(branchState.branchId, "1", edgeId, branchState.connected1);
			if (halfEdges[1]) this.setBranchSideConnection(branchState.branchId, "2", edgeId, branchState.connected2);
		});
	}
	setJsonVoltageLevelStates(voltageLevelStates) {
		const voltageLevelStatesArray = JSON.parse(voltageLevelStates);
		this.setVoltageLevelStates(voltageLevelStatesArray);
	}
	setVoltageLevelStates(voltageLevelStates) {
		voltageLevelStates.forEach((vlState) => {
			const textNodeMetadata = this.diagramMetadata?.textNodes.find((tnm) => tnm.equipmentId == vlState.voltageLevelId);
			if (!textNodeMetadata) {
				console.warn(`Text node for ${vlState.voltageLevelId} not found`);
				return;
			}
			const textNodeElement = this.container.querySelector(`[id='${textNodeMetadata.svgId}']`);
			if (!textNodeElement) {
				console.warn(`Text node element ${textNodeMetadata.svgId} not found in DOM`);
				return;
			}
			const vlBusNodes = this.diagramMetadata?.busNodes.filter((bus) => bus.vlNode === textNodeMetadata.vlNode);
			if (!vlBusNodes || vlBusNodes.length === 0) {
				console.warn(`No bus nodes found for voltage level ${vlState.voltageLevelId}`);
				return;
			}
			const spans = textNodeElement.querySelectorAll("div span");
			vlState.busValue.forEach((busValue) => {
				const busNode = vlBusNodes.find((bus) => bus.equipmentId === busValue.busId);
				if (!busNode) return;
				const rowIndex = busNode.index;
				if (rowIndex < spans.length) {
					const div = spans[rowIndex].parentElement;
					if (div && div.childNodes.length > 1 && div.childNodes[div.childNodes.length - 1].nodeType === Node.TEXT_NODE) {
						const newLegend = `${busValue.voltage.toFixed(this.svgParameters.getVoltageValuePrecision())} kV / ${busValue.angle.toFixed(this.svgParameters.getAngleValuePrecision())}°`;
						div.childNodes[div.childNodes.length - 1].textContent = newLegend;
						busNode.legend = newLegend;
					}
				}
			});
		});
	}
	setBranchSideLabel(edge, halfEdge, edgeInfoMetadata, side, value, preserveExistingDirection = false) {
		if (!halfEdge) return;
		if (!edgeInfoMetadata) {
			edgeInfoMetadata = {
				svgId: crypto.randomUUID(),
				infoTypeB: "ActivePower"
			};
			if (side == "1") edge.edgeInfo1 = edgeInfoMetadata;
			else edge.edgeInfo2 = edgeInfoMetadata;
		}
		this.updateEdgeInfoMetadata(edgeInfoMetadata, value, preserveExistingDirection);
		const classes = (side == "1" ? edge.classes1 : edge.classes2) ?? [];
		const edgeInfo = this.getOrCreateEdgeInfo(edgeInfoMetadata, classes);
		if (!halfEdge.edgeInfoId) halfEdge.edgeInfoId = edgeInfo.id;
		if (edgeInfoMetadata.componentType) this.addBranchComponentElement(edgeInfo, edgeInfoMetadata.componentType);
		else {
			if (edgeInfoMetadata.direction || edgeInfoMetadata.directionB) this.addBranchArrowElement(edgeInfo, edgeInfoMetadata.direction ?? edgeInfoMetadata.directionB, edgeInfoMetadata.infoTypeB, 1);
			if (edgeInfoMetadata.directionA) this.addBranchArrowElement(edgeInfo, edgeInfoMetadata.directionA, edgeInfoMetadata.infoTypeA, 2);
		}
		this.addBranchLabelElement(edgeInfo, 1, edgeInfoMetadata.infoTypeB, edgeInfoMetadata.labelB);
		if (edgeInfoMetadata.labelA) this.addBranchLabelElement(edgeInfo, 2, edgeInfoMetadata.infoTypeA, edgeInfoMetadata.labelA);
		this.redrawEdgeArrowAndLabels(halfEdge, edgeInfo);
	}
	updateEdgeInfoMetadata(edgeInfoMetadata, value, preserveExistingDirection) {
		edgeInfoMetadata.labelB = typeof value === "number" ? value.toFixed(getEdgeInfoValuePrecision(edgeInfoMetadata.infoTypeB, this.svgParameters)) : value;
		if (!(preserveExistingDirection && (edgeInfoMetadata.directionB || edgeInfoMetadata.direction))) edgeInfoMetadata.direction = typeof value === "number" ? getArrowDirection(value) : void 0;
	}
	addBranchComponentElement(edgeInfo, componentType) {
		const component = getComponent(this.componentLibrary, componentType);
		if (component) {
			const edgeInfoComponent = this.getOrCreateEdgeInfoComponent(edgeInfo);
			const trans = new _svgdotjs_svg_js.Point(-component.size.width / 2, -component.size.height / 2);
			edgeInfoComponent.setAttribute("transform", "translate(" + getFormattedPoint(trans) + ")");
			edgeInfoComponent.classList.add(component.styleClass);
			component.subComponents.forEach((subComponent) => {
				getComponentPath(subComponent.fileName, this.nadViewerParameters.getSvgUrlResolver()).then((path) => edgeInfoComponent.appendChild(path));
			});
		}
	}
	addBranchArrowElement(edgeInfo, direction, type, i) {
		const arrowPath = getArrowPath(direction, this.svgParameters);
		if (arrowPath) {
			const edgeInfoArrow = this.getOrCreateEdgeInfoArrow(edgeInfo, i);
			edgeInfoArrow.setAttribute("d", arrowPath);
			edgeInfoArrow.classList.remove(...getEdgeInfoClasses());
			const edgeInfoDirectionClass = getEdgeInfoDirectionClass(direction);
			if (edgeInfoDirectionClass) edgeInfoArrow.classList.add(edgeInfoDirectionClass);
			const edgeInfoTypeClass = getEdgeInfoTypeClass(type);
			if (edgeInfoTypeClass) edgeInfoArrow.classList.add(edgeInfoTypeClass);
		}
	}
	setBranchMiddleLabel(edge, halfEdge1, halfEdge2, edgeInfoMetadata, showArrow = true, showLabel = true) {
		if (!halfEdge1 && !halfEdge2) return;
		if (!edgeInfoMetadata) {
			edgeInfoMetadata = {
				svgId: crypto.randomUUID(),
				infoTypeA: "Name"
			};
			edge.edgeInfoMiddle = edgeInfoMetadata;
		}
		const classes = [...edge.classes1 ?? [], ...edge.classes2 ?? []];
		const edgeInfo = this.getOrCreateEdgeInfo(edgeInfoMetadata, classes);
		if (showArrow) this.addBranchMiddleArrowOrComponent(edgeInfo, edgeInfoMetadata);
		if (showLabel) this.addBranchMiddleLabels(edgeInfo, edgeInfoMetadata);
		this.redrawMiddleEdgeArrowAndLabels(halfEdge1, halfEdge2, edgeInfo, showArrow ? edgeInfoMetadata.direction ?? edgeInfoMetadata.directionB : void 0, edgeInfoMetadata.directionA, showLabel && edgeInfoMetadata.labelA !== void 0 && edgeInfoMetadata.labelB !== void 0);
	}
	addBranchMiddleArrowOrComponent(edgeInfo, edgeInfoMetadata) {
		if (edgeInfoMetadata.componentType) {
			this.addBranchComponentElement(edgeInfo, edgeInfoMetadata.componentType);
			return;
		}
		if (edgeInfoMetadata.direction || edgeInfoMetadata.directionB) this.addBranchArrowElement(edgeInfo, edgeInfoMetadata.direction ?? edgeInfoMetadata.directionB, edgeInfoMetadata.infoTypeB, 1);
		if (edgeInfoMetadata.directionA) this.addBranchArrowElement(edgeInfo, edgeInfoMetadata.directionA, edgeInfoMetadata.infoTypeA, 2);
	}
	addBranchMiddleLabels(edgeInfo, edgeInfoMetadata) {
		let i = 1;
		if (edgeInfoMetadata.labelA && edgeInfoMetadata.labelB) this.addBranchLabelElement(edgeInfo, i++, edgeInfoMetadata.infoTypeB, edgeInfoMetadata.labelB);
		this.addBranchLabelElement(edgeInfo, i, edgeInfoMetadata.infoTypeA ?? edgeInfoMetadata.infoTypeB, edgeInfoMetadata.labelA ?? edgeInfoMetadata.labelB);
	}
	addBranchLabelElement(edgeInfo, i, type, label) {
		const branchLabelElement = this.getOrCreateEdgeInfoText(edgeInfo, i);
		branchLabelElement.classList.remove(...getEdgeInfoClasses());
		const edgeInfoClass = getEdgeInfoTypeClass(type);
		if (edgeInfoClass) branchLabelElement.classList.add(edgeInfoClass);
		branchLabelElement.innerHTML = getFormattedInfoLabel(label, type, this.svgParameters);
	}
	getOrCreateEdgeInfo(edgeInfoMetadata, classes) {
		const edgeInfo = this.getEdgeInfo(edgeInfoMetadata.svgId);
		if (edgeInfo) return edgeInfo;
		const newEdgeInfo = document.createElementNS("http://www.w3.org/2000/svg", "g");
		newEdgeInfo.id = edgeInfoMetadata.svgId;
		if (classes.length) newEdgeInfo.classList.add(...classes);
		this.edgeInfosSection?.appendChild(newEdgeInfo);
		return newEdgeInfo;
	}
	getOrCreateEdgeInfoArrow(edgeInfo, i) {
		let edgeInfoArrow = edgeInfo.querySelector("path:nth-of-type(" + i + ")");
		if (!edgeInfoArrow) {
			edgeInfoArrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
			edgeInfo.appendChild(edgeInfoArrow);
		}
		return edgeInfoArrow;
	}
	getOrCreateEdgeInfoText(edgeInfo, i) {
		let edgeInfoText = edgeInfo.querySelector("text:nth-of-type(" + i + ")");
		if (!edgeInfoText) {
			edgeInfoText = document.createElementNS("http://www.w3.org/2000/svg", "text");
			edgeInfo.appendChild(edgeInfoText);
		}
		return edgeInfoText;
	}
	getOrCreateEdgeInfoComponent(edgeInfo) {
		let edgeInfoComponent = edgeInfo.querySelector(":scope > g");
		if (!edgeInfoComponent) {
			edgeInfoComponent = document.createElementNS("http://www.w3.org/2000/svg", "g");
			edgeInfo.appendChild(edgeInfoComponent);
		}
		return edgeInfoComponent;
	}
	setBranchSideConnection(branchId, side, edgeId, connected) {
		if (connected == void 0) return;
		const halfEdge = this.getHalfEdgeNode(edgeId, side);
		if (halfEdge) if (connected) halfEdge.classList.remove("nad-disconnected");
		else halfEdge.classList.add("nad-disconnected");
		else console.warn("Skipping updating branch " + branchId + " side " + side + " status: edge not found");
	}
	/**
	* Updates the connection between a branch and a bus in the electrical network diagram
	* @param edge - the edge to be modified
	* @param branchId - the ID of the branch
	* @param side - The side of the branch to connect ('1' or '2')
	* @param busId - The ID of the target bus to connect to
	*/
	setBranchBusConnection(edge, branchId, side, busId) {
		if (!busId) return;
		const targetBusNode = this.diagramMetadata?.busNodes.find((busNode) => busNode.equipmentId === busId);
		if (!targetBusNode) {
			console.warn(`Skipping updating branch ${branchId} side ${side} status: Bus ${busId} not found in metadata`);
			return;
		}
		const currentBusNodeId = side === "1" ? edge.busNode1 : edge.busNode2;
		const currentBusNode = this.diagramMetadata?.busNodes.find((busNode) => busNode.svgId === currentBusNodeId);
		if (currentBusNode && currentBusNode.vlNode !== targetBusNode.vlNode) {
			console.warn(`Skipping updating branch ${branchId} side ${side} status: Cannot connect to bus from different voltage level`);
			return;
		}
		if (side === "1") edge.busNode1 = targetBusNode.svgId;
		else edge.busNode2 = targetBusNode.svgId;
		const vlElement = this.container.querySelector(`[id='${targetBusNode.vlNode}']`);
		if (!vlElement) {
			console.warn(`VoltageLevel ${targetBusNode.vlNode} not found`);
			return;
		}
		this.redrawVoltageLevelNode(vlElement, this.getEdgesMetadata(targetBusNode.vlNode));
	}
	onMouseRightDown(event) {
		const mousePosition = this.getMousePosition(event);
		const element = getRightClickableFrom(event.target) ?? null;
		let elementData = getRightClickableElementData(element?.id, getElementType(element), this.diagramMetadata?.nodes, this.diagramMetadata?.textNodes, this.diagramMetadata?.edges);
		if (!elementData && this.hoveredElement && this.existsNearbyHoveredElement(mousePosition)) {
			const hoverElement = getRightClickableFrom(this.hoveredElement) ?? null;
			elementData = getRightClickableElementData(hoverElement?.id, getElementType(hoverElement), this.diagramMetadata?.nodes, this.diagramMetadata?.textNodes, this.diagramMetadata?.edges);
		}
		if (!elementData) return;
		this.resetHoverCallback();
		this.onRightClickCallback?.(elementData.svgId, elementData.equipmentId, elementData.type, mousePosition);
	}
	zoomToFit() {
		const viewBox = getViewBox(this.diagramMetadata?.nodes, this.diagramMetadata?.textNodes, this.svgParameters);
		this.svgDraw?.viewbox(viewBox.x, viewBox.y, viewBox.width, viewBox.height);
	}
	zoomIn() {
		const zoom = this.svgDraw?.zoom() ?? 1;
		this.svgDraw?.zoom(1.1 * zoom);
	}
	zoomOut() {
		const zoom = this.svgDraw?.zoom() ?? 1;
		this.svgDraw?.zoom(.9 * zoom);
	}
	saveSvg() {
		this.addStyle();
		const userViewBox = {
			x: this.svgDraw?.viewbox().x ?? 0,
			y: this.svgDraw?.viewbox().y ?? 0,
			width: this.svgDraw?.viewbox().width ?? 0,
			height: this.svgDraw?.viewbox().height ?? 0
		};
		this.zoomToFit();
		const blobData = [this.getSvg() ?? ""];
		const blob = new Blob(blobData, { type: "image/svg+xml" });
		this.downloadFile(blob, "nad.svg");
		this.svgDraw?.viewbox(userViewBox.x, userViewBox.y, userViewBox.width, userViewBox.height);
		this.removeStyle();
	}
	downloadFile(blob, filename) {
		const a = document.createElement("a");
		a.download = filename;
		a.href = URL.createObjectURL(blob);
		a.click();
		a.remove();
	}
	addStyle() {
		if (this.svgParameters.getCssLocation() == CssLocationEnum.EXTERNAL_NO_IMPORT) {
			const styleElement = getStyle(document.styleSheets, this.svgDraw?.node);
			(this.svgDraw?.node.querySelector("g"))?.before(styleElement);
		}
	}
	removeStyle() {
		if (this.svgParameters.getCssLocation() == CssLocationEnum.EXTERNAL_NO_IMPORT) this.svgDiv.querySelector("style")?.remove();
	}
	savePng(backgroundColor) {
		this.copyPng(true, backgroundColor);
	}
	screenshot(backgroundColor) {
		this.copyPng(false, backgroundColor);
	}
	copyPng(copyToFile, backgroundColor) {
		this.addStyle();
		this.addBackgroundColor(backgroundColor);
		const svgXml = getSvgXml(this.getSvg());
		const image = new Image();
		image.src = svgXml;
		image.onload = async () => {
			const blob = getBlobFromPng(getPngFromImage(image));
			if (copyToFile) this.downloadFile(blob, "nad.png");
			else await this.copyToClipboard(blob);
		};
		this.removeBackgroundColor(backgroundColor);
		this.removeStyle();
	}
	addBackgroundColor(backgroundColor) {
		if (backgroundColor) this.svgDraw?.node.style.setProperty("background-color", backgroundColor);
	}
	removeBackgroundColor(backgroundColor) {
		if (backgroundColor) this.svgDraw?.node.style.removeProperty("background-color");
	}
	async copyToClipboard(blob) {
		await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]).then(() => {
			this.svgDiv.animate([{
				backgroundColor: "gray",
				offset: 0
			}, {
				backgroundColor: "white",
				offset: .5
			}], {
				duration: 500,
				iterations: 1
			});
		});
	}
	handleHighlightableElementHover(element, mousePosition) {
		if (isTextNode(element)) {
			const textNode = this.diagramMetadata?.textNodes.find((node) => node.svgId === element.id);
			if (textNode) {
				this.highlightRelatedElements(textNode);
				this.debounceToggleHoverCallback(true, mousePosition, textNode.equipmentId, ElementType[ElementType.TEXT_NODE]);
			}
		} else if (isVoltageLevelElement(element)) {
			const vlNode = this.diagramMetadata?.nodes.find((node) => node.svgId === element.id);
			if (vlNode) {
				this.highlightRelatedElements(vlNode);
				this.debounceToggleHoverCallback(true, mousePosition, vlNode.equipmentId, ElementType[ElementType.VOLTAGE_LEVEL]);
			}
		}
	}
	handleInjectionHover(element, mousePosition) {
		const injection = this.diagramMetadata?.injections?.find((inj) => inj.svgId === element.id);
		if (injection) {
			const equipmentId = injection.equipmentId ?? "";
			const equipmentType = injection.componentType ?? "";
			this.debounceToggleHoverCallback(true, mousePosition, equipmentId, equipmentType);
		}
	}
	handleEdgeHover(element, mousePosition) {
		const edge = this.diagramMetadata?.edges.find((edge) => edge.svgId === element.id);
		if (edge) {
			const equipmentId = edge.equipmentId ?? "";
			const edgeType = getStringEdgeType(edge) ?? "";
			this.debounceToggleHoverCallback(true, mousePosition, equipmentId, edgeType);
			if (this.bendLines) {
				if (this.bendableLines.includes(edge.svgId)) this.showEdgePreviewPoints(edge);
			}
		}
	}
	highlightRelatedElements(element) {
		if (!this.diagramMetadata) return;
		const vlNodeId = "vlNode" in element ? element.vlNode : element.svgId;
		const relatedBusNodes = this.diagramMetadata.busNodes.filter((busNode) => busNode.vlNode === vlNodeId);
		const relatedTextNode = this.diagramMetadata.textNodes.find((textNode) => textNode.vlNode === vlNodeId);
		relatedBusNodes.forEach((busNode) => this.addHighlightBusClass(busNode.svgId));
		if (relatedTextNode) this.addHighlightTextClass(relatedTextNode.svgId);
	}
	addHighlightBusClass(svgId) {
		const element = this.svgDiv.querySelector(`[id='${svgId}']`);
		if (element) element.classList.add("nad-busnode-highlight");
	}
	addHighlightTextClass(svgId) {
		const element = this.svgDiv.querySelector(`[id='${svgId}']`);
		if (element?.firstElementChild) element.firstElementChild.classList.add("nad-textnode-highlight");
	}
	clearHighlights() {
		const highlightedBusElements = this.svgDiv.querySelectorAll(".nad-busnode-highlight");
		const highlightedTextElements = this.svgDiv.querySelectorAll(".nad-textnode-highlight");
		highlightedBusElements.forEach((element) => {
			element.classList.remove("nad-busnode-highlight");
		});
		highlightedTextElements.forEach((element) => {
			element.classList.remove("nad-textnode-highlight");
		});
	}
	enableLineBending() {
		const linesPointsElement = document.createElementNS("http://www.w3.org/2000/svg", "g");
		linesPointsElement.classList.add("nad-line-points");
		const bendableEdges = getBendableLines(this.diagramMetadata?.edges);
		for (const edge of bendableEdges) if (edge.bendingPoints) {
			for (let index = 0; index < edge.bendingPoints.length; index++) this.addLinePoint(edge.svgId, index, new _svgdotjs_svg_js.Point(edge.bendingPoints[index].x, edge.bendingPoints[index].y), linesPointsElement);
			this.bendableLines.push(edge.svgId);
		} else this.bendableLines.push(edge.svgId);
		if (this.bendableLines.length > 0) {
			this.bendLines = true;
			this.svgDraw?.node.firstElementChild?.appendChild(linesPointsElement);
		}
	}
	addLinePoint(lineId, index, point, linePointsElement) {
		linePointsElement ??= this.svgDraw?.node.querySelector(".nad-line-points");
		const pointElement = createLinePointElement(lineId, point, index, false, this.linePointIndexMap);
		linePointsElement?.appendChild(pointElement);
		return pointElement;
	}
	disableLineBending() {
		(this.svgDraw?.node.querySelector(".nad-line-points"))?.remove();
		this.linePointIndexMap.clear();
		this.bendableLines = [];
		this.bendLines = false;
	}
	createEdgeBendPoint(bendableElem, event) {
		if (!bendableElem) return;
		this.ctm = this.svgDraw?.node.getScreenCTM();
		const mousePosition = this.getMousePosition(event);
		const pointElement = this.addLinePoint(bendableElem.id, -1, mousePosition);
		this.initDrag(pointElement);
		this.onDragStart();
		this.updateEdgeMetadata(pointElement, mousePosition, 0);
	}
	onStraightenStart(bendableElem) {
		if (!bendableElem) return;
		const edgeId = bendableElem.id ? this.linePointIndexMap.get(bendableElem.id)?.edgeId : "-1";
		if ((this.diagramMetadata?.edges.find((edge) => edge.svgId == edgeId))?.bendingPoints == void 0) return;
		this.disablePanzoom();
		this.straightenedElement = bendableElem;
	}
	updateEdgeMetadata(linePointElement, position, lineOperation) {
		const edge = this.diagramMetadata?.edges.find((edge) => edge.svgId == this.linePointIndexMap.get(linePointElement.id)?.edgeId);
		if (edge) if (position && lineOperation == 0) this.updateEdgeMetadataWhenBending(edge, linePointElement, position);
		else this.updateEdgeMetadataWhenStraightening(edge, linePointElement);
	}
	updateEdgeMetadataWhenBending(edge, linePointElement, position) {
		const index = this.linePointIndexMap.get(linePointElement.id)?.index;
		if (index == -1) {
			const node1 = this.diagramMetadata?.nodes.find((node) => node.svgId == edge.node1);
			const node2 = this.diagramMetadata?.nodes.find((node) => node.svgId == edge.node2);
			if (node1 && node2) {
				const linePoints = addPointToList(edge.bendingPoints?.slice(), new _svgdotjs_svg_js.Point(node1.x, node1.y), new _svgdotjs_svg_js.Point(node2.x, node2.y), position);
				edge.bendingPoints = linePoints.linePoints;
				this.linePointIndexMap.set(linePointElement.id, {
					edgeId: edge.svgId,
					index: linePoints.index
				});
				for (const [key, value] of this.linePointIndexMap) if (key !== linePointElement.id && value.edgeId == edge.svgId && value.index >= linePoints.index) value.index++;
			}
		} else if (edge.bendingPoints) edge.bendingPoints[index] = {
			x: round(position.x),
			y: round(position.y)
		};
		else edge.bendingPoints = [{
			x: round(position.x),
			y: round(position.y)
		}];
	}
	updateEdgeMetadataWhenStraightening(edge, linePointElement) {
		const index = this.linePointIndexMap.get(linePointElement.id)?.index ?? -1;
		if (edge.bendingPoints) {
			for (const [key, value] of this.linePointIndexMap) if (key !== linePointElement.id && value.edgeId == edge.svgId && value.index >= index) value.index--;
			edge.bendingPoints.splice(index, 1);
			if (edge.bendingPoints.length == 0) edge.bendingPoints = void 0;
		}
	}
	redrawBentLine(linePoint, lineOperation) {
		globalThis.getSelection()?.empty();
		this.initialPosition = getPosition(linePoint);
		const edgeId = linePoint.id ? this.linePointIndexMap.get(linePoint.id)?.edgeId : "-1";
		const edge = this.diagramMetadata?.edges.find((edge) => edge.svgId == edgeId);
		if (!edge || lineOperation == 0 && !edge.bendingPoints) return;
		if (!this.svgDiv.querySelector("[id='" + edgeId + "']")) return;
		const halfEdges = this.getHalfEdges(edge, 0, 1);
		this.redrawBranchEdge(edge, halfEdges[0], halfEdges[1]);
		this.redrawBothVoltageLevelNodes(edge);
		if (edge.bendingPoints && lineOperation == 0) {
			const index = this.linePointIndexMap.get(linePoint.id)?.index ?? 0;
			const position = new _svgdotjs_svg_js.Point(edge.bendingPoints[index].x, edge.bendingPoints[index].y);
			this.updateNodePosition(linePoint, position);
		} else {
			linePoint.remove();
			this.linePointIndexMap.delete(linePoint.id);
		}
	}
	getHalfEdges(edge, iEdge, groupedEdgesCount, point1, point2, initialPosition = this.initialPosition) {
		const invisibleSide = getInvisibleSide(edge);
		if (invisibleSide) {
			const visibleSide = invisibleSide == "1" ? "2" : "1";
			return getHalfVisibleHalfEdges(getPolylinePoints(this.getHalfEdgeNode(edge.svgId, visibleSide)), edge, visibleSide, groupedEdgesCount > 1, this.diagramMetadata, initialPosition, this.svgParameters);
		} else return getHalfEdges(edge, iEdge, groupedEdgesCount, this.diagramMetadata, this.svgParameters, point1, point2);
	}
	onStraightenEnd() {
		if (!this.straightenedElement) return;
		this.updateEdgeMetadata(this.straightenedElement, null, 1);
		this.redrawBentLine(this.straightenedElement, 1);
		this.callBendLineCallback(this.straightenedElement, 1);
		this.straightenedElement = null;
	}
	callBendLineCallback(linePointElement, lineOperation) {
		if (this.onBendLineCallback) {
			const edge = this.diagramMetadata?.edges.find((edge) => edge.svgId == this.linePointIndexMap.get(linePointElement.id)?.edgeId);
			if (edge) {
				const linePoints = edge.bendingPoints ? edge.bendingPoints.map((point) => new _svgdotjs_svg_js.Point(point.x, point.y)) : null;
				this.onBendLineCallback(edge.svgId, edge.equipmentId, getStringEdgeType(edge), linePoints, LineOperation[lineOperation]);
			}
		}
	}
	showEdgePreviewPoints(edge) {
		if (!edge.svgId) return;
		const previewPoints = this.calculateEdgeSegmentMidpoints(edge);
		if (previewPoints.length === 0) return;
		let previewContainer = this.svgDraw?.node.querySelector(".nad-edge-preview-points");
		if (!previewContainer) {
			previewContainer = document.createElementNS("http://www.w3.org/2000/svg", "g");
			previewContainer.classList.add("nad-edge-preview-points");
			this.svgDraw?.node.firstElementChild?.appendChild(previewContainer);
		}
		previewContainer.innerHTML = "";
		for (const [index, point] of previewPoints.entries()) {
			const previewPoint = createLinePointElement(edge.svgId, point, index, true);
			previewContainer?.appendChild(previewPoint);
		}
	}
	calculateEdgeSegmentMidpoints(edge) {
		if (!edge.node1 || !edge.node2) return [];
		const halfEdges = this.getHalfEdges(edge, 0, 1);
		if (!halfEdges[0] || !halfEdges[1]) return [];
		const midpoints = [];
		if (edge.bendingPoints && edge.bendingPoints.length > 0) {
			const previousPoint = halfEdges[0].edgePoints[0];
			midpoints.push(getMidPosition(previousPoint, new _svgdotjs_svg_js.Point(edge.bendingPoints[0].x, edge.bendingPoints[0].y)));
			for (let i = 0; i < edge.bendingPoints.length - 1; i++) {
				const current = new _svgdotjs_svg_js.Point(edge.bendingPoints[i].x, edge.bendingPoints[i].y);
				const next = new _svgdotjs_svg_js.Point(edge.bendingPoints[i + 1].x, edge.bendingPoints[i + 1].y);
				midpoints.push(getMidPosition(current, next));
			}
			const lastPoint = new _svgdotjs_svg_js.Point(edge.bendingPoints.at(-1).x, edge.bendingPoints.at(-1).y);
			midpoints.push(getMidPosition(lastPoint, halfEdges[1].edgePoints[0]));
		} else midpoints.push(getMidPosition(halfEdges[0].edgePoints[0], halfEdges[1].edgePoints[0]));
		return midpoints;
	}
	hideEdgePreviewPoints() {
		const previewContainer = this.svgDraw?.node.querySelector(".nad-edge-preview-points");
		if (previewContainer) previewContainer.remove();
	}
	syncViewBoxWith(others) {
		const viewers = Array.isArray(others) ? others : [others];
		const sync = () => {
			const viewBox = this.getViewBox();
			if (!viewBox) return;
			for (const other of viewers) {
				const otherViewBox = other.getViewBox();
				if (otherViewBox && (viewBox.x !== otherViewBox.x || viewBox.y !== otherViewBox.y || viewBox.width !== otherViewBox.width || viewBox.height !== otherViewBox.height)) other.setViewBox(viewBox);
			}
		};
		const svgElement = this.svgDraw?.node;
		if (svgElement) new MutationObserver(sync).observe(svgElement, {
			attributes: true,
			attributeFilter: ["viewBox"]
		});
	}
};
//#endregion
//#region src/single-line-diagram-viewer/single-line-diagram-viewer.ts
/**
* Copyright (c) 2022, RTE (http://www.rte-france.com)
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/
var SVG_NS = "http://www.w3.org/2000/svg";
var SWITCH_COMPONENT_TYPES = /* @__PURE__ */ new Set([
	"BREAKER",
	"DISCONNECTOR",
	"LOAD_BREAK_SWITCH"
]);
var FEEDER_COMPONENT_TYPES = /* @__PURE__ */ new Set([
	"LINE",
	"LOAD",
	"BATTERY",
	"BOUNDARY_LINE",
	"TIE_LINE",
	"GENERATOR",
	"VSC_CONVERTER_STATION",
	"LCC_CONVERTER_STATION",
	"HVDC_LINE",
	"CAPACITOR",
	"INDUCTOR",
	"STATIC_VAR_COMPENSATOR",
	"TWO_WINDINGS_TRANSFORMER",
	"TWO_WINDINGS_TRANSFORMER_LEG",
	"THREE_WINDINGS_TRANSFORMER",
	"THREE_WINDINGS_TRANSFORMER_LEG",
	"PHASE_SHIFT_TRANSFORMER",
	"PHASE_SHIFT_TRANSFORMER_LEG"
]);
var BUSBAR_SECTION_TYPES = /* @__PURE__ */ new Set(["BUSBAR_SECTION"]);
var MAX_ZOOM_LEVEL = 10;
var MIN_ZOOM_LEVEL_SUB = .1;
var MIN_ZOOM_LEVEL_VL = .5;
var ARROW_SVG = "<path class=\"arrow\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 24.0163L17.2358 25.3171L21.9837 20.5691L26.7317 25.3171L28 24.0163L21.9837 18L16 24.0163Z\"/>";
var ARROW_HOVER_SVG = "<path class=\"arrow-hover\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M22 35C29.1797 35 35 29.1797 35 22C35 14.8203 29.1797 9 22 9C14.8203 9 9 14.8203 9 22C9 29.1797 14.8203 35 22 35ZM17.2358 25.3171L16 24.0163L21.9837 18L28 24.0163L26.7317 25.3171L21.9837 20.5691L17.2358 25.3171Z\"/>";
var SingleLineDiagramViewer = class {
	container;
	svgContent;
	svgMetadata;
	width;
	height;
	originalWidth;
	originalHeight;
	onNextVoltageCallback;
	onBreakerCallback;
	onFeederCallback;
	onBusCallback;
	selectionBackColor;
	svgType;
	arrowSvg;
	arrowHoverSvg;
	svgDraw;
	onToggleHoverCallback;
	constructor(container, svgContent, svgMetadata, svgType, minWidth, minHeight, maxWidth, maxHeight, onNextVoltageCallback, onBreakerCallback, onFeederCallback, onBusCallback, selectionBackColor, onToggleHoverCallback) {
		this.container = container;
		this.svgType = svgType;
		this.svgContent = svgContent;
		this.svgMetadata = svgMetadata;
		this.onNextVoltageCallback = onNextVoltageCallback;
		this.onBreakerCallback = onBreakerCallback;
		this.onFeederCallback = onFeederCallback;
		this.onBusCallback = onBusCallback;
		this.selectionBackColor = selectionBackColor;
		this.width = 0;
		this.height = 0;
		this.originalWidth = 0;
		this.originalHeight = 0;
		this.init(minWidth, minHeight, maxWidth, maxHeight);
		this.arrowSvg = ARROW_SVG;
		this.arrowHoverSvg = ARROW_HOVER_SVG;
		this.addNavigationArrow();
		this.onToggleHoverCallback = onToggleHoverCallback;
	}
	setWidth(width) {
		this.width = width;
	}
	setOriginalWidth(originalWidth) {
		this.originalWidth = originalWidth;
	}
	setHeight(height) {
		this.height = height;
	}
	setOriginalHeight(originalHeight) {
		this.originalHeight = originalHeight;
	}
	setContainer(container) {
		this.container = container;
	}
	setSvgContent(svgContent) {
		this.svgContent = svgContent;
	}
	getWidth() {
		return this.width;
	}
	getOriginalWidth() {
		return this.originalWidth;
	}
	getHeight() {
		return this.height;
	}
	getOriginalHeight() {
		return this.originalHeight;
	}
	getContainer() {
		return this.container;
	}
	getSvgContent() {
		return this.svgContent;
	}
	getViewBox() {
		return this.svgDraw?.viewbox();
	}
	setViewBox(viewBox) {
		if (viewBox !== void 0 && viewBox !== null) this.svgDraw?.viewbox(viewBox);
	}
	refreshZoom() {
		if (!this.getContainer() || this.getContainer().clientWidth === 0 || this.getContainer().clientHeight === 0) return;
		const ratioX = this.getWidth() / this.getContainer().clientWidth;
		const ratioY = this.getHeight() / this.getContainer().clientHeight;
		const ratio = Math.max(ratioX, ratioY);
		const minZoom = ratio * (this.svgType === "voltage-level" ? MIN_ZOOM_LEVEL_VL : MIN_ZOOM_LEVEL_SUB);
		const maxZoom = ratio * MAX_ZOOM_LEVEL;
		if (this.svgDraw) {
			if (this.svgDraw.zoom() > maxZoom) this.svgDraw.zoom(maxZoom);
			if (this.svgDraw.zoom() < minZoom) this.svgDraw.zoom(minZoom);
		}
	}
	init(minWidth, minHeight, maxWidth, maxHeight) {
		if (!this.container || !this.svgContent) return;
		const dimensions = this.getDimensionsFromSvg();
		if (!dimensions) {
			console.warn("cannot·display·the·svg:·couldn't·get·its·size");
			return;
		}
		this.container.innerHTML = "";
		this.setOriginalWidth(dimensions.width);
		this.setOriginalHeight(dimensions.height);
		this.setWidth(dimensions.width < minWidth ? minWidth : Math.min(dimensions.width, maxWidth));
		this.setHeight(dimensions.height < minHeight ? minHeight : Math.min(dimensions.height, maxHeight));
		const draw = (0, _svgdotjs_svg_js.SVG)().addTo(this.container).size(this.width, this.height).viewbox(dimensions.viewbox.x, dimensions.viewbox.y, dimensions.viewbox.width, dimensions.viewbox.height).panZoom({
			panning: true,
			zoomMin: this.svgType === "voltage-level" ? MIN_ZOOM_LEVEL_VL : MIN_ZOOM_LEVEL_SUB,
			zoomMax: MAX_ZOOM_LEVEL,
			zoomFactor: this.svgType === "voltage-level" ? .3 : .15,
			margins: {
				top: 100,
				left: 100,
				right: 100,
				bottom: 100
			}
		});
		const drawnSvg = draw.svg(this.svgContent).node.firstElementChild;
		drawnSvg.style.overflow = "visible";
		const firstChild = draw.node.firstChild;
		firstChild.removeAttribute("viewBox");
		firstChild.removeAttribute("width");
		firstChild.removeAttribute("height");
		const svgWidth = dimensions.width;
		const svgHeight = dimensions.height;
		if (svgWidth > maxWidth || svgHeight > maxHeight) {
			const newLvlX = svgWidth / maxWidth;
			const newLvlY = svgHeight / maxHeight;
			const xOrigin = dimensions.viewbox.x;
			const yOrigin = dimensions.viewbox.y;
			if (newLvlX > newLvlY) {
				const offsetY = (maxHeight - svgHeight) / newLvlX;
				draw.zoom(1, new _svgdotjs_svg_js.Point(xOrigin, (yOrigin + maxHeight - offsetY) / 2));
			} else {
				const offsetX = (maxWidth - svgWidth) / newLvlY;
				draw.zoom(1, new _svgdotjs_svg_js.Point((xOrigin + maxWidth - offsetX) / 2, yOrigin));
			}
		}
		draw.on("panStart", () => {
			draw.node.style.cursor = "move";
		});
		draw.on("panEnd", () => {
			draw.node.style.cursor = "default";
		});
		this.addSwitchesHandler();
		this.addFeedersHandler();
		this.addEquipmentsPopover();
		this.addBusHandler();
		this.svgDraw = draw;
	}
	getDimensionsFromSvg() {
		const result = this.svgContent.match("<svg[^>]*>");
		if (result === null || result.length === 0) return null;
		const emptiedSvgContent = result[0] + "</svg>";
		const svg = new DOMParser().parseFromString(emptiedSvgContent, "image/svg+xml").getElementsByTagName("svg")[0];
		const viewbox = svg.viewBox.baseVal;
		viewbox.x -= 20;
		viewbox.y -= 20;
		viewbox.width += 40;
		viewbox.height += 40;
		let width = Number(svg.getAttribute("width"));
		let height = Number(svg.getAttribute("height"));
		width = width == 0 ? viewbox.width : width + 40;
		height = height == 0 ? viewbox.height : height + 40;
		return {
			width,
			height,
			viewbox
		};
	}
	addNavigationArrow() {
		if (this.onNextVoltageCallback !== null) {
			let navigable = this.svgMetadata?.nodes.filter((el) => el.nextVId);
			let vlList = this.svgMetadata?.nodes.map((element) => element.vid);
			vlList = vlList?.filter((element, index) => element !== "" && vlList?.indexOf(element) === index);
			navigable = navigable?.filter((element) => {
				return vlList?.indexOf(element.nextVId) === -1;
			});
			const highestY = /* @__PURE__ */ new Map();
			const lowestY = /* @__PURE__ */ new Map();
			let y;
			navigable?.forEach((element) => {
				const elementById = this.container.querySelector("#" + element.id);
				if (elementById != null) {
					const ys = (elementById?.getAttribute("transform")?.split(","))?.[1]?.match(/\d+/)?.[0];
					if (ys !== void 0) {
						y = Number.parseInt(ys, 10);
						if (highestY.get(element.vid) === void 0 || y > highestY.get(element.vid)) highestY.set(element.vid, y);
						if (lowestY.get(element.vid) === void 0 || y < lowestY.get(element.vid)) lowestY.set(element.vid, y);
					}
				}
			});
			navigable?.forEach((element) => {
				const elementById = this.container.querySelector("#" + element.id);
				if (elementById != null) {
					const xs = (elementById?.getAttribute("transform")?.split(","))?.[0]?.match(/\d+/)?.[0];
					if (xs !== void 0) {
						const x = Number.parseInt(xs, 10);
						const feederWidth = this.svgMetadata?.components.find((comp) => comp.type === element.componentType)?.size.width || 0;
						this.createSvgArrow(elementById, element.direction, x + feederWidth / 2, highestY.get(element.vid), lowestY.get(element.vid));
					}
				}
			});
		}
	}
	setArrowsStyle = (target, color1, color2) => {
		const pe1 = target.querySelector(".arrow");
		const pe2 = target.querySelector(".arrow-hover");
		if (pe1 !== null) pe1.style.fill = color1;
		if (pe2 !== null) pe2.style.fill = color2;
	};
	createSvgArrow(element, position, x, highestY, lowestY) {
		const svgInsert = element?.parentElement;
		if (svgInsert !== void 0 && svgInsert !== null) {
			const group = document.createElementNS(SVG_NS, "g");
			const svgMetadata = this.svgMetadata;
			let y;
			if (position === "TOP") {
				y = lowestY - 65;
				x = x - 22;
			} else {
				y = highestY + 65;
				x = x + 22;
			}
			if (position === "BOTTOM") group.setAttribute("transform", "translate(" + x + "," + y + ") rotate(180)");
			else group.setAttribute("transform", "translate(" + x + "," + y + ")");
			group.innerHTML = this.arrowSvg + this.arrowHoverSvg;
			svgInsert.appendChild(group);
			group.style.cursor = "pointer";
			this.setArrowsStyle(group, "currentColor", this.selectionBackColor);
			let dragged = false;
			group.addEventListener("mousedown", () => {
				dragged = false;
			});
			group.addEventListener("mousemove", () => {
				dragged = true;
			});
			group.addEventListener("mouseup", (event) => {
				if (dragged || event.button !== 0) return;
				const meta = svgMetadata?.nodes.find((other) => other.id === element.id);
				if (meta !== void 0 && meta !== null) this.onNextVoltageCallback?.(meta.nextVId, event);
			});
			group.addEventListener("mouseenter", (e) => {
				this.setArrowsStyle(e.target, this.selectionBackColor, "currentColor");
			});
			group.addEventListener("mouseleave", (e) => {
				this.setArrowsStyle(e.target, "currentColor", this.selectionBackColor);
			});
		}
	}
	addSwitchesHandler() {
		if (this.onBreakerCallback != null) (this.svgMetadata?.nodes.filter((element) => SWITCH_COMPONENT_TYPES.has(element.componentType)))?.forEach((aSwitch) => {
			const domEl = this.container.querySelector("#" + aSwitch.id);
			if (domEl !== null) {
				domEl.style.cursor = "pointer";
				let dragged = false;
				domEl.addEventListener("mousedown", () => {
					dragged = false;
				});
				domEl.addEventListener("mousemove", () => {
					dragged = true;
				});
				domEl.addEventListener("mouseup", (event) => {
					if (dragged || event.button !== 0) return;
					const switchId = aSwitch.equipmentId;
					const open = aSwitch.open;
					this.onBreakerCallback?.(switchId, !open, event.currentTarget);
				});
			}
		});
	}
	addFeederSelectionRect(svgText, backgroundColor) {
		svgText.style.setProperty("fill", backgroundColor);
		const selectionBackgroundColor = "currentColor";
		const selectionPadding = 4;
		const bounds = svgText.getBBox();
		const selectionRect = document.createElementNS(SVG_NS, "rect");
		selectionRect.setAttribute("class", "sld-label-selection");
		const style = getComputedStyle(svgText);
		const padding_top = Number.parseInt(style.paddingTop);
		const padding_left = Number.parseInt(style.paddingLeft);
		const padding_right = Number.parseInt(style.paddingRight);
		const padding_bottom = Number.parseInt(style.paddingBottom);
		selectionRect.setAttribute("stroke-width", "0");
		selectionRect.setAttribute("x", (bounds.x - padding_left - selectionPadding).toString());
		selectionRect.setAttribute("y", (bounds.y - padding_top - selectionPadding).toString());
		selectionRect.setAttribute("width", (bounds.width + padding_left + padding_right + 8).toString());
		selectionRect.setAttribute("height", (bounds.height + padding_top + padding_bottom + 8).toString());
		selectionRect.setAttribute("fill", selectionBackgroundColor);
		selectionRect.setAttribute("rx", selectionPadding.toString());
		if (svgText.hasAttribute("transform")) {
			const transformAttribute = svgText.getAttribute("transform");
			if (transformAttribute !== null) selectionRect.setAttribute("transform", transformAttribute);
		}
		svgText.parentNode?.insertBefore(selectionRect, svgText);
	}
	addFeedersHandler() {
		if (this.onFeederCallback != null) {
			const showFeederSelection = (svgText, colorSelected) => {
				if (svgText.parentElement !== null) {
					if (svgText.parentElement.getElementsByClassName("sld-label-selection").length === 0) this.addFeederSelectionRect(svgText, colorSelected);
				}
			};
			const hideFeederSelection = (svgText) => {
				svgText.style.removeProperty("fill");
				if (svgText.parentElement !== null && svgText.parentNode !== null) {
					const selectionRect = svgText.parentElement.getElementsByClassName("sld-label-selection");
					if (selectionRect.length !== 0) selectionRect[0].remove();
				}
			};
			(this.svgMetadata?.nodes.filter((element) => {
				return element.vid !== "" && FEEDER_COMPONENT_TYPES.has(element.componentType);
			}))?.forEach((feeder) => {
				const svgText = this.container?.querySelector("#" + feeder.id)?.querySelector("text[class=\"sld-label\"]");
				if (svgText !== void 0 && svgText !== null) {
					svgText.style.cursor = "pointer";
					svgText.addEventListener("mouseenter", () => {
						showFeederSelection(svgText, this.selectionBackColor);
					});
					svgText.addEventListener("mouseleave", () => {
						hideFeederSelection(svgText);
					});
					svgText.addEventListener("contextmenu", (event) => {
						event.preventDefault();
						event.stopPropagation();
						this.onFeederCallback?.(feeder.equipmentId, feeder.componentType, feeder.id, event.x, event.y);
					});
				}
			});
		}
	}
	addEquipmentsPopover() {
		this.svgMetadata?.nodes?.forEach((equipment) => {
			const svgLabel = (this.container?.querySelector("#" + equipment.id))?.querySelector("text[class=\"sld-label\"]");
			if (svgLabel) {
				svgLabel.addEventListener("mouseover", (event) => {
					this.onToggleHoverCallback?.(true, event.currentTarget, equipment.equipmentId, equipment.componentType);
				});
				svgLabel.addEventListener("mouseout", () => {
					this.onToggleHoverCallback?.(false, null, "", "");
				});
			}
		});
	}
	addBusHandler() {
		(this.svgMetadata?.nodes.filter((element) => BUSBAR_SECTION_TYPES.has(element.componentType)))?.forEach((bus) => {
			const svgBus = this.container?.querySelector("#" + bus.id);
			if (svgBus) {
				svgBus.style.cursor = "pointer";
				svgBus.addEventListener("contextmenu", (event) => {
					event.preventDefault();
					event.stopPropagation();
					this.onBusCallback?.(bus.equipmentId, bus.id, event.x, event.y);
				});
			}
		});
	}
};
//#endregion
exports.LayoutParameters = LayoutParameters;
exports.NetworkAreaDiagramViewer = NetworkAreaDiagramViewer;
exports.SingleLineDiagramViewer = SingleLineDiagramViewer;
exports.SvgParameters = SvgParameters;
