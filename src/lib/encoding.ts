/**
 * TextDecoder
 * TextEncoder
 */

export class Encoding {
  utf8decoder: TextDecoder;
  encoder: TextEncoder;

  constructor() {
    this.utf8decoder = new TextDecoder();
    this.encoder = new TextEncoder();
  }

  decode(data: Uint8Array): string {
    return this.utf8decoder.decode(data);
  }

  encode(data: string): Uint8Array {
    return this.encoder.encode(data);
  }

  decodeStream(): TextDecoderStream {
    return new TextDecoderStream();
  }

  encodeStream(): TextEncoderStream {
    return new TextEncoderStream();
  }
}
