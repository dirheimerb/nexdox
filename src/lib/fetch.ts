// Fetch uploading a file
export async function upload(formData: FormData) {
  try {
    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    console.log('Success: ', result);
  } catch (error) {
    console.error('Error: ', error);
  }
}

export type Observable<T> = {
  getReader(): ReadableStreamDefaultReader<T>;
};

export async function extractFirst<T>(o: Observable<T>): Promise<T> {
  const reader = o.getReader();
  const { value, done } = await reader.read();
  if (done) {
    throw new Error('Observable finished without emitting any items');
  }
  reader.releaseLock();
  return value!;
}

export async function fetchText(url: string) {
  const response = await fetch(url);
  const reader = response.body?.getReader();
  let rctext = '';
  const decoder = new TextDecoder('utf-8');
  while (true) {
    const { value: chunk, done: isDone } = await reader!.read();
    if (isDone) return rctext;
    rctext += decoder.decode(chunk);
  }
}

async function streamReadableWebToString(
  readableWeb: ReadableStream,
): Promise<string> {
  let str: string = '';
  const reader = readableWeb.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    str += value;
  }
  return str;
}

export async function* makeTextFileLineIterator(fileURL: string) {
  const response = await fetch(fileURL);
  const reader = response.body?.getReader();
  let text = '';
  const decoder = new TextDecoder();
  while (true) {
    const { value: chunk, done: readerDone } = await reader!.read();
    if (readerDone) return text;
    text += decoder.decode(chunk);
    const lines = text.split('\n');
    text = lines.pop()!;
    for (const line of lines) {
      yield line;
    }
    if (text) {
      yield text;
    }
  }
}

export async function toString(
  readable: ReadableStream<Uint8Array>,
): Promise<string> {
  return new Promise((res, rej) => {
    const reader = readable
      .pipeThrough(new window.TextDecoderStream())
      .getReader();
    const chunks: string[] = [];
    reader.read().then(function readValue({ done, value }) {
      if (done) {
        res(chunks.join());
      } else {
        chunks.push(value);
        reader.read().then(readValue);
      }
    });
  });
}
