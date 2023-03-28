export interface NdefListenerOptions {
    /**
     * iOS only (for now).
     * Default false.
     */
    stopAfterFirstRead?: boolean;
    /**
     * On iOS the scan UI can show a scan hint (fi. "Scan a tag").
     * By default no hint is shown.
     */
    scanHint?: string;
  }
  
  export interface TextRecord {
    /**
     * String of text to encode.
     */
    text: string;
    /**
     * ISO/IANA language code. Examples: 'fi', 'en-US'.
     * Default 'en'.
     */
    languageCode?: string;
    /**
     * Default [].
     */
    id?: number[];
  }
  
  export interface UriRecord {
    /**
     * String representing the uri to encode.
     */
    uri: string;
    /**
     * Default [].
     */
    id?: number[];
  }
  
  export interface WriteTagOptions {
    textRecords?: TextRecord[];
    uriRecords?: UriRecord[];
  }
  
  export interface NfcTagData {
    id?: number[];
    techList?: string[];
  }
  
  export interface NfcNdefRecord {
    id: number[];
    tnf: number;
    type: number;
    payload: string;
    payloadAsHexString: string;
    payloadAsStringWithPrefix: string;
    payloadAsString: string;
  }
  
  export interface NfcNdefData extends NfcTagData {
    message: NfcNdefRecord[];
    /**
     * Android only
     */
    type?: string;
    /**
     * Android only
     */
    maxSize?: number;
    /**
     * Android only
     */
    writable?: boolean;
    /**
     * Android only
     */
    canMakeReadOnly?: boolean;
  }