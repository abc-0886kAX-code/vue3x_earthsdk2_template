/*
 * @FilePath: \vue3x_earthsdk2_template\src\biz\EarthSDK2\entity\Mapview.js
 * @Author: abc-0886kAX-code
 * @Date: 2024-08-21 10:54:47
 * @LastEditors: abc-0886kAX-code
 * @LastEditTime: 2024-08-21 11:05:06
 * @Description:
 */
import { ESObjectsManager } from 'esobjs-xe2-plugin/dist-node/esobjs-xe2-plugin-main';
import { CzmBoxEntity } from 'xbsj-xe2/dist-node/xe2-cesium-objects';

export class Mapview extends ESObjectsManager {
  constructor(config) {
    super();

    this.json = config;

    const box = this._box;
    if (box) {
      box.position = [116.39, 39.9, 100];
      box.dimensions = [2000000, 2000000, 2000000];
      box.fill = false;
      box.outline = true;
      box.outlineColor = [1, 1, 0, 1];
    }
  }
}
