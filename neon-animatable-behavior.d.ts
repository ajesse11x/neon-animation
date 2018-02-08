/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   neon-animatable-behavior.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />

declare namespace Polymer {

  /**
   * `Polymer.NeonAnimatableBehavior` is implemented by elements containing animations for use with
   * elements implementing `Polymer.NeonAnimationRunnerBehavior`.
   */
  interface NeonAnimatableBehavior {

    /**
     * Animation configuration. See README for more info.
     */
    animationConfig: object|null|undefined;

    /**
     * Convenience property for setting an 'entry' animation. Do not set `animationConfig.entry`
     * manually if using this. The animated node is set to `this` if using this property.
     */
    entryAnimation: string|null|undefined;

    /**
     * Convenience property for setting an 'exit' animation. Do not set `animationConfig.exit`
     * manually if using this. The animated node is set to `this` if using this property.
     */
    exitAnimation: string|null|undefined;
    _entryAnimationChanged(): any;
    _exitAnimationChanged(): any;
    _copyProperties(config1: any, config2: any): any;
    _cloneConfig(config: any): any;
    _getAnimationConfigRecursive(type: any, map: any, allConfigs: any): any;

    /**
     * An element implementing `Polymer.NeonAnimationRunnerBehavior` calls this method to configure
     * an animation with an optional type. Elements implementing `Polymer.NeonAnimatableBehavior`
     * should define the property `animationConfig`, which is either a configuration object
     * or a map of animation type to array of configuration objects.
     */
    getAnimationConfig(type: any): any;
  }

  const NeonAnimatableBehavior: object;
}
