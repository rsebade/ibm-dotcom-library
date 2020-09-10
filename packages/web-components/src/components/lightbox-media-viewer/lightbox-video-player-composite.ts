/**
 * @license
 *
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html, property, customElement } from 'lit-element';
import on from 'carbon-components/es/globals/js/misc/on';
import ddsSettings from '@carbon/ibmdotcom-utilities/es/utilities/settings/settings.js';
import ifNonNull from 'carbon-web-components/es/globals/directives/if-non-null.js';
import { VideoData } from '../../globals/services-store/types/videoPlayerAPI';
import ModalRenderMixin from '../../globals/mixins/modal-render';
import Handle from '../../globals/internal/handle';
import DDSVideoPlayerComposite from '../video-player/video-player-composite';
import '../modal/modal';
import '../modal/modal-close-button';
import './lightbox-video-player';
import styles from './lightbox-video-player-composite.scss';

const { stablePrefix: ddsPrefix } = ddsSettings;

/**
 * Component that renders lightbox media viewer for video from its metadata, etc.
 *
 * @element dds-lightbox-video-player-composite
 */
@customElement(`${ddsPrefix}-lightbox-video-player-composite`)
class DDSLightboxMediaViewerComposite extends ModalRenderMixin(DDSVideoPlayerComposite) {
  /**
   * The handle for the listener of `${ddsPrefix}-modal-closed` event.
   */
  private _hCloseModal: Handle | null = null;

  /**
   * The handler of `${ddsPrefix}-modal-closed` event from `<dds-modal>`.
   */
  private _handleCloseModal = () => {
    const { embeddedVideos = {}, videoId } = this;
    const { [videoId]: currentEmbeddedVideo } = embeddedVideos;
    if (currentEmbeddedVideo) {
      currentEmbeddedVideo.sendNotification('doStop');
    }
  };

  /**
   * The video player.
   */
  protected get _videoPlayer() {
    const { selectorVideoPlayer } = this.constructor as typeof DDSLightboxMediaViewerComposite;
    return (this.modalRenderRoot as Element)?.querySelector?.(selectorVideoPlayer);
  }

  // eslint-disable-next-line class-methods-use-this
  get autoPlay() {
    return true; // Lock `autoPlay` to be `true`
  }

  // @ts-ignore
  // eslint-disable-next-line class-methods-use-this, no-empty-function
  set autoPlay(value) {} // Lock `autoPlay` to be `true`

  /**
   * `true` if the modal should be open.
   */
  @property({ type: Boolean, reflect: true })
  open = false;

  connectedCallback() {
    super.connectedCallback();
    this.modalRenderRoot = this.createModalRenderRoot(); // Creates modal render root up-front to hook the event listener
    // Manually hooks the event listeners on the modal render root to make the event names configurable
    this._hCloseModal = on(
      this.modalRenderRoot,
      (this.constructor as typeof DDSLightboxMediaViewerComposite).eventCloseModal,
      this._handleCloseModal as EventListener
    );
  }

  disconnectedCallback() {
    if (this._hCloseModal) {
      this._hCloseModal = this._hCloseModal.release();
    }
    super.disconnectedCallback();
  }

  renderModal() {
    const { formatCaption, formatDuration, hideCaption, open, videoData = {}, videoId } = this;
    const { [videoId]: currentVideoData = {} as VideoData } = videoData;
    const { description, duration, name } = currentVideoData;
    return html`
      <dds-modal ?open="${open}" expressive-size="full-width">
        <dds-modal-close-button></dds-modal-close-button>
        <dds-lightbox-video-player
          description="${ifNonNull(description)}"
          duration="${ifNonNull(duration)}"
          name="${ifNonNull(name)}"
          ?hide-caption="${hideCaption}"
          .formatCaption="${ifNonNull(formatCaption)}"
          .formatDuration="${ifNonNull(formatDuration)}"
        >
        </dds-lightbox-video-player>
      </dds-modal>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  renderLightDOM() {
    return html``;
  }

  /**
   * A selector selecting the video player component.
   */
  static get selectorVideoPlayer() {
    return `${ddsPrefix}-lightbox-video-player`;
  }

  /**
   * The name of the custom event fired after the modal is closed upon a user gesture.
   */
  static get eventCloseModal() {
    return `${ddsPrefix}-modal-closed`;
  }

  static styles = styles; // `styles` here is a `CSSResult` generated by custom WebPack loader
}

export default DDSLightboxMediaViewerComposite;
